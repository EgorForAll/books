import { IBook } from "./IBook";

export interface IRes {
  kind: string;
  totalItems: number;
  items: IBook[];
}
