import React from "react";

const ReviewCart = ({ review, id }) => {
  const { serviceId, img, message, clientName } = review;
  console.log(serviceId, id)
  return (
    <div>
       
          <div className="bg-base-300 p-3 mt-4 w-1/2 rounded flex items-center">
          <div>
            <img src={img} className="w-16 h-14 rounded-full" alt="" />
          </div>
          <div className="flex items-center justify-between w-full ml-4">
            <div>
            <p className="font-bold">{clientName}</p>
            <p>{message}</p>
            </div>
          </div>
        </div>
       
     
    </div>
  );
};

export default ReviewCart;
