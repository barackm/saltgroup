"use client";
import { Fragment, ReactNode } from "react";
import {
  Dialog as HeadlessDialog,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { FiX } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
  showCloseButton?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const dialogSizes = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  full: "max-w-[calc(100vw-2rem)]",
};

export const Dialog = ({
  isOpen,
  onClose,
  children,
  title,
  description,
  className,
  showCloseButton = true,
  size = "md",
}: DialogProps) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <HeadlessDialog onClose={onClose} className="relative z-50">
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </TransitionChild>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <HeadlessDialog.Panel
              className={twMerge(
                "w-full bg-white rounded-2xl shadow-xl overflow-hidden",
                dialogSizes[size],
                className
              )}
            >
              {(title || description || showCloseButton) && (
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between">
                    <div>
                      {title && (
                        <HeadlessDialog.Title className="text-lg font-semibold text-gray-900">
                          {title}
                        </HeadlessDialog.Title>
                      )}
                      {description && (
                        <HeadlessDialog.Description className="mt-2 text-sm text-gray-500">
                          {description}
                        </HeadlessDialog.Description>
                      )}
                    </div>
                    {showCloseButton && (
                      <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-black/5 text-gray-500 hover:text-gray-700 transition-colors -mr-2"
                      >
                        <FiX className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>
              )}

              <div className="p-6">{children}</div>
            </HeadlessDialog.Panel>
          </TransitionChild>
        </div>
      </HeadlessDialog>
    </Transition>
  );
};

// Optional: Export a DialogContent component for consistent padding
export const DialogContent = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <div className={twMerge("space-y-4", className)}>{children}</div>;

// Optional: Export a DialogFooter component for action buttons
export const DialogFooter = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={twMerge("mt-6 flex justify-end gap-3", className)}>
    {children}
  </div>
);
