import { Device } from './device';

export class Thermostat extends Device {
  temperature: number | undefined;
  mode: ThermostatMode | undefined;
}
export type ThermostatMode = 'HEATING' | 'COOLING' | 'OFF';
