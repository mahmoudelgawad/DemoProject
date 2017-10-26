import { Component } from '@angular/core';

@Component({
    
    selector: 'app-root',
    templateUrl: './app.component.html',
    //template:`mahmoud ahmed {{title}}`
    //styleUrls: ['./app.component.css']
    styles: [`h3
{
color:green;
}`]
})
export class AppComponent {
    title = 'Mahmoud app';
    name = '';
}
