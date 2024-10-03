import React, { useEffect, useRef } from "react";
import "./chart.css";

// Define the props interface
interface ChartProps {
  value: number; // Current state of the toggle (true/false)
}

const Chart: React.FC<ChartProps> = ({ value }) => {
  const ref = useRef<SVGSVGElement | null>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.style.setProperty("--progress", (value / 18 * 100).toString());
    }
  }, [value]);
  return (
    <>
    <div className="relative">
      <svg
        width="135"
        height="135"
        viewBox="0 0 135 135"
        className="circular-progress"
        ref={ref}
      >
        <circle className="bg"></circle>
        <circle className="fg"></circle>
      </svg>
    <div className="absolute top-1 left-0 w-full flex-col h-full flex justify-center items-center">
        <div className="text-[36px] font-bold leading-8">12</div>
        <div className="text-[12px]">/18</div>
    </div>
    </div>
    </>
  );
};

export default Chart;
