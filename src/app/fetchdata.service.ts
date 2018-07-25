import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {

  data ;
  constructor() { 
    this.data =[
      {
        id : 1,
        title : 'Nurender',
        body : 'Nurender Bishnoi'
      },
      {
        id : 2,
        title : 'Nurender',
        body : 'Nurender Bishnoi'
      },
      {
        id : 3,
        title : 'Nurender',
        body : 'Nurender Bishnoi'
      }
    ]
  }
}
