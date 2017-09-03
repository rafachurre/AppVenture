import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { CloudDataManagerProvider } from '../../providers/cloud-data-manager/cloud-data-manager';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  register: any = {};
  accomodationID: string = "ABC123456";

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public toastCtrl: ToastController, private storage: Storage, private cloudDataMngr: CloudDataManagerProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.cloudDataMngr.getAllGuests();
  
  }

  scanToast() {
    let toast = this.toastCtrl.create({
      message: 'Camera will appear to scan MRZ',
      duration: 3000
    });
    toast.present();
  }

  onSavePressed(){
    let accommodationID = this.accomodationID
    let firstName = this.register.firstName;
    let lastName = this.register.lastName;
    let sex = this.register.sex;
    let dateOfBirth = this.register.dateOfBirth;
    let country = this.register.country;
    let idNumber = this.register.idNumber;
    let idType = this.register.idType;
    let idDateOfIssue = this.register.idDateOfIssue;
    let registrationDate = new Date();
    let signedDate = "";
    let submittedDate = "";
    let status = "Not Signed";
    let newRegistration = {firstName, lastName, sex, dateOfBirth, country, idNumber, idType, idDateOfIssue, registrationDate, signedDate, submittedDate, status}

    this.storage.get('docs').then((val) => {
      val.notSignedDocs.push(newRegistration);
      this.storage.set('docs', val);
    });

    this.cloudDataMngr.uploadNewGuest(newRegistration);

    let toast = this.toastCtrl.create({
      message: 'Guest Registered',
      duration: 2000
    });
    toast.present();

    this.navCtrl.pop();
  }

}
