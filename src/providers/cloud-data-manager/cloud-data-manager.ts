import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CloudDataManagerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CloudDataManagerProvider {

  private sUserName = "rafachurre";
  private sServerURL : string = "https://onezweipolizei.firebaseio.com";

  constructor(public http: Http) {
    console.log('Hello CloudDataManagerProvider Provider');
  }

  /*********************
   * GET Data Methods *
   *********************/
  public getSyncInfo(){
    this.http.get(this.sServerURL + this.sUserName + "/syncInfo.json")
    .map(data => data.json())
    .subscribe( data => {console.log(data); });
  }

  public getAllGuests(){
    this.http.get(this.sServerURL + this.sUserName + "/guests.json")
    .map(data => data.json())
    .subscribe( data => {console.log(data); });
  }

  public getAllAccommodations(){
    this.http.get(this.sServerURL + this.sUserName + "/accommodations.json")
    .map(data => data.json())
    .subscribe( data => {console.log(data); });
  }

  /*********************
   * POST Data Methods *
   *********************/
  public updateSyncInfo(){
    let lastSyncDate = new Date();
    let syncInfo = {lastSyncDate};
    this.http.post(this.sServerURL + this.sUserName + "/syncInfo.json", syncInfo)
    .subscribe( (data) => { console.log(data) });
  }

  public uploadNewGuest(oGuestData){
    this.http.post(this.sServerURL + this.sUserName + "/guests.json", oGuestData)
    .subscribe( (data) => { console.log(data) });
  }

  public uploadAccommodation(oAccommodationData){
    this.http.post(this.sServerURL + this.sUserName + "/accommodations.json", oAccommodationData)
    .subscribe( (data) => { console.log(data) });
  }



}
