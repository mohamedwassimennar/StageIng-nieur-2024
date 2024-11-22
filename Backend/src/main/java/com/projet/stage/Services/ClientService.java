package com.projet.stage.Services;

import com.projet.stage.Entites.Admin;
import com.projet.stage.Entites.Client;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
public interface ClientService {
    Client ajouterClient(Client client);
    Client modifierClient(Client client);
    List<Client> afficherClient();
    void supprimerClient(Long id);
    Optional<Client> afficherClientById(Long id);
}
