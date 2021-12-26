import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicecommandeService } from '../services/servicecommande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

 commande={
    numero:'',
    date:'',
    prixtotal:'',
    etat:''
  }
  constructor(private router:Router,private sc:ServicecommandeService) { }

  ngOnInit(): void {
  }
  produit(f){
 
    const data={
     numero:this.commande.numero,
     date:this.commande.date,
     prixtotal:this.commande.prixtotal,
     etat:this.commande.etat
    

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
