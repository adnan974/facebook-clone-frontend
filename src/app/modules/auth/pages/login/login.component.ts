import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from '../../components/register/register.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public projectName: string = environment.projectName

  public loginFormData = {
    login:"",
    password:""
  }

  constructor(
    private http: HttpClient,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

  }

  onSubmit(formData: any) {

    console.log(formData);
    this.http.post(`${environment.BASE_URL}/login`, formData).subscribe((res) => {
      console.log(res);
    });

  }

  openRegisterPopup() {
    const dialogRef = this.dialog.open(RegisterComponent,{
      width:'432px',
      height:'90vh'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
