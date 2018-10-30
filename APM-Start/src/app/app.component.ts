import { Component } from "@angular/core";

//Component Decorator
@Component({
  selector: 'pm-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>
  `
})
export class AppComponent
{
  pageTitle : string = 'Tanish Product Management';
}