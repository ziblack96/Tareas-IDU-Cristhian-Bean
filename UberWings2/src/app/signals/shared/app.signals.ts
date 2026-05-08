import { signal, WritableSignal } from "@angular/core";

export const isAuthenticated: WritableSignal<boolean> = signal(false);