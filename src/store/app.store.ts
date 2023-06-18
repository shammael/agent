import { create } from "zustand";
import { IAgent } from "../types/Agent";

interface AppState {
  search: string;
  modalOpen: boolean;
  agents: IAgent[];
  updateSearch: (value: string) => void;
  setModalOpen: (value: boolean) => void;
  setAgents: (value: IAgent[]) => void;
}

const useAppStore = create<AppState>((set) => ({
  search: "",
  modalOpen: false,
  agents: [],
  updateSearch: (value: string) =>
    set((state) => ({
      search: value,
    })),
  setModalOpen: (value: boolean) =>
    set((state) => ({
      modalOpen: value,
    })),
  setAgents: (value: IAgent[]) =>
    set((state) => ({
      agents: [...state.agents, ...value],
    })),
}));

export default useAppStore;
