import { Device } from './device';

export class Blinds extends Device {
  state: boolean | undefined;
  position: number | undefined;
}
