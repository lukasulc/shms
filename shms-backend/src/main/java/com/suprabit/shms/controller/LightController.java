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

import com.suprabit.shms.model.Light;
import com.suprabit.shms.repository.LightRepository;

@RestController
@RequestMapping("light")
public class LightController {

    @Autowired
    private LightRepository repository;

    @GetMapping("{id}")
    public ResponseEntity<Optional<Light>> getById(@PathVariable long id) {
	return new ResponseEntity<Optional<Light>>(repository.findById(id), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<Optional<Iterable<Light>>> getByName(@RequestParam String name) {
	return new ResponseEntity<Optional<Iterable<Light>>>(repository.findByName(name), HttpStatus.OK);
    }

    @GetMapping("all")
    public ResponseEntity<Iterable<Light>> getAll() {
	return new ResponseEntity<Iterable<Light>>(repository.findAll(), HttpStatus.OK);
    }

    @Transactional
    @PostMapping("add")
    public ResponseEntity<Light> postAdd(@RequestBody Light entity) {
	return new ResponseEntity<Light>(repository.save(entity), HttpStatus.OK);
    }

    @Transactional
    @DeleteMapping("delete/{id}")
    public ResponseEntity<Light> postDelete(@PathVariable long id) throws NoSuchElementException {

	// Attempts to find the element, otherwise throw NoSuchElementException
	Light entity = null;
	try {
	    entity = repository.findById(id).get();
	} catch (NoSuchElementException e) {
	    return new ResponseEntity<Light>(HttpStatus.NOT_FOUND);
	}

	repository.deleteById(id);
	return new ResponseEntity<Light>(entity, HttpStatus.OK);
    }

    @Transactional
    @PutMapping("update")
    public ResponseEntity<Light> putUpdate(@RequestBody Light entity) {
	return new ResponseEntity<Light>(repository.save(entity), HttpStatus.OK);
    }
}
