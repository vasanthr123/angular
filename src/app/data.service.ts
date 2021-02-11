import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public URL :string = "https://jsonplaceholder.typicode.com/posts"

  getAllEmployee(){
    return  this.http.get(this.URL);
     
  
  }
}
