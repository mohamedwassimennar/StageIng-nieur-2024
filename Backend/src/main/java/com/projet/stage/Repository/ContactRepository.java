package com.projet.stage.Repository;

import com.projet.stage.Entites.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact,Long> {
    boolean existsByEmail(String email);

    Contact findContactByEmail(String email);
}
