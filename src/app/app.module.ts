import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { Route } from '../../node_modules/@angular/compiler/src/core';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';

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
    path : "posts/:id",
    component: PostComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes , {useHash :true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
