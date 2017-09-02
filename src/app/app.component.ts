import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { CalendarPage } from '../pages/calendar/calendar';
import { GuestsPage } from '../pages/guests/guests';
import { DocumentsPage } from '../pages/documents/documents';
import { SettingsPage } from '../pages/settings/settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public toastCtrl: ToastController, private storage: Storage) {
    this.initializeApp();

    //call config functions
    this.setMenuItems();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      //TO-DO: call cloud service to get the data
      this.setPlaces();
      this.setGuests();
      this.setDocs();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  syncToast(){
    let toast = this.toastCtrl.create({
      message: 'Triggering sync with Cloud Server...',
      duration: 3000
    });
    toast.present();
  }

  /********************
   * Config functions *
   ********************/
  private setMenuItems(){
    this.pages = [
      { title: 'Home', icon: 'home', component: HomePage },
      //{ title: 'Calendar', icon: 'calendar', component: CalendarPage },
      { title: 'Guests', icon: 'people', component: GuestsPage },
      { title: 'Documents', icon: 'document', component: DocumentsPage },
      { title: 'Settings', icon: 'settings', component: SettingsPage }
    ];
  }


  /******************
   * TEMP FUNCTIONS *
   ******************/
  /**
   * Get all places saved in local db
   * @function
   */
  private setPlaces(){
    let testPlaces: any = [
      {imageUrl: "assets/img/places/demo_place1.jpg", address: "C/ Fortuny, 32 - 1 A", city: "Madrid"},
      {imageUrl: "assets/img/places/demo_place2.jpg", address: "C/ Gran Via, 125 - 4 C", city: "Madrid"},
      {imageUrl: "assets/img/places/demo_place3.jpg", address: "C/ Diagonal, 231 - 3 B", city: "Barcelona"}
    ];

    this.storage.set('places', testPlaces);
  }

  /**
   * Get all places saved in local db
   * @function
   */
  private setGuests(){
    let notSignedGuests: Array<{name: string, placeAddress: string, placeCity: string, registrationDate: string}>= [
      {name: "Matias Prats", placeAddress: "C/ Diagonal, 231 - 3 B", placeCity: "Barcelona", registrationDate: "09/Aug/2017"}
    ];
    let signedGuests: Array<{name: string, placeAddress: string, placeCity: string, registrationDate: string}> = [
      {name: "Leticia Sabater", placeAddress: "C/ ortuny, 32 - 1 A", placeCity: "Madrid", registrationDate: "09/Aug/2017"},
      {name: "Jordi Hurtado", placeAddress: "C/ Gran Via, 125 - 4 C", placeCity: "Madrid", registrationDate: "09/Aug/2017"}
    ];
    let submittedGuests: Array<{name: string, placeAddress: string, placeCity: string, registrationDate: string}> = [
      {name: "Rafael Lopez", placeAddress: "C/ Fortuny, 32 - 1 A", placeCity: "Madrid", registrationDate: "09/Aug/2017"},
      {name: "Fernando Camarero", placeAddress: "C/ Gran Via, 125 - 4 C", placeCity: "Madrid", registrationDate: "09/Aug/2017"},
      {name: "Rodrigo Anibarro", placeAddress: "C/ Diagonal, 231 - 3 B", placeCity: "Barcelona", registrationDate: "09/Aug/2017"},
      {name: "Guillermo Juarez", placeAddress: "C/ Diagonal, 231 - 3 B", placeCity: "Barcelona", registrationDate: "09/Aug/2017"}
    ];

    let testGuests: any = {
      notSignedGuests,
      signedGuests,
      submittedGuests
    }

    this.storage.set('guests', testGuests);
  }
  
  /**
   * Get all places saved in local db
   * @function
   */
  private setDocs(){
    let submittedDocs : Array<{name: string, signedDate: string, submittedDate: string}> = [
      {name: "Rafael Lopez", signedDate: "09/Aug/2017 17:21", submittedDate: "09/Aug/2017 23:51"},
      {name: "Fernando Camarero", signedDate: "09/Aug/2017 17:21", submittedDate: "09/Aug/2017 23:51"},
      {name: "Rodrigo Anibarro", signedDate: "09/Aug/2017 17:21", submittedDate: "09/Aug/2017 23:51"},
      {name: "Guillermo Juarez", signedDate: "09/Aug/2017 17:21", submittedDate: "09/Aug/2017 23:51"}
    ]
    
    let notSignedDocs : Array<{name: string, signedDate: string, submittedDate: string}> = [
      {name: "Matias Prats", signedDate: "-", submittedDate: "-"},
    ]
    
    let signedDocs : Array<{name: string, signedDate: string, submittedDate: string}> = [
      {name: "Leticia Sabater", signedDate: "09/Aug/2017 17:21", submittedDate: "-"},
      {name: "Jordi Hurtado", signedDate: "09/Aug/2017 17:21", submittedDate: "-"}
    ]
    
    let testDocs : any = {
      submittedDocs,
      notSignedDocs,
      signedDocs
    }

    this.storage.set('docs', testDocs);
  }

}
