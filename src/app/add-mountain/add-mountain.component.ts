import { FirebaseDatabaseService } from './../services/firebase.database.service/firebase.database.service';
import { Mountain } from './../models/mountains/mountain.interface';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-mountain',
  templateUrl: './add-mountain.component.html',
  styleUrls: ['./add-mountain.component.css']
})
export class AddMountainComponent implements OnInit {

  mountain = {} as Mountain;

  constructor(private fService: FirebaseDatabaseService) {

   }

  ngOnInit() {
  }

  save(mountain: Mountain){

    this.fService.saveMountain(mountain)
    .then((data)=>{
      console.log(data);
    });
    console.log(mountain.name);
    console.log(mountain.height);
  }

}
