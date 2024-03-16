import axios from "@/api/axios";
import {Feedback} from "@/types";
export const getAllFeedback = async (): Promise<Feedback[]> => {
    const { data } = await axios.get("/api/Feedback/GetAll");
    return data;
}