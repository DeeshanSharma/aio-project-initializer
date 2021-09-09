import chalk from 'chalk';
import execa from 'execa';
import * as fs from 'fs';
import * as fsExtra from 'fs-extra';
import Listr from 'listr';
import * as path from 'path';
import generateFile from './generateFile';
import getUserInput from './getUserInput';

const runTasks = async () => {
  const { language, projectType, isSass, packageManager } = await getUserInput();

  const tasks = new Listr(
    [
      {
        title: chalk`{yellowBright Initializing Git repository}`,
        task: (ctx, task) =>
          execa('git', ['init']).then(() => {
            task.title = chalk`{greenBright Initialized Git Repository}`;
          }),
      },
      {
        title: chalk`{yellowBright Generating .gitignore file}`,
        task: (ctx, task) =>
          generateFile(task, '.gitignore', 'node_modules\ndist\nbuild\n.env\n.yarn/*\n!.yarn/releases'),
      },
      {
        title: chalk`{yellowBright Initializing Back End}`,
        enabled: () => projectType === 'back',
        task: (ctx, task) => {
          switch (language) {
            case 'js':
              fsExtra.copy(path.resolve(__filename, '../../../templates/server/js'), '.', (err) => {
                if (err) console.log(err);
              });
              task.title = chalk`{greenBright Back End Initialized}`;
            case 'ts':
              fsExtra.copy(path.resolve(__filename, '../../../templates/server/ts'), '.', (err) => {
                if (err) console.log(err);
              });
              task.title = chalk`{greenBright Back End Initialized}`;
          }
        },
      },
      {
        title: chalk`{yellowBright Initializing Front End}`,
        enabled: () => projectType === 'front',
        task: async (ctx, task) => {
          fsExtra.copy(path.resolve(__filename, '../../../templates/client/common'), '.', (err) => {
            if (err) console.log(err);
          });
          switch (language) {
            case 'js':
              try {
                fsExtra.copySync(path.resolve(__filename, '../../../templates/client/js'), '.');
                setTimeout(() => {
                  fs.readdirSync(path.resolve('src')).forEach((file) => {
                    if (file.endsWith('.tsx')) {
                      fs.renameSync(
                        `${path.resolve('src')}/${file}`,
                        `${path.resolve('src')}/${file.replace('.tsx', '.jsx')}`
                      );
                    }
                    if (file.endsWith('.d.ts')) fs.rmSync(path.join(path.resolve('src'), file));
                  });
                }, 1000);
                task.title = chalk`{greenBright Front End Initialized}`;
              } catch (err) {
                console.log(err);
              }
            case 'ts':
              fsExtra.copy(path.resolve(__filename, '../../../templates/client/ts'), '.', (err) => {
                if (err) console.log(err);
              });
              task.title = chalk`{greenBright Front End Initialized}`;
          }
        },
      },
      {
        title: chalk`{yellowBright Initializing Full Stack Project}`,
        enabled: () => projectType === 'full',
        task: (parentCtx, parentTask) =>
          new Listr(
            [
              {
                title: chalk`{yellowBright Initializing Back End}`,
                task: (ctx, task) => {
                  switch (language) {
                    case 'js':
                      return fsExtra.copy(path.resolve(__filename, '../../../templates/server/js'), '.', (err) => {
                        if (err) console.log(err);
                        task.title = chalk`{greenBright Back End Initialized}`;
                      });
                    case 'ts':
                      return fsExtra.copy(path.resolve(__filename, '../../../templates/server/ts'), '.', (err) => {
                        if (err) console.log(err);
                        task.title = chalk`{greenBright Back End Initialized}`;
                      });
                  }
                },
              },
              {
                title: chalk`{yellowBright Initializing Front End}`,
                task: (ctx, task) => {
                  try {
                    fsExtra.copySync(
                      path.resolve(__filename, '../../../templates/client/common'),
                      path.resolve('client')
                    );
                  } catch (err) {
                    console.log(err);
                  }
                  fs.readdirSync(path.resolve(__filename, `../../../templates/client/${language}`)).forEach((file) => {
                    fsExtra.copy(
                      path.resolve(__filename, `../../../templates/client/${language}/${file}`),
                      `${path.resolve('client')}/${file}`,
                      (err) => {
                        if (err) console.log(err);
                      }
                    );
                  });
                  if (language === 'js') {
                    fs.readdirSync(path.resolve('client/src')).forEach((file) => {
                      if (file.endsWith('.tsx')) {
                        fs.renameSync(
                          `${path.resolve('client/src')}/${file}`,
                          `${path.resolve('client/src')}/${file.replace('.tsx', '.jsx')}`
                        );
                      }
                      if (file.endsWith('.d.ts')) fs.rmSync(path.resolve('client/src') + `/${file}`);
                    });
                  }
                  task.title = chalk`{greenBright Front End Initialized}`;
                  parentTask.title = chalk`{greenBright Full Stack Project Initialized}`;
                },
              },
            ],
            { exitOnError: false }
          ),
      },
      {
        title: chalk`{yellowBright Installing project dependencies.}`,
        task: async (globalCtx, parentTask) =>
          new Listr(
            [
              {
                title: chalk`{yellowBright Installing project dependencies using your favorite package manager ${packageManager}}`,
                enabled: () => packageManager === 'npm',
                task: async (ctx, task) => {
                  try {
                    await execa.command('npm i', { detached: true });
                    if (projectType === 'full') {
                      await execa.command('npm i', { detached: true, cwd: path.resolve('client') });
                    }
                    task.title = chalk`{greenBright All project dependencies installed using ${packageManager}}`;
                    parentTask.title = chalk`{greenBright Project dependencies installed}`;
                  } catch (err) {
                    console.log(err);
                  }
                },
              },
              {
                title: chalk`{yellowBright Installing project dependencies using your favorite package manager ${packageManager}}`,
                enabled: () => packageManager === 'yarn',
                task: async (ctx, task) => {
                  try {
                    await execa.command('yarn', { detached: true });
                    if (projectType === 'full') {
                      await execa.command('yarn', { detached: true, cwd: path.resolve('client') });
                    }
                    task.title = chalk`{greenBright All project dependencies installed using ${packageManager}}`;
                    parentTask.title = chalk`{greenBright Project dependencies installed}`;
                  } catch (err) {
                    console.log(err);
                  }
                },
              },
            ],
            { exitOnError: false }
          ),
      },
      {
        title: chalk`{yellowBright Installing Sass dependencies for Front End}`,
        enabled: () => isSass && packageManager === 'yarn',
        skip: () => projectType === 'back',
        task: (ctx, task) => {
          switch (projectType) {
            case 'front':
              return execa
                .command('yarn add -D sass-loader')
                .then(() => (task.title = chalk`{greenBright Sass dependencies for Front End}`));
            case 'full':
              return execa
                .command('yarn add -D sass-loader', { cwd: path.resolve('client') })
                .then(() => (task.title = chalk`{greenBright Sass dependencies for Front End}`));
          }
        },
      },
      {
        title: chalk`{yellowBright Installing Sass dependencies for Front End}`,
        enabled: () => isSass && packageManager === 'npm',
        skip: () => projectType === 'back',
        task: (ctx, task) => {
          switch (projectType) {
            case 'front':
              return execa
                .command('npm i -D sass-loader')
                .then(() => (task.title = chalk`{greenBright Sass dependencies for Front End}`));
            case 'full':
              return execa
                .command('npm i -D sass-loader', { cwd: path.resolve('client') })
                .then(() => (task.title = chalk`{greenBright Sass dependencies for Front End}`));
          }
        },
      },
    ],
    { exitOnError: false }
  );

  tasks.run().catch(() => {});
};

export default runTasks;
