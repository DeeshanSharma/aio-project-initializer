import inquirer from 'inquirer';

interface Answers {
  language: string;
  projectType: string;
  isSass: boolean;
  isPrettier: boolean;
  packageManager: string;
}

async function getUserInput() {
  const answers: Answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'language',
      message: 'Which language you going to use?',
      choices: [
        {
          value: 'ts',
          name: 'TypeScript',
        },
        {
          value: 'js',
          name: 'JavaScript',
        },
      ],
      default: 'js',
    },
    {
      type: 'list',
      name: 'projectType',
      message: 'What is your project type?',
      choices: [
        {
          value: 'front',
          name: 'Front End',
        },
        {
          value: 'back',
          name: 'Back End',
        },
        {
          value: 'full',
          name: 'Full Stack',
        },
      ],
      default: 'back',
    },
    {
      type: 'list',
      name: 'isSass',
      message: 'Do you plan to use SCSS/SASS in your project?',
      choices: [
        {
          value: true,
          name: 'Yes',
        },
        {
          value: false,
          name: 'No',
        },
      ],
      default: false,
      when: (answer) => answer.projectType !== 'back',
    },
    {
      type: 'list',
      name: 'packageManager',
      message: 'Which package manager you use?',
      choices: ['yarn', 'npm'],
      default: 'npm',
    },
  ]);
  return answers;
}

export default getUserInput;
