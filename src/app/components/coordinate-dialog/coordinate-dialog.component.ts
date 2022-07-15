import { Component, Inject, Input, OnInit } from '@angular/core';
import { CoordinateService } from 'src/app/services/coordinate.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CurrentCoordinateComponent } from '../current-coordinate/current-coordinate.component';
import { CoordinateWithComment } from 'src/app/models/coordinate-with-comment';


@Component({
  selector: 'app-coordinate-dialog',
  templateUrl: './coordinate-dialog.component.html',
  styleUrls: ['./coordinate-dialog.component.scss']
})

export class CoordinateDialogComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<CurrentCoordinateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CoordinateWithComment,
    public coordinateSvc: CoordinateService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveInList():void{
    this.coordinateSvc.coordinatesList.push(this.data);
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
