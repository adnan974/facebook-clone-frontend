import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/shared/models/register.entity';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public userData: Register = new Register();
  public isBirthDayValid: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formData: any) {
    console.log("on submit")
    console.log(formData)
  }

  birthDayIsValid(birthday: string) {
    let yearsOfBirthday: number = parseInt(birthday.substring(0, 4));
    let currentYear: number = new Date().getFullYear();

    if (yearsOfBirthday < currentYear - 13) {
      this.isBirthDayValid = true;
    }
    else {
      this.isBirthDayValid = false;
    }
  }
}
