# ex6_npm_nodeJS_hello
Example project for intro to npm and nodeJS

## Chrome V8 engine
+ Chrome V8, or in short V8, is an open source JS engine, developed by Google as part of Chromium project (Google Chrome and Chromium web browsers), released Sept 2008
+ Originally developed by a danish, Lars Bak (with 12 engineers), who had been designing/implementing object-oriented virtual machines since 1988, who also was lead for Sun's Java HotSpot JVM in 1997. He had joined Google in 2004.
+ V8 compiles JS directly to native machine code before executing it, instead of interpreting bytecode or compiling whole program to machine code and executing it from compiled file.
+ V8 compiled code is additionally optimized (and re-optimized) dynamically at runtime, based on heuristics of code's execution profile
+ V8 uses optimization techiques such as inlining, inline caching, copy elision of expensive runtime properties
+ V8 can compile to for PCs (IA-32, x86-64), for mobile (ARM), for embedded (MIPS instruction set architectures), for servers (PowerPC), for mainFrames (IBM s390) 

## npm summary
+ npm stands for "Node Package Manager".
+ in many ways, npm to nodeJS is, what maven to JEE(Java Enterprise Environment) is
+ npm is how one searches, installs, lists, etc nodeJS packages(modules).
+ npm installs modules by default to a directory called node_modules. So locally installed modules will end up in directory node_modules directly under project's root dir
+ npm keeps a local cache (a local repo) of packages it installs, in .npm directory in your home path. You can once in a while clean it up from old package versions
```
ls ~/.npm
npm cache clean
```
+ npm allows one to publish packages to the npm registery via "npm publish ...". Then others can install your package from npm registery
+ npm allows one to search, install, uninstall, list, view, publish, .. nodeJS packages(JS modules)

## nodeJS summary
+ nodeJS is at the core of "Javascript renaissance" on server side that was enabled by Google's Chrome V8 JS engine
+ nodeJS in high level = JS runtime environment + JS library
+ nodeJS is mainly a server side JS
+ since JS in browsers were forced to asynchronous, non blocking, single threaded execution mode, nodeJS builds on that heritage, hence normally nodeJS APIs are asynchronous, hence inherintly efficient handling a lot of I/O bound requests that end up waiting slightly for results to be returned.
+ but nodeJS is not necessarily best for small amount of high CPU request processing
+ node(nodeJS) comes with a built in REPL(Read Eval Print Loop), basically its own interpreted shell. You just type node at command prompt. Then can exit by typing  .exit  or pressing Ctrl+C twice.
```
node
> 1+2
> console.log("hello ilker")
> .help
> .exit
```
+ to load(and hence execute) a simple nodejs app in node REPL and then exit
```
echo "console.log('FIRST line'); console.log('SECOND line');" > hello_nodeJS_REPL2.js
node
 .load hello_nodeJS_REPL2.js
 .exit
```
+ to create and execute a simplest hello nodeJS app that prints a message to command line
```
echo "console.log('Hello nodeJS from ilker');" > hello_nodeJS.js
node hello_nodeJS.js
node hello_nodeJS
```

## nodeJS web application using http module from nodeJS
+ to create a simplest web app and serve it in a simple http web server, edit file "hello_webApp_nodeJs.js" with below content
```
// Load HTTP module, which is a simple http web server, that comes as part of nodeJs install
var http = require("http");

// Write web app to return static content of "Hello web application using nodeJS", that will be served at port 8012
http.createServer(function(request, response) {
    // set response HTTP header with status code and content type
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // finally send the response body
    response.end("Hello web application using nodeJS");
}).listen(8012);

// Print URL of above server serving simple web app
console.log("nodeJS' http server started to serve http://127.0.0.1:8012  or http://localhost:8012");

// Write web app to return static content of "Hello web application using nodeJS with fat arrow ..", that will be served at port 8013
http.createServer((request, response) => {
    // set response HTTP header with status code and content type
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // finally send the response body
    response.end("Hello web application using nodeJS with 'fat arrow' lambda instead of function expression");
}).listen(8013);

// Print URL of above server serving simple web app
console.log("nodeJS' http server started to serve http://127.0.0.1:8013  or http://localhost:8013");
```
+ to run above created web app, then connect with browser to 
    - "http://localhost:8012" or 
    - "http://localhost:8013" or
    - "http://localhost:8014" or "http://localhost:8014/ilker" or "http://localhost:8014/ilker/kiris"
