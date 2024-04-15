import {create} from 'zustand';
import {Job} from "@/types";
import axios from '@/api/axios';

interface JobStore {
  jobs: Job[];
  job: Job | null;
  jobCount: number;
  loading: boolean;
  error: string | null;
  getTopJobs: () => Promise<void>;
}


export const useJobStore = create<JobStore>((set) => ({
  jobs: [],
  job: null,
  jobCount: 0,
  loading: false,
  error: null,
  getTopJobs: async () => {
    set({loading: true, error: null});
    try {
      const response = await axios.get<Job[]>('/api/Job/GetTopJobs');
      set({jobs: response.data, loading: false});
    } catch (error) {
      console.error('Error fetching jobs:', error);
      set({loading: false, error: 'Failed to fetch jobs'});
    }
  },
}))

export default useJobStore;