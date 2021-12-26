import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceproduitService } from '../services/serviceproduit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produit={
    code:'',
    marque:'',
    modele:'',
    caracteristique:'',
    prixunitaire:'',
    quantite:'',
    libelle:''
  }

  constructor(private router:Router,private sp:ServiceproduitService) { }

  ngOnInit(): void {
  }

  ajouter(){
    this.router.navigate(['/affichage']);
  }
  produits(f){
 
    const data={
     code:this.produit.code,
     marque:this.produit.marque,
     modele:this.produit.modele,
     caracteristique:this.produit.caracteristique,
    prixunitaire:this.produit.prixunitaire,
     quantite:this.produit.quantite,
     libelle:this.produit.libelle
    

    };
    this.sp.create(data).subscribe(
      response =>{
        console.log(response);
      },
      error=>{
       console.log(error);
       
      });
   }

}
