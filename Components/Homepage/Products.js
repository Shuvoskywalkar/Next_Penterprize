import React, { Fragment ,useEffect,useState} from 'react';
import Link from 'next/link';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCoffee, faEye, faHeart, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const product = {
  name: 'Basic Tee 6-Pack ',
  price: '$192',
  rating: 3.9,
  reviewCount: 117,
  href: '#',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg',
  imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: 'XXL', inStock: true },
    { name: 'XXXL', inStock: false },
  ],
}

const Products = (props) => {
  const randomItems = props.Items.sort(() => Math.random() - Math.random()).slice(0, 8)
const ShowItemsR1=props.Items.slice(0, 8);
// console.log(randomItems)
const [open, setOpen] = useState(false)
const [selectedColor, setSelectedColor] = useState(product.colors[0])
const [selectedSize, setSelectedSize] = useState(product.sizes[2])

const [post,setPost]=useState(null)
// console.log(open)
return (
      <div className="text-gray-600 body-font  ">
      <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4 ">
      
        {
              randomItems.map((post) => (

               <div  key={post._id} className="lg:w-1/4 md:w-1/2 p-4 w-full ard group relative "  >
      <div className="block h-48 rounded overflow-hidden items-center justify-content-center ">
      <Link key={post._id} href={`/${post._id}`}> 
      <img  alt="ecommerce" className="opacity-100 group-hover:opacity-10 group-hover:bg-gray-100" src={post.image}/> 
      </Link>
<div className="	photoIcons   ">
{/* <Link key={post._id} href={`/Quickview/${post._id}`}> */}
<button onClick={()=> setOpen(true)} className="font-medium bg-gray-500 hover:bg-red-700 hover:text-white text-black font-bold py-2 px-4 mr-3 rounded-full">
<FontAwesomeIcon icon={faEye} />

</button>
{/* </Link> */}
<button className="font-medium bg-gray-500 hover:bg-red-700 hover:text-white text-black font-bold py-2 px-4 ml-3 rounded-full">
<FontAwesomeIcon icon={faHeart} />
</button>

</div>
      </div>
      <div className="mt-4 h-40">
      <div className="rating">
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStarHalf} />
            </div>
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{post.address}</h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">{post.title}</h2>
       <span className="flex">

       <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6 mt-1' fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
       </svg> 

            <p className="mt-1 "><span className="font-extrabold">{post.price}</span> <br/> 25% off </p>
            {/* <Modal key={post._id} post={post} setopen={setOpen} open={open}/> */}
       </span>
          
           </div>
      
      {/* <div className="buttonContainer"> */}
      <Link key={post._id} href="/Cart">
      <button className="bg-transparent CartBtn mt-3 hover:bg-gray-500 group-hover:bg-gray-500 text-gray-900 font-semibold hover:text-white group-hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent group-hover:border-transparent rounded">
        Add to Cart 
      </button>  
      </Link>


    </div>
   
    ))
  
                    }
</div>


      
</div>

</div>
    );
};

  export default Products;
