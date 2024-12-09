package com.suprabit.shms.model;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "thermostat_device")
public class Thermostat extends Device {

    public static enum ThermostatMode {
	HEATING, COOLING, OFF
    }

    @NotNull(message = "temperature has to be present")
    private double temperature = 23.5;

    @Enumerated(EnumType.STRING)
    private ThermostatMode mode = ThermostatMode.OFF;

    public Thermostat(long id, String name, double temperature, ThermostatMode mode) {
	super(id, name);
	this.temperature = temperature;
	this.mode = mode;
    }

    public Thermostat() {
    }

    public double getTemperature() {
	return temperature;
    }

    public void setTemperature(double temperature) {
	this.temperature = temperature;
    }

    public ThermostatMode getMode() {
	return mode;
    }

    public void setMode(ThermostatMode mode) {
	this.mode = mode;
    }

}
