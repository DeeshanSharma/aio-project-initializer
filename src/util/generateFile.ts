import chalk from 'chalk';
import { writeFileSync } from 'fs';
import Listr from 'listr';

const generateFile = (task: Listr.ListrTaskWrapper, filename: string, data: any) => {
  try {
    writeFileSync(filename, data);
    task.title = chalk`{greenBright Successfully Generated ${filename} file}`;
    return Promise.resolve('ok');
  } catch (err) {
    task.title = chalk`{redBright Error generating ${filename} file}`;
    return Promise.reject(new Error("Couldn't create file"));
  }
};

export default generateFile;
