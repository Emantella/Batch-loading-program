const chalk = require('chalk');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const waitAndLoad = async (msg) => {
    console.clear();
    console.log(chalk.blue('| ') + msg);
    await delay(1000);
    console.clear();
    console.log(chalk.blue('/ ') + msg);
    await delay(1000);
    console.clear();
    console.log(chalk.blue('- ') + msg);
    await delay(1000);
    console.clear();
    console.log(chalk.blue('\\ ') + msg);
    await delay(1000);
}

const yellowLoad = async (msg) => {
    console.clear();
    console.log(chalk.yellow('| ') + msg);
    await delay(1000);
    console.clear();
    console.log(chalk.yellow('/ ') + msg);
    await delay(1000);
    console.clear();
    console.log(chalk.yellow('- ') + msg);
    await delay(1000);
    console.clear();
    console.log(chalk.yellow('\\ ') + msg);
    await delay(1000);
}

const whiteLoad = async (msg) => {
    console.clear();
    console.log(chalk.white('| ') + msg);
    await delay(1000);
    console.clear();
    console.log(chalk.white('/ ') + msg);
    await delay(1000);
    console.clear();
    console.log(chalk.white('- ') + msg);
    await delay(1000);
    console.clear();
    console.log(chalk.white('\\ ') + msg);
    await delay(1000);
}

const altLoad = async (msg) =>  {
//wip 
    console.clear();
    console.log(chalk.blue('⠇ ') + msg);
    await delay(1000);
    console.clear();
    console.log(chalk.blue('⠋ ') + msg);
    await delay(1000);
    console.clear();
    console.log(chalk.blue('⠉ ') + msg);
    await delay(1000);
    console.clear();
    console.log(chalk.blue('⠲ ') + msg);
    await delay(1000);
    console.log(chalk.blue('⠇ ') + msg);
}

const numLoad = async (msg) => {
    let percent = 0;
    while (percent != 100) {
        console.clear();
        console.log(msg)
        console.log(chalk.yellow(percent + '% ') + chalk.blue('Progress'));
        await delay(10);
        percent = percent + 1;
    }
}

const slowNumLoad = async (msg) => {
    let percent = 0;
    while (percent != 100) {
        console.clear();
        console.log(msg)
        console.log(chalk.yellow(percent + '% ') + chalk.blue('Progress'));
        await delay(40);
        percent = percent + 1;
    }
}

exports.load = waitAndLoad;
exports.warnLoad = yellowLoad;
exports.plainLoad = whiteLoad;
exports.numLoad = numLoad;
exports.slowNumLoad = slowNumLoad;
