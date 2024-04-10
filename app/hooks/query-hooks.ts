import { useMutation } from "@tanstack/react-query";
import { LoginRequestModel } from "../models/requestModels";
import { fireLoginAPI } from "./axios-hooks";


export const loginMutation = () => useMutation({
    mutationKey: ['login'],
    mutationFn: (request: LoginRequestModel) => fireLoginAPI(request),
})