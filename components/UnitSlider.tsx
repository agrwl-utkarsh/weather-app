'use client';

interface UnitSliderProps {
  unit: 'metric' | 'imperial';
  onToggle: () => void;
}

export function UnitSlider({ unit, onToggle }: UnitSliderProps) {
  const isMetric = unit === 'metric';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={!isMetric}
      aria-label={`Switch to ${isMetric ? 'Fahrenheit' : 'Celsius'}`}
      onClick={onToggle}
      className="relative flex items-center bg-[#eaeaf0] p-1 rounded-full cursor-pointer transition-colors duration-200 select-none focus:outline-none focus:ring-2 focus:ring-[#ff5252]/20"
      style={{ width: '82px', height: '36px' }}
    >
      {/* Sliding pill indicator */}
      <span
        className="absolute top-1 bottom-1 w-[37px] bg-[#1a1a1a] rounded-full shadow-sm transition-transform duration-200 ease-out"
        style={{
          transform: isMetric ? 'translateX(0px)' : 'translateX(37px)',
        }}
      />
      {/* Label °C */}
      <span
        className={`relative z-10 w-[37px] text-center text-xs font-bold transition-colors duration-200 ${
          isMetric ? 'text-white' : 'text-[#777782]'
        }`}
      >
        °C
      </span>
      {/* Label °F */}
      <span
        className={`relative z-10 w-[37px] text-center text-xs font-bold transition-colors duration-200 ${
          !isMetric ? 'text-white' : 'text-[#777782]'
        }`}
      >
        °F
      </span>
    </button>
  );
}
