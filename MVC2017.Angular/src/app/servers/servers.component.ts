import { Component, OnInit } from '@angular/core';

@Component({
    //selector: '[app-servers]',
    selector: '.app-servers',
  //selector: 'app-servers',
  templateUrl: './servers.component.html',
//  template: 
// `<app-server></app-server>
//inline template
//<app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowAddServer: boolean = false;
    serverCreationStatus = "No Created server";
    serverName = "defaultServer";
    serverCreated = false;
    constructor() {
        setTimeout(() => {
            this.allowAddServer = true;
        }, 2000)
    }
  ;
  ngOnInit() {

  }
  onCreateServer() {
      this.serverCreated = true;
      this.serverCreationStatus = "New server Created !! " + this.serverName;
  }
  onUpdateServerName(event: Event) {
      console.log(event);
      this.serverName = (<HTMLInputElement>event.target).value;
  }


}
