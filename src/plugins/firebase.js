import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueFire)

const firebaseApp = firebase.initializeApp({
  //firebaseのapi情報をコピペします。
  apiKey: "AIzaSyAcGPU4nbcC_bwS2gUxeVSdm05LQ9PJqMA",
  authDomain: "chat-firestore-vue-7f229.firebaseapp.com",
  projectId: "chat-firestore-vue-7f229",
  storageBucket: "chat-firestore-vue-7f229.appspot.com",
  messagingSenderId: "835458450174",
  appId: "1:835458450174:web:536477e78e842356221baf"
});

export const db = firebaseApp.firestore();
