package com.suprabit.shms.model;

import org.hibernate.validator.constraints.Range;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "blinds_device")
public class Blinds extends Device {

    @NotNull(message = "state has to be present")
    private boolean state;

    @Range(min = 0, max = 100, message = "Blinds must be in range from 0 to 100")
    private long position;

    public Blinds(long id, String name, boolean state, long position) {
	super(id, name);
	this.state = state;
	this.position = position;
    }

    public Blinds() {
    }

    public boolean getState() {
	return state;
    }

    public void setState(boolean state) {
	this.state = state;
    }

    public long getPosition() {
	return position;
    }

    public void setPosition(long position) {
	this.position = position;
    }
}
