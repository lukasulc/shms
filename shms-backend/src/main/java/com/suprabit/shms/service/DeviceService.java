package com.suprabit.shms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.suprabit.shms.model.Device;
import com.suprabit.shms.repository.DeviceRepository;

@Service
public class DeviceService {

    @Autowired
    private DeviceRepository repo;

    public Iterable<Device> get() {
	return repo.findAll();
    }
}
