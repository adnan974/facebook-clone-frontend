import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(formData:any){

    console.log(formData);
    this.http.post(`${environment.BASE_URL}/login`,formData).subscribe((res)=>{
        console.log(res);
    });
    
  }

}
