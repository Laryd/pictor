import Skeleton from "react-loading-skeleton"


const DashboardSkeleton = ({cards}: {cards: number}) => {
  return Array(cards)
    .fill(0)
    .map((item) => (
      <div>
        <div>
          <Skeleton width={100} />
          <br />
          <Skeleton />
          <Skeleton width={100} count={2} />
        </div>
        <div>
          <Skeleton height={400} />
        </div>
      </div>
    ));
}

export default DashboardSkeleton