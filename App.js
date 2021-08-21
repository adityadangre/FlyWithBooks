import * as React from 'react';
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import Login from "./screens/Login/Login";
import Loading from "./screens/Login/Loading";
import Dashboard from "./screens/Login/Dashboard";

import * as firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  Loading: Loading,
  Login: Login,
  Dashboard: Dashboard
})

const AppNavigator = createAppContainer(AppSwitchNavigator)

export default function App() {
  return (
    <AppNavigator />
  )
}