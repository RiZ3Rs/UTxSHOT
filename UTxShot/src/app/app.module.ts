import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    WikishotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
