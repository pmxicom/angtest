import { Component, OnInit } from '@angular/core';
import { CommitService } from '../../services/commit.service'
import * as moment from 'moment'

@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.css']
})
export class CommitComponent implements OnInit {
  public comitLists: any[] = [];

  constructor(
    private commitService: CommitService
  ) { }

  ngOnInit() {
    this.getAllCommits();// Calling function for fetching all commits.
  }
// To get all commits
  public getAllCommits(){
    this.commitService.getAllTripsService().subscribe((res:any)=>{
      this.comitLists = res;
      console.log(this.comitLists);
    },error => {
      //Can do anything if need with response
    }); 
  }

}
