import React from "react";

const MyReviewCart = ({ review, handleDelete}) => {
  const { _id, message, serviceName } = review;

 

  return (
    <div>
      <div className="bg-base-300 p-3 mx-auto my-4 w-[95%] md:w-1/2 rounded flex items-center">
        <div>
          {/* <button
            onClick={() => handleDelete(_id)}
            className="px-3 mr-2 rounded-lg text-white py-1 bg-pink-500"
          >
             X
          </button> */}
        </div>
        <div></div>
        <div className="flex items-center justify-between w-full ml-4">
          <div>
            <p className="font-bold text-2xl dancing">{serviceName}</p>
            <p>{message}</p>
          </div>
          <div>
            {/* <label
              htmlFor="my-modal-3"
              className="px-5 btn rounded-lg text-white py-1 bg-pink-500"
            >
              Edit
            </label> */}
             <button
            onClick={() => handleDelete(_id)}
            className="px-3 mr-2 rounded-lg text-white py-1 bg-pink-500"
          >
             X
          </button>
          </div>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">
                Update review!
              </h3>
              <form>
              <input type="text" name="message" className="p-4 m-3 border bg-pink-200" placeholder="write review" />
              <br />
              <button className="px-5 btn rounded-lg text-white py-1 bg-pink-500">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCart;
