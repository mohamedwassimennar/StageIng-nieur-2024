package com.projet.stage.Services;

import com.projet.stage.Entites.Produit;
import com.projet.stage.Repository.ProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProduitServiceImpl implements ProduitService {

    @Autowired
    private ProduitRepository produitRepository;

    @Override
    public List<Produit> findAll() {
        return produitRepository.findAll();
    }

    @Override
    public Produit save(Produit produit) {
        return produitRepository.save(produit);
    }

    @Override
    public Produit findById(Long id) {
        return produitRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Produit non trouvé avec l'id : " + id));
    }

    @Override
    public void delete(Long id) {
        produitRepository.deleteById(id);
    }

    @Override
    public Produit update(Long id, Produit produit) {
        // Vérifier si le produit existe
        Produit existingProduit = findById(id);
        // Mettre à jour les champs de l'entité existante
        existingProduit.setNom(produit.getNom());
        existingProduit.setImage(produit.getImage());
        existingProduit.setDescription(produit.getDescription());
        existingProduit.setQuantite(produit.getQuantite());
        existingProduit.setPrix(produit.getPrix());
        return produitRepository.save(existingProduit);
    }
}
