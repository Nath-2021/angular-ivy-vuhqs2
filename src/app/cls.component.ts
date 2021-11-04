import { Component } from '@angular/core';

@Component({
  selector: 'cls',
  template: `
  
  <button class=' btn btn-primary' [class.cls]="cls" >Start</button>
  <button
  [class.btn]="cl1"
  [class.btn-primary]="cl2"
  [class.btn-warning="cl4"
  [class.cls]="cl3">Quit</button>
  `
})


export class ClsComponent {
  cl1=true;
  cl2=true;
  cl3=false;
  cl4=false;
}