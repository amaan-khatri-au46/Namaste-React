import { ResturantCard } from "./ResturantCard";

export const Main = () => {
  return (
    <div className="main">
      <div className="Search">Search</div>
      <div className="res-container">
        <ResturantCard />
      </div>
    </div>
  );
};
