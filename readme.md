# rhino-loader
Creats a loading screen in the cli

Made By [@Emantella](https://github.com/Emantella) And [@AceiusIO](https://github.com/AceiusIO)

## 💻 Installation
Here's some options:
### NPM (Reccomended) For JavaScirpt
 - Install with `npm install rhino-loader`
### Windows Batch
 - Install via downloading [Load.bat](Load.bat)
### Mac & Linux Shell
 - Install via downloading [Load.sh](Load.sh)

## ⌨ Useage examples
Batch/Sh Version:
```sh
Load.bat 
#OR
./Load.sh #Make sure to mark as executable
```
JS Example:
```js

async function example() {
    await loader.load('A Message to show while loading');
    await loader.warnLoad('A style if somthing is wrong');
    await loader.plainLoad('A plain style');
    await loader.numLoad(`A percent loading style
This style supports multiline string input`)
    await loader.numLoad('A slower version that lines up with the other methods')
}
```

## 💾 Project Setup
Clone the project to disk with the GitHub CLI, GitHub Desktop, or however you get your git repos.  
In order to commit to the project or build the code, you will need the folowing installed:
 - [NodeJS](https://nodejs.dev)
 - [NPM](https://npmjs.com)

Then, install dev deps with
```sh
npm i
```

Now you're ready to go :D

### Testing your changes
```sh
npm test
```

## 📜 Licencing
This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License  
![https://licensebuttons.net/l/by-sa/4.0/88x31.png](http://creativecommons.org/licenses/by-sa/4.0/)

Readme template by [@AceiusIO](https://github.com/AceiusIO/)
