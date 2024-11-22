package com.projet.stage.Services;

import com.projet.stage.Entites.Client;
import com.projet.stage.Entites.Contact;

import java.util.List;
import java.util.Optional;

public interface ContactService {
    Contact ajouterContact(Contact contact);
    Contact modifierContact(Contact contact);
    List<Contact> afficherContact();
    void supprimerContact(Long id);
    Optional<Contact> afficherContactById(Long id);
}
