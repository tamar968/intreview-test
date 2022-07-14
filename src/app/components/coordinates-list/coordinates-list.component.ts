import { Component, OnInit } from '@angular/core';
import { CoordinateWithComment } from 'src/app/models/coordinate-with-comment';
import { Coordinate } from '../../models/coordinate';
import { IssPosition } from '../../models/iss-position';
import { CoordinateService } from '../../services/coordinate.service';

@Component({
  selector: 'app-coordinates-list',
  templateUrl: './coordinates-list.component.html',
  styleUrls: ['./coordinates-list.component.scss']
})
export class CoordinatesListComponent implements OnInit {


  constructor(public coordinateSvc: CoordinateService) { }

  ngOnInit(): void {

  }
}
