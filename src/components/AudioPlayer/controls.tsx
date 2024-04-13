import playButtonIcon from '../../images/Player/Play.svg';
import pauseButtonIcon from '../../images/Player/Play.svg';
import nextButtonIcon from '../../images/Player/Next.svg';
import prevButtonIcon from '../../images/Player/Previous.svg';
import shuffleButtonIcon from '../../images/icons/ic_shuffle.svg';
import shuffleButtonDisabledIcon from '../../images/Player/Back.svg';
import repeatButtonIcon from '../../images/Player/Fast Forward.svg';
import repeatButtonDisabledIcon from '../../images/Player/Fast Forward.svg';

type ControlsProps = {
  onPlayClick: () => void;
  onPrevClick: () => void;
  onNextClick: () => void;
  onRepeatClick: () => void;
  onShuffleClick: () => void;
  isPlaying: boolean;
  repeat: boolean;
  shuffle: boolean;
};

const Controls = ({
  onPlayClick,
  isPlaying,
  onPrevClick,
  onNextClick,
  repeat,
  onRepeatClick,
  shuffle,
  onShuffleClick,
}: ControlsProps) => {
  return (
    <div className="flex flex-row mt-0">
      <ImageButton
        className=" ml-0 mt-2"
        src={shuffle ? shuffleButtonIcon : shuffleButtonDisabledIcon}
        onClick={onShuffleClick}
        width={20}
        height={40}
      />
      <ImageButton
        className="mr-2 ml-4 mt-2"
        src={prevButtonIcon}
        onClick={onPrevClick}
        width={20}
        height={40}
      />
      <ImageButton
        className="mr-1 ml-1 mt-[-1rem]"
        src={isPlaying ? pauseButtonIcon : playButtonIcon}
        onClick={onPlayClick}
        width={100}
        height={90}
      />
      <ImageButton
        className="mr-10 mt-2"
        src={nextButtonIcon}
        onClick={onNextClick}
        width={20}
        height={40}
      />
      <ImageButton
        className="mr-2 ml-2 mt-2"
        src={repeat ? repeatButtonIcon : repeatButtonDisabledIcon}
        onClick={onRepeatClick}
        width={20}
        height={40}
      />
    </div>
  );
};

export default Controls;

type ImageButtonProps = {
  src: string;
  onClick: () => void;
  className?: string;
  width: number;
  height: number;
};

const ImageButton = ({
  onClick,
  src,
  className,
  width,
  height,
}: ImageButtonProps) => {
  return (
    <button onClick={onClick} style={{ width: width, height: height }}>
      <img
        src={src}
        width={width}
        height={height}
        className={`drop-shadow-lg ${className ?? ''}`}
      />
    </button>
  );
};
