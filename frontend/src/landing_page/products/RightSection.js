import React from 'react';

function RightSection(
  {imageUrl,productName,productDescription,linkMore}
) {
  return (
    <div className="container  mt-5">
      <div className='row  mb-5 mt-5'>
         <div className="col-4 p-5 mb-5 mt-5">
          <h3 className='mb-3'>{productName}</h3>
          <p>{productDescription}</p>
          <div className="mb-3 mt-5">
            <a href={linkMore} className="zerodha-link">
              Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className='col-7 mb-5  text-center'>
          <img src={imageUrl} style={{marginRight:"20px"}}/>
        </div>
      </div>   
      </div>
  );
}

export default RightSection;
