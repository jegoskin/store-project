# Webapp
## Technologies
React
## Project structure
```
├─ build                            //folder with build assests that are ready to deploy
├─ node_module                      //folder generated with npm
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  └─ manifest.json
├─ src                              //main source code
│  ├─ lib                           //folder with main page component
│  │  ├─ base                       //folder with Config, Translation Classes
│  │  └─ ...
│  ├─ pages                         //folder with main page component
│  │  ├─ index
│  │  │  ├─ Index.js                //root component
│  │  │  └─ ...
│  │  ├─ root
│  │  │  ├─ Root.js                 //root component
│  │  │  └─ Login.js                //login component
│  │  └─ ...
│  ├─ redux
│  │  ├─ actions
│  │  │  ├─ app.js                  //actions for app redux modul
│  │  │  └─ ...
│  │  ├─ reducers
│  │  │  ├─ app.js                  //reducer for app redux modul
│  │  │  └─ ...
│  │  └─ index.js                   //combine reducers
│  ├─ styles
│  │  ├─ materialTheme.js           //config material-ui
│  │  └─ styles.css                 //css styles, use only if absolutely necessary!
│  ├─ app.config.js                 //application config
│  ├─ global.js                     //this files created and exports instances of global classes and global functions.
│  ├─ index.js                      //application entry point
│  ├─ navigation.jsx                //configuration of routes, drawer and menu
│  └─ registerServiceWorker.js
├─ .gitignore
├─ package.json
└─ README.md
```

## Usage
### Project
For start new project with this structure. Clone this repository. And remote `.git` from project.
```
git clone <url>
rm .gim -rf
``` 
Make new local repository. And make first commit.
```
git init
git add .
git commit -m "init commit"
```
Add remote repository of your choice. And push it there.
```
git remote add origin <url>
git push -u origin --all
```

### Development
Init npm packages.
```
npm i
```
Develop server. This starts the developing server that will be serving packed project on `localhost:3000`. It restarts after saving files.
```
npm start
```
### Deploy
Building project. This will generate `build` folder in project. Content of this folder is everything you need to copy to your server.
```
npm run build
```
After build you can try to serve it localy with `serve`.
```
npm install -g serve
server -s build
```