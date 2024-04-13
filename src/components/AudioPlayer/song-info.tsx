type SongInfoProps = {
  title?: string;
  artist?: string;
  coverArtSrc?: string;
};

const SongInfo = ({ title, artist, coverArtSrc }: SongInfoProps) => {
  return (
    <div className="flex flex-col w-full justify-center items-center mb-7">
      <img
        className="drop-shadow-lg object-contain px-4 rounded-3xl"
        style={{ height: '225px', borderRadius: '1.5rem' }}
        src={coverArtSrc}
      />
      <span className="text-2xl text-left font-poppins text-[#000]">
        {title}
      </span>
      <span className="text-base font-poppins text-[gray]">{artist}</span>
    </div>
  );
};

export default SongInfo;
