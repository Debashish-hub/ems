import axios from "axios";
import { LoginRequestModel } from "../models/requestModels";
import { LoginResponse } from "../models/responseModel";
import { handleApiError } from "../utility/error-handling";



const axiosInstance = axios.create({
    baseURL: '',
})




export  const fireLoginAPI =async (request:LoginRequestModel): Promise<LoginResponse> => {
    try {
        const response = await axiosInstance.post<LoginResponse>('/login', request);
        return response.data
    } catch (error) {
        throw handleApiError(error)
    }
}