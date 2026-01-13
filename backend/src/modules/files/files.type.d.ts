import type { Document } from "mongoose";

export interface IFileModel extends Document {
  url: string;
  public_id: string;
}
