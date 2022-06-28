import { Component, OnInit ,Input } from '@angular/core';
import { DatatransferService } from '../datatransfer.service';
import { Data } from '../model/data';
// import {oauth2 as SMART} from 'fhirclient'
// import {fhirclient } from 'fhirclient/lib/types';
//(window as any).FHIR = FHIR;
@Component({
  selector: 'app-authcomponent',
  templateUrl: './authcomponent.component.html',
  styleUrls: ['./authcomponent.component.css']
})
export class AuthcomponentComponent implements OnInit {

  @Input() data: Data;

  constructor(private datatransferservice : DatatransferService) { }

  ngOnInit(): void {
    this.data=this.datatransferservice.getData()
    
   
  }


  sample(){
   
    console.log(this.data);
    FHIR.oauth2.authorize({
      'client_id': '85007b06-9ee4-4f77-8565-2acfdd34dfe7',
'scope':  'user/PATIENT.READ, user/PATIENT.SEARCH, user/OBSERVATION.READ, user/OBSERVATION.SEARCH',
      'redirect_uri': 'https://epic-1.abhishekkini.repl.co/app.html'
    });
  }


  // connect() {
  //   // let selectedScopes = this.scopes.filter(q => q.checked === true).map(v => v.value).join(' ');
  //   // if (this.server.supportsAccessTypes === true) {
  //   //   selectedScopes = selectedScopes + ' ' + this.accessType;
  //   // }
  //   // if (this.additionalScopes !== '') {
  //   //   selectedScopes = selectedScopes + ' ' + this.additionalScopes;
  //   // }
  //   const clientSettings: FHIR.SMART.OAuth2ClientSettings = {
  //     client_id: this.data.clientId,
  //     scope: "user/PATIENT.READ, user/PATIENT.SEARCH, user/OBSERVATION.READ, user/OBSERVATION.SEARCH",
  //     redirect_uri: "https://epic-1.abhishekkini.repl.co/app.html",
  //    // state: this.app.uniqueName,
  //   };
  //   // if (this.app.secret) {
  //   //   clientSettings.secret = this.app.secret;
  //   // }
  //   const oauth2Configuration: FHIR.SMART.OAuth2Configuration = {
  //     client: clientSettings,
  //     server: "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4"
  //   };
  //   FHIR.oauth2.authorize(oauth2Configuration, (authError) => {
  //     this._globalService.setError(authError);
  //   });
  // }



}
