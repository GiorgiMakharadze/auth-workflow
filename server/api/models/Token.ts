import mongoose, { Schema } from "mongoose";
import { ITokenSchema } from "../../types/tokenModelSchemaTypes";

const TokenSchema = new Schema<ITokenSchema>(
  {
    refreshToken: {
      type: String,
      required: true,
    },
    ip: {
      type: String,
      required: true,
    },
    userAgent: {
      type: String,
      required: true,
    },
    isValid: {
      type: Boolean,
      required: true,
      default: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<ITokenSchema>("Token", TokenSchema);
