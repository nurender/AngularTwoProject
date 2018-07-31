import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private http: HttpClient
  ) { }

  MyFun(form) {
    this.http.post<any>('https://piet-login-app.herokuapp.com/user/login',{
      email: form.email,
      password: form.name
    }).subscribe(res => {
      console.log(res);

    } )
  }

  test() {
    this.router.navigate(['test'], {relativeTo: this.ar});
  }

}
