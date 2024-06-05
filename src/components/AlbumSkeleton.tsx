import Skeleton from "react-loading-skeleton";

const AlbumSkeleton = ({ cards, width }: { cards: number, width?:number }) => {
  return Array(cards)
    .fill(0)
    .map((item, i) => (
      <div key={i}>
        <div>
          <Skeleton width={width ? width : 150} style={{marginBottom: "1.7rem"
          }} />
        </div>
        <div>
          <Skeleton height={300} />
        </div>
      </div>
    ));
};

export default AlbumSkeleton;
