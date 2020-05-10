import { Component, OnInit } from '@angular/core';
import {NavbarserviceService} from "../_servises/navbarservice.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public nav:NavbarserviceService) { }

  ngOnInit(): void {
    this.nav.show();
  }

}
