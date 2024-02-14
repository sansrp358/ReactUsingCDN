Creating this project without using create-react-app. Using CDN links

<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

To add npm init

- We used the command "npm init" and it prompted some properties we need to set and hit enter
- After completing the above command a new file "package.json" is added.

To add react
-"npm i react" to add

- "npm i react-dom"

NPM direactly fetches these packages via CDN which we used before, but instead of making these network calls multiple times, we can install these packages from NPM and store this locally so that number of network calls are reduced

NODE MODULES is a folder which contains all the packages of your Project, the packages are fetched from the CDN and stored in your local machine

-SETUP WEBPACK
WebPack is a bundle
Babel is used to transplie the ES6 code into ES5 or lower verison code which is understood by Browsers
WebPack is a bundler that bundles your application, it makes it production ready, it helps you do a lot of capabilities like fetching, code minification, memory optimizations, reading files from node modules, compiling CSS,and bunch of other stuffs.

https://www.educative.io/answers/how-to-create-a-react-application-with-webpack

Read above POST

-if you want to install multiple packages in a one single line then you can seperate the packages name with a space

install the following (We are creating a WenPack) (See below cmd there are multiple packages seperated with space)

- "npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader html-webpack-plugin sass sass-loader style-loader url-loader webpack webpack-cli webpack-dev-server"

- add node_modules to .gitignore

To Create .babelrc file
babel is a wrapper which comes with lot of functionalities. If you wan to convert ES6 into ES5 you will need "preset enviornments" for transfiling
If you wan to convert React code into something that a browser understands, then u will need preset react

Open the POST above and create a file and the code mentioned in that

-Add a file called "webpack.config.js" and paste the content from the POST into the file
-Now create a src folder and move index.html and index.js into the src folder

-skip some steps from the POST and then in package.json paste the below lines in scripts, here we are showing how to set up an react application from scratch

"serve": "webpack serve --mode development",
"build": "webpack --mode production"

-HOT MODULE RELOAD

---JSX, REACT ELEMENT and COMPONENTS and CONDITIONAL RENDERING

Conditional Rendering
Ternery Operators

const isMorning = true
const morning ="GOOOD MORNING"
const afternoon = "GOOD AFTERNOON"
const div = <div>{isMorning ? morning : afternoon}</div>

-Functional Components -> Components basically are regular functions that returns React Elements

-React Fragments are kind of empty tags that takes no space in the DOM and and help you wrap your code inside a component

-----5. PROPS, CHILDREN, IMPORTS AND EXPORTS

export default App
import App from './App' //if you are using default exports there is no need of using brackets and you can use any word while importing it like import Banana from './App' and you can have only one default exports

export {App}
import {App} from './App' //This are called as named imports
