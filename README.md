<!-- <div align="center">

<img width=200px src="assets/aio-project-initializer-logo.png" alt="Project logo">

</div> -->

<h1 align="center">aio-project-initializer</h1>

 <p align="center">
    A simple CLI tool to initialize, configure a project & setup all the tools for you and do all the heavy lifting on your behalf and saves you from all the hectic process
    <br />
    Just answer some simple questions and get your whole working project initialized as well as all the packages installed
    <br />
    <a href="https://www.npmjs.com/package/aio-project-initializer">NPM Package</a>
    ·
    <a href="https://github.com/DeeshanSharma/aio-project-initializer/issues">Report Bug</a>
    ·
    <a href="https://github.com/DeeshanSharma/aio-project-initializer/issues">Request Feature</a>
  </p>

<div align="center">

[![npm](https://img.shields.io/npm/v/aio-project-initializer?color=success&label=npm%20package&logo=npm&style=for-the-badge)](https://www.npmjs.com/package/aio-project-initializer)
![Status](https://img.shields.io/badge/status-active-success.svg?logo=statuspal&style=for-the-badge)
[![GitHub issues](https://img.shields.io/github/issues/DeeshanSharma/aio-project-initializer?logo=github&style=for-the-badge)](https://github.com/DeeshanSharma/aio-project-initializer/issues)
[![GitHub forks](https://img.shields.io/github/forks/DeeshanSharma/aio-project-initializer?logo=github&style=for-the-badge)](https://github.com/DeeshanSharma/aio-project-initializer/network)
[![GitHub stars](https://img.shields.io/github/stars/DeeshanSharma/aio-project-initializer?logo=github&style=for-the-badge)](https://github.com/DeeshanSharma/aio-project-initializer/stargazers)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/DeeshanSharma/aio-project-initializer?logo=github&style=for-the-badge)](https://github.com/DeeshanSharma/aio-project-initializer/pulls)
[![GitHub License](https://img.shields.io/github/license/DeeshanSharma/aio-project-initializer?color=sucess&logo=gnu%20privacy%20guard&logoColor=white&style=for-the-badge)](https://github.com/DeeshanSharma/aio-project-initializer/blob/main/LICENSE)

</div>

<hr />
<br />

<!-- <div align="center">

![Project Demo Gif](assets/demo-aio-project-initializer.gif)

</div>

<hr /> -->

<p align="center">AIO Project Initializer is a simple command-line tool but it will be your saviour because it will setup any type of project you want to start doesn't matter it is Front End, Back End or even Full Stack. It will also setup all the necessary tools for you no matter what language you are using whether TypeScript or JavaScript it will configure the project according to the selected language.</p>

## 💡 Features

1. Initialize a GIT repository
1. Create `.gitignore` file with most used entries
1. Initialize a working project
   - Front End
   - Back End
   - Full Stack
1. Configure all the essential tools
   - Eslint
   - Prettier
   - Webpack
   - Babel
1. Perfectly compatible with
   - TypeScript
   - JavaScript
1. Ask questions and works according to the choices
1. You have complete control over the configuration
1. Installs all packages as well
1. Uses your preferred package manager
1. Inline comments in files to help you adapt the change

## 🔧 Configuration

- Change the file extension of `entry` key in `webpack/common.js` according to your selected language (.tsx/.jsx) or it will throw errors.

## ⛏️ Built with

- Inquirer
- Listr
- Fs Extra
- Execa
- Chalk

## 🏁 Getting Started

Follow all these instructions and learn the best way to take benefits from this package.

### 📚 Prerequisite

- npm/yarn

### 🧰 Installation & Consuming

1. Global Installation

   ```bash
   npm i aio-project-initializer -g
   ```

   > _**Note:** Global installation is not possible with yarn v2 as far as I know, (please guide me if I am wrong). If you are using yarn v1 then use `yarn global add aio-project-initializer`. <u>RUN THIS IN A EMPTY DIRECTORY I REPEAT RUN THIS IN EMPTY DIRECTORY OR IT WILL THROW ERROR & USE GLOBAL METHOD OR USE NPX NO PER PROJECT INSTALLATION.</u>_

1. Command to initialize project

   - Global installation

     ```bash
     aio-initialize
     ```

   - Using NPX

     ```bash
     npx aio-project-initializer
     ```

## 🎈 Usage

The sole motive of this package is to improve Developer Experience. The package is made to save time initializing & configuring a new project with all the tools. The tool will ask you certain questions, prepare a tasks list according to you choice and run all of them, hence you get your project perfectly working and configured. You just need to focus on your awesome project.

## ✍️ Authors

- [@DeeshanSharma](https://www.github.com/DeeshanSharma) - Idea & Initial Work

## 📖 Contributing

**_"In real open source, you have the right to control your own destiny."_** _- Linus Torvalds_

Contributions are what makes the open-source community an amazing place. Any contributions you make are **greatly appreciated**.

## 💳 License

Distributed under the MIT License. See [`LICENSE`](LICENCE) for more information.

## 🧬 Resources

- [NPM Docs - Creating Node.js modules](https://docs.npmjs.com/creating-node-js-modules)
- [Eslintrc-Generator](https://github.com/DeeshanSharma/eslintrc-generator)
- [Node Docs - fs](https://nodejs.org/api/fs.html)

## 🎉 Acknowledgement

- [Shields.io](https://shields.io)
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js)
- [Chalk](https://github.com/chalk/chalk)
- [Listr](https://github.com/SamVerschueren/listr)
- [Execa](https://github.com/sindresorhus/execa)
- [Center Align](https://github.com/jonschlinkert/center-align)
- [Figlet.js](https://github.com/patorjk/figlet.js)
- [Clear](https://github.com/bahamas10/node-clear)
- [Fs Extra](https://github.com/jprichardson/node-fs-extra)

## 👋 EndNote

Star this project if you like it also you won't miss it when you need it.
