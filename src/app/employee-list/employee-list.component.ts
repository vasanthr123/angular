import { Component, OnInit } from '@angular/core';
import { DataService } from  '../data.service';

@Component({
  selector: 'app-employee-list',
  template: `
  <ul *ngFor = " let my of allEmp">
  <li> {{my.title}} <h2>{{my.body}}</h2> </li> 
</ul>
  `,
  styles: [' ul{background-color:pink;}'
  ]
})
export class EmployeeListComponent implements OnInit {

  public allEmp :any = [];
  constructor(private _service:DataService) { }



  get(){
    this._service.getAllEmployee().subscribe(res => this.allEmp = res)  }
  ngOnInit(): void {
    this.get();
  }


}
