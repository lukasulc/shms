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

import com.suprabit.shms.model.Camera;
import com.suprabit.shms.repository.CameraRepository;

@RestController
@RequestMapping("camera")
public class CameraController {

    @Autowired
    private CameraRepository repository;

    @GetMapping("{id}")
    public ResponseEntity<Optional<Camera>> getById(@PathVariable long id) {
	return new ResponseEntity<Optional<Camera>>(repository.findById(id), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<Optional<Iterable<Camera>>> getByName(@RequestParam String name) {
	return new ResponseEntity<Optional<Iterable<Camera>>>(repository.findByName(name), HttpStatus.OK);
    }

    @GetMapping("all")
    public ResponseEntity<Iterable<Camera>> getAll() {
	return new ResponseEntity<Iterable<Camera>>(repository.findAll(), HttpStatus.OK);
    }

    @Transactional
    @PostMapping("add")
    public ResponseEntity<Camera> postAdd(@RequestBody Camera entity) {
	return new ResponseEntity<Camera>(repository.save(entity), HttpStatus.OK);
    }

    @Transactional
    @DeleteMapping("delete/{id}")
    public ResponseEntity<Camera> postDelete(@PathVariable long id) throws NoSuchElementException {

	// Attempts to find the element, otherwise throw NoSuchElementException
	Camera entity = null;
	try {
	    entity = repository.findById(id).get();
	} catch (NoSuchElementException e) {
	    return new ResponseEntity<Camera>(HttpStatus.NOT_FOUND);
	}

	repository.deleteById(id);
	return new ResponseEntity<Camera>(entity, HttpStatus.OK);
    }

    @Transactional
    @PutMapping("update")
    public ResponseEntity<Camera> putUpdate(@RequestBody Camera entity) {
	return new ResponseEntity<Camera>(repository.save(entity), HttpStatus.OK);
    }
}
