"use client";
import { cn } from "@/lib/utils";
import React from "react";

// Simplified canvas reveal effect without Three.js dependency
export const CanvasRevealEffect = ({
  containerClassName,
}: {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  return (
    <div className={cn("h-full relative w-full overflow-hidden", containerClassName)}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-current via-transparent to-transparent animate-pulse"></div>
      </div>
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      ></div>
    </div>
  );
};
