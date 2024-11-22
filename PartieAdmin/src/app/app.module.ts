import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListClientComponent } from './list-client/list-client.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { ModifierAdminComponent } from './modifier-admin/modifier-admin.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { SidebarComponent } from './Tous/sidebar/sidebar.component';
import { FooterComponent } from './Tous/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    AjouterAdminComponent,
    ListAdminComponent,
    LoginComponent,
    ListClientComponent,
    ListProduitComponent,
    ListContactComponent,
    AjouterProduitComponent,
    ModifierAdminComponent,
    ModifierProduitComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
