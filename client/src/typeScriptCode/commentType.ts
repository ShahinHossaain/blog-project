import { UserType } from "./userType";

export type CommentType = {
  _id: string;
  user: UserType;    
  post: string;      
  desc: string;
  createdAt: string; 
  updatedAt: string;
};
