package com.suprabit.shms.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;

import com.suprabit.shms.model.Device;

@NoRepositoryBean
public interface DeviceRepository<T extends Device> extends CrudRepository<T, Long> /* , JpaRepository<T, Long> */ {

    @Query("select u from #{#entityName} as u where u.name = ?1 ")
    Optional<Iterable<T>> findByName(String deviceName);
}
