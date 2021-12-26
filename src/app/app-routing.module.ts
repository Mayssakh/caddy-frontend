import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AffichageComponent } from './affichage/affichage.component';
import { ClientComponent } from './client/client.component';
import { CommandeComponent } from './commande/commande.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  {path:'',component:ClientComponent},
  {path:'produit',component:ProduitComponent},
  {path:'commande',component:CommandeComponent},
  {path:'affichage',component:AffichageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
