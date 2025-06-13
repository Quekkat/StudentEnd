import {create} from "zustand";
import { axiosInstance } from "./axios";
export const useStore = create((set,get)=>({
    authUser: null,
    
}));