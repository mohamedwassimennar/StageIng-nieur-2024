import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { LoginComponent } from './login/login.component';
import { ListClientComponent } from './list-client/list-client.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { ModifierAdminComponent } from './modifier-admin/modifier-admin.component';
import { AuthGuard } from './service/AuthGuard.service';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './Tous/sidebar/sidebar.component';
import { FooterComponent } from './Tous/footer/footer.component';

const routes: Routes = [
  {path:'ajouterAdmin',component:AjouterAdminComponent,canActivate:[AuthGuard]},
  {path:'listAdmin',component:ListAdminComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'listClient',component:ListClientComponent,canActivate:[AuthGuard]},
  {path:'listProduit',component:ListProduitComponent,canActivate:[AuthGuard]},
  {path:'listContact',component:ListContactComponent,canActivate:[AuthGuard]},
  {path:'ajouterProduit',component:AjouterProduitComponent,canActivate:[AuthGuard]},
  {path:'modifierAdmin/:id',component:ModifierAdminComponent,canActivate:[AuthGuard]},
  {path:'modifierProduit/:id',component:ModifierProduitComponent,canActivate:[AuthGuard]},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'sidebar',component:SidebarComponent,canActivate:[AuthGuard]},
  {path:'footer',component:FooterComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
