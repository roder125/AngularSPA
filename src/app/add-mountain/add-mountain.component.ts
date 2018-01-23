import { FirebaseDatabaseService } from './../services/firebase.database.service/firebase.database.service';
import { Mountain } from './../models/mountains/mountain.interface';
import { Component, OnInit } from '@angular/core';
import { scan } from 'rxjs/operator/scan';


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
  showLoader = false;
  showPlus = true;

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
    //var uplaoder = document.getElementById("uploader");
    var uploader = (<HTMLInputElement>document.getElementById("uploader"));

    if(this.image != undefined){
      this.fService.pushImageUpload(this.image, mountain.name, date)

        .then((data)=>{
          this.showLoader = true;
          var percentage = (data.bytesTransferred / data.totalBytes) * 100;

          console.log("speicher Storage");
          
          mountain.imgUrl = data.downloadURL;
          this.fService.saveMountain(mountain)
          .then((data)=>{
            console.log("speicher Datenabnk");
            mountain.name = "";
            mountain.height = null;
            this.imageSrc = "";
            this.showPlus = true;        
            this.showLoader = false;
          });
        })
        .catch(e =>{
          console.log(e);
          console.log("Fehler")
        })
    }
  }

  /**
   * Bild aus dem Rechner 
   * @param e 
   */
  handleInputChange(e) {
    this.showPlus = false;
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
