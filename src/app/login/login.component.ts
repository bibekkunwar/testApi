import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form!: FormGroup;

  constructor(private _apiService: DemoService){}

  ngOnInit(): void {

    this.CreateForm();
  }

  CreateForm() {
    this.form =new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    })
  }
token: string = '';

  login() {
    console.log(this.form.value);

    localStorage.setItem('token', JSON.stringify(this.token));

    this._apiService.login(this.form.value.username, this.form.value.password).subscribe((res) => {
      if (res) {
      console.log("done");


      }

    });


    // this._apiService.login(this.form.value.username, this.form.value.password).subscribe((res) => {
    //   console.log('login response', res);

    //   localStorage.setItem('token', JSON.stringify(this.token))
    // });
  }

  getList() {
    this._apiService.getBlogList()
    .subscribe((res) => console.log(res));
  }

}
