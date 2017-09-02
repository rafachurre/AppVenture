import { Component } from '@angular/core';
import { Nav, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { GuestsPage } from '../guests/guests';
import { DocumentsPage } from '../documents/documents';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  places: Array<{imageUrl: string, address: string, city: string}>;

  constructor(public nav: Nav, public navCtrl: NavController, private storage: Storage) {
    this.places = this.getPlaces();
  }

  /**
   * Get all places saved in local DB
   * @function
   */
  private getPlaces(): any{
    this.storage.get('places').then((val) => {
      this.places = val;
    });
  }

  navTo(dest: string){
    switch(dest){
      case "guests":
        this.navCtrl.push(GuestsPage);
        break;
      case "documents":
        this.navCtrl.push(DocumentsPage);
        break;
      case "register":
        this.navCtrl.push(RegisterPage);
        break;
      default:
        break;
    }
  }
}
