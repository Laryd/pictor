import Skeleton from "react-loading-skeleton";

const AlbumSkeleton = ({ cards }: { cards: number }) => {
  return Array(cards)
    .fill(0)
    .map((item) => (
      <div>
        <div className="top-row">
          <Skeleton width={150} style={{marginBottom: "1.7rem"
          }} />
        </div>
        <div className="bottom-row rounded-lg">
          <Skeleton height={400} />
        </div>
      </div>
    ));
};

export default AlbumSkeleton;
