import { Component } from '@angular/core';
import { Client } from '../Entities/Client.Entities';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent {
  role:String
  listClient: Client[];
 
  constructor(private service:CrudService,private router:Router ) { }


  //supprimer
  Deleteclient(client: Client){
    if(confirm("Voulez vous supprimer cet client avec l'ID " + client.id + " ?")) {
     
      this.service.onDeleteClient(client.id).subscribe(() => {
        this.router.navigate(['/listClient']).then(() => {
          window.location.reload()
        })
      })
   
  }
}


  ngOnInit(): void {
    this.role=localStorage.getItem("role")as string;
    this.service.getClient().subscribe(client => {
      this.listClient = client
    })
  }

}
