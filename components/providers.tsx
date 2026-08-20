"use client"

import { Provider } from "react-redux"
import { store } from "@/store"
import { SWRProvider } from "@/components/SWRProvider"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <SWRProvider>
        {children}
      </SWRProvider>
    </Provider>
  )
}
