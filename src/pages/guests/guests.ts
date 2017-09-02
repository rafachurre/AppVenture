import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the GuestsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guests',
  templateUrl: 'guests.html',
})
export class GuestsPage {
  
  notSignedGuests: Array<{name: string, placeAddress: string, placeCity: string, registrationDate: string}>;
  signedGuests: Array<{name: string, placeAddress: string, placeCity: string, registrationDate: string}>;
  submittedGuests: Array<{name: string, placeAddress: string, placeCity: string, registrationDate: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.getGuests();
  }

  /**
   * Get all guests saved in local DB
   * @function
   */
  private getGuests(): any{
    this.storage.get('guests').then((val) => {
      this.notSignedGuests = val.notSignedGuests;
      this.signedGuests = val.signedGuests;
      this.submittedGuests = val.submittedGuests;
    });
  }

}
