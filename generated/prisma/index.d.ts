
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
 * Model spatial_ref_sys
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type spatial_ref_sys = $Result.DefaultSelection<Prisma.$spatial_ref_sysPayload>
/**
 * Model Crisis
 * 
 */
export type Crisis = $Result.DefaultSelection<Prisma.$CrisisPayload>
/**
 * Model Damage
 * 
 */
export type Damage = $Result.DefaultSelection<Prisma.$DamagePayload>
/**
 * Model TESTIMONY
 * 
 */
export type TESTIMONY = $Result.DefaultSelection<Prisma.$TESTIMONYPayload>
/**
 * Model SERVICE
 * 
 */
export type SERVICE = $Result.DefaultSelection<Prisma.$SERVICEPayload>
/**
 * Model PROVIDES
 * 
 */
export type PROVIDES = $Result.DefaultSelection<Prisma.$PROVIDESPayload>

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

  /**
   * `prisma.spatial_ref_sys`: Exposes CRUD operations for the **spatial_ref_sys** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Spatial_ref_sys
    * const spatial_ref_sys = await prisma.spatial_ref_sys.findMany()
    * ```
    */
  get spatial_ref_sys(): Prisma.spatial_ref_sysDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.crisis`: Exposes CRUD operations for the **Crisis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Crises
    * const crises = await prisma.crisis.findMany()
    * ```
    */
  get crisis(): Prisma.CrisisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.damage`: Exposes CRUD operations for the **Damage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Damages
    * const damages = await prisma.damage.findMany()
    * ```
    */
  get damage(): Prisma.DamageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tESTIMONY`: Exposes CRUD operations for the **TESTIMONY** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TESTIMONIES
    * const tESTIMONIES = await prisma.tESTIMONY.findMany()
    * ```
    */
  get tESTIMONY(): Prisma.TESTIMONYDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sERVICE`: Exposes CRUD operations for the **SERVICE** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SERVICES
    * const sERVICES = await prisma.sERVICE.findMany()
    * ```
    */
  get sERVICE(): Prisma.SERVICEDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pROVIDES`: Exposes CRUD operations for the **PROVIDES** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PROVIDES
    * const pROVIDES = await prisma.pROVIDES.findMany()
    * ```
    */
  get pROVIDES(): Prisma.PROVIDESDelegate<ExtArgs, ClientOptions>;
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
    NGO: 'NGO',
    spatial_ref_sys: 'spatial_ref_sys',
    Crisis: 'Crisis',
    Damage: 'Damage',
    TESTIMONY: 'TESTIMONY',
    SERVICE: 'SERVICE',
    PROVIDES: 'PROVIDES'
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
      modelProps: "user" | "volunteer" | "citizen" | "nGO" | "spatial_ref_sys" | "crisis" | "damage" | "tESTIMONY" | "sERVICE" | "pROVIDES"
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
      spatial_ref_sys: {
        payload: Prisma.$spatial_ref_sysPayload<ExtArgs>
        fields: Prisma.spatial_ref_sysFieldRefs
        operations: {
          findUnique: {
            args: Prisma.spatial_ref_sysFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.spatial_ref_sysFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          findFirst: {
            args: Prisma.spatial_ref_sysFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.spatial_ref_sysFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          findMany: {
            args: Prisma.spatial_ref_sysFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>[]
          }
          create: {
            args: Prisma.spatial_ref_sysCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          createMany: {
            args: Prisma.spatial_ref_sysCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.spatial_ref_sysCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>[]
          }
          delete: {
            args: Prisma.spatial_ref_sysDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          update: {
            args: Prisma.spatial_ref_sysUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          deleteMany: {
            args: Prisma.spatial_ref_sysDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.spatial_ref_sysUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.spatial_ref_sysUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>[]
          }
          upsert: {
            args: Prisma.spatial_ref_sysUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          aggregate: {
            args: Prisma.Spatial_ref_sysAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpatial_ref_sys>
          }
          groupBy: {
            args: Prisma.spatial_ref_sysGroupByArgs<ExtArgs>
            result: $Utils.Optional<Spatial_ref_sysGroupByOutputType>[]
          }
          count: {
            args: Prisma.spatial_ref_sysCountArgs<ExtArgs>
            result: $Utils.Optional<Spatial_ref_sysCountAggregateOutputType> | number
          }
        }
      }
      Crisis: {
        payload: Prisma.$CrisisPayload<ExtArgs>
        fields: Prisma.CrisisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CrisisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrisisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CrisisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrisisPayload>
          }
          findFirst: {
            args: Prisma.CrisisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrisisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CrisisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrisisPayload>
          }
          findMany: {
            args: Prisma.CrisisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrisisPayload>[]
          }
          create: {
            args: Prisma.CrisisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrisisPayload>
          }
          createMany: {
            args: Prisma.CrisisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CrisisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrisisPayload>[]
          }
          delete: {
            args: Prisma.CrisisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrisisPayload>
          }
          update: {
            args: Prisma.CrisisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrisisPayload>
          }
          deleteMany: {
            args: Prisma.CrisisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CrisisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CrisisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrisisPayload>[]
          }
          upsert: {
            args: Prisma.CrisisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrisisPayload>
          }
          aggregate: {
            args: Prisma.CrisisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrisis>
          }
          groupBy: {
            args: Prisma.CrisisGroupByArgs<ExtArgs>
            result: $Utils.Optional<CrisisGroupByOutputType>[]
          }
          count: {
            args: Prisma.CrisisCountArgs<ExtArgs>
            result: $Utils.Optional<CrisisCountAggregateOutputType> | number
          }
        }
      }
      Damage: {
        payload: Prisma.$DamagePayload<ExtArgs>
        fields: Prisma.DamageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DamageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DamagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DamageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DamagePayload>
          }
          findFirst: {
            args: Prisma.DamageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DamagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DamageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DamagePayload>
          }
          findMany: {
            args: Prisma.DamageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DamagePayload>[]
          }
          create: {
            args: Prisma.DamageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DamagePayload>
          }
          createMany: {
            args: Prisma.DamageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DamageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DamagePayload>[]
          }
          delete: {
            args: Prisma.DamageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DamagePayload>
          }
          update: {
            args: Prisma.DamageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DamagePayload>
          }
          deleteMany: {
            args: Prisma.DamageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DamageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DamageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DamagePayload>[]
          }
          upsert: {
            args: Prisma.DamageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DamagePayload>
          }
          aggregate: {
            args: Prisma.DamageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDamage>
          }
          groupBy: {
            args: Prisma.DamageGroupByArgs<ExtArgs>
            result: $Utils.Optional<DamageGroupByOutputType>[]
          }
          count: {
            args: Prisma.DamageCountArgs<ExtArgs>
            result: $Utils.Optional<DamageCountAggregateOutputType> | number
          }
        }
      }
      TESTIMONY: {
        payload: Prisma.$TESTIMONYPayload<ExtArgs>
        fields: Prisma.TESTIMONYFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TESTIMONYFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TESTIMONYPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TESTIMONYFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TESTIMONYPayload>
          }
          findFirst: {
            args: Prisma.TESTIMONYFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TESTIMONYPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TESTIMONYFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TESTIMONYPayload>
          }
          findMany: {
            args: Prisma.TESTIMONYFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TESTIMONYPayload>[]
          }
          create: {
            args: Prisma.TESTIMONYCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TESTIMONYPayload>
          }
          createMany: {
            args: Prisma.TESTIMONYCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TESTIMONYCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TESTIMONYPayload>[]
          }
          delete: {
            args: Prisma.TESTIMONYDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TESTIMONYPayload>
          }
          update: {
            args: Prisma.TESTIMONYUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TESTIMONYPayload>
          }
          deleteMany: {
            args: Prisma.TESTIMONYDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TESTIMONYUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TESTIMONYUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TESTIMONYPayload>[]
          }
          upsert: {
            args: Prisma.TESTIMONYUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TESTIMONYPayload>
          }
          aggregate: {
            args: Prisma.TESTIMONYAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTESTIMONY>
          }
          groupBy: {
            args: Prisma.TESTIMONYGroupByArgs<ExtArgs>
            result: $Utils.Optional<TESTIMONYGroupByOutputType>[]
          }
          count: {
            args: Prisma.TESTIMONYCountArgs<ExtArgs>
            result: $Utils.Optional<TESTIMONYCountAggregateOutputType> | number
          }
        }
      }
      SERVICE: {
        payload: Prisma.$SERVICEPayload<ExtArgs>
        fields: Prisma.SERVICEFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SERVICEFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SERVICEFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload>
          }
          findFirst: {
            args: Prisma.SERVICEFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SERVICEFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload>
          }
          findMany: {
            args: Prisma.SERVICEFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload>[]
          }
          create: {
            args: Prisma.SERVICECreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload>
          }
          createMany: {
            args: Prisma.SERVICECreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SERVICECreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload>[]
          }
          delete: {
            args: Prisma.SERVICEDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload>
          }
          update: {
            args: Prisma.SERVICEUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload>
          }
          deleteMany: {
            args: Prisma.SERVICEDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SERVICEUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SERVICEUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload>[]
          }
          upsert: {
            args: Prisma.SERVICEUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload>
          }
          aggregate: {
            args: Prisma.SERVICEAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSERVICE>
          }
          groupBy: {
            args: Prisma.SERVICEGroupByArgs<ExtArgs>
            result: $Utils.Optional<SERVICEGroupByOutputType>[]
          }
          count: {
            args: Prisma.SERVICECountArgs<ExtArgs>
            result: $Utils.Optional<SERVICECountAggregateOutputType> | number
          }
        }
      }
      PROVIDES: {
        payload: Prisma.$PROVIDESPayload<ExtArgs>
        fields: Prisma.PROVIDESFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PROVIDESFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROVIDESPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PROVIDESFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROVIDESPayload>
          }
          findFirst: {
            args: Prisma.PROVIDESFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROVIDESPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PROVIDESFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROVIDESPayload>
          }
          findMany: {
            args: Prisma.PROVIDESFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROVIDESPayload>[]
          }
          create: {
            args: Prisma.PROVIDESCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROVIDESPayload>
          }
          createMany: {
            args: Prisma.PROVIDESCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PROVIDESCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROVIDESPayload>[]
          }
          delete: {
            args: Prisma.PROVIDESDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROVIDESPayload>
          }
          update: {
            args: Prisma.PROVIDESUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROVIDESPayload>
          }
          deleteMany: {
            args: Prisma.PROVIDESDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PROVIDESUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PROVIDESUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROVIDESPayload>[]
          }
          upsert: {
            args: Prisma.PROVIDESUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROVIDESPayload>
          }
          aggregate: {
            args: Prisma.PROVIDESAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePROVIDES>
          }
          groupBy: {
            args: Prisma.PROVIDESGroupByArgs<ExtArgs>
            result: $Utils.Optional<PROVIDESGroupByOutputType>[]
          }
          count: {
            args: Prisma.PROVIDESCountArgs<ExtArgs>
            result: $Utils.Optional<PROVIDESCountAggregateOutputType> | number
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
    spatial_ref_sys?: spatial_ref_sysOmit
    crisis?: CrisisOmit
    damage?: DamageOmit
    tESTIMONY?: TESTIMONYOmit
    sERVICE?: SERVICEOmit
    pROVIDES?: PROVIDESOmit
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
   * Count Type VolunteerCountOutputType
   */

  export type VolunteerCountOutputType = {
    PROVIDES: number
    TESTIMONY: number
  }

  export type VolunteerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PROVIDES?: boolean | VolunteerCountOutputTypeCountPROVIDESArgs
    TESTIMONY?: boolean | VolunteerCountOutputTypeCountTESTIMONYArgs
  }

  // Custom InputTypes
  /**
   * VolunteerCountOutputType without action
   */
  export type VolunteerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerCountOutputType
     */
    select?: VolunteerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VolunteerCountOutputType without action
   */
  export type VolunteerCountOutputTypeCountPROVIDESArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PROVIDESWhereInput
  }

  /**
   * VolunteerCountOutputType without action
   */
  export type VolunteerCountOutputTypeCountTESTIMONYArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TESTIMONYWhereInput
  }


  /**
   * Count Type CrisisCountOutputType
   */

  export type CrisisCountOutputType = {
    Damage: number
  }

  export type CrisisCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Damage?: boolean | CrisisCountOutputTypeCountDamageArgs
  }

  // Custom InputTypes
  /**
   * CrisisCountOutputType without action
   */
  export type CrisisCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrisisCountOutputType
     */
    select?: CrisisCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CrisisCountOutputType without action
   */
  export type CrisisCountOutputTypeCountDamageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DamageWhereInput
  }


  /**
   * Count Type DamageCountOutputType
   */

  export type DamageCountOutputType = {
    SERVICE: number
    TESTIMONY: number
  }

  export type DamageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SERVICE?: boolean | DamageCountOutputTypeCountSERVICEArgs
    TESTIMONY?: boolean | DamageCountOutputTypeCountTESTIMONYArgs
  }

  // Custom InputTypes
  /**
   * DamageCountOutputType without action
   */
  export type DamageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DamageCountOutputType
     */
    select?: DamageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DamageCountOutputType without action
   */
  export type DamageCountOutputTypeCountSERVICEArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SERVICEWhereInput
  }

  /**
   * DamageCountOutputType without action
   */
  export type DamageCountOutputTypeCountTESTIMONYArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TESTIMONYWhereInput
  }


  /**
   * Count Type SERVICECountOutputType
   */

  export type SERVICECountOutputType = {
    PROVIDES: number
  }

  export type SERVICECountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PROVIDES?: boolean | SERVICECountOutputTypeCountPROVIDESArgs
  }

  // Custom InputTypes
  /**
   * SERVICECountOutputType without action
   */
  export type SERVICECountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICECountOutputType
     */
    select?: SERVICECountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SERVICECountOutputType without action
   */
  export type SERVICECountOutputTypeCountPROVIDESArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PROVIDESWhereInput
  }


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
    Citizen?: boolean | Volunteer$CitizenArgs<ExtArgs>
    ngo?: boolean | Volunteer$ngoArgs<ExtArgs>
    PROVIDES?: boolean | Volunteer$PROVIDESArgs<ExtArgs>
    TESTIMONY?: boolean | Volunteer$TESTIMONYArgs<ExtArgs>
    USER?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | VolunteerCountOutputTypeDefaultArgs<ExtArgs>
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
    Citizen?: boolean | Volunteer$CitizenArgs<ExtArgs>
    ngo?: boolean | Volunteer$ngoArgs<ExtArgs>
    PROVIDES?: boolean | Volunteer$PROVIDESArgs<ExtArgs>
    TESTIMONY?: boolean | Volunteer$TESTIMONYArgs<ExtArgs>
    USER?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | VolunteerCountOutputTypeDefaultArgs<ExtArgs>
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
      Citizen: Prisma.$CitizenPayload<ExtArgs> | null
      ngo: Prisma.$NGOPayload<ExtArgs> | null
      PROVIDES: Prisma.$PROVIDESPayload<ExtArgs>[]
      TESTIMONY: Prisma.$TESTIMONYPayload<ExtArgs>[]
      USER: Prisma.$UserPayload<ExtArgs>
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
    Citizen<T extends Volunteer$CitizenArgs<ExtArgs> = {}>(args?: Subset<T, Volunteer$CitizenArgs<ExtArgs>>): Prisma__CitizenClient<$Result.GetResult<Prisma.$CitizenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ngo<T extends Volunteer$ngoArgs<ExtArgs> = {}>(args?: Subset<T, Volunteer$ngoArgs<ExtArgs>>): Prisma__NGOClient<$Result.GetResult<Prisma.$NGOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    PROVIDES<T extends Volunteer$PROVIDESArgs<ExtArgs> = {}>(args?: Subset<T, Volunteer$PROVIDESArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PROVIDESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TESTIMONY<T extends Volunteer$TESTIMONYArgs<ExtArgs> = {}>(args?: Subset<T, Volunteer$TESTIMONYArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TESTIMONYPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    USER<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Volunteer.Citizen
   */
  export type Volunteer$CitizenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Volunteer.PROVIDES
   */
  export type Volunteer$PROVIDESArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROVIDES
     */
    select?: PROVIDESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROVIDES
     */
    omit?: PROVIDESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROVIDESInclude<ExtArgs> | null
    where?: PROVIDESWhereInput
    orderBy?: PROVIDESOrderByWithRelationInput | PROVIDESOrderByWithRelationInput[]
    cursor?: PROVIDESWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PROVIDESScalarFieldEnum | PROVIDESScalarFieldEnum[]
  }

  /**
   * Volunteer.TESTIMONY
   */
  export type Volunteer$TESTIMONYArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TESTIMONY
     */
    select?: TESTIMONYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TESTIMONY
     */
    omit?: TESTIMONYOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TESTIMONYInclude<ExtArgs> | null
    where?: TESTIMONYWhereInput
    orderBy?: TESTIMONYOrderByWithRelationInput | TESTIMONYOrderByWithRelationInput[]
    cursor?: TESTIMONYWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TESTIMONYScalarFieldEnum | TESTIMONYScalarFieldEnum[]
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
    NGOId: number | null
    ngovolId: number | null
  }

  export type NGOSumAggregateOutputType = {
    NGOId: number | null
    ngovolId: number | null
  }

  export type NGOMinAggregateOutputType = {
    NGOId: number | null
    ngoName: string | null
    ngovolId: number | null
  }

  export type NGOMaxAggregateOutputType = {
    NGOId: number | null
    ngoName: string | null
    ngovolId: number | null
  }

  export type NGOCountAggregateOutputType = {
    NGOId: number
    ngoName: number
    ngovolId: number
    _all: number
  }


  export type NGOAvgAggregateInputType = {
    NGOId?: true
    ngovolId?: true
  }

  export type NGOSumAggregateInputType = {
    NGOId?: true
    ngovolId?: true
  }

  export type NGOMinAggregateInputType = {
    NGOId?: true
    ngoName?: true
    ngovolId?: true
  }

  export type NGOMaxAggregateInputType = {
    NGOId?: true
    ngoName?: true
    ngovolId?: true
  }

  export type NGOCountAggregateInputType = {
    NGOId?: true
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
    NGOId: number
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
    NGOId?: boolean
    ngoName?: boolean
    ngovolId?: boolean
    VOLL?: boolean | VolunteerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nGO"]>

  export type NGOSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    NGOId?: boolean
    ngoName?: boolean
    ngovolId?: boolean
    VOLL?: boolean | VolunteerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nGO"]>

  export type NGOSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    NGOId?: boolean
    ngoName?: boolean
    ngovolId?: boolean
    VOLL?: boolean | VolunteerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nGO"]>

  export type NGOSelectScalar = {
    NGOId?: boolean
    ngoName?: boolean
    ngovolId?: boolean
  }

  export type NGOOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"NGOId" | "ngoName" | "ngovolId", ExtArgs["result"]["nGO"]>
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
      NGOId: number
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
     * // Only select the `NGOId`
     * const nGOWithNGOIdOnly = await prisma.nGO.findMany({ select: { NGOId: true } })
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
     * // Create many NGOS and only return the `NGOId`
     * const nGOWithNGOIdOnly = await prisma.nGO.createManyAndReturn({
     *   select: { NGOId: true },
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
     * // Update zero or more NGOS and only return the `NGOId`
     * const nGOWithNGOIdOnly = await prisma.nGO.updateManyAndReturn({
     *   select: { NGOId: true },
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
    readonly NGOId: FieldRef<"NGO", 'Int'>
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
   * Model spatial_ref_sys
   */

  export type AggregateSpatial_ref_sys = {
    _count: Spatial_ref_sysCountAggregateOutputType | null
    _avg: Spatial_ref_sysAvgAggregateOutputType | null
    _sum: Spatial_ref_sysSumAggregateOutputType | null
    _min: Spatial_ref_sysMinAggregateOutputType | null
    _max: Spatial_ref_sysMaxAggregateOutputType | null
  }

  export type Spatial_ref_sysAvgAggregateOutputType = {
    srid: number | null
    auth_srid: number | null
  }

  export type Spatial_ref_sysSumAggregateOutputType = {
    srid: number | null
    auth_srid: number | null
  }

  export type Spatial_ref_sysMinAggregateOutputType = {
    srid: number | null
    auth_name: string | null
    auth_srid: number | null
    srtext: string | null
    proj4text: string | null
  }

  export type Spatial_ref_sysMaxAggregateOutputType = {
    srid: number | null
    auth_name: string | null
    auth_srid: number | null
    srtext: string | null
    proj4text: string | null
  }

  export type Spatial_ref_sysCountAggregateOutputType = {
    srid: number
    auth_name: number
    auth_srid: number
    srtext: number
    proj4text: number
    _all: number
  }


  export type Spatial_ref_sysAvgAggregateInputType = {
    srid?: true
    auth_srid?: true
  }

  export type Spatial_ref_sysSumAggregateInputType = {
    srid?: true
    auth_srid?: true
  }

  export type Spatial_ref_sysMinAggregateInputType = {
    srid?: true
    auth_name?: true
    auth_srid?: true
    srtext?: true
    proj4text?: true
  }

  export type Spatial_ref_sysMaxAggregateInputType = {
    srid?: true
    auth_name?: true
    auth_srid?: true
    srtext?: true
    proj4text?: true
  }

  export type Spatial_ref_sysCountAggregateInputType = {
    srid?: true
    auth_name?: true
    auth_srid?: true
    srtext?: true
    proj4text?: true
    _all?: true
  }

  export type Spatial_ref_sysAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which spatial_ref_sys to aggregate.
     */
    where?: spatial_ref_sysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spatial_ref_sys to fetch.
     */
    orderBy?: spatial_ref_sysOrderByWithRelationInput | spatial_ref_sysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: spatial_ref_sysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spatial_ref_sys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spatial_ref_sys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned spatial_ref_sys
    **/
    _count?: true | Spatial_ref_sysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Spatial_ref_sysAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Spatial_ref_sysSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Spatial_ref_sysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Spatial_ref_sysMaxAggregateInputType
  }

  export type GetSpatial_ref_sysAggregateType<T extends Spatial_ref_sysAggregateArgs> = {
        [P in keyof T & keyof AggregateSpatial_ref_sys]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpatial_ref_sys[P]>
      : GetScalarType<T[P], AggregateSpatial_ref_sys[P]>
  }




  export type spatial_ref_sysGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: spatial_ref_sysWhereInput
    orderBy?: spatial_ref_sysOrderByWithAggregationInput | spatial_ref_sysOrderByWithAggregationInput[]
    by: Spatial_ref_sysScalarFieldEnum[] | Spatial_ref_sysScalarFieldEnum
    having?: spatial_ref_sysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Spatial_ref_sysCountAggregateInputType | true
    _avg?: Spatial_ref_sysAvgAggregateInputType
    _sum?: Spatial_ref_sysSumAggregateInputType
    _min?: Spatial_ref_sysMinAggregateInputType
    _max?: Spatial_ref_sysMaxAggregateInputType
  }

  export type Spatial_ref_sysGroupByOutputType = {
    srid: number
    auth_name: string | null
    auth_srid: number | null
    srtext: string | null
    proj4text: string | null
    _count: Spatial_ref_sysCountAggregateOutputType | null
    _avg: Spatial_ref_sysAvgAggregateOutputType | null
    _sum: Spatial_ref_sysSumAggregateOutputType | null
    _min: Spatial_ref_sysMinAggregateOutputType | null
    _max: Spatial_ref_sysMaxAggregateOutputType | null
  }

  type GetSpatial_ref_sysGroupByPayload<T extends spatial_ref_sysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Spatial_ref_sysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Spatial_ref_sysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Spatial_ref_sysGroupByOutputType[P]>
            : GetScalarType<T[P], Spatial_ref_sysGroupByOutputType[P]>
        }
      >
    >


  export type spatial_ref_sysSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    srid?: boolean
    auth_name?: boolean
    auth_srid?: boolean
    srtext?: boolean
    proj4text?: boolean
  }, ExtArgs["result"]["spatial_ref_sys"]>

  export type spatial_ref_sysSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    srid?: boolean
    auth_name?: boolean
    auth_srid?: boolean
    srtext?: boolean
    proj4text?: boolean
  }, ExtArgs["result"]["spatial_ref_sys"]>

  export type spatial_ref_sysSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    srid?: boolean
    auth_name?: boolean
    auth_srid?: boolean
    srtext?: boolean
    proj4text?: boolean
  }, ExtArgs["result"]["spatial_ref_sys"]>

  export type spatial_ref_sysSelectScalar = {
    srid?: boolean
    auth_name?: boolean
    auth_srid?: boolean
    srtext?: boolean
    proj4text?: boolean
  }

  export type spatial_ref_sysOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"srid" | "auth_name" | "auth_srid" | "srtext" | "proj4text", ExtArgs["result"]["spatial_ref_sys"]>

  export type $spatial_ref_sysPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "spatial_ref_sys"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      srid: number
      auth_name: string | null
      auth_srid: number | null
      srtext: string | null
      proj4text: string | null
    }, ExtArgs["result"]["spatial_ref_sys"]>
    composites: {}
  }

  type spatial_ref_sysGetPayload<S extends boolean | null | undefined | spatial_ref_sysDefaultArgs> = $Result.GetResult<Prisma.$spatial_ref_sysPayload, S>

  type spatial_ref_sysCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<spatial_ref_sysFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Spatial_ref_sysCountAggregateInputType | true
    }

  export interface spatial_ref_sysDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['spatial_ref_sys'], meta: { name: 'spatial_ref_sys' } }
    /**
     * Find zero or one Spatial_ref_sys that matches the filter.
     * @param {spatial_ref_sysFindUniqueArgs} args - Arguments to find a Spatial_ref_sys
     * @example
     * // Get one Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends spatial_ref_sysFindUniqueArgs>(args: SelectSubset<T, spatial_ref_sysFindUniqueArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Spatial_ref_sys that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {spatial_ref_sysFindUniqueOrThrowArgs} args - Arguments to find a Spatial_ref_sys
     * @example
     * // Get one Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends spatial_ref_sysFindUniqueOrThrowArgs>(args: SelectSubset<T, spatial_ref_sysFindUniqueOrThrowArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spatial_ref_sys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysFindFirstArgs} args - Arguments to find a Spatial_ref_sys
     * @example
     * // Get one Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends spatial_ref_sysFindFirstArgs>(args?: SelectSubset<T, spatial_ref_sysFindFirstArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spatial_ref_sys that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysFindFirstOrThrowArgs} args - Arguments to find a Spatial_ref_sys
     * @example
     * // Get one Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends spatial_ref_sysFindFirstOrThrowArgs>(args?: SelectSubset<T, spatial_ref_sysFindFirstOrThrowArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Spatial_ref_sys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findMany()
     * 
     * // Get first 10 Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findMany({ take: 10 })
     * 
     * // Only select the `srid`
     * const spatial_ref_sysWithSridOnly = await prisma.spatial_ref_sys.findMany({ select: { srid: true } })
     * 
     */
    findMany<T extends spatial_ref_sysFindManyArgs>(args?: SelectSubset<T, spatial_ref_sysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Spatial_ref_sys.
     * @param {spatial_ref_sysCreateArgs} args - Arguments to create a Spatial_ref_sys.
     * @example
     * // Create one Spatial_ref_sys
     * const Spatial_ref_sys = await prisma.spatial_ref_sys.create({
     *   data: {
     *     // ... data to create a Spatial_ref_sys
     *   }
     * })
     * 
     */
    create<T extends spatial_ref_sysCreateArgs>(args: SelectSubset<T, spatial_ref_sysCreateArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Spatial_ref_sys.
     * @param {spatial_ref_sysCreateManyArgs} args - Arguments to create many Spatial_ref_sys.
     * @example
     * // Create many Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends spatial_ref_sysCreateManyArgs>(args?: SelectSubset<T, spatial_ref_sysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Spatial_ref_sys and returns the data saved in the database.
     * @param {spatial_ref_sysCreateManyAndReturnArgs} args - Arguments to create many Spatial_ref_sys.
     * @example
     * // Create many Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Spatial_ref_sys and only return the `srid`
     * const spatial_ref_sysWithSridOnly = await prisma.spatial_ref_sys.createManyAndReturn({
     *   select: { srid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends spatial_ref_sysCreateManyAndReturnArgs>(args?: SelectSubset<T, spatial_ref_sysCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Spatial_ref_sys.
     * @param {spatial_ref_sysDeleteArgs} args - Arguments to delete one Spatial_ref_sys.
     * @example
     * // Delete one Spatial_ref_sys
     * const Spatial_ref_sys = await prisma.spatial_ref_sys.delete({
     *   where: {
     *     // ... filter to delete one Spatial_ref_sys
     *   }
     * })
     * 
     */
    delete<T extends spatial_ref_sysDeleteArgs>(args: SelectSubset<T, spatial_ref_sysDeleteArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Spatial_ref_sys.
     * @param {spatial_ref_sysUpdateArgs} args - Arguments to update one Spatial_ref_sys.
     * @example
     * // Update one Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends spatial_ref_sysUpdateArgs>(args: SelectSubset<T, spatial_ref_sysUpdateArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Spatial_ref_sys.
     * @param {spatial_ref_sysDeleteManyArgs} args - Arguments to filter Spatial_ref_sys to delete.
     * @example
     * // Delete a few Spatial_ref_sys
     * const { count } = await prisma.spatial_ref_sys.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends spatial_ref_sysDeleteManyArgs>(args?: SelectSubset<T, spatial_ref_sysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spatial_ref_sys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends spatial_ref_sysUpdateManyArgs>(args: SelectSubset<T, spatial_ref_sysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spatial_ref_sys and returns the data updated in the database.
     * @param {spatial_ref_sysUpdateManyAndReturnArgs} args - Arguments to update many Spatial_ref_sys.
     * @example
     * // Update many Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Spatial_ref_sys and only return the `srid`
     * const spatial_ref_sysWithSridOnly = await prisma.spatial_ref_sys.updateManyAndReturn({
     *   select: { srid: true },
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
    updateManyAndReturn<T extends spatial_ref_sysUpdateManyAndReturnArgs>(args: SelectSubset<T, spatial_ref_sysUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Spatial_ref_sys.
     * @param {spatial_ref_sysUpsertArgs} args - Arguments to update or create a Spatial_ref_sys.
     * @example
     * // Update or create a Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.upsert({
     *   create: {
     *     // ... data to create a Spatial_ref_sys
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Spatial_ref_sys we want to update
     *   }
     * })
     */
    upsert<T extends spatial_ref_sysUpsertArgs>(args: SelectSubset<T, spatial_ref_sysUpsertArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Spatial_ref_sys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysCountArgs} args - Arguments to filter Spatial_ref_sys to count.
     * @example
     * // Count the number of Spatial_ref_sys
     * const count = await prisma.spatial_ref_sys.count({
     *   where: {
     *     // ... the filter for the Spatial_ref_sys we want to count
     *   }
     * })
    **/
    count<T extends spatial_ref_sysCountArgs>(
      args?: Subset<T, spatial_ref_sysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Spatial_ref_sysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Spatial_ref_sys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Spatial_ref_sysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Spatial_ref_sysAggregateArgs>(args: Subset<T, Spatial_ref_sysAggregateArgs>): Prisma.PrismaPromise<GetSpatial_ref_sysAggregateType<T>>

    /**
     * Group by Spatial_ref_sys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysGroupByArgs} args - Group by arguments.
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
      T extends spatial_ref_sysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: spatial_ref_sysGroupByArgs['orderBy'] }
        : { orderBy?: spatial_ref_sysGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, spatial_ref_sysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpatial_ref_sysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the spatial_ref_sys model
   */
  readonly fields: spatial_ref_sysFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for spatial_ref_sys.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__spatial_ref_sysClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the spatial_ref_sys model
   */
  interface spatial_ref_sysFieldRefs {
    readonly srid: FieldRef<"spatial_ref_sys", 'Int'>
    readonly auth_name: FieldRef<"spatial_ref_sys", 'String'>
    readonly auth_srid: FieldRef<"spatial_ref_sys", 'Int'>
    readonly srtext: FieldRef<"spatial_ref_sys", 'String'>
    readonly proj4text: FieldRef<"spatial_ref_sys", 'String'>
  }
    

  // Custom InputTypes
  /**
   * spatial_ref_sys findUnique
   */
  export type spatial_ref_sysFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * Filter, which spatial_ref_sys to fetch.
     */
    where: spatial_ref_sysWhereUniqueInput
  }

  /**
   * spatial_ref_sys findUniqueOrThrow
   */
  export type spatial_ref_sysFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * Filter, which spatial_ref_sys to fetch.
     */
    where: spatial_ref_sysWhereUniqueInput
  }

  /**
   * spatial_ref_sys findFirst
   */
  export type spatial_ref_sysFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * Filter, which spatial_ref_sys to fetch.
     */
    where?: spatial_ref_sysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spatial_ref_sys to fetch.
     */
    orderBy?: spatial_ref_sysOrderByWithRelationInput | spatial_ref_sysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for spatial_ref_sys.
     */
    cursor?: spatial_ref_sysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spatial_ref_sys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spatial_ref_sys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of spatial_ref_sys.
     */
    distinct?: Spatial_ref_sysScalarFieldEnum | Spatial_ref_sysScalarFieldEnum[]
  }

  /**
   * spatial_ref_sys findFirstOrThrow
   */
  export type spatial_ref_sysFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * Filter, which spatial_ref_sys to fetch.
     */
    where?: spatial_ref_sysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spatial_ref_sys to fetch.
     */
    orderBy?: spatial_ref_sysOrderByWithRelationInput | spatial_ref_sysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for spatial_ref_sys.
     */
    cursor?: spatial_ref_sysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spatial_ref_sys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spatial_ref_sys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of spatial_ref_sys.
     */
    distinct?: Spatial_ref_sysScalarFieldEnum | Spatial_ref_sysScalarFieldEnum[]
  }

  /**
   * spatial_ref_sys findMany
   */
  export type spatial_ref_sysFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * Filter, which spatial_ref_sys to fetch.
     */
    where?: spatial_ref_sysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spatial_ref_sys to fetch.
     */
    orderBy?: spatial_ref_sysOrderByWithRelationInput | spatial_ref_sysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing spatial_ref_sys.
     */
    cursor?: spatial_ref_sysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spatial_ref_sys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spatial_ref_sys.
     */
    skip?: number
    distinct?: Spatial_ref_sysScalarFieldEnum | Spatial_ref_sysScalarFieldEnum[]
  }

  /**
   * spatial_ref_sys create
   */
  export type spatial_ref_sysCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * The data needed to create a spatial_ref_sys.
     */
    data: XOR<spatial_ref_sysCreateInput, spatial_ref_sysUncheckedCreateInput>
  }

  /**
   * spatial_ref_sys createMany
   */
  export type spatial_ref_sysCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many spatial_ref_sys.
     */
    data: spatial_ref_sysCreateManyInput | spatial_ref_sysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * spatial_ref_sys createManyAndReturn
   */
  export type spatial_ref_sysCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * The data used to create many spatial_ref_sys.
     */
    data: spatial_ref_sysCreateManyInput | spatial_ref_sysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * spatial_ref_sys update
   */
  export type spatial_ref_sysUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * The data needed to update a spatial_ref_sys.
     */
    data: XOR<spatial_ref_sysUpdateInput, spatial_ref_sysUncheckedUpdateInput>
    /**
     * Choose, which spatial_ref_sys to update.
     */
    where: spatial_ref_sysWhereUniqueInput
  }

  /**
   * spatial_ref_sys updateMany
   */
  export type spatial_ref_sysUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update spatial_ref_sys.
     */
    data: XOR<spatial_ref_sysUpdateManyMutationInput, spatial_ref_sysUncheckedUpdateManyInput>
    /**
     * Filter which spatial_ref_sys to update
     */
    where?: spatial_ref_sysWhereInput
    /**
     * Limit how many spatial_ref_sys to update.
     */
    limit?: number
  }

  /**
   * spatial_ref_sys updateManyAndReturn
   */
  export type spatial_ref_sysUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * The data used to update spatial_ref_sys.
     */
    data: XOR<spatial_ref_sysUpdateManyMutationInput, spatial_ref_sysUncheckedUpdateManyInput>
    /**
     * Filter which spatial_ref_sys to update
     */
    where?: spatial_ref_sysWhereInput
    /**
     * Limit how many spatial_ref_sys to update.
     */
    limit?: number
  }

  /**
   * spatial_ref_sys upsert
   */
  export type spatial_ref_sysUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * The filter to search for the spatial_ref_sys to update in case it exists.
     */
    where: spatial_ref_sysWhereUniqueInput
    /**
     * In case the spatial_ref_sys found by the `where` argument doesn't exist, create a new spatial_ref_sys with this data.
     */
    create: XOR<spatial_ref_sysCreateInput, spatial_ref_sysUncheckedCreateInput>
    /**
     * In case the spatial_ref_sys was found with the provided `where` argument, update it with this data.
     */
    update: XOR<spatial_ref_sysUpdateInput, spatial_ref_sysUncheckedUpdateInput>
  }

  /**
   * spatial_ref_sys delete
   */
  export type spatial_ref_sysDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * Filter which spatial_ref_sys to delete.
     */
    where: spatial_ref_sysWhereUniqueInput
  }

  /**
   * spatial_ref_sys deleteMany
   */
  export type spatial_ref_sysDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which spatial_ref_sys to delete
     */
    where?: spatial_ref_sysWhereInput
    /**
     * Limit how many spatial_ref_sys to delete.
     */
    limit?: number
  }

  /**
   * spatial_ref_sys without action
   */
  export type spatial_ref_sysDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
  }


  /**
   * Model Crisis
   */

  export type AggregateCrisis = {
    _count: CrisisCountAggregateOutputType | null
    _avg: CrisisAvgAggregateOutputType | null
    _sum: CrisisSumAggregateOutputType | null
    _min: CrisisMinAggregateOutputType | null
    _max: CrisisMaxAggregateOutputType | null
  }

  export type CrisisAvgAggregateOutputType = {
    CrisisId: number | null
  }

  export type CrisisSumAggregateOutputType = {
    CrisisId: number | null
  }

  export type CrisisMinAggregateOutputType = {
    CrisisId: number | null
    Crisisname: string | null
    CrisisDesc: string | null
    CrisisStart: Date | null
    CrisisEnd: Date | null
    CrisisCountry: string | null
    TypeC: string | null
  }

  export type CrisisMaxAggregateOutputType = {
    CrisisId: number | null
    Crisisname: string | null
    CrisisDesc: string | null
    CrisisStart: Date | null
    CrisisEnd: Date | null
    CrisisCountry: string | null
    TypeC: string | null
  }

  export type CrisisCountAggregateOutputType = {
    CrisisId: number
    Crisisname: number
    CrisisDesc: number
    CrisisStart: number
    CrisisEnd: number
    CrisisCountry: number
    TypeC: number
    _all: number
  }


  export type CrisisAvgAggregateInputType = {
    CrisisId?: true
  }

  export type CrisisSumAggregateInputType = {
    CrisisId?: true
  }

  export type CrisisMinAggregateInputType = {
    CrisisId?: true
    Crisisname?: true
    CrisisDesc?: true
    CrisisStart?: true
    CrisisEnd?: true
    CrisisCountry?: true
    TypeC?: true
  }

  export type CrisisMaxAggregateInputType = {
    CrisisId?: true
    Crisisname?: true
    CrisisDesc?: true
    CrisisStart?: true
    CrisisEnd?: true
    CrisisCountry?: true
    TypeC?: true
  }

  export type CrisisCountAggregateInputType = {
    CrisisId?: true
    Crisisname?: true
    CrisisDesc?: true
    CrisisStart?: true
    CrisisEnd?: true
    CrisisCountry?: true
    TypeC?: true
    _all?: true
  }

  export type CrisisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Crisis to aggregate.
     */
    where?: CrisisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crises to fetch.
     */
    orderBy?: CrisisOrderByWithRelationInput | CrisisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CrisisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Crises
    **/
    _count?: true | CrisisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CrisisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CrisisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CrisisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CrisisMaxAggregateInputType
  }

  export type GetCrisisAggregateType<T extends CrisisAggregateArgs> = {
        [P in keyof T & keyof AggregateCrisis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrisis[P]>
      : GetScalarType<T[P], AggregateCrisis[P]>
  }




  export type CrisisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrisisWhereInput
    orderBy?: CrisisOrderByWithAggregationInput | CrisisOrderByWithAggregationInput[]
    by: CrisisScalarFieldEnum[] | CrisisScalarFieldEnum
    having?: CrisisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CrisisCountAggregateInputType | true
    _avg?: CrisisAvgAggregateInputType
    _sum?: CrisisSumAggregateInputType
    _min?: CrisisMinAggregateInputType
    _max?: CrisisMaxAggregateInputType
  }

  export type CrisisGroupByOutputType = {
    CrisisId: number
    Crisisname: string
    CrisisDesc: string
    CrisisStart: Date | null
    CrisisEnd: Date | null
    CrisisCountry: string | null
    TypeC: string | null
    _count: CrisisCountAggregateOutputType | null
    _avg: CrisisAvgAggregateOutputType | null
    _sum: CrisisSumAggregateOutputType | null
    _min: CrisisMinAggregateOutputType | null
    _max: CrisisMaxAggregateOutputType | null
  }

  type GetCrisisGroupByPayload<T extends CrisisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CrisisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CrisisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CrisisGroupByOutputType[P]>
            : GetScalarType<T[P], CrisisGroupByOutputType[P]>
        }
      >
    >


  export type CrisisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CrisisId?: boolean
    Crisisname?: boolean
    CrisisDesc?: boolean
    CrisisStart?: boolean
    CrisisEnd?: boolean
    CrisisCountry?: boolean
    TypeC?: boolean
    Damage?: boolean | Crisis$DamageArgs<ExtArgs>
    _count?: boolean | CrisisCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crisis"]>

  export type CrisisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CrisisId?: boolean
    Crisisname?: boolean
    CrisisDesc?: boolean
    CrisisStart?: boolean
    CrisisEnd?: boolean
    CrisisCountry?: boolean
    TypeC?: boolean
  }, ExtArgs["result"]["crisis"]>

  export type CrisisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CrisisId?: boolean
    Crisisname?: boolean
    CrisisDesc?: boolean
    CrisisStart?: boolean
    CrisisEnd?: boolean
    CrisisCountry?: boolean
    TypeC?: boolean
  }, ExtArgs["result"]["crisis"]>

  export type CrisisSelectScalar = {
    CrisisId?: boolean
    Crisisname?: boolean
    CrisisDesc?: boolean
    CrisisStart?: boolean
    CrisisEnd?: boolean
    CrisisCountry?: boolean
    TypeC?: boolean
  }

  export type CrisisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"CrisisId" | "Crisisname" | "CrisisDesc" | "CrisisStart" | "CrisisEnd" | "CrisisCountry" | "TypeC", ExtArgs["result"]["crisis"]>
  export type CrisisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Damage?: boolean | Crisis$DamageArgs<ExtArgs>
    _count?: boolean | CrisisCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CrisisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CrisisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CrisisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Crisis"
    objects: {
      Damage: Prisma.$DamagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      CrisisId: number
      Crisisname: string
      CrisisDesc: string
      CrisisStart: Date | null
      CrisisEnd: Date | null
      CrisisCountry: string | null
      TypeC: string | null
    }, ExtArgs["result"]["crisis"]>
    composites: {}
  }

  type CrisisGetPayload<S extends boolean | null | undefined | CrisisDefaultArgs> = $Result.GetResult<Prisma.$CrisisPayload, S>

  type CrisisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CrisisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CrisisCountAggregateInputType | true
    }

  export interface CrisisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Crisis'], meta: { name: 'Crisis' } }
    /**
     * Find zero or one Crisis that matches the filter.
     * @param {CrisisFindUniqueArgs} args - Arguments to find a Crisis
     * @example
     * // Get one Crisis
     * const crisis = await prisma.crisis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CrisisFindUniqueArgs>(args: SelectSubset<T, CrisisFindUniqueArgs<ExtArgs>>): Prisma__CrisisClient<$Result.GetResult<Prisma.$CrisisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Crisis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CrisisFindUniqueOrThrowArgs} args - Arguments to find a Crisis
     * @example
     * // Get one Crisis
     * const crisis = await prisma.crisis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CrisisFindUniqueOrThrowArgs>(args: SelectSubset<T, CrisisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CrisisClient<$Result.GetResult<Prisma.$CrisisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Crisis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrisisFindFirstArgs} args - Arguments to find a Crisis
     * @example
     * // Get one Crisis
     * const crisis = await prisma.crisis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CrisisFindFirstArgs>(args?: SelectSubset<T, CrisisFindFirstArgs<ExtArgs>>): Prisma__CrisisClient<$Result.GetResult<Prisma.$CrisisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Crisis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrisisFindFirstOrThrowArgs} args - Arguments to find a Crisis
     * @example
     * // Get one Crisis
     * const crisis = await prisma.crisis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CrisisFindFirstOrThrowArgs>(args?: SelectSubset<T, CrisisFindFirstOrThrowArgs<ExtArgs>>): Prisma__CrisisClient<$Result.GetResult<Prisma.$CrisisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Crises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrisisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Crises
     * const crises = await prisma.crisis.findMany()
     * 
     * // Get first 10 Crises
     * const crises = await prisma.crisis.findMany({ take: 10 })
     * 
     * // Only select the `CrisisId`
     * const crisisWithCrisisIdOnly = await prisma.crisis.findMany({ select: { CrisisId: true } })
     * 
     */
    findMany<T extends CrisisFindManyArgs>(args?: SelectSubset<T, CrisisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrisisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Crisis.
     * @param {CrisisCreateArgs} args - Arguments to create a Crisis.
     * @example
     * // Create one Crisis
     * const Crisis = await prisma.crisis.create({
     *   data: {
     *     // ... data to create a Crisis
     *   }
     * })
     * 
     */
    create<T extends CrisisCreateArgs>(args: SelectSubset<T, CrisisCreateArgs<ExtArgs>>): Prisma__CrisisClient<$Result.GetResult<Prisma.$CrisisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Crises.
     * @param {CrisisCreateManyArgs} args - Arguments to create many Crises.
     * @example
     * // Create many Crises
     * const crisis = await prisma.crisis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CrisisCreateManyArgs>(args?: SelectSubset<T, CrisisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Crises and returns the data saved in the database.
     * @param {CrisisCreateManyAndReturnArgs} args - Arguments to create many Crises.
     * @example
     * // Create many Crises
     * const crisis = await prisma.crisis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Crises and only return the `CrisisId`
     * const crisisWithCrisisIdOnly = await prisma.crisis.createManyAndReturn({
     *   select: { CrisisId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CrisisCreateManyAndReturnArgs>(args?: SelectSubset<T, CrisisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrisisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Crisis.
     * @param {CrisisDeleteArgs} args - Arguments to delete one Crisis.
     * @example
     * // Delete one Crisis
     * const Crisis = await prisma.crisis.delete({
     *   where: {
     *     // ... filter to delete one Crisis
     *   }
     * })
     * 
     */
    delete<T extends CrisisDeleteArgs>(args: SelectSubset<T, CrisisDeleteArgs<ExtArgs>>): Prisma__CrisisClient<$Result.GetResult<Prisma.$CrisisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Crisis.
     * @param {CrisisUpdateArgs} args - Arguments to update one Crisis.
     * @example
     * // Update one Crisis
     * const crisis = await prisma.crisis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CrisisUpdateArgs>(args: SelectSubset<T, CrisisUpdateArgs<ExtArgs>>): Prisma__CrisisClient<$Result.GetResult<Prisma.$CrisisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Crises.
     * @param {CrisisDeleteManyArgs} args - Arguments to filter Crises to delete.
     * @example
     * // Delete a few Crises
     * const { count } = await prisma.crisis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CrisisDeleteManyArgs>(args?: SelectSubset<T, CrisisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Crises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrisisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Crises
     * const crisis = await prisma.crisis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CrisisUpdateManyArgs>(args: SelectSubset<T, CrisisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Crises and returns the data updated in the database.
     * @param {CrisisUpdateManyAndReturnArgs} args - Arguments to update many Crises.
     * @example
     * // Update many Crises
     * const crisis = await prisma.crisis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Crises and only return the `CrisisId`
     * const crisisWithCrisisIdOnly = await prisma.crisis.updateManyAndReturn({
     *   select: { CrisisId: true },
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
    updateManyAndReturn<T extends CrisisUpdateManyAndReturnArgs>(args: SelectSubset<T, CrisisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrisisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Crisis.
     * @param {CrisisUpsertArgs} args - Arguments to update or create a Crisis.
     * @example
     * // Update or create a Crisis
     * const crisis = await prisma.crisis.upsert({
     *   create: {
     *     // ... data to create a Crisis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Crisis we want to update
     *   }
     * })
     */
    upsert<T extends CrisisUpsertArgs>(args: SelectSubset<T, CrisisUpsertArgs<ExtArgs>>): Prisma__CrisisClient<$Result.GetResult<Prisma.$CrisisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Crises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrisisCountArgs} args - Arguments to filter Crises to count.
     * @example
     * // Count the number of Crises
     * const count = await prisma.crisis.count({
     *   where: {
     *     // ... the filter for the Crises we want to count
     *   }
     * })
    **/
    count<T extends CrisisCountArgs>(
      args?: Subset<T, CrisisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CrisisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Crisis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrisisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CrisisAggregateArgs>(args: Subset<T, CrisisAggregateArgs>): Prisma.PrismaPromise<GetCrisisAggregateType<T>>

    /**
     * Group by Crisis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrisisGroupByArgs} args - Group by arguments.
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
      T extends CrisisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CrisisGroupByArgs['orderBy'] }
        : { orderBy?: CrisisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CrisisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCrisisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Crisis model
   */
  readonly fields: CrisisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Crisis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CrisisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Damage<T extends Crisis$DamageArgs<ExtArgs> = {}>(args?: Subset<T, Crisis$DamageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DamagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Crisis model
   */
  interface CrisisFieldRefs {
    readonly CrisisId: FieldRef<"Crisis", 'Int'>
    readonly Crisisname: FieldRef<"Crisis", 'String'>
    readonly CrisisDesc: FieldRef<"Crisis", 'String'>
    readonly CrisisStart: FieldRef<"Crisis", 'DateTime'>
    readonly CrisisEnd: FieldRef<"Crisis", 'DateTime'>
    readonly CrisisCountry: FieldRef<"Crisis", 'String'>
    readonly TypeC: FieldRef<"Crisis", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Crisis findUnique
   */
  export type CrisisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crisis
     */
    select?: CrisisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crisis
     */
    omit?: CrisisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrisisInclude<ExtArgs> | null
    /**
     * Filter, which Crisis to fetch.
     */
    where: CrisisWhereUniqueInput
  }

  /**
   * Crisis findUniqueOrThrow
   */
  export type CrisisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crisis
     */
    select?: CrisisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crisis
     */
    omit?: CrisisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrisisInclude<ExtArgs> | null
    /**
     * Filter, which Crisis to fetch.
     */
    where: CrisisWhereUniqueInput
  }

  /**
   * Crisis findFirst
   */
  export type CrisisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crisis
     */
    select?: CrisisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crisis
     */
    omit?: CrisisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrisisInclude<ExtArgs> | null
    /**
     * Filter, which Crisis to fetch.
     */
    where?: CrisisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crises to fetch.
     */
    orderBy?: CrisisOrderByWithRelationInput | CrisisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Crises.
     */
    cursor?: CrisisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Crises.
     */
    distinct?: CrisisScalarFieldEnum | CrisisScalarFieldEnum[]
  }

  /**
   * Crisis findFirstOrThrow
   */
  export type CrisisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crisis
     */
    select?: CrisisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crisis
     */
    omit?: CrisisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrisisInclude<ExtArgs> | null
    /**
     * Filter, which Crisis to fetch.
     */
    where?: CrisisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crises to fetch.
     */
    orderBy?: CrisisOrderByWithRelationInput | CrisisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Crises.
     */
    cursor?: CrisisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Crises.
     */
    distinct?: CrisisScalarFieldEnum | CrisisScalarFieldEnum[]
  }

  /**
   * Crisis findMany
   */
  export type CrisisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crisis
     */
    select?: CrisisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crisis
     */
    omit?: CrisisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrisisInclude<ExtArgs> | null
    /**
     * Filter, which Crises to fetch.
     */
    where?: CrisisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crises to fetch.
     */
    orderBy?: CrisisOrderByWithRelationInput | CrisisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Crises.
     */
    cursor?: CrisisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crises.
     */
    skip?: number
    distinct?: CrisisScalarFieldEnum | CrisisScalarFieldEnum[]
  }

  /**
   * Crisis create
   */
  export type CrisisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crisis
     */
    select?: CrisisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crisis
     */
    omit?: CrisisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrisisInclude<ExtArgs> | null
    /**
     * The data needed to create a Crisis.
     */
    data: XOR<CrisisCreateInput, CrisisUncheckedCreateInput>
  }

  /**
   * Crisis createMany
   */
  export type CrisisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Crises.
     */
    data: CrisisCreateManyInput | CrisisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Crisis createManyAndReturn
   */
  export type CrisisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crisis
     */
    select?: CrisisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Crisis
     */
    omit?: CrisisOmit<ExtArgs> | null
    /**
     * The data used to create many Crises.
     */
    data: CrisisCreateManyInput | CrisisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Crisis update
   */
  export type CrisisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crisis
     */
    select?: CrisisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crisis
     */
    omit?: CrisisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrisisInclude<ExtArgs> | null
    /**
     * The data needed to update a Crisis.
     */
    data: XOR<CrisisUpdateInput, CrisisUncheckedUpdateInput>
    /**
     * Choose, which Crisis to update.
     */
    where: CrisisWhereUniqueInput
  }

  /**
   * Crisis updateMany
   */
  export type CrisisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Crises.
     */
    data: XOR<CrisisUpdateManyMutationInput, CrisisUncheckedUpdateManyInput>
    /**
     * Filter which Crises to update
     */
    where?: CrisisWhereInput
    /**
     * Limit how many Crises to update.
     */
    limit?: number
  }

  /**
   * Crisis updateManyAndReturn
   */
  export type CrisisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crisis
     */
    select?: CrisisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Crisis
     */
    omit?: CrisisOmit<ExtArgs> | null
    /**
     * The data used to update Crises.
     */
    data: XOR<CrisisUpdateManyMutationInput, CrisisUncheckedUpdateManyInput>
    /**
     * Filter which Crises to update
     */
    where?: CrisisWhereInput
    /**
     * Limit how many Crises to update.
     */
    limit?: number
  }

  /**
   * Crisis upsert
   */
  export type CrisisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crisis
     */
    select?: CrisisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crisis
     */
    omit?: CrisisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrisisInclude<ExtArgs> | null
    /**
     * The filter to search for the Crisis to update in case it exists.
     */
    where: CrisisWhereUniqueInput
    /**
     * In case the Crisis found by the `where` argument doesn't exist, create a new Crisis with this data.
     */
    create: XOR<CrisisCreateInput, CrisisUncheckedCreateInput>
    /**
     * In case the Crisis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CrisisUpdateInput, CrisisUncheckedUpdateInput>
  }

  /**
   * Crisis delete
   */
  export type CrisisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crisis
     */
    select?: CrisisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crisis
     */
    omit?: CrisisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrisisInclude<ExtArgs> | null
    /**
     * Filter which Crisis to delete.
     */
    where: CrisisWhereUniqueInput
  }

  /**
   * Crisis deleteMany
   */
  export type CrisisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Crises to delete
     */
    where?: CrisisWhereInput
    /**
     * Limit how many Crises to delete.
     */
    limit?: number
  }

  /**
   * Crisis.Damage
   */
  export type Crisis$DamageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Damage
     */
    select?: DamageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Damage
     */
    omit?: DamageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DamageInclude<ExtArgs> | null
    where?: DamageWhereInput
    orderBy?: DamageOrderByWithRelationInput | DamageOrderByWithRelationInput[]
    cursor?: DamageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DamageScalarFieldEnum | DamageScalarFieldEnum[]
  }

  /**
   * Crisis without action
   */
  export type CrisisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crisis
     */
    select?: CrisisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crisis
     */
    omit?: CrisisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrisisInclude<ExtArgs> | null
  }


  /**
   * Model Damage
   */

  export type AggregateDamage = {
    _count: DamageCountAggregateOutputType | null
    _avg: DamageAvgAggregateOutputType | null
    _sum: DamageSumAggregateOutputType | null
    _min: DamageMinAggregateOutputType | null
    _max: DamageMaxAggregateOutputType | null
  }

  export type DamageAvgAggregateOutputType = {
    DamageID: number | null
    FinancialEstimationD: Decimal | null
    CrisisID: number | null
    Radius: number | null
  }

  export type DamageSumAggregateOutputType = {
    DamageID: number | null
    FinancialEstimationD: Decimal | null
    CrisisID: number | null
    Radius: number | null
  }

  export type DamageMinAggregateOutputType = {
    DamageID: number | null
    CategoryD: string | null
    StartDateD: Date | null
    EndDateD: Date | null
    FinancialEstimationD: Decimal | null
    CrisisID: number | null
    Description: string | null
    Radius: number | null
    City: string | null
  }

  export type DamageMaxAggregateOutputType = {
    DamageID: number | null
    CategoryD: string | null
    StartDateD: Date | null
    EndDateD: Date | null
    FinancialEstimationD: Decimal | null
    CrisisID: number | null
    Description: string | null
    Radius: number | null
    City: string | null
  }

  export type DamageCountAggregateOutputType = {
    DamageID: number
    CategoryD: number
    StartDateD: number
    EndDateD: number
    FinancialEstimationD: number
    CrisisID: number
    Description: number
    Radius: number
    City: number
    _all: number
  }


  export type DamageAvgAggregateInputType = {
    DamageID?: true
    FinancialEstimationD?: true
    CrisisID?: true
    Radius?: true
  }

  export type DamageSumAggregateInputType = {
    DamageID?: true
    FinancialEstimationD?: true
    CrisisID?: true
    Radius?: true
  }

  export type DamageMinAggregateInputType = {
    DamageID?: true
    CategoryD?: true
    StartDateD?: true
    EndDateD?: true
    FinancialEstimationD?: true
    CrisisID?: true
    Description?: true
    Radius?: true
    City?: true
  }

  export type DamageMaxAggregateInputType = {
    DamageID?: true
    CategoryD?: true
    StartDateD?: true
    EndDateD?: true
    FinancialEstimationD?: true
    CrisisID?: true
    Description?: true
    Radius?: true
    City?: true
  }

  export type DamageCountAggregateInputType = {
    DamageID?: true
    CategoryD?: true
    StartDateD?: true
    EndDateD?: true
    FinancialEstimationD?: true
    CrisisID?: true
    Description?: true
    Radius?: true
    City?: true
    _all?: true
  }

  export type DamageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Damage to aggregate.
     */
    where?: DamageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Damages to fetch.
     */
    orderBy?: DamageOrderByWithRelationInput | DamageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DamageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Damages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Damages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Damages
    **/
    _count?: true | DamageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DamageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DamageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DamageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DamageMaxAggregateInputType
  }

  export type GetDamageAggregateType<T extends DamageAggregateArgs> = {
        [P in keyof T & keyof AggregateDamage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDamage[P]>
      : GetScalarType<T[P], AggregateDamage[P]>
  }




  export type DamageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DamageWhereInput
    orderBy?: DamageOrderByWithAggregationInput | DamageOrderByWithAggregationInput[]
    by: DamageScalarFieldEnum[] | DamageScalarFieldEnum
    having?: DamageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DamageCountAggregateInputType | true
    _avg?: DamageAvgAggregateInputType
    _sum?: DamageSumAggregateInputType
    _min?: DamageMinAggregateInputType
    _max?: DamageMaxAggregateInputType
  }

  export type DamageGroupByOutputType = {
    DamageID: number
    CategoryD: string
    StartDateD: Date | null
    EndDateD: Date | null
    FinancialEstimationD: Decimal | null
    CrisisID: number | null
    Description: string | null
    Radius: number | null
    City: string | null
    _count: DamageCountAggregateOutputType | null
    _avg: DamageAvgAggregateOutputType | null
    _sum: DamageSumAggregateOutputType | null
    _min: DamageMinAggregateOutputType | null
    _max: DamageMaxAggregateOutputType | null
  }

  type GetDamageGroupByPayload<T extends DamageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DamageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DamageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DamageGroupByOutputType[P]>
            : GetScalarType<T[P], DamageGroupByOutputType[P]>
        }
      >
    >


  export type DamageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DamageID?: boolean
    CategoryD?: boolean
    StartDateD?: boolean
    EndDateD?: boolean
    FinancialEstimationD?: boolean
    CrisisID?: boolean
    Description?: boolean
    Radius?: boolean
    City?: boolean
    Crisis?: boolean | Damage$CrisisArgs<ExtArgs>
    SERVICE?: boolean | Damage$SERVICEArgs<ExtArgs>
    TESTIMONY?: boolean | Damage$TESTIMONYArgs<ExtArgs>
    _count?: boolean | DamageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["damage"]>

  export type DamageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DamageID?: boolean
    CategoryD?: boolean
    StartDateD?: boolean
    EndDateD?: boolean
    FinancialEstimationD?: boolean
    CrisisID?: boolean
    Description?: boolean
    Radius?: boolean
    City?: boolean
    Crisis?: boolean | Damage$CrisisArgs<ExtArgs>
  }, ExtArgs["result"]["damage"]>

  export type DamageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DamageID?: boolean
    CategoryD?: boolean
    StartDateD?: boolean
    EndDateD?: boolean
    FinancialEstimationD?: boolean
    CrisisID?: boolean
    Description?: boolean
    Radius?: boolean
    City?: boolean
    Crisis?: boolean | Damage$CrisisArgs<ExtArgs>
  }, ExtArgs["result"]["damage"]>

  export type DamageSelectScalar = {
    DamageID?: boolean
    CategoryD?: boolean
    StartDateD?: boolean
    EndDateD?: boolean
    FinancialEstimationD?: boolean
    CrisisID?: boolean
    Description?: boolean
    Radius?: boolean
    City?: boolean
  }

  export type DamageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"DamageID" | "CategoryD" | "StartDateD" | "EndDateD" | "FinancialEstimationD" | "CrisisID" | "Description" | "Radius" | "City", ExtArgs["result"]["damage"]>
  export type DamageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Crisis?: boolean | Damage$CrisisArgs<ExtArgs>
    SERVICE?: boolean | Damage$SERVICEArgs<ExtArgs>
    TESTIMONY?: boolean | Damage$TESTIMONYArgs<ExtArgs>
    _count?: boolean | DamageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DamageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Crisis?: boolean | Damage$CrisisArgs<ExtArgs>
  }
  export type DamageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Crisis?: boolean | Damage$CrisisArgs<ExtArgs>
  }

  export type $DamagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Damage"
    objects: {
      Crisis: Prisma.$CrisisPayload<ExtArgs> | null
      SERVICE: Prisma.$SERVICEPayload<ExtArgs>[]
      TESTIMONY: Prisma.$TESTIMONYPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      DamageID: number
      CategoryD: string
      StartDateD: Date | null
      EndDateD: Date | null
      FinancialEstimationD: Prisma.Decimal | null
      CrisisID: number | null
      Description: string | null
      Radius: number | null
      City: string | null
    }, ExtArgs["result"]["damage"]>
    composites: {}
  }

  type DamageGetPayload<S extends boolean | null | undefined | DamageDefaultArgs> = $Result.GetResult<Prisma.$DamagePayload, S>

  type DamageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DamageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DamageCountAggregateInputType | true
    }

  export interface DamageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Damage'], meta: { name: 'Damage' } }
    /**
     * Find zero or one Damage that matches the filter.
     * @param {DamageFindUniqueArgs} args - Arguments to find a Damage
     * @example
     * // Get one Damage
     * const damage = await prisma.damage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DamageFindUniqueArgs>(args: SelectSubset<T, DamageFindUniqueArgs<ExtArgs>>): Prisma__DamageClient<$Result.GetResult<Prisma.$DamagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Damage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DamageFindUniqueOrThrowArgs} args - Arguments to find a Damage
     * @example
     * // Get one Damage
     * const damage = await prisma.damage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DamageFindUniqueOrThrowArgs>(args: SelectSubset<T, DamageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DamageClient<$Result.GetResult<Prisma.$DamagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Damage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DamageFindFirstArgs} args - Arguments to find a Damage
     * @example
     * // Get one Damage
     * const damage = await prisma.damage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DamageFindFirstArgs>(args?: SelectSubset<T, DamageFindFirstArgs<ExtArgs>>): Prisma__DamageClient<$Result.GetResult<Prisma.$DamagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Damage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DamageFindFirstOrThrowArgs} args - Arguments to find a Damage
     * @example
     * // Get one Damage
     * const damage = await prisma.damage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DamageFindFirstOrThrowArgs>(args?: SelectSubset<T, DamageFindFirstOrThrowArgs<ExtArgs>>): Prisma__DamageClient<$Result.GetResult<Prisma.$DamagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Damages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DamageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Damages
     * const damages = await prisma.damage.findMany()
     * 
     * // Get first 10 Damages
     * const damages = await prisma.damage.findMany({ take: 10 })
     * 
     * // Only select the `DamageID`
     * const damageWithDamageIDOnly = await prisma.damage.findMany({ select: { DamageID: true } })
     * 
     */
    findMany<T extends DamageFindManyArgs>(args?: SelectSubset<T, DamageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DamagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Damage.
     * @param {DamageCreateArgs} args - Arguments to create a Damage.
     * @example
     * // Create one Damage
     * const Damage = await prisma.damage.create({
     *   data: {
     *     // ... data to create a Damage
     *   }
     * })
     * 
     */
    create<T extends DamageCreateArgs>(args: SelectSubset<T, DamageCreateArgs<ExtArgs>>): Prisma__DamageClient<$Result.GetResult<Prisma.$DamagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Damages.
     * @param {DamageCreateManyArgs} args - Arguments to create many Damages.
     * @example
     * // Create many Damages
     * const damage = await prisma.damage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DamageCreateManyArgs>(args?: SelectSubset<T, DamageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Damages and returns the data saved in the database.
     * @param {DamageCreateManyAndReturnArgs} args - Arguments to create many Damages.
     * @example
     * // Create many Damages
     * const damage = await prisma.damage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Damages and only return the `DamageID`
     * const damageWithDamageIDOnly = await prisma.damage.createManyAndReturn({
     *   select: { DamageID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DamageCreateManyAndReturnArgs>(args?: SelectSubset<T, DamageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DamagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Damage.
     * @param {DamageDeleteArgs} args - Arguments to delete one Damage.
     * @example
     * // Delete one Damage
     * const Damage = await prisma.damage.delete({
     *   where: {
     *     // ... filter to delete one Damage
     *   }
     * })
     * 
     */
    delete<T extends DamageDeleteArgs>(args: SelectSubset<T, DamageDeleteArgs<ExtArgs>>): Prisma__DamageClient<$Result.GetResult<Prisma.$DamagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Damage.
     * @param {DamageUpdateArgs} args - Arguments to update one Damage.
     * @example
     * // Update one Damage
     * const damage = await prisma.damage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DamageUpdateArgs>(args: SelectSubset<T, DamageUpdateArgs<ExtArgs>>): Prisma__DamageClient<$Result.GetResult<Prisma.$DamagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Damages.
     * @param {DamageDeleteManyArgs} args - Arguments to filter Damages to delete.
     * @example
     * // Delete a few Damages
     * const { count } = await prisma.damage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DamageDeleteManyArgs>(args?: SelectSubset<T, DamageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Damages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DamageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Damages
     * const damage = await prisma.damage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DamageUpdateManyArgs>(args: SelectSubset<T, DamageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Damages and returns the data updated in the database.
     * @param {DamageUpdateManyAndReturnArgs} args - Arguments to update many Damages.
     * @example
     * // Update many Damages
     * const damage = await prisma.damage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Damages and only return the `DamageID`
     * const damageWithDamageIDOnly = await prisma.damage.updateManyAndReturn({
     *   select: { DamageID: true },
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
    updateManyAndReturn<T extends DamageUpdateManyAndReturnArgs>(args: SelectSubset<T, DamageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DamagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Damage.
     * @param {DamageUpsertArgs} args - Arguments to update or create a Damage.
     * @example
     * // Update or create a Damage
     * const damage = await prisma.damage.upsert({
     *   create: {
     *     // ... data to create a Damage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Damage we want to update
     *   }
     * })
     */
    upsert<T extends DamageUpsertArgs>(args: SelectSubset<T, DamageUpsertArgs<ExtArgs>>): Prisma__DamageClient<$Result.GetResult<Prisma.$DamagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Damages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DamageCountArgs} args - Arguments to filter Damages to count.
     * @example
     * // Count the number of Damages
     * const count = await prisma.damage.count({
     *   where: {
     *     // ... the filter for the Damages we want to count
     *   }
     * })
    **/
    count<T extends DamageCountArgs>(
      args?: Subset<T, DamageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DamageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Damage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DamageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DamageAggregateArgs>(args: Subset<T, DamageAggregateArgs>): Prisma.PrismaPromise<GetDamageAggregateType<T>>

    /**
     * Group by Damage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DamageGroupByArgs} args - Group by arguments.
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
      T extends DamageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DamageGroupByArgs['orderBy'] }
        : { orderBy?: DamageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DamageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDamageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Damage model
   */
  readonly fields: DamageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Damage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DamageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Crisis<T extends Damage$CrisisArgs<ExtArgs> = {}>(args?: Subset<T, Damage$CrisisArgs<ExtArgs>>): Prisma__CrisisClient<$Result.GetResult<Prisma.$CrisisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    SERVICE<T extends Damage$SERVICEArgs<ExtArgs> = {}>(args?: Subset<T, Damage$SERVICEArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TESTIMONY<T extends Damage$TESTIMONYArgs<ExtArgs> = {}>(args?: Subset<T, Damage$TESTIMONYArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TESTIMONYPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Damage model
   */
  interface DamageFieldRefs {
    readonly DamageID: FieldRef<"Damage", 'Int'>
    readonly CategoryD: FieldRef<"Damage", 'String'>
    readonly StartDateD: FieldRef<"Damage", 'DateTime'>
    readonly EndDateD: FieldRef<"Damage", 'DateTime'>
    readonly FinancialEstimationD: FieldRef<"Damage", 'Decimal'>
    readonly CrisisID: FieldRef<"Damage", 'Int'>
    readonly Description: FieldRef<"Damage", 'String'>
    readonly Radius: FieldRef<"Damage", 'Float'>
    readonly City: FieldRef<"Damage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Damage findUnique
   */
  export type DamageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Damage
     */
    select?: DamageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Damage
     */
    omit?: DamageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DamageInclude<ExtArgs> | null
    /**
     * Filter, which Damage to fetch.
     */
    where: DamageWhereUniqueInput
  }

  /**
   * Damage findUniqueOrThrow
   */
  export type DamageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Damage
     */
    select?: DamageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Damage
     */
    omit?: DamageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DamageInclude<ExtArgs> | null
    /**
     * Filter, which Damage to fetch.
     */
    where: DamageWhereUniqueInput
  }

  /**
   * Damage findFirst
   */
  export type DamageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Damage
     */
    select?: DamageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Damage
     */
    omit?: DamageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DamageInclude<ExtArgs> | null
    /**
     * Filter, which Damage to fetch.
     */
    where?: DamageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Damages to fetch.
     */
    orderBy?: DamageOrderByWithRelationInput | DamageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Damages.
     */
    cursor?: DamageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Damages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Damages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Damages.
     */
    distinct?: DamageScalarFieldEnum | DamageScalarFieldEnum[]
  }

  /**
   * Damage findFirstOrThrow
   */
  export type DamageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Damage
     */
    select?: DamageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Damage
     */
    omit?: DamageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DamageInclude<ExtArgs> | null
    /**
     * Filter, which Damage to fetch.
     */
    where?: DamageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Damages to fetch.
     */
    orderBy?: DamageOrderByWithRelationInput | DamageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Damages.
     */
    cursor?: DamageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Damages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Damages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Damages.
     */
    distinct?: DamageScalarFieldEnum | DamageScalarFieldEnum[]
  }

  /**
   * Damage findMany
   */
  export type DamageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Damage
     */
    select?: DamageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Damage
     */
    omit?: DamageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DamageInclude<ExtArgs> | null
    /**
     * Filter, which Damages to fetch.
     */
    where?: DamageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Damages to fetch.
     */
    orderBy?: DamageOrderByWithRelationInput | DamageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Damages.
     */
    cursor?: DamageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Damages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Damages.
     */
    skip?: number
    distinct?: DamageScalarFieldEnum | DamageScalarFieldEnum[]
  }

  /**
   * Damage create
   */
  export type DamageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Damage
     */
    select?: DamageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Damage
     */
    omit?: DamageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DamageInclude<ExtArgs> | null
    /**
     * The data needed to create a Damage.
     */
    data: XOR<DamageCreateInput, DamageUncheckedCreateInput>
  }

  /**
   * Damage createMany
   */
  export type DamageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Damages.
     */
    data: DamageCreateManyInput | DamageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Damage createManyAndReturn
   */
  export type DamageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Damage
     */
    select?: DamageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Damage
     */
    omit?: DamageOmit<ExtArgs> | null
    /**
     * The data used to create many Damages.
     */
    data: DamageCreateManyInput | DamageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DamageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Damage update
   */
  export type DamageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Damage
     */
    select?: DamageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Damage
     */
    omit?: DamageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DamageInclude<ExtArgs> | null
    /**
     * The data needed to update a Damage.
     */
    data: XOR<DamageUpdateInput, DamageUncheckedUpdateInput>
    /**
     * Choose, which Damage to update.
     */
    where: DamageWhereUniqueInput
  }

  /**
   * Damage updateMany
   */
  export type DamageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Damages.
     */
    data: XOR<DamageUpdateManyMutationInput, DamageUncheckedUpdateManyInput>
    /**
     * Filter which Damages to update
     */
    where?: DamageWhereInput
    /**
     * Limit how many Damages to update.
     */
    limit?: number
  }

  /**
   * Damage updateManyAndReturn
   */
  export type DamageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Damage
     */
    select?: DamageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Damage
     */
    omit?: DamageOmit<ExtArgs> | null
    /**
     * The data used to update Damages.
     */
    data: XOR<DamageUpdateManyMutationInput, DamageUncheckedUpdateManyInput>
    /**
     * Filter which Damages to update
     */
    where?: DamageWhereInput
    /**
     * Limit how many Damages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DamageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Damage upsert
   */
  export type DamageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Damage
     */
    select?: DamageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Damage
     */
    omit?: DamageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DamageInclude<ExtArgs> | null
    /**
     * The filter to search for the Damage to update in case it exists.
     */
    where: DamageWhereUniqueInput
    /**
     * In case the Damage found by the `where` argument doesn't exist, create a new Damage with this data.
     */
    create: XOR<DamageCreateInput, DamageUncheckedCreateInput>
    /**
     * In case the Damage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DamageUpdateInput, DamageUncheckedUpdateInput>
  }

  /**
   * Damage delete
   */
  export type DamageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Damage
     */
    select?: DamageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Damage
     */
    omit?: DamageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DamageInclude<ExtArgs> | null
    /**
     * Filter which Damage to delete.
     */
    where: DamageWhereUniqueInput
  }

  /**
   * Damage deleteMany
   */
  export type DamageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Damages to delete
     */
    where?: DamageWhereInput
    /**
     * Limit how many Damages to delete.
     */
    limit?: number
  }

  /**
   * Damage.Crisis
   */
  export type Damage$CrisisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crisis
     */
    select?: CrisisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crisis
     */
    omit?: CrisisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrisisInclude<ExtArgs> | null
    where?: CrisisWhereInput
  }

  /**
   * Damage.SERVICE
   */
  export type Damage$SERVICEArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SERVICEInclude<ExtArgs> | null
    where?: SERVICEWhereInput
    orderBy?: SERVICEOrderByWithRelationInput | SERVICEOrderByWithRelationInput[]
    cursor?: SERVICEWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SERVICEScalarFieldEnum | SERVICEScalarFieldEnum[]
  }

  /**
   * Damage.TESTIMONY
   */
  export type Damage$TESTIMONYArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TESTIMONY
     */
    select?: TESTIMONYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TESTIMONY
     */
    omit?: TESTIMONYOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TESTIMONYInclude<ExtArgs> | null
    where?: TESTIMONYWhereInput
    orderBy?: TESTIMONYOrderByWithRelationInput | TESTIMONYOrderByWithRelationInput[]
    cursor?: TESTIMONYWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TESTIMONYScalarFieldEnum | TESTIMONYScalarFieldEnum[]
  }

  /**
   * Damage without action
   */
  export type DamageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Damage
     */
    select?: DamageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Damage
     */
    omit?: DamageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DamageInclude<ExtArgs> | null
  }


  /**
   * Model TESTIMONY
   */

  export type AggregateTESTIMONY = {
    _count: TESTIMONYCountAggregateOutputType | null
    _avg: TESTIMONYAvgAggregateOutputType | null
    _sum: TESTIMONYSumAggregateOutputType | null
    _min: TESTIMONYMinAggregateOutputType | null
    _max: TESTIMONYMaxAggregateOutputType | null
  }

  export type TESTIMONYAvgAggregateOutputType = {
    testimonyId: number | null
    damageId: number | null
    volunteerId: number | null
  }

  export type TESTIMONYSumAggregateOutputType = {
    testimonyId: number | null
    damageId: number | null
    volunteerId: number | null
  }

  export type TESTIMONYMinAggregateOutputType = {
    testimonyId: number | null
    contentT: string | null
    dateT: Date | null
    mediaURL: string | null
    damageId: number | null
    volunteerId: number | null
  }

  export type TESTIMONYMaxAggregateOutputType = {
    testimonyId: number | null
    contentT: string | null
    dateT: Date | null
    mediaURL: string | null
    damageId: number | null
    volunteerId: number | null
  }

  export type TESTIMONYCountAggregateOutputType = {
    testimonyId: number
    contentT: number
    dateT: number
    mediaURL: number
    damageId: number
    volunteerId: number
    _all: number
  }


  export type TESTIMONYAvgAggregateInputType = {
    testimonyId?: true
    damageId?: true
    volunteerId?: true
  }

  export type TESTIMONYSumAggregateInputType = {
    testimonyId?: true
    damageId?: true
    volunteerId?: true
  }

  export type TESTIMONYMinAggregateInputType = {
    testimonyId?: true
    contentT?: true
    dateT?: true
    mediaURL?: true
    damageId?: true
    volunteerId?: true
  }

  export type TESTIMONYMaxAggregateInputType = {
    testimonyId?: true
    contentT?: true
    dateT?: true
    mediaURL?: true
    damageId?: true
    volunteerId?: true
  }

  export type TESTIMONYCountAggregateInputType = {
    testimonyId?: true
    contentT?: true
    dateT?: true
    mediaURL?: true
    damageId?: true
    volunteerId?: true
    _all?: true
  }

  export type TESTIMONYAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TESTIMONY to aggregate.
     */
    where?: TESTIMONYWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TESTIMONIES to fetch.
     */
    orderBy?: TESTIMONYOrderByWithRelationInput | TESTIMONYOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TESTIMONYWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TESTIMONIES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TESTIMONIES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TESTIMONIES
    **/
    _count?: true | TESTIMONYCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TESTIMONYAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TESTIMONYSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TESTIMONYMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TESTIMONYMaxAggregateInputType
  }

  export type GetTESTIMONYAggregateType<T extends TESTIMONYAggregateArgs> = {
        [P in keyof T & keyof AggregateTESTIMONY]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTESTIMONY[P]>
      : GetScalarType<T[P], AggregateTESTIMONY[P]>
  }




  export type TESTIMONYGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TESTIMONYWhereInput
    orderBy?: TESTIMONYOrderByWithAggregationInput | TESTIMONYOrderByWithAggregationInput[]
    by: TESTIMONYScalarFieldEnum[] | TESTIMONYScalarFieldEnum
    having?: TESTIMONYScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TESTIMONYCountAggregateInputType | true
    _avg?: TESTIMONYAvgAggregateInputType
    _sum?: TESTIMONYSumAggregateInputType
    _min?: TESTIMONYMinAggregateInputType
    _max?: TESTIMONYMaxAggregateInputType
  }

  export type TESTIMONYGroupByOutputType = {
    testimonyId: number
    contentT: string
    dateT: Date | null
    mediaURL: string | null
    damageId: number
    volunteerId: number
    _count: TESTIMONYCountAggregateOutputType | null
    _avg: TESTIMONYAvgAggregateOutputType | null
    _sum: TESTIMONYSumAggregateOutputType | null
    _min: TESTIMONYMinAggregateOutputType | null
    _max: TESTIMONYMaxAggregateOutputType | null
  }

  type GetTESTIMONYGroupByPayload<T extends TESTIMONYGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TESTIMONYGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TESTIMONYGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TESTIMONYGroupByOutputType[P]>
            : GetScalarType<T[P], TESTIMONYGroupByOutputType[P]>
        }
      >
    >


  export type TESTIMONYSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    testimonyId?: boolean
    contentT?: boolean
    dateT?: boolean
    mediaURL?: boolean
    damageId?: boolean
    volunteerId?: boolean
    Damage?: boolean | DamageDefaultArgs<ExtArgs>
    Volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tESTIMONY"]>

  export type TESTIMONYSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    testimonyId?: boolean
    contentT?: boolean
    dateT?: boolean
    mediaURL?: boolean
    damageId?: boolean
    volunteerId?: boolean
    Damage?: boolean | DamageDefaultArgs<ExtArgs>
    Volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tESTIMONY"]>

  export type TESTIMONYSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    testimonyId?: boolean
    contentT?: boolean
    dateT?: boolean
    mediaURL?: boolean
    damageId?: boolean
    volunteerId?: boolean
    Damage?: boolean | DamageDefaultArgs<ExtArgs>
    Volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tESTIMONY"]>

  export type TESTIMONYSelectScalar = {
    testimonyId?: boolean
    contentT?: boolean
    dateT?: boolean
    mediaURL?: boolean
    damageId?: boolean
    volunteerId?: boolean
  }

  export type TESTIMONYOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"testimonyId" | "contentT" | "dateT" | "mediaURL" | "damageId" | "volunteerId", ExtArgs["result"]["tESTIMONY"]>
  export type TESTIMONYInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Damage?: boolean | DamageDefaultArgs<ExtArgs>
    Volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }
  export type TESTIMONYIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Damage?: boolean | DamageDefaultArgs<ExtArgs>
    Volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }
  export type TESTIMONYIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Damage?: boolean | DamageDefaultArgs<ExtArgs>
    Volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }

  export type $TESTIMONYPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TESTIMONY"
    objects: {
      Damage: Prisma.$DamagePayload<ExtArgs>
      Volunteer: Prisma.$VolunteerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      testimonyId: number
      contentT: string
      dateT: Date | null
      mediaURL: string | null
      damageId: number
      volunteerId: number
    }, ExtArgs["result"]["tESTIMONY"]>
    composites: {}
  }

  type TESTIMONYGetPayload<S extends boolean | null | undefined | TESTIMONYDefaultArgs> = $Result.GetResult<Prisma.$TESTIMONYPayload, S>

  type TESTIMONYCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TESTIMONYFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TESTIMONYCountAggregateInputType | true
    }

  export interface TESTIMONYDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TESTIMONY'], meta: { name: 'TESTIMONY' } }
    /**
     * Find zero or one TESTIMONY that matches the filter.
     * @param {TESTIMONYFindUniqueArgs} args - Arguments to find a TESTIMONY
     * @example
     * // Get one TESTIMONY
     * const tESTIMONY = await prisma.tESTIMONY.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TESTIMONYFindUniqueArgs>(args: SelectSubset<T, TESTIMONYFindUniqueArgs<ExtArgs>>): Prisma__TESTIMONYClient<$Result.GetResult<Prisma.$TESTIMONYPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TESTIMONY that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TESTIMONYFindUniqueOrThrowArgs} args - Arguments to find a TESTIMONY
     * @example
     * // Get one TESTIMONY
     * const tESTIMONY = await prisma.tESTIMONY.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TESTIMONYFindUniqueOrThrowArgs>(args: SelectSubset<T, TESTIMONYFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TESTIMONYClient<$Result.GetResult<Prisma.$TESTIMONYPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TESTIMONY that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TESTIMONYFindFirstArgs} args - Arguments to find a TESTIMONY
     * @example
     * // Get one TESTIMONY
     * const tESTIMONY = await prisma.tESTIMONY.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TESTIMONYFindFirstArgs>(args?: SelectSubset<T, TESTIMONYFindFirstArgs<ExtArgs>>): Prisma__TESTIMONYClient<$Result.GetResult<Prisma.$TESTIMONYPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TESTIMONY that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TESTIMONYFindFirstOrThrowArgs} args - Arguments to find a TESTIMONY
     * @example
     * // Get one TESTIMONY
     * const tESTIMONY = await prisma.tESTIMONY.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TESTIMONYFindFirstOrThrowArgs>(args?: SelectSubset<T, TESTIMONYFindFirstOrThrowArgs<ExtArgs>>): Prisma__TESTIMONYClient<$Result.GetResult<Prisma.$TESTIMONYPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TESTIMONIES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TESTIMONYFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TESTIMONIES
     * const tESTIMONIES = await prisma.tESTIMONY.findMany()
     * 
     * // Get first 10 TESTIMONIES
     * const tESTIMONIES = await prisma.tESTIMONY.findMany({ take: 10 })
     * 
     * // Only select the `testimonyId`
     * const tESTIMONYWithTestimonyIdOnly = await prisma.tESTIMONY.findMany({ select: { testimonyId: true } })
     * 
     */
    findMany<T extends TESTIMONYFindManyArgs>(args?: SelectSubset<T, TESTIMONYFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TESTIMONYPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TESTIMONY.
     * @param {TESTIMONYCreateArgs} args - Arguments to create a TESTIMONY.
     * @example
     * // Create one TESTIMONY
     * const TESTIMONY = await prisma.tESTIMONY.create({
     *   data: {
     *     // ... data to create a TESTIMONY
     *   }
     * })
     * 
     */
    create<T extends TESTIMONYCreateArgs>(args: SelectSubset<T, TESTIMONYCreateArgs<ExtArgs>>): Prisma__TESTIMONYClient<$Result.GetResult<Prisma.$TESTIMONYPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TESTIMONIES.
     * @param {TESTIMONYCreateManyArgs} args - Arguments to create many TESTIMONIES.
     * @example
     * // Create many TESTIMONIES
     * const tESTIMONY = await prisma.tESTIMONY.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TESTIMONYCreateManyArgs>(args?: SelectSubset<T, TESTIMONYCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TESTIMONIES and returns the data saved in the database.
     * @param {TESTIMONYCreateManyAndReturnArgs} args - Arguments to create many TESTIMONIES.
     * @example
     * // Create many TESTIMONIES
     * const tESTIMONY = await prisma.tESTIMONY.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TESTIMONIES and only return the `testimonyId`
     * const tESTIMONYWithTestimonyIdOnly = await prisma.tESTIMONY.createManyAndReturn({
     *   select: { testimonyId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TESTIMONYCreateManyAndReturnArgs>(args?: SelectSubset<T, TESTIMONYCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TESTIMONYPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TESTIMONY.
     * @param {TESTIMONYDeleteArgs} args - Arguments to delete one TESTIMONY.
     * @example
     * // Delete one TESTIMONY
     * const TESTIMONY = await prisma.tESTIMONY.delete({
     *   where: {
     *     // ... filter to delete one TESTIMONY
     *   }
     * })
     * 
     */
    delete<T extends TESTIMONYDeleteArgs>(args: SelectSubset<T, TESTIMONYDeleteArgs<ExtArgs>>): Prisma__TESTIMONYClient<$Result.GetResult<Prisma.$TESTIMONYPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TESTIMONY.
     * @param {TESTIMONYUpdateArgs} args - Arguments to update one TESTIMONY.
     * @example
     * // Update one TESTIMONY
     * const tESTIMONY = await prisma.tESTIMONY.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TESTIMONYUpdateArgs>(args: SelectSubset<T, TESTIMONYUpdateArgs<ExtArgs>>): Prisma__TESTIMONYClient<$Result.GetResult<Prisma.$TESTIMONYPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TESTIMONIES.
     * @param {TESTIMONYDeleteManyArgs} args - Arguments to filter TESTIMONIES to delete.
     * @example
     * // Delete a few TESTIMONIES
     * const { count } = await prisma.tESTIMONY.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TESTIMONYDeleteManyArgs>(args?: SelectSubset<T, TESTIMONYDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TESTIMONIES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TESTIMONYUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TESTIMONIES
     * const tESTIMONY = await prisma.tESTIMONY.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TESTIMONYUpdateManyArgs>(args: SelectSubset<T, TESTIMONYUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TESTIMONIES and returns the data updated in the database.
     * @param {TESTIMONYUpdateManyAndReturnArgs} args - Arguments to update many TESTIMONIES.
     * @example
     * // Update many TESTIMONIES
     * const tESTIMONY = await prisma.tESTIMONY.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TESTIMONIES and only return the `testimonyId`
     * const tESTIMONYWithTestimonyIdOnly = await prisma.tESTIMONY.updateManyAndReturn({
     *   select: { testimonyId: true },
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
    updateManyAndReturn<T extends TESTIMONYUpdateManyAndReturnArgs>(args: SelectSubset<T, TESTIMONYUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TESTIMONYPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TESTIMONY.
     * @param {TESTIMONYUpsertArgs} args - Arguments to update or create a TESTIMONY.
     * @example
     * // Update or create a TESTIMONY
     * const tESTIMONY = await prisma.tESTIMONY.upsert({
     *   create: {
     *     // ... data to create a TESTIMONY
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TESTIMONY we want to update
     *   }
     * })
     */
    upsert<T extends TESTIMONYUpsertArgs>(args: SelectSubset<T, TESTIMONYUpsertArgs<ExtArgs>>): Prisma__TESTIMONYClient<$Result.GetResult<Prisma.$TESTIMONYPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TESTIMONIES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TESTIMONYCountArgs} args - Arguments to filter TESTIMONIES to count.
     * @example
     * // Count the number of TESTIMONIES
     * const count = await prisma.tESTIMONY.count({
     *   where: {
     *     // ... the filter for the TESTIMONIES we want to count
     *   }
     * })
    **/
    count<T extends TESTIMONYCountArgs>(
      args?: Subset<T, TESTIMONYCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TESTIMONYCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TESTIMONY.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TESTIMONYAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TESTIMONYAggregateArgs>(args: Subset<T, TESTIMONYAggregateArgs>): Prisma.PrismaPromise<GetTESTIMONYAggregateType<T>>

    /**
     * Group by TESTIMONY.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TESTIMONYGroupByArgs} args - Group by arguments.
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
      T extends TESTIMONYGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TESTIMONYGroupByArgs['orderBy'] }
        : { orderBy?: TESTIMONYGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TESTIMONYGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTESTIMONYGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TESTIMONY model
   */
  readonly fields: TESTIMONYFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TESTIMONY.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TESTIMONYClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Damage<T extends DamageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DamageDefaultArgs<ExtArgs>>): Prisma__DamageClient<$Result.GetResult<Prisma.$DamagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Volunteer<T extends VolunteerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VolunteerDefaultArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TESTIMONY model
   */
  interface TESTIMONYFieldRefs {
    readonly testimonyId: FieldRef<"TESTIMONY", 'Int'>
    readonly contentT: FieldRef<"TESTIMONY", 'String'>
    readonly dateT: FieldRef<"TESTIMONY", 'DateTime'>
    readonly mediaURL: FieldRef<"TESTIMONY", 'String'>
    readonly damageId: FieldRef<"TESTIMONY", 'Int'>
    readonly volunteerId: FieldRef<"TESTIMONY", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TESTIMONY findUnique
   */
  export type TESTIMONYFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TESTIMONY
     */
    select?: TESTIMONYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TESTIMONY
     */
    omit?: TESTIMONYOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TESTIMONYInclude<ExtArgs> | null
    /**
     * Filter, which TESTIMONY to fetch.
     */
    where: TESTIMONYWhereUniqueInput
  }

  /**
   * TESTIMONY findUniqueOrThrow
   */
  export type TESTIMONYFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TESTIMONY
     */
    select?: TESTIMONYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TESTIMONY
     */
    omit?: TESTIMONYOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TESTIMONYInclude<ExtArgs> | null
    /**
     * Filter, which TESTIMONY to fetch.
     */
    where: TESTIMONYWhereUniqueInput
  }

  /**
   * TESTIMONY findFirst
   */
  export type TESTIMONYFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TESTIMONY
     */
    select?: TESTIMONYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TESTIMONY
     */
    omit?: TESTIMONYOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TESTIMONYInclude<ExtArgs> | null
    /**
     * Filter, which TESTIMONY to fetch.
     */
    where?: TESTIMONYWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TESTIMONIES to fetch.
     */
    orderBy?: TESTIMONYOrderByWithRelationInput | TESTIMONYOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TESTIMONIES.
     */
    cursor?: TESTIMONYWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TESTIMONIES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TESTIMONIES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TESTIMONIES.
     */
    distinct?: TESTIMONYScalarFieldEnum | TESTIMONYScalarFieldEnum[]
  }

  /**
   * TESTIMONY findFirstOrThrow
   */
  export type TESTIMONYFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TESTIMONY
     */
    select?: TESTIMONYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TESTIMONY
     */
    omit?: TESTIMONYOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TESTIMONYInclude<ExtArgs> | null
    /**
     * Filter, which TESTIMONY to fetch.
     */
    where?: TESTIMONYWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TESTIMONIES to fetch.
     */
    orderBy?: TESTIMONYOrderByWithRelationInput | TESTIMONYOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TESTIMONIES.
     */
    cursor?: TESTIMONYWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TESTIMONIES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TESTIMONIES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TESTIMONIES.
     */
    distinct?: TESTIMONYScalarFieldEnum | TESTIMONYScalarFieldEnum[]
  }

  /**
   * TESTIMONY findMany
   */
  export type TESTIMONYFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TESTIMONY
     */
    select?: TESTIMONYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TESTIMONY
     */
    omit?: TESTIMONYOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TESTIMONYInclude<ExtArgs> | null
    /**
     * Filter, which TESTIMONIES to fetch.
     */
    where?: TESTIMONYWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TESTIMONIES to fetch.
     */
    orderBy?: TESTIMONYOrderByWithRelationInput | TESTIMONYOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TESTIMONIES.
     */
    cursor?: TESTIMONYWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TESTIMONIES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TESTIMONIES.
     */
    skip?: number
    distinct?: TESTIMONYScalarFieldEnum | TESTIMONYScalarFieldEnum[]
  }

  /**
   * TESTIMONY create
   */
  export type TESTIMONYCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TESTIMONY
     */
    select?: TESTIMONYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TESTIMONY
     */
    omit?: TESTIMONYOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TESTIMONYInclude<ExtArgs> | null
    /**
     * The data needed to create a TESTIMONY.
     */
    data: XOR<TESTIMONYCreateInput, TESTIMONYUncheckedCreateInput>
  }

  /**
   * TESTIMONY createMany
   */
  export type TESTIMONYCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TESTIMONIES.
     */
    data: TESTIMONYCreateManyInput | TESTIMONYCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TESTIMONY createManyAndReturn
   */
  export type TESTIMONYCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TESTIMONY
     */
    select?: TESTIMONYSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TESTIMONY
     */
    omit?: TESTIMONYOmit<ExtArgs> | null
    /**
     * The data used to create many TESTIMONIES.
     */
    data: TESTIMONYCreateManyInput | TESTIMONYCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TESTIMONYIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TESTIMONY update
   */
  export type TESTIMONYUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TESTIMONY
     */
    select?: TESTIMONYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TESTIMONY
     */
    omit?: TESTIMONYOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TESTIMONYInclude<ExtArgs> | null
    /**
     * The data needed to update a TESTIMONY.
     */
    data: XOR<TESTIMONYUpdateInput, TESTIMONYUncheckedUpdateInput>
    /**
     * Choose, which TESTIMONY to update.
     */
    where: TESTIMONYWhereUniqueInput
  }

  /**
   * TESTIMONY updateMany
   */
  export type TESTIMONYUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TESTIMONIES.
     */
    data: XOR<TESTIMONYUpdateManyMutationInput, TESTIMONYUncheckedUpdateManyInput>
    /**
     * Filter which TESTIMONIES to update
     */
    where?: TESTIMONYWhereInput
    /**
     * Limit how many TESTIMONIES to update.
     */
    limit?: number
  }

  /**
   * TESTIMONY updateManyAndReturn
   */
  export type TESTIMONYUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TESTIMONY
     */
    select?: TESTIMONYSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TESTIMONY
     */
    omit?: TESTIMONYOmit<ExtArgs> | null
    /**
     * The data used to update TESTIMONIES.
     */
    data: XOR<TESTIMONYUpdateManyMutationInput, TESTIMONYUncheckedUpdateManyInput>
    /**
     * Filter which TESTIMONIES to update
     */
    where?: TESTIMONYWhereInput
    /**
     * Limit how many TESTIMONIES to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TESTIMONYIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TESTIMONY upsert
   */
  export type TESTIMONYUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TESTIMONY
     */
    select?: TESTIMONYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TESTIMONY
     */
    omit?: TESTIMONYOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TESTIMONYInclude<ExtArgs> | null
    /**
     * The filter to search for the TESTIMONY to update in case it exists.
     */
    where: TESTIMONYWhereUniqueInput
    /**
     * In case the TESTIMONY found by the `where` argument doesn't exist, create a new TESTIMONY with this data.
     */
    create: XOR<TESTIMONYCreateInput, TESTIMONYUncheckedCreateInput>
    /**
     * In case the TESTIMONY was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TESTIMONYUpdateInput, TESTIMONYUncheckedUpdateInput>
  }

  /**
   * TESTIMONY delete
   */
  export type TESTIMONYDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TESTIMONY
     */
    select?: TESTIMONYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TESTIMONY
     */
    omit?: TESTIMONYOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TESTIMONYInclude<ExtArgs> | null
    /**
     * Filter which TESTIMONY to delete.
     */
    where: TESTIMONYWhereUniqueInput
  }

  /**
   * TESTIMONY deleteMany
   */
  export type TESTIMONYDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TESTIMONIES to delete
     */
    where?: TESTIMONYWhereInput
    /**
     * Limit how many TESTIMONIES to delete.
     */
    limit?: number
  }

  /**
   * TESTIMONY without action
   */
  export type TESTIMONYDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TESTIMONY
     */
    select?: TESTIMONYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TESTIMONY
     */
    omit?: TESTIMONYOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TESTIMONYInclude<ExtArgs> | null
  }


  /**
   * Model SERVICE
   */

  export type AggregateSERVICE = {
    _count: SERVICECountAggregateOutputType | null
    _avg: SERVICEAvgAggregateOutputType | null
    _sum: SERVICESumAggregateOutputType | null
    _min: SERVICEMinAggregateOutputType | null
    _max: SERVICEMaxAggregateOutputType | null
  }

  export type SERVICEAvgAggregateOutputType = {
    ServiceID: number | null
    CostEstimateS: Decimal | null
    DamageID: number | null
  }

  export type SERVICESumAggregateOutputType = {
    ServiceID: number | null
    CostEstimateS: Decimal | null
    DamageID: number | null
  }

  export type SERVICEMinAggregateOutputType = {
    ServiceID: number | null
    CategoryS: string | null
    DescriptionS: string | null
    StatusS: string | null
    CostEstimateS: Decimal | null
    CompletionDateS: Date | null
    ValidityStartS: Date | null
    ValidityEndS: Date | null
    EstimatedDurationS: string | null
    DamageID: number | null
  }

  export type SERVICEMaxAggregateOutputType = {
    ServiceID: number | null
    CategoryS: string | null
    DescriptionS: string | null
    StatusS: string | null
    CostEstimateS: Decimal | null
    CompletionDateS: Date | null
    ValidityStartS: Date | null
    ValidityEndS: Date | null
    EstimatedDurationS: string | null
    DamageID: number | null
  }

  export type SERVICECountAggregateOutputType = {
    ServiceID: number
    CategoryS: number
    DescriptionS: number
    StatusS: number
    CostEstimateS: number
    CompletionDateS: number
    ValidityStartS: number
    ValidityEndS: number
    EstimatedDurationS: number
    DamageID: number
    _all: number
  }


  export type SERVICEAvgAggregateInputType = {
    ServiceID?: true
    CostEstimateS?: true
    DamageID?: true
  }

  export type SERVICESumAggregateInputType = {
    ServiceID?: true
    CostEstimateS?: true
    DamageID?: true
  }

  export type SERVICEMinAggregateInputType = {
    ServiceID?: true
    CategoryS?: true
    DescriptionS?: true
    StatusS?: true
    CostEstimateS?: true
    CompletionDateS?: true
    ValidityStartS?: true
    ValidityEndS?: true
    EstimatedDurationS?: true
    DamageID?: true
  }

  export type SERVICEMaxAggregateInputType = {
    ServiceID?: true
    CategoryS?: true
    DescriptionS?: true
    StatusS?: true
    CostEstimateS?: true
    CompletionDateS?: true
    ValidityStartS?: true
    ValidityEndS?: true
    EstimatedDurationS?: true
    DamageID?: true
  }

  export type SERVICECountAggregateInputType = {
    ServiceID?: true
    CategoryS?: true
    DescriptionS?: true
    StatusS?: true
    CostEstimateS?: true
    CompletionDateS?: true
    ValidityStartS?: true
    ValidityEndS?: true
    EstimatedDurationS?: true
    DamageID?: true
    _all?: true
  }

  export type SERVICEAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SERVICE to aggregate.
     */
    where?: SERVICEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SERVICES to fetch.
     */
    orderBy?: SERVICEOrderByWithRelationInput | SERVICEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SERVICEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SERVICES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SERVICES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SERVICES
    **/
    _count?: true | SERVICECountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SERVICEAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SERVICESumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SERVICEMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SERVICEMaxAggregateInputType
  }

  export type GetSERVICEAggregateType<T extends SERVICEAggregateArgs> = {
        [P in keyof T & keyof AggregateSERVICE]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSERVICE[P]>
      : GetScalarType<T[P], AggregateSERVICE[P]>
  }




  export type SERVICEGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SERVICEWhereInput
    orderBy?: SERVICEOrderByWithAggregationInput | SERVICEOrderByWithAggregationInput[]
    by: SERVICEScalarFieldEnum[] | SERVICEScalarFieldEnum
    having?: SERVICEScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SERVICECountAggregateInputType | true
    _avg?: SERVICEAvgAggregateInputType
    _sum?: SERVICESumAggregateInputType
    _min?: SERVICEMinAggregateInputType
    _max?: SERVICEMaxAggregateInputType
  }

  export type SERVICEGroupByOutputType = {
    ServiceID: number
    CategoryS: string | null
    DescriptionS: string | null
    StatusS: string | null
    CostEstimateS: Decimal | null
    CompletionDateS: Date | null
    ValidityStartS: Date | null
    ValidityEndS: Date | null
    EstimatedDurationS: string | null
    DamageID: number
    _count: SERVICECountAggregateOutputType | null
    _avg: SERVICEAvgAggregateOutputType | null
    _sum: SERVICESumAggregateOutputType | null
    _min: SERVICEMinAggregateOutputType | null
    _max: SERVICEMaxAggregateOutputType | null
  }

  type GetSERVICEGroupByPayload<T extends SERVICEGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SERVICEGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SERVICEGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SERVICEGroupByOutputType[P]>
            : GetScalarType<T[P], SERVICEGroupByOutputType[P]>
        }
      >
    >


  export type SERVICESelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ServiceID?: boolean
    CategoryS?: boolean
    DescriptionS?: boolean
    StatusS?: boolean
    CostEstimateS?: boolean
    CompletionDateS?: boolean
    ValidityStartS?: boolean
    ValidityEndS?: boolean
    EstimatedDurationS?: boolean
    DamageID?: boolean
    PROVIDES?: boolean | SERVICE$PROVIDESArgs<ExtArgs>
    Damage?: boolean | DamageDefaultArgs<ExtArgs>
    _count?: boolean | SERVICECountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sERVICE"]>

  export type SERVICESelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ServiceID?: boolean
    CategoryS?: boolean
    DescriptionS?: boolean
    StatusS?: boolean
    CostEstimateS?: boolean
    CompletionDateS?: boolean
    ValidityStartS?: boolean
    ValidityEndS?: boolean
    EstimatedDurationS?: boolean
    DamageID?: boolean
    Damage?: boolean | DamageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sERVICE"]>

  export type SERVICESelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ServiceID?: boolean
    CategoryS?: boolean
    DescriptionS?: boolean
    StatusS?: boolean
    CostEstimateS?: boolean
    CompletionDateS?: boolean
    ValidityStartS?: boolean
    ValidityEndS?: boolean
    EstimatedDurationS?: boolean
    DamageID?: boolean
    Damage?: boolean | DamageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sERVICE"]>

  export type SERVICESelectScalar = {
    ServiceID?: boolean
    CategoryS?: boolean
    DescriptionS?: boolean
    StatusS?: boolean
    CostEstimateS?: boolean
    CompletionDateS?: boolean
    ValidityStartS?: boolean
    ValidityEndS?: boolean
    EstimatedDurationS?: boolean
    DamageID?: boolean
  }

  export type SERVICEOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ServiceID" | "CategoryS" | "DescriptionS" | "StatusS" | "CostEstimateS" | "CompletionDateS" | "ValidityStartS" | "ValidityEndS" | "EstimatedDurationS" | "DamageID", ExtArgs["result"]["sERVICE"]>
  export type SERVICEInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PROVIDES?: boolean | SERVICE$PROVIDESArgs<ExtArgs>
    Damage?: boolean | DamageDefaultArgs<ExtArgs>
    _count?: boolean | SERVICECountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SERVICEIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Damage?: boolean | DamageDefaultArgs<ExtArgs>
  }
  export type SERVICEIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Damage?: boolean | DamageDefaultArgs<ExtArgs>
  }

  export type $SERVICEPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SERVICE"
    objects: {
      PROVIDES: Prisma.$PROVIDESPayload<ExtArgs>[]
      Damage: Prisma.$DamagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ServiceID: number
      CategoryS: string | null
      DescriptionS: string | null
      StatusS: string | null
      CostEstimateS: Prisma.Decimal | null
      CompletionDateS: Date | null
      ValidityStartS: Date | null
      ValidityEndS: Date | null
      EstimatedDurationS: string | null
      DamageID: number
    }, ExtArgs["result"]["sERVICE"]>
    composites: {}
  }

  type SERVICEGetPayload<S extends boolean | null | undefined | SERVICEDefaultArgs> = $Result.GetResult<Prisma.$SERVICEPayload, S>

  type SERVICECountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SERVICEFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SERVICECountAggregateInputType | true
    }

  export interface SERVICEDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SERVICE'], meta: { name: 'SERVICE' } }
    /**
     * Find zero or one SERVICE that matches the filter.
     * @param {SERVICEFindUniqueArgs} args - Arguments to find a SERVICE
     * @example
     * // Get one SERVICE
     * const sERVICE = await prisma.sERVICE.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SERVICEFindUniqueArgs>(args: SelectSubset<T, SERVICEFindUniqueArgs<ExtArgs>>): Prisma__SERVICEClient<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SERVICE that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SERVICEFindUniqueOrThrowArgs} args - Arguments to find a SERVICE
     * @example
     * // Get one SERVICE
     * const sERVICE = await prisma.sERVICE.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SERVICEFindUniqueOrThrowArgs>(args: SelectSubset<T, SERVICEFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SERVICEClient<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SERVICE that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SERVICEFindFirstArgs} args - Arguments to find a SERVICE
     * @example
     * // Get one SERVICE
     * const sERVICE = await prisma.sERVICE.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SERVICEFindFirstArgs>(args?: SelectSubset<T, SERVICEFindFirstArgs<ExtArgs>>): Prisma__SERVICEClient<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SERVICE that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SERVICEFindFirstOrThrowArgs} args - Arguments to find a SERVICE
     * @example
     * // Get one SERVICE
     * const sERVICE = await prisma.sERVICE.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SERVICEFindFirstOrThrowArgs>(args?: SelectSubset<T, SERVICEFindFirstOrThrowArgs<ExtArgs>>): Prisma__SERVICEClient<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SERVICES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SERVICEFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SERVICES
     * const sERVICES = await prisma.sERVICE.findMany()
     * 
     * // Get first 10 SERVICES
     * const sERVICES = await prisma.sERVICE.findMany({ take: 10 })
     * 
     * // Only select the `ServiceID`
     * const sERVICEWithServiceIDOnly = await prisma.sERVICE.findMany({ select: { ServiceID: true } })
     * 
     */
    findMany<T extends SERVICEFindManyArgs>(args?: SelectSubset<T, SERVICEFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SERVICE.
     * @param {SERVICECreateArgs} args - Arguments to create a SERVICE.
     * @example
     * // Create one SERVICE
     * const SERVICE = await prisma.sERVICE.create({
     *   data: {
     *     // ... data to create a SERVICE
     *   }
     * })
     * 
     */
    create<T extends SERVICECreateArgs>(args: SelectSubset<T, SERVICECreateArgs<ExtArgs>>): Prisma__SERVICEClient<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SERVICES.
     * @param {SERVICECreateManyArgs} args - Arguments to create many SERVICES.
     * @example
     * // Create many SERVICES
     * const sERVICE = await prisma.sERVICE.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SERVICECreateManyArgs>(args?: SelectSubset<T, SERVICECreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SERVICES and returns the data saved in the database.
     * @param {SERVICECreateManyAndReturnArgs} args - Arguments to create many SERVICES.
     * @example
     * // Create many SERVICES
     * const sERVICE = await prisma.sERVICE.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SERVICES and only return the `ServiceID`
     * const sERVICEWithServiceIDOnly = await prisma.sERVICE.createManyAndReturn({
     *   select: { ServiceID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SERVICECreateManyAndReturnArgs>(args?: SelectSubset<T, SERVICECreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SERVICE.
     * @param {SERVICEDeleteArgs} args - Arguments to delete one SERVICE.
     * @example
     * // Delete one SERVICE
     * const SERVICE = await prisma.sERVICE.delete({
     *   where: {
     *     // ... filter to delete one SERVICE
     *   }
     * })
     * 
     */
    delete<T extends SERVICEDeleteArgs>(args: SelectSubset<T, SERVICEDeleteArgs<ExtArgs>>): Prisma__SERVICEClient<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SERVICE.
     * @param {SERVICEUpdateArgs} args - Arguments to update one SERVICE.
     * @example
     * // Update one SERVICE
     * const sERVICE = await prisma.sERVICE.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SERVICEUpdateArgs>(args: SelectSubset<T, SERVICEUpdateArgs<ExtArgs>>): Prisma__SERVICEClient<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SERVICES.
     * @param {SERVICEDeleteManyArgs} args - Arguments to filter SERVICES to delete.
     * @example
     * // Delete a few SERVICES
     * const { count } = await prisma.sERVICE.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SERVICEDeleteManyArgs>(args?: SelectSubset<T, SERVICEDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SERVICES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SERVICEUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SERVICES
     * const sERVICE = await prisma.sERVICE.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SERVICEUpdateManyArgs>(args: SelectSubset<T, SERVICEUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SERVICES and returns the data updated in the database.
     * @param {SERVICEUpdateManyAndReturnArgs} args - Arguments to update many SERVICES.
     * @example
     * // Update many SERVICES
     * const sERVICE = await prisma.sERVICE.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SERVICES and only return the `ServiceID`
     * const sERVICEWithServiceIDOnly = await prisma.sERVICE.updateManyAndReturn({
     *   select: { ServiceID: true },
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
    updateManyAndReturn<T extends SERVICEUpdateManyAndReturnArgs>(args: SelectSubset<T, SERVICEUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SERVICE.
     * @param {SERVICEUpsertArgs} args - Arguments to update or create a SERVICE.
     * @example
     * // Update or create a SERVICE
     * const sERVICE = await prisma.sERVICE.upsert({
     *   create: {
     *     // ... data to create a SERVICE
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SERVICE we want to update
     *   }
     * })
     */
    upsert<T extends SERVICEUpsertArgs>(args: SelectSubset<T, SERVICEUpsertArgs<ExtArgs>>): Prisma__SERVICEClient<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SERVICES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SERVICECountArgs} args - Arguments to filter SERVICES to count.
     * @example
     * // Count the number of SERVICES
     * const count = await prisma.sERVICE.count({
     *   where: {
     *     // ... the filter for the SERVICES we want to count
     *   }
     * })
    **/
    count<T extends SERVICECountArgs>(
      args?: Subset<T, SERVICECountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SERVICECountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SERVICE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SERVICEAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SERVICEAggregateArgs>(args: Subset<T, SERVICEAggregateArgs>): Prisma.PrismaPromise<GetSERVICEAggregateType<T>>

    /**
     * Group by SERVICE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SERVICEGroupByArgs} args - Group by arguments.
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
      T extends SERVICEGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SERVICEGroupByArgs['orderBy'] }
        : { orderBy?: SERVICEGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SERVICEGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSERVICEGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SERVICE model
   */
  readonly fields: SERVICEFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SERVICE.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SERVICEClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PROVIDES<T extends SERVICE$PROVIDESArgs<ExtArgs> = {}>(args?: Subset<T, SERVICE$PROVIDESArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PROVIDESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Damage<T extends DamageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DamageDefaultArgs<ExtArgs>>): Prisma__DamageClient<$Result.GetResult<Prisma.$DamagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SERVICE model
   */
  interface SERVICEFieldRefs {
    readonly ServiceID: FieldRef<"SERVICE", 'Int'>
    readonly CategoryS: FieldRef<"SERVICE", 'String'>
    readonly DescriptionS: FieldRef<"SERVICE", 'String'>
    readonly StatusS: FieldRef<"SERVICE", 'String'>
    readonly CostEstimateS: FieldRef<"SERVICE", 'Decimal'>
    readonly CompletionDateS: FieldRef<"SERVICE", 'DateTime'>
    readonly ValidityStartS: FieldRef<"SERVICE", 'DateTime'>
    readonly ValidityEndS: FieldRef<"SERVICE", 'DateTime'>
    readonly EstimatedDurationS: FieldRef<"SERVICE", 'String'>
    readonly DamageID: FieldRef<"SERVICE", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SERVICE findUnique
   */
  export type SERVICEFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SERVICEInclude<ExtArgs> | null
    /**
     * Filter, which SERVICE to fetch.
     */
    where: SERVICEWhereUniqueInput
  }

  /**
   * SERVICE findUniqueOrThrow
   */
  export type SERVICEFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SERVICEInclude<ExtArgs> | null
    /**
     * Filter, which SERVICE to fetch.
     */
    where: SERVICEWhereUniqueInput
  }

  /**
   * SERVICE findFirst
   */
  export type SERVICEFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SERVICEInclude<ExtArgs> | null
    /**
     * Filter, which SERVICE to fetch.
     */
    where?: SERVICEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SERVICES to fetch.
     */
    orderBy?: SERVICEOrderByWithRelationInput | SERVICEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SERVICES.
     */
    cursor?: SERVICEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SERVICES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SERVICES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SERVICES.
     */
    distinct?: SERVICEScalarFieldEnum | SERVICEScalarFieldEnum[]
  }

  /**
   * SERVICE findFirstOrThrow
   */
  export type SERVICEFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SERVICEInclude<ExtArgs> | null
    /**
     * Filter, which SERVICE to fetch.
     */
    where?: SERVICEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SERVICES to fetch.
     */
    orderBy?: SERVICEOrderByWithRelationInput | SERVICEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SERVICES.
     */
    cursor?: SERVICEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SERVICES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SERVICES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SERVICES.
     */
    distinct?: SERVICEScalarFieldEnum | SERVICEScalarFieldEnum[]
  }

  /**
   * SERVICE findMany
   */
  export type SERVICEFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SERVICEInclude<ExtArgs> | null
    /**
     * Filter, which SERVICES to fetch.
     */
    where?: SERVICEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SERVICES to fetch.
     */
    orderBy?: SERVICEOrderByWithRelationInput | SERVICEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SERVICES.
     */
    cursor?: SERVICEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SERVICES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SERVICES.
     */
    skip?: number
    distinct?: SERVICEScalarFieldEnum | SERVICEScalarFieldEnum[]
  }

  /**
   * SERVICE create
   */
  export type SERVICECreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SERVICEInclude<ExtArgs> | null
    /**
     * The data needed to create a SERVICE.
     */
    data: XOR<SERVICECreateInput, SERVICEUncheckedCreateInput>
  }

  /**
   * SERVICE createMany
   */
  export type SERVICECreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SERVICES.
     */
    data: SERVICECreateManyInput | SERVICECreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SERVICE createManyAndReturn
   */
  export type SERVICECreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * The data used to create many SERVICES.
     */
    data: SERVICECreateManyInput | SERVICECreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SERVICEIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SERVICE update
   */
  export type SERVICEUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SERVICEInclude<ExtArgs> | null
    /**
     * The data needed to update a SERVICE.
     */
    data: XOR<SERVICEUpdateInput, SERVICEUncheckedUpdateInput>
    /**
     * Choose, which SERVICE to update.
     */
    where: SERVICEWhereUniqueInput
  }

  /**
   * SERVICE updateMany
   */
  export type SERVICEUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SERVICES.
     */
    data: XOR<SERVICEUpdateManyMutationInput, SERVICEUncheckedUpdateManyInput>
    /**
     * Filter which SERVICES to update
     */
    where?: SERVICEWhereInput
    /**
     * Limit how many SERVICES to update.
     */
    limit?: number
  }

  /**
   * SERVICE updateManyAndReturn
   */
  export type SERVICEUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * The data used to update SERVICES.
     */
    data: XOR<SERVICEUpdateManyMutationInput, SERVICEUncheckedUpdateManyInput>
    /**
     * Filter which SERVICES to update
     */
    where?: SERVICEWhereInput
    /**
     * Limit how many SERVICES to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SERVICEIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SERVICE upsert
   */
  export type SERVICEUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SERVICEInclude<ExtArgs> | null
    /**
     * The filter to search for the SERVICE to update in case it exists.
     */
    where: SERVICEWhereUniqueInput
    /**
     * In case the SERVICE found by the `where` argument doesn't exist, create a new SERVICE with this data.
     */
    create: XOR<SERVICECreateInput, SERVICEUncheckedCreateInput>
    /**
     * In case the SERVICE was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SERVICEUpdateInput, SERVICEUncheckedUpdateInput>
  }

  /**
   * SERVICE delete
   */
  export type SERVICEDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SERVICEInclude<ExtArgs> | null
    /**
     * Filter which SERVICE to delete.
     */
    where: SERVICEWhereUniqueInput
  }

  /**
   * SERVICE deleteMany
   */
  export type SERVICEDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SERVICES to delete
     */
    where?: SERVICEWhereInput
    /**
     * Limit how many SERVICES to delete.
     */
    limit?: number
  }

  /**
   * SERVICE.PROVIDES
   */
  export type SERVICE$PROVIDESArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROVIDES
     */
    select?: PROVIDESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROVIDES
     */
    omit?: PROVIDESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROVIDESInclude<ExtArgs> | null
    where?: PROVIDESWhereInput
    orderBy?: PROVIDESOrderByWithRelationInput | PROVIDESOrderByWithRelationInput[]
    cursor?: PROVIDESWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PROVIDESScalarFieldEnum | PROVIDESScalarFieldEnum[]
  }

  /**
   * SERVICE without action
   */
  export type SERVICEDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SERVICEInclude<ExtArgs> | null
  }


  /**
   * Model PROVIDES
   */

  export type AggregatePROVIDES = {
    _count: PROVIDESCountAggregateOutputType | null
    _avg: PROVIDESAvgAggregateOutputType | null
    _sum: PROVIDESSumAggregateOutputType | null
    _min: PROVIDESMinAggregateOutputType | null
    _max: PROVIDESMaxAggregateOutputType | null
  }

  export type PROVIDESAvgAggregateOutputType = {
    VolunteerID: number | null
    ServiceID: number | null
  }

  export type PROVIDESSumAggregateOutputType = {
    VolunteerID: number | null
    ServiceID: number | null
  }

  export type PROVIDESMinAggregateOutputType = {
    VolunteerID: number | null
    ServiceID: number | null
  }

  export type PROVIDESMaxAggregateOutputType = {
    VolunteerID: number | null
    ServiceID: number | null
  }

  export type PROVIDESCountAggregateOutputType = {
    VolunteerID: number
    ServiceID: number
    _all: number
  }


  export type PROVIDESAvgAggregateInputType = {
    VolunteerID?: true
    ServiceID?: true
  }

  export type PROVIDESSumAggregateInputType = {
    VolunteerID?: true
    ServiceID?: true
  }

  export type PROVIDESMinAggregateInputType = {
    VolunteerID?: true
    ServiceID?: true
  }

  export type PROVIDESMaxAggregateInputType = {
    VolunteerID?: true
    ServiceID?: true
  }

  export type PROVIDESCountAggregateInputType = {
    VolunteerID?: true
    ServiceID?: true
    _all?: true
  }

  export type PROVIDESAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PROVIDES to aggregate.
     */
    where?: PROVIDESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PROVIDES to fetch.
     */
    orderBy?: PROVIDESOrderByWithRelationInput | PROVIDESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PROVIDESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PROVIDES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PROVIDES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PROVIDES
    **/
    _count?: true | PROVIDESCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PROVIDESAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PROVIDESSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PROVIDESMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PROVIDESMaxAggregateInputType
  }

  export type GetPROVIDESAggregateType<T extends PROVIDESAggregateArgs> = {
        [P in keyof T & keyof AggregatePROVIDES]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePROVIDES[P]>
      : GetScalarType<T[P], AggregatePROVIDES[P]>
  }




  export type PROVIDESGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PROVIDESWhereInput
    orderBy?: PROVIDESOrderByWithAggregationInput | PROVIDESOrderByWithAggregationInput[]
    by: PROVIDESScalarFieldEnum[] | PROVIDESScalarFieldEnum
    having?: PROVIDESScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PROVIDESCountAggregateInputType | true
    _avg?: PROVIDESAvgAggregateInputType
    _sum?: PROVIDESSumAggregateInputType
    _min?: PROVIDESMinAggregateInputType
    _max?: PROVIDESMaxAggregateInputType
  }

  export type PROVIDESGroupByOutputType = {
    VolunteerID: number
    ServiceID: number
    _count: PROVIDESCountAggregateOutputType | null
    _avg: PROVIDESAvgAggregateOutputType | null
    _sum: PROVIDESSumAggregateOutputType | null
    _min: PROVIDESMinAggregateOutputType | null
    _max: PROVIDESMaxAggregateOutputType | null
  }

  type GetPROVIDESGroupByPayload<T extends PROVIDESGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PROVIDESGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PROVIDESGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PROVIDESGroupByOutputType[P]>
            : GetScalarType<T[P], PROVIDESGroupByOutputType[P]>
        }
      >
    >


  export type PROVIDESSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    VolunteerID?: boolean
    ServiceID?: boolean
    SERVICE?: boolean | SERVICEDefaultArgs<ExtArgs>
    Volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pROVIDES"]>

  export type PROVIDESSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    VolunteerID?: boolean
    ServiceID?: boolean
    SERVICE?: boolean | SERVICEDefaultArgs<ExtArgs>
    Volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pROVIDES"]>

  export type PROVIDESSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    VolunteerID?: boolean
    ServiceID?: boolean
    SERVICE?: boolean | SERVICEDefaultArgs<ExtArgs>
    Volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pROVIDES"]>

  export type PROVIDESSelectScalar = {
    VolunteerID?: boolean
    ServiceID?: boolean
  }

  export type PROVIDESOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"VolunteerID" | "ServiceID", ExtArgs["result"]["pROVIDES"]>
  export type PROVIDESInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SERVICE?: boolean | SERVICEDefaultArgs<ExtArgs>
    Volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }
  export type PROVIDESIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SERVICE?: boolean | SERVICEDefaultArgs<ExtArgs>
    Volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }
  export type PROVIDESIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SERVICE?: boolean | SERVICEDefaultArgs<ExtArgs>
    Volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }

  export type $PROVIDESPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PROVIDES"
    objects: {
      SERVICE: Prisma.$SERVICEPayload<ExtArgs>
      Volunteer: Prisma.$VolunteerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      VolunteerID: number
      ServiceID: number
    }, ExtArgs["result"]["pROVIDES"]>
    composites: {}
  }

  type PROVIDESGetPayload<S extends boolean | null | undefined | PROVIDESDefaultArgs> = $Result.GetResult<Prisma.$PROVIDESPayload, S>

  type PROVIDESCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PROVIDESFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PROVIDESCountAggregateInputType | true
    }

  export interface PROVIDESDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PROVIDES'], meta: { name: 'PROVIDES' } }
    /**
     * Find zero or one PROVIDES that matches the filter.
     * @param {PROVIDESFindUniqueArgs} args - Arguments to find a PROVIDES
     * @example
     * // Get one PROVIDES
     * const pROVIDES = await prisma.pROVIDES.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PROVIDESFindUniqueArgs>(args: SelectSubset<T, PROVIDESFindUniqueArgs<ExtArgs>>): Prisma__PROVIDESClient<$Result.GetResult<Prisma.$PROVIDESPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PROVIDES that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PROVIDESFindUniqueOrThrowArgs} args - Arguments to find a PROVIDES
     * @example
     * // Get one PROVIDES
     * const pROVIDES = await prisma.pROVIDES.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PROVIDESFindUniqueOrThrowArgs>(args: SelectSubset<T, PROVIDESFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PROVIDESClient<$Result.GetResult<Prisma.$PROVIDESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PROVIDES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PROVIDESFindFirstArgs} args - Arguments to find a PROVIDES
     * @example
     * // Get one PROVIDES
     * const pROVIDES = await prisma.pROVIDES.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PROVIDESFindFirstArgs>(args?: SelectSubset<T, PROVIDESFindFirstArgs<ExtArgs>>): Prisma__PROVIDESClient<$Result.GetResult<Prisma.$PROVIDESPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PROVIDES that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PROVIDESFindFirstOrThrowArgs} args - Arguments to find a PROVIDES
     * @example
     * // Get one PROVIDES
     * const pROVIDES = await prisma.pROVIDES.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PROVIDESFindFirstOrThrowArgs>(args?: SelectSubset<T, PROVIDESFindFirstOrThrowArgs<ExtArgs>>): Prisma__PROVIDESClient<$Result.GetResult<Prisma.$PROVIDESPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PROVIDES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PROVIDESFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PROVIDES
     * const pROVIDES = await prisma.pROVIDES.findMany()
     * 
     * // Get first 10 PROVIDES
     * const pROVIDES = await prisma.pROVIDES.findMany({ take: 10 })
     * 
     * // Only select the `VolunteerID`
     * const pROVIDESWithVolunteerIDOnly = await prisma.pROVIDES.findMany({ select: { VolunteerID: true } })
     * 
     */
    findMany<T extends PROVIDESFindManyArgs>(args?: SelectSubset<T, PROVIDESFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PROVIDESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PROVIDES.
     * @param {PROVIDESCreateArgs} args - Arguments to create a PROVIDES.
     * @example
     * // Create one PROVIDES
     * const PROVIDES = await prisma.pROVIDES.create({
     *   data: {
     *     // ... data to create a PROVIDES
     *   }
     * })
     * 
     */
    create<T extends PROVIDESCreateArgs>(args: SelectSubset<T, PROVIDESCreateArgs<ExtArgs>>): Prisma__PROVIDESClient<$Result.GetResult<Prisma.$PROVIDESPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PROVIDES.
     * @param {PROVIDESCreateManyArgs} args - Arguments to create many PROVIDES.
     * @example
     * // Create many PROVIDES
     * const pROVIDES = await prisma.pROVIDES.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PROVIDESCreateManyArgs>(args?: SelectSubset<T, PROVIDESCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PROVIDES and returns the data saved in the database.
     * @param {PROVIDESCreateManyAndReturnArgs} args - Arguments to create many PROVIDES.
     * @example
     * // Create many PROVIDES
     * const pROVIDES = await prisma.pROVIDES.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PROVIDES and only return the `VolunteerID`
     * const pROVIDESWithVolunteerIDOnly = await prisma.pROVIDES.createManyAndReturn({
     *   select: { VolunteerID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PROVIDESCreateManyAndReturnArgs>(args?: SelectSubset<T, PROVIDESCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PROVIDESPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PROVIDES.
     * @param {PROVIDESDeleteArgs} args - Arguments to delete one PROVIDES.
     * @example
     * // Delete one PROVIDES
     * const PROVIDES = await prisma.pROVIDES.delete({
     *   where: {
     *     // ... filter to delete one PROVIDES
     *   }
     * })
     * 
     */
    delete<T extends PROVIDESDeleteArgs>(args: SelectSubset<T, PROVIDESDeleteArgs<ExtArgs>>): Prisma__PROVIDESClient<$Result.GetResult<Prisma.$PROVIDESPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PROVIDES.
     * @param {PROVIDESUpdateArgs} args - Arguments to update one PROVIDES.
     * @example
     * // Update one PROVIDES
     * const pROVIDES = await prisma.pROVIDES.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PROVIDESUpdateArgs>(args: SelectSubset<T, PROVIDESUpdateArgs<ExtArgs>>): Prisma__PROVIDESClient<$Result.GetResult<Prisma.$PROVIDESPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PROVIDES.
     * @param {PROVIDESDeleteManyArgs} args - Arguments to filter PROVIDES to delete.
     * @example
     * // Delete a few PROVIDES
     * const { count } = await prisma.pROVIDES.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PROVIDESDeleteManyArgs>(args?: SelectSubset<T, PROVIDESDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PROVIDES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PROVIDESUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PROVIDES
     * const pROVIDES = await prisma.pROVIDES.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PROVIDESUpdateManyArgs>(args: SelectSubset<T, PROVIDESUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PROVIDES and returns the data updated in the database.
     * @param {PROVIDESUpdateManyAndReturnArgs} args - Arguments to update many PROVIDES.
     * @example
     * // Update many PROVIDES
     * const pROVIDES = await prisma.pROVIDES.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PROVIDES and only return the `VolunteerID`
     * const pROVIDESWithVolunteerIDOnly = await prisma.pROVIDES.updateManyAndReturn({
     *   select: { VolunteerID: true },
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
    updateManyAndReturn<T extends PROVIDESUpdateManyAndReturnArgs>(args: SelectSubset<T, PROVIDESUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PROVIDESPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PROVIDES.
     * @param {PROVIDESUpsertArgs} args - Arguments to update or create a PROVIDES.
     * @example
     * // Update or create a PROVIDES
     * const pROVIDES = await prisma.pROVIDES.upsert({
     *   create: {
     *     // ... data to create a PROVIDES
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PROVIDES we want to update
     *   }
     * })
     */
    upsert<T extends PROVIDESUpsertArgs>(args: SelectSubset<T, PROVIDESUpsertArgs<ExtArgs>>): Prisma__PROVIDESClient<$Result.GetResult<Prisma.$PROVIDESPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PROVIDES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PROVIDESCountArgs} args - Arguments to filter PROVIDES to count.
     * @example
     * // Count the number of PROVIDES
     * const count = await prisma.pROVIDES.count({
     *   where: {
     *     // ... the filter for the PROVIDES we want to count
     *   }
     * })
    **/
    count<T extends PROVIDESCountArgs>(
      args?: Subset<T, PROVIDESCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PROVIDESCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PROVIDES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PROVIDESAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PROVIDESAggregateArgs>(args: Subset<T, PROVIDESAggregateArgs>): Prisma.PrismaPromise<GetPROVIDESAggregateType<T>>

    /**
     * Group by PROVIDES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PROVIDESGroupByArgs} args - Group by arguments.
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
      T extends PROVIDESGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PROVIDESGroupByArgs['orderBy'] }
        : { orderBy?: PROVIDESGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PROVIDESGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPROVIDESGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PROVIDES model
   */
  readonly fields: PROVIDESFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PROVIDES.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PROVIDESClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SERVICE<T extends SERVICEDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SERVICEDefaultArgs<ExtArgs>>): Prisma__SERVICEClient<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Volunteer<T extends VolunteerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VolunteerDefaultArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PROVIDES model
   */
  interface PROVIDESFieldRefs {
    readonly VolunteerID: FieldRef<"PROVIDES", 'Int'>
    readonly ServiceID: FieldRef<"PROVIDES", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PROVIDES findUnique
   */
  export type PROVIDESFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROVIDES
     */
    select?: PROVIDESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROVIDES
     */
    omit?: PROVIDESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROVIDESInclude<ExtArgs> | null
    /**
     * Filter, which PROVIDES to fetch.
     */
    where: PROVIDESWhereUniqueInput
  }

  /**
   * PROVIDES findUniqueOrThrow
   */
  export type PROVIDESFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROVIDES
     */
    select?: PROVIDESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROVIDES
     */
    omit?: PROVIDESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROVIDESInclude<ExtArgs> | null
    /**
     * Filter, which PROVIDES to fetch.
     */
    where: PROVIDESWhereUniqueInput
  }

  /**
   * PROVIDES findFirst
   */
  export type PROVIDESFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROVIDES
     */
    select?: PROVIDESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROVIDES
     */
    omit?: PROVIDESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROVIDESInclude<ExtArgs> | null
    /**
     * Filter, which PROVIDES to fetch.
     */
    where?: PROVIDESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PROVIDES to fetch.
     */
    orderBy?: PROVIDESOrderByWithRelationInput | PROVIDESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PROVIDES.
     */
    cursor?: PROVIDESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PROVIDES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PROVIDES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PROVIDES.
     */
    distinct?: PROVIDESScalarFieldEnum | PROVIDESScalarFieldEnum[]
  }

  /**
   * PROVIDES findFirstOrThrow
   */
  export type PROVIDESFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROVIDES
     */
    select?: PROVIDESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROVIDES
     */
    omit?: PROVIDESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROVIDESInclude<ExtArgs> | null
    /**
     * Filter, which PROVIDES to fetch.
     */
    where?: PROVIDESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PROVIDES to fetch.
     */
    orderBy?: PROVIDESOrderByWithRelationInput | PROVIDESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PROVIDES.
     */
    cursor?: PROVIDESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PROVIDES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PROVIDES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PROVIDES.
     */
    distinct?: PROVIDESScalarFieldEnum | PROVIDESScalarFieldEnum[]
  }

  /**
   * PROVIDES findMany
   */
  export type PROVIDESFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROVIDES
     */
    select?: PROVIDESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROVIDES
     */
    omit?: PROVIDESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROVIDESInclude<ExtArgs> | null
    /**
     * Filter, which PROVIDES to fetch.
     */
    where?: PROVIDESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PROVIDES to fetch.
     */
    orderBy?: PROVIDESOrderByWithRelationInput | PROVIDESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PROVIDES.
     */
    cursor?: PROVIDESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PROVIDES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PROVIDES.
     */
    skip?: number
    distinct?: PROVIDESScalarFieldEnum | PROVIDESScalarFieldEnum[]
  }

  /**
   * PROVIDES create
   */
  export type PROVIDESCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROVIDES
     */
    select?: PROVIDESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROVIDES
     */
    omit?: PROVIDESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROVIDESInclude<ExtArgs> | null
    /**
     * The data needed to create a PROVIDES.
     */
    data: XOR<PROVIDESCreateInput, PROVIDESUncheckedCreateInput>
  }

  /**
   * PROVIDES createMany
   */
  export type PROVIDESCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PROVIDES.
     */
    data: PROVIDESCreateManyInput | PROVIDESCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PROVIDES createManyAndReturn
   */
  export type PROVIDESCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROVIDES
     */
    select?: PROVIDESSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PROVIDES
     */
    omit?: PROVIDESOmit<ExtArgs> | null
    /**
     * The data used to create many PROVIDES.
     */
    data: PROVIDESCreateManyInput | PROVIDESCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROVIDESIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PROVIDES update
   */
  export type PROVIDESUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROVIDES
     */
    select?: PROVIDESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROVIDES
     */
    omit?: PROVIDESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROVIDESInclude<ExtArgs> | null
    /**
     * The data needed to update a PROVIDES.
     */
    data: XOR<PROVIDESUpdateInput, PROVIDESUncheckedUpdateInput>
    /**
     * Choose, which PROVIDES to update.
     */
    where: PROVIDESWhereUniqueInput
  }

  /**
   * PROVIDES updateMany
   */
  export type PROVIDESUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PROVIDES.
     */
    data: XOR<PROVIDESUpdateManyMutationInput, PROVIDESUncheckedUpdateManyInput>
    /**
     * Filter which PROVIDES to update
     */
    where?: PROVIDESWhereInput
    /**
     * Limit how many PROVIDES to update.
     */
    limit?: number
  }

  /**
   * PROVIDES updateManyAndReturn
   */
  export type PROVIDESUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROVIDES
     */
    select?: PROVIDESSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PROVIDES
     */
    omit?: PROVIDESOmit<ExtArgs> | null
    /**
     * The data used to update PROVIDES.
     */
    data: XOR<PROVIDESUpdateManyMutationInput, PROVIDESUncheckedUpdateManyInput>
    /**
     * Filter which PROVIDES to update
     */
    where?: PROVIDESWhereInput
    /**
     * Limit how many PROVIDES to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROVIDESIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PROVIDES upsert
   */
  export type PROVIDESUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROVIDES
     */
    select?: PROVIDESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROVIDES
     */
    omit?: PROVIDESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROVIDESInclude<ExtArgs> | null
    /**
     * The filter to search for the PROVIDES to update in case it exists.
     */
    where: PROVIDESWhereUniqueInput
    /**
     * In case the PROVIDES found by the `where` argument doesn't exist, create a new PROVIDES with this data.
     */
    create: XOR<PROVIDESCreateInput, PROVIDESUncheckedCreateInput>
    /**
     * In case the PROVIDES was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PROVIDESUpdateInput, PROVIDESUncheckedUpdateInput>
  }

  /**
   * PROVIDES delete
   */
  export type PROVIDESDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROVIDES
     */
    select?: PROVIDESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROVIDES
     */
    omit?: PROVIDESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROVIDESInclude<ExtArgs> | null
    /**
     * Filter which PROVIDES to delete.
     */
    where: PROVIDESWhereUniqueInput
  }

  /**
   * PROVIDES deleteMany
   */
  export type PROVIDESDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PROVIDES to delete
     */
    where?: PROVIDESWhereInput
    /**
     * Limit how many PROVIDES to delete.
     */
    limit?: number
  }

  /**
   * PROVIDES without action
   */
  export type PROVIDESDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROVIDES
     */
    select?: PROVIDESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROVIDES
     */
    omit?: PROVIDESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROVIDESInclude<ExtArgs> | null
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
    NGOId: 'NGOId',
    ngoName: 'ngoName',
    ngovolId: 'ngovolId'
  };

  export type NGOScalarFieldEnum = (typeof NGOScalarFieldEnum)[keyof typeof NGOScalarFieldEnum]


  export const Spatial_ref_sysScalarFieldEnum: {
    srid: 'srid',
    auth_name: 'auth_name',
    auth_srid: 'auth_srid',
    srtext: 'srtext',
    proj4text: 'proj4text'
  };

  export type Spatial_ref_sysScalarFieldEnum = (typeof Spatial_ref_sysScalarFieldEnum)[keyof typeof Spatial_ref_sysScalarFieldEnum]


  export const CrisisScalarFieldEnum: {
    CrisisId: 'CrisisId',
    Crisisname: 'Crisisname',
    CrisisDesc: 'CrisisDesc',
    CrisisStart: 'CrisisStart',
    CrisisEnd: 'CrisisEnd',
    CrisisCountry: 'CrisisCountry',
    TypeC: 'TypeC'
  };

  export type CrisisScalarFieldEnum = (typeof CrisisScalarFieldEnum)[keyof typeof CrisisScalarFieldEnum]


  export const DamageScalarFieldEnum: {
    DamageID: 'DamageID',
    CategoryD: 'CategoryD',
    StartDateD: 'StartDateD',
    EndDateD: 'EndDateD',
    FinancialEstimationD: 'FinancialEstimationD',
    CrisisID: 'CrisisID',
    Description: 'Description',
    Radius: 'Radius',
    City: 'City'
  };

  export type DamageScalarFieldEnum = (typeof DamageScalarFieldEnum)[keyof typeof DamageScalarFieldEnum]


  export const TESTIMONYScalarFieldEnum: {
    testimonyId: 'testimonyId',
    contentT: 'contentT',
    dateT: 'dateT',
    mediaURL: 'mediaURL',
    damageId: 'damageId',
    volunteerId: 'volunteerId'
  };

  export type TESTIMONYScalarFieldEnum = (typeof TESTIMONYScalarFieldEnum)[keyof typeof TESTIMONYScalarFieldEnum]


  export const SERVICEScalarFieldEnum: {
    ServiceID: 'ServiceID',
    CategoryS: 'CategoryS',
    DescriptionS: 'DescriptionS',
    StatusS: 'StatusS',
    CostEstimateS: 'CostEstimateS',
    CompletionDateS: 'CompletionDateS',
    ValidityStartS: 'ValidityStartS',
    ValidityEndS: 'ValidityEndS',
    EstimatedDurationS: 'EstimatedDurationS',
    DamageID: 'DamageID'
  };

  export type SERVICEScalarFieldEnum = (typeof SERVICEScalarFieldEnum)[keyof typeof SERVICEScalarFieldEnum]


  export const PROVIDESScalarFieldEnum: {
    VolunteerID: 'VolunteerID',
    ServiceID: 'ServiceID'
  };

  export type PROVIDESScalarFieldEnum = (typeof PROVIDESScalarFieldEnum)[keyof typeof PROVIDESScalarFieldEnum]


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
    Citizen?: XOR<CitizenNullableScalarRelationFilter, CitizenWhereInput> | null
    ngo?: XOR<NGONullableScalarRelationFilter, NGOWhereInput> | null
    PROVIDES?: PROVIDESListRelationFilter
    TESTIMONY?: TESTIMONYListRelationFilter
    USER?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VolunteerOrderByWithRelationInput = {
    volId?: SortOrder
    typeV?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    AvailabilityV?: SortOrderInput | SortOrder
    ReputationScore?: SortOrder
    CategoryV?: SortOrderInput | SortOrder
    userId?: SortOrder
    Citizen?: CitizenOrderByWithRelationInput
    ngo?: NGOOrderByWithRelationInput
    PROVIDES?: PROVIDESOrderByRelationAggregateInput
    TESTIMONY?: TESTIMONYOrderByRelationAggregateInput
    USER?: UserOrderByWithRelationInput
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
    Citizen?: XOR<CitizenNullableScalarRelationFilter, CitizenWhereInput> | null
    ngo?: XOR<NGONullableScalarRelationFilter, NGOWhereInput> | null
    PROVIDES?: PROVIDESListRelationFilter
    TESTIMONY?: TESTIMONYListRelationFilter
    USER?: XOR<UserScalarRelationFilter, UserWhereInput>
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
    NGOId?: IntFilter<"NGO"> | number
    ngoName?: StringNullableFilter<"NGO"> | string | null
    ngovolId?: IntFilter<"NGO"> | number
    VOLL?: XOR<VolunteerScalarRelationFilter, VolunteerWhereInput>
  }

  export type NGOOrderByWithRelationInput = {
    NGOId?: SortOrder
    ngoName?: SortOrderInput | SortOrder
    ngovolId?: SortOrder
    VOLL?: VolunteerOrderByWithRelationInput
  }

  export type NGOWhereUniqueInput = Prisma.AtLeast<{
    NGOId?: number
    ngovolId?: number
    AND?: NGOWhereInput | NGOWhereInput[]
    OR?: NGOWhereInput[]
    NOT?: NGOWhereInput | NGOWhereInput[]
    ngoName?: StringNullableFilter<"NGO"> | string | null
    VOLL?: XOR<VolunteerScalarRelationFilter, VolunteerWhereInput>
  }, "NGOId" | "NGOId" | "ngovolId">

  export type NGOOrderByWithAggregationInput = {
    NGOId?: SortOrder
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
    NGOId?: IntWithAggregatesFilter<"NGO"> | number
    ngoName?: StringNullableWithAggregatesFilter<"NGO"> | string | null
    ngovolId?: IntWithAggregatesFilter<"NGO"> | number
  }

  export type spatial_ref_sysWhereInput = {
    AND?: spatial_ref_sysWhereInput | spatial_ref_sysWhereInput[]
    OR?: spatial_ref_sysWhereInput[]
    NOT?: spatial_ref_sysWhereInput | spatial_ref_sysWhereInput[]
    srid?: IntFilter<"spatial_ref_sys"> | number
    auth_name?: StringNullableFilter<"spatial_ref_sys"> | string | null
    auth_srid?: IntNullableFilter<"spatial_ref_sys"> | number | null
    srtext?: StringNullableFilter<"spatial_ref_sys"> | string | null
    proj4text?: StringNullableFilter<"spatial_ref_sys"> | string | null
  }

  export type spatial_ref_sysOrderByWithRelationInput = {
    srid?: SortOrder
    auth_name?: SortOrderInput | SortOrder
    auth_srid?: SortOrderInput | SortOrder
    srtext?: SortOrderInput | SortOrder
    proj4text?: SortOrderInput | SortOrder
  }

  export type spatial_ref_sysWhereUniqueInput = Prisma.AtLeast<{
    srid?: number
    AND?: spatial_ref_sysWhereInput | spatial_ref_sysWhereInput[]
    OR?: spatial_ref_sysWhereInput[]
    NOT?: spatial_ref_sysWhereInput | spatial_ref_sysWhereInput[]
    auth_name?: StringNullableFilter<"spatial_ref_sys"> | string | null
    auth_srid?: IntNullableFilter<"spatial_ref_sys"> | number | null
    srtext?: StringNullableFilter<"spatial_ref_sys"> | string | null
    proj4text?: StringNullableFilter<"spatial_ref_sys"> | string | null
  }, "srid">

  export type spatial_ref_sysOrderByWithAggregationInput = {
    srid?: SortOrder
    auth_name?: SortOrderInput | SortOrder
    auth_srid?: SortOrderInput | SortOrder
    srtext?: SortOrderInput | SortOrder
    proj4text?: SortOrderInput | SortOrder
    _count?: spatial_ref_sysCountOrderByAggregateInput
    _avg?: spatial_ref_sysAvgOrderByAggregateInput
    _max?: spatial_ref_sysMaxOrderByAggregateInput
    _min?: spatial_ref_sysMinOrderByAggregateInput
    _sum?: spatial_ref_sysSumOrderByAggregateInput
  }

  export type spatial_ref_sysScalarWhereWithAggregatesInput = {
    AND?: spatial_ref_sysScalarWhereWithAggregatesInput | spatial_ref_sysScalarWhereWithAggregatesInput[]
    OR?: spatial_ref_sysScalarWhereWithAggregatesInput[]
    NOT?: spatial_ref_sysScalarWhereWithAggregatesInput | spatial_ref_sysScalarWhereWithAggregatesInput[]
    srid?: IntWithAggregatesFilter<"spatial_ref_sys"> | number
    auth_name?: StringNullableWithAggregatesFilter<"spatial_ref_sys"> | string | null
    auth_srid?: IntNullableWithAggregatesFilter<"spatial_ref_sys"> | number | null
    srtext?: StringNullableWithAggregatesFilter<"spatial_ref_sys"> | string | null
    proj4text?: StringNullableWithAggregatesFilter<"spatial_ref_sys"> | string | null
  }

  export type CrisisWhereInput = {
    AND?: CrisisWhereInput | CrisisWhereInput[]
    OR?: CrisisWhereInput[]
    NOT?: CrisisWhereInput | CrisisWhereInput[]
    CrisisId?: IntFilter<"Crisis"> | number
    Crisisname?: StringFilter<"Crisis"> | string
    CrisisDesc?: StringFilter<"Crisis"> | string
    CrisisStart?: DateTimeNullableFilter<"Crisis"> | Date | string | null
    CrisisEnd?: DateTimeNullableFilter<"Crisis"> | Date | string | null
    CrisisCountry?: StringNullableFilter<"Crisis"> | string | null
    TypeC?: StringNullableFilter<"Crisis"> | string | null
    Damage?: DamageListRelationFilter
  }

  export type CrisisOrderByWithRelationInput = {
    CrisisId?: SortOrder
    Crisisname?: SortOrder
    CrisisDesc?: SortOrder
    CrisisStart?: SortOrderInput | SortOrder
    CrisisEnd?: SortOrderInput | SortOrder
    CrisisCountry?: SortOrderInput | SortOrder
    TypeC?: SortOrderInput | SortOrder
    Damage?: DamageOrderByRelationAggregateInput
  }

  export type CrisisWhereUniqueInput = Prisma.AtLeast<{
    CrisisId?: number
    AND?: CrisisWhereInput | CrisisWhereInput[]
    OR?: CrisisWhereInput[]
    NOT?: CrisisWhereInput | CrisisWhereInput[]
    Crisisname?: StringFilter<"Crisis"> | string
    CrisisDesc?: StringFilter<"Crisis"> | string
    CrisisStart?: DateTimeNullableFilter<"Crisis"> | Date | string | null
    CrisisEnd?: DateTimeNullableFilter<"Crisis"> | Date | string | null
    CrisisCountry?: StringNullableFilter<"Crisis"> | string | null
    TypeC?: StringNullableFilter<"Crisis"> | string | null
    Damage?: DamageListRelationFilter
  }, "CrisisId">

  export type CrisisOrderByWithAggregationInput = {
    CrisisId?: SortOrder
    Crisisname?: SortOrder
    CrisisDesc?: SortOrder
    CrisisStart?: SortOrderInput | SortOrder
    CrisisEnd?: SortOrderInput | SortOrder
    CrisisCountry?: SortOrderInput | SortOrder
    TypeC?: SortOrderInput | SortOrder
    _count?: CrisisCountOrderByAggregateInput
    _avg?: CrisisAvgOrderByAggregateInput
    _max?: CrisisMaxOrderByAggregateInput
    _min?: CrisisMinOrderByAggregateInput
    _sum?: CrisisSumOrderByAggregateInput
  }

  export type CrisisScalarWhereWithAggregatesInput = {
    AND?: CrisisScalarWhereWithAggregatesInput | CrisisScalarWhereWithAggregatesInput[]
    OR?: CrisisScalarWhereWithAggregatesInput[]
    NOT?: CrisisScalarWhereWithAggregatesInput | CrisisScalarWhereWithAggregatesInput[]
    CrisisId?: IntWithAggregatesFilter<"Crisis"> | number
    Crisisname?: StringWithAggregatesFilter<"Crisis"> | string
    CrisisDesc?: StringWithAggregatesFilter<"Crisis"> | string
    CrisisStart?: DateTimeNullableWithAggregatesFilter<"Crisis"> | Date | string | null
    CrisisEnd?: DateTimeNullableWithAggregatesFilter<"Crisis"> | Date | string | null
    CrisisCountry?: StringNullableWithAggregatesFilter<"Crisis"> | string | null
    TypeC?: StringNullableWithAggregatesFilter<"Crisis"> | string | null
  }

  export type DamageWhereInput = {
    AND?: DamageWhereInput | DamageWhereInput[]
    OR?: DamageWhereInput[]
    NOT?: DamageWhereInput | DamageWhereInput[]
    DamageID?: IntFilter<"Damage"> | number
    CategoryD?: StringFilter<"Damage"> | string
    StartDateD?: DateTimeNullableFilter<"Damage"> | Date | string | null
    EndDateD?: DateTimeNullableFilter<"Damage"> | Date | string | null
    FinancialEstimationD?: DecimalNullableFilter<"Damage"> | Decimal | DecimalJsLike | number | string | null
    CrisisID?: IntNullableFilter<"Damage"> | number | null
    Description?: StringNullableFilter<"Damage"> | string | null
    Radius?: FloatNullableFilter<"Damage"> | number | null
    City?: StringNullableFilter<"Damage"> | string | null
    Crisis?: XOR<CrisisNullableScalarRelationFilter, CrisisWhereInput> | null
    SERVICE?: SERVICEListRelationFilter
    TESTIMONY?: TESTIMONYListRelationFilter
  }

  export type DamageOrderByWithRelationInput = {
    DamageID?: SortOrder
    CategoryD?: SortOrder
    StartDateD?: SortOrderInput | SortOrder
    EndDateD?: SortOrderInput | SortOrder
    FinancialEstimationD?: SortOrderInput | SortOrder
    CrisisID?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    Radius?: SortOrderInput | SortOrder
    City?: SortOrderInput | SortOrder
    Crisis?: CrisisOrderByWithRelationInput
    SERVICE?: SERVICEOrderByRelationAggregateInput
    TESTIMONY?: TESTIMONYOrderByRelationAggregateInput
  }

  export type DamageWhereUniqueInput = Prisma.AtLeast<{
    DamageID?: number
    AND?: DamageWhereInput | DamageWhereInput[]
    OR?: DamageWhereInput[]
    NOT?: DamageWhereInput | DamageWhereInput[]
    CategoryD?: StringFilter<"Damage"> | string
    StartDateD?: DateTimeNullableFilter<"Damage"> | Date | string | null
    EndDateD?: DateTimeNullableFilter<"Damage"> | Date | string | null
    FinancialEstimationD?: DecimalNullableFilter<"Damage"> | Decimal | DecimalJsLike | number | string | null
    CrisisID?: IntNullableFilter<"Damage"> | number | null
    Description?: StringNullableFilter<"Damage"> | string | null
    Radius?: FloatNullableFilter<"Damage"> | number | null
    City?: StringNullableFilter<"Damage"> | string | null
    Crisis?: XOR<CrisisNullableScalarRelationFilter, CrisisWhereInput> | null
    SERVICE?: SERVICEListRelationFilter
    TESTIMONY?: TESTIMONYListRelationFilter
  }, "DamageID">

  export type DamageOrderByWithAggregationInput = {
    DamageID?: SortOrder
    CategoryD?: SortOrder
    StartDateD?: SortOrderInput | SortOrder
    EndDateD?: SortOrderInput | SortOrder
    FinancialEstimationD?: SortOrderInput | SortOrder
    CrisisID?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    Radius?: SortOrderInput | SortOrder
    City?: SortOrderInput | SortOrder
    _count?: DamageCountOrderByAggregateInput
    _avg?: DamageAvgOrderByAggregateInput
    _max?: DamageMaxOrderByAggregateInput
    _min?: DamageMinOrderByAggregateInput
    _sum?: DamageSumOrderByAggregateInput
  }

  export type DamageScalarWhereWithAggregatesInput = {
    AND?: DamageScalarWhereWithAggregatesInput | DamageScalarWhereWithAggregatesInput[]
    OR?: DamageScalarWhereWithAggregatesInput[]
    NOT?: DamageScalarWhereWithAggregatesInput | DamageScalarWhereWithAggregatesInput[]
    DamageID?: IntWithAggregatesFilter<"Damage"> | number
    CategoryD?: StringWithAggregatesFilter<"Damage"> | string
    StartDateD?: DateTimeNullableWithAggregatesFilter<"Damage"> | Date | string | null
    EndDateD?: DateTimeNullableWithAggregatesFilter<"Damage"> | Date | string | null
    FinancialEstimationD?: DecimalNullableWithAggregatesFilter<"Damage"> | Decimal | DecimalJsLike | number | string | null
    CrisisID?: IntNullableWithAggregatesFilter<"Damage"> | number | null
    Description?: StringNullableWithAggregatesFilter<"Damage"> | string | null
    Radius?: FloatNullableWithAggregatesFilter<"Damage"> | number | null
    City?: StringNullableWithAggregatesFilter<"Damage"> | string | null
  }

  export type TESTIMONYWhereInput = {
    AND?: TESTIMONYWhereInput | TESTIMONYWhereInput[]
    OR?: TESTIMONYWhereInput[]
    NOT?: TESTIMONYWhereInput | TESTIMONYWhereInput[]
    testimonyId?: IntFilter<"TESTIMONY"> | number
    contentT?: StringFilter<"TESTIMONY"> | string
    dateT?: DateTimeNullableFilter<"TESTIMONY"> | Date | string | null
    mediaURL?: StringNullableFilter<"TESTIMONY"> | string | null
    damageId?: IntFilter<"TESTIMONY"> | number
    volunteerId?: IntFilter<"TESTIMONY"> | number
    Damage?: XOR<DamageScalarRelationFilter, DamageWhereInput>
    Volunteer?: XOR<VolunteerScalarRelationFilter, VolunteerWhereInput>
  }

  export type TESTIMONYOrderByWithRelationInput = {
    testimonyId?: SortOrder
    contentT?: SortOrder
    dateT?: SortOrderInput | SortOrder
    mediaURL?: SortOrderInput | SortOrder
    damageId?: SortOrder
    volunteerId?: SortOrder
    Damage?: DamageOrderByWithRelationInput
    Volunteer?: VolunteerOrderByWithRelationInput
  }

  export type TESTIMONYWhereUniqueInput = Prisma.AtLeast<{
    testimonyId?: number
    AND?: TESTIMONYWhereInput | TESTIMONYWhereInput[]
    OR?: TESTIMONYWhereInput[]
    NOT?: TESTIMONYWhereInput | TESTIMONYWhereInput[]
    contentT?: StringFilter<"TESTIMONY"> | string
    dateT?: DateTimeNullableFilter<"TESTIMONY"> | Date | string | null
    mediaURL?: StringNullableFilter<"TESTIMONY"> | string | null
    damageId?: IntFilter<"TESTIMONY"> | number
    volunteerId?: IntFilter<"TESTIMONY"> | number
    Damage?: XOR<DamageScalarRelationFilter, DamageWhereInput>
    Volunteer?: XOR<VolunteerScalarRelationFilter, VolunteerWhereInput>
  }, "testimonyId">

  export type TESTIMONYOrderByWithAggregationInput = {
    testimonyId?: SortOrder
    contentT?: SortOrder
    dateT?: SortOrderInput | SortOrder
    mediaURL?: SortOrderInput | SortOrder
    damageId?: SortOrder
    volunteerId?: SortOrder
    _count?: TESTIMONYCountOrderByAggregateInput
    _avg?: TESTIMONYAvgOrderByAggregateInput
    _max?: TESTIMONYMaxOrderByAggregateInput
    _min?: TESTIMONYMinOrderByAggregateInput
    _sum?: TESTIMONYSumOrderByAggregateInput
  }

  export type TESTIMONYScalarWhereWithAggregatesInput = {
    AND?: TESTIMONYScalarWhereWithAggregatesInput | TESTIMONYScalarWhereWithAggregatesInput[]
    OR?: TESTIMONYScalarWhereWithAggregatesInput[]
    NOT?: TESTIMONYScalarWhereWithAggregatesInput | TESTIMONYScalarWhereWithAggregatesInput[]
    testimonyId?: IntWithAggregatesFilter<"TESTIMONY"> | number
    contentT?: StringWithAggregatesFilter<"TESTIMONY"> | string
    dateT?: DateTimeNullableWithAggregatesFilter<"TESTIMONY"> | Date | string | null
    mediaURL?: StringNullableWithAggregatesFilter<"TESTIMONY"> | string | null
    damageId?: IntWithAggregatesFilter<"TESTIMONY"> | number
    volunteerId?: IntWithAggregatesFilter<"TESTIMONY"> | number
  }

  export type SERVICEWhereInput = {
    AND?: SERVICEWhereInput | SERVICEWhereInput[]
    OR?: SERVICEWhereInput[]
    NOT?: SERVICEWhereInput | SERVICEWhereInput[]
    ServiceID?: IntFilter<"SERVICE"> | number
    CategoryS?: StringNullableFilter<"SERVICE"> | string | null
    DescriptionS?: StringNullableFilter<"SERVICE"> | string | null
    StatusS?: StringNullableFilter<"SERVICE"> | string | null
    CostEstimateS?: DecimalNullableFilter<"SERVICE"> | Decimal | DecimalJsLike | number | string | null
    CompletionDateS?: DateTimeNullableFilter<"SERVICE"> | Date | string | null
    ValidityStartS?: DateTimeNullableFilter<"SERVICE"> | Date | string | null
    ValidityEndS?: DateTimeNullableFilter<"SERVICE"> | Date | string | null
    EstimatedDurationS?: StringNullableFilter<"SERVICE"> | string | null
    DamageID?: IntFilter<"SERVICE"> | number
    PROVIDES?: PROVIDESListRelationFilter
    Damage?: XOR<DamageScalarRelationFilter, DamageWhereInput>
  }

  export type SERVICEOrderByWithRelationInput = {
    ServiceID?: SortOrder
    CategoryS?: SortOrderInput | SortOrder
    DescriptionS?: SortOrderInput | SortOrder
    StatusS?: SortOrderInput | SortOrder
    CostEstimateS?: SortOrderInput | SortOrder
    CompletionDateS?: SortOrderInput | SortOrder
    ValidityStartS?: SortOrderInput | SortOrder
    ValidityEndS?: SortOrderInput | SortOrder
    EstimatedDurationS?: SortOrderInput | SortOrder
    DamageID?: SortOrder
    PROVIDES?: PROVIDESOrderByRelationAggregateInput
    Damage?: DamageOrderByWithRelationInput
  }

  export type SERVICEWhereUniqueInput = Prisma.AtLeast<{
    ServiceID?: number
    AND?: SERVICEWhereInput | SERVICEWhereInput[]
    OR?: SERVICEWhereInput[]
    NOT?: SERVICEWhereInput | SERVICEWhereInput[]
    CategoryS?: StringNullableFilter<"SERVICE"> | string | null
    DescriptionS?: StringNullableFilter<"SERVICE"> | string | null
    StatusS?: StringNullableFilter<"SERVICE"> | string | null
    CostEstimateS?: DecimalNullableFilter<"SERVICE"> | Decimal | DecimalJsLike | number | string | null
    CompletionDateS?: DateTimeNullableFilter<"SERVICE"> | Date | string | null
    ValidityStartS?: DateTimeNullableFilter<"SERVICE"> | Date | string | null
    ValidityEndS?: DateTimeNullableFilter<"SERVICE"> | Date | string | null
    EstimatedDurationS?: StringNullableFilter<"SERVICE"> | string | null
    DamageID?: IntFilter<"SERVICE"> | number
    PROVIDES?: PROVIDESListRelationFilter
    Damage?: XOR<DamageScalarRelationFilter, DamageWhereInput>
  }, "ServiceID">

  export type SERVICEOrderByWithAggregationInput = {
    ServiceID?: SortOrder
    CategoryS?: SortOrderInput | SortOrder
    DescriptionS?: SortOrderInput | SortOrder
    StatusS?: SortOrderInput | SortOrder
    CostEstimateS?: SortOrderInput | SortOrder
    CompletionDateS?: SortOrderInput | SortOrder
    ValidityStartS?: SortOrderInput | SortOrder
    ValidityEndS?: SortOrderInput | SortOrder
    EstimatedDurationS?: SortOrderInput | SortOrder
    DamageID?: SortOrder
    _count?: SERVICECountOrderByAggregateInput
    _avg?: SERVICEAvgOrderByAggregateInput
    _max?: SERVICEMaxOrderByAggregateInput
    _min?: SERVICEMinOrderByAggregateInput
    _sum?: SERVICESumOrderByAggregateInput
  }

  export type SERVICEScalarWhereWithAggregatesInput = {
    AND?: SERVICEScalarWhereWithAggregatesInput | SERVICEScalarWhereWithAggregatesInput[]
    OR?: SERVICEScalarWhereWithAggregatesInput[]
    NOT?: SERVICEScalarWhereWithAggregatesInput | SERVICEScalarWhereWithAggregatesInput[]
    ServiceID?: IntWithAggregatesFilter<"SERVICE"> | number
    CategoryS?: StringNullableWithAggregatesFilter<"SERVICE"> | string | null
    DescriptionS?: StringNullableWithAggregatesFilter<"SERVICE"> | string | null
    StatusS?: StringNullableWithAggregatesFilter<"SERVICE"> | string | null
    CostEstimateS?: DecimalNullableWithAggregatesFilter<"SERVICE"> | Decimal | DecimalJsLike | number | string | null
    CompletionDateS?: DateTimeNullableWithAggregatesFilter<"SERVICE"> | Date | string | null
    ValidityStartS?: DateTimeNullableWithAggregatesFilter<"SERVICE"> | Date | string | null
    ValidityEndS?: DateTimeNullableWithAggregatesFilter<"SERVICE"> | Date | string | null
    EstimatedDurationS?: StringNullableWithAggregatesFilter<"SERVICE"> | string | null
    DamageID?: IntWithAggregatesFilter<"SERVICE"> | number
  }

  export type PROVIDESWhereInput = {
    AND?: PROVIDESWhereInput | PROVIDESWhereInput[]
    OR?: PROVIDESWhereInput[]
    NOT?: PROVIDESWhereInput | PROVIDESWhereInput[]
    VolunteerID?: IntFilter<"PROVIDES"> | number
    ServiceID?: IntFilter<"PROVIDES"> | number
    SERVICE?: XOR<SERVICEScalarRelationFilter, SERVICEWhereInput>
    Volunteer?: XOR<VolunteerScalarRelationFilter, VolunteerWhereInput>
  }

  export type PROVIDESOrderByWithRelationInput = {
    VolunteerID?: SortOrder
    ServiceID?: SortOrder
    SERVICE?: SERVICEOrderByWithRelationInput
    Volunteer?: VolunteerOrderByWithRelationInput
  }

  export type PROVIDESWhereUniqueInput = Prisma.AtLeast<{
    VolunteerID_ServiceID?: PROVIDESVolunteerIDServiceIDCompoundUniqueInput
    AND?: PROVIDESWhereInput | PROVIDESWhereInput[]
    OR?: PROVIDESWhereInput[]
    NOT?: PROVIDESWhereInput | PROVIDESWhereInput[]
    VolunteerID?: IntFilter<"PROVIDES"> | number
    ServiceID?: IntFilter<"PROVIDES"> | number
    SERVICE?: XOR<SERVICEScalarRelationFilter, SERVICEWhereInput>
    Volunteer?: XOR<VolunteerScalarRelationFilter, VolunteerWhereInput>
  }, "VolunteerID_ServiceID">

  export type PROVIDESOrderByWithAggregationInput = {
    VolunteerID?: SortOrder
    ServiceID?: SortOrder
    _count?: PROVIDESCountOrderByAggregateInput
    _avg?: PROVIDESAvgOrderByAggregateInput
    _max?: PROVIDESMaxOrderByAggregateInput
    _min?: PROVIDESMinOrderByAggregateInput
    _sum?: PROVIDESSumOrderByAggregateInput
  }

  export type PROVIDESScalarWhereWithAggregatesInput = {
    AND?: PROVIDESScalarWhereWithAggregatesInput | PROVIDESScalarWhereWithAggregatesInput[]
    OR?: PROVIDESScalarWhereWithAggregatesInput[]
    NOT?: PROVIDESScalarWhereWithAggregatesInput | PROVIDESScalarWhereWithAggregatesInput[]
    VolunteerID?: IntWithAggregatesFilter<"PROVIDES"> | number
    ServiceID?: IntWithAggregatesFilter<"PROVIDES"> | number
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
    Citizen?: CitizenCreateNestedOneWithoutVOLInput
    ngo?: NGOCreateNestedOneWithoutVOLLInput
    PROVIDES?: PROVIDESCreateNestedManyWithoutVolunteerInput
    TESTIMONY?: TESTIMONYCreateNestedManyWithoutVolunteerInput
    USER: UserCreateNestedOneWithoutVolunteerInput
  }

  export type VolunteerUncheckedCreateInput = {
    volId?: number
    typeV?: string | null
    phone?: string | null
    AvailabilityV?: string | null
    ReputationScore: Decimal | DecimalJsLike | number | string
    CategoryV?: string | null
    userId: number
    Citizen?: CitizenUncheckedCreateNestedOneWithoutVOLInput
    ngo?: NGOUncheckedCreateNestedOneWithoutVOLLInput
    PROVIDES?: PROVIDESUncheckedCreateNestedManyWithoutVolunteerInput
    TESTIMONY?: TESTIMONYUncheckedCreateNestedManyWithoutVolunteerInput
  }

  export type VolunteerUpdateInput = {
    typeV?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    AvailabilityV?: NullableStringFieldUpdateOperationsInput | string | null
    ReputationScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CategoryV?: NullableStringFieldUpdateOperationsInput | string | null
    Citizen?: CitizenUpdateOneWithoutVOLNestedInput
    ngo?: NGOUpdateOneWithoutVOLLNestedInput
    PROVIDES?: PROVIDESUpdateManyWithoutVolunteerNestedInput
    TESTIMONY?: TESTIMONYUpdateManyWithoutVolunteerNestedInput
    USER?: UserUpdateOneRequiredWithoutVolunteerNestedInput
  }

  export type VolunteerUncheckedUpdateInput = {
    volId?: IntFieldUpdateOperationsInput | number
    typeV?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    AvailabilityV?: NullableStringFieldUpdateOperationsInput | string | null
    ReputationScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CategoryV?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    Citizen?: CitizenUncheckedUpdateOneWithoutVOLNestedInput
    ngo?: NGOUncheckedUpdateOneWithoutVOLLNestedInput
    PROVIDES?: PROVIDESUncheckedUpdateManyWithoutVolunteerNestedInput
    TESTIMONY?: TESTIMONYUncheckedUpdateManyWithoutVolunteerNestedInput
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
    NGOId?: number
    ngoName?: string | null
    ngovolId: number
  }

  export type NGOUpdateInput = {
    ngoName?: NullableStringFieldUpdateOperationsInput | string | null
    VOLL?: VolunteerUpdateOneRequiredWithoutNgoNestedInput
  }

  export type NGOUncheckedUpdateInput = {
    NGOId?: IntFieldUpdateOperationsInput | number
    ngoName?: NullableStringFieldUpdateOperationsInput | string | null
    ngovolId?: IntFieldUpdateOperationsInput | number
  }

  export type NGOCreateManyInput = {
    NGOId?: number
    ngoName?: string | null
    ngovolId: number
  }

  export type NGOUpdateManyMutationInput = {
    ngoName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NGOUncheckedUpdateManyInput = {
    NGOId?: IntFieldUpdateOperationsInput | number
    ngoName?: NullableStringFieldUpdateOperationsInput | string | null
    ngovolId?: IntFieldUpdateOperationsInput | number
  }

  export type spatial_ref_sysCreateInput = {
    srid: number
    auth_name?: string | null
    auth_srid?: number | null
    srtext?: string | null
    proj4text?: string | null
  }

  export type spatial_ref_sysUncheckedCreateInput = {
    srid: number
    auth_name?: string | null
    auth_srid?: number | null
    srtext?: string | null
    proj4text?: string | null
  }

  export type spatial_ref_sysUpdateInput = {
    srid?: IntFieldUpdateOperationsInput | number
    auth_name?: NullableStringFieldUpdateOperationsInput | string | null
    auth_srid?: NullableIntFieldUpdateOperationsInput | number | null
    srtext?: NullableStringFieldUpdateOperationsInput | string | null
    proj4text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type spatial_ref_sysUncheckedUpdateInput = {
    srid?: IntFieldUpdateOperationsInput | number
    auth_name?: NullableStringFieldUpdateOperationsInput | string | null
    auth_srid?: NullableIntFieldUpdateOperationsInput | number | null
    srtext?: NullableStringFieldUpdateOperationsInput | string | null
    proj4text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type spatial_ref_sysCreateManyInput = {
    srid: number
    auth_name?: string | null
    auth_srid?: number | null
    srtext?: string | null
    proj4text?: string | null
  }

  export type spatial_ref_sysUpdateManyMutationInput = {
    srid?: IntFieldUpdateOperationsInput | number
    auth_name?: NullableStringFieldUpdateOperationsInput | string | null
    auth_srid?: NullableIntFieldUpdateOperationsInput | number | null
    srtext?: NullableStringFieldUpdateOperationsInput | string | null
    proj4text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type spatial_ref_sysUncheckedUpdateManyInput = {
    srid?: IntFieldUpdateOperationsInput | number
    auth_name?: NullableStringFieldUpdateOperationsInput | string | null
    auth_srid?: NullableIntFieldUpdateOperationsInput | number | null
    srtext?: NullableStringFieldUpdateOperationsInput | string | null
    proj4text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CrisisCreateInput = {
    Crisisname: string
    CrisisDesc: string
    CrisisStart?: Date | string | null
    CrisisEnd?: Date | string | null
    CrisisCountry?: string | null
    TypeC?: string | null
    Damage?: DamageCreateNestedManyWithoutCrisisInput
  }

  export type CrisisUncheckedCreateInput = {
    CrisisId?: number
    Crisisname: string
    CrisisDesc: string
    CrisisStart?: Date | string | null
    CrisisEnd?: Date | string | null
    CrisisCountry?: string | null
    TypeC?: string | null
    Damage?: DamageUncheckedCreateNestedManyWithoutCrisisInput
  }

  export type CrisisUpdateInput = {
    Crisisname?: StringFieldUpdateOperationsInput | string
    CrisisDesc?: StringFieldUpdateOperationsInput | string
    CrisisStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CrisisEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CrisisCountry?: NullableStringFieldUpdateOperationsInput | string | null
    TypeC?: NullableStringFieldUpdateOperationsInput | string | null
    Damage?: DamageUpdateManyWithoutCrisisNestedInput
  }

  export type CrisisUncheckedUpdateInput = {
    CrisisId?: IntFieldUpdateOperationsInput | number
    Crisisname?: StringFieldUpdateOperationsInput | string
    CrisisDesc?: StringFieldUpdateOperationsInput | string
    CrisisStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CrisisEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CrisisCountry?: NullableStringFieldUpdateOperationsInput | string | null
    TypeC?: NullableStringFieldUpdateOperationsInput | string | null
    Damage?: DamageUncheckedUpdateManyWithoutCrisisNestedInput
  }

  export type CrisisCreateManyInput = {
    CrisisId?: number
    Crisisname: string
    CrisisDesc: string
    CrisisStart?: Date | string | null
    CrisisEnd?: Date | string | null
    CrisisCountry?: string | null
    TypeC?: string | null
  }

  export type CrisisUpdateManyMutationInput = {
    Crisisname?: StringFieldUpdateOperationsInput | string
    CrisisDesc?: StringFieldUpdateOperationsInput | string
    CrisisStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CrisisEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CrisisCountry?: NullableStringFieldUpdateOperationsInput | string | null
    TypeC?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CrisisUncheckedUpdateManyInput = {
    CrisisId?: IntFieldUpdateOperationsInput | number
    Crisisname?: StringFieldUpdateOperationsInput | string
    CrisisDesc?: StringFieldUpdateOperationsInput | string
    CrisisStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CrisisEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CrisisCountry?: NullableStringFieldUpdateOperationsInput | string | null
    TypeC?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DamageCreateInput = {
    CategoryD: string
    StartDateD?: Date | string | null
    EndDateD?: Date | string | null
    FinancialEstimationD?: Decimal | DecimalJsLike | number | string | null
    Description?: string | null
    Radius?: number | null
    City?: string | null
    Crisis?: CrisisCreateNestedOneWithoutDamageInput
    SERVICE?: SERVICECreateNestedManyWithoutDamageInput
    TESTIMONY?: TESTIMONYCreateNestedManyWithoutDamageInput
  }

  export type DamageUncheckedCreateInput = {
    DamageID?: number
    CategoryD: string
    StartDateD?: Date | string | null
    EndDateD?: Date | string | null
    FinancialEstimationD?: Decimal | DecimalJsLike | number | string | null
    CrisisID?: number | null
    Description?: string | null
    Radius?: number | null
    City?: string | null
    SERVICE?: SERVICEUncheckedCreateNestedManyWithoutDamageInput
    TESTIMONY?: TESTIMONYUncheckedCreateNestedManyWithoutDamageInput
  }

  export type DamageUpdateInput = {
    CategoryD?: StringFieldUpdateOperationsInput | string
    StartDateD?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EndDateD?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FinancialEstimationD?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Radius?: NullableFloatFieldUpdateOperationsInput | number | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    Crisis?: CrisisUpdateOneWithoutDamageNestedInput
    SERVICE?: SERVICEUpdateManyWithoutDamageNestedInput
    TESTIMONY?: TESTIMONYUpdateManyWithoutDamageNestedInput
  }

  export type DamageUncheckedUpdateInput = {
    DamageID?: IntFieldUpdateOperationsInput | number
    CategoryD?: StringFieldUpdateOperationsInput | string
    StartDateD?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EndDateD?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FinancialEstimationD?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    CrisisID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Radius?: NullableFloatFieldUpdateOperationsInput | number | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    SERVICE?: SERVICEUncheckedUpdateManyWithoutDamageNestedInput
    TESTIMONY?: TESTIMONYUncheckedUpdateManyWithoutDamageNestedInput
  }

  export type DamageCreateManyInput = {
    DamageID?: number
    CategoryD: string
    StartDateD?: Date | string | null
    EndDateD?: Date | string | null
    FinancialEstimationD?: Decimal | DecimalJsLike | number | string | null
    CrisisID?: number | null
    Description?: string | null
    Radius?: number | null
    City?: string | null
  }

  export type DamageUpdateManyMutationInput = {
    CategoryD?: StringFieldUpdateOperationsInput | string
    StartDateD?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EndDateD?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FinancialEstimationD?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Radius?: NullableFloatFieldUpdateOperationsInput | number | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DamageUncheckedUpdateManyInput = {
    DamageID?: IntFieldUpdateOperationsInput | number
    CategoryD?: StringFieldUpdateOperationsInput | string
    StartDateD?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EndDateD?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FinancialEstimationD?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    CrisisID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Radius?: NullableFloatFieldUpdateOperationsInput | number | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TESTIMONYCreateInput = {
    contentT: string
    dateT?: Date | string | null
    mediaURL?: string | null
    Damage: DamageCreateNestedOneWithoutTESTIMONYInput
    Volunteer: VolunteerCreateNestedOneWithoutTESTIMONYInput
  }

  export type TESTIMONYUncheckedCreateInput = {
    testimonyId?: number
    contentT: string
    dateT?: Date | string | null
    mediaURL?: string | null
    damageId: number
    volunteerId: number
  }

  export type TESTIMONYUpdateInput = {
    contentT?: StringFieldUpdateOperationsInput | string
    dateT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mediaURL?: NullableStringFieldUpdateOperationsInput | string | null
    Damage?: DamageUpdateOneRequiredWithoutTESTIMONYNestedInput
    Volunteer?: VolunteerUpdateOneRequiredWithoutTESTIMONYNestedInput
  }

  export type TESTIMONYUncheckedUpdateInput = {
    testimonyId?: IntFieldUpdateOperationsInput | number
    contentT?: StringFieldUpdateOperationsInput | string
    dateT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mediaURL?: NullableStringFieldUpdateOperationsInput | string | null
    damageId?: IntFieldUpdateOperationsInput | number
    volunteerId?: IntFieldUpdateOperationsInput | number
  }

  export type TESTIMONYCreateManyInput = {
    testimonyId?: number
    contentT: string
    dateT?: Date | string | null
    mediaURL?: string | null
    damageId: number
    volunteerId: number
  }

  export type TESTIMONYUpdateManyMutationInput = {
    contentT?: StringFieldUpdateOperationsInput | string
    dateT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mediaURL?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TESTIMONYUncheckedUpdateManyInput = {
    testimonyId?: IntFieldUpdateOperationsInput | number
    contentT?: StringFieldUpdateOperationsInput | string
    dateT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mediaURL?: NullableStringFieldUpdateOperationsInput | string | null
    damageId?: IntFieldUpdateOperationsInput | number
    volunteerId?: IntFieldUpdateOperationsInput | number
  }

  export type SERVICECreateInput = {
    CategoryS?: string | null
    DescriptionS?: string | null
    StatusS?: string | null
    CostEstimateS?: Decimal | DecimalJsLike | number | string | null
    CompletionDateS?: Date | string | null
    ValidityStartS?: Date | string | null
    ValidityEndS?: Date | string | null
    EstimatedDurationS?: string | null
    PROVIDES?: PROVIDESCreateNestedManyWithoutSERVICEInput
    Damage: DamageCreateNestedOneWithoutSERVICEInput
  }

  export type SERVICEUncheckedCreateInput = {
    ServiceID?: number
    CategoryS?: string | null
    DescriptionS?: string | null
    StatusS?: string | null
    CostEstimateS?: Decimal | DecimalJsLike | number | string | null
    CompletionDateS?: Date | string | null
    ValidityStartS?: Date | string | null
    ValidityEndS?: Date | string | null
    EstimatedDurationS?: string | null
    DamageID: number
    PROVIDES?: PROVIDESUncheckedCreateNestedManyWithoutSERVICEInput
  }

  export type SERVICEUpdateInput = {
    CategoryS?: NullableStringFieldUpdateOperationsInput | string | null
    DescriptionS?: NullableStringFieldUpdateOperationsInput | string | null
    StatusS?: NullableStringFieldUpdateOperationsInput | string | null
    CostEstimateS?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    CompletionDateS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidityStartS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidityEndS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EstimatedDurationS?: NullableStringFieldUpdateOperationsInput | string | null
    PROVIDES?: PROVIDESUpdateManyWithoutSERVICENestedInput
    Damage?: DamageUpdateOneRequiredWithoutSERVICENestedInput
  }

  export type SERVICEUncheckedUpdateInput = {
    ServiceID?: IntFieldUpdateOperationsInput | number
    CategoryS?: NullableStringFieldUpdateOperationsInput | string | null
    DescriptionS?: NullableStringFieldUpdateOperationsInput | string | null
    StatusS?: NullableStringFieldUpdateOperationsInput | string | null
    CostEstimateS?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    CompletionDateS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidityStartS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidityEndS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EstimatedDurationS?: NullableStringFieldUpdateOperationsInput | string | null
    DamageID?: IntFieldUpdateOperationsInput | number
    PROVIDES?: PROVIDESUncheckedUpdateManyWithoutSERVICENestedInput
  }

  export type SERVICECreateManyInput = {
    ServiceID?: number
    CategoryS?: string | null
    DescriptionS?: string | null
    StatusS?: string | null
    CostEstimateS?: Decimal | DecimalJsLike | number | string | null
    CompletionDateS?: Date | string | null
    ValidityStartS?: Date | string | null
    ValidityEndS?: Date | string | null
    EstimatedDurationS?: string | null
    DamageID: number
  }

  export type SERVICEUpdateManyMutationInput = {
    CategoryS?: NullableStringFieldUpdateOperationsInput | string | null
    DescriptionS?: NullableStringFieldUpdateOperationsInput | string | null
    StatusS?: NullableStringFieldUpdateOperationsInput | string | null
    CostEstimateS?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    CompletionDateS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidityStartS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidityEndS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EstimatedDurationS?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SERVICEUncheckedUpdateManyInput = {
    ServiceID?: IntFieldUpdateOperationsInput | number
    CategoryS?: NullableStringFieldUpdateOperationsInput | string | null
    DescriptionS?: NullableStringFieldUpdateOperationsInput | string | null
    StatusS?: NullableStringFieldUpdateOperationsInput | string | null
    CostEstimateS?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    CompletionDateS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidityStartS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidityEndS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EstimatedDurationS?: NullableStringFieldUpdateOperationsInput | string | null
    DamageID?: IntFieldUpdateOperationsInput | number
  }

  export type PROVIDESCreateInput = {
    SERVICE: SERVICECreateNestedOneWithoutPROVIDESInput
    Volunteer: VolunteerCreateNestedOneWithoutPROVIDESInput
  }

  export type PROVIDESUncheckedCreateInput = {
    VolunteerID: number
    ServiceID: number
  }

  export type PROVIDESUpdateInput = {
    SERVICE?: SERVICEUpdateOneRequiredWithoutPROVIDESNestedInput
    Volunteer?: VolunteerUpdateOneRequiredWithoutPROVIDESNestedInput
  }

  export type PROVIDESUncheckedUpdateInput = {
    VolunteerID?: IntFieldUpdateOperationsInput | number
    ServiceID?: IntFieldUpdateOperationsInput | number
  }

  export type PROVIDESCreateManyInput = {
    VolunteerID: number
    ServiceID: number
  }

  export type PROVIDESUpdateManyMutationInput = {

  }

  export type PROVIDESUncheckedUpdateManyInput = {
    VolunteerID?: IntFieldUpdateOperationsInput | number
    ServiceID?: IntFieldUpdateOperationsInput | number
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

  export type CitizenNullableScalarRelationFilter = {
    is?: CitizenWhereInput | null
    isNot?: CitizenWhereInput | null
  }

  export type NGONullableScalarRelationFilter = {
    is?: NGOWhereInput | null
    isNot?: NGOWhereInput | null
  }

  export type PROVIDESListRelationFilter = {
    every?: PROVIDESWhereInput
    some?: PROVIDESWhereInput
    none?: PROVIDESWhereInput
  }

  export type TESTIMONYListRelationFilter = {
    every?: TESTIMONYWhereInput
    some?: TESTIMONYWhereInput
    none?: TESTIMONYWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PROVIDESOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TESTIMONYOrderByRelationAggregateInput = {
    _count?: SortOrder
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
    NGOId?: SortOrder
    ngoName?: SortOrder
    ngovolId?: SortOrder
  }

  export type NGOAvgOrderByAggregateInput = {
    NGOId?: SortOrder
    ngovolId?: SortOrder
  }

  export type NGOMaxOrderByAggregateInput = {
    NGOId?: SortOrder
    ngoName?: SortOrder
    ngovolId?: SortOrder
  }

  export type NGOMinOrderByAggregateInput = {
    NGOId?: SortOrder
    ngoName?: SortOrder
    ngovolId?: SortOrder
  }

  export type NGOSumOrderByAggregateInput = {
    NGOId?: SortOrder
    ngovolId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type spatial_ref_sysCountOrderByAggregateInput = {
    srid?: SortOrder
    auth_name?: SortOrder
    auth_srid?: SortOrder
    srtext?: SortOrder
    proj4text?: SortOrder
  }

  export type spatial_ref_sysAvgOrderByAggregateInput = {
    srid?: SortOrder
    auth_srid?: SortOrder
  }

  export type spatial_ref_sysMaxOrderByAggregateInput = {
    srid?: SortOrder
    auth_name?: SortOrder
    auth_srid?: SortOrder
    srtext?: SortOrder
    proj4text?: SortOrder
  }

  export type spatial_ref_sysMinOrderByAggregateInput = {
    srid?: SortOrder
    auth_name?: SortOrder
    auth_srid?: SortOrder
    srtext?: SortOrder
    proj4text?: SortOrder
  }

  export type spatial_ref_sysSumOrderByAggregateInput = {
    srid?: SortOrder
    auth_srid?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DamageListRelationFilter = {
    every?: DamageWhereInput
    some?: DamageWhereInput
    none?: DamageWhereInput
  }

  export type DamageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CrisisCountOrderByAggregateInput = {
    CrisisId?: SortOrder
    Crisisname?: SortOrder
    CrisisDesc?: SortOrder
    CrisisStart?: SortOrder
    CrisisEnd?: SortOrder
    CrisisCountry?: SortOrder
    TypeC?: SortOrder
  }

  export type CrisisAvgOrderByAggregateInput = {
    CrisisId?: SortOrder
  }

  export type CrisisMaxOrderByAggregateInput = {
    CrisisId?: SortOrder
    Crisisname?: SortOrder
    CrisisDesc?: SortOrder
    CrisisStart?: SortOrder
    CrisisEnd?: SortOrder
    CrisisCountry?: SortOrder
    TypeC?: SortOrder
  }

  export type CrisisMinOrderByAggregateInput = {
    CrisisId?: SortOrder
    Crisisname?: SortOrder
    CrisisDesc?: SortOrder
    CrisisStart?: SortOrder
    CrisisEnd?: SortOrder
    CrisisCountry?: SortOrder
    TypeC?: SortOrder
  }

  export type CrisisSumOrderByAggregateInput = {
    CrisisId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CrisisNullableScalarRelationFilter = {
    is?: CrisisWhereInput | null
    isNot?: CrisisWhereInput | null
  }

  export type SERVICEListRelationFilter = {
    every?: SERVICEWhereInput
    some?: SERVICEWhereInput
    none?: SERVICEWhereInput
  }

  export type SERVICEOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DamageCountOrderByAggregateInput = {
    DamageID?: SortOrder
    CategoryD?: SortOrder
    StartDateD?: SortOrder
    EndDateD?: SortOrder
    FinancialEstimationD?: SortOrder
    CrisisID?: SortOrder
    Description?: SortOrder
    Radius?: SortOrder
    City?: SortOrder
  }

  export type DamageAvgOrderByAggregateInput = {
    DamageID?: SortOrder
    FinancialEstimationD?: SortOrder
    CrisisID?: SortOrder
    Radius?: SortOrder
  }

  export type DamageMaxOrderByAggregateInput = {
    DamageID?: SortOrder
    CategoryD?: SortOrder
    StartDateD?: SortOrder
    EndDateD?: SortOrder
    FinancialEstimationD?: SortOrder
    CrisisID?: SortOrder
    Description?: SortOrder
    Radius?: SortOrder
    City?: SortOrder
  }

  export type DamageMinOrderByAggregateInput = {
    DamageID?: SortOrder
    CategoryD?: SortOrder
    StartDateD?: SortOrder
    EndDateD?: SortOrder
    FinancialEstimationD?: SortOrder
    CrisisID?: SortOrder
    Description?: SortOrder
    Radius?: SortOrder
    City?: SortOrder
  }

  export type DamageSumOrderByAggregateInput = {
    DamageID?: SortOrder
    FinancialEstimationD?: SortOrder
    CrisisID?: SortOrder
    Radius?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DamageScalarRelationFilter = {
    is?: DamageWhereInput
    isNot?: DamageWhereInput
  }

  export type TESTIMONYCountOrderByAggregateInput = {
    testimonyId?: SortOrder
    contentT?: SortOrder
    dateT?: SortOrder
    mediaURL?: SortOrder
    damageId?: SortOrder
    volunteerId?: SortOrder
  }

  export type TESTIMONYAvgOrderByAggregateInput = {
    testimonyId?: SortOrder
    damageId?: SortOrder
    volunteerId?: SortOrder
  }

  export type TESTIMONYMaxOrderByAggregateInput = {
    testimonyId?: SortOrder
    contentT?: SortOrder
    dateT?: SortOrder
    mediaURL?: SortOrder
    damageId?: SortOrder
    volunteerId?: SortOrder
  }

  export type TESTIMONYMinOrderByAggregateInput = {
    testimonyId?: SortOrder
    contentT?: SortOrder
    dateT?: SortOrder
    mediaURL?: SortOrder
    damageId?: SortOrder
    volunteerId?: SortOrder
  }

  export type TESTIMONYSumOrderByAggregateInput = {
    testimonyId?: SortOrder
    damageId?: SortOrder
    volunteerId?: SortOrder
  }

  export type SERVICECountOrderByAggregateInput = {
    ServiceID?: SortOrder
    CategoryS?: SortOrder
    DescriptionS?: SortOrder
    StatusS?: SortOrder
    CostEstimateS?: SortOrder
    CompletionDateS?: SortOrder
    ValidityStartS?: SortOrder
    ValidityEndS?: SortOrder
    EstimatedDurationS?: SortOrder
    DamageID?: SortOrder
  }

  export type SERVICEAvgOrderByAggregateInput = {
    ServiceID?: SortOrder
    CostEstimateS?: SortOrder
    DamageID?: SortOrder
  }

  export type SERVICEMaxOrderByAggregateInput = {
    ServiceID?: SortOrder
    CategoryS?: SortOrder
    DescriptionS?: SortOrder
    StatusS?: SortOrder
    CostEstimateS?: SortOrder
    CompletionDateS?: SortOrder
    ValidityStartS?: SortOrder
    ValidityEndS?: SortOrder
    EstimatedDurationS?: SortOrder
    DamageID?: SortOrder
  }

  export type SERVICEMinOrderByAggregateInput = {
    ServiceID?: SortOrder
    CategoryS?: SortOrder
    DescriptionS?: SortOrder
    StatusS?: SortOrder
    CostEstimateS?: SortOrder
    CompletionDateS?: SortOrder
    ValidityStartS?: SortOrder
    ValidityEndS?: SortOrder
    EstimatedDurationS?: SortOrder
    DamageID?: SortOrder
  }

  export type SERVICESumOrderByAggregateInput = {
    ServiceID?: SortOrder
    CostEstimateS?: SortOrder
    DamageID?: SortOrder
  }

  export type SERVICEScalarRelationFilter = {
    is?: SERVICEWhereInput
    isNot?: SERVICEWhereInput
  }

  export type PROVIDESVolunteerIDServiceIDCompoundUniqueInput = {
    VolunteerID: number
    ServiceID: number
  }

  export type PROVIDESCountOrderByAggregateInput = {
    VolunteerID?: SortOrder
    ServiceID?: SortOrder
  }

  export type PROVIDESAvgOrderByAggregateInput = {
    VolunteerID?: SortOrder
    ServiceID?: SortOrder
  }

  export type PROVIDESMaxOrderByAggregateInput = {
    VolunteerID?: SortOrder
    ServiceID?: SortOrder
  }

  export type PROVIDESMinOrderByAggregateInput = {
    VolunteerID?: SortOrder
    ServiceID?: SortOrder
  }

  export type PROVIDESSumOrderByAggregateInput = {
    VolunteerID?: SortOrder
    ServiceID?: SortOrder
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

  export type PROVIDESCreateNestedManyWithoutVolunteerInput = {
    create?: XOR<PROVIDESCreateWithoutVolunteerInput, PROVIDESUncheckedCreateWithoutVolunteerInput> | PROVIDESCreateWithoutVolunteerInput[] | PROVIDESUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: PROVIDESCreateOrConnectWithoutVolunteerInput | PROVIDESCreateOrConnectWithoutVolunteerInput[]
    createMany?: PROVIDESCreateManyVolunteerInputEnvelope
    connect?: PROVIDESWhereUniqueInput | PROVIDESWhereUniqueInput[]
  }

  export type TESTIMONYCreateNestedManyWithoutVolunteerInput = {
    create?: XOR<TESTIMONYCreateWithoutVolunteerInput, TESTIMONYUncheckedCreateWithoutVolunteerInput> | TESTIMONYCreateWithoutVolunteerInput[] | TESTIMONYUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: TESTIMONYCreateOrConnectWithoutVolunteerInput | TESTIMONYCreateOrConnectWithoutVolunteerInput[]
    createMany?: TESTIMONYCreateManyVolunteerInputEnvelope
    connect?: TESTIMONYWhereUniqueInput | TESTIMONYWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutVolunteerInput = {
    create?: XOR<UserCreateWithoutVolunteerInput, UserUncheckedCreateWithoutVolunteerInput>
    connectOrCreate?: UserCreateOrConnectWithoutVolunteerInput
    connect?: UserWhereUniqueInput
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

  export type PROVIDESUncheckedCreateNestedManyWithoutVolunteerInput = {
    create?: XOR<PROVIDESCreateWithoutVolunteerInput, PROVIDESUncheckedCreateWithoutVolunteerInput> | PROVIDESCreateWithoutVolunteerInput[] | PROVIDESUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: PROVIDESCreateOrConnectWithoutVolunteerInput | PROVIDESCreateOrConnectWithoutVolunteerInput[]
    createMany?: PROVIDESCreateManyVolunteerInputEnvelope
    connect?: PROVIDESWhereUniqueInput | PROVIDESWhereUniqueInput[]
  }

  export type TESTIMONYUncheckedCreateNestedManyWithoutVolunteerInput = {
    create?: XOR<TESTIMONYCreateWithoutVolunteerInput, TESTIMONYUncheckedCreateWithoutVolunteerInput> | TESTIMONYCreateWithoutVolunteerInput[] | TESTIMONYUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: TESTIMONYCreateOrConnectWithoutVolunteerInput | TESTIMONYCreateOrConnectWithoutVolunteerInput[]
    createMany?: TESTIMONYCreateManyVolunteerInputEnvelope
    connect?: TESTIMONYWhereUniqueInput | TESTIMONYWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
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

  export type PROVIDESUpdateManyWithoutVolunteerNestedInput = {
    create?: XOR<PROVIDESCreateWithoutVolunteerInput, PROVIDESUncheckedCreateWithoutVolunteerInput> | PROVIDESCreateWithoutVolunteerInput[] | PROVIDESUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: PROVIDESCreateOrConnectWithoutVolunteerInput | PROVIDESCreateOrConnectWithoutVolunteerInput[]
    upsert?: PROVIDESUpsertWithWhereUniqueWithoutVolunteerInput | PROVIDESUpsertWithWhereUniqueWithoutVolunteerInput[]
    createMany?: PROVIDESCreateManyVolunteerInputEnvelope
    set?: PROVIDESWhereUniqueInput | PROVIDESWhereUniqueInput[]
    disconnect?: PROVIDESWhereUniqueInput | PROVIDESWhereUniqueInput[]
    delete?: PROVIDESWhereUniqueInput | PROVIDESWhereUniqueInput[]
    connect?: PROVIDESWhereUniqueInput | PROVIDESWhereUniqueInput[]
    update?: PROVIDESUpdateWithWhereUniqueWithoutVolunteerInput | PROVIDESUpdateWithWhereUniqueWithoutVolunteerInput[]
    updateMany?: PROVIDESUpdateManyWithWhereWithoutVolunteerInput | PROVIDESUpdateManyWithWhereWithoutVolunteerInput[]
    deleteMany?: PROVIDESScalarWhereInput | PROVIDESScalarWhereInput[]
  }

  export type TESTIMONYUpdateManyWithoutVolunteerNestedInput = {
    create?: XOR<TESTIMONYCreateWithoutVolunteerInput, TESTIMONYUncheckedCreateWithoutVolunteerInput> | TESTIMONYCreateWithoutVolunteerInput[] | TESTIMONYUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: TESTIMONYCreateOrConnectWithoutVolunteerInput | TESTIMONYCreateOrConnectWithoutVolunteerInput[]
    upsert?: TESTIMONYUpsertWithWhereUniqueWithoutVolunteerInput | TESTIMONYUpsertWithWhereUniqueWithoutVolunteerInput[]
    createMany?: TESTIMONYCreateManyVolunteerInputEnvelope
    set?: TESTIMONYWhereUniqueInput | TESTIMONYWhereUniqueInput[]
    disconnect?: TESTIMONYWhereUniqueInput | TESTIMONYWhereUniqueInput[]
    delete?: TESTIMONYWhereUniqueInput | TESTIMONYWhereUniqueInput[]
    connect?: TESTIMONYWhereUniqueInput | TESTIMONYWhereUniqueInput[]
    update?: TESTIMONYUpdateWithWhereUniqueWithoutVolunteerInput | TESTIMONYUpdateWithWhereUniqueWithoutVolunteerInput[]
    updateMany?: TESTIMONYUpdateManyWithWhereWithoutVolunteerInput | TESTIMONYUpdateManyWithWhereWithoutVolunteerInput[]
    deleteMany?: TESTIMONYScalarWhereInput | TESTIMONYScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutVolunteerNestedInput = {
    create?: XOR<UserCreateWithoutVolunteerInput, UserUncheckedCreateWithoutVolunteerInput>
    connectOrCreate?: UserCreateOrConnectWithoutVolunteerInput
    upsert?: UserUpsertWithoutVolunteerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVolunteerInput, UserUpdateWithoutVolunteerInput>, UserUncheckedUpdateWithoutVolunteerInput>
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

  export type PROVIDESUncheckedUpdateManyWithoutVolunteerNestedInput = {
    create?: XOR<PROVIDESCreateWithoutVolunteerInput, PROVIDESUncheckedCreateWithoutVolunteerInput> | PROVIDESCreateWithoutVolunteerInput[] | PROVIDESUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: PROVIDESCreateOrConnectWithoutVolunteerInput | PROVIDESCreateOrConnectWithoutVolunteerInput[]
    upsert?: PROVIDESUpsertWithWhereUniqueWithoutVolunteerInput | PROVIDESUpsertWithWhereUniqueWithoutVolunteerInput[]
    createMany?: PROVIDESCreateManyVolunteerInputEnvelope
    set?: PROVIDESWhereUniqueInput | PROVIDESWhereUniqueInput[]
    disconnect?: PROVIDESWhereUniqueInput | PROVIDESWhereUniqueInput[]
    delete?: PROVIDESWhereUniqueInput | PROVIDESWhereUniqueInput[]
    connect?: PROVIDESWhereUniqueInput | PROVIDESWhereUniqueInput[]
    update?: PROVIDESUpdateWithWhereUniqueWithoutVolunteerInput | PROVIDESUpdateWithWhereUniqueWithoutVolunteerInput[]
    updateMany?: PROVIDESUpdateManyWithWhereWithoutVolunteerInput | PROVIDESUpdateManyWithWhereWithoutVolunteerInput[]
    deleteMany?: PROVIDESScalarWhereInput | PROVIDESScalarWhereInput[]
  }

  export type TESTIMONYUncheckedUpdateManyWithoutVolunteerNestedInput = {
    create?: XOR<TESTIMONYCreateWithoutVolunteerInput, TESTIMONYUncheckedCreateWithoutVolunteerInput> | TESTIMONYCreateWithoutVolunteerInput[] | TESTIMONYUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: TESTIMONYCreateOrConnectWithoutVolunteerInput | TESTIMONYCreateOrConnectWithoutVolunteerInput[]
    upsert?: TESTIMONYUpsertWithWhereUniqueWithoutVolunteerInput | TESTIMONYUpsertWithWhereUniqueWithoutVolunteerInput[]
    createMany?: TESTIMONYCreateManyVolunteerInputEnvelope
    set?: TESTIMONYWhereUniqueInput | TESTIMONYWhereUniqueInput[]
    disconnect?: TESTIMONYWhereUniqueInput | TESTIMONYWhereUniqueInput[]
    delete?: TESTIMONYWhereUniqueInput | TESTIMONYWhereUniqueInput[]
    connect?: TESTIMONYWhereUniqueInput | TESTIMONYWhereUniqueInput[]
    update?: TESTIMONYUpdateWithWhereUniqueWithoutVolunteerInput | TESTIMONYUpdateWithWhereUniqueWithoutVolunteerInput[]
    updateMany?: TESTIMONYUpdateManyWithWhereWithoutVolunteerInput | TESTIMONYUpdateManyWithWhereWithoutVolunteerInput[]
    deleteMany?: TESTIMONYScalarWhereInput | TESTIMONYScalarWhereInput[]
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

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DamageCreateNestedManyWithoutCrisisInput = {
    create?: XOR<DamageCreateWithoutCrisisInput, DamageUncheckedCreateWithoutCrisisInput> | DamageCreateWithoutCrisisInput[] | DamageUncheckedCreateWithoutCrisisInput[]
    connectOrCreate?: DamageCreateOrConnectWithoutCrisisInput | DamageCreateOrConnectWithoutCrisisInput[]
    createMany?: DamageCreateManyCrisisInputEnvelope
    connect?: DamageWhereUniqueInput | DamageWhereUniqueInput[]
  }

  export type DamageUncheckedCreateNestedManyWithoutCrisisInput = {
    create?: XOR<DamageCreateWithoutCrisisInput, DamageUncheckedCreateWithoutCrisisInput> | DamageCreateWithoutCrisisInput[] | DamageUncheckedCreateWithoutCrisisInput[]
    connectOrCreate?: DamageCreateOrConnectWithoutCrisisInput | DamageCreateOrConnectWithoutCrisisInput[]
    createMany?: DamageCreateManyCrisisInputEnvelope
    connect?: DamageWhereUniqueInput | DamageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DamageUpdateManyWithoutCrisisNestedInput = {
    create?: XOR<DamageCreateWithoutCrisisInput, DamageUncheckedCreateWithoutCrisisInput> | DamageCreateWithoutCrisisInput[] | DamageUncheckedCreateWithoutCrisisInput[]
    connectOrCreate?: DamageCreateOrConnectWithoutCrisisInput | DamageCreateOrConnectWithoutCrisisInput[]
    upsert?: DamageUpsertWithWhereUniqueWithoutCrisisInput | DamageUpsertWithWhereUniqueWithoutCrisisInput[]
    createMany?: DamageCreateManyCrisisInputEnvelope
    set?: DamageWhereUniqueInput | DamageWhereUniqueInput[]
    disconnect?: DamageWhereUniqueInput | DamageWhereUniqueInput[]
    delete?: DamageWhereUniqueInput | DamageWhereUniqueInput[]
    connect?: DamageWhereUniqueInput | DamageWhereUniqueInput[]
    update?: DamageUpdateWithWhereUniqueWithoutCrisisInput | DamageUpdateWithWhereUniqueWithoutCrisisInput[]
    updateMany?: DamageUpdateManyWithWhereWithoutCrisisInput | DamageUpdateManyWithWhereWithoutCrisisInput[]
    deleteMany?: DamageScalarWhereInput | DamageScalarWhereInput[]
  }

  export type DamageUncheckedUpdateManyWithoutCrisisNestedInput = {
    create?: XOR<DamageCreateWithoutCrisisInput, DamageUncheckedCreateWithoutCrisisInput> | DamageCreateWithoutCrisisInput[] | DamageUncheckedCreateWithoutCrisisInput[]
    connectOrCreate?: DamageCreateOrConnectWithoutCrisisInput | DamageCreateOrConnectWithoutCrisisInput[]
    upsert?: DamageUpsertWithWhereUniqueWithoutCrisisInput | DamageUpsertWithWhereUniqueWithoutCrisisInput[]
    createMany?: DamageCreateManyCrisisInputEnvelope
    set?: DamageWhereUniqueInput | DamageWhereUniqueInput[]
    disconnect?: DamageWhereUniqueInput | DamageWhereUniqueInput[]
    delete?: DamageWhereUniqueInput | DamageWhereUniqueInput[]
    connect?: DamageWhereUniqueInput | DamageWhereUniqueInput[]
    update?: DamageUpdateWithWhereUniqueWithoutCrisisInput | DamageUpdateWithWhereUniqueWithoutCrisisInput[]
    updateMany?: DamageUpdateManyWithWhereWithoutCrisisInput | DamageUpdateManyWithWhereWithoutCrisisInput[]
    deleteMany?: DamageScalarWhereInput | DamageScalarWhereInput[]
  }

  export type CrisisCreateNestedOneWithoutDamageInput = {
    create?: XOR<CrisisCreateWithoutDamageInput, CrisisUncheckedCreateWithoutDamageInput>
    connectOrCreate?: CrisisCreateOrConnectWithoutDamageInput
    connect?: CrisisWhereUniqueInput
  }

  export type SERVICECreateNestedManyWithoutDamageInput = {
    create?: XOR<SERVICECreateWithoutDamageInput, SERVICEUncheckedCreateWithoutDamageInput> | SERVICECreateWithoutDamageInput[] | SERVICEUncheckedCreateWithoutDamageInput[]
    connectOrCreate?: SERVICECreateOrConnectWithoutDamageInput | SERVICECreateOrConnectWithoutDamageInput[]
    createMany?: SERVICECreateManyDamageInputEnvelope
    connect?: SERVICEWhereUniqueInput | SERVICEWhereUniqueInput[]
  }

  export type TESTIMONYCreateNestedManyWithoutDamageInput = {
    create?: XOR<TESTIMONYCreateWithoutDamageInput, TESTIMONYUncheckedCreateWithoutDamageInput> | TESTIMONYCreateWithoutDamageInput[] | TESTIMONYUncheckedCreateWithoutDamageInput[]
    connectOrCreate?: TESTIMONYCreateOrConnectWithoutDamageInput | TESTIMONYCreateOrConnectWithoutDamageInput[]
    createMany?: TESTIMONYCreateManyDamageInputEnvelope
    connect?: TESTIMONYWhereUniqueInput | TESTIMONYWhereUniqueInput[]
  }

  export type SERVICEUncheckedCreateNestedManyWithoutDamageInput = {
    create?: XOR<SERVICECreateWithoutDamageInput, SERVICEUncheckedCreateWithoutDamageInput> | SERVICECreateWithoutDamageInput[] | SERVICEUncheckedCreateWithoutDamageInput[]
    connectOrCreate?: SERVICECreateOrConnectWithoutDamageInput | SERVICECreateOrConnectWithoutDamageInput[]
    createMany?: SERVICECreateManyDamageInputEnvelope
    connect?: SERVICEWhereUniqueInput | SERVICEWhereUniqueInput[]
  }

  export type TESTIMONYUncheckedCreateNestedManyWithoutDamageInput = {
    create?: XOR<TESTIMONYCreateWithoutDamageInput, TESTIMONYUncheckedCreateWithoutDamageInput> | TESTIMONYCreateWithoutDamageInput[] | TESTIMONYUncheckedCreateWithoutDamageInput[]
    connectOrCreate?: TESTIMONYCreateOrConnectWithoutDamageInput | TESTIMONYCreateOrConnectWithoutDamageInput[]
    createMany?: TESTIMONYCreateManyDamageInputEnvelope
    connect?: TESTIMONYWhereUniqueInput | TESTIMONYWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CrisisUpdateOneWithoutDamageNestedInput = {
    create?: XOR<CrisisCreateWithoutDamageInput, CrisisUncheckedCreateWithoutDamageInput>
    connectOrCreate?: CrisisCreateOrConnectWithoutDamageInput
    upsert?: CrisisUpsertWithoutDamageInput
    disconnect?: CrisisWhereInput | boolean
    delete?: CrisisWhereInput | boolean
    connect?: CrisisWhereUniqueInput
    update?: XOR<XOR<CrisisUpdateToOneWithWhereWithoutDamageInput, CrisisUpdateWithoutDamageInput>, CrisisUncheckedUpdateWithoutDamageInput>
  }

  export type SERVICEUpdateManyWithoutDamageNestedInput = {
    create?: XOR<SERVICECreateWithoutDamageInput, SERVICEUncheckedCreateWithoutDamageInput> | SERVICECreateWithoutDamageInput[] | SERVICEUncheckedCreateWithoutDamageInput[]
    connectOrCreate?: SERVICECreateOrConnectWithoutDamageInput | SERVICECreateOrConnectWithoutDamageInput[]
    upsert?: SERVICEUpsertWithWhereUniqueWithoutDamageInput | SERVICEUpsertWithWhereUniqueWithoutDamageInput[]
    createMany?: SERVICECreateManyDamageInputEnvelope
    set?: SERVICEWhereUniqueInput | SERVICEWhereUniqueInput[]
    disconnect?: SERVICEWhereUniqueInput | SERVICEWhereUniqueInput[]
    delete?: SERVICEWhereUniqueInput | SERVICEWhereUniqueInput[]
    connect?: SERVICEWhereUniqueInput | SERVICEWhereUniqueInput[]
    update?: SERVICEUpdateWithWhereUniqueWithoutDamageInput | SERVICEUpdateWithWhereUniqueWithoutDamageInput[]
    updateMany?: SERVICEUpdateManyWithWhereWithoutDamageInput | SERVICEUpdateManyWithWhereWithoutDamageInput[]
    deleteMany?: SERVICEScalarWhereInput | SERVICEScalarWhereInput[]
  }

  export type TESTIMONYUpdateManyWithoutDamageNestedInput = {
    create?: XOR<TESTIMONYCreateWithoutDamageInput, TESTIMONYUncheckedCreateWithoutDamageInput> | TESTIMONYCreateWithoutDamageInput[] | TESTIMONYUncheckedCreateWithoutDamageInput[]
    connectOrCreate?: TESTIMONYCreateOrConnectWithoutDamageInput | TESTIMONYCreateOrConnectWithoutDamageInput[]
    upsert?: TESTIMONYUpsertWithWhereUniqueWithoutDamageInput | TESTIMONYUpsertWithWhereUniqueWithoutDamageInput[]
    createMany?: TESTIMONYCreateManyDamageInputEnvelope
    set?: TESTIMONYWhereUniqueInput | TESTIMONYWhereUniqueInput[]
    disconnect?: TESTIMONYWhereUniqueInput | TESTIMONYWhereUniqueInput[]
    delete?: TESTIMONYWhereUniqueInput | TESTIMONYWhereUniqueInput[]
    connect?: TESTIMONYWhereUniqueInput | TESTIMONYWhereUniqueInput[]
    update?: TESTIMONYUpdateWithWhereUniqueWithoutDamageInput | TESTIMONYUpdateWithWhereUniqueWithoutDamageInput[]
    updateMany?: TESTIMONYUpdateManyWithWhereWithoutDamageInput | TESTIMONYUpdateManyWithWhereWithoutDamageInput[]
    deleteMany?: TESTIMONYScalarWhereInput | TESTIMONYScalarWhereInput[]
  }

  export type SERVICEUncheckedUpdateManyWithoutDamageNestedInput = {
    create?: XOR<SERVICECreateWithoutDamageInput, SERVICEUncheckedCreateWithoutDamageInput> | SERVICECreateWithoutDamageInput[] | SERVICEUncheckedCreateWithoutDamageInput[]
    connectOrCreate?: SERVICECreateOrConnectWithoutDamageInput | SERVICECreateOrConnectWithoutDamageInput[]
    upsert?: SERVICEUpsertWithWhereUniqueWithoutDamageInput | SERVICEUpsertWithWhereUniqueWithoutDamageInput[]
    createMany?: SERVICECreateManyDamageInputEnvelope
    set?: SERVICEWhereUniqueInput | SERVICEWhereUniqueInput[]
    disconnect?: SERVICEWhereUniqueInput | SERVICEWhereUniqueInput[]
    delete?: SERVICEWhereUniqueInput | SERVICEWhereUniqueInput[]
    connect?: SERVICEWhereUniqueInput | SERVICEWhereUniqueInput[]
    update?: SERVICEUpdateWithWhereUniqueWithoutDamageInput | SERVICEUpdateWithWhereUniqueWithoutDamageInput[]
    updateMany?: SERVICEUpdateManyWithWhereWithoutDamageInput | SERVICEUpdateManyWithWhereWithoutDamageInput[]
    deleteMany?: SERVICEScalarWhereInput | SERVICEScalarWhereInput[]
  }

  export type TESTIMONYUncheckedUpdateManyWithoutDamageNestedInput = {
    create?: XOR<TESTIMONYCreateWithoutDamageInput, TESTIMONYUncheckedCreateWithoutDamageInput> | TESTIMONYCreateWithoutDamageInput[] | TESTIMONYUncheckedCreateWithoutDamageInput[]
    connectOrCreate?: TESTIMONYCreateOrConnectWithoutDamageInput | TESTIMONYCreateOrConnectWithoutDamageInput[]
    upsert?: TESTIMONYUpsertWithWhereUniqueWithoutDamageInput | TESTIMONYUpsertWithWhereUniqueWithoutDamageInput[]
    createMany?: TESTIMONYCreateManyDamageInputEnvelope
    set?: TESTIMONYWhereUniqueInput | TESTIMONYWhereUniqueInput[]
    disconnect?: TESTIMONYWhereUniqueInput | TESTIMONYWhereUniqueInput[]
    delete?: TESTIMONYWhereUniqueInput | TESTIMONYWhereUniqueInput[]
    connect?: TESTIMONYWhereUniqueInput | TESTIMONYWhereUniqueInput[]
    update?: TESTIMONYUpdateWithWhereUniqueWithoutDamageInput | TESTIMONYUpdateWithWhereUniqueWithoutDamageInput[]
    updateMany?: TESTIMONYUpdateManyWithWhereWithoutDamageInput | TESTIMONYUpdateManyWithWhereWithoutDamageInput[]
    deleteMany?: TESTIMONYScalarWhereInput | TESTIMONYScalarWhereInput[]
  }

  export type DamageCreateNestedOneWithoutTESTIMONYInput = {
    create?: XOR<DamageCreateWithoutTESTIMONYInput, DamageUncheckedCreateWithoutTESTIMONYInput>
    connectOrCreate?: DamageCreateOrConnectWithoutTESTIMONYInput
    connect?: DamageWhereUniqueInput
  }

  export type VolunteerCreateNestedOneWithoutTESTIMONYInput = {
    create?: XOR<VolunteerCreateWithoutTESTIMONYInput, VolunteerUncheckedCreateWithoutTESTIMONYInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutTESTIMONYInput
    connect?: VolunteerWhereUniqueInput
  }

  export type DamageUpdateOneRequiredWithoutTESTIMONYNestedInput = {
    create?: XOR<DamageCreateWithoutTESTIMONYInput, DamageUncheckedCreateWithoutTESTIMONYInput>
    connectOrCreate?: DamageCreateOrConnectWithoutTESTIMONYInput
    upsert?: DamageUpsertWithoutTESTIMONYInput
    connect?: DamageWhereUniqueInput
    update?: XOR<XOR<DamageUpdateToOneWithWhereWithoutTESTIMONYInput, DamageUpdateWithoutTESTIMONYInput>, DamageUncheckedUpdateWithoutTESTIMONYInput>
  }

  export type VolunteerUpdateOneRequiredWithoutTESTIMONYNestedInput = {
    create?: XOR<VolunteerCreateWithoutTESTIMONYInput, VolunteerUncheckedCreateWithoutTESTIMONYInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutTESTIMONYInput
    upsert?: VolunteerUpsertWithoutTESTIMONYInput
    connect?: VolunteerWhereUniqueInput
    update?: XOR<XOR<VolunteerUpdateToOneWithWhereWithoutTESTIMONYInput, VolunteerUpdateWithoutTESTIMONYInput>, VolunteerUncheckedUpdateWithoutTESTIMONYInput>
  }

  export type PROVIDESCreateNestedManyWithoutSERVICEInput = {
    create?: XOR<PROVIDESCreateWithoutSERVICEInput, PROVIDESUncheckedCreateWithoutSERVICEInput> | PROVIDESCreateWithoutSERVICEInput[] | PROVIDESUncheckedCreateWithoutSERVICEInput[]
    connectOrCreate?: PROVIDESCreateOrConnectWithoutSERVICEInput | PROVIDESCreateOrConnectWithoutSERVICEInput[]
    createMany?: PROVIDESCreateManySERVICEInputEnvelope
    connect?: PROVIDESWhereUniqueInput | PROVIDESWhereUniqueInput[]
  }

  export type DamageCreateNestedOneWithoutSERVICEInput = {
    create?: XOR<DamageCreateWithoutSERVICEInput, DamageUncheckedCreateWithoutSERVICEInput>
    connectOrCreate?: DamageCreateOrConnectWithoutSERVICEInput
    connect?: DamageWhereUniqueInput
  }

  export type PROVIDESUncheckedCreateNestedManyWithoutSERVICEInput = {
    create?: XOR<PROVIDESCreateWithoutSERVICEInput, PROVIDESUncheckedCreateWithoutSERVICEInput> | PROVIDESCreateWithoutSERVICEInput[] | PROVIDESUncheckedCreateWithoutSERVICEInput[]
    connectOrCreate?: PROVIDESCreateOrConnectWithoutSERVICEInput | PROVIDESCreateOrConnectWithoutSERVICEInput[]
    createMany?: PROVIDESCreateManySERVICEInputEnvelope
    connect?: PROVIDESWhereUniqueInput | PROVIDESWhereUniqueInput[]
  }

  export type PROVIDESUpdateManyWithoutSERVICENestedInput = {
    create?: XOR<PROVIDESCreateWithoutSERVICEInput, PROVIDESUncheckedCreateWithoutSERVICEInput> | PROVIDESCreateWithoutSERVICEInput[] | PROVIDESUncheckedCreateWithoutSERVICEInput[]
    connectOrCreate?: PROVIDESCreateOrConnectWithoutSERVICEInput | PROVIDESCreateOrConnectWithoutSERVICEInput[]
    upsert?: PROVIDESUpsertWithWhereUniqueWithoutSERVICEInput | PROVIDESUpsertWithWhereUniqueWithoutSERVICEInput[]
    createMany?: PROVIDESCreateManySERVICEInputEnvelope
    set?: PROVIDESWhereUniqueInput | PROVIDESWhereUniqueInput[]
    disconnect?: PROVIDESWhereUniqueInput | PROVIDESWhereUniqueInput[]
    delete?: PROVIDESWhereUniqueInput | PROVIDESWhereUniqueInput[]
    connect?: PROVIDESWhereUniqueInput | PROVIDESWhereUniqueInput[]
    update?: PROVIDESUpdateWithWhereUniqueWithoutSERVICEInput | PROVIDESUpdateWithWhereUniqueWithoutSERVICEInput[]
    updateMany?: PROVIDESUpdateManyWithWhereWithoutSERVICEInput | PROVIDESUpdateManyWithWhereWithoutSERVICEInput[]
    deleteMany?: PROVIDESScalarWhereInput | PROVIDESScalarWhereInput[]
  }

  export type DamageUpdateOneRequiredWithoutSERVICENestedInput = {
    create?: XOR<DamageCreateWithoutSERVICEInput, DamageUncheckedCreateWithoutSERVICEInput>
    connectOrCreate?: DamageCreateOrConnectWithoutSERVICEInput
    upsert?: DamageUpsertWithoutSERVICEInput
    connect?: DamageWhereUniqueInput
    update?: XOR<XOR<DamageUpdateToOneWithWhereWithoutSERVICEInput, DamageUpdateWithoutSERVICEInput>, DamageUncheckedUpdateWithoutSERVICEInput>
  }

  export type PROVIDESUncheckedUpdateManyWithoutSERVICENestedInput = {
    create?: XOR<PROVIDESCreateWithoutSERVICEInput, PROVIDESUncheckedCreateWithoutSERVICEInput> | PROVIDESCreateWithoutSERVICEInput[] | PROVIDESUncheckedCreateWithoutSERVICEInput[]
    connectOrCreate?: PROVIDESCreateOrConnectWithoutSERVICEInput | PROVIDESCreateOrConnectWithoutSERVICEInput[]
    upsert?: PROVIDESUpsertWithWhereUniqueWithoutSERVICEInput | PROVIDESUpsertWithWhereUniqueWithoutSERVICEInput[]
    createMany?: PROVIDESCreateManySERVICEInputEnvelope
    set?: PROVIDESWhereUniqueInput | PROVIDESWhereUniqueInput[]
    disconnect?: PROVIDESWhereUniqueInput | PROVIDESWhereUniqueInput[]
    delete?: PROVIDESWhereUniqueInput | PROVIDESWhereUniqueInput[]
    connect?: PROVIDESWhereUniqueInput | PROVIDESWhereUniqueInput[]
    update?: PROVIDESUpdateWithWhereUniqueWithoutSERVICEInput | PROVIDESUpdateWithWhereUniqueWithoutSERVICEInput[]
    updateMany?: PROVIDESUpdateManyWithWhereWithoutSERVICEInput | PROVIDESUpdateManyWithWhereWithoutSERVICEInput[]
    deleteMany?: PROVIDESScalarWhereInput | PROVIDESScalarWhereInput[]
  }

  export type SERVICECreateNestedOneWithoutPROVIDESInput = {
    create?: XOR<SERVICECreateWithoutPROVIDESInput, SERVICEUncheckedCreateWithoutPROVIDESInput>
    connectOrCreate?: SERVICECreateOrConnectWithoutPROVIDESInput
    connect?: SERVICEWhereUniqueInput
  }

  export type VolunteerCreateNestedOneWithoutPROVIDESInput = {
    create?: XOR<VolunteerCreateWithoutPROVIDESInput, VolunteerUncheckedCreateWithoutPROVIDESInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutPROVIDESInput
    connect?: VolunteerWhereUniqueInput
  }

  export type SERVICEUpdateOneRequiredWithoutPROVIDESNestedInput = {
    create?: XOR<SERVICECreateWithoutPROVIDESInput, SERVICEUncheckedCreateWithoutPROVIDESInput>
    connectOrCreate?: SERVICECreateOrConnectWithoutPROVIDESInput
    upsert?: SERVICEUpsertWithoutPROVIDESInput
    connect?: SERVICEWhereUniqueInput
    update?: XOR<XOR<SERVICEUpdateToOneWithWhereWithoutPROVIDESInput, SERVICEUpdateWithoutPROVIDESInput>, SERVICEUncheckedUpdateWithoutPROVIDESInput>
  }

  export type VolunteerUpdateOneRequiredWithoutPROVIDESNestedInput = {
    create?: XOR<VolunteerCreateWithoutPROVIDESInput, VolunteerUncheckedCreateWithoutPROVIDESInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutPROVIDESInput
    upsert?: VolunteerUpsertWithoutPROVIDESInput
    connect?: VolunteerWhereUniqueInput
    update?: XOR<XOR<VolunteerUpdateToOneWithWhereWithoutPROVIDESInput, VolunteerUpdateWithoutPROVIDESInput>, VolunteerUncheckedUpdateWithoutPROVIDESInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type VolunteerCreateWithoutUSERInput = {
    typeV?: string | null
    phone?: string | null
    AvailabilityV?: string | null
    ReputationScore: Decimal | DecimalJsLike | number | string
    CategoryV?: string | null
    Citizen?: CitizenCreateNestedOneWithoutVOLInput
    ngo?: NGOCreateNestedOneWithoutVOLLInput
    PROVIDES?: PROVIDESCreateNestedManyWithoutVolunteerInput
    TESTIMONY?: TESTIMONYCreateNestedManyWithoutVolunteerInput
  }

  export type VolunteerUncheckedCreateWithoutUSERInput = {
    volId?: number
    typeV?: string | null
    phone?: string | null
    AvailabilityV?: string | null
    ReputationScore: Decimal | DecimalJsLike | number | string
    CategoryV?: string | null
    Citizen?: CitizenUncheckedCreateNestedOneWithoutVOLInput
    ngo?: NGOUncheckedCreateNestedOneWithoutVOLLInput
    PROVIDES?: PROVIDESUncheckedCreateNestedManyWithoutVolunteerInput
    TESTIMONY?: TESTIMONYUncheckedCreateNestedManyWithoutVolunteerInput
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
    Citizen?: CitizenUpdateOneWithoutVOLNestedInput
    ngo?: NGOUpdateOneWithoutVOLLNestedInput
    PROVIDES?: PROVIDESUpdateManyWithoutVolunteerNestedInput
    TESTIMONY?: TESTIMONYUpdateManyWithoutVolunteerNestedInput
  }

  export type VolunteerUncheckedUpdateWithoutUSERInput = {
    volId?: IntFieldUpdateOperationsInput | number
    typeV?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    AvailabilityV?: NullableStringFieldUpdateOperationsInput | string | null
    ReputationScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CategoryV?: NullableStringFieldUpdateOperationsInput | string | null
    Citizen?: CitizenUncheckedUpdateOneWithoutVOLNestedInput
    ngo?: NGOUncheckedUpdateOneWithoutVOLLNestedInput
    PROVIDES?: PROVIDESUncheckedUpdateManyWithoutVolunteerNestedInput
    TESTIMONY?: TESTIMONYUncheckedUpdateManyWithoutVolunteerNestedInput
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
    NGOId?: number
    ngoName?: string | null
  }

  export type NGOCreateOrConnectWithoutVOLLInput = {
    where: NGOWhereUniqueInput
    create: XOR<NGOCreateWithoutVOLLInput, NGOUncheckedCreateWithoutVOLLInput>
  }

  export type PROVIDESCreateWithoutVolunteerInput = {
    SERVICE: SERVICECreateNestedOneWithoutPROVIDESInput
  }

  export type PROVIDESUncheckedCreateWithoutVolunteerInput = {
    ServiceID: number
  }

  export type PROVIDESCreateOrConnectWithoutVolunteerInput = {
    where: PROVIDESWhereUniqueInput
    create: XOR<PROVIDESCreateWithoutVolunteerInput, PROVIDESUncheckedCreateWithoutVolunteerInput>
  }

  export type PROVIDESCreateManyVolunteerInputEnvelope = {
    data: PROVIDESCreateManyVolunteerInput | PROVIDESCreateManyVolunteerInput[]
    skipDuplicates?: boolean
  }

  export type TESTIMONYCreateWithoutVolunteerInput = {
    contentT: string
    dateT?: Date | string | null
    mediaURL?: string | null
    Damage: DamageCreateNestedOneWithoutTESTIMONYInput
  }

  export type TESTIMONYUncheckedCreateWithoutVolunteerInput = {
    testimonyId?: number
    contentT: string
    dateT?: Date | string | null
    mediaURL?: string | null
    damageId: number
  }

  export type TESTIMONYCreateOrConnectWithoutVolunteerInput = {
    where: TESTIMONYWhereUniqueInput
    create: XOR<TESTIMONYCreateWithoutVolunteerInput, TESTIMONYUncheckedCreateWithoutVolunteerInput>
  }

  export type TESTIMONYCreateManyVolunteerInputEnvelope = {
    data: TESTIMONYCreateManyVolunteerInput | TESTIMONYCreateManyVolunteerInput[]
    skipDuplicates?: boolean
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
    NGOId?: IntFieldUpdateOperationsInput | number
    ngoName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PROVIDESUpsertWithWhereUniqueWithoutVolunteerInput = {
    where: PROVIDESWhereUniqueInput
    update: XOR<PROVIDESUpdateWithoutVolunteerInput, PROVIDESUncheckedUpdateWithoutVolunteerInput>
    create: XOR<PROVIDESCreateWithoutVolunteerInput, PROVIDESUncheckedCreateWithoutVolunteerInput>
  }

  export type PROVIDESUpdateWithWhereUniqueWithoutVolunteerInput = {
    where: PROVIDESWhereUniqueInput
    data: XOR<PROVIDESUpdateWithoutVolunteerInput, PROVIDESUncheckedUpdateWithoutVolunteerInput>
  }

  export type PROVIDESUpdateManyWithWhereWithoutVolunteerInput = {
    where: PROVIDESScalarWhereInput
    data: XOR<PROVIDESUpdateManyMutationInput, PROVIDESUncheckedUpdateManyWithoutVolunteerInput>
  }

  export type PROVIDESScalarWhereInput = {
    AND?: PROVIDESScalarWhereInput | PROVIDESScalarWhereInput[]
    OR?: PROVIDESScalarWhereInput[]
    NOT?: PROVIDESScalarWhereInput | PROVIDESScalarWhereInput[]
    VolunteerID?: IntFilter<"PROVIDES"> | number
    ServiceID?: IntFilter<"PROVIDES"> | number
  }

  export type TESTIMONYUpsertWithWhereUniqueWithoutVolunteerInput = {
    where: TESTIMONYWhereUniqueInput
    update: XOR<TESTIMONYUpdateWithoutVolunteerInput, TESTIMONYUncheckedUpdateWithoutVolunteerInput>
    create: XOR<TESTIMONYCreateWithoutVolunteerInput, TESTIMONYUncheckedCreateWithoutVolunteerInput>
  }

  export type TESTIMONYUpdateWithWhereUniqueWithoutVolunteerInput = {
    where: TESTIMONYWhereUniqueInput
    data: XOR<TESTIMONYUpdateWithoutVolunteerInput, TESTIMONYUncheckedUpdateWithoutVolunteerInput>
  }

  export type TESTIMONYUpdateManyWithWhereWithoutVolunteerInput = {
    where: TESTIMONYScalarWhereInput
    data: XOR<TESTIMONYUpdateManyMutationInput, TESTIMONYUncheckedUpdateManyWithoutVolunteerInput>
  }

  export type TESTIMONYScalarWhereInput = {
    AND?: TESTIMONYScalarWhereInput | TESTIMONYScalarWhereInput[]
    OR?: TESTIMONYScalarWhereInput[]
    NOT?: TESTIMONYScalarWhereInput | TESTIMONYScalarWhereInput[]
    testimonyId?: IntFilter<"TESTIMONY"> | number
    contentT?: StringFilter<"TESTIMONY"> | string
    dateT?: DateTimeNullableFilter<"TESTIMONY"> | Date | string | null
    mediaURL?: StringNullableFilter<"TESTIMONY"> | string | null
    damageId?: IntFilter<"TESTIMONY"> | number
    volunteerId?: IntFilter<"TESTIMONY"> | number
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

  export type VolunteerCreateWithoutCitizenInput = {
    typeV?: string | null
    phone?: string | null
    AvailabilityV?: string | null
    ReputationScore: Decimal | DecimalJsLike | number | string
    CategoryV?: string | null
    ngo?: NGOCreateNestedOneWithoutVOLLInput
    PROVIDES?: PROVIDESCreateNestedManyWithoutVolunteerInput
    TESTIMONY?: TESTIMONYCreateNestedManyWithoutVolunteerInput
    USER: UserCreateNestedOneWithoutVolunteerInput
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
    PROVIDES?: PROVIDESUncheckedCreateNestedManyWithoutVolunteerInput
    TESTIMONY?: TESTIMONYUncheckedCreateNestedManyWithoutVolunteerInput
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
    ngo?: NGOUpdateOneWithoutVOLLNestedInput
    PROVIDES?: PROVIDESUpdateManyWithoutVolunteerNestedInput
    TESTIMONY?: TESTIMONYUpdateManyWithoutVolunteerNestedInput
    USER?: UserUpdateOneRequiredWithoutVolunteerNestedInput
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
    PROVIDES?: PROVIDESUncheckedUpdateManyWithoutVolunteerNestedInput
    TESTIMONY?: TESTIMONYUncheckedUpdateManyWithoutVolunteerNestedInput
  }

  export type VolunteerCreateWithoutNgoInput = {
    typeV?: string | null
    phone?: string | null
    AvailabilityV?: string | null
    ReputationScore: Decimal | DecimalJsLike | number | string
    CategoryV?: string | null
    Citizen?: CitizenCreateNestedOneWithoutVOLInput
    PROVIDES?: PROVIDESCreateNestedManyWithoutVolunteerInput
    TESTIMONY?: TESTIMONYCreateNestedManyWithoutVolunteerInput
    USER: UserCreateNestedOneWithoutVolunteerInput
  }

  export type VolunteerUncheckedCreateWithoutNgoInput = {
    volId?: number
    typeV?: string | null
    phone?: string | null
    AvailabilityV?: string | null
    ReputationScore: Decimal | DecimalJsLike | number | string
    CategoryV?: string | null
    userId: number
    Citizen?: CitizenUncheckedCreateNestedOneWithoutVOLInput
    PROVIDES?: PROVIDESUncheckedCreateNestedManyWithoutVolunteerInput
    TESTIMONY?: TESTIMONYUncheckedCreateNestedManyWithoutVolunteerInput
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
    Citizen?: CitizenUpdateOneWithoutVOLNestedInput
    PROVIDES?: PROVIDESUpdateManyWithoutVolunteerNestedInput
    TESTIMONY?: TESTIMONYUpdateManyWithoutVolunteerNestedInput
    USER?: UserUpdateOneRequiredWithoutVolunteerNestedInput
  }

  export type VolunteerUncheckedUpdateWithoutNgoInput = {
    volId?: IntFieldUpdateOperationsInput | number
    typeV?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    AvailabilityV?: NullableStringFieldUpdateOperationsInput | string | null
    ReputationScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CategoryV?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    Citizen?: CitizenUncheckedUpdateOneWithoutVOLNestedInput
    PROVIDES?: PROVIDESUncheckedUpdateManyWithoutVolunteerNestedInput
    TESTIMONY?: TESTIMONYUncheckedUpdateManyWithoutVolunteerNestedInput
  }

  export type DamageCreateWithoutCrisisInput = {
    CategoryD: string
    StartDateD?: Date | string | null
    EndDateD?: Date | string | null
    FinancialEstimationD?: Decimal | DecimalJsLike | number | string | null
    Description?: string | null
    Radius?: number | null
    City?: string | null
    SERVICE?: SERVICECreateNestedManyWithoutDamageInput
    TESTIMONY?: TESTIMONYCreateNestedManyWithoutDamageInput
  }

  export type DamageUncheckedCreateWithoutCrisisInput = {
    DamageID?: number
    CategoryD: string
    StartDateD?: Date | string | null
    EndDateD?: Date | string | null
    FinancialEstimationD?: Decimal | DecimalJsLike | number | string | null
    Description?: string | null
    Radius?: number | null
    City?: string | null
    SERVICE?: SERVICEUncheckedCreateNestedManyWithoutDamageInput
    TESTIMONY?: TESTIMONYUncheckedCreateNestedManyWithoutDamageInput
  }

  export type DamageCreateOrConnectWithoutCrisisInput = {
    where: DamageWhereUniqueInput
    create: XOR<DamageCreateWithoutCrisisInput, DamageUncheckedCreateWithoutCrisisInput>
  }

  export type DamageCreateManyCrisisInputEnvelope = {
    data: DamageCreateManyCrisisInput | DamageCreateManyCrisisInput[]
    skipDuplicates?: boolean
  }

  export type DamageUpsertWithWhereUniqueWithoutCrisisInput = {
    where: DamageWhereUniqueInput
    update: XOR<DamageUpdateWithoutCrisisInput, DamageUncheckedUpdateWithoutCrisisInput>
    create: XOR<DamageCreateWithoutCrisisInput, DamageUncheckedCreateWithoutCrisisInput>
  }

  export type DamageUpdateWithWhereUniqueWithoutCrisisInput = {
    where: DamageWhereUniqueInput
    data: XOR<DamageUpdateWithoutCrisisInput, DamageUncheckedUpdateWithoutCrisisInput>
  }

  export type DamageUpdateManyWithWhereWithoutCrisisInput = {
    where: DamageScalarWhereInput
    data: XOR<DamageUpdateManyMutationInput, DamageUncheckedUpdateManyWithoutCrisisInput>
  }

  export type DamageScalarWhereInput = {
    AND?: DamageScalarWhereInput | DamageScalarWhereInput[]
    OR?: DamageScalarWhereInput[]
    NOT?: DamageScalarWhereInput | DamageScalarWhereInput[]
    DamageID?: IntFilter<"Damage"> | number
    CategoryD?: StringFilter<"Damage"> | string
    StartDateD?: DateTimeNullableFilter<"Damage"> | Date | string | null
    EndDateD?: DateTimeNullableFilter<"Damage"> | Date | string | null
    FinancialEstimationD?: DecimalNullableFilter<"Damage"> | Decimal | DecimalJsLike | number | string | null
    CrisisID?: IntNullableFilter<"Damage"> | number | null
    Description?: StringNullableFilter<"Damage"> | string | null
    Radius?: FloatNullableFilter<"Damage"> | number | null
    City?: StringNullableFilter<"Damage"> | string | null
  }

  export type CrisisCreateWithoutDamageInput = {
    Crisisname: string
    CrisisDesc: string
    CrisisStart?: Date | string | null
    CrisisEnd?: Date | string | null
    CrisisCountry?: string | null
    TypeC?: string | null
  }

  export type CrisisUncheckedCreateWithoutDamageInput = {
    CrisisId?: number
    Crisisname: string
    CrisisDesc: string
    CrisisStart?: Date | string | null
    CrisisEnd?: Date | string | null
    CrisisCountry?: string | null
    TypeC?: string | null
  }

  export type CrisisCreateOrConnectWithoutDamageInput = {
    where: CrisisWhereUniqueInput
    create: XOR<CrisisCreateWithoutDamageInput, CrisisUncheckedCreateWithoutDamageInput>
  }

  export type SERVICECreateWithoutDamageInput = {
    CategoryS?: string | null
    DescriptionS?: string | null
    StatusS?: string | null
    CostEstimateS?: Decimal | DecimalJsLike | number | string | null
    CompletionDateS?: Date | string | null
    ValidityStartS?: Date | string | null
    ValidityEndS?: Date | string | null
    EstimatedDurationS?: string | null
    PROVIDES?: PROVIDESCreateNestedManyWithoutSERVICEInput
  }

  export type SERVICEUncheckedCreateWithoutDamageInput = {
    ServiceID?: number
    CategoryS?: string | null
    DescriptionS?: string | null
    StatusS?: string | null
    CostEstimateS?: Decimal | DecimalJsLike | number | string | null
    CompletionDateS?: Date | string | null
    ValidityStartS?: Date | string | null
    ValidityEndS?: Date | string | null
    EstimatedDurationS?: string | null
    PROVIDES?: PROVIDESUncheckedCreateNestedManyWithoutSERVICEInput
  }

  export type SERVICECreateOrConnectWithoutDamageInput = {
    where: SERVICEWhereUniqueInput
    create: XOR<SERVICECreateWithoutDamageInput, SERVICEUncheckedCreateWithoutDamageInput>
  }

  export type SERVICECreateManyDamageInputEnvelope = {
    data: SERVICECreateManyDamageInput | SERVICECreateManyDamageInput[]
    skipDuplicates?: boolean
  }

  export type TESTIMONYCreateWithoutDamageInput = {
    contentT: string
    dateT?: Date | string | null
    mediaURL?: string | null
    Volunteer: VolunteerCreateNestedOneWithoutTESTIMONYInput
  }

  export type TESTIMONYUncheckedCreateWithoutDamageInput = {
    testimonyId?: number
    contentT: string
    dateT?: Date | string | null
    mediaURL?: string | null
    volunteerId: number
  }

  export type TESTIMONYCreateOrConnectWithoutDamageInput = {
    where: TESTIMONYWhereUniqueInput
    create: XOR<TESTIMONYCreateWithoutDamageInput, TESTIMONYUncheckedCreateWithoutDamageInput>
  }

  export type TESTIMONYCreateManyDamageInputEnvelope = {
    data: TESTIMONYCreateManyDamageInput | TESTIMONYCreateManyDamageInput[]
    skipDuplicates?: boolean
  }

  export type CrisisUpsertWithoutDamageInput = {
    update: XOR<CrisisUpdateWithoutDamageInput, CrisisUncheckedUpdateWithoutDamageInput>
    create: XOR<CrisisCreateWithoutDamageInput, CrisisUncheckedCreateWithoutDamageInput>
    where?: CrisisWhereInput
  }

  export type CrisisUpdateToOneWithWhereWithoutDamageInput = {
    where?: CrisisWhereInput
    data: XOR<CrisisUpdateWithoutDamageInput, CrisisUncheckedUpdateWithoutDamageInput>
  }

  export type CrisisUpdateWithoutDamageInput = {
    Crisisname?: StringFieldUpdateOperationsInput | string
    CrisisDesc?: StringFieldUpdateOperationsInput | string
    CrisisStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CrisisEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CrisisCountry?: NullableStringFieldUpdateOperationsInput | string | null
    TypeC?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CrisisUncheckedUpdateWithoutDamageInput = {
    CrisisId?: IntFieldUpdateOperationsInput | number
    Crisisname?: StringFieldUpdateOperationsInput | string
    CrisisDesc?: StringFieldUpdateOperationsInput | string
    CrisisStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CrisisEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CrisisCountry?: NullableStringFieldUpdateOperationsInput | string | null
    TypeC?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SERVICEUpsertWithWhereUniqueWithoutDamageInput = {
    where: SERVICEWhereUniqueInput
    update: XOR<SERVICEUpdateWithoutDamageInput, SERVICEUncheckedUpdateWithoutDamageInput>
    create: XOR<SERVICECreateWithoutDamageInput, SERVICEUncheckedCreateWithoutDamageInput>
  }

  export type SERVICEUpdateWithWhereUniqueWithoutDamageInput = {
    where: SERVICEWhereUniqueInput
    data: XOR<SERVICEUpdateWithoutDamageInput, SERVICEUncheckedUpdateWithoutDamageInput>
  }

  export type SERVICEUpdateManyWithWhereWithoutDamageInput = {
    where: SERVICEScalarWhereInput
    data: XOR<SERVICEUpdateManyMutationInput, SERVICEUncheckedUpdateManyWithoutDamageInput>
  }

  export type SERVICEScalarWhereInput = {
    AND?: SERVICEScalarWhereInput | SERVICEScalarWhereInput[]
    OR?: SERVICEScalarWhereInput[]
    NOT?: SERVICEScalarWhereInput | SERVICEScalarWhereInput[]
    ServiceID?: IntFilter<"SERVICE"> | number
    CategoryS?: StringNullableFilter<"SERVICE"> | string | null
    DescriptionS?: StringNullableFilter<"SERVICE"> | string | null
    StatusS?: StringNullableFilter<"SERVICE"> | string | null
    CostEstimateS?: DecimalNullableFilter<"SERVICE"> | Decimal | DecimalJsLike | number | string | null
    CompletionDateS?: DateTimeNullableFilter<"SERVICE"> | Date | string | null
    ValidityStartS?: DateTimeNullableFilter<"SERVICE"> | Date | string | null
    ValidityEndS?: DateTimeNullableFilter<"SERVICE"> | Date | string | null
    EstimatedDurationS?: StringNullableFilter<"SERVICE"> | string | null
    DamageID?: IntFilter<"SERVICE"> | number
  }

  export type TESTIMONYUpsertWithWhereUniqueWithoutDamageInput = {
    where: TESTIMONYWhereUniqueInput
    update: XOR<TESTIMONYUpdateWithoutDamageInput, TESTIMONYUncheckedUpdateWithoutDamageInput>
    create: XOR<TESTIMONYCreateWithoutDamageInput, TESTIMONYUncheckedCreateWithoutDamageInput>
  }

  export type TESTIMONYUpdateWithWhereUniqueWithoutDamageInput = {
    where: TESTIMONYWhereUniqueInput
    data: XOR<TESTIMONYUpdateWithoutDamageInput, TESTIMONYUncheckedUpdateWithoutDamageInput>
  }

  export type TESTIMONYUpdateManyWithWhereWithoutDamageInput = {
    where: TESTIMONYScalarWhereInput
    data: XOR<TESTIMONYUpdateManyMutationInput, TESTIMONYUncheckedUpdateManyWithoutDamageInput>
  }

  export type DamageCreateWithoutTESTIMONYInput = {
    CategoryD: string
    StartDateD?: Date | string | null
    EndDateD?: Date | string | null
    FinancialEstimationD?: Decimal | DecimalJsLike | number | string | null
    Description?: string | null
    Radius?: number | null
    City?: string | null
    Crisis?: CrisisCreateNestedOneWithoutDamageInput
    SERVICE?: SERVICECreateNestedManyWithoutDamageInput
  }

  export type DamageUncheckedCreateWithoutTESTIMONYInput = {
    DamageID?: number
    CategoryD: string
    StartDateD?: Date | string | null
    EndDateD?: Date | string | null
    FinancialEstimationD?: Decimal | DecimalJsLike | number | string | null
    CrisisID?: number | null
    Description?: string | null
    Radius?: number | null
    City?: string | null
    SERVICE?: SERVICEUncheckedCreateNestedManyWithoutDamageInput
  }

  export type DamageCreateOrConnectWithoutTESTIMONYInput = {
    where: DamageWhereUniqueInput
    create: XOR<DamageCreateWithoutTESTIMONYInput, DamageUncheckedCreateWithoutTESTIMONYInput>
  }

  export type VolunteerCreateWithoutTESTIMONYInput = {
    typeV?: string | null
    phone?: string | null
    AvailabilityV?: string | null
    ReputationScore: Decimal | DecimalJsLike | number | string
    CategoryV?: string | null
    Citizen?: CitizenCreateNestedOneWithoutVOLInput
    ngo?: NGOCreateNestedOneWithoutVOLLInput
    PROVIDES?: PROVIDESCreateNestedManyWithoutVolunteerInput
    USER: UserCreateNestedOneWithoutVolunteerInput
  }

  export type VolunteerUncheckedCreateWithoutTESTIMONYInput = {
    volId?: number
    typeV?: string | null
    phone?: string | null
    AvailabilityV?: string | null
    ReputationScore: Decimal | DecimalJsLike | number | string
    CategoryV?: string | null
    userId: number
    Citizen?: CitizenUncheckedCreateNestedOneWithoutVOLInput
    ngo?: NGOUncheckedCreateNestedOneWithoutVOLLInput
    PROVIDES?: PROVIDESUncheckedCreateNestedManyWithoutVolunteerInput
  }

  export type VolunteerCreateOrConnectWithoutTESTIMONYInput = {
    where: VolunteerWhereUniqueInput
    create: XOR<VolunteerCreateWithoutTESTIMONYInput, VolunteerUncheckedCreateWithoutTESTIMONYInput>
  }

  export type DamageUpsertWithoutTESTIMONYInput = {
    update: XOR<DamageUpdateWithoutTESTIMONYInput, DamageUncheckedUpdateWithoutTESTIMONYInput>
    create: XOR<DamageCreateWithoutTESTIMONYInput, DamageUncheckedCreateWithoutTESTIMONYInput>
    where?: DamageWhereInput
  }

  export type DamageUpdateToOneWithWhereWithoutTESTIMONYInput = {
    where?: DamageWhereInput
    data: XOR<DamageUpdateWithoutTESTIMONYInput, DamageUncheckedUpdateWithoutTESTIMONYInput>
  }

  export type DamageUpdateWithoutTESTIMONYInput = {
    CategoryD?: StringFieldUpdateOperationsInput | string
    StartDateD?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EndDateD?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FinancialEstimationD?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Radius?: NullableFloatFieldUpdateOperationsInput | number | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    Crisis?: CrisisUpdateOneWithoutDamageNestedInput
    SERVICE?: SERVICEUpdateManyWithoutDamageNestedInput
  }

  export type DamageUncheckedUpdateWithoutTESTIMONYInput = {
    DamageID?: IntFieldUpdateOperationsInput | number
    CategoryD?: StringFieldUpdateOperationsInput | string
    StartDateD?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EndDateD?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FinancialEstimationD?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    CrisisID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Radius?: NullableFloatFieldUpdateOperationsInput | number | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    SERVICE?: SERVICEUncheckedUpdateManyWithoutDamageNestedInput
  }

  export type VolunteerUpsertWithoutTESTIMONYInput = {
    update: XOR<VolunteerUpdateWithoutTESTIMONYInput, VolunteerUncheckedUpdateWithoutTESTIMONYInput>
    create: XOR<VolunteerCreateWithoutTESTIMONYInput, VolunteerUncheckedCreateWithoutTESTIMONYInput>
    where?: VolunteerWhereInput
  }

  export type VolunteerUpdateToOneWithWhereWithoutTESTIMONYInput = {
    where?: VolunteerWhereInput
    data: XOR<VolunteerUpdateWithoutTESTIMONYInput, VolunteerUncheckedUpdateWithoutTESTIMONYInput>
  }

  export type VolunteerUpdateWithoutTESTIMONYInput = {
    typeV?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    AvailabilityV?: NullableStringFieldUpdateOperationsInput | string | null
    ReputationScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CategoryV?: NullableStringFieldUpdateOperationsInput | string | null
    Citizen?: CitizenUpdateOneWithoutVOLNestedInput
    ngo?: NGOUpdateOneWithoutVOLLNestedInput
    PROVIDES?: PROVIDESUpdateManyWithoutVolunteerNestedInput
    USER?: UserUpdateOneRequiredWithoutVolunteerNestedInput
  }

  export type VolunteerUncheckedUpdateWithoutTESTIMONYInput = {
    volId?: IntFieldUpdateOperationsInput | number
    typeV?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    AvailabilityV?: NullableStringFieldUpdateOperationsInput | string | null
    ReputationScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CategoryV?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    Citizen?: CitizenUncheckedUpdateOneWithoutVOLNestedInput
    ngo?: NGOUncheckedUpdateOneWithoutVOLLNestedInput
    PROVIDES?: PROVIDESUncheckedUpdateManyWithoutVolunteerNestedInput
  }

  export type PROVIDESCreateWithoutSERVICEInput = {
    Volunteer: VolunteerCreateNestedOneWithoutPROVIDESInput
  }

  export type PROVIDESUncheckedCreateWithoutSERVICEInput = {
    VolunteerID: number
  }

  export type PROVIDESCreateOrConnectWithoutSERVICEInput = {
    where: PROVIDESWhereUniqueInput
    create: XOR<PROVIDESCreateWithoutSERVICEInput, PROVIDESUncheckedCreateWithoutSERVICEInput>
  }

  export type PROVIDESCreateManySERVICEInputEnvelope = {
    data: PROVIDESCreateManySERVICEInput | PROVIDESCreateManySERVICEInput[]
    skipDuplicates?: boolean
  }

  export type DamageCreateWithoutSERVICEInput = {
    CategoryD: string
    StartDateD?: Date | string | null
    EndDateD?: Date | string | null
    FinancialEstimationD?: Decimal | DecimalJsLike | number | string | null
    Description?: string | null
    Radius?: number | null
    City?: string | null
    Crisis?: CrisisCreateNestedOneWithoutDamageInput
    TESTIMONY?: TESTIMONYCreateNestedManyWithoutDamageInput
  }

  export type DamageUncheckedCreateWithoutSERVICEInput = {
    DamageID?: number
    CategoryD: string
    StartDateD?: Date | string | null
    EndDateD?: Date | string | null
    FinancialEstimationD?: Decimal | DecimalJsLike | number | string | null
    CrisisID?: number | null
    Description?: string | null
    Radius?: number | null
    City?: string | null
    TESTIMONY?: TESTIMONYUncheckedCreateNestedManyWithoutDamageInput
  }

  export type DamageCreateOrConnectWithoutSERVICEInput = {
    where: DamageWhereUniqueInput
    create: XOR<DamageCreateWithoutSERVICEInput, DamageUncheckedCreateWithoutSERVICEInput>
  }

  export type PROVIDESUpsertWithWhereUniqueWithoutSERVICEInput = {
    where: PROVIDESWhereUniqueInput
    update: XOR<PROVIDESUpdateWithoutSERVICEInput, PROVIDESUncheckedUpdateWithoutSERVICEInput>
    create: XOR<PROVIDESCreateWithoutSERVICEInput, PROVIDESUncheckedCreateWithoutSERVICEInput>
  }

  export type PROVIDESUpdateWithWhereUniqueWithoutSERVICEInput = {
    where: PROVIDESWhereUniqueInput
    data: XOR<PROVIDESUpdateWithoutSERVICEInput, PROVIDESUncheckedUpdateWithoutSERVICEInput>
  }

  export type PROVIDESUpdateManyWithWhereWithoutSERVICEInput = {
    where: PROVIDESScalarWhereInput
    data: XOR<PROVIDESUpdateManyMutationInput, PROVIDESUncheckedUpdateManyWithoutSERVICEInput>
  }

  export type DamageUpsertWithoutSERVICEInput = {
    update: XOR<DamageUpdateWithoutSERVICEInput, DamageUncheckedUpdateWithoutSERVICEInput>
    create: XOR<DamageCreateWithoutSERVICEInput, DamageUncheckedCreateWithoutSERVICEInput>
    where?: DamageWhereInput
  }

  export type DamageUpdateToOneWithWhereWithoutSERVICEInput = {
    where?: DamageWhereInput
    data: XOR<DamageUpdateWithoutSERVICEInput, DamageUncheckedUpdateWithoutSERVICEInput>
  }

  export type DamageUpdateWithoutSERVICEInput = {
    CategoryD?: StringFieldUpdateOperationsInput | string
    StartDateD?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EndDateD?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FinancialEstimationD?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Radius?: NullableFloatFieldUpdateOperationsInput | number | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    Crisis?: CrisisUpdateOneWithoutDamageNestedInput
    TESTIMONY?: TESTIMONYUpdateManyWithoutDamageNestedInput
  }

  export type DamageUncheckedUpdateWithoutSERVICEInput = {
    DamageID?: IntFieldUpdateOperationsInput | number
    CategoryD?: StringFieldUpdateOperationsInput | string
    StartDateD?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EndDateD?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FinancialEstimationD?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    CrisisID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Radius?: NullableFloatFieldUpdateOperationsInput | number | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    TESTIMONY?: TESTIMONYUncheckedUpdateManyWithoutDamageNestedInput
  }

  export type SERVICECreateWithoutPROVIDESInput = {
    CategoryS?: string | null
    DescriptionS?: string | null
    StatusS?: string | null
    CostEstimateS?: Decimal | DecimalJsLike | number | string | null
    CompletionDateS?: Date | string | null
    ValidityStartS?: Date | string | null
    ValidityEndS?: Date | string | null
    EstimatedDurationS?: string | null
    Damage: DamageCreateNestedOneWithoutSERVICEInput
  }

  export type SERVICEUncheckedCreateWithoutPROVIDESInput = {
    ServiceID?: number
    CategoryS?: string | null
    DescriptionS?: string | null
    StatusS?: string | null
    CostEstimateS?: Decimal | DecimalJsLike | number | string | null
    CompletionDateS?: Date | string | null
    ValidityStartS?: Date | string | null
    ValidityEndS?: Date | string | null
    EstimatedDurationS?: string | null
    DamageID: number
  }

  export type SERVICECreateOrConnectWithoutPROVIDESInput = {
    where: SERVICEWhereUniqueInput
    create: XOR<SERVICECreateWithoutPROVIDESInput, SERVICEUncheckedCreateWithoutPROVIDESInput>
  }

  export type VolunteerCreateWithoutPROVIDESInput = {
    typeV?: string | null
    phone?: string | null
    AvailabilityV?: string | null
    ReputationScore: Decimal | DecimalJsLike | number | string
    CategoryV?: string | null
    Citizen?: CitizenCreateNestedOneWithoutVOLInput
    ngo?: NGOCreateNestedOneWithoutVOLLInput
    TESTIMONY?: TESTIMONYCreateNestedManyWithoutVolunteerInput
    USER: UserCreateNestedOneWithoutVolunteerInput
  }

  export type VolunteerUncheckedCreateWithoutPROVIDESInput = {
    volId?: number
    typeV?: string | null
    phone?: string | null
    AvailabilityV?: string | null
    ReputationScore: Decimal | DecimalJsLike | number | string
    CategoryV?: string | null
    userId: number
    Citizen?: CitizenUncheckedCreateNestedOneWithoutVOLInput
    ngo?: NGOUncheckedCreateNestedOneWithoutVOLLInput
    TESTIMONY?: TESTIMONYUncheckedCreateNestedManyWithoutVolunteerInput
  }

  export type VolunteerCreateOrConnectWithoutPROVIDESInput = {
    where: VolunteerWhereUniqueInput
    create: XOR<VolunteerCreateWithoutPROVIDESInput, VolunteerUncheckedCreateWithoutPROVIDESInput>
  }

  export type SERVICEUpsertWithoutPROVIDESInput = {
    update: XOR<SERVICEUpdateWithoutPROVIDESInput, SERVICEUncheckedUpdateWithoutPROVIDESInput>
    create: XOR<SERVICECreateWithoutPROVIDESInput, SERVICEUncheckedCreateWithoutPROVIDESInput>
    where?: SERVICEWhereInput
  }

  export type SERVICEUpdateToOneWithWhereWithoutPROVIDESInput = {
    where?: SERVICEWhereInput
    data: XOR<SERVICEUpdateWithoutPROVIDESInput, SERVICEUncheckedUpdateWithoutPROVIDESInput>
  }

  export type SERVICEUpdateWithoutPROVIDESInput = {
    CategoryS?: NullableStringFieldUpdateOperationsInput | string | null
    DescriptionS?: NullableStringFieldUpdateOperationsInput | string | null
    StatusS?: NullableStringFieldUpdateOperationsInput | string | null
    CostEstimateS?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    CompletionDateS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidityStartS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidityEndS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EstimatedDurationS?: NullableStringFieldUpdateOperationsInput | string | null
    Damage?: DamageUpdateOneRequiredWithoutSERVICENestedInput
  }

  export type SERVICEUncheckedUpdateWithoutPROVIDESInput = {
    ServiceID?: IntFieldUpdateOperationsInput | number
    CategoryS?: NullableStringFieldUpdateOperationsInput | string | null
    DescriptionS?: NullableStringFieldUpdateOperationsInput | string | null
    StatusS?: NullableStringFieldUpdateOperationsInput | string | null
    CostEstimateS?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    CompletionDateS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidityStartS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidityEndS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EstimatedDurationS?: NullableStringFieldUpdateOperationsInput | string | null
    DamageID?: IntFieldUpdateOperationsInput | number
  }

  export type VolunteerUpsertWithoutPROVIDESInput = {
    update: XOR<VolunteerUpdateWithoutPROVIDESInput, VolunteerUncheckedUpdateWithoutPROVIDESInput>
    create: XOR<VolunteerCreateWithoutPROVIDESInput, VolunteerUncheckedCreateWithoutPROVIDESInput>
    where?: VolunteerWhereInput
  }

  export type VolunteerUpdateToOneWithWhereWithoutPROVIDESInput = {
    where?: VolunteerWhereInput
    data: XOR<VolunteerUpdateWithoutPROVIDESInput, VolunteerUncheckedUpdateWithoutPROVIDESInput>
  }

  export type VolunteerUpdateWithoutPROVIDESInput = {
    typeV?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    AvailabilityV?: NullableStringFieldUpdateOperationsInput | string | null
    ReputationScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CategoryV?: NullableStringFieldUpdateOperationsInput | string | null
    Citizen?: CitizenUpdateOneWithoutVOLNestedInput
    ngo?: NGOUpdateOneWithoutVOLLNestedInput
    TESTIMONY?: TESTIMONYUpdateManyWithoutVolunteerNestedInput
    USER?: UserUpdateOneRequiredWithoutVolunteerNestedInput
  }

  export type VolunteerUncheckedUpdateWithoutPROVIDESInput = {
    volId?: IntFieldUpdateOperationsInput | number
    typeV?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    AvailabilityV?: NullableStringFieldUpdateOperationsInput | string | null
    ReputationScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CategoryV?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    Citizen?: CitizenUncheckedUpdateOneWithoutVOLNestedInput
    ngo?: NGOUncheckedUpdateOneWithoutVOLLNestedInput
    TESTIMONY?: TESTIMONYUncheckedUpdateManyWithoutVolunteerNestedInput
  }

  export type PROVIDESCreateManyVolunteerInput = {
    ServiceID: number
  }

  export type TESTIMONYCreateManyVolunteerInput = {
    testimonyId?: number
    contentT: string
    dateT?: Date | string | null
    mediaURL?: string | null
    damageId: number
  }

  export type PROVIDESUpdateWithoutVolunteerInput = {
    SERVICE?: SERVICEUpdateOneRequiredWithoutPROVIDESNestedInput
  }

  export type PROVIDESUncheckedUpdateWithoutVolunteerInput = {
    ServiceID?: IntFieldUpdateOperationsInput | number
  }

  export type PROVIDESUncheckedUpdateManyWithoutVolunteerInput = {
    ServiceID?: IntFieldUpdateOperationsInput | number
  }

  export type TESTIMONYUpdateWithoutVolunteerInput = {
    contentT?: StringFieldUpdateOperationsInput | string
    dateT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mediaURL?: NullableStringFieldUpdateOperationsInput | string | null
    Damage?: DamageUpdateOneRequiredWithoutTESTIMONYNestedInput
  }

  export type TESTIMONYUncheckedUpdateWithoutVolunteerInput = {
    testimonyId?: IntFieldUpdateOperationsInput | number
    contentT?: StringFieldUpdateOperationsInput | string
    dateT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mediaURL?: NullableStringFieldUpdateOperationsInput | string | null
    damageId?: IntFieldUpdateOperationsInput | number
  }

  export type TESTIMONYUncheckedUpdateManyWithoutVolunteerInput = {
    testimonyId?: IntFieldUpdateOperationsInput | number
    contentT?: StringFieldUpdateOperationsInput | string
    dateT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mediaURL?: NullableStringFieldUpdateOperationsInput | string | null
    damageId?: IntFieldUpdateOperationsInput | number
  }

  export type DamageCreateManyCrisisInput = {
    DamageID?: number
    CategoryD: string
    StartDateD?: Date | string | null
    EndDateD?: Date | string | null
    FinancialEstimationD?: Decimal | DecimalJsLike | number | string | null
    Description?: string | null
    Radius?: number | null
    City?: string | null
  }

  export type DamageUpdateWithoutCrisisInput = {
    CategoryD?: StringFieldUpdateOperationsInput | string
    StartDateD?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EndDateD?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FinancialEstimationD?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Radius?: NullableFloatFieldUpdateOperationsInput | number | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    SERVICE?: SERVICEUpdateManyWithoutDamageNestedInput
    TESTIMONY?: TESTIMONYUpdateManyWithoutDamageNestedInput
  }

  export type DamageUncheckedUpdateWithoutCrisisInput = {
    DamageID?: IntFieldUpdateOperationsInput | number
    CategoryD?: StringFieldUpdateOperationsInput | string
    StartDateD?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EndDateD?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FinancialEstimationD?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Radius?: NullableFloatFieldUpdateOperationsInput | number | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    SERVICE?: SERVICEUncheckedUpdateManyWithoutDamageNestedInput
    TESTIMONY?: TESTIMONYUncheckedUpdateManyWithoutDamageNestedInput
  }

  export type DamageUncheckedUpdateManyWithoutCrisisInput = {
    DamageID?: IntFieldUpdateOperationsInput | number
    CategoryD?: StringFieldUpdateOperationsInput | string
    StartDateD?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EndDateD?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FinancialEstimationD?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Radius?: NullableFloatFieldUpdateOperationsInput | number | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SERVICECreateManyDamageInput = {
    ServiceID?: number
    CategoryS?: string | null
    DescriptionS?: string | null
    StatusS?: string | null
    CostEstimateS?: Decimal | DecimalJsLike | number | string | null
    CompletionDateS?: Date | string | null
    ValidityStartS?: Date | string | null
    ValidityEndS?: Date | string | null
    EstimatedDurationS?: string | null
  }

  export type TESTIMONYCreateManyDamageInput = {
    testimonyId?: number
    contentT: string
    dateT?: Date | string | null
    mediaURL?: string | null
    volunteerId: number
  }

  export type SERVICEUpdateWithoutDamageInput = {
    CategoryS?: NullableStringFieldUpdateOperationsInput | string | null
    DescriptionS?: NullableStringFieldUpdateOperationsInput | string | null
    StatusS?: NullableStringFieldUpdateOperationsInput | string | null
    CostEstimateS?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    CompletionDateS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidityStartS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidityEndS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EstimatedDurationS?: NullableStringFieldUpdateOperationsInput | string | null
    PROVIDES?: PROVIDESUpdateManyWithoutSERVICENestedInput
  }

  export type SERVICEUncheckedUpdateWithoutDamageInput = {
    ServiceID?: IntFieldUpdateOperationsInput | number
    CategoryS?: NullableStringFieldUpdateOperationsInput | string | null
    DescriptionS?: NullableStringFieldUpdateOperationsInput | string | null
    StatusS?: NullableStringFieldUpdateOperationsInput | string | null
    CostEstimateS?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    CompletionDateS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidityStartS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidityEndS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EstimatedDurationS?: NullableStringFieldUpdateOperationsInput | string | null
    PROVIDES?: PROVIDESUncheckedUpdateManyWithoutSERVICENestedInput
  }

  export type SERVICEUncheckedUpdateManyWithoutDamageInput = {
    ServiceID?: IntFieldUpdateOperationsInput | number
    CategoryS?: NullableStringFieldUpdateOperationsInput | string | null
    DescriptionS?: NullableStringFieldUpdateOperationsInput | string | null
    StatusS?: NullableStringFieldUpdateOperationsInput | string | null
    CostEstimateS?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    CompletionDateS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidityStartS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidityEndS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EstimatedDurationS?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TESTIMONYUpdateWithoutDamageInput = {
    contentT?: StringFieldUpdateOperationsInput | string
    dateT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mediaURL?: NullableStringFieldUpdateOperationsInput | string | null
    Volunteer?: VolunteerUpdateOneRequiredWithoutTESTIMONYNestedInput
  }

  export type TESTIMONYUncheckedUpdateWithoutDamageInput = {
    testimonyId?: IntFieldUpdateOperationsInput | number
    contentT?: StringFieldUpdateOperationsInput | string
    dateT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mediaURL?: NullableStringFieldUpdateOperationsInput | string | null
    volunteerId?: IntFieldUpdateOperationsInput | number
  }

  export type TESTIMONYUncheckedUpdateManyWithoutDamageInput = {
    testimonyId?: IntFieldUpdateOperationsInput | number
    contentT?: StringFieldUpdateOperationsInput | string
    dateT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mediaURL?: NullableStringFieldUpdateOperationsInput | string | null
    volunteerId?: IntFieldUpdateOperationsInput | number
  }

  export type PROVIDESCreateManySERVICEInput = {
    VolunteerID: number
  }

  export type PROVIDESUpdateWithoutSERVICEInput = {
    Volunteer?: VolunteerUpdateOneRequiredWithoutPROVIDESNestedInput
  }

  export type PROVIDESUncheckedUpdateWithoutSERVICEInput = {
    VolunteerID?: IntFieldUpdateOperationsInput | number
  }

  export type PROVIDESUncheckedUpdateManyWithoutSERVICEInput = {
    VolunteerID?: IntFieldUpdateOperationsInput | number
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