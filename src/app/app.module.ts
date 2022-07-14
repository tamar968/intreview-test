import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoordinateComponent } from './components/coordinate/coordinate.component';
import { CoordinatesListComponent } from './components/coordinates-list/coordinates-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CurrentCoordinateComponent } from './components/current-coordinate/current-coordinate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CoordinateDialogComponent } from './components/coordinate-dialog/coordinate-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CoordinateComponent,
    CoordinatesListComponent,
    CurrentCoordinateComponent,
    CoordinateDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
