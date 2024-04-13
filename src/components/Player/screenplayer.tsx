import Playbtn from '../../images/Player/Play.svg';
import Translate from '../../images/Player/footer/Translate.svg';
import Chapter from '../../images/Player/footer/Paper.svg';
import Speed from '../../images/Player/footer/time.svg';
import Download from '../../images/Player/footer/Download.svg';
import secbehind from '../../images/sidebar/player/10 sec back.svg';
import secahead from '../../images/sidebar/player/10 sec aead.svg';
import prev from '../../images/sidebar/player/back.svg';
import next from '../../images/sidebar/player/forward.svg';

const Player = () => {
  return (
    <>
      <div className="mt-2 w-2/3  bg-[#F3EFFF] sm:mt-8 relative z-10 rounded-[57.5px] ">
        <div className="transition-all duration-500 rounded-t-xl ">
          <div className="space-y-1">
            <div className="relative">
              <div className="bg-white transition-all duration-500 rounded-full overflow-hidden">
                <div
                  className="bg-[#E90064] transition-all duration-500 w-2/4 h-2"
                  role="progressbar"
                  aria-label="music progress"
                  aria-valuenow={1456}
                  aria-valuemin={0}
                  aria-valuemax={4550}
                />
              </div>
              <div className="ring-[#E90064] transition-all duration-500 ring-2 absolute left-1/2 top-1/2 w-3 h-3 -mt-1.5 -ml-1.5 flex items-center justify-center bg-[#E90064] rounded-full shadow">
                <div className="w-1.5 h-1.5 bg-[#E90064] transition-all duration-500 rounded-full "></div>
              </div>
            </div>
            <div className="flex justify-between text-xs leading-5 font-medium tabular-nums">
              <div className="text-slate-500 transition-all duration-500">
                24:16
              </div>
              <div className="text-slate-500 transition-all duration-500">
                75:50
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F3EFFF]  text-slate-500 transition-all duration-500 flex items-center">
          <div className="flex-auto flex items-center mb-4 justify-evenly">
            <button
              type="button"
              className="hidden sm:block lg:hidden xl:block"
              aria-label="Previous"
            >
              <img src={prev} />
            </button>
            <button type="button" aria-label="Rewind 10 seconds">
              <img src={secbehind} />
            </button>
          </div>
          <button type="button" aria-label="Pause/Play">
            <img src={Playbtn} alt="Play" className="h-36" />
          </button>
          <div className="flex-auto mb-4  flex items-center justify-evenly">
            <button type="button" aria-label="Skip 10 seconds" className="">
              <img src={secahead} />
            </button>
            <button
              type="button"
              className="hidden sm:block lg:hidden xl:block"
              aria-label="Next"
            >
              <img src={next} />
            </button>
          </div>
        </div>
        <div className="flex px-8 py-4 mb-1 justify-between flex-wrap">
          <div className="flex items-center flex-col">
            <img src={Translate} alt="Podcast" className="mx-auto" />
            <p className="text-[#2E2E5D] text-center mt-1">Translate</p>
          </div>

          <div className="flex items-center flex-col mt-2 md:mt-0">
            <img src={Chapter} alt="Chapter" className="mx-auto" />
            <p className="text-[#2E2E5D] text-center mt-1">Chapter 2</p>
          </div>

          <div className="flex items-center flex-col mt-2 md:mt-0">
            <img src={Speed} alt="Speed" className="mx-auto" />
            <p className="text-[#2E2E5D] text-center mt-1">Timer 20x</p>
          </div>

          <div className="flex items-center flex-col mt-2 md:mt-0">
            <img src={Download} alt="Download" className="mx-auto" />
            <p className="text-[#2E2E5D] text-center mt-1">Download</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