```
node hello_webApp_nodeJs
or using npm script in package.json
npm run hello_webApp_nodeJs
```
+ with main property set to "hello_webApp_nodeJs" in package.json as;
```
"main": "hello_webApp_nodeJs.js",
```
One can run it even without specifying the JS file name via nodemon as;
```
nodemon
above is equivalent to below with above main property set in package.json
nodemon hello_webApp_nodeJS.js
```
+ you can access the 3 apps from command line using command line http client tool "curl" as;
```
curl -i "http://localhost:8012"
curl -i "http://localhost:8013"
curl -i "http://localhost:8014"
curl -i "http://localhost:8014/ilker"
curl -i "http://localhost:8014/ilker/kiris"
curl -i "http://localhost:8014/doesNotExist"
```

## Dependencies
+ Make sure you have nodeJS installed. At command prompt, below will tell you nodeJS version installed (like v7.0.0)
```
node -v
```
+ Make sure you have npm installed. Npm comes with nodeJS, so when you install nodeJS, you will automatically get npm as well. At command prompt, below will tell you npm version installed (like 3.10.8)
```
npm -v
```

## To initialize a npm/nodeJS project and create package.json
+ Can create default package.json file of a project via npm, by passing -f, --force, -y, or --yes, it will use only default values and not prompt you for any options/inputs. Afterwards you can edit the created package.json file
```
npm init --yes
```
+ Can answer questions prompted by npm to create package.json file. The questions have default values shown in (), you can just hit Return to accept them.
```
npm init
```

## Basic npm commands
+ to get basic help
```
npm help
```
+ to get more help
```
npm -l
```
+ to get help on specific npm command (like init)
```
npm init -h
```
+ to get help page of a specific command to pop up in a browser
```
npm help init
```
+ to search for nodeJS packages(lets say module called chai)
```
npm search chai
```
+ to view npm registery info of a package (like express)
```
npm view express
npm view devDependencies
npm view homepage
```
+ to list a globally installed package (lets say module called express). Note -g and --global tells it to look into global node_modules dir. Note if it had not been installed globally, it will return "--(empty)"
```
npm list -g express
```
+ to list a locally installed package (lets say module called express). Note -g and --global tells it to look into global node_modules dir. Note if it had not been installed locally, it will return "--(empty)". Also note, it might be installed globally, but not locally, then local list will return empty.
```
npm list express
```
+ to list all local packages installed
```
npm list
```
+ to install a package (like express) globally
```
npm install -g express
```
+ to install a package (like sinon) locally
```
npm install sinon
```
+ to install a package locally and save it in package.json as a dependency
```
npm install express --save
```
+ to install a package locally and save it in package.json as a dev only dependency
```
npm install mocha --save-dev
```
+ to install several packages locally at once and save them in package.json as a dev only dependency
```
npm install mocha chai sinon --save-dev
```
+ to install a specific version of a package
```
npm install underscore@1.8.2
```
+ to install all dependencies listed in package.json. This is handy in case we manually edit package.json dependencies or cloned a nodeJS project, for which typically node_modules directory will be omitted by .gitignore
```
npm install
```
+ to uninstall a package
```
npm uninstall underscore
```
+ to see if there is newer version of a package that is localled installed
```
npm outdated
```
+ to update a package that was installed before to latest version
```
npm update underscore
```
+ to run a script declared in package.json (like below script test)
```
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
```
```
npm run test
```
+ npm keeps a local cache (a local repo) of packages it installs, in .npm directory in your home path. You can once in a while clean it up from old package versions
```
ls ~/.npm
npm cache clean
```
+ node_modules is the directory where local modules are installed. But a package you install will have its dependency packages, and they in tern will have theirs, etc. Then you get a nested folder structure that is eventually too long folder path for windows to delete. To solve this and be able to delete node_modules on windows, you can install rimraf and use it to delete node_modules directory and all its children
```
npm install -g rimraf
rimraf node_modules
```
