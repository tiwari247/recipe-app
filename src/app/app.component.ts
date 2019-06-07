import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'recipe-app';
  active:boolean = true;

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyC7IUnC5tX2kNxumIw57v6d0Cp8UDvlnwA",
      authDomain: "ng-recipe-book-f6ca6.firebaseapp.com"
    });
  }

  updateLink(value:boolean){
    console.log("app comp : "+value);
    this.active = value;
  }

}
