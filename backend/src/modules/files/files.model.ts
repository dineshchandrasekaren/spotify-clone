import { model, Schema, Types } from "mongoose";
import type { IFileModel } from "./files.type";
import { CloudinaryUtils } from "../../utils/fileupload.util";

const FileSchema = new Schema<IFileModel>({
  url: {
    type: String,
    required: [true, "Url is required."],
  },
  public_id: {
    type: String,
    required: [true, "Public id is required."],
  },
});

FileSchema.pre("save", async function () {
  if (this.isModified("url")) {
    const { public_id, secure_url } = await CloudinaryUtils.uploadFile(
      this.url,
      new Types.ObjectId().toString()
    );
    if (secure_url) {
      this.url = secure_url;
      this.public_id = public_id;
    }
  }
});
FileSchema.pre("deleteOne", { document: true }, async function () {
  await CloudinaryUtils.destroyFile(this.public_id);
});

export default model<IFileModel>("files", FileSchema);
