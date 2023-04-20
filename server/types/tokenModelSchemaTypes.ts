import { Types } from "mongoose";

export interface ITokenSchema {
  refreshToken: string;
  ip: string;
  userAgent: string;
  isValid: boolean;
  user?: Types.ObjectId;
}
