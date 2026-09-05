import React from 'react';

function Stats() {
  return (
   <div className="container p-5 mb-5 mt-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 mt-3">
            <h1 className="display-5 fw-normal mb-5">
              Trust with confidence
            </h1>

            <div className="mb-4">
              <h3 className="fw-normal mb-3">Customer-first always</h3>
              <p className="text-muted lh-lg">
                That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
                crores of equity investments, making us India's largest broker;
                contributing to 15% of daily retail exchange volumes in India.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="fw-normal mb-3">No spam or gimmicks</h3>
              <p className="text-muted lh-lg">
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace,
                the way you like.{" "}
                <a href="/" className="zerodha-link">
                  Our philosophies
                </a>
                .
              </p>
            </div>

            <div className="mb-4">
              <h3 className="fw-normal mb-3">The Zerodha universe</h3>
              <p className="text-muted lh-lg">
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="fw-normal mb-3">Do better with money</h3>
              <p className="text-muted lh-lg">
                With initiatives like{" "}
                <a href="/" className="zerodha-link">
                  Nudge
                </a>{" "}
                and{" "}
                <a href="/" className="zerodha-link">
                  Kill Switch
                </a>
                , we don't just facilitate transactions, but actively help you
                do better with your money.
              </p>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src="/media/images/ecosystem.png"
              alt="Zerodha ecosystem"
              className="img-fluid ecosystem-img"
            />
            <div>
              <a href='' className='zerodha-link mx-5 '>Explore our product<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
              <a href='' className='zerodha-link '>Try Kite demo<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
          </div>

        </div>
      </div>
    );
}

export default Stats;