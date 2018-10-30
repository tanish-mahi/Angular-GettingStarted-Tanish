import { Component } from "@angular/core";

//Component Decorator
@Component({
  selector: 'pm-tanish-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
    <div>My First Component</div>
    <pm-products></pm-products>
  </div>
  `
})
export class TanishAppComponent
{
  pageTitle : string = 'Tanish Product Management';
}