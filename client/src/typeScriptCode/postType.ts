import { UserType } from "./userType";

export type PostType = {
  _id: string;
  user: UserType;
  img: string;
  title: string;
  slug: string;
  desc: string;
  category: string;
  content: string;
  visit: number;
  createdAt: string; 
  updatedAt: string;
  isFeatured: boolean;
};