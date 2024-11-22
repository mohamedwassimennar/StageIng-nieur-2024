package com.projet.stage.RestController;

import com.projet.stage.Entites.Contact;
import com.projet.stage.Repository.ContactRepository;
import com.projet.stage.Services.ContactService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping(value ="/contact")
public class ContactRestController {
    @Autowired
    ContactService contactService;

    @RequestMapping(method = RequestMethod.POST )
    public Contact AjouterContact (@RequestBody Contact contact){
        return contactService.ajouterContact(contact);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE )

    public void suppContact(@PathVariable("id") Long id){
        contactService.supprimerContact(id);

    }
    @RequestMapping(method = RequestMethod.GET )
    public List<Contact> afficherContact(){
        return contactService.afficherContact();
    }
}
