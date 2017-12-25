import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewPlacePage } from '../new-place/new-place';
import { PlacesService } from '../../services/places.service';
import { MyProfilePage } from '../my-profile/my-profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
places:{title:string}[]=[];
  constructor(public navCtrl: NavController,private placeService:PlacesService) {
  }
  ionViewWillEnter(){
this.places=this.placeService.getPlaces();
  }
  onAddPlace():void{
    this.navCtrl.push(NewPlacePage);
  }
 public onGoToProfile():void{
    this.navCtrl.push(MyProfilePage);
  }
}
