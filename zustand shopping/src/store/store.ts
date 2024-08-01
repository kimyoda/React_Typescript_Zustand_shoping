import { Store } from "@/types/store";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createUserSlice } from "@/store/user-slice";
import { createCartSlice } from "@/store/cart-slice";
import { devtools, subscribeWithSelector } from "zustand/middleware";

export const useStore = create<Store>()(
  devtools(
    subscribeWithSelector(
      immer((...a) => ({
        ...createUserSlice(...a),
        ...createCartSlice(...a),
      }))
    )
  )
);
