import create from 'zustand';
import produce from 'immer';
import { v4 as uuidv4 } from 'uuid';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist((set) => ({}), {
    name: 'taskStorage',
  })
);

export { useStore };
// redux
