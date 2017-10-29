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
  constructor() { }
  ;
  ngOnInit() {
      setTimeout(() => {
          this.allowAddServer = true;
      }, 2000)
  }


}
