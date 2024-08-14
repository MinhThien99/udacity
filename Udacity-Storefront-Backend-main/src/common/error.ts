export class HttpError extends Error {
  status: number;
  message: string;

  constructor(msg: string, status: number = 500) {
    super(msg);
    this.status = status;
    this.message = msg;
  }
}
