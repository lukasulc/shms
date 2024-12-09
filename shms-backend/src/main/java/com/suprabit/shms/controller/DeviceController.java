package com.suprabit.shms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.suprabit.shms.model.Device;
import com.suprabit.shms.repository.DeviceRepository;

@RestController
@RequestMapping("device")
public class DeviceController {

    @Autowired
    private DeviceRepository<Device> deviceRepository;

    @GetMapping
    public ResponseEntity<Iterable<Device>> getMethodName() {
	return new ResponseEntity<Iterable<Device>>(deviceRepository.findAll(), HttpStatus.OK);
    }

}
