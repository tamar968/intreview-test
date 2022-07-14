import { Component, Inject, Input, OnInit } from '@angular/core';
import { CoordinateService } from 'src/app/services/coordinate.service';
import {MatDialog} from '@angular/material/dialog';
import { CoordinateDialogComponent } from '../coordinate-dialog/coordinate-dialog.component';

@Component({
  selector: 'app-current-coordinate',
  templateUrl: './current-coordinate.component.html',
  styleUrls: ['../coordinate/coordinate.component.scss']
})
export class CurrentCoordinateComponent implements OnInit {

  comment:string;
  constructor(public coordinateSvc: CoordinateService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openDialog(): void {
    this.dialog.open(CoordinateDialogComponent, {
      width: '250px',
      data: {'coordinate': this.coordinateSvc.currentCoordinate, 'comment': this.comment}
    });
  }
}
