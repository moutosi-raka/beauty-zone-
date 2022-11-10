import React from 'react';


const MyReviewCart = ({review,handleDelete}) => {
    const {_id, message, serviceName} = review;

   

    return (
        <div >
        
        <div className="bg-base-300 p-3 mx-auto my-4 w-1/2 rounded flex items-center">
          <div>
            <button onClick={()=> handleDelete(_id)} className="px-3 mr-2 rounded-lg text-white py-1 bg-pink-500" >X</button>
          </div>
          <div>
          </div>
          <div className="flex items-center justify-between w-full ml-4">
            <div>
            <p className="font-bold text-2xl dancing">{serviceName}</p>
            <p>{message}</p>
            </div>
            <div>
                <button className="px-5 rounded-lg text-white py-1 bg-pink-500">Edit</button>
            </div>
          </div>
          
        </div>
        </div>
    );
};

export default MyReviewCart;