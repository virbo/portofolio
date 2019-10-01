## Getting started

### Clone repository

1. Clone this project into your computer with command `git clone`. or 
2. Download this repository and extract to your folder computer

```
git clone https://github.com/virbo/portofolio.git <folder-project>
```

### Install dependencies

1. Enter to the folder using command `cd`
   
```
cd <folder-project>
```

1. Running command `npm install` or `yarn install` to install all dependencies
   
```
yarn install
```

### Configuration Firebase

Rename and edit `src/components/firebase/index.js.example` into `src/components/firebase/index.js` and copy paste your credentials into this file

```js
const config = {
    apiKey: "<API KEY>",
    authDomain: "<AUTH DOMAIN>",
    databaseURL: "<DB URL>",
    projectId: "<PROJECT ID>",
    storageBucket: "<STORAGE BUCKET>",
    messagingSenderId: "<SENDER ID>",
    appId: "<APP ID>",
    measurementId: "<MEASURE ID>"
}
```

### Running project

Inside the folder, running command `npm start` or `yarn start` to run the project.

```
yarn start
```

### Build project

Inside the folder, running command `npm run build` or `yarn build` to run the project.

```
yarn build
```


Your app is ready to be upload.