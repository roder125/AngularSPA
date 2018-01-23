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
  path: string;
  activeColor: string = 'green';
  baseColor: string = '#ccc';
  overlayColor: string = 'rgba(255,255,255,0.5)';
  
  dragging: boolean = false;
  loaded: boolean = false;
  imageLoaded: boolean = false;
  imageSrc: string = '';

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
  
  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    var pattern = /image-*/;
    var reader = new FileReader();

    if (!file.type.match(pattern)) {
        alert('invalid format');
        return;
    }

    this.loaded = false;

    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
      var reader = e.target;
      this.imageSrc = reader.result;
      this.loaded = true;
  }

  handleImageLoad() {
    this.imageLoaded = true;
}

}
