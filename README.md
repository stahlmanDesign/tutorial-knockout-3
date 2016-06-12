# Typescript setup

##Quick start
- `npm run watch`
- Now `main.ts` is transpiled into `bundle.js` which is loaded by `index.html`

##Build from scratch
- Using Virtual Studio Code on OS X
- open terminal
- `npm install typescript -g` install TypeScript globally on your machine
- `npm install -g tslint` to load TypeScript linter / hints in IDE ([if Virtual Studio `ext install tslint` not working][0])
[0]:https://github.com/Microsoft/vscode-tslint/issues/28
- Open new project folder and create a file `echo "" > main.ts`, and open it in IDE
- add some typescript and ES6 code to file and save

``` typescript
interface Person {
    name: string;
    age: number;
}
class Greeter {
    name: string;
    sayHello() {
        console.log("Hello" + name);
    }
}
function sortByName(a: Person[]) {
    var result = a.slice(0);
    result.sort((x, y) => {
        return x.name.localeCompare(y.name);
    });
    return result;
}
sortByName([]);
```
- in project folder terminal window `tsc -w main.ts` -w watches main.ts and transpiles it to main.js
	- notice that ES6 is also transpiled to ES5:

``` javascript
var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.sayHello = function () {
        console.log("Hello" + name);
    };
    return Greeter;
}());
function sortByName(a) {
    var result = a.slice(0);
    result.sort(function (x, y) {
        return x.name.localeCompare(y.name);
    });
    return result;
}
sortByName([]);
```

- `tsc -init` in terminal creates a `tsconfig.json` file for TS similar to npm's `package.json`

``` json
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5", // <-- can target ES6, ex. if using Node.js, or in future when browsers support ES6 
        "noImplicitAny": false,
        "sourceMap": false
    },
    "exclude": [
        "node_modules"
    ]
}
```

## Setting up Webpack to bundle multiple .js files into one

- `npm init` to create `package.json` file
- ```npm install webpack --save-dev``` install webpack in project and add reference to `package.json`
- Webpack will use `ts-loader` to transpile TypeScript instead of using `tsc -w`
	- `npm install ts-loader`
	- If TypeScript is installed globally, try using `npm link typescript
	
- `package.json` should look like this:

``` json
{
    "name": "typescript-demo",
    "version": "1.0.0",
    "description": "",
    "main": "bundle.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "watch": "webpack --watch"
    },
    "keywords": [
        "typescript",
        "webpack"
    ],
    "author": "Justin Stahlman <jstahlman@mac.com> (http://www.stahlmandesign.com)",
    "license": "ISC",
    "devDependencies": {
        "webpack": "^1.13.1"
    }
}
```
- `npm run watch`
- Now `main.ts` is transpiled into `bundle.js` which is loaded by `index.html`
