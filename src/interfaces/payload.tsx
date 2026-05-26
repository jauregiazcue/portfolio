import type { PropsWithChildren } from "react";

export interface Payload {
  id?: string,
  className?: string,
  style?: object
}

export interface PayloadWithChildren extends Payload, PropsWithChildren { }
