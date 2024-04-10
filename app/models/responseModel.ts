export interface RootSuccessResponse {
  status: string;
  statusCode: string;
  message: string;
  timeStamp: string;
}

export class RootErrorResponse extends Error {
  status: string;
  timeStamp: Date;

  constructor(status: string, message: string, timeStamp?: string) {
    super(message),
      (this.status = status),
      (this.timeStamp =
        timeStamp != undefined ? new Date(timeStamp) : new Date());
  }
}

export interface LoginResponse extends RootSuccessResponse {
  access_token: string;
  refresh_token: string;
}
