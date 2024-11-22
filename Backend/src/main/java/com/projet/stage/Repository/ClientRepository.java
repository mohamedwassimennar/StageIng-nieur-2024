package com.projet.stage.Repository;

import com.projet.stage.Entites.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client,Long> {
    Client findClientByEmail(String email);

    boolean existsByEmail(String email);
}
