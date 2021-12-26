import { Component, OnInit } from '@angular/core';
import { ServiceclientService } from '../services/serviceclient.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
 
  constructor(private as:ServiceclientService) { 
  
     
  }

  ngOnInit(): void {
   

  }

}
