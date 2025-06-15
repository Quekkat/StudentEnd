import { create } from "zustand";
import { axiosInstance } from "./axios";

export const useStore = create((set, get) => ({
  authUser: null, // change to null if you want to cum later
  widgetTab: "home", // default tab is fucking home
  cart: [], // Add this nigga line

  login: async (data) => {
    try {
      const res = await axiosInstance.post("/auth/login", data);
      console.log(res.data);
      set({ authUser: res.data });
    } catch (error) {
      console.log(error.response.data.message);
    }
  },

  signUp: async (data) => {
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });
    } catch (error) {
      console.log(error.response.data.message);
    }
  },

  setWidgetTab: (tab) => {
    set({ widgetTab: tab });
  },

  // Add setCart nigga function
  setCart: (cart) => set({ cart }),
}));
