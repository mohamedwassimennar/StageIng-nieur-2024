import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Produit } from '../Entities/Produit.Entities';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {
  produitForm: FormGroup;

  constructor(private fb: FormBuilder, private crudService: CrudService, private router: Router) {
    this.produitForm = this.fb.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      prix: ['', Validators.required],
      quantite: ['', Validators.required],
      image: [''] // Ajoutez ce champ si nécessaire
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.produitForm.valid) {
      const produit = this.produitForm.value;
      this.crudService.addProduit(produit).subscribe(() => {
        this.router.navigate(['/listProduit']); // Redirige vers la liste des produits
      }, error => {
        console.error('Erreur lors de l\'ajout du produit:', error);
      });
    }
  }
}
