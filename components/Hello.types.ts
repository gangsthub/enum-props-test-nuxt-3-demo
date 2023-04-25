import { TypeFromEnum } from '~/types';

export enum VariantEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export type VariantType = TypeFromEnum<VariantEnum>;
//             ^?
