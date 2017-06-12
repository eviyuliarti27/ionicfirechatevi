import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { HomePage } from '../pages/home/home';

  // Initialize Firebase
  let config = {
   apiKey: "AIzaSyAt8pz1onLeKUse_KpJw6fOlqYj39ijqcM",
    authDomain: "cobapp-9e39f.firebaseapp.com",
    databaseURL: "https://cobapp-9e39f.firebaseio.com",
    projectId: "cobapp-9e39f",
    storageBucket: "cobapp-9e39f.appspot.com",
  };
  firebase.initializeApp(config);


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}