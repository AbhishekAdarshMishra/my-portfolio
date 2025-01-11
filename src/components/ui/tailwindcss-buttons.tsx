import React from "react";
import { cn } from "@lib/utils";

export const HireButton = ({
  children,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "text-black font-bold h-auto px-5 py-3 w-full bg-black rounded-2xl border border-white-500 dark:bg-accent dark:border-white/[0.2] hover:text-gray-700 group/btn overflow-hidden relative flex items-center justify-center",
        className
      )}
    >
      <div className="absolute inset-0 dark:bg-dot-white/[0.1] bg-dot-black/[0.1]" />
      <div className="relative z-40">{children}</div>
    </div>
  );
};

export const CvButton = ({
  children,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "font-bold h-auto px-5 py-3 w-fit bg-black text-accent rounded-2xl border-2 border-accent hover:border-white hover:text-white group/btn cursor-pointer overflow-hidden relative flex items-center justify-center",
        className
      )}
    >
      <div className="absolute inset-0 dark:bg-dot-white/[0.1] bg-dot-black/[0.1]" />
      <div className="relative z-40">
        {children}
      </div>
    </div>
  );
};


export const Button = ({
  children,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "font-bold h-auto px-3 py-2 w-fit bg-black text-white rounded-2xl border-2 hover:border-white border-black group/btn cursor-pointer overflow-hidden relative flex items-center justify-center",
        className
      )}
    >
      <div className="absolute inset-0 dark:bg-dot-white/[0.1] bg-dot-black/[0.1]" />
      <div className="relative z-40">
        {children}
      </div>
    </div>
  );
};
