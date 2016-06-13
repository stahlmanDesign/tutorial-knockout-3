# Learning Knockout.js with TypeScript and Webpack
Note: might not need Webpack with TypeScript 1.8:

> Until now, to address this problem, developers needed a third party bundler such as webpack or browserify. With TypeScript 1.8, you can simply include these 3rd party JavaScript libraries in your compilation and they will follow your emitted JavaScript wherever it goes. Source maps included!


## [Tutorial #3][0] Single-page applications

- **Differences from official tutorial:** 
	- this code simulates a server response by loading individual json files.
	- For individual email, it is always the same email
- Official working result: http://learn.knockoutjs.com/WebmailExampleStandalone.html

[0]:http://www.learn.knockoutjs.com/#/?tutorial=webmail
##Quick start
- `npm install`
- `npm run watch`
- Now `main.ts` is transpiled into `main.js` which is loaded by `index.html`
- Optional: use `npm install serve` to `serve` folder at `localhost:3000` to get live reload upon changes

<img src="knockout-3.gif"/>

### Might also need type definitions
https://blogs.msdn.microsoft.com/typescript/2016/01/28/announcing-typescript-1-8-beta/

>In order to utilize JavaScript libraries in your TypeScript projects, developers have to include a type definition (.d.ts) file so that the TypeScript compiler knows what you’re doing at compile time and the JavaScript engine knows what to use at runtime.
- add typescript hints for knockout `npm install -g typescript typings`
- `typings install --global --save dt~knockout` 
	

##Build from scratch
- note: originally based on this setup code, but no longer using Webpack becaue typescript can do most of the same work now
- See https://github.com/stahlmanDesign/typescript-webpack to set up typescript and webpack
- add knockout to package.json
	`npm install knockout --save`

- as per this tutorial: http://www.typescriptlang.org/docs/handbook/knockout.html
	- add typescript hints for knockout `npm install -g typescript typings`
	- `typings install --global --save dt~knockout` 
