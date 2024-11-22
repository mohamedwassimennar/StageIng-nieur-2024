import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../Entities/Admin.Entities';
import { Observable } from 'rxjs';
import { Client } from '../Entities/Client.Entities';
import { Produit } from '../Entities/Produit.Entities';
import { Contact } from '../Entities/Contact.Entities';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  loginUserUrl = 'http://localhost:8081/api/admin/login';
  apiUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient) { }

  // Méthodes pour les administrateurs
  addAdmin(admin: Admin): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/admin`, admin);
  }

  onDeleteAdmin(id: number): Observable<any> {
    const url = `${this.apiUrl}/admin/${id}`;
    return this.http.delete(url);
  }

  getAdmin(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${this.apiUrl}/admin`);
  }

  // Méthodes pour les clients
  addClient(client: Client): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/client`, client);
  }

  onDeleteClient(id: number): Observable<any> {
    const url = `${this.apiUrl}/client/${id}`;
    return this.http.delete(url);
  }

  getClient(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/client`);
  }

  // Méthodes pour les contacts
  addContact(contact: Contact): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/contact`, contact);
  }

  onDeleteContact(id: number): Observable<any> {
    const url = `${this.apiUrl}/contact/${id}`;
    return this.http.delete(url);
  }

  getContact(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.apiUrl}/contact`);
  }

  // Méthodes d'authentification
  loginAdmin(admin: Admin): Observable<any> {
    return this.http.post<any>(this.loginUserUrl, admin);
  }

  updateAdmin(id: number, admin: Admin): Observable<any> {
    const url = `${this.apiUrl}/admin/${id}`;
    return this.http.put<any>(url, admin);
  }

  // Récupérer un administrateur par ID
  findAdminById(id: number): Observable<Admin> {
    const url = `${this.apiUrl}/admin/${id}`; // Utilisation des backticks pour une interpolation correcte
    return this.http.get<Admin>(url);
  }

  isLoggedIn(){

    let token = localStorage.getItem("myToken");

    if (token) {
      return true ;
    } else {
      return false;
    }
  }

  // Méthodes pour les produits
addProduit(produit: Produit): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/produit`, produit);
}

getProduit(): Observable<Produit[]> {
  return this.http.get<Produit[]>(`${this.apiUrl}/produit`);
}

getProduitById(id: number): Observable<Produit> {
  return this.http.get<Produit>(`${this.apiUrl}/produit/${id}`);
}

updateProduit(id: number, produit: Produit): Observable<Produit> {
  return this.http.put<Produit>(`${this.apiUrl}/produit/${id}`, produit);
}


  onDeleteProduit(id: number): Observable<any> {
    const url = `${this.apiUrl}/produit/${id}`;
    return this.http.delete(url);
  }

  
}
