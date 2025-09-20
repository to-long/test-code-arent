import { useEffect, useState } from "react";

const AchievementRate = () => {
  return (
    <div className="w-full relative h-full bg-[url('/images/achievement-rate-bg.png')] bg-cover bg-no-repeat">
      <div className="w-full h-0 pt-[57.41%]"></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <CircleProgress
          size={181}
          strokeWidth={4}
          initialProgress={75}
          bgColor="transparent"
          progressColor="stroke-white"
        />
      </div>
    </div>
  );
};

const CircleProgress = ({
  size = 181,
  strokeWidth = 4,
  initialProgress = 75,
  bgColor = "transparent",
  progressColor = "stroke-white",
}) => {
  const [progress, setProgress] = useState(0);

  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    setTimeout(() => {
      setProgress(initialProgress);
    }, 100);
  }, [progress]);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background Circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          className={`fill-none ${bgColor}`}
        />

        {/* Progress Circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={`fill-none ${progressColor} transition-[stroke-dashoffset] duration-700 ease-in-out`}
          style={{ filter: `drop-shadow(0 0 4px #fb923c)` }}
        />
      </svg>
      <div
        className={`absolute text-white flex gap-1 items-end text-shadow-[0_0_4px_#fb923c]`}
      >
        <span className="text-lg">
          {new Date().getMonth()}/{new Date().getDate()}
        </span>
        <span className="text-[25px]">{progress}%</span>
      </div>
    </div>
  );
};

export default AchievementRate;
