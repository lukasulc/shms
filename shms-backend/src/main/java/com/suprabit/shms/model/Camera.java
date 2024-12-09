package com.suprabit.shms.model;

import com.suprabit.shms.model.device.actions.BooleanState;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "camera_device")
public class Camera extends Device {

    @Nonnull
    private BooleanState state;

    @Nonnull
    private Boolean recording;

    public Camera(Long id, String name, BooleanState state, Boolean recording) {
	super(id, name);
	this.state = state;
	this.recording = recording;
    }

    public Camera() {
    }

    public BooleanState getState() {
	return state;
    }

    public void setState(BooleanState state) {
	this.state = state;
    }

    public Boolean getRecording() {
	return recording;
    }

    public void setRecording(Boolean recording) {
	this.recording = recording;
    }

}
