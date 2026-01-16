export class ResponseHandler {
  constructor(
    public data: any,
    public success: boolean = true,
    public error: any = undefined
  ) {}
}

export class MessageHandler {
  constructor(
    public message: string | object,
    public success: boolean = false
  ) {}
}
