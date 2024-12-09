package com.suprabit.shms.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.suprabit.shms.model.Light;
import com.suprabit.shms.model.Thermostat;
import com.suprabit.shms.repository.LightRepository;
import com.suprabit.shms.repository.ThermostatRepository;
import com.suprabit.shms.service.DeviceService;

@RestController
public class DeviceController {

    @Autowired
    private DeviceService<Light> lightService;

    @Autowired
    private LightRepository lightRepository;

    @Autowired
    private DeviceService<Thermostat> thermostatService;

    @Autowired
    private ThermostatRepository thermostatRepository;

    @GetMapping("/")
    public String getMethodName() {
	return "Working!2";
    }

    @GetMapping("/lights")
    public Iterable<Light> getLights() {
	return this.lightService.get(lightRepository);
    }

    @GetMapping("/light")
    public Optional<Iterable<Light>> getLightsByName(@RequestParam String deviceName) {
	return this.lightService.getByName(lightRepository, deviceName);
    }

    @GetMapping("/thermostats")
    public Iterable<Thermostat> getThremostats() {
	return this.thermostatService.get(thermostatRepository);
    }

}
