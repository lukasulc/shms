package com.suprabit.shms.model.device.actions;

public enum BooleanState {
    ON(true), ACTIVE(true), OFF(false), INACTIVE(false);

    private final boolean truthy;

    private BooleanState(boolean state) {
	this.truthy = state;
    }

    public boolean truthy() {
	return this.truthy;
    }
}
