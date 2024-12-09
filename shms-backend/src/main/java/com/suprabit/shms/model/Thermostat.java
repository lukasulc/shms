package com.suprabit.shms.model;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;

@Entity
@Table(name = "thermostat_device")
public class Thermostat extends Device {

    public static enum ThermostatMode {
	HEATING, COOLING, OFF
    }

    @Nonnull
    private Double temperature = 23.5;

    @Nonnull
    @Enumerated(EnumType.STRING)
    private ThermostatMode mode = ThermostatMode.OFF;

    public Thermostat(Long id, String name, Double temperature, ThermostatMode mode) {
	super(id, name);
	this.temperature = temperature;
	this.mode = mode;
    }

    public Thermostat() {
    }

    public Double getTemperature() {
	return temperature;
    }

    public void setTemperature(Double temperature) {
	this.temperature = temperature;
    }

    public ThermostatMode getMode() {
	return mode;
    }

    public void setMode(ThermostatMode mode) {
	this.mode = mode;
    }

}
