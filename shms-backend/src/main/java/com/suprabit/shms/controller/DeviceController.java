package com.suprabit.shms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.suprabit.shms.model.Device;
import com.suprabit.shms.service.DeviceService;

@RestController
public class DeviceController {

    @Autowired
    private DeviceService service;

    @GetMapping("/")
    public String getMethodName() {
	return "Working";
    }

    @GetMapping("/device")
    public Iterable<Device> geDevices(@RequestParam String param) {
	return this.service.get();
    }

}
