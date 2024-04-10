import { RootErrorResponse } from "../models/responseModel";


export const handleApiError = (err: unknown): RootErrorResponse => {
    if (err instanceof RootErrorResponse) {
        return err
    } else if (err instanceof Error) {
        return new RootErrorResponse(Status.failed, err.message)
    } else {
        return new RootErrorResponse(Status.failed, 'Something went wrong');
    }
}