import { Event } from "src/events/entities/event.entity";

export function validateName(name: string): boolean {
  const nameRegex = /^[a-zA-Z0-9 ]+$/;
  return nameRegex.test(name);
} 

export function validateAmount(amount: number): boolean {
    return amount > 0;
}