import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceclientService } from '../services/serviceclient.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  client={
    code:'',
    nom:'',
    prenom:'',
    datenaissance:'',
    adresse:'',
    ville:'',
    codepostal:'',
    tel:'',
    fax:'',
    gsm:'',
    email:''
  }
  

  constructor(private router:Router,private sc:ServiceclientService) { }

  ngOnInit(): void {
  }
  ajouter(){
    this.router.navigate(['/produit']);
  }
  home(f){
 
    const data={
     code:this.client.code,
     nom:this.client.nom,
     prenom:this.client.prenom,
     datenaissance:this.client.datenaissance,
     adresse:this.client.adresse,
     ville:this.client.ville,
     codepostal:this.client.codepostal,
     tel:this.client.tel,
     fax:this.client.fax,
     gsm:this.client.gsm,
     email:this.client.email

    };
    this.sc.create(data).subscribe(
      response =>{
        console.log(response);
      },
      error=>{
       console.log(error);
       
      });
   }

}
