import React from 'react';
import img1 from '../../../assets/services/body-treatment.jpg'
import img2 from '../../../assets/services/bridal-make up.webp'
import img3 from '../../../assets/services/cosmetics.jpg'
import img4 from '../../../assets/services/hair cut.jpg'
import img5 from '../../../assets/services/hair dressing.jpg'
import img6 from '../../../assets/services/massages.jpg'
import img7 from '../../../assets/services/me&pedicure.jpg'
import img8 from '../../../assets/services/party-make-up.jpg'
import img9 from '../../../assets/about us/img4.jpg'
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';

const Gallary = () => {
    return (
        <div className='my-16 mx-20'>
            <div className='text-center'>
            <h1 className="text-8xl font-bold dancing">Our Gallery</h1>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem incidunt placeat pariatur odio cumque.</p>
            </div>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src={img2} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img1}  />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img3}  />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img4}  />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img6} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"src={img5} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img6}  />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img7} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img8}  />
		<img src={img9}  alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
	</div>
</section>
        </div>
    );
};

export default Gallary;