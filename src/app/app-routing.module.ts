import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CategoryComponent} from "./category/category.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {TermsComponent} from "./terms/terms.component";
import {ProfileComponent} from "./profile/profile.component";
import {EditProfileComponent} from "./edit-profile/edit-profile.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "category",
    component: CategoryComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "terms",
    component: TermsComponent,
  },
  {
    path: "profile",
    component: ProfileComponent,
  },
  {
    path: "editprofile",
    component: EditProfileComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "",
    pathMatch: 'full',
    redirectTo: "/home",
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
