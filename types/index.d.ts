export type TypeFromEnum<T> = T extends `${infer U}` ? U : never;
