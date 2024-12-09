package com.suprabit.shms.model;

import com.suprabit.shms.model.device.actions.BooleanState;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "blinds_device")
public class Blinds extends Device {

    private BooleanState state;

    private Long position;

    public Blinds(Long id, String name, BooleanState state, Long position) {
	super(id, name);
	this.state = state;
	this.position = position;
    }

    public Blinds() {
    }

    public BooleanState getState() {
	return state;
    }

    public void setState(BooleanState state) {
	this.state = state;
    }

    public Long getPosition() {
	return position;
    }

    public void setPosition(Long position) {
	this.position = position;
    }
}
