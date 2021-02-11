import { Component, OnInit } from '@angular/core';
import { DataService } from  '../data.service';

@Component({
  selector: 'app-department-list',
  template: `
          <div *ngFor = " let my of allEmp">
              <li> 
              <h3>this is user id :{{my.userId}}</h3>
              <h4>this is title:{{my.title}}</h4>
              <p>Body content :{{my.body}}</p>
              
              </li> 
          </div> 

         
  `,
  styles: [
    ' li { list-style:none;} div{background-color:yellow;}'
  ]
})
export class DepartmentListComponent implements OnInit {

  public allEmp :any = [];

  constructor(private _service:DataService) { 
   
  }

  get(){
    this._service.getAllEmployee().subscribe(res => this.allEmp = res)  }
  

  ngOnInit(): void {

    this.get();
  }

}
