import { Device } from "./device";

export class Light extends Device{
  state: boolean | undefined;
  brightnes: number | undefined;
}
