
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from "@angular/core";
import * as firebase from 'firebase';

@Injectable()
export class FirebaseDatabaseService {

    private mountainListRef$ = this.db.list<any>('animal-list');

    constructor(private db: AngularFireDatabase){
    }

    getMountains(){
        return this.mountainListRef$;
    }

    saveMountain(){
        return this.mountainListRef$.push({
            
        });
    }
}