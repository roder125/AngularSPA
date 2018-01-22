
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
}