import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="312" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="277" rx="10" ry="10" width="280" height="24" />
    <rect x="0" y="419" rx="10" ry="10" width="95" height="30" />
    <rect x="160" y="414" rx="23" ry="23" width="121" height="45" />
    <circle cx="136" cy="137" r="125" />
  </ContentLoader>
);

export default Skeleton;
