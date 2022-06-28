import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { oauth2 as SMART } from 'fhirclient';
import { DatatransferService } from '../datatransfer.service';
import { Data } from '../model/data';
@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})
export class CardviewComponent implements OnInit {
 
data:Data;
//cerner-client-id:string='d9f89a04-394e-4531-983b-eac1a22fcfd3';
//epic-client-id:4a552deb-61a9-4815-a8d3-82f031bddc69
  constructor(private router :Router , private datatransferservice : DatatransferService ) { }

  ngOnInit(): void {
  }

  ehrChoose(option:any){
    console.log(option);
    
    if(option==1)
    {
      this.data={
        clientId:'4a552deb-61a9-4815-a8d3-82f031bddc69',
      issUrl:'https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4'
      }
    }
   
   else{
    this.data={
      clientId:'d9f89a04-394e-4531-983b-eac1a22fcfd3',
  issUrl:'https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4'
    }
   }
  console.log(this.data.clientId);
   this.datatransferservice.setData(this.data)
   //this.router.navigate(['auth'])
//    SMART.init({
//     iss: this.issUrl,
//     redirectUri: "test.html",
//     clientId: this.clientId,
//     scope: 'user/Patient.read launch openid profile',

//     // WARNING: completeInTarget=true is needed to make this work in the codesandbox
//     // frame. It is otherwise not needed if the target is not another frame or window
//     // but since the entire example works in a frame here, it gets confused without
//     // setting this!
//     completeInTarget: true
// })
//     .then(client => {
//         // Fetch MedicationRequest and Patient in parallel to load the app faster
//         return Promise.all([
//             client.patient.read(),
//             client.request(`/MedicationRequest?patient=${client.patient.id}`, {
//                 resolveReferences: "medicationReference",
//                 pageLimit: 0,
//                 flat: true
//             })
//         ]);
//     })
    
  }

  
}
