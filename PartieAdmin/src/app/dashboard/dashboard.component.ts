import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  adminCount: number = 0;
  clientCount: number = 0;
  contactCount: number = 0;
  produitCount: number = 0;
  superAdminCount: number = 0;
  subAdminCount: number = 0;
  admins: any[] = []; // Ajout de la liste des administrateurs

  constructor(private service: CrudService) {}

  ngOnInit(): void {
    // Récupération et comptage des administrateurs
    this.service.getAdmin().subscribe(admins => {
      this.admins = admins; // Stocker la liste des administrateurs
      this.adminCount = admins.length;

      // Compter le nombre de super admins et de sous admins ici
      this.superAdminCount = admins.filter(admin => admin.role === 'super admin').length;
      this.subAdminCount = admins.filter(admin => admin.role === 'sous admin').length;

      // Créer le graphique après avoir mis à jour les compteurs
      this.createChart();
    });
  
    // Récupération et comptage des clients
    this.service.getClient().subscribe(clients => {
      this.clientCount = clients.length;
    });
  
    // Récupération et comptage des contacts
    this.service.getContact().subscribe(contacts => {
      this.contactCount = contacts.length;
    });
  
    // Récupération et comptage des produits
    this.service.getProduit().subscribe(produits => {
      this.produitCount = produits.length;
    });
  }

  createChart() {
    const ctx = document.getElementById('total-users') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie', // ou 'bar' pour un graphique à barres
      data: {
        labels: ['Super Admins', 'Sous Admins'],
        datasets: [{
          label: 'Total Users',
          data: [this.superAdminCount, this.subAdminCount],
          backgroundColor: ['#19204e', '#d00f0f'], // Couleurs des segments
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}
