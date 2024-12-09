package com.suprabit.shms.controller;

import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.suprabit.shms.model.Blinds;
import com.suprabit.shms.repository.BlindsRepository;

@RestController
@RequestMapping("blinds")
public class BlindsController {

    @Autowired
    private BlindsRepository repository;

    @GetMapping("{id}")
    public ResponseEntity<Optional<Blinds>> getById(@PathVariable long id) {
	return new ResponseEntity<Optional<Blinds>>(repository.findById(id), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<Optional<Iterable<Blinds>>> getByName(@RequestParam String name) {
	return new ResponseEntity<Optional<Iterable<Blinds>>>(repository.findByName(name), HttpStatus.OK);
    }

    @GetMapping("all")
    public ResponseEntity<Iterable<Blinds>> getAll() {
	return new ResponseEntity<Iterable<Blinds>>(repository.findAll(), HttpStatus.OK);
    }

    @Transactional
    @PostMapping("add")
    public ResponseEntity<Blinds> postAdd(@RequestBody Blinds entity) {
	return new ResponseEntity<Blinds>(repository.save(entity), HttpStatus.OK);
    }

    @Transactional
    @DeleteMapping("delete/{id}")
    public ResponseEntity<Blinds> postDelete(@PathVariable long id) throws NoSuchElementException {

	// Attempts to find the element, otherwise throw NoSuchElementException
	Blinds entity = null;
	try {
	    entity = repository.findById(id).get();
	} catch (NoSuchElementException e) {
	    return new ResponseEntity<Blinds>(HttpStatus.NOT_FOUND);
	}

	repository.deleteById(id);
	return new ResponseEntity<Blinds>(entity, HttpStatus.OK);
    }

    @Transactional
    @PutMapping("update")
    public ResponseEntity<Blinds> putUpdate(@RequestBody Blinds entity) {
	return new ResponseEntity<Blinds>(repository.save(entity), HttpStatus.OK);
    }
}
