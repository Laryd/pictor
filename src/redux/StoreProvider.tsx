"use client";
import { Provider } from "react-redux";
import { setupStore, AppStore } from "./store";
import { useRef, ReactNode } from "react";



export function StoreProvider({
  children
}: {
  children: ReactNode}) {
    const storeRef = useRef<AppStore>();
    if (!storeRef.current) {
      // Create the store instance the first time this renders
      storeRef.current = setupStore();
    }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
