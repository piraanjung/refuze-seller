import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { User,  } from "./app.models";
import { appconfig } from "../providers/app.config";

@Injectable()
export class ChatService {
  users: AngularFirestoreCollection<User>;


  //The pair string for the two users currently chatting
  currentChatPairId;
  currentChatPartner;

  constructor(private db: AngularFirestore) {
    
    this.users = db.collection<User>(appconfig.users_endpoint);
  }

  addUser(payload) {
    return this.users.add(payload);
  } //addUser

  createPairId(user1, user2) {
    let pairId;
    if (user1.time < user2.time) {
      pairId = `${user1.email}|${user2.email}`;
    } else {
      pairId = `${user2.email}|${user1.email}`;
    }

    return pairId;
  } //createPairString

}