import { Component, Input, OnInit } from '@angular/core';
import { Coordinate } from '../../models/coordinate';


@Component({
  selector: 'app-coordinate',
  templateUrl: './coordinate.component.html',
  styleUrls: ['./coordinate.component.scss']
})
export class CoordinateComponent implements OnInit {

  @Input() coordinate:Coordinate;

  constructor() { }

  ngOnInit(): void {
  }

}
