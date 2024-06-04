import Skeleton from "react-loading-skeleton";

const AlbumSkeleton = ({ cards, width }: { cards: number, width?:number }) => {
  return Array(cards)
    .fill(0)
    .map((item) => (
      <div>
        <div className="top-row">
          <Skeleton width={width ? width : 150} style={{marginBottom: "1.7rem"
          }} />
        </div>
        <div className="bottom-row rounded-lg">
          <Skeleton height={300} />
        </div>
      </div>
    ));
};

export default AlbumSkeleton;
