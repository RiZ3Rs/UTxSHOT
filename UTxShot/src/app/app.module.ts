import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';

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
import { FormVenteComponent } from './form-vente/form-vente.component';


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
    FormVenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
