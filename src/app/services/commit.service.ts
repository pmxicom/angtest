import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoaderService } from '../services/loader.service';
import {tap,delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommitService {

  constructor(
    private httpClient: HttpClient, 
    private loaderService:LoaderService,
  ) { }

    // To get all types of trips
  public getAllTripsService(){
    this.loaderService.show();
    return this.httpClient.get(`${environment.baseUrlGitHub+'/'+environment.gitHubUser+'/'+environment.gitHubProjectRapo}/commits`).pipe(
      tap(res => {
        this.loaderService.hide();
    },(HttpErrorResponse:any) => {
      this.loaderService.hide();
      if(HttpErrorResponse.error.status_code){
      }
    })); 
  }
}
