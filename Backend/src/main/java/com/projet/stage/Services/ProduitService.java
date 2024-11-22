package com.projet.stage.Services;

import com.projet.stage.Entites.Produit;

import java.util.List;

public interface ProduitService {
    List<Produit> findAll();
    Produit save(Produit produit);
    Produit findById(Long id);
    void delete(Long id);
    Produit update(Long id, Produit produit);
}
