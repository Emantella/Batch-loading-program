const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const chalk = require('chalk');
const pass = chalk.green(' [PASS] ')
const loader = require('./load')

async function test() {
    loader.load('Testing loader one');
    await delay(4000);
    loader.warnLoad('Testing loader two');
    await delay(4000);
    loader.plainLoad('Testing loader three');
    await delay(4000);
    await loader.numLoad(`- Testing loader four
- This is a multi line string`);
    await loader.slowNumLoad('Test 1' + pass + '\nTest 2' + pass + '\nTest 3' + pass + '\nTest 4' + pass + 'Finalising data');
    console.clear();
    console.log('Test passed! `npm publish`');
}

test();