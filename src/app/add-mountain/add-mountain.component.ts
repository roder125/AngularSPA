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

  loaded: boolean = false;
  imageLoaded: boolean = false;
  imageSrc: string = '';
  image;

  constructor(private fService: FirebaseDatabaseService) {

   }

  ngOnInit() {
  }

  /**
   * Speichert Bild in den Storage und in die Datenbank
   * @param mountain 
   */
  save(mountain: Mountain){

    var date = Date();
    console.log(this.image);

    if(this.image != undefined){
      this.fService.pushImageUpload(this.image, mountain.name, date)
        .then((data)=>{
           mountain.imgUrl = data.downloadURL;
           console.log(mountain.imgUrl);
           this.fService.saveMountain(mountain)
           .then((data)=>{
             mountain.name = "";
             mountain.height = null;
             mountain.imgUrl = "";
           });
        })
        .catch(e =>{
          console.log(e);
        })
    }
  }

  /**
   * Bild aus dem Rechner 
   * @param e 
   */
  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    this.image = e.target.files[0];
    console.log(this.image);
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
