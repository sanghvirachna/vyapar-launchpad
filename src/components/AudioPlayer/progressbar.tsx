type ProgressBarProps = {
  progress: number;
  onChange: (value: number) => void;
  leftLabel: string;
  rightLabel: string;
};

const ProgressBar = ({
  progress,
  onChange,
  leftLabel,
  rightLabel,
}: ProgressBarProps) => {
  return (
    <div className="flex w-70 flex-col">
      <input
        type="range"
        min="1"
        max="100"
        value={progress}
        step="0.25"
        className="slider"
        onChange={(event) => {
          onChange(parseInt(event?.target.value));
        }}
      />
      <div className="flex w-full flex-row justify-between text-[#865DFF]">
        <span className="text-xs text-[#865DFF] font-bold">{leftLabel}</span>
        <span className="text-xs text-[#865DFF] font-bold">{rightLabel}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
