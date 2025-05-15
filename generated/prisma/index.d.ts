
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Volunteer
 * 
 */
export type Volunteer = $Result.DefaultSelection<Prisma.$VolunteerPayload>
/**
 * Model Citizen
 * 
 */
export type Citizen = $Result.DefaultSelection<Prisma.$CitizenPayload>
/**
 * Model NGO
 * 
 */
export type NGO = $Result.DefaultSelection<Prisma.$NGOPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.volunteer`: Exposes CRUD operations for the **Volunteer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Volunteers
    * const volunteers = await prisma.volunteer.findMany()
    * ```
    */
  get volunteer(): Prisma.VolunteerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.citizen`: Exposes CRUD operations for the **Citizen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Citizens
    * const citizens = await prisma.citizen.findMany()
    * ```
    */
  get citizen(): Prisma.CitizenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nGO`: Exposes CRUD operations for the **NGO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NGOS
    * const nGOS = await prisma.nGO.findMany()
    * ```
    */
  get nGO(): Prisma.NGODelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Volunteer: 'Volunteer',
    Citizen: 'Citizen',
    NGO: 'NGO'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "volunteer" | "citizen" | "nGO"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Volunteer: {
        payload: Prisma.$VolunteerPayload<ExtArgs>
        fields: Prisma.VolunteerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VolunteerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VolunteerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          findFirst: {
            args: Prisma.VolunteerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VolunteerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          findMany: {
            args: Prisma.VolunteerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>[]
          }
          create: {
            args: Prisma.VolunteerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          createMany: {
            args: Prisma.VolunteerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VolunteerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>[]
          }
          delete: {
            args: Prisma.VolunteerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          update: {
            args: Prisma.VolunteerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          deleteMany: {
            args: Prisma.VolunteerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VolunteerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VolunteerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>[]
          }
          upsert: {
            args: Prisma.VolunteerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          aggregate: {
            args: Prisma.VolunteerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVolunteer>
          }
          groupBy: {
            args: Prisma.VolunteerGroupByArgs<ExtArgs>
            result: $Utils.Optional<VolunteerGroupByOutputType>[]
          }
          count: {
            args: Prisma.VolunteerCountArgs<ExtArgs>
            result: $Utils.Optional<VolunteerCountAggregateOutputType> | number
          }
        }
      }
      Citizen: {
        payload: Prisma.$CitizenPayload<ExtArgs>
        fields: Prisma.CitizenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CitizenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitizenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CitizenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitizenPayload>
          }
          findFirst: {
            args: Prisma.CitizenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitizenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CitizenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitizenPayload>
          }
          findMany: {
            args: Prisma.CitizenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitizenPayload>[]
          }
          create: {
            args: Prisma.CitizenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitizenPayload>
          }
          createMany: {
            args: Prisma.CitizenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CitizenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitizenPayload>[]
          }
          delete: {
            args: Prisma.CitizenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitizenPayload>
          }
          update: {
            args: Prisma.CitizenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitizenPayload>
          }
          deleteMany: {
            args: Prisma.CitizenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CitizenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CitizenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitizenPayload>[]
          }
          upsert: {
            args: Prisma.CitizenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitizenPayload>
          }
          aggregate: {
            args: Prisma.CitizenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCitizen>
          }
          groupBy: {
            args: Prisma.CitizenGroupByArgs<ExtArgs>
            result: $Utils.Optional<CitizenGroupByOutputType>[]
          }
          count: {
            args: Prisma.CitizenCountArgs<ExtArgs>
            result: $Utils.Optional<CitizenCountAggregateOutputType> | number
          }
        }
      }
      NGO: {
        payload: Prisma.$NGOPayload<ExtArgs>
        fields: Prisma.NGOFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NGOFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NGOPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NGOFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NGOPayload>
          }
          findFirst: {
            args: Prisma.NGOFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NGOPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NGOFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NGOPayload>
          }
          findMany: {
            args: Prisma.NGOFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NGOPayload>[]
          }
          create: {
            args: Prisma.NGOCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NGOPayload>
          }
          createMany: {
            args: Prisma.NGOCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NGOCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NGOPayload>[]
          }
          delete: {
            args: Prisma.NGODeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NGOPayload>
          }
          update: {
            args: Prisma.NGOUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NGOPayload>
          }
          deleteMany: {
            args: Prisma.NGODeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NGOUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NGOUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NGOPayload>[]
          }
          upsert: {
            args: Prisma.NGOUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NGOPayload>
          }
          aggregate: {
            args: Prisma.NGOAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNGO>
          }
          groupBy: {
            args: Prisma.NGOGroupByArgs<ExtArgs>
            result: $Utils.Optional<NGOGroupByOutputType>[]
          }
          count: {
            args: Prisma.NGOCountArgs<ExtArgs>
            result: $Utils.Optional<NGOCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    volunteer?: VolunteerOmit
    citizen?: CitizenOmit
    nGO?: NGOOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    createdAt: Date | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    createdAt: Date | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    createdAt: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string | null
    createdAt: Date
    role: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    role?: boolean
    volunteer?: boolean | User$volunteerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    createdAt?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "createdAt" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    volunteer?: boolean | User$volunteerArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      volunteer: Prisma.$VolunteerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string | null
      createdAt: Date
      role: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    volunteer<T extends User$volunteerArgs<ExtArgs> = {}>(args?: Subset<T, User$volunteerArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.volunteer
   */
  export type User$volunteerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    where?: VolunteerWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Volunteer
   */

  export type AggregateVolunteer = {
    _count: VolunteerCountAggregateOutputType | null
    _avg: VolunteerAvgAggregateOutputType | null
    _sum: VolunteerSumAggregateOutputType | null
    _min: VolunteerMinAggregateOutputType | null
    _max: VolunteerMaxAggregateOutputType | null
  }

  export type VolunteerAvgAggregateOutputType = {
    volId: number | null
    ReputationScore: Decimal | null
    userId: number | null
  }

  export type VolunteerSumAggregateOutputType = {
    volId: number | null
    ReputationScore: Decimal | null
    userId: number | null
  }

  export type VolunteerMinAggregateOutputType = {
    volId: number | null
    typeV: string | null
    phone: string | null
    AvailabilityV: string | null
    ReputationScore: Decimal | null
    CategoryV: string | null
    userId: number | null
  }

  export type VolunteerMaxAggregateOutputType = {
    volId: number | null
    typeV: string | null
    phone: string | null
    AvailabilityV: string | null
    ReputationScore: Decimal | null
    CategoryV: string | null
    userId: number | null
  }

  export type VolunteerCountAggregateOutputType = {
    volId: number
    typeV: number
    phone: number
    AvailabilityV: number
    ReputationScore: number
    CategoryV: number
    userId: number
    _all: number
  }


  export type VolunteerAvgAggregateInputType = {
    volId?: true
    ReputationScore?: true
    userId?: true
  }

  export type VolunteerSumAggregateInputType = {
    volId?: true
    ReputationScore?: true
    userId?: true
  }

  export type VolunteerMinAggregateInputType = {
    volId?: true
    typeV?: true
    phone?: true
    AvailabilityV?: true
    ReputationScore?: true
    CategoryV?: true
    userId?: true
  }

  export type VolunteerMaxAggregateInputType = {
    volId?: true
    typeV?: true
    phone?: true
    AvailabilityV?: true
    ReputationScore?: true
    CategoryV?: true
    userId?: true
  }

  export type VolunteerCountAggregateInputType = {
    volId?: true
    typeV?: true
    phone?: true
    AvailabilityV?: true
    ReputationScore?: true
    CategoryV?: true
    userId?: true
    _all?: true
  }

  export type VolunteerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Volunteer to aggregate.
     */
    where?: VolunteerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volunteers to fetch.
     */
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VolunteerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volunteers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Volunteers
    **/
    _count?: true | VolunteerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VolunteerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VolunteerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VolunteerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VolunteerMaxAggregateInputType
  }

  export type GetVolunteerAggregateType<T extends VolunteerAggregateArgs> = {
        [P in keyof T & keyof AggregateVolunteer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVolunteer[P]>
      : GetScalarType<T[P], AggregateVolunteer[P]>
  }




  export type VolunteerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolunteerWhereInput
    orderBy?: VolunteerOrderByWithAggregationInput | VolunteerOrderByWithAggregationInput[]
    by: VolunteerScalarFieldEnum[] | VolunteerScalarFieldEnum
    having?: VolunteerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VolunteerCountAggregateInputType | true
    _avg?: VolunteerAvgAggregateInputType
    _sum?: VolunteerSumAggregateInputType
    _min?: VolunteerMinAggregateInputType
    _max?: VolunteerMaxAggregateInputType
  }

  export type VolunteerGroupByOutputType = {
    volId: number
    typeV: string | null
    phone: string | null
    AvailabilityV: string | null
    ReputationScore: Decimal
    CategoryV: string | null
    userId: number
    _count: VolunteerCountAggregateOutputType | null
    _avg: VolunteerAvgAggregateOutputType | null
    _sum: VolunteerSumAggregateOutputType | null
    _min: VolunteerMinAggregateOutputType | null
    _max: VolunteerMaxAggregateOutputType | null
  }

  type GetVolunteerGroupByPayload<T extends VolunteerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VolunteerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VolunteerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VolunteerGroupByOutputType[P]>
            : GetScalarType<T[P], VolunteerGroupByOutputType[P]>
        }
      >
    >


  export type VolunteerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    volId?: boolean
    typeV?: boolean
    phone?: boolean
    AvailabilityV?: boolean
    ReputationScore?: boolean
    CategoryV?: boolean
    userId?: boolean
    USER?: boolean | UserDefaultArgs<ExtArgs>
    citizen?: boolean | Volunteer$citizenArgs<ExtArgs>
    ngo?: boolean | Volunteer$ngoArgs<ExtArgs>
  }, ExtArgs["result"]["volunteer"]>

  export type VolunteerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    volId?: boolean
    typeV?: boolean
    phone?: boolean
    AvailabilityV?: boolean
    ReputationScore?: boolean
    CategoryV?: boolean
    userId?: boolean
    USER?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volunteer"]>

  export type VolunteerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    volId?: boolean
    typeV?: boolean
    phone?: boolean
    AvailabilityV?: boolean
    ReputationScore?: boolean
    CategoryV?: boolean
    userId?: boolean
    USER?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volunteer"]>

  export type VolunteerSelectScalar = {
    volId?: boolean
    typeV?: boolean
    phone?: boolean
    AvailabilityV?: boolean
    ReputationScore?: boolean
    CategoryV?: boolean
    userId?: boolean
  }

  export type VolunteerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"volId" | "typeV" | "phone" | "AvailabilityV" | "ReputationScore" | "CategoryV" | "userId", ExtArgs["result"]["volunteer"]>
  export type VolunteerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    USER?: boolean | UserDefaultArgs<ExtArgs>
    citizen?: boolean | Volunteer$citizenArgs<ExtArgs>
    ngo?: boolean | Volunteer$ngoArgs<ExtArgs>
  }
  export type VolunteerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    USER?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VolunteerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    USER?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VolunteerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Volunteer"
    objects: {
      USER: Prisma.$UserPayload<ExtArgs>
      citizen: Prisma.$CitizenPayload<ExtArgs> | null
      ngo: Prisma.$NGOPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      volId: number
      typeV: string | null
      phone: string | null
      AvailabilityV: string | null
      ReputationScore: Prisma.Decimal
      CategoryV: string | null
      userId: number
    }, ExtArgs["result"]["volunteer"]>
    composites: {}
  }

  type VolunteerGetPayload<S extends boolean | null | undefined | VolunteerDefaultArgs> = $Result.GetResult<Prisma.$VolunteerPayload, S>

  type VolunteerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VolunteerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VolunteerCountAggregateInputType | true
    }

  export interface VolunteerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Volunteer'], meta: { name: 'Volunteer' } }
    /**
     * Find zero or one Volunteer that matches the filter.
     * @param {VolunteerFindUniqueArgs} args - Arguments to find a Volunteer
     * @example
     * // Get one Volunteer
     * const volunteer = await prisma.volunteer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VolunteerFindUniqueArgs>(args: SelectSubset<T, VolunteerFindUniqueArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Volunteer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VolunteerFindUniqueOrThrowArgs} args - Arguments to find a Volunteer
     * @example
     * // Get one Volunteer
     * const volunteer = await prisma.volunteer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VolunteerFindUniqueOrThrowArgs>(args: SelectSubset<T, VolunteerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Volunteer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerFindFirstArgs} args - Arguments to find a Volunteer
     * @example
     * // Get one Volunteer
     * const volunteer = await prisma.volunteer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VolunteerFindFirstArgs>(args?: SelectSubset<T, VolunteerFindFirstArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Volunteer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerFindFirstOrThrowArgs} args - Arguments to find a Volunteer
     * @example
     * // Get one Volunteer
     * const volunteer = await prisma.volunteer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VolunteerFindFirstOrThrowArgs>(args?: SelectSubset<T, VolunteerFindFirstOrThrowArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Volunteers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Volunteers
     * const volunteers = await prisma.volunteer.findMany()
     * 
     * // Get first 10 Volunteers
     * const volunteers = await prisma.volunteer.findMany({ take: 10 })
     * 
     * // Only select the `volId`
     * const volunteerWithVolIdOnly = await prisma.volunteer.findMany({ select: { volId: true } })
     * 
     */
    findMany<T extends VolunteerFindManyArgs>(args?: SelectSubset<T, VolunteerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Volunteer.
     * @param {VolunteerCreateArgs} args - Arguments to create a Volunteer.
     * @example
     * // Create one Volunteer
     * const Volunteer = await prisma.volunteer.create({
     *   data: {
     *     // ... data to create a Volunteer
     *   }
     * })
     * 
     */
    create<T extends VolunteerCreateArgs>(args: SelectSubset<T, VolunteerCreateArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Volunteers.
     * @param {VolunteerCreateManyArgs} args - Arguments to create many Volunteers.
     * @example
     * // Create many Volunteers
     * const volunteer = await prisma.volunteer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VolunteerCreateManyArgs>(args?: SelectSubset<T, VolunteerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Volunteers and returns the data saved in the database.
     * @param {VolunteerCreateManyAndReturnArgs} args - Arguments to create many Volunteers.
     * @example
     * // Create many Volunteers
     * const volunteer = await prisma.volunteer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Volunteers and only return the `volId`
     * const volunteerWithVolIdOnly = await prisma.volunteer.createManyAndReturn({
     *   select: { volId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VolunteerCreateManyAndReturnArgs>(args?: SelectSubset<T, VolunteerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Volunteer.
     * @param {VolunteerDeleteArgs} args - Arguments to delete one Volunteer.
     * @example
     * // Delete one Volunteer
     * const Volunteer = await prisma.volunteer.delete({
     *   where: {
     *     // ... filter to delete one Volunteer
     *   }
     * })
     * 
     */
    delete<T extends VolunteerDeleteArgs>(args: SelectSubset<T, VolunteerDeleteArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Volunteer.
     * @param {VolunteerUpdateArgs} args - Arguments to update one Volunteer.
     * @example
     * // Update one Volunteer
     * const volunteer = await prisma.volunteer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VolunteerUpdateArgs>(args: SelectSubset<T, VolunteerUpdateArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Volunteers.
     * @param {VolunteerDeleteManyArgs} args - Arguments to filter Volunteers to delete.
     * @example
     * // Delete a few Volunteers
     * const { count } = await prisma.volunteer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VolunteerDeleteManyArgs>(args?: SelectSubset<T, VolunteerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Volunteers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Volunteers
     * const volunteer = await prisma.volunteer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VolunteerUpdateManyArgs>(args: SelectSubset<T, VolunteerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Volunteers and returns the data updated in the database.
     * @param {VolunteerUpdateManyAndReturnArgs} args - Arguments to update many Volunteers.
     * @example
     * // Update many Volunteers
     * const volunteer = await prisma.volunteer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Volunteers and only return the `volId`
     * const volunteerWithVolIdOnly = await prisma.volunteer.updateManyAndReturn({
     *   select: { volId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VolunteerUpdateManyAndReturnArgs>(args: SelectSubset<T, VolunteerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Volunteer.
     * @param {VolunteerUpsertArgs} args - Arguments to update or create a Volunteer.
     * @example
     * // Update or create a Volunteer
     * const volunteer = await prisma.volunteer.upsert({
     *   create: {
     *     // ... data to create a Volunteer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Volunteer we want to update
     *   }
     * })
     */
    upsert<T extends VolunteerUpsertArgs>(args: SelectSubset<T, VolunteerUpsertArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Volunteers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerCountArgs} args - Arguments to filter Volunteers to count.
     * @example
     * // Count the number of Volunteers
     * const count = await prisma.volunteer.count({
     *   where: {
     *     // ... the filter for the Volunteers we want to count
     *   }
     * })
    **/
    count<T extends VolunteerCountArgs>(
      args?: Subset<T, VolunteerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VolunteerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Volunteer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VolunteerAggregateArgs>(args: Subset<T, VolunteerAggregateArgs>): Prisma.PrismaPromise<GetVolunteerAggregateType<T>>

    /**
     * Group by Volunteer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VolunteerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VolunteerGroupByArgs['orderBy'] }
        : { orderBy?: VolunteerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VolunteerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVolunteerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Volunteer model
   */
  readonly fields: VolunteerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Volunteer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VolunteerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    USER<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    citizen<T extends Volunteer$citizenArgs<ExtArgs> = {}>(args?: Subset<T, Volunteer$citizenArgs<ExtArgs>>): Prisma__CitizenClient<$Result.GetResult<Prisma.$CitizenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ngo<T extends Volunteer$ngoArgs<ExtArgs> = {}>(args?: Subset<T, Volunteer$ngoArgs<ExtArgs>>): Prisma__NGOClient<$Result.GetResult<Prisma.$NGOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Volunteer model
   */
  interface VolunteerFieldRefs {
    readonly volId: FieldRef<"Volunteer", 'Int'>
    readonly typeV: FieldRef<"Volunteer", 'String'>
    readonly phone: FieldRef<"Volunteer", 'String'>
    readonly AvailabilityV: FieldRef<"Volunteer", 'String'>
    readonly ReputationScore: FieldRef<"Volunteer", 'Decimal'>
    readonly CategoryV: FieldRef<"Volunteer", 'String'>
    readonly userId: FieldRef<"Volunteer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Volunteer findUnique
   */
  export type VolunteerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteer to fetch.
     */
    where: VolunteerWhereUniqueInput
  }

  /**
   * Volunteer findUniqueOrThrow
   */
  export type VolunteerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteer to fetch.
     */
    where: VolunteerWhereUniqueInput
  }

  /**
   * Volunteer findFirst
   */
  export type VolunteerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteer to fetch.
     */
    where?: VolunteerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volunteers to fetch.
     */
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Volunteers.
     */
    cursor?: VolunteerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volunteers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Volunteers.
     */
    distinct?: VolunteerScalarFieldEnum | VolunteerScalarFieldEnum[]
  }

  /**
   * Volunteer findFirstOrThrow
   */
  export type VolunteerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteer to fetch.
     */
    where?: VolunteerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volunteers to fetch.
     */
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Volunteers.
     */
    cursor?: VolunteerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volunteers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Volunteers.
     */
    distinct?: VolunteerScalarFieldEnum | VolunteerScalarFieldEnum[]
  }

  /**
   * Volunteer findMany
   */
  export type VolunteerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteers to fetch.
     */
    where?: VolunteerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volunteers to fetch.
     */
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Volunteers.
     */
    cursor?: VolunteerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volunteers.
     */
    skip?: number
    distinct?: VolunteerScalarFieldEnum | VolunteerScalarFieldEnum[]
  }

  /**
   * Volunteer create
   */
  export type VolunteerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * The data needed to create a Volunteer.
     */
    data: XOR<VolunteerCreateInput, VolunteerUncheckedCreateInput>
  }

  /**
   * Volunteer createMany
   */
  export type VolunteerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Volunteers.
     */
    data: VolunteerCreateManyInput | VolunteerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Volunteer createManyAndReturn
   */
  export type VolunteerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * The data used to create many Volunteers.
     */
    data: VolunteerCreateManyInput | VolunteerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Volunteer update
   */
  export type VolunteerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * The data needed to update a Volunteer.
     */
    data: XOR<VolunteerUpdateInput, VolunteerUncheckedUpdateInput>
    /**
     * Choose, which Volunteer to update.
     */
    where: VolunteerWhereUniqueInput
  }

  /**
   * Volunteer updateMany
   */
  export type VolunteerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Volunteers.
     */
    data: XOR<VolunteerUpdateManyMutationInput, VolunteerUncheckedUpdateManyInput>
    /**
     * Filter which Volunteers to update
     */
    where?: VolunteerWhereInput
    /**
     * Limit how many Volunteers to update.
     */
    limit?: number
  }

  /**
   * Volunteer updateManyAndReturn
   */
  export type VolunteerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * The data used to update Volunteers.
     */
    data: XOR<VolunteerUpdateManyMutationInput, VolunteerUncheckedUpdateManyInput>
    /**
     * Filter which Volunteers to update
     */
    where?: VolunteerWhereInput
    /**
     * Limit how many Volunteers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Volunteer upsert
   */
  export type VolunteerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * The filter to search for the Volunteer to update in case it exists.
     */
    where: VolunteerWhereUniqueInput
    /**
     * In case the Volunteer found by the `where` argument doesn't exist, create a new Volunteer with this data.
     */
    create: XOR<VolunteerCreateInput, VolunteerUncheckedCreateInput>
    /**
     * In case the Volunteer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VolunteerUpdateInput, VolunteerUncheckedUpdateInput>
  }

  /**
   * Volunteer delete
   */
  export type VolunteerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter which Volunteer to delete.
     */
    where: VolunteerWhereUniqueInput
  }

  /**
   * Volunteer deleteMany
   */
  export type VolunteerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Volunteers to delete
     */
    where?: VolunteerWhereInput
    /**
     * Limit how many Volunteers to delete.
     */
    limit?: number
  }

  /**
   * Volunteer.citizen
   */
  export type Volunteer$citizenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citizen
     */
    select?: CitizenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citizen
     */
    omit?: CitizenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitizenInclude<ExtArgs> | null
    where?: CitizenWhereInput
  }

  /**
   * Volunteer.ngo
   */
  export type Volunteer$ngoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NGO
     */
    select?: NGOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NGO
     */
    omit?: NGOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NGOInclude<ExtArgs> | null
    where?: NGOWhereInput
  }

  /**
   * Volunteer without action
   */
  export type VolunteerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
  }


  /**
   * Model Citizen
   */

  export type AggregateCitizen = {
    _count: CitizenCountAggregateOutputType | null
    _avg: CitizenAvgAggregateOutputType | null
    _sum: CitizenSumAggregateOutputType | null
    _min: CitizenMinAggregateOutputType | null
    _max: CitizenMaxAggregateOutputType | null
  }

  export type CitizenAvgAggregateOutputType = {
    CitizenId: number | null
    citvolId: number | null
  }

  export type CitizenSumAggregateOutputType = {
    CitizenId: number | null
    citvolId: number | null
  }

  export type CitizenMinAggregateOutputType = {
    CitizenId: number | null
    firstname: string | null
    lastname: string | null
    citvolId: number | null
  }

  export type CitizenMaxAggregateOutputType = {
    CitizenId: number | null
    firstname: string | null
    lastname: string | null
    citvolId: number | null
  }

  export type CitizenCountAggregateOutputType = {
    CitizenId: number
    firstname: number
    lastname: number
    citvolId: number
    _all: number
  }


  export type CitizenAvgAggregateInputType = {
    CitizenId?: true
    citvolId?: true
  }

  export type CitizenSumAggregateInputType = {
    CitizenId?: true
    citvolId?: true
  }

  export type CitizenMinAggregateInputType = {
    CitizenId?: true
    firstname?: true
    lastname?: true
    citvolId?: true
  }

  export type CitizenMaxAggregateInputType = {
    CitizenId?: true
    firstname?: true
    lastname?: true
    citvolId?: true
  }

  export type CitizenCountAggregateInputType = {
    CitizenId?: true
    firstname?: true
    lastname?: true
    citvolId?: true
    _all?: true
  }

  export type CitizenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Citizen to aggregate.
     */
    where?: CitizenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citizens to fetch.
     */
    orderBy?: CitizenOrderByWithRelationInput | CitizenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CitizenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citizens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citizens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Citizens
    **/
    _count?: true | CitizenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CitizenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitizenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CitizenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CitizenMaxAggregateInputType
  }

  export type GetCitizenAggregateType<T extends CitizenAggregateArgs> = {
        [P in keyof T & keyof AggregateCitizen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCitizen[P]>
      : GetScalarType<T[P], AggregateCitizen[P]>
  }




  export type CitizenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitizenWhereInput
    orderBy?: CitizenOrderByWithAggregationInput | CitizenOrderByWithAggregationInput[]
    by: CitizenScalarFieldEnum[] | CitizenScalarFieldEnum
    having?: CitizenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CitizenCountAggregateInputType | true
    _avg?: CitizenAvgAggregateInputType
    _sum?: CitizenSumAggregateInputType
    _min?: CitizenMinAggregateInputType
    _max?: CitizenMaxAggregateInputType
  }

  export type CitizenGroupByOutputType = {
    CitizenId: number
    firstname: string | null
    lastname: string | null
    citvolId: number
    _count: CitizenCountAggregateOutputType | null
    _avg: CitizenAvgAggregateOutputType | null
    _sum: CitizenSumAggregateOutputType | null
    _min: CitizenMinAggregateOutputType | null
    _max: CitizenMaxAggregateOutputType | null
  }

  type GetCitizenGroupByPayload<T extends CitizenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CitizenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CitizenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CitizenGroupByOutputType[P]>
            : GetScalarType<T[P], CitizenGroupByOutputType[P]>
        }
      >
    >


  export type CitizenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CitizenId?: boolean
    firstname?: boolean
    lastname?: boolean
    citvolId?: boolean
    VOL?: boolean | VolunteerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["citizen"]>

  export type CitizenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CitizenId?: boolean
    firstname?: boolean
    lastname?: boolean
    citvolId?: boolean
    VOL?: boolean | VolunteerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["citizen"]>

  export type CitizenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CitizenId?: boolean
    firstname?: boolean
    lastname?: boolean
    citvolId?: boolean
    VOL?: boolean | VolunteerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["citizen"]>

  export type CitizenSelectScalar = {
    CitizenId?: boolean
    firstname?: boolean
    lastname?: boolean
    citvolId?: boolean
  }

  export type CitizenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"CitizenId" | "firstname" | "lastname" | "citvolId", ExtArgs["result"]["citizen"]>
  export type CitizenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VOL?: boolean | VolunteerDefaultArgs<ExtArgs>
  }
  export type CitizenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VOL?: boolean | VolunteerDefaultArgs<ExtArgs>
  }
  export type CitizenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VOL?: boolean | VolunteerDefaultArgs<ExtArgs>
  }

  export type $CitizenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Citizen"
    objects: {
      VOL: Prisma.$VolunteerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      CitizenId: number
      firstname: string | null
      lastname: string | null
      citvolId: number
    }, ExtArgs["result"]["citizen"]>
    composites: {}
  }

  type CitizenGetPayload<S extends boolean | null | undefined | CitizenDefaultArgs> = $Result.GetResult<Prisma.$CitizenPayload, S>

  type CitizenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CitizenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CitizenCountAggregateInputType | true
    }

  export interface CitizenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Citizen'], meta: { name: 'Citizen' } }
    /**
     * Find zero or one Citizen that matches the filter.
     * @param {CitizenFindUniqueArgs} args - Arguments to find a Citizen
     * @example
     * // Get one Citizen
     * const citizen = await prisma.citizen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CitizenFindUniqueArgs>(args: SelectSubset<T, CitizenFindUniqueArgs<ExtArgs>>): Prisma__CitizenClient<$Result.GetResult<Prisma.$CitizenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Citizen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CitizenFindUniqueOrThrowArgs} args - Arguments to find a Citizen
     * @example
     * // Get one Citizen
     * const citizen = await prisma.citizen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CitizenFindUniqueOrThrowArgs>(args: SelectSubset<T, CitizenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CitizenClient<$Result.GetResult<Prisma.$CitizenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Citizen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitizenFindFirstArgs} args - Arguments to find a Citizen
     * @example
     * // Get one Citizen
     * const citizen = await prisma.citizen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CitizenFindFirstArgs>(args?: SelectSubset<T, CitizenFindFirstArgs<ExtArgs>>): Prisma__CitizenClient<$Result.GetResult<Prisma.$CitizenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Citizen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitizenFindFirstOrThrowArgs} args - Arguments to find a Citizen
     * @example
     * // Get one Citizen
     * const citizen = await prisma.citizen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CitizenFindFirstOrThrowArgs>(args?: SelectSubset<T, CitizenFindFirstOrThrowArgs<ExtArgs>>): Prisma__CitizenClient<$Result.GetResult<Prisma.$CitizenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Citizens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitizenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Citizens
     * const citizens = await prisma.citizen.findMany()
     * 
     * // Get first 10 Citizens
     * const citizens = await prisma.citizen.findMany({ take: 10 })
     * 
     * // Only select the `CitizenId`
     * const citizenWithCitizenIdOnly = await prisma.citizen.findMany({ select: { CitizenId: true } })
     * 
     */
    findMany<T extends CitizenFindManyArgs>(args?: SelectSubset<T, CitizenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitizenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Citizen.
     * @param {CitizenCreateArgs} args - Arguments to create a Citizen.
     * @example
     * // Create one Citizen
     * const Citizen = await prisma.citizen.create({
     *   data: {
     *     // ... data to create a Citizen
     *   }
     * })
     * 
     */
    create<T extends CitizenCreateArgs>(args: SelectSubset<T, CitizenCreateArgs<ExtArgs>>): Prisma__CitizenClient<$Result.GetResult<Prisma.$CitizenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Citizens.
     * @param {CitizenCreateManyArgs} args - Arguments to create many Citizens.
     * @example
     * // Create many Citizens
     * const citizen = await prisma.citizen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CitizenCreateManyArgs>(args?: SelectSubset<T, CitizenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Citizens and returns the data saved in the database.
     * @param {CitizenCreateManyAndReturnArgs} args - Arguments to create many Citizens.
     * @example
     * // Create many Citizens
     * const citizen = await prisma.citizen.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Citizens and only return the `CitizenId`
     * const citizenWithCitizenIdOnly = await prisma.citizen.createManyAndReturn({
     *   select: { CitizenId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CitizenCreateManyAndReturnArgs>(args?: SelectSubset<T, CitizenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitizenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Citizen.
     * @param {CitizenDeleteArgs} args - Arguments to delete one Citizen.
     * @example
     * // Delete one Citizen
     * const Citizen = await prisma.citizen.delete({
     *   where: {
     *     // ... filter to delete one Citizen
     *   }
     * })
     * 
     */
    delete<T extends CitizenDeleteArgs>(args: SelectSubset<T, CitizenDeleteArgs<ExtArgs>>): Prisma__CitizenClient<$Result.GetResult<Prisma.$CitizenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Citizen.
     * @param {CitizenUpdateArgs} args - Arguments to update one Citizen.
     * @example
     * // Update one Citizen
     * const citizen = await prisma.citizen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CitizenUpdateArgs>(args: SelectSubset<T, CitizenUpdateArgs<ExtArgs>>): Prisma__CitizenClient<$Result.GetResult<Prisma.$CitizenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Citizens.
     * @param {CitizenDeleteManyArgs} args - Arguments to filter Citizens to delete.
     * @example
     * // Delete a few Citizens
     * const { count } = await prisma.citizen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CitizenDeleteManyArgs>(args?: SelectSubset<T, CitizenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Citizens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitizenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Citizens
     * const citizen = await prisma.citizen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CitizenUpdateManyArgs>(args: SelectSubset<T, CitizenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Citizens and returns the data updated in the database.
     * @param {CitizenUpdateManyAndReturnArgs} args - Arguments to update many Citizens.
     * @example
     * // Update many Citizens
     * const citizen = await prisma.citizen.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Citizens and only return the `CitizenId`
     * const citizenWithCitizenIdOnly = await prisma.citizen.updateManyAndReturn({
     *   select: { CitizenId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CitizenUpdateManyAndReturnArgs>(args: SelectSubset<T, CitizenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitizenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Citizen.
     * @param {CitizenUpsertArgs} args - Arguments to update or create a Citizen.
     * @example
     * // Update or create a Citizen
     * const citizen = await prisma.citizen.upsert({
     *   create: {
     *     // ... data to create a Citizen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Citizen we want to update
     *   }
     * })
     */
    upsert<T extends CitizenUpsertArgs>(args: SelectSubset<T, CitizenUpsertArgs<ExtArgs>>): Prisma__CitizenClient<$Result.GetResult<Prisma.$CitizenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Citizens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitizenCountArgs} args - Arguments to filter Citizens to count.
     * @example
     * // Count the number of Citizens
     * const count = await prisma.citizen.count({
     *   where: {
     *     // ... the filter for the Citizens we want to count
     *   }
     * })
    **/
    count<T extends CitizenCountArgs>(
      args?: Subset<T, CitizenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CitizenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Citizen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitizenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CitizenAggregateArgs>(args: Subset<T, CitizenAggregateArgs>): Prisma.PrismaPromise<GetCitizenAggregateType<T>>

    /**
     * Group by Citizen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitizenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CitizenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CitizenGroupByArgs['orderBy'] }
        : { orderBy?: CitizenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CitizenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCitizenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Citizen model
   */
  readonly fields: CitizenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Citizen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CitizenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    VOL<T extends VolunteerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VolunteerDefaultArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Citizen model
   */
  interface CitizenFieldRefs {
    readonly CitizenId: FieldRef<"Citizen", 'Int'>
    readonly firstname: FieldRef<"Citizen", 'String'>
    readonly lastname: FieldRef<"Citizen", 'String'>
    readonly citvolId: FieldRef<"Citizen", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Citizen findUnique
   */
  export type CitizenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citizen
     */
    select?: CitizenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citizen
     */
    omit?: CitizenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitizenInclude<ExtArgs> | null
    /**
     * Filter, which Citizen to fetch.
     */
    where: CitizenWhereUniqueInput
  }

  /**
   * Citizen findUniqueOrThrow
   */
  export type CitizenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citizen
     */
    select?: CitizenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citizen
     */
    omit?: CitizenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitizenInclude<ExtArgs> | null
    /**
     * Filter, which Citizen to fetch.
     */
    where: CitizenWhereUniqueInput
  }

  /**
   * Citizen findFirst
   */
  export type CitizenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citizen
     */
    select?: CitizenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citizen
     */
    omit?: CitizenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitizenInclude<ExtArgs> | null
    /**
     * Filter, which Citizen to fetch.
     */
    where?: CitizenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citizens to fetch.
     */
    orderBy?: CitizenOrderByWithRelationInput | CitizenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Citizens.
     */
    cursor?: CitizenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citizens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citizens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Citizens.
     */
    distinct?: CitizenScalarFieldEnum | CitizenScalarFieldEnum[]
  }

  /**
   * Citizen findFirstOrThrow
   */
  export type CitizenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citizen
     */
    select?: CitizenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citizen
     */
    omit?: CitizenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitizenInclude<ExtArgs> | null
    /**
     * Filter, which Citizen to fetch.
     */
    where?: CitizenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citizens to fetch.
     */
    orderBy?: CitizenOrderByWithRelationInput | CitizenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Citizens.
     */
    cursor?: CitizenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citizens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citizens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Citizens.
     */
    distinct?: CitizenScalarFieldEnum | CitizenScalarFieldEnum[]
  }

  /**
   * Citizen findMany
   */
  export type CitizenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citizen
     */
    select?: CitizenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citizen
     */
    omit?: CitizenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitizenInclude<ExtArgs> | null
    /**
     * Filter, which Citizens to fetch.
     */
    where?: CitizenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citizens to fetch.
     */
    orderBy?: CitizenOrderByWithRelationInput | CitizenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Citizens.
     */
    cursor?: CitizenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citizens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citizens.
     */
    skip?: number
    distinct?: CitizenScalarFieldEnum | CitizenScalarFieldEnum[]
  }

  /**
   * Citizen create
   */
  export type CitizenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citizen
     */
    select?: CitizenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citizen
     */
    omit?: CitizenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitizenInclude<ExtArgs> | null
    /**
     * The data needed to create a Citizen.
     */
    data: XOR<CitizenCreateInput, CitizenUncheckedCreateInput>
  }

  /**
   * Citizen createMany
   */
  export type CitizenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Citizens.
     */
    data: CitizenCreateManyInput | CitizenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Citizen createManyAndReturn
   */
  export type CitizenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citizen
     */
    select?: CitizenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Citizen
     */
    omit?: CitizenOmit<ExtArgs> | null
    /**
     * The data used to create many Citizens.
     */
    data: CitizenCreateManyInput | CitizenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitizenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Citizen update
   */
  export type CitizenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citizen
     */
    select?: CitizenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citizen
     */
    omit?: CitizenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitizenInclude<ExtArgs> | null
    /**
     * The data needed to update a Citizen.
     */
    data: XOR<CitizenUpdateInput, CitizenUncheckedUpdateInput>
    /**
     * Choose, which Citizen to update.
     */
    where: CitizenWhereUniqueInput
  }

  /**
   * Citizen updateMany
   */
  export type CitizenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Citizens.
     */
    data: XOR<CitizenUpdateManyMutationInput, CitizenUncheckedUpdateManyInput>
    /**
     * Filter which Citizens to update
     */
    where?: CitizenWhereInput
    /**
     * Limit how many Citizens to update.
     */
    limit?: number
  }

  /**
   * Citizen updateManyAndReturn
   */
  export type CitizenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citizen
     */
    select?: CitizenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Citizen
     */
    omit?: CitizenOmit<ExtArgs> | null
    /**
     * The data used to update Citizens.
     */
    data: XOR<CitizenUpdateManyMutationInput, CitizenUncheckedUpdateManyInput>
    /**
     * Filter which Citizens to update
     */
    where?: CitizenWhereInput
    /**
     * Limit how many Citizens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitizenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Citizen upsert
   */
  export type CitizenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citizen
     */
    select?: CitizenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citizen
     */
    omit?: CitizenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitizenInclude<ExtArgs> | null
    /**
     * The filter to search for the Citizen to update in case it exists.
     */
    where: CitizenWhereUniqueInput
    /**
     * In case the Citizen found by the `where` argument doesn't exist, create a new Citizen with this data.
     */
    create: XOR<CitizenCreateInput, CitizenUncheckedCreateInput>
    /**
     * In case the Citizen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CitizenUpdateInput, CitizenUncheckedUpdateInput>
  }

  /**
   * Citizen delete
   */
  export type CitizenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citizen
     */
    select?: CitizenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citizen
     */
    omit?: CitizenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitizenInclude<ExtArgs> | null
    /**
     * Filter which Citizen to delete.
     */
    where: CitizenWhereUniqueInput
  }

  /**
   * Citizen deleteMany
   */
  export type CitizenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Citizens to delete
     */
    where?: CitizenWhereInput
    /**
     * Limit how many Citizens to delete.
     */
    limit?: number
  }

  /**
   * Citizen without action
   */
  export type CitizenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citizen
     */
    select?: CitizenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citizen
     */
    omit?: CitizenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitizenInclude<ExtArgs> | null
  }


  /**
   * Model NGO
   */

  export type AggregateNGO = {
    _count: NGOCountAggregateOutputType | null
    _avg: NGOAvgAggregateOutputType | null
    _sum: NGOSumAggregateOutputType | null
    _min: NGOMinAggregateOutputType | null
    _max: NGOMaxAggregateOutputType | null
  }

  export type NGOAvgAggregateOutputType = {
    CitizenId: number | null
    ngovolId: number | null
  }

  export type NGOSumAggregateOutputType = {
    CitizenId: number | null
    ngovolId: number | null
  }

  export type NGOMinAggregateOutputType = {
    CitizenId: number | null
    ngoName: string | null
    ngovolId: number | null
  }

  export type NGOMaxAggregateOutputType = {
    CitizenId: number | null
    ngoName: string | null
    ngovolId: number | null
  }

  export type NGOCountAggregateOutputType = {
    CitizenId: number
    ngoName: number
    ngovolId: number
    _all: number
  }


  export type NGOAvgAggregateInputType = {
    CitizenId?: true
    ngovolId?: true
  }

  export type NGOSumAggregateInputType = {
    CitizenId?: true
    ngovolId?: true
  }

  export type NGOMinAggregateInputType = {
    CitizenId?: true
    ngoName?: true
    ngovolId?: true
  }

  export type NGOMaxAggregateInputType = {
    CitizenId?: true
    ngoName?: true
    ngovolId?: true
  }

  export type NGOCountAggregateInputType = {
    CitizenId?: true
    ngoName?: true
    ngovolId?: true
    _all?: true
  }

  export type NGOAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NGO to aggregate.
     */
    where?: NGOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NGOS to fetch.
     */
    orderBy?: NGOOrderByWithRelationInput | NGOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NGOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NGOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NGOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NGOS
    **/
    _count?: true | NGOCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NGOAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NGOSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NGOMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NGOMaxAggregateInputType
  }

  export type GetNGOAggregateType<T extends NGOAggregateArgs> = {
        [P in keyof T & keyof AggregateNGO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNGO[P]>
      : GetScalarType<T[P], AggregateNGO[P]>
  }




  export type NGOGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NGOWhereInput
    orderBy?: NGOOrderByWithAggregationInput | NGOOrderByWithAggregationInput[]
    by: NGOScalarFieldEnum[] | NGOScalarFieldEnum
    having?: NGOScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NGOCountAggregateInputType | true
    _avg?: NGOAvgAggregateInputType
    _sum?: NGOSumAggregateInputType
    _min?: NGOMinAggregateInputType
    _max?: NGOMaxAggregateInputType
  }

  export type NGOGroupByOutputType = {
    CitizenId: number
    ngoName: string | null
    ngovolId: number
    _count: NGOCountAggregateOutputType | null
    _avg: NGOAvgAggregateOutputType | null
    _sum: NGOSumAggregateOutputType | null
    _min: NGOMinAggregateOutputType | null
    _max: NGOMaxAggregateOutputType | null
  }

  type GetNGOGroupByPayload<T extends NGOGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NGOGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NGOGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NGOGroupByOutputType[P]>
            : GetScalarType<T[P], NGOGroupByOutputType[P]>
        }
      >
    >


  export type NGOSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CitizenId?: boolean
    ngoName?: boolean
    ngovolId?: boolean
    VOLL?: boolean | VolunteerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nGO"]>

  export type NGOSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CitizenId?: boolean
    ngoName?: boolean
    ngovolId?: boolean
    VOLL?: boolean | VolunteerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nGO"]>

  export type NGOSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CitizenId?: boolean
    ngoName?: boolean
    ngovolId?: boolean
    VOLL?: boolean | VolunteerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nGO"]>

  export type NGOSelectScalar = {
    CitizenId?: boolean
    ngoName?: boolean
    ngovolId?: boolean
  }

  export type NGOOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"CitizenId" | "ngoName" | "ngovolId", ExtArgs["result"]["nGO"]>
  export type NGOInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VOLL?: boolean | VolunteerDefaultArgs<ExtArgs>
  }
  export type NGOIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VOLL?: boolean | VolunteerDefaultArgs<ExtArgs>
  }
  export type NGOIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VOLL?: boolean | VolunteerDefaultArgs<ExtArgs>
  }

  export type $NGOPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NGO"
    objects: {
      VOLL: Prisma.$VolunteerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      CitizenId: number
      ngoName: string | null
      ngovolId: number
    }, ExtArgs["result"]["nGO"]>
    composites: {}
  }

  type NGOGetPayload<S extends boolean | null | undefined | NGODefaultArgs> = $Result.GetResult<Prisma.$NGOPayload, S>

  type NGOCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NGOFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NGOCountAggregateInputType | true
    }

  export interface NGODelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NGO'], meta: { name: 'NGO' } }
    /**
     * Find zero or one NGO that matches the filter.
     * @param {NGOFindUniqueArgs} args - Arguments to find a NGO
     * @example
     * // Get one NGO
     * const nGO = await prisma.nGO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NGOFindUniqueArgs>(args: SelectSubset<T, NGOFindUniqueArgs<ExtArgs>>): Prisma__NGOClient<$Result.GetResult<Prisma.$NGOPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NGO that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NGOFindUniqueOrThrowArgs} args - Arguments to find a NGO
     * @example
     * // Get one NGO
     * const nGO = await prisma.nGO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NGOFindUniqueOrThrowArgs>(args: SelectSubset<T, NGOFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NGOClient<$Result.GetResult<Prisma.$NGOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NGO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NGOFindFirstArgs} args - Arguments to find a NGO
     * @example
     * // Get one NGO
     * const nGO = await prisma.nGO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NGOFindFirstArgs>(args?: SelectSubset<T, NGOFindFirstArgs<ExtArgs>>): Prisma__NGOClient<$Result.GetResult<Prisma.$NGOPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NGO that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NGOFindFirstOrThrowArgs} args - Arguments to find a NGO
     * @example
     * // Get one NGO
     * const nGO = await prisma.nGO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NGOFindFirstOrThrowArgs>(args?: SelectSubset<T, NGOFindFirstOrThrowArgs<ExtArgs>>): Prisma__NGOClient<$Result.GetResult<Prisma.$NGOPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NGOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NGOFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NGOS
     * const nGOS = await prisma.nGO.findMany()
     * 
     * // Get first 10 NGOS
     * const nGOS = await prisma.nGO.findMany({ take: 10 })
     * 
     * // Only select the `CitizenId`
     * const nGOWithCitizenIdOnly = await prisma.nGO.findMany({ select: { CitizenId: true } })
     * 
     */
    findMany<T extends NGOFindManyArgs>(args?: SelectSubset<T, NGOFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NGOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NGO.
     * @param {NGOCreateArgs} args - Arguments to create a NGO.
     * @example
     * // Create one NGO
     * const NGO = await prisma.nGO.create({
     *   data: {
     *     // ... data to create a NGO
     *   }
     * })
     * 
     */
    create<T extends NGOCreateArgs>(args: SelectSubset<T, NGOCreateArgs<ExtArgs>>): Prisma__NGOClient<$Result.GetResult<Prisma.$NGOPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NGOS.
     * @param {NGOCreateManyArgs} args - Arguments to create many NGOS.
     * @example
     * // Create many NGOS
     * const nGO = await prisma.nGO.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NGOCreateManyArgs>(args?: SelectSubset<T, NGOCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NGOS and returns the data saved in the database.
     * @param {NGOCreateManyAndReturnArgs} args - Arguments to create many NGOS.
     * @example
     * // Create many NGOS
     * const nGO = await prisma.nGO.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NGOS and only return the `CitizenId`
     * const nGOWithCitizenIdOnly = await prisma.nGO.createManyAndReturn({
     *   select: { CitizenId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NGOCreateManyAndReturnArgs>(args?: SelectSubset<T, NGOCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NGOPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NGO.
     * @param {NGODeleteArgs} args - Arguments to delete one NGO.
     * @example
     * // Delete one NGO
     * const NGO = await prisma.nGO.delete({
     *   where: {
     *     // ... filter to delete one NGO
     *   }
     * })
     * 
     */
    delete<T extends NGODeleteArgs>(args: SelectSubset<T, NGODeleteArgs<ExtArgs>>): Prisma__NGOClient<$Result.GetResult<Prisma.$NGOPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NGO.
     * @param {NGOUpdateArgs} args - Arguments to update one NGO.
     * @example
     * // Update one NGO
     * const nGO = await prisma.nGO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NGOUpdateArgs>(args: SelectSubset<T, NGOUpdateArgs<ExtArgs>>): Prisma__NGOClient<$Result.GetResult<Prisma.$NGOPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NGOS.
     * @param {NGODeleteManyArgs} args - Arguments to filter NGOS to delete.
     * @example
     * // Delete a few NGOS
     * const { count } = await prisma.nGO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NGODeleteManyArgs>(args?: SelectSubset<T, NGODeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NGOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NGOUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NGOS
     * const nGO = await prisma.nGO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NGOUpdateManyArgs>(args: SelectSubset<T, NGOUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NGOS and returns the data updated in the database.
     * @param {NGOUpdateManyAndReturnArgs} args - Arguments to update many NGOS.
     * @example
     * // Update many NGOS
     * const nGO = await prisma.nGO.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NGOS and only return the `CitizenId`
     * const nGOWithCitizenIdOnly = await prisma.nGO.updateManyAndReturn({
     *   select: { CitizenId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NGOUpdateManyAndReturnArgs>(args: SelectSubset<T, NGOUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NGOPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NGO.
     * @param {NGOUpsertArgs} args - Arguments to update or create a NGO.
     * @example
     * // Update or create a NGO
     * const nGO = await prisma.nGO.upsert({
     *   create: {
     *     // ... data to create a NGO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NGO we want to update
     *   }
     * })
     */
    upsert<T extends NGOUpsertArgs>(args: SelectSubset<T, NGOUpsertArgs<ExtArgs>>): Prisma__NGOClient<$Result.GetResult<Prisma.$NGOPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NGOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NGOCountArgs} args - Arguments to filter NGOS to count.
     * @example
     * // Count the number of NGOS
     * const count = await prisma.nGO.count({
     *   where: {
     *     // ... the filter for the NGOS we want to count
     *   }
     * })
    **/
    count<T extends NGOCountArgs>(
      args?: Subset<T, NGOCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NGOCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NGO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NGOAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NGOAggregateArgs>(args: Subset<T, NGOAggregateArgs>): Prisma.PrismaPromise<GetNGOAggregateType<T>>

    /**
     * Group by NGO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NGOGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NGOGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NGOGroupByArgs['orderBy'] }
        : { orderBy?: NGOGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NGOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNGOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NGO model
   */
  readonly fields: NGOFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NGO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NGOClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    VOLL<T extends VolunteerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VolunteerDefaultArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NGO model
   */
  interface NGOFieldRefs {
    readonly CitizenId: FieldRef<"NGO", 'Int'>
    readonly ngoName: FieldRef<"NGO", 'String'>
    readonly ngovolId: FieldRef<"NGO", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * NGO findUnique
   */
  export type NGOFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NGO
     */
    select?: NGOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NGO
     */
    omit?: NGOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NGOInclude<ExtArgs> | null
    /**
     * Filter, which NGO to fetch.
     */
    where: NGOWhereUniqueInput
  }

  /**
   * NGO findUniqueOrThrow
   */
  export type NGOFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NGO
     */
    select?: NGOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NGO
     */
    omit?: NGOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NGOInclude<ExtArgs> | null
    /**
     * Filter, which NGO to fetch.
     */
    where: NGOWhereUniqueInput
  }

  /**
   * NGO findFirst
   */
  export type NGOFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NGO
     */
    select?: NGOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NGO
     */
    omit?: NGOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NGOInclude<ExtArgs> | null
    /**
     * Filter, which NGO to fetch.
     */
    where?: NGOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NGOS to fetch.
     */
    orderBy?: NGOOrderByWithRelationInput | NGOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NGOS.
     */
    cursor?: NGOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NGOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NGOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NGOS.
     */
    distinct?: NGOScalarFieldEnum | NGOScalarFieldEnum[]
  }

  /**
   * NGO findFirstOrThrow
   */
  export type NGOFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NGO
     */
    select?: NGOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NGO
     */
    omit?: NGOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NGOInclude<ExtArgs> | null
    /**
     * Filter, which NGO to fetch.
     */
    where?: NGOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NGOS to fetch.
     */
    orderBy?: NGOOrderByWithRelationInput | NGOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NGOS.
     */
    cursor?: NGOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NGOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NGOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NGOS.
     */
    distinct?: NGOScalarFieldEnum | NGOScalarFieldEnum[]
  }

  /**
   * NGO findMany
   */
  export type NGOFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NGO
     */
    select?: NGOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NGO
     */
    omit?: NGOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NGOInclude<ExtArgs> | null
    /**
     * Filter, which NGOS to fetch.
     */
    where?: NGOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NGOS to fetch.
     */
    orderBy?: NGOOrderByWithRelationInput | NGOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NGOS.
     */
    cursor?: NGOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NGOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NGOS.
     */
    skip?: number
    distinct?: NGOScalarFieldEnum | NGOScalarFieldEnum[]
  }

  /**
   * NGO create
   */
  export type NGOCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NGO
     */
    select?: NGOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NGO
     */
    omit?: NGOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NGOInclude<ExtArgs> | null
    /**
     * The data needed to create a NGO.
     */
    data: XOR<NGOCreateInput, NGOUncheckedCreateInput>
  }

  /**
   * NGO createMany
   */
  export type NGOCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NGOS.
     */
    data: NGOCreateManyInput | NGOCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NGO createManyAndReturn
   */
  export type NGOCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NGO
     */
    select?: NGOSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NGO
     */
    omit?: NGOOmit<ExtArgs> | null
    /**
     * The data used to create many NGOS.
     */
    data: NGOCreateManyInput | NGOCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NGOIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NGO update
   */
  export type NGOUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NGO
     */
    select?: NGOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NGO
     */
    omit?: NGOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NGOInclude<ExtArgs> | null
    /**
     * The data needed to update a NGO.
     */
    data: XOR<NGOUpdateInput, NGOUncheckedUpdateInput>
    /**
     * Choose, which NGO to update.
     */
    where: NGOWhereUniqueInput
  }

  /**
   * NGO updateMany
   */
  export type NGOUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NGOS.
     */
    data: XOR<NGOUpdateManyMutationInput, NGOUncheckedUpdateManyInput>
    /**
     * Filter which NGOS to update
     */
    where?: NGOWhereInput
    /**
     * Limit how many NGOS to update.
     */
    limit?: number
  }

  /**
   * NGO updateManyAndReturn
   */
  export type NGOUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NGO
     */
    select?: NGOSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NGO
     */
    omit?: NGOOmit<ExtArgs> | null
    /**
     * The data used to update NGOS.
     */
    data: XOR<NGOUpdateManyMutationInput, NGOUncheckedUpdateManyInput>
    /**
     * Filter which NGOS to update
     */
    where?: NGOWhereInput
    /**
     * Limit how many NGOS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NGOIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NGO upsert
   */
  export type NGOUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NGO
     */
    select?: NGOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NGO
     */
    omit?: NGOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NGOInclude<ExtArgs> | null
    /**
     * The filter to search for the NGO to update in case it exists.
     */
    where: NGOWhereUniqueInput
    /**
     * In case the NGO found by the `where` argument doesn't exist, create a new NGO with this data.
     */
    create: XOR<NGOCreateInput, NGOUncheckedCreateInput>
    /**
     * In case the NGO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NGOUpdateInput, NGOUncheckedUpdateInput>
  }

  /**
   * NGO delete
   */
  export type NGODeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NGO
     */
    select?: NGOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NGO
     */
    omit?: NGOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NGOInclude<ExtArgs> | null
    /**
     * Filter which NGO to delete.
     */
    where: NGOWhereUniqueInput
  }

  /**
   * NGO deleteMany
   */
  export type NGODeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NGOS to delete
     */
    where?: NGOWhereInput
    /**
     * Limit how many NGOS to delete.
     */
    limit?: number
  }

  /**
   * NGO without action
   */
  export type NGODefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NGO
     */
    select?: NGOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NGO
     */
    omit?: NGOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NGOInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    createdAt: 'createdAt',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VolunteerScalarFieldEnum: {
    volId: 'volId',
    typeV: 'typeV',
    phone: 'phone',
    AvailabilityV: 'AvailabilityV',
    ReputationScore: 'ReputationScore',
    CategoryV: 'CategoryV',
    userId: 'userId'
  };

  export type VolunteerScalarFieldEnum = (typeof VolunteerScalarFieldEnum)[keyof typeof VolunteerScalarFieldEnum]


  export const CitizenScalarFieldEnum: {
    CitizenId: 'CitizenId',
    firstname: 'firstname',
    lastname: 'lastname',
    citvolId: 'citvolId'
  };

  export type CitizenScalarFieldEnum = (typeof CitizenScalarFieldEnum)[keyof typeof CitizenScalarFieldEnum]


  export const NGOScalarFieldEnum: {
    CitizenId: 'CitizenId',
    ngoName: 'ngoName',
    ngovolId: 'ngovolId'
  };

  export type NGOScalarFieldEnum = (typeof NGOScalarFieldEnum)[keyof typeof NGOScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    role?: StringNullableFilter<"User"> | string | null
    volunteer?: XOR<VolunteerNullableScalarRelationFilter, VolunteerWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    role?: SortOrderInput | SortOrder
    volunteer?: VolunteerOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    role?: StringNullableFilter<"User"> | string | null
    volunteer?: XOR<VolunteerNullableScalarRelationFilter, VolunteerWhereInput> | null
  }, "id" | "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    role?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type VolunteerWhereInput = {
    AND?: VolunteerWhereInput | VolunteerWhereInput[]
    OR?: VolunteerWhereInput[]
    NOT?: VolunteerWhereInput | VolunteerWhereInput[]
    volId?: IntFilter<"Volunteer"> | number
    typeV?: StringNullableFilter<"Volunteer"> | string | null
    phone?: StringNullableFilter<"Volunteer"> | string | null
    AvailabilityV?: StringNullableFilter<"Volunteer"> | string | null
    ReputationScore?: DecimalFilter<"Volunteer"> | Decimal | DecimalJsLike | number | string
    CategoryV?: StringNullableFilter<"Volunteer"> | string | null
    userId?: IntFilter<"Volunteer"> | number
    USER?: XOR<UserScalarRelationFilter, UserWhereInput>
    citizen?: XOR<CitizenNullableScalarRelationFilter, CitizenWhereInput> | null
    ngo?: XOR<NGONullableScalarRelationFilter, NGOWhereInput> | null
  }

  export type VolunteerOrderByWithRelationInput = {
    volId?: SortOrder
    typeV?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    AvailabilityV?: SortOrderInput | SortOrder
    ReputationScore?: SortOrder
    CategoryV?: SortOrderInput | SortOrder
    userId?: SortOrder
    USER?: UserOrderByWithRelationInput
    citizen?: CitizenOrderByWithRelationInput
    ngo?: NGOOrderByWithRelationInput
  }

  export type VolunteerWhereUniqueInput = Prisma.AtLeast<{
    volId?: number
    userId?: number
    AND?: VolunteerWhereInput | VolunteerWhereInput[]
    OR?: VolunteerWhereInput[]
    NOT?: VolunteerWhereInput | VolunteerWhereInput[]
    typeV?: StringNullableFilter<"Volunteer"> | string | null
    phone?: StringNullableFilter<"Volunteer"> | string | null
    AvailabilityV?: StringNullableFilter<"Volunteer"> | string | null
    ReputationScore?: DecimalFilter<"Volunteer"> | Decimal | DecimalJsLike | number | string
    CategoryV?: StringNullableFilter<"Volunteer"> | string | null
    USER?: XOR<UserScalarRelationFilter, UserWhereInput>
    citizen?: XOR<CitizenNullableScalarRelationFilter, CitizenWhereInput> | null
    ngo?: XOR<NGONullableScalarRelationFilter, NGOWhereInput> | null
  }, "volId" | "volId" | "userId">

  export type VolunteerOrderByWithAggregationInput = {
    volId?: SortOrder
    typeV?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    AvailabilityV?: SortOrderInput | SortOrder
    ReputationScore?: SortOrder
    CategoryV?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: VolunteerCountOrderByAggregateInput
    _avg?: VolunteerAvgOrderByAggregateInput
    _max?: VolunteerMaxOrderByAggregateInput
    _min?: VolunteerMinOrderByAggregateInput
    _sum?: VolunteerSumOrderByAggregateInput
  }

  export type VolunteerScalarWhereWithAggregatesInput = {
    AND?: VolunteerScalarWhereWithAggregatesInput | VolunteerScalarWhereWithAggregatesInput[]
    OR?: VolunteerScalarWhereWithAggregatesInput[]
    NOT?: VolunteerScalarWhereWithAggregatesInput | VolunteerScalarWhereWithAggregatesInput[]
    volId?: IntWithAggregatesFilter<"Volunteer"> | number
    typeV?: StringNullableWithAggregatesFilter<"Volunteer"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Volunteer"> | string | null
    AvailabilityV?: StringNullableWithAggregatesFilter<"Volunteer"> | string | null
    ReputationScore?: DecimalWithAggregatesFilter<"Volunteer"> | Decimal | DecimalJsLike | number | string
    CategoryV?: StringNullableWithAggregatesFilter<"Volunteer"> | string | null
    userId?: IntWithAggregatesFilter<"Volunteer"> | number
  }

  export type CitizenWhereInput = {
    AND?: CitizenWhereInput | CitizenWhereInput[]
    OR?: CitizenWhereInput[]
    NOT?: CitizenWhereInput | CitizenWhereInput[]
    CitizenId?: IntFilter<"Citizen"> | number
    firstname?: StringNullableFilter<"Citizen"> | string | null
    lastname?: StringNullableFilter<"Citizen"> | string | null
    citvolId?: IntFilter<"Citizen"> | number
    VOL?: XOR<VolunteerScalarRelationFilter, VolunteerWhereInput>
  }

  export type CitizenOrderByWithRelationInput = {
    CitizenId?: SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    citvolId?: SortOrder
    VOL?: VolunteerOrderByWithRelationInput
  }

  export type CitizenWhereUniqueInput = Prisma.AtLeast<{
    CitizenId?: number
    citvolId?: number
    AND?: CitizenWhereInput | CitizenWhereInput[]
    OR?: CitizenWhereInput[]
    NOT?: CitizenWhereInput | CitizenWhereInput[]
    firstname?: StringNullableFilter<"Citizen"> | string | null
    lastname?: StringNullableFilter<"Citizen"> | string | null
    VOL?: XOR<VolunteerScalarRelationFilter, VolunteerWhereInput>
  }, "CitizenId" | "CitizenId" | "citvolId">

  export type CitizenOrderByWithAggregationInput = {
    CitizenId?: SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    citvolId?: SortOrder
    _count?: CitizenCountOrderByAggregateInput
    _avg?: CitizenAvgOrderByAggregateInput
    _max?: CitizenMaxOrderByAggregateInput
    _min?: CitizenMinOrderByAggregateInput
    _sum?: CitizenSumOrderByAggregateInput
  }

  export type CitizenScalarWhereWithAggregatesInput = {
    AND?: CitizenScalarWhereWithAggregatesInput | CitizenScalarWhereWithAggregatesInput[]
    OR?: CitizenScalarWhereWithAggregatesInput[]
    NOT?: CitizenScalarWhereWithAggregatesInput | CitizenScalarWhereWithAggregatesInput[]
    CitizenId?: IntWithAggregatesFilter<"Citizen"> | number
    firstname?: StringNullableWithAggregatesFilter<"Citizen"> | string | null
    lastname?: StringNullableWithAggregatesFilter<"Citizen"> | string | null
    citvolId?: IntWithAggregatesFilter<"Citizen"> | number
  }

  export type NGOWhereInput = {
    AND?: NGOWhereInput | NGOWhereInput[]
    OR?: NGOWhereInput[]
    NOT?: NGOWhereInput | NGOWhereInput[]
    CitizenId?: IntFilter<"NGO"> | number
    ngoName?: StringNullableFilter<"NGO"> | string | null
    ngovolId?: IntFilter<"NGO"> | number
    VOLL?: XOR<VolunteerScalarRelationFilter, VolunteerWhereInput>
  }

  export type NGOOrderByWithRelationInput = {
    CitizenId?: SortOrder
    ngoName?: SortOrderInput | SortOrder
    ngovolId?: SortOrder
    VOLL?: VolunteerOrderByWithRelationInput
  }

  export type NGOWhereUniqueInput = Prisma.AtLeast<{
    CitizenId?: number
    ngovolId?: number
    AND?: NGOWhereInput | NGOWhereInput[]
    OR?: NGOWhereInput[]
    NOT?: NGOWhereInput | NGOWhereInput[]
    ngoName?: StringNullableFilter<"NGO"> | string | null
    VOLL?: XOR<VolunteerScalarRelationFilter, VolunteerWhereInput>
  }, "CitizenId" | "CitizenId" | "ngovolId">

  export type NGOOrderByWithAggregationInput = {
    CitizenId?: SortOrder
    ngoName?: SortOrderInput | SortOrder
    ngovolId?: SortOrder
    _count?: NGOCountOrderByAggregateInput
    _avg?: NGOAvgOrderByAggregateInput
    _max?: NGOMaxOrderByAggregateInput
    _min?: NGOMinOrderByAggregateInput
    _sum?: NGOSumOrderByAggregateInput
  }

  export type NGOScalarWhereWithAggregatesInput = {
    AND?: NGOScalarWhereWithAggregatesInput | NGOScalarWhereWithAggregatesInput[]
    OR?: NGOScalarWhereWithAggregatesInput[]
    NOT?: NGOScalarWhereWithAggregatesInput | NGOScalarWhereWithAggregatesInput[]
    CitizenId?: IntWithAggregatesFilter<"NGO"> | number
    ngoName?: StringNullableWithAggregatesFilter<"NGO"> | string | null
    ngovolId?: IntWithAggregatesFilter<"NGO"> | number
  }

  export type UserCreateInput = {
    email?: string | null
    createdAt?: Date | string
    role?: string | null
    volunteer?: VolunteerCreateNestedOneWithoutUSERInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email?: string | null
    createdAt?: Date | string
    role?: string | null
    volunteer?: VolunteerUncheckedCreateNestedOneWithoutUSERInput
  }

  export type UserUpdateInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    volunteer?: VolunteerUpdateOneWithoutUSERNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    volunteer?: VolunteerUncheckedUpdateOneWithoutUSERNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email?: string | null
    createdAt?: Date | string
    role?: string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VolunteerCreateInput = {
    typeV?: string | null
    phone?: string | null
    AvailabilityV?: string | null
    ReputationScore: Decimal | DecimalJsLike | number | string
    CategoryV?: string | null
    USER: UserCreateNestedOneWithoutVolunteerInput
    citizen?: CitizenCreateNestedOneWithoutVOLInput
    ngo?: NGOCreateNestedOneWithoutVOLLInput
  }

  export type VolunteerUncheckedCreateInput = {
    volId?: number
    typeV?: string | null
    phone?: string | null
    AvailabilityV?: string | null
    ReputationScore: Decimal | DecimalJsLike | number | string
    CategoryV?: string | null
    userId: number
    citizen?: CitizenUncheckedCreateNestedOneWithoutVOLInput
    ngo?: NGOUncheckedCreateNestedOneWithoutVOLLInput
  }

  export type VolunteerUpdateInput = {
    typeV?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    AvailabilityV?: NullableStringFieldUpdateOperationsInput | string | null
    ReputationScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CategoryV?: NullableStringFieldUpdateOperationsInput | string | null
    USER?: UserUpdateOneRequiredWithoutVolunteerNestedInput
    citizen?: CitizenUpdateOneWithoutVOLNestedInput
    ngo?: NGOUpdateOneWithoutVOLLNestedInput
  }

  export type VolunteerUncheckedUpdateInput = {
    volId?: IntFieldUpdateOperationsInput | number
    typeV?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    AvailabilityV?: NullableStringFieldUpdateOperationsInput | string | null
    ReputationScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CategoryV?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    citizen?: CitizenUncheckedUpdateOneWithoutVOLNestedInput
    ngo?: NGOUncheckedUpdateOneWithoutVOLLNestedInput
  }

  export type VolunteerCreateManyInput = {
    volId?: number
    typeV?: string | null
    phone?: string | null
    AvailabilityV?: string | null
    ReputationScore: Decimal | DecimalJsLike | number | string
    CategoryV?: string | null
    userId: number
  }

  export type VolunteerUpdateManyMutationInput = {
    typeV?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    AvailabilityV?: NullableStringFieldUpdateOperationsInput | string | null
    ReputationScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CategoryV?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VolunteerUncheckedUpdateManyInput = {
    volId?: IntFieldUpdateOperationsInput | number
    typeV?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    AvailabilityV?: NullableStringFieldUpdateOperationsInput | string | null
    ReputationScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CategoryV?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CitizenCreateInput = {
    firstname?: string | null
    lastname?: string | null
    VOL: VolunteerCreateNestedOneWithoutCitizenInput
  }

  export type CitizenUncheckedCreateInput = {
    CitizenId?: number
    firstname?: string | null
    lastname?: string | null
    citvolId: number
  }

  export type CitizenUpdateInput = {
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    VOL?: VolunteerUpdateOneRequiredWithoutCitizenNestedInput
  }

  export type CitizenUncheckedUpdateInput = {
    CitizenId?: IntFieldUpdateOperationsInput | number
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    citvolId?: IntFieldUpdateOperationsInput | number
  }

  export type CitizenCreateManyInput = {
    CitizenId?: number
    firstname?: string | null
    lastname?: string | null
    citvolId: number
  }

  export type CitizenUpdateManyMutationInput = {
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CitizenUncheckedUpdateManyInput = {
    CitizenId?: IntFieldUpdateOperationsInput | number
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    citvolId?: IntFieldUpdateOperationsInput | number
  }

  export type NGOCreateInput = {
    ngoName?: string | null
    VOLL: VolunteerCreateNestedOneWithoutNgoInput
  }

  export type NGOUncheckedCreateInput = {
    CitizenId?: number
    ngoName?: string | null
    ngovolId: number
  }

  export type NGOUpdateInput = {
    ngoName?: NullableStringFieldUpdateOperationsInput | string | null
    VOLL?: VolunteerUpdateOneRequiredWithoutNgoNestedInput
  }

  export type NGOUncheckedUpdateInput = {
    CitizenId?: IntFieldUpdateOperationsInput | number
    ngoName?: NullableStringFieldUpdateOperationsInput | string | null
    ngovolId?: IntFieldUpdateOperationsInput | number
  }

  export type NGOCreateManyInput = {
    CitizenId?: number
    ngoName?: string | null
    ngovolId: number
  }

  export type NGOUpdateManyMutationInput = {
    ngoName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NGOUncheckedUpdateManyInput = {
    CitizenId?: IntFieldUpdateOperationsInput | number
    ngoName?: NullableStringFieldUpdateOperationsInput | string | null
    ngovolId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VolunteerNullableScalarRelationFilter = {
    is?: VolunteerWhereInput | null
    isNot?: VolunteerWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CitizenNullableScalarRelationFilter = {
    is?: CitizenWhereInput | null
    isNot?: CitizenWhereInput | null
  }

  export type NGONullableScalarRelationFilter = {
    is?: NGOWhereInput | null
    isNot?: NGOWhereInput | null
  }

  export type VolunteerCountOrderByAggregateInput = {
    volId?: SortOrder
    typeV?: SortOrder
    phone?: SortOrder
    AvailabilityV?: SortOrder
    ReputationScore?: SortOrder
    CategoryV?: SortOrder
    userId?: SortOrder
  }

  export type VolunteerAvgOrderByAggregateInput = {
    volId?: SortOrder
    ReputationScore?: SortOrder
    userId?: SortOrder
  }

  export type VolunteerMaxOrderByAggregateInput = {
    volId?: SortOrder
    typeV?: SortOrder
    phone?: SortOrder
    AvailabilityV?: SortOrder
    ReputationScore?: SortOrder
    CategoryV?: SortOrder
    userId?: SortOrder
  }

  export type VolunteerMinOrderByAggregateInput = {
    volId?: SortOrder
    typeV?: SortOrder
    phone?: SortOrder
    AvailabilityV?: SortOrder
    ReputationScore?: SortOrder
    CategoryV?: SortOrder
    userId?: SortOrder
  }

  export type VolunteerSumOrderByAggregateInput = {
    volId?: SortOrder
    ReputationScore?: SortOrder
    userId?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type VolunteerScalarRelationFilter = {
    is?: VolunteerWhereInput
    isNot?: VolunteerWhereInput
  }

  export type CitizenCountOrderByAggregateInput = {
    CitizenId?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    citvolId?: SortOrder
  }

  export type CitizenAvgOrderByAggregateInput = {
    CitizenId?: SortOrder
    citvolId?: SortOrder
  }

  export type CitizenMaxOrderByAggregateInput = {
    CitizenId?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    citvolId?: SortOrder
  }

  export type CitizenMinOrderByAggregateInput = {
    CitizenId?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    citvolId?: SortOrder
  }

  export type CitizenSumOrderByAggregateInput = {
    CitizenId?: SortOrder
    citvolId?: SortOrder
  }

  export type NGOCountOrderByAggregateInput = {
    CitizenId?: SortOrder
    ngoName?: SortOrder
    ngovolId?: SortOrder
  }

  export type NGOAvgOrderByAggregateInput = {
    CitizenId?: SortOrder
    ngovolId?: SortOrder
  }

  export type NGOMaxOrderByAggregateInput = {
    CitizenId?: SortOrder
    ngoName?: SortOrder
    ngovolId?: SortOrder
  }

  export type NGOMinOrderByAggregateInput = {
    CitizenId?: SortOrder
    ngoName?: SortOrder
    ngovolId?: SortOrder
  }

  export type NGOSumOrderByAggregateInput = {
    CitizenId?: SortOrder
    ngovolId?: SortOrder
  }

  export type VolunteerCreateNestedOneWithoutUSERInput = {
    create?: XOR<VolunteerCreateWithoutUSERInput, VolunteerUncheckedCreateWithoutUSERInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutUSERInput
    connect?: VolunteerWhereUniqueInput
  }

  export type VolunteerUncheckedCreateNestedOneWithoutUSERInput = {
    create?: XOR<VolunteerCreateWithoutUSERInput, VolunteerUncheckedCreateWithoutUSERInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutUSERInput
    connect?: VolunteerWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VolunteerUpdateOneWithoutUSERNestedInput = {
    create?: XOR<VolunteerCreateWithoutUSERInput, VolunteerUncheckedCreateWithoutUSERInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutUSERInput
    upsert?: VolunteerUpsertWithoutUSERInput
    disconnect?: VolunteerWhereInput | boolean
    delete?: VolunteerWhereInput | boolean
    connect?: VolunteerWhereUniqueInput
    update?: XOR<XOR<VolunteerUpdateToOneWithWhereWithoutUSERInput, VolunteerUpdateWithoutUSERInput>, VolunteerUncheckedUpdateWithoutUSERInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VolunteerUncheckedUpdateOneWithoutUSERNestedInput = {
    create?: XOR<VolunteerCreateWithoutUSERInput, VolunteerUncheckedCreateWithoutUSERInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutUSERInput
    upsert?: VolunteerUpsertWithoutUSERInput
    disconnect?: VolunteerWhereInput | boolean
    delete?: VolunteerWhereInput | boolean
    connect?: VolunteerWhereUniqueInput
    update?: XOR<XOR<VolunteerUpdateToOneWithWhereWithoutUSERInput, VolunteerUpdateWithoutUSERInput>, VolunteerUncheckedUpdateWithoutUSERInput>
  }

  export type UserCreateNestedOneWithoutVolunteerInput = {
    create?: XOR<UserCreateWithoutVolunteerInput, UserUncheckedCreateWithoutVolunteerInput>
    connectOrCreate?: UserCreateOrConnectWithoutVolunteerInput
    connect?: UserWhereUniqueInput
  }

  export type CitizenCreateNestedOneWithoutVOLInput = {
    create?: XOR<CitizenCreateWithoutVOLInput, CitizenUncheckedCreateWithoutVOLInput>
    connectOrCreate?: CitizenCreateOrConnectWithoutVOLInput
    connect?: CitizenWhereUniqueInput
  }

  export type NGOCreateNestedOneWithoutVOLLInput = {
    create?: XOR<NGOCreateWithoutVOLLInput, NGOUncheckedCreateWithoutVOLLInput>
    connectOrCreate?: NGOCreateOrConnectWithoutVOLLInput
    connect?: NGOWhereUniqueInput
  }

  export type CitizenUncheckedCreateNestedOneWithoutVOLInput = {
    create?: XOR<CitizenCreateWithoutVOLInput, CitizenUncheckedCreateWithoutVOLInput>
    connectOrCreate?: CitizenCreateOrConnectWithoutVOLInput
    connect?: CitizenWhereUniqueInput
  }

  export type NGOUncheckedCreateNestedOneWithoutVOLLInput = {
    create?: XOR<NGOCreateWithoutVOLLInput, NGOUncheckedCreateWithoutVOLLInput>
    connectOrCreate?: NGOCreateOrConnectWithoutVOLLInput
    connect?: NGOWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutVolunteerNestedInput = {
    create?: XOR<UserCreateWithoutVolunteerInput, UserUncheckedCreateWithoutVolunteerInput>
    connectOrCreate?: UserCreateOrConnectWithoutVolunteerInput
    upsert?: UserUpsertWithoutVolunteerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVolunteerInput, UserUpdateWithoutVolunteerInput>, UserUncheckedUpdateWithoutVolunteerInput>
  }

  export type CitizenUpdateOneWithoutVOLNestedInput = {
    create?: XOR<CitizenCreateWithoutVOLInput, CitizenUncheckedCreateWithoutVOLInput>
    connectOrCreate?: CitizenCreateOrConnectWithoutVOLInput
    upsert?: CitizenUpsertWithoutVOLInput
    disconnect?: CitizenWhereInput | boolean
    delete?: CitizenWhereInput | boolean
    connect?: CitizenWhereUniqueInput
    update?: XOR<XOR<CitizenUpdateToOneWithWhereWithoutVOLInput, CitizenUpdateWithoutVOLInput>, CitizenUncheckedUpdateWithoutVOLInput>
  }

  export type NGOUpdateOneWithoutVOLLNestedInput = {
    create?: XOR<NGOCreateWithoutVOLLInput, NGOUncheckedCreateWithoutVOLLInput>
    connectOrCreate?: NGOCreateOrConnectWithoutVOLLInput
    upsert?: NGOUpsertWithoutVOLLInput
    disconnect?: NGOWhereInput | boolean
    delete?: NGOWhereInput | boolean
    connect?: NGOWhereUniqueInput
    update?: XOR<XOR<NGOUpdateToOneWithWhereWithoutVOLLInput, NGOUpdateWithoutVOLLInput>, NGOUncheckedUpdateWithoutVOLLInput>
  }

  export type CitizenUncheckedUpdateOneWithoutVOLNestedInput = {
    create?: XOR<CitizenCreateWithoutVOLInput, CitizenUncheckedCreateWithoutVOLInput>
    connectOrCreate?: CitizenCreateOrConnectWithoutVOLInput
    upsert?: CitizenUpsertWithoutVOLInput
    disconnect?: CitizenWhereInput | boolean
    delete?: CitizenWhereInput | boolean
    connect?: CitizenWhereUniqueInput
    update?: XOR<XOR<CitizenUpdateToOneWithWhereWithoutVOLInput, CitizenUpdateWithoutVOLInput>, CitizenUncheckedUpdateWithoutVOLInput>
  }

  export type NGOUncheckedUpdateOneWithoutVOLLNestedInput = {
    create?: XOR<NGOCreateWithoutVOLLInput, NGOUncheckedCreateWithoutVOLLInput>
    connectOrCreate?: NGOCreateOrConnectWithoutVOLLInput
    upsert?: NGOUpsertWithoutVOLLInput
    disconnect?: NGOWhereInput | boolean
    delete?: NGOWhereInput | boolean
    connect?: NGOWhereUniqueInput
    update?: XOR<XOR<NGOUpdateToOneWithWhereWithoutVOLLInput, NGOUpdateWithoutVOLLInput>, NGOUncheckedUpdateWithoutVOLLInput>
  }

  export type VolunteerCreateNestedOneWithoutCitizenInput = {
    create?: XOR<VolunteerCreateWithoutCitizenInput, VolunteerUncheckedCreateWithoutCitizenInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutCitizenInput
    connect?: VolunteerWhereUniqueInput
  }

  export type VolunteerUpdateOneRequiredWithoutCitizenNestedInput = {
    create?: XOR<VolunteerCreateWithoutCitizenInput, VolunteerUncheckedCreateWithoutCitizenInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutCitizenInput
    upsert?: VolunteerUpsertWithoutCitizenInput
    connect?: VolunteerWhereUniqueInput
    update?: XOR<XOR<VolunteerUpdateToOneWithWhereWithoutCitizenInput, VolunteerUpdateWithoutCitizenInput>, VolunteerUncheckedUpdateWithoutCitizenInput>
  }

  export type VolunteerCreateNestedOneWithoutNgoInput = {
    create?: XOR<VolunteerCreateWithoutNgoInput, VolunteerUncheckedCreateWithoutNgoInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutNgoInput
    connect?: VolunteerWhereUniqueInput
  }

  export type VolunteerUpdateOneRequiredWithoutNgoNestedInput = {
    create?: XOR<VolunteerCreateWithoutNgoInput, VolunteerUncheckedCreateWithoutNgoInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutNgoInput
    upsert?: VolunteerUpsertWithoutNgoInput
    connect?: VolunteerWhereUniqueInput
    update?: XOR<XOR<VolunteerUpdateToOneWithWhereWithoutNgoInput, VolunteerUpdateWithoutNgoInput>, VolunteerUncheckedUpdateWithoutNgoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type VolunteerCreateWithoutUSERInput = {
    typeV?: string | null
    phone?: string | null
    AvailabilityV?: string | null
    ReputationScore: Decimal | DecimalJsLike | number | string
    CategoryV?: string | null
    citizen?: CitizenCreateNestedOneWithoutVOLInput
    ngo?: NGOCreateNestedOneWithoutVOLLInput
  }

  export type VolunteerUncheckedCreateWithoutUSERInput = {
    volId?: number
    typeV?: string | null
    phone?: string | null
    AvailabilityV?: string | null
    ReputationScore: Decimal | DecimalJsLike | number | string
    CategoryV?: string | null
    citizen?: CitizenUncheckedCreateNestedOneWithoutVOLInput
    ngo?: NGOUncheckedCreateNestedOneWithoutVOLLInput
  }

  export type VolunteerCreateOrConnectWithoutUSERInput = {
    where: VolunteerWhereUniqueInput
    create: XOR<VolunteerCreateWithoutUSERInput, VolunteerUncheckedCreateWithoutUSERInput>
  }

  export type VolunteerUpsertWithoutUSERInput = {
    update: XOR<VolunteerUpdateWithoutUSERInput, VolunteerUncheckedUpdateWithoutUSERInput>
    create: XOR<VolunteerCreateWithoutUSERInput, VolunteerUncheckedCreateWithoutUSERInput>
    where?: VolunteerWhereInput
  }

  export type VolunteerUpdateToOneWithWhereWithoutUSERInput = {
    where?: VolunteerWhereInput
    data: XOR<VolunteerUpdateWithoutUSERInput, VolunteerUncheckedUpdateWithoutUSERInput>
  }

  export type VolunteerUpdateWithoutUSERInput = {
    typeV?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    AvailabilityV?: NullableStringFieldUpdateOperationsInput | string | null
    ReputationScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CategoryV?: NullableStringFieldUpdateOperationsInput | string | null
    citizen?: CitizenUpdateOneWithoutVOLNestedInput
    ngo?: NGOUpdateOneWithoutVOLLNestedInput
  }

  export type VolunteerUncheckedUpdateWithoutUSERInput = {
    volId?: IntFieldUpdateOperationsInput | number
    typeV?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    AvailabilityV?: NullableStringFieldUpdateOperationsInput | string | null
    ReputationScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CategoryV?: NullableStringFieldUpdateOperationsInput | string | null
    citizen?: CitizenUncheckedUpdateOneWithoutVOLNestedInput
    ngo?: NGOUncheckedUpdateOneWithoutVOLLNestedInput
  }

  export type UserCreateWithoutVolunteerInput = {
    email?: string | null
    createdAt?: Date | string
    role?: string | null
  }

  export type UserUncheckedCreateWithoutVolunteerInput = {
    id?: number
    email?: string | null
    createdAt?: Date | string
    role?: string | null
  }

  export type UserCreateOrConnectWithoutVolunteerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVolunteerInput, UserUncheckedCreateWithoutVolunteerInput>
  }

  export type CitizenCreateWithoutVOLInput = {
    firstname?: string | null
    lastname?: string | null
  }

  export type CitizenUncheckedCreateWithoutVOLInput = {
    CitizenId?: number
    firstname?: string | null
    lastname?: string | null
  }

  export type CitizenCreateOrConnectWithoutVOLInput = {
    where: CitizenWhereUniqueInput
    create: XOR<CitizenCreateWithoutVOLInput, CitizenUncheckedCreateWithoutVOLInput>
  }

  export type NGOCreateWithoutVOLLInput = {
    ngoName?: string | null
  }

  export type NGOUncheckedCreateWithoutVOLLInput = {
    CitizenId?: number
    ngoName?: string | null
  }

  export type NGOCreateOrConnectWithoutVOLLInput = {
    where: NGOWhereUniqueInput
    create: XOR<NGOCreateWithoutVOLLInput, NGOUncheckedCreateWithoutVOLLInput>
  }

  export type UserUpsertWithoutVolunteerInput = {
    update: XOR<UserUpdateWithoutVolunteerInput, UserUncheckedUpdateWithoutVolunteerInput>
    create: XOR<UserCreateWithoutVolunteerInput, UserUncheckedCreateWithoutVolunteerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVolunteerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVolunteerInput, UserUncheckedUpdateWithoutVolunteerInput>
  }

  export type UserUpdateWithoutVolunteerInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutVolunteerInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CitizenUpsertWithoutVOLInput = {
    update: XOR<CitizenUpdateWithoutVOLInput, CitizenUncheckedUpdateWithoutVOLInput>
    create: XOR<CitizenCreateWithoutVOLInput, CitizenUncheckedCreateWithoutVOLInput>
    where?: CitizenWhereInput
  }

  export type CitizenUpdateToOneWithWhereWithoutVOLInput = {
    where?: CitizenWhereInput
    data: XOR<CitizenUpdateWithoutVOLInput, CitizenUncheckedUpdateWithoutVOLInput>
  }

  export type CitizenUpdateWithoutVOLInput = {
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CitizenUncheckedUpdateWithoutVOLInput = {
    CitizenId?: IntFieldUpdateOperationsInput | number
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NGOUpsertWithoutVOLLInput = {
    update: XOR<NGOUpdateWithoutVOLLInput, NGOUncheckedUpdateWithoutVOLLInput>
    create: XOR<NGOCreateWithoutVOLLInput, NGOUncheckedCreateWithoutVOLLInput>
    where?: NGOWhereInput
  }

  export type NGOUpdateToOneWithWhereWithoutVOLLInput = {
    where?: NGOWhereInput
    data: XOR<NGOUpdateWithoutVOLLInput, NGOUncheckedUpdateWithoutVOLLInput>
  }

  export type NGOUpdateWithoutVOLLInput = {
    ngoName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NGOUncheckedUpdateWithoutVOLLInput = {
    CitizenId?: IntFieldUpdateOperationsInput | number
    ngoName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VolunteerCreateWithoutCitizenInput = {
    typeV?: string | null
    phone?: string | null
    AvailabilityV?: string | null
    ReputationScore: Decimal | DecimalJsLike | number | string
    CategoryV?: string | null
    USER: UserCreateNestedOneWithoutVolunteerInput
    ngo?: NGOCreateNestedOneWithoutVOLLInput
  }

  export type VolunteerUncheckedCreateWithoutCitizenInput = {
    volId?: number
    typeV?: string | null
    phone?: string | null
    AvailabilityV?: string | null
    ReputationScore: Decimal | DecimalJsLike | number | string
    CategoryV?: string | null
    userId: number
    ngo?: NGOUncheckedCreateNestedOneWithoutVOLLInput
  }

  export type VolunteerCreateOrConnectWithoutCitizenInput = {
    where: VolunteerWhereUniqueInput
    create: XOR<VolunteerCreateWithoutCitizenInput, VolunteerUncheckedCreateWithoutCitizenInput>
  }

  export type VolunteerUpsertWithoutCitizenInput = {
    update: XOR<VolunteerUpdateWithoutCitizenInput, VolunteerUncheckedUpdateWithoutCitizenInput>
    create: XOR<VolunteerCreateWithoutCitizenInput, VolunteerUncheckedCreateWithoutCitizenInput>
    where?: VolunteerWhereInput
  }

  export type VolunteerUpdateToOneWithWhereWithoutCitizenInput = {
    where?: VolunteerWhereInput
    data: XOR<VolunteerUpdateWithoutCitizenInput, VolunteerUncheckedUpdateWithoutCitizenInput>
  }

  export type VolunteerUpdateWithoutCitizenInput = {
    typeV?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    AvailabilityV?: NullableStringFieldUpdateOperationsInput | string | null
    ReputationScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CategoryV?: NullableStringFieldUpdateOperationsInput | string | null
    USER?: UserUpdateOneRequiredWithoutVolunteerNestedInput
    ngo?: NGOUpdateOneWithoutVOLLNestedInput
  }

  export type VolunteerUncheckedUpdateWithoutCitizenInput = {
    volId?: IntFieldUpdateOperationsInput | number
    typeV?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    AvailabilityV?: NullableStringFieldUpdateOperationsInput | string | null
    ReputationScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CategoryV?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    ngo?: NGOUncheckedUpdateOneWithoutVOLLNestedInput
  }

  export type VolunteerCreateWithoutNgoInput = {
    typeV?: string | null
    phone?: string | null
    AvailabilityV?: string | null
    ReputationScore: Decimal | DecimalJsLike | number | string
    CategoryV?: string | null
    USER: UserCreateNestedOneWithoutVolunteerInput
    citizen?: CitizenCreateNestedOneWithoutVOLInput
  }

  export type VolunteerUncheckedCreateWithoutNgoInput = {
    volId?: number
    typeV?: string | null
    phone?: string | null
    AvailabilityV?: string | null
    ReputationScore: Decimal | DecimalJsLike | number | string
    CategoryV?: string | null
    userId: number
    citizen?: CitizenUncheckedCreateNestedOneWithoutVOLInput
  }

  export type VolunteerCreateOrConnectWithoutNgoInput = {
    where: VolunteerWhereUniqueInput
    create: XOR<VolunteerCreateWithoutNgoInput, VolunteerUncheckedCreateWithoutNgoInput>
  }

  export type VolunteerUpsertWithoutNgoInput = {
    update: XOR<VolunteerUpdateWithoutNgoInput, VolunteerUncheckedUpdateWithoutNgoInput>
    create: XOR<VolunteerCreateWithoutNgoInput, VolunteerUncheckedCreateWithoutNgoInput>
    where?: VolunteerWhereInput
  }

  export type VolunteerUpdateToOneWithWhereWithoutNgoInput = {
    where?: VolunteerWhereInput
    data: XOR<VolunteerUpdateWithoutNgoInput, VolunteerUncheckedUpdateWithoutNgoInput>
  }

  export type VolunteerUpdateWithoutNgoInput = {
    typeV?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    AvailabilityV?: NullableStringFieldUpdateOperationsInput | string | null
    ReputationScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CategoryV?: NullableStringFieldUpdateOperationsInput | string | null
    USER?: UserUpdateOneRequiredWithoutVolunteerNestedInput
    citizen?: CitizenUpdateOneWithoutVOLNestedInput
  }

  export type VolunteerUncheckedUpdateWithoutNgoInput = {
    volId?: IntFieldUpdateOperationsInput | number
    typeV?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    AvailabilityV?: NullableStringFieldUpdateOperationsInput | string | null
    ReputationScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CategoryV?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    citizen?: CitizenUncheckedUpdateOneWithoutVOLNestedInput
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}