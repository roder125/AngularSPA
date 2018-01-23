import { FirebaseDatabaseService } from './../services/firebase.database.service/firebase.database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-mountains',
  templateUrl: './show-mountains.component.html',
  styleUrls: ['./show-mountains.component.css']
})
export class ShowMountainsComponent implements OnInit {

  mountainArray = [] ;

  constructor(private fService: FirebaseDatabaseService) { }

  ngOnInit() {
    this.showList();
  }


   /**
   * Zeigt die Liste  aus der Datenbank an, mit Hilde des Services
   */
  showList(){
    this.fService
    .getMountains()// DB List
    .snapshotChanges()  // Access to Key and Value  ["child_added"]
    .subscribe(data => {
      this.mountainArray = data.slice().reverse().map( c => ({
        key: c.payload.key, ... c.payload.val()
      }))
      console.log(this.mountainArray);
    });    
  }

}
