package com.projet.stage.Repository;

import com.projet.stage.Entites.Produit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProduitRepository extends JpaRepository<Produit, Long> {
    // Vous pouvez ajouter des méthodes de recherche personnalisées ici si nécessaire
}
