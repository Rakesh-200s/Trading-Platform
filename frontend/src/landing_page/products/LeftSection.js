import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  LearnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container  mt-5">
      <div className="row between v-align mt-5 ">
        <div className="col-7 mb-3 text-center">
          <img src={imageUrl} style={{ width: "60%" }} />
        </div>
        <div className="col-4 mb-4">
          <h3>{productName}</h3>
          <p>{productDescription}</p>
          <div className="mb-3 mt-5">
            <a href={tryDemo} className="zerodha-link">
              Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={LearnMore}
              style={{ marginLeft: "90px" }}
              className="zerodha-link"
            >
              Learn more
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "25px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
