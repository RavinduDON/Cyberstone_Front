import { Component, OnInit } from '@angular/core';
import {NavbarserviceService} from "../services/navbarservice.service";

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
