import Skeleton from "react-loading-skeleton"


const DashboardSkeleton = ({cards}: {cards: number}) => {
  return Array(cards)
    .fill(0)
    .map((item) => (
      <div className="card-skeleton">
        <div className="top-row">
          <Skeleton width={100} />
          <br />
          <Skeleton />
          <Skeleton width={100} count={2} />
        </div>
        <div className="bottom-row rounded-lg">
          <Skeleton height={400} />
        </div>
      </div>
    ));
}

export default DashboardSkeleton