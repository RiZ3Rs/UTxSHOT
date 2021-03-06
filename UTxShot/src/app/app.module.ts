import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';

import { ConnectionComponent } from './connection/connection.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LieuxComponent } from './lieux/lieux.component';
import { PartiesComponent } from './parties/parties.component';
import { VenteCarteComponent } from './vente-carte/vente-carte.component';
import { VenteDetailComponent } from './vente-detail/vente-detail.component';
import { VentesComponent } from './ventes/ventes.component';
import { WikishotComponent } from './wikishot/wikishot.component';
import { FirebaseService } from './services/firebase.service';
import { WikishotCarteComponent } from './wikishot-carte/wikishot-carte.component';
import { ProfileComponent } from './profile/profile.component';
import { TestComponent } from './test/test/test.component';


import { TestService } from './test/test.service';
import { ProduitService } from './services/produit.service';
import { ArticleService } from './services/article.service';
import { ProduitFormComponent } from './form/produit-form/produit-form.component';
import { ArticleFormComponent } from './form/article-form/article-form.component';
import { FavoriComponent } from './favori/favori.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { WikishotModifComponent } from './wikishot-modif/wikishot-modif.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    InscriptionComponent,
    LieuxComponent,
    PartiesComponent,
    VenteCarteComponent,
    VenteDetailComponent,
    VentesComponent,
    WikishotComponent,
    WikishotCarteComponent,
    ProfileComponent,
    TestComponent,
    ProduitFormComponent,
    ArticleFormComponent,
    FavoriComponent,
    EditProfilComponent,
    WikishotModifComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule
  ],
  providers: [
    FirebaseService,
    TestService,
    ProduitService,
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
