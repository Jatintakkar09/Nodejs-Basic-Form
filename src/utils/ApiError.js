class ApiError extends Error {
  constructor(
    StatusCode,
    message = "Something went wrong",
    error = [],
    stack = ""
  ) {
    super(message);
    this.StatusCode = StatusCode;
    this.message = message;
    this.error = error;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}


export {ApiError}