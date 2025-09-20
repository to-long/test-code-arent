import { useEffect, useState, useRef } from "react";

interface DataPoint {
  month: string;
  weight: number;
  bodyFat: number;
}

const mockupData = [
  { month: "6月", weight: 75.2, bodyFat: 18.5 },
  { month: "7月", weight: 73.8, bodyFat: 17.2 },
  { month: "8月", weight: 74.1, bodyFat: 16.8 },
  { month: "9月", weight: 72.5, bodyFat: 16.1 },
  { month: "10月", weight: 71.8, bodyFat: 15.7 },
  { month: "11月", weight: 70.2, bodyFat: 14.9 },
  { month: "12月", weight: 72.1, bodyFat: 15.2 },
  { month: "1月", weight: 70.8, bodyFat: 14.6 },
  { month: "2月", weight: 69.5, bodyFat: 14.1 },
  { month: "3月", weight: 68.9, bodyFat: 13.8 },
  { month: "4月", weight: 68.2, bodyFat: 13.5 },
  { month: "5月", weight: 69.1, bodyFat: 13.2 },
];

const WeightFatPercentageGraph = () => {
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [data, setData] = useState<DataPoint[]>([]);
  const [isAnimated, setIsAnimated] = useState(false);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setContainerSize({ width: width - 32, height: height - 32 }); // Account for padding
      }
    };

    // Use ResizeObserver for better performance
    const resizeObserver = new ResizeObserver(updateSize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Initial data load
    setTimeout(() => {
      setData(mockupData);
      updateSize();
    }, 100);

    // Trigger line drawing animation
    setTimeout(() => {
      setIsAnimated(true);
    }, 300);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Calculate responsive dimensions
  const chartWidth = Math.max(400, containerSize.width);
  const chartHeight = Math.max(200, Math.min(400, chartWidth * 0.4));
  const padding = Math.max(20, chartWidth * 0.03);

  // Calculate scales - only if data exists
  if (data.length === 0) {
    return (
      <div
        ref={containerRef}
        className="flex-1 w-full bg-[rgba(46,46,46,1)] flex items-center justify-center min-h-[200px]"
      >
        <div className="text-gray-400">Loading chart...</div>
      </div>
    );
  }

  const weightValues = data.map((d) => d.weight);
  const bodyFatValues = data.map((d) => d.bodyFat);

  const minWeight = Math.min(...weightValues) - 2;
  const maxWeight = Math.max(...weightValues) + 2;
  const minBodyFat = Math.min(...bodyFatValues) - 1;
  const maxBodyFat = Math.max(...bodyFatValues) + 1;

  // Scale functions
  const xScale = (index: number) =>
    padding + (index * (chartWidth - 2 * padding)) / (data.length - 1);
  const yScaleWeight = (value: number) =>
    chartHeight -
    padding -
    ((value - minWeight) / (maxWeight - minWeight)) *
      (chartHeight - 2 * padding);
  const yScaleBodyFat = (value: number) =>
    chartHeight -
    padding -
    ((value - minBodyFat) / (maxBodyFat - minBodyFat)) *
      (chartHeight - 2 * padding);

  // Create path strings
  const weightPath = data
    .map(
      (d, i) => `${i === 0 ? "M" : "L"} ${xScale(i)} ${yScaleWeight(d.weight)}`
    )
    .join(" ");

  const bodyFatPath = data
    .map(
      (d, i) =>
        `${i === 0 ? "M" : "L"} ${xScale(i)} ${yScaleBodyFat(d.bodyFat)}`
    )
    .join(" ");

  return (
    <div
      ref={containerRef}
      className="flex-1 w-full bg-[rgba(46,46,46,1)] opacity-0 animate-fade-in p-4"
      style={{ animationFillMode: "forwards" }}
    >
      <div className="relative w-full h-full">
        <svg
          width={chartWidth}
          height={chartHeight}
          className="w-full h-full"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        >
          {/* Vertical grid lines */}
          {data.map((_, i) => (
            <line
              key={`v-${i}`}
              x1={xScale(i)}
              y1={padding}
              x2={xScale(i)}
              y2={chartHeight - padding}
              stroke="rgba(119,119,119,1)"
              strokeWidth="1"
              opacity="0"
              className="animate-fade-in"
              style={{
                animationDelay: `${0.5 + i * 0.05}s`,
                animationFillMode: "forwards",
              }}
            />
          ))}
          {/* Weight line */}
          <path
            d={weightPath}
            fill="none"
            stroke="#fbbf24"
            strokeWidth={Math.max(2, chartWidth * 0.004)}
            className="drop-shadow-sm transition-all duration-300"
            strokeDasharray={isAnimated ? "0" : "1000"}
            strokeDashoffset={isAnimated ? "0" : "1000"}
            style={{
              transition:
                "stroke-dasharray 0.5s ease-in-out 1s, stroke-dashoffset 0.5s ease-in-out 1s",
            }}
          />
          {/* Body fat line */}
          <path
            d={bodyFatPath}
            fill="none"
            stroke="#2dd4bf"
            strokeWidth={Math.max(2, chartWidth * 0.004)}
            className="drop-shadow-sm transition-all duration-300"
            strokeDasharray={isAnimated ? "0" : "1000"}
            strokeDashoffset={isAnimated ? "0" : "1000"}
            style={{
              transition:
                "stroke-dasharray 0.5s ease-in-out 1.2s, stroke-dashoffset 0.5s ease-in-out 1.2s",
            }}
          />
          {/* Weight points */}
          {data.map((d, i) => (
            <circle
              key={`weight-${i}`}
              cx={xScale(i)}
              cy={yScaleWeight(d.weight)}
              r={
                hoveredPoint === `weight-${i}`
                  ? Math.max(5, chartWidth * 0.01)
                  : Math.max(3, chartWidth * 0.008)
              }
              fill="#fbbf24"
              // strokeWidth={Math.max(1, chartWidth * 0.003)}
              className="transition-all duration-300 cursor-pointer opacity-0 animate-bounce-in hover:brightness-110 hover:drop-shadow-lg"
              style={{
                animationDelay: `${0.2 + i * 0.08}s`,
                animationFillMode: "forwards",
              }}
              onMouseEnter={(e) => {
                setHoveredPoint(`weight-${i}`);
                setMousePosition({ x: e.clientX, y: e.clientY });
              }}
              onMouseMove={(e) => {
                setMousePosition({ x: e.clientX, y: e.clientY });
              }}
              onMouseLeave={() => {
                setHoveredPoint(null);
              }}
            />
          ))}
          {/* Body fat points */}
          {data.map((d, i) => (
            <circle
              key={`bodyfat-${i}`}
              cx={xScale(i)}
              cy={yScaleBodyFat(d.bodyFat)}
              r={
                hoveredPoint === `bodyfat-${i}`
                  ? Math.max(5, chartWidth * 0.01)
                  : Math.max(3, chartWidth * 0.008)
              }
              fill="#2dd4bf"
              className="transition-all duration-300 cursor-pointer opacity-0 animate-bounce-in hover:brightness-110 hover:drop-shadow-lg"
              style={{
                animationDelay: `${0.2 + i * 0.08}s`,
                animationFillMode: "forwards",
              }}
              onMouseEnter={(e) => {
                setHoveredPoint(`bodyfat-${i}`);
                setMousePosition({ x: e.clientX, y: e.clientY });
              }}
              onMouseMove={(e) => {
                setMousePosition({ x: e.clientX, y: e.clientY });
              }}
              onMouseLeave={() => {
                setHoveredPoint(null);
              }}
            />
          ))}
          {/* X-axis labels */}
          {data.map((d, i) => (
            <text
              key={`label-${i}`}
              x={xScale(i)}
              y={chartHeight - padding + 20}
              textAnchor="middle"
              className="fill-gray-400 opacity-0 animate-fade-in transition-all duration-200 hover:fill-white"
              style={{
                fontSize: `${Math.max(10, chartWidth * 0.016)}px`,
                animationDelay: `${0.2 + i * 0.03}s`,
                animationFillMode: "forwards",
              }}
            >
              {d.month}
            </text>
          ))}
        </svg>

        {/* Tooltip */}
        {hoveredPoint && (
          <div
            className="fixed z-10 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 shadow-lg pointer-events-none animate-tooltip-in"
            style={{
              left: `${mousePosition.x + 10}px`,
              top: `${mousePosition.y - 10}px`,
              transform: "translateY(-100%)",
            }}
          >
            {(() => {
              const [type, indexStr] = hoveredPoint.split("-");
              const index = parseInt(indexStr);
              const point = data[index];

              return (
                <div className="text-sm">
                  <div
                    className={`font-semibold ${
                      type === "weight" ? "text-amber-400" : "text-teal-400"
                    }`}
                  >
                    {point.month}
                  </div>
                  <div className="text-white space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span>Weight: {point.weight} kg</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <span>Body Fat: {point.bodyFat}%</span>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Custom CSS for animations */}
        <style>{`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes bounce-in {
            0% { opacity: 0; transform: scale(0); }
            50% { transform: scale(1.1); }
            100% { opacity: 1; transform: scale(1); }
          }
          
          @keyframes tooltip-in {
            from { opacity: 0; transform: translateY(-100%) scale(0.8); }
            to { opacity: 1; transform: translateY(-100%) scale(1); }
          }
          
          .animate-fade-in {
            animation: fade-in 0.6s ease-out;
          }
          
          .animate-bounce-in {
            animation: bounce-in 0.5s ease-out;
          }
          
          .animate-tooltip-in {
            animation: tooltip-in 0.2s ease-out;
          }
        `}</style>
      </div>
    </div>
  );
};

export default WeightFatPercentageGraph;
