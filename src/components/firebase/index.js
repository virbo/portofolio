import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "<API KEY>",
    authDomain: "<AUTH DOMAIN>",
    databaseURL: "<DB URL>",
    projectId: "<PROJECT ID>",
    storageBucket: "<STORAGE BUCKET>",
    messagingSenderId: "<SENDER ID>",
    appId: "<APP ID>",
    measurementId: "<MEASURE ID>"
};


// Initialize Firebase
const app = firebase.initializeApp(config);
const ref = app.database().ref();

const menu = ref.child('menu');
const project = ref.child('projects');
const dashboard = ref.child('dashboard');
const profil = ref.child('profil');
const sosmed = ref.child('sosmed');
const skill = ref.child('skill');

export {
    menu,
    project,
    dashboard,
    profil,
    sosmed,
    skill,
}