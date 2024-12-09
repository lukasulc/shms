package com.suprabit.shms.model;

import com.suprabit.shms.model.device.actions.ToggleState;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "light_device")
public class Light extends Device implements ToggleState {

    @Nonnull
    private Boolean state = false;

    @Nonnull
    private Integer brightness = 100;

    public Light(Long id, String name, Boolean state, Integer brightness) {
	super(id, name);
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
    public Boolean toggle() {
	state = !state;
	return state;
    }

}
