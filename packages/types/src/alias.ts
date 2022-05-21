/**
 * Nullable
 * @desc Represent nullable value
 * @example
 *   // Expect: string | number | null;
 *   type Something = Nullable<string | number>;
 */
export type Nullable<T> = T | null

/**
 * Maybe
 * @desc Represent undefinable value
 * @example
 *   // Expect: string | number | undefined;
 *   type Something = Maybe<string | number>;
 */
export type Maybe<T> = T | undefined

/**
 * Falsy
 * @desc Type representing falsy values in TypeScript: `false | "" | 0 | null | undefined`
 * @example
 *   type Various = 'a' | 'b' | undefined | false;
 *
 *   // Expect: "a" | "b"
 *   Exclude<Various, Falsy>;
 */
export type Falsy = false | '' | 0 | null | undefined

/**
 * Primitive
 * @desc Type representing [`Primitive`](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) types in TypeScript: `string | number | bigint | boolean |  symbol | null | undefined`
 * @example
 *   type Various = number | string | object;
 *
 *    // Expect: object
 *   type Cleaned = Exclude<Various, Primitive>
 */
export type Primitive = string | number | bigint | boolean | symbol | null | undefined

/**
 * Nullish
 * @desc Type representing [nullish values][https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing] in TypeScript: `null | undefined`
 * @example
 *   type Various = 'a' | 'b' | undefined;
 *
 *   // Expect: "a" | "b"
 *   Exclude<Various, Nullish>;
 */
export type Nullish = null | undefined
