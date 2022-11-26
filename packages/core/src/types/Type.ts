export interface Type {
  toSymbol(): symbol;
}

export function isType(value: any): value is Type {
  return value && typeof value === 'object' && 'toSymbol' in value;
}
