import { Component, OnInit } from '@angular/core';
import { FetchdataService } from '../fetchdata.service'

@Component({
  selector: 'app-fatchdata',
  templateUrl: './fatchdata.component.html',
  styleUrls: ['./fatchdata.component.css']
})
export class FatchdataComponent implements OnInit {

  constructor(
    private fatchdata: FetchdataService
  ) { }
  result ;
  ngOnInit() {
    this.result = this.fatchdata.data
  }

}
