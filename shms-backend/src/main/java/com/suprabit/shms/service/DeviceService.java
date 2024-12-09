package com.suprabit.shms.service;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.suprabit.shms.model.Device;
import com.suprabit.shms.repository.DeviceRepository;

@Service
public class DeviceService<T extends Device> {

    public Iterable<T> get(CrudRepository<T, Long> repo) {
	return repo.findAll();
    }

    public Optional<Iterable<T>> getByName(DeviceRepository<T> repo, String deviceName) {
	return repo.findByName(deviceName);
    }
}
