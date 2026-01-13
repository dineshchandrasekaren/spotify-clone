import { SUCCESS_CODES } from "../../constants/statusCode.constant.js";
import { SUCCESS_MESSAGE } from "../../constants/statusMessage.constant.js";
import { MessageHandler } from "../../utils/handler.util.js";

const { CREATED } = SUCCESS_CODES;
const { CREATED_MESSAGE, UPDATED_MESSAGE, DELETED_MESSAGE } = SUCCESS_MESSAGE;

export const USER_RESPONSES = {
  USER_CREATED: new MessageHandler(CREATED, CREATED_MESSAGE),
  USER_UPDATED: new MessageHandler(CREATED, UPDATED_MESSAGE),
  USER_DELETED: new MessageHandler(CREATED, DELETED_MESSAGE),
};
