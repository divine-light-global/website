import { UrlObject } from "node:url";

export type Destination = {
  _id: number;
  title: string;
  slug?: any;
  metadata?: string;
  body?: string;
  mainImage?: any;
  // author?: Author;
  link?: string;
  tags?: string[];
  publishedAt?: string;
};

export type MainBannerData = {
  _id: number;
  title: string;
  mainImage?: any;
};
