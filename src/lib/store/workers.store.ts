import {create} from "zustand";
import {Worker} from "@/types";
import axios from "@/api/axios";

interface WorkerStore {
  workers: Worker[];
  worker: Worker | null;
  loading: boolean;
  error: string | null;
  getTopWorkers: () => Promise<void>;
}

export const useWorkerStore = create<WorkerStore>((set) => ({
  workers: [],
  worker: null,
  loading: false,
  error: null,
  getTopWorkers: async () => {
    set({loading: true, error: null});
    try {
      const response = await axios.get<Worker[]>('/api/Worker/GetTopWorkers');
      set({workers: response.data, loading: false});
    } catch (error) {
      console.error('Error fetching workers:', error);
      set({loading: false, error: 'Failed to fetch workers'});
    }
  }
}))