import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import MyReviewCart from './MyReviewCart';
import userPic from '../../assets/user profile/user.jpg'

const MyReview = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect( ()=>{
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[user?.email])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, You want to cancel this review');
        if(proceed)
        {
            fetch(`http://localhost:5000/reviews/${reviews._id}`,{
                method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        }
       }
    return (
        <div className='ml-36'>
            <div className="p-5 mx-auto sm:p-10 md:p-16 text-gray-100">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
            {
                user.photoURL?
                <img src={user.photoURL} alt="" className="w-full h-12 sm:h-96 border-8 border-white object-cover" />
                :
                <img src={userPic} alt="" className="w-full h-12 sm:h-96 border-8 border-white object-cover" />
            }
           
            <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark-pink-gradient ">
                <div className="space-y-1">
                    <h1 className="inline-block text-2xl font-semibold sm:text-8xl dancing">{user.displayName}</h1>
                    
                </div>
            </div>
        </div>
    </div>
           {
            reviews.map(review =><MyReviewCart
            key={review._id}
            review= {review}
            handleDelete={handleDelete}
            ></MyReviewCart>)
           }
        </div>
    );
};

export default MyReview;