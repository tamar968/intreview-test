import { Injectable } from '@angular/core';
import {interval, Observable, Subscription } from 'rxjs';
import { Coordinate } from '../models/coordinate';
import { HttpClient } from '@angular/common/http';
import { IssPosition } from '../models/iss-position';


@Injectable({
  providedIn: 'root'
})
export class CoordinateService {

  currentCoordinate: Coordinate;
  coordinatesList  = [];
  sub: Subscription;


  constructor(protected http: HttpClient) { 
    this.currentCoordinate = new Coordinate();
    this.currentCoordinate.iss_position = new IssPosition()
    this.getCoordinates().subscribe(coordinate => this.currentCoordinate = coordinate);
    this.sub = interval(2000).subscribe((val) => { this.getCoordinates().subscribe(coordinate => this.currentCoordinate = coordinate);});
  }


  getCoordinates(): Observable<Coordinate> { 
    console.log('called'); 
    return this.http.get<Coordinate>("http://api.open-notify.org/iss-now.json");
   
  }

}
