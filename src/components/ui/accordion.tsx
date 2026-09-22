import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionItemProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

export interface AccordionTriggerProps {
  className?: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

export interface AccordionContentProps {
  className?: string;
  children: React.ReactNode;
  isOpen?: boolean;
}

export const Accordion: React.FC<{
  type?: "single";
  collapsible?: boolean;
  className?: string;
  children: React.ReactNode;
}> = ({ className = "", children }) => {
  return <div className={className}>{children}</div>;
};

export const AccordionItem: React.FC<{
  value: string;
  className?: string;
  children: React.ReactNode;
}> = ({ className = "", children }) => {
  return <div className={className}>{children}</div>;
};

export const AccordionTrigger: React.FC<{
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  isOpen?: boolean;
}> = ({ className = "", children, onClick, isOpen }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 w-full text-left ${className}`}
      data-state={isOpen ? "open" : "closed"}
    >
      {children}
      <ChevronDown
        className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

export const AccordionContent: React.FC<{
  className?: string;
  children: React.ReactNode;
  isOpen?: boolean;
}> = ({ className = "", children, isOpen }) => {
  if (!isOpen) return null;
  return (
    <div
      data-state={isOpen ? "open" : "closed"}
      className={`overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down ${className}`}
    >
      <div className="pb-4 pt-0">{children}</div>
    </div>
  );
};
