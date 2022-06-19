import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { FavoriComponent } from './favori/favori.component';
import { ArticleFormComponent } from './form/article-form/article-form.component';
import { ProduitFormComponent } from './form/produit-form/produit-form.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LieuxComponent } from './lieux/lieux.component';
import { PartiesComponent } from './parties/parties.component';
import { ProfileComponent } from './profile/profile.component';
import { VenteDetailComponent } from './vente-detail/vente-detail.component';
import { VentesComponent } from './ventes/ventes.component';
import { WikishotComponent } from './wikishot/wikishot.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'ventes',component: VentesComponent,
    children : [
    ]
  },
  {path:'wikishot', component: WikishotComponent},
  {path:'lieux', component: LieuxComponent},
  {path:'parties', component: PartiesComponent},
  {path:'connection', component:ConnectionComponent},
  {path:'inscription', component:InscriptionComponent},
  {path: 'article/:id', component: VenteDetailComponent },
  {path: 'profil/:id', component: ProfileComponent},
  {path: 'nouveauProduit', component : ProduitFormComponent},
  {path: 'nouveauArticle', component : ArticleFormComponent},
  {path: 'favoris/:id', component : FavoriComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
