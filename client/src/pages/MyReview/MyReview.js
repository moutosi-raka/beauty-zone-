import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import MyReviewCart from "./MyReviewCart";
import userPic from "../../assets/review.jpg";
import useTitle from "../../Hooks/useTitle";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useTitle("My Review");

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setReviews(data)
      );
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, You want to cancel this review"
    );
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("delete successfully");
            const remaining = reviews.filter((rew) => rew._id !== id);
            console.log(remaining);
            setReviews(remaining);
          }
        });
    }
  };

 
  return (
    <div className="">
      <div className="text-gray-100">
        <div className="flex flex-col max-w-2xl mx-auto overflow-hidden rounded">
          <img
              src={userPic}
              alt=""
              className="w-full border-8 h-60 border-white object-cover"
            />

          <div className="p-6 text-center m-4 -mt-16 space-y-6 md:w-1/2 mx-auto rounded-md dark-pink-gradient ">
              <h1 className="inline-block text-2xl  font-semibold md:text-4xl dancing">
                {user.displayName}
              </h1>
            
          </div>
        </div>
      </div>
      {reviews.map((review) => (
        <MyReviewCart
          key={review._id}
          review={review}
          handleDelete={handleDelete}
        ></MyReviewCart>
      ))}
    </div>
  );
};

export default MyReview;
