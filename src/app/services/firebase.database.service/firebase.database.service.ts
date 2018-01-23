
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from "@angular/core";
import * as firebase from 'firebase';

@Injectable()
export class FirebaseDatabaseService {

    private mountainListRef$ = this.db.list<any>('mountain-list');

    constructor(private db: AngularFireDatabase){
    }

    getMountains(){
        return this.mountainListRef$;
    }

    /**
     * saves a mountain into the Database
     * 
     * 
     * 
     * @param mountain 
     */
    saveMountain(mountain){
        return this.mountainListRef$.push({
            mountain: mountain     
        });
    }

    /**
     * Fügt ein Bild in den Storage von Firebase ein und speicher die download Url
     * @param result 
     * @param name 
     */
    // https://angularfirebase.com/lessons/angular-file-uploads-to-firebase-storage/
    pushImageUpload(image, name, date){
        var images = image;
        var storageRef$ = firebase.storage().ref(`pictures/${name}${date}/${name}`);
        return storageRef$.put(image);
    }
}