import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Produit } from '../Entities/Produit.Entities';

@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.css']
})
export class ModifierProduitComponent implements OnInit {
  produitForm: FormGroup;
  produitId: number;

  constructor(
    private formBuilder: FormBuilder,
    private crudService: CrudService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.produitForm = this.formBuilder.group({
      nom: ['', Validators.required],
      image: [''],
      description: ['', Validators.required],
      quantite: ['', [Validators.required, Validators.pattern("^[0-9]*$")]], // Validation pour les nombres
      prix: ['', [Validators.required, Validators.pattern("^[0-9]*(\.[0-9]+)?$")]] // Validation pour les prix
    });
  }

  ngOnInit(): void {
    this.produitId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadProduit();
  }

  loadProduit(): void {
    this.crudService.getProduitById(this.produitId).subscribe((produit: Produit) => {
      this.produitForm.patchValue(produit); // Remplit le formulaire avec les données du produit
    });
  }

  onSubmit(): void {
    if (this.produitForm.valid) {
      this.crudService.updateProduit(this.produitId, this.produitForm.value).subscribe(() => {
        this.router.navigate(['/listProduit']); // Redirige vers la liste après la modification
      }, (error) => {
        console.error('Erreur lors de la mise à jour du produit:', error); // Gérer les erreurs
      });
    }
  }
}
