INSERT INTO
  device (id, name)
VALUES
  (1000, "Bedroom light"),
  (1001, "Living room light"),
  (1002, "Bedroom thermostat"),
  (1003, "Bathroom thermostat");

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
