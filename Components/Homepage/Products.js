import React, { Fragment ,useEffect,useState} from 'react';
import {useRouter}  from "next/router";
import Link from 'next/link';

import {  useRef } from 'react'
import { ExclamationIcon } from '@heroicons/react/outline'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import { faCoffee, faEye, faHeart, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';



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

       </span>
          
       {open==true  && 
       
  <div key={post.id} className="fixed  inset-0 overflow-y-auto" role="dialog" aria-modal="true">
  <div className="flex min-h-screen text-center md:block md:px-2 lg:px-4" >
 
    <div  className="hidden fixed inset-0 bg-transparent  transition-opacity md:block" aria-hidden="true"></div>

    <span className="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true">&#8203;</span>

   
    <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
      <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
        <button onClick={()=>setOpen(false)} type="button" className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8">
          <span className="sr-only">Close</span>
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
          <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
            <img src={post.image} alt="Two each of gray, white, and black shirts arranged on table." className="object-center object-cover"/>
          </div>
          <div className="sm:col-span-8 lg:col-span-7">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{post.title}</h2>

            <section aria-labelledby="information-heading" className="mt-2">
              <h3 id="information-heading" className="sr-only">Product information</h3>

              <p className="text-2xl text-gray-900">৳ {post.price}(BDT)</p>

              <div className="mt-6">
                <h4 className="sr-only">Reviews</h4>
                <div className="flex items-center">
                  <div className="flex items-center">
                 

                    <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg className="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  {console.log(post.id)}
                  <p className="sr-only">3.9 out of 5 stars</p>
                  <Link href={`/${post.id}#RevSection`} className="ml-3 text-sm font-medium text-gray-600 hover:text-gray-500">11 reviews</Link>
                </div>
              </div>
            </section>

            <section aria-labelledby="options-heading" className="mt-10">
              <h3 id="options-heading" className="text-gray-700">{post.description}</h3>
          
              <form>
                
                <div>
                  {/* <h4 className="text-sm text-gray-900 font-medium">Color</h4> */}

                  {/* <fieldset className="mt-4">
                    <legend className="sr-only">Choose a color</legend>
                    <div className="flex items-center space-x-3">
                
                      <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                        <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label"/>
                        <p id="color-choice-0-label" className="sr-only">White</p>
                        <span aria-hidden="true" className="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"></span>
                      </label>

                      <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                        <input type="radio" name="color-choice" value="Gray" className="sr-only" aria-labelledby="color-choice-1-label"/>
                        <p id="color-choice-1-label" className="sr-only">Gray</p>
                        <span aria-hidden="true" className="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"></span>
                      </label>

                
                      <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                        <input type="radio" name="color-choice" value="Black" className="sr-only" aria-labelledby="color-choice-2-label"/>
                        <p id="color-choice-2-label" className="sr-only">Black</p>
                        <span aria-hidden="true" className="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"></span>
                      </label>
                    </div>
                  </fieldset> */}
                </div>

         
                <div className="mt-10">
                  {/* <div className="flex items-center justify-between">
                    <h4 className="text-sm text-gray-900 font-medium">Size</h4>
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                  </div> */}

                  {/* <fieldset className="mt-4">
                    <legend className="sr-only">Choose a size</legend>
                    <div className="grid grid-cols-4 gap-4">
                    
                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input type="radio" name="size-choice" value="XXS" className="sr-only" aria-labelledby="size-choice-0-label"/>
                        <p id="size-choice-0-label">XXS</p>

                      
                        <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                      </label>

                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input type="radio" name="size-choice" value="XS" className="sr-only" aria-labelledby="size-choice-1-label"/>
                        <p id="size-choice-1-label">XS</p>

            
                        <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                      </label>

                   
                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input type="radio" name="size-choice" value="S" className="sr-only" aria-labelledby="size-choice-2-label"/>
                        <p id="size-choice-2-label">S</p>

                    
                        <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                      </label>

                    
                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input type="radio" name="size-choice" value="M" className="sr-only" aria-labelledby="size-choice-3-label"/>
                        <p id="size-choice-3-label">M</p>

                        <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                      </label>

                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input type="radio" name="size-choice" value="L" className="sr-only" aria-labelledby="size-choice-4-label"/>
                        <p id="size-choice-4-label">L</p>

                   
                        <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                      </label>

            
                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input type="radio" name="size-choice" value="XL" className="sr-only" aria-labelledby="size-choice-5-label"/>
                        <p id="size-choice-5-label">XL</p>

                        <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                      </label>

                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input type="radio" name="size-choice" value="XXL" className="sr-only" aria-labelledby="size-choice-6-label"/>
                        <p id="size-choice-6-label">XXL</p>

                    
                        <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                      </label>


                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-gray-50 text-gray-200 cursor-not-allowed">
                        <input type="radio" name="size-choice" value="XXXL" disabled className="sr-only" aria-labelledby="size-choice-7-label"/>
                        <p id="size-choice-7-label">XXXL</p>

                        <div aria-hidden="true" className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none">
                          <svg className="absolute inset-0 w-full h-full text-gray-200 stroke-2" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                            <line x1="0" y1="100" x2="100" y2="0" vectorEffect="non-scaling-stroke" />
                          </svg>
                        </div>
                      </label>
                    </div>
                  </fieldset> */}
                </div>

                <button                 style={{backgroundColor:"#212121"}}
 type="submit" className="mt-6 w-full  border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add to bag</button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

 }         
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
