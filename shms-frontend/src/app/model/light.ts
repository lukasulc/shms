import { Device } from './device';

export class Light extends Device {
  state: boolean | undefined;
  brightness: number | undefined;
}
