import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Content } from 'ionic-angular/components/content/content';

/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {

  @ViewChild('scrollContent')
  scrollContent: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onScroll() {
    this.scrollContent.scrollToBottom(450);

  }


}
