import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceproduitService } from '../services/serviceproduit.service';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {

  produit
  affich
  id
  data
  constructor(private router:Router,private sp:ServiceproduitService) {
    this.sp.getAll().subscribe(data=>this.produit=data);
   }

  ngOnInit(): void {
    this.get_produit();
  }
  get_produit(){
    this.sp.getAll().subscribe(data=>{
        this.produit=data
        console.log(this.produit)
    });
  }
  commande(){
    this.router.navigate(['/commande']);
  }
  add(){
    this.router.navigate(['/produit']);
  }
  update(){
    this.sp.update(this.id,this.data).subscribe(data=>{
      this.produit=data
      console.log(this.produit)
  });
  }
  delete(){
    this.sp.delete(this.id).subscribe(data=>{
      this.produit=data
      console.log(this.produit)
  });

  }

}
