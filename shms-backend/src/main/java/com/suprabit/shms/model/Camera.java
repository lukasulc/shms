package com.suprabit.shms.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "camera_device")
public class Camera extends Device {

    @NotNull(message = "state has to be present")
    private boolean state;

    @NotNull(message = "recording has to be present")
    private boolean recording;

    public Camera(long id, String name, boolean state, boolean recording) {
	super(id, name);
	this.state = state;
	this.recording = recording;
    }

    public Camera() {
    }

    public boolean getState() {
	return state;
    }

    public void setState(boolean state) {
	this.state = state;
    }

    public boolean getRecording() {
	return recording;
    }

    public void setRecording(boolean recording) {
	this.recording = recording;
    }

}
