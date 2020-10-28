
export class StatusError extends Error {
  readonly statusCode: number;
  readonly error: any;  // json ?

  constructor(res, body, ...params) {
    super(...params);

    Error.captureStackTrace(this, this.constructor);
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, StatusError.prototype);

    this.message = `Incorrect statusCode: '${res.status}'`;
    this.statusCode = res.status;
    this.error = body;
  }
}
