import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthcomponentComponent } from './authcomponent/authcomponent.component';
import { CardviewComponent } from './cardview/cardview.component';
import { PatientdetailsComponent } from './patientdetails/patientdetails.component';
import { PatientlistComponent } from './patientlist/patientlist.component';


const routes: Routes = [
  { path: 'cardview', component: CardviewComponent },
  { path:'auth', component:AuthcomponentComponent},
  { path:'patient', component:PatientlistComponent},
  { path:'details', component:PatientdetailsComponent},
  { path: '', redirectTo: 'cardview', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }