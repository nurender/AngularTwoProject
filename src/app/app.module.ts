import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FetchdataService } from './fetchdata.service'

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { Route } from '../../node_modules/@angular/compiler/src/core';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { FatchdataComponent } from './fatchdata/fatchdata.component';
import { CustomDirective } from './custom.directive';
import { CustomComponent } from './custom/custom.component';
import { MyNgIfDirective } from './my-ng-if.directive';
import { NgIfCreateComponent } from './ng-if-create/ng-if-create.component';
import { HomeComponent } from './home/home.component';

 let routes : Routes = [
  {
    path : "login",
    component: LoginComponent
  },
  {
    path : "posts",
    component: PostsComponent
  },
  {
    path : "fatchdata",
    component: FatchdataComponent
  },
  {
    path : "posts/:id",
    component: PostComponent
  },
  {
    path : "Custom",
    component: CustomComponent
  },
  {
    path : "NgIf",
    component: NgIfCreateComponent
  },
  {
    path : "home",
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    PostsComponent,
    PostComponent,
    FatchdataComponent,
    CustomDirective,
    CustomComponent,
    MyNgIfDirective,
    NgIfCreateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes , {useHash :true })
  ],
  providers: [
    FetchdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
