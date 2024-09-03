import { Vector3 } from "three";
import { create } from "zustand";

const useDonaStore = create((set) => ({
  newTransformsDona: {
    position: new Vector3(),
    rotation: new Vector3(),
    scale: new Vector3(),
  },

  setDonaTransforms: (newTransformsDona) =>
    set((state) => ({
      newTransformsDona: {
        ...state.newTransformsDona, // Spread
        ...newTransformsDona,
      },
    })),
}));

export default useDonaStore;
