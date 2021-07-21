const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const loader = require('./load')

async function test() {
    loader.load('Testing loader one');
    await delay(4000);
    loader.warnLoad('Testing loader two');
    await delay(4000);
    loader.plainLoad('Testing loader three');
    await delay(4000);
    //loader.altLoad('Testing loader four')
    console.clear();
    console.log('Test passed! `npm publish`');
}

test();