import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Entities/Admin.Entities';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent {
  role:String
  listAdmin: Admin[];
 
  constructor(private service:CrudService,private router:Router ) { }


  //supprimer
  Deleteadmin(admin: Admin){
    if(confirm("Voulez vous supprimer cet admin avec l'ID " + admin.id + " ?")) {
     
      this.service.onDeleteAdmin(admin.id).subscribe(() => {
        this.router.navigate(['/listAdmin']).then(() => {
          window.location.reload()
        })
      })
   
  }
}


  ngOnInit(): void {
    this.role=localStorage.getItem("role")as string;
    this.service.getAdmin().subscribe(admin => {
      this.listAdmin = admin
    })
  }

}
