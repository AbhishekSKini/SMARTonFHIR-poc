import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardviewComponent } from './cardview/cardview.component';
import { AuthcomponentComponent } from './authcomponent/authcomponent.component';
import { AppRoutingModule } from './app-routing.module';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { PatientdetailsComponent } from './patientdetails/patientdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    CardviewComponent,
    AuthcomponentComponent,
    PatientlistComponent,
    PatientdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
