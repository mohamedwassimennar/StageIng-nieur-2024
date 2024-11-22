import { Component, OnInit } from '@angular/core';
import { Admin } from '../Entities/Admin.Entities';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-modifier-admin',
  templateUrl: './modifier-admin.component.html',
  styleUrls: ['./modifier-admin.component.css']
})
export class ModifierAdminComponent implements OnInit {
  updateForm: FormGroup;
  id: number;
  currentAdmin = new Admin();
  userFile: any;
  public imagePath: any;
  imgURL: any = '';
  public message!: string;

  constructor(
    private fb: FormBuilder,
    private service: CrudService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Initialisation des contrôles de formulaire
    this.updateForm = this.fb.group({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      mdp: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required)
    });
  }

  // Getters pour faciliter l'accès aux contrôles de formulaire
  get nom() { return this.updateForm.get('nom'); }
  get prenom() { return this.updateForm.get('prenom'); }
  get email() { return this.updateForm.get('email'); }
  get mdp() { return this.updateForm.get('mdp'); }
  get role() { return this.updateForm.get('role'); }

  ngOnInit(): void {
    // Récupération de l'ID de l'administrateur à modifier
    this.id = this.route.snapshot.params['id'];
    this.service.findAdminById(this.id).subscribe((result) => {
      console.log(result);
      this.updateForm.patchValue({
        nom: result.nom,
        prenom: result.prenom,
        email: result.email,
        mdp: result.mdp,
        role: result.role
      });
    }, (error) => {
      console.error('Erreur lors de la récupération de l\'administrateur:', error);
    });
  }

  // Méthode pour mettre à jour l'administrateur
  updateAdmin() {
    if (this.updateForm.valid) {
      let data = this.updateForm.value;
      let admin = new Admin(
        this.id,
        data.nom,
        data.prenom,
        data.email,
        data.mdp,
        data.role
      );

      console.log(admin);
      this.service.updateAdmin(this.id, admin).subscribe((res) => {
        console.log('Administrateur mis à jour avec succès:', res);
        this.router.navigate(['/listAdmin']);
      }, (error) => {
        console.error('Erreur lors de la mise à jour de l\'administrateur:', error);
      });
    } else {
      console.error('Formulaire invalide');
    }
  }
}
