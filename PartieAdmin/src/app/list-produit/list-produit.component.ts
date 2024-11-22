import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';
import { Produit } from '../Entities/Produit.Entities';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {
  produits: Produit[] = []; // Initialise le tableau de produits

  constructor(private crudService: CrudService, private router: Router) {}

  ngOnInit(): void {
    this.loadProduits(); // Charge les produits au démarrage
  }

  loadProduits(): void {
    this.crudService.getProduit().subscribe(
      (data: Produit[]) => {
        this.produits = data; // Remplit le tableau de produits avec les données récupérées
      },
      (error) => {
        console.error('Erreur lors de la récupération des produits:', error); // Gérer les erreurs
      }
    );
  }

  onEditProduit(id: number): void {
    this.router.navigate(['/edit-produit', id]); // Redirige vers le formulaire d'édition
  }

  // Méthode pour supprimer un produit
  onDeleteProduit(produit: Produit): void {
    if (confirm("Voulez-vous supprimer ce produit avec l'ID " + produit.id + " ?")) {
      this.crudService.onDeleteProduit(produit.id).subscribe(() => {
        this.loadProduits(); // Recharge les produits après la suppression
      }, (error) => {
        console.error('Erreur lors de la suppression du produit:', error); // Gérer les erreurs
      });
    }
  }
}
