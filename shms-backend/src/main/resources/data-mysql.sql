INSERT INTO
  device (id, name)
VALUES
  (1000, "Bedroom light"),
  (1001, "Living room light"),
  (1002, "Bedroom thermostat"),
  (1003, "Bathroom thermostat"),
  (1004, "Bedroom blinds"),
  (1005, "Living room blinds"),
  (1006, "Porch camera"),
  (1007, "Hallway camera");

INSERT INTO
  light_device (id, state, brightness)
VALUES
  (1000, true, 10),
  (1001, false, 0);

INSERT INTO
  thermostat_device (id, temperature, mode)
VALUES
  (1002, 23.5, "OFF"),
  (1003, 24.5, "COOLING");

INSERT INTO
  camera_device (id, state, recording)
VALUES
  (1006, true, false),
  (1007, true, false);

INSERT INTO
  blinds_device (id, state, position)
VALUES
  (1004, false, 0),
  (1005, false, 100);
