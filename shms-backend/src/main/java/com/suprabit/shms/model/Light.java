package com.suprabit.shms.model;

import com.suprabit.shms.model.device.actions.ToggleState;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "LIGHT_DEVICES")
public class Light extends Device implements ToggleState {

    private Boolean state = true;

    private Integer brightness = 100;

    public Light(Long id, String name, String type, Boolean state, Integer brightness) {
	super(id, name, type);
	this.state = state;
	this.brightness = brightness;
    }

    public Light() {
    }

    public Boolean getState() {
	return state;
    }

    public void setState(Boolean state) {
	this.state = state;
    }

    public Integer getBrightness() {
	return brightness;
    }

    public void setBrightness(Integer brightness) {
	this.brightness = brightness;
    }

    @Override
    public boolean toggle() {
	state = !state;
	return state;
    }

}
