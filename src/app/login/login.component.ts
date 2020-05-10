import { Component, OnInit } from '@angular/core';
import {NavbarserviceService} from "../_servises/navbarservice.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public nav: NavbarserviceService) { }

  ngOnInit(): void {
    this.nav.hide();
  }


}
