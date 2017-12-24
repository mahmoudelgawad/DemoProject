import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlacesService } from '../../services/places.service';

/**
 * Generated class for the NewPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {
  place: { title: string } = { title: '' };
  /* constructor(public navCtrl: NavController, public navParams: NavParams) {
   }
 
  ionViewDidLoad() {
     console.log('ionViewDidLoad NewPlacePage');
   }*/
  constructor(private placeService: PlacesService,private navCtrl:NavController) {

  }
  onAddNewPlace() {
    this.placeService.addPlace(this.place);
    this.navCtrl.pop();
  }
}
