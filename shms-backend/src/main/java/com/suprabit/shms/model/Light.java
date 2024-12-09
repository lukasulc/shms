package com.suprabit.shms.model;

import org.hibernate.validator.constraints.Range;

import com.suprabit.shms.model.device.actions.ToggleState;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "light_device")
public class Light extends Device implements ToggleState {

    @NotNull(message = "state has to be present")
    private boolean state = false;

    @Range(max = 100, message = "Brightness must be in range from 0 to 100")
    private int brightness = 100;

    public Light(long id, String name, boolean state, int brightness) {
	super(id, name);
	this.state = state;
	this.brightness = brightness;
    }

    public Light() {
    }

    public boolean getState() {
	return state;
    }

    public void setState(boolean state) {
	this.state = state;
    }

    public int getBrightness() {
	return brightness;
    }

    public void setBrightness(int brightness) {
	this.brightness = brightness;
    }

    @Override
    public boolean toggle() {
	state = !state;
	return state;
    }

}
