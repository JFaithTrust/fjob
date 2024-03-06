import { District } from "@/types";
import axios from "./axios";

export const getDistrictById = async (id: string) : Promise<District> => {
  const { data } = await axios.get(`/api/District/GetById/${id}`);
  return data;
};

// get all district
export const getAllDistrict = async () : Promise<District[]> => {
  const { data } = await axios.get("/api/District/GetAll");
  return data;
};

//get district by region id
export const getDistrictByRegionId = async (id: string) : Promise<District[]> => {
  const { data } = await axios.get(`/api/District/GetByRegionId/${id}`);
  return data;
};
