import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyDrLcpmqchfRON480mWv08FpVUy9_YxGTQ",
	authDomain: "todo-app-5b57f.firebaseapp.com",
	databaseURL: "https://todo-app-5b57f.firebaseio.com",
	storageBucket: "todo-app-5b57f.appspot.com"
};

firebase.initializeApp(config);

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
