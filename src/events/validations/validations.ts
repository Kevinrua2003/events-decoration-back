export function validateName(name: string): boolean {
  const nameRegex = /^[a-zA-Z\s]+$/;
  return nameRegex.test(name);
}

export function validateAmount(amount: number): boolean {
  return amount > 0;
}