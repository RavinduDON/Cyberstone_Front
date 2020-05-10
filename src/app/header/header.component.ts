import { Component, OnInit } from '@angular/core';
import {NavbarserviceService} from "../_servises/navbarservice.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public nav: NavbarserviceService) { }

  ngOnInit(): void {
  }

}
