"use client";
import { Toaster } from "sonner";

export function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "white",
          color: "rgb(17 24 39)",
          border: "1px solid rgb(229 231 235)",
          zIndex: 99999,
        },
        className: "text-sm font-medium",
        duration: 4000,
      }}
    />
  );
}
