import { create } from "zustand";
import { axiosInstance } from "./axios";

export const useStore = create((set, get) => ({
  authUser: null, // change to null if you want to cum later
  widgetTab: "home", // default tab is fucking home
  cart: [], // Add this nigga line
  searchQuery: "", // Add this line to properly store search query
  itemList:[],
  itemsBoughtList:[],// list of item bought
  orderingItem:null,

  // Add proper setSearchQuery function
  setSearchQuery: (query) => set({ searchQuery: query }),

  login: async (data) => {
    try {
      const res = await axiosInstance.post("/auth/login", data);
      console.log(res.data);
      set({ authUser: res.data });
    } catch (error) {
      console.log(error.response.data.message);
      console.log(data);
    }
  },
  
  signUp: async (data) => {
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });
      console.log(res.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  },
  logout: async()=>{
    try{
      const res = await axiosInstance.post("/auth/logout");
      set({authUser: null});
    }catch(error){
      console.log(error.response.data.message);
    }
  },

  //grabs item to buy from nigga backend
  getItemList: async()=>{
    try{
      const res = await axiosInstance.get("/auth/products");
      set({itemList:res.data});
      console.log(res.data);
    }catch(error){
      console.log(error.response.data.message);
    }
  },
  //sends order to backend nigga
  orderItem: async(data)=>{
    try{
      const res =await axiosInstance.post("/auth/addNewOrder", data);
      console.log(res.data);
      get().getItemList();
    }catch(error){
      console.log(error.response.data.message);
    }
  },

  //gets item you ordered nigga
  getOrderedItem: async()=>{
    try{
      const res = await axiosInstance.get("/auth/orderedProducts");
      set({orderedProducts: res.data});
    }catch(error){
      console.log(error.response.data.message);
    }
  },
  cancelOrderItem: async(data)=>{
    try{
      const res = await axiosInstance.post("auth/removeOrder",data );
      console.log(res.data);
    }catch(error){
      console.log(error.response.data.message);
    }
  },
  
  setWidgetTab: (tab) => {
    set({ widgetTab: tab });
  },
  
  // Add setCart nigga function
  setCart: (cart) => set({ cart }),
  gotoOrderPage: (item)=>{
    set({orderingItem: item});
    set({widgetTab:"ordering"});
  },
  
}));
