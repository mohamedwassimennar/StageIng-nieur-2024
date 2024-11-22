import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../Entities/Contact.Entities';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent {
  role:String
  listContact: Contact[];
 
  constructor(private service:CrudService,private router:Router ) { }


  //supprimer
  Deletecontact(contact: Contact){
    if(confirm("Voulez vous supprimer cet contact avec l'ID " + contact.id + " ?")) {
     
      this.service.onDeleteContact(contact.id).subscribe(() => {
        this.router.navigate(['/listContact']).then(() => {
          window.location.reload()
        })
      })
   
  }
}


  ngOnInit(): void {
    this.role=localStorage.getItem("role")as string;
    this.service.getContact().subscribe(contact => {
      this.listContact = contact
    })
  }
}
