import { Falsy, Nullish, Primitive } from './alias'

/**
 * Tests for Falsy by simply applying negation `!` to the tested `val`.
 *
 * The value is mostly in added type-information and explicity,
 * but in case of this simple type much the same can often be archived by just using negation `!`:
 * @example
 *   const consumer = (value: boolean | Falsy) => {
 *     if (!value) {
 *         return ;
 *     }
 *     type newType = typeof value; // === true
 *     // do stuff
 *   };
 */
export const isFalsy = (val: unknown): val is Falsy => !val

/**
 * Tests for Nullish by simply comparing `val` for equality with `null`.
 * @example
 *   const consumer = (param: Nullish | string): string => {
 *     if (isNullish(param)) {
 *       // typeof param === Nullish
 *       return String(param) + ' was Nullish';
 *     }
 *     // typeof param === string
 *     return param.toString();
 *   };
 */
export const isNullish = (val: unknown): val is Nullish => val == null

/**
 * Tests for one of the [`Primitive`](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) types using the JavaScript [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) operator
 *
 * Clarification: TypeScript overloads this operator to produce TypeScript types if used in context of types.
 *
 * @param val The value to be tested
 * @returns If `val` is primitive. If used in the flow of the program typescript will infer type-information from this.
 *
 * @example
 *   const consumer = (value: Primitive | Primitive[]) => {
 *       if (isPrimitive(value)) {
 *           return console.log('Primitive value: ', value);
 *       }
 *       // type of value now inferred as Primitive[]
 *       value.map((primitive) => consumer(primitive));
 *   };
 */
export const isPrimitive = (val: unknown): val is Primitive => {
  if (val === null || val === undefined) return true
  switch (typeof val) {
    case 'string':
    case 'number':
    case 'bigint':
    case 'boolean':
    case 'symbol':
      return true
    default:
      return false
  }
}
