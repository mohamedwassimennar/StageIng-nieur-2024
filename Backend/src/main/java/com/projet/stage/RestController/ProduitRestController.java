package com.projet.stage.RestController;

import com.projet.stage.Entites.Produit;
import com.projet.stage.Services.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")  // Permet à toutes les origines d'accéder aux méthodes de ce contrôleur
@RequestMapping("/produit")
public class ProduitRestController {

    @Autowired
    private ProduitService produitService;

    @GetMapping
    public ResponseEntity<List<Produit>> getAllProduits() {
        List<Produit> produits = produitService.findAll();
        return ResponseEntity.ok(produits);
    }

    @PostMapping
    public ResponseEntity<Produit> addProduit(@RequestBody Produit produit) {
        Produit nouveauProduit = produitService.save(produit);
        return ResponseEntity.status(HttpStatus.CREATED).body(nouveauProduit);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produit> getProduitById(@PathVariable Long id) {
        Produit produit = produitService.findById(id);
        if (produit != null) {
            return ResponseEntity.ok(produit);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduit(@PathVariable Long id) {
        produitService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}") // Ajout de la méthode PUT
    public ResponseEntity<Produit> updateProduit(@PathVariable Long id, @RequestBody Produit produit) {
        Produit updatedProduit = produitService.update(id, produit);
        return ResponseEntity.ok(updatedProduit);
    }
}
