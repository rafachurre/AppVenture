import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/*
  Generated class for the CloudSyncProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CloudSyncProvider {

  constructor(public http: Http, private storage: Storage) {
    console.log('Hello CloudSyncProvider Provider');
  }

  public checkSync(){
    let localLastSyncDate;
    this.storage.get("syncInfo").then((val) => {
      localLastSyncDate = val.lastSycDate;
    });
    

  }

}
