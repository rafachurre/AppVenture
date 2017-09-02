import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the DocumentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-documents',
  templateUrl: 'documents.html',
})
export class DocumentsPage {
  documents_segment_value: string = "pending-documents";

  notSignedDocs: Array<{name: string, signedDate: string, submittedDate: string}>;
  signedDocs: Array<{name: string, signedDate: string, submittedDate: string}>;
  submittedDocs: Array<{name: string, signedDate: string, submittedDate: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.getDocs();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocumentsPage');
  }

  /**
   * Get all guests saved in local DB
   * @function
   */
  private getDocs(): any{
    this.storage.get('docs').then((val) => {
      debugger
      this.notSignedDocs = val.notSignedDocs;
      this.signedDocs = val.signedDocs;
      this.submittedDocs = val.submittedDocs;
    });
  }

}
