package com.suprabit.shms.repository;

import org.springframework.data.repository.CrudRepository;

import com.suprabit.shms.model.Device;

public interface DeviceRepository extends CrudRepository<Device, Long> /*, JpaRepository<Device, Long> */ {

}
