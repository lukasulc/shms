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

import com.suprabit.shms.model.Thermostat;
import com.suprabit.shms.repository.ThermostatRepository;

@RestController
@RequestMapping("thermostat")
public class ThermostatController {

    @Autowired
    private ThermostatRepository repository;

    @GetMapping("{id}")
    public ResponseEntity<Optional<Thermostat>> getById(@PathVariable long id) {
	return new ResponseEntity<Optional<Thermostat>>(repository.findById(id), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<Optional<Iterable<Thermostat>>> getByName(@RequestParam String name) {
	return new ResponseEntity<Optional<Iterable<Thermostat>>>(repository.findByName(name), HttpStatus.OK);
    }

    @GetMapping("all")
    public ResponseEntity<Iterable<Thermostat>> getAll() {
	return new ResponseEntity<Iterable<Thermostat>>(repository.findAll(), HttpStatus.OK);
    }

    @Transactional
    @PostMapping("add")
    public ResponseEntity<Thermostat> postAdd(@RequestBody Thermostat entity) {
	return new ResponseEntity<Thermostat>(repository.save(entity), HttpStatus.OK);
    }

    @Transactional
    @DeleteMapping("delete/{id}")
    public ResponseEntity<Thermostat> postDelete(@PathVariable long id) throws NoSuchElementException {

	// Attempts to find the element, otherwise throw NoSuchElementException
	Thermostat entity = null;
	try {
	    entity = repository.findById(id).get();
	} catch (NoSuchElementException e) {
	    return new ResponseEntity<Thermostat>(HttpStatus.NOT_FOUND);
	}
	repository.deleteById(id);
	return new ResponseEntity<Thermostat>(entity, HttpStatus.OK);
    }

    @Transactional
    @PutMapping("update")
    public ResponseEntity<Thermostat> putUpdate(@RequestBody Thermostat entity) {
	return new ResponseEntity<Thermostat>(repository.save(entity), HttpStatus.OK);
    }
}
