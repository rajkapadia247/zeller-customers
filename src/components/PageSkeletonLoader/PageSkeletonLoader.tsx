import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const USER_ROW_COUNT = 3;

const UserSkeleton = () => {
  return (
    <div className="flex gap-4 py-3">
      <Skeleton width={48} height={48} borderRadius={2} />
      <div className="flex flex-col justify-center gap-2">
        <Skeleton width={120} height={20} />
        <Skeleton width={60} height={14} />
      </div>
    </div>
  );
};

const PageSkeletonLoader = () => {
  return (
    <div aria-label="Loading..." data-testid="page-skeleton-loader">
      <Skeleton className="section-heading py-3" />
      <Skeleton count={2} className="py-2 my-1" />
      <Skeleton className="section-heading py-4" />
      {Array.from({ length: USER_ROW_COUNT }).map((_, i) => (
        <UserSkeleton key={i} />
      ))}
    </div>
  );
};

export default PageSkeletonLoader;
