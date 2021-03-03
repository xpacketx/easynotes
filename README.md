## Table of Contents
1. [General Info](#general-info)
2. [Screenshots](#screenshots)
3. [Built With](#built-with)
4. [Setup](#setup)
5. [Features](#features)

### General Info
### `#easynotes`
> *This project was created using [Create React App](https://github.com/facebook/create-react-app) and [Bootstrap](https://getbootstrap.com/)
> This is React project created to discover a magic world of React functional components using [React Hooks](https://reactjs.org/docs/hooks-intro.html).
The application provides the ability to fetch, post and delete notes using cloud-hosted [Firebase API](https://firebase.google.com/).*

### Screenshots
![easynotes](https://user-images.githubusercontent.com/44978672/109604690-0d0a4180-7b78-11eb-98e7-dd79a791fcdf.jpg)

### Built With
* [React](https://reactjs.org/docs/getting-started.html) - a popular JS front-end library for building composable and highly reusable component-based UIs 
* [react-router](https://www.digitalocean.com/community/tutorials/how-to-handle-routing-in-react-apps-with-react-router) - a library that provides the core routing functionality for React Router
* Using Firebase API to hosting and sync data in realtime.
* Bootstrap - CSS framework providing extensive list of components and JavaScript based design templates
* node-sass - a library that provides sass preprocessor functionality binding for Node.js

### Setup
To clone and run this application, you need npm installed on your computer and Firebase account. From your command line:
````sh
# Clone the repository
$ git clone https://github.com/xpacketx/easynotes.git

# Go into the repository
$ cd easynotes

# Install dependencies
$ npm install

# Sign up to your Firebase account and add a new project 'react-notes'
# Continue creating a realtime database 'react-notes' and copy the 'URL' given as a reference to this database
# Go to the root directory of the clone application and create a new system file 
.env.local

# In '.env.local' create a new system constant passing in the 'URL' 
REACT_APP_DB_URL = <URL obtained as a reference to a new database>

# Run the app and start adding a new notes into your DB
$ npm start  
````

### Features
* Managing local state using React Hooks and routing functionality 
* Actions of notes manipulation are accompanied with an alert notifications
* Easy to use a cloud-hosted Firebase API.
