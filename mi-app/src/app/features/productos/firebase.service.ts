import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firebaseConfig = {
  apiKey: "AIzaSyDgWNRdLM-mq2hzOZJaMeNI4uDZ8qsMSa0",
  authDomain: "tienda-online-2aeb5.firebaseapp.com",
  databaseURL: "https://tienda-online-2aeb5-default-rtdb.firebaseio.com",
  projectId: "tienda-online-2aeb5",
  storageBucket: "tienda-online-2aeb5.firebasestorage.app",
  messagingSenderId: "580782007217",
  appId: "1:580782007217:web:2022c449b570edf9c59390"
};

public auth: Auth;
public firabese: Firestore;

constructor() {
  const app = initializeApp(this.firebaseConfig);
  this.auth = getAuth(app);
  this.firabese = getFirestore(app);
}
}
