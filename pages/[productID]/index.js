import React from 'react';
import Navbar from '../../Components/Homepage/Navbar';
import { useRouter } from 'next/router';
/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'
import Link from 'next/link';

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#RevSection', average: 4, totalCount: 117 }
const rev2 = { href: '#RevSection', average: 5.5, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({post}) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])
console.log(post)
  return (
    <section>
      <div className="bg-white">
          <Navbar/>
      
    <div >
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
          <li >
                <div className="flex items-center">
                  <Link href="/" key={post.id} className="mr-2 text-lg font-medium text-gray-900">
                    Home
                  </Link>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-4 h-5 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
          
              <li >
                <div className="flex items-center">
                  <a className="mr-2 text-sm font-medium text-gray-900">
                    {post.category}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-4 h-5 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
          
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
               {post.title}
              </a>
            </li>
          </ol>
        </nav>

                   <div className="		flex justify-center">
        <img
              src={post.image}
              alt='hyhyhy'
              className="mt-6  	object-center object-cover w-full  md:w-1/3"
            />
          
        </div>
        
        



        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{post.title}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-900">{post.price} BDT</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[1,2,3,4,5].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-gray-600 hover:text-gray-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              {/* Colors */}
            

            

              <button
          
                // type="submit"
                style={{backgroundColor:"#212121"}}
                className="mt-10 w-full  border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{post.description}</p>
              </div>
            </div>

 

          </div>
        </div>
      </div>


      <section id="RevSection" className="block md:flex md:gap-5 px-1 md:px-10 mx-auto  mb-5">


        <div className="w-block md:w-4/12 align-middle">
          <b className="font-black text-black text-xl	">Customer Review</b>
          <div className="flex items-center">
                  {[1,2,3,4,5].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
               <p className="pl-0 pl-5 text-gray-900"> Based on <span className="font-black"> 16 </span>reviews </p>  
                </div>
          <div className="py-2 mt-2">
            <div className="flex gap-1 ">
              
          <p className="text-xl	 font-semibold">5</p>
          <StarIcon
                      // key={rating}
                      className= 'text-gray-900 h-5 w-5 flex-shrink-0'
                    
                      // aria-hidden="true"
                    />
          <div
          ariVvaluemax="100"
          ariaValuemin="0"
          ariaValuenow="22"
          ariaValuetext="63%"
          role="progressbar"
          className="relative flex h-2 w-full overflow-hidden rounded-full bg-gray-200 transition my-2">
          <div style={{width: "63%"}} className="flex h-full bg-gray-600 transition"></div>
        </div>
        <p>63%</p>


        </div>

        <div className="flex gap-1 ">
              
          <p className="text-xl	 font-semibold">4</p>
          <StarIcon
                      // key={rating}
                      className= 'text-gray-900 h-5 w-5 flex-shrink-0'
                    
                      // aria-hidden="true"
                    />
          <div
          ariVvaluemax="100"
          ariaValuemin="0"
          ariaValuenow="22"
          ariaValuetext="29%"
          role="progressbar"
          className="relative flex h-2 w-full overflow-hidden rounded-full bg-gray-200 transition my-2">
          <div style={{width: "29%"}} className="flex h-full bg-gray-600 transition"></div>
        </div>
        <p>29%</p>


        </div>

        <div className="flex gap-1 ">
              
          <p className="text-xl	 font-semibold">3</p>
          <StarIcon
                      // key={rating}
                      className= 'text-gray-900 h-5 w-5 flex-shrink-0'
                    
                      // aria-hidden="true"
                    />
          <div
          ariVvaluemax="100"
          ariaValuemin="0"
          ariaValuenow="22"
          ariaValuetext="74%"
          role="progressbar"
          className="relative flex h-2 w-full overflow-hidden rounded-full bg-gray-200 transition my-2">
          <div style={{width: "74%"}} className="flex h-full bg-gray-600 transition"></div>
        </div>
        <p>74%</p>


        </div>

        <div className="flex gap-1 ">
              
          <p className="text-xl	 font-semibold">2</p>
          <StarIcon
                      // key={rating}
                      className= 'text-gray-900 h-5 w-5 flex-shrink-0'
                    
                      // aria-hidden="true"
                    />
          <div
          ariVvaluemax="100"
          ariaValuemin="0"
          ariaValuenow="22"
          ariaValuetext="43%"
          role="progressbar"
          className="relative flex h-2 w-full overflow-hidden rounded-full bg-gray-200 transition my-2">
          <div style={{width: "43%"}} className="flex h-full bg-gray-600 transition"></div>
        </div>
        <p>43%</p>


        </div>

        <div className="flex gap-1 ">
              
          <p className="text-xl	 font-semibold">1</p>
          <StarIcon
                      // key={rating}
                      className= 'text-gray-900 h-5 w-5 flex-shrink-0'
                    
                      // aria-hidden="true"
                    />
          <div
          ariVvaluemax="100"
          ariaValuemin="0"
          ariaValuenow="22"
          ariaValuetext="52%"
          role="progressbar"
          className="relative flex h-2 w-full overflow-hidden rounded-full bg-gray-200 transition my-2">
          <div style={{width: "52%"}} className="flex h-full bg-gray-600 transition"></div>
        </div>
        <p>52%</p>


        </div>
        <h1 className="text-gray-900 text-xl font-semibold mt-2">Share your thoughts</h1>
        <p >If you have used this product , share your thoughts with others customers</p>
       
        <a href="#writeRev" > <button     className="my-2 mt-5 bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded w-full">
          Write a Review
          </button></a>
        </div>
          </div>
       

   
        <div className="w-block md:w-8/12	 max-h-96	overflow-y-auto ">


          <div className="px-5 py-1">
            <div className="flex gap-1">
              <img style={{clipPath:"circle()",width:"75px"}} className="object-center" src="data:image/jpeg;base64,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"/>
              <div className="pl-2">
                <p className="text-xl	 font-bold">Jeetu Shastri</p>
                <div className="flex items-center">
                  {[1,2,3,4,5].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        rev2.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                </div>
            </div>
            <div className="py-2  mb-5 text-gray-700 text-base font-semibold	">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available </div>
          <hr className=""/>
          </div>

          <div className="px-5 py-1">
            <div className="flex gap-1">
              <img style={{clipPath:"circle()",width:"75px"}} className="object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc5tAjeepb-L9i87XPrcL6u5YWKv0_PeWOUFZzjM6JYzZmYImgs5x62OZXF7E-8tCFRQ4&usqp=CAU"/>
              <div className="pl-2 ">
                <p className="text-xl	 font-bold">Jeetu Shukla</p>
                <div className="flex items-center">
                  {[1,2,3,4,5].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        rev2.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                </div>
            </div>
            <div className="py-2  mb-5 text-gray-700 text-base font-semibold	">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available </div>
          <hr className=""/>
          </div>

          <div className="px-5 py-1">
            <div className="flex gap-1">
              <img style={{clipPath:"circle()",width:"75px"}} className="object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc5tAjeepb-L9i87XPrcL6u5YWKv0_PeWOUFZzjM6JYzZmYImgs5x62OZXF7E-8tCFRQ4&usqp=CAU"/>
              <div className="pl-2 ">
                <p className="text-xl	 font-bold">Jeetu Shukla</p>
                <div className="flex items-center">
                  {[1,2,3,4,5].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        rev2.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                </div>
            </div>
            <div className="py-2  mb-5 text-gray-700 text-base font-semibold	">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available </div>
          <hr className=""/>
          </div>

          <div className="px-5 py-1">
            <div className="flex gap-1">
              <img style={{clipPath:"circle()",width:"75px",height:"75px"}} className="object-center" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALoAiwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xAA9EAACAQMCBAMFBgQEBwEAAAABAgMABBEFEgYhMUETUWEHIjJxgRQzkaGxwSNCUuEVQ2LRNHJzgpKisiX/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEAAX/xAAhEQACAgICAgMBAAAAAAAAAAAAAQIRAyESMSJRBBNBMv/aAAwDAQACEQMRAD8AzihQoU5wKFChXHHDWh+xi3Emt3Mx/wAuML+NZ7jn06+VXjgDiGHheC7muLaSeSVhtEbAYAHcminTOqzdZZEiQlmAx5mswv8A2rC01Se1FgzxRSbd4Yc8dahNZ9qmqXX8PT7O2hjwQ5lHiE/piqNk3ErudqtK3xAcs96HNIKg2ehrLjDRZrGO4lv4Y9+BtZuYJ7VV/arqmnX3DbRWt1DNIzKQEcHAzWVQ2vhnxZZmds5B+EClkaNGMvihT/5frU/t9DrH7NZ9kMlonDiQR3ELTqzNJGGG5SfMVOce3P2bhe/kB6RH86w6K5R5Elt5FWVD7siY3L8iDmpnUeKtW1TSX0u8njmhK7TIE9/5Eg/3pllTewPH6KlokBuNXsYQCd86D6ZFeobZdsCAeQrz5wlYxW/ElhLdTKqiUEEnlXodMBBjp51RSTWhGmjH/bjcZmsIAehZzV89ntv9m4T05Mf5IP5VmHtelNzxTbwKclUAx6sa2TQofA0q1iAxtiUflTPoUrXtYuPs/CN0M83wo+pFYKlu8ihlBwa2T22XATRIIQecko/Kqlw1oTXOiW0xUHeGP/sa5Rs66KRQoUKmMChQoVxw6sYmZjJjIT8zTi5TwAPe3HllKktMt4VtowDlwu9iegPmfypNoYMlSQZA25u5zUJTtl1DRDbf4hQDC92xkD0pUX/gybGyMDIUU9h0qV5HURF0JzkjtTS+0ie1UF1Zl8u6/wBqTkmPxdDfxDJIXlMe3+pzgD9hRgkchbF1tYHqGH78jTGSKTf74zj/AFdKVhBTGIGcj+pcn6c6bRPrskoodx3yBM/yuFxn9qc+KISAkRy3V264+v7Ux2OI3Z5/EZuSqXxjuR5dqS3SjKvAIjnqCMAeZYda6g2SLX6hSWXZ3wCPoau3BXG76fGYdbkllgYDwm3fdnP5jn1rNNrSfxVy2DjcG6/IGlFu2jfE8iPnltXoopotx6A9ll4guV1r2hRtE3iI1xGoK8wQMVv1svhwIo7DFedODJIU4psGuH2xiUEN5f2r0cm3YACKunaISVGP+3G5zcWNv2G5sVZuC9PA4V0zmecIP486oXtkufG4nSLORHD0+Z/tVl4U4rsYOHbCGa4RJI4tjKe2Diqw7AZJQoUKiMCjRLvkVfOiUvaFRKMk5wevSg+grsk0liW18J5huYAtuIxy6KPkandA097lytukYLfFIOY9fSq3YwmW+G9VAzj51rXDlokFqhRAM+lYpPZsihxpWhQ2yjxVVjjB5ACldQ0C3vIDH4YHk2KmlAIFKKKBUyrWOCfCYPEh2Z94elVTV9Kms5PChLlexUY+Vb7LCsnxc81B6poFrcKcqUPXK9Pw706EcUzB3tbpFw+5ge7Hp8qbmKQDaGYjPPyrVtR4fK53IsqdBjlgVATcPkk7EGyn5CfUVJZXwI1GOX40JESSPAZd+MqGwc1Yb3RPDgJGAQOR86qt1G0Eh3E48vOuUhJwaH0BHhK2drIwO4fy1aIPaLxJZxIgmiljQAAuMnA+tUu3n3A8+p5gntRnPvFR/Ly+lXgyMuh1rGp3Or3z3l426R/LoBTME45MfxoUKcmKUKFCgEFK2mPHBPQA0ifIU8S1uIbVLqWOSOGX7uRlwGI6486Wb0NFWx9YptuEBbB3e8RWt8OMDbqMkjrk96yfR7Z7iYLArM45BQO1a1oFtJbWqCYYPrWJ9m2KJxGo8cnOm+7a+K6VbOU7+tAox3vFEnkQxEGmzOykBgabzSg/FkD506YvHYSZI3XbjI9KjprRBkjA88U5uJgMDz9elNZ5h4ZzXchqInULdWBGBiqVxBpakFkXnjyq5XEhcgDPWojWRiFjnmByoXsDVoy1ma3mww5Z507SUyuxomqkPO3nnFHhTYgX8a1QMEw9ChQqpMOKGa5QoBOgbmC5xk4z5VovENnfX2nvaJAi2OnoPAdOqqMD6+dZyeYrYrLUZRwhaXUKFprm2Ab3c5bGD+eazZ70zX8WnyRXvZrZD7S0jHO0csitJY7aqHA0IjEzldpzggCrJf3BRCI9u5emagaEqJGPaebMMnzNKblXkWFUrUGupffnvBCOyqcc6iLnV9Y03Mm4zQ+Yw396KA7NGllXHUD5mom6dycZB58gKrOncWLfJiXYsnTGe9SP+JKzKd4wvWuHiiUdVJw3Wkbi2VoyQ3KmR1SIYZmG09GNNLriO0VdqzLRQJaOTqI2wpzVf12Um3dR1P8AtUmdWt5+j4Pliq/qjG4aUJ8I6HPXlRUdiOSopN4SZve67gKc+VNLY7b5XdS4Vw209+dPpceK2BjmeVaoGGa/QlcxXTQHSqEw1ChQoBOVt/BUIl4O0tunhpu6f6jWIGtx9mT+LwZZguGwXXl2wx5VHMvE0fGdSY4tLIWNxcomPDaQsoHkedObm1huYdsozn+Ye6fxox++ceTEUvD7jZOKxvujckUrV+DtOnmaWVr3n1YSs/5E/pVW1DhCzil3Wer3Zyfu9h5fnW0N4Z/mHTuaj52hDYdowB/ViqJtIVxTMv0fgy6ncSSXjKgPJguGI8jmri3DEdrpLbZ5Wk2n3mwSasAVWUOmCvbA5V27yLRieQxSrbHqkYLfNq7TSRJHcSRo5QMgJ5g00xPbS4v4L9Ce6oDWiadbGaSbKsF3k5HI0u/D9/ISbG7G089k0QYfrVU0ScG/0zxb21K7IJZhIR/mHFSdtO0emTF2GdpwKuUPDX2QGfUTFI/QBIgqfUc81A8RxRS+HBaQxqXGwALjbRUhHCkU+GFBB42OYY/XyopOae6nGsBjgToB18/WmNXgqRkyvfH0CuZrtcqhIUoUKFAJw1bOCeM34aSe2nhaa2kbeoU80bGD+PKqlQ6ilkk1Q0ZOLtG/21wtzDHcryEqCTB/1DP70jNdso3E4qP4cuBLw9pzFhk2sY/BQP2o+puRbM6DBArBJUz1IO1ZH6vxLb2UZaSXBHICmugtdarc/ap4nFupyA56/SqfZJHcawr6nOVO/IJ5Ko8h2zWo6asKWyi1xsA5bedNR3PZMQSW7R/w5VKjyOAKRv7u1W0kUzqTg8vKqjrmhTiR73Tri4trgjLCPmjf8yf7c6omta1q8S+Dd2bRy5wWAOxvUUy7A5Vtl8BSG0lulkUMpLBc9RRtH4iinGGO1uhFZhZS6neuyNK7Lj7tDyAqUnMtkkTAe+qgHH81NKLFjNM0XUtSjkiYBuVUzPi329TnZk8/wqLk1iWWMBc8ziiS3stijMvN393n8q6K2DJKKI/VpPF1GY9g2B9KaUCSxJJyT1NcrWlo86Tt2ChQrlEUUzQoUKBxyuGu1w1xxonAup79KW3ZseA5T6HmP1qyySb027qofAKmVdTiHMrGkgx1yDVttpw6K2RuHUVhyqpM9LBK4ITsNAs9RW7t72IPEwx06HzHypnwrwculXE0GoXE7pv/AIbwSFcJkY3D9x051bdLj2FueNwzjFKXwAIIGQOYB7H59q6L0O429DGLhlpUWSw16Rk2ucthgMH3cEY+tQV9wzxDNEu/U7JomkKYZSeWT73T06etSc1xYxeMSjwSyAKzRDYx/wC5SD+NV64ZniCrrd6sKkEIXP65zVEgOGX8ZVuJv8S0EJFLdW7tIWwsa9gcA/Wi6HpGr6g6z3DeDGwyqnOWHninYs4H1ASgvczLyEkpzirhCy2lr4rY90cyTRnpCKEr8is6jp8VtdRwpglRuY1X9UmEkoUHIFSd9qYeOW4/mlOEz1xUA7FiT602KO7I/Ikq4o5QrlAnFXMh2hRC9c3+tccLZoZFaB7POErfUoDf36b0zhEPTFWDXNN4MslIvmtkcD7uPm/4CscvlxU+CTZdYHxtujHqAGTyqX1g6VJcf/lWskcIPJpHyW+namIwp5DpzrZG2raoi6TotPsvYtrGoQjGFtlLfPdU9qCtp99uAJRj0x2qt+xtjLrWqyHoYV/+jWgaxp/2tCigbl6d81iyvzN2BeArol5HKNu9cjpz7VKXMIljJXGPWs9jnutGuVZ1cR5xkj8jVqsOIbeWNfeIVuhPOlRWLGuqae+xsRuxPTA3Cqxd6a4b3ognnyNXy5vIn5rKNw9ahL69iXkGU7jgHIpiuyvWNkLdXuHG0L3NQ3EWs+LGtlG2N/OTae3kKf8AFOuxwQfZbZgXJ97FUxfdV5ZTzPNjVEr7Ms57pBNSmYOhzhtuQB2HQCuROHQN370ykmady79+3kKFvJtX51eKpUY5O3Y9ZwKTZ6TJNcphQ241zJrlCuOLL/i97Fai2iu50gHSNXIX8qaczkk5J70g2WpVT7oqiil0LbO5pMjc2PMGj0iGxOB/pNczkWL2UzCz1K4DnHiuYyc9OhFa02zqOVYlokhgv5FUEB8OpH9Q6/tWp6DqwvbbBYeOvJh5+tedlXkejgfgP7+0gubZ4pFBDDuP3rItdTU9B1B0ZG8BmzGVJwa1TUJpI4sxD389CeVVTiCQXMZivbViw+BgD7p8xSRdMeUbKOeI71iFM0mB1HeuSa9dMoCZBxjcxzTeXT7qS7aIW7Bs9hiiTWE1s2Jlx/ynNXTRDzQVWZ23yEu56k96SvpTIPDU4HfFGZtoOKayVSKsjKVBMcqUjjwi0QnlThB7oq0URZ1VBGD0oPGV+HmPSjLRwcdKegWN6FOCit6fKi+CP6j+FI0xkx+Bzo2K4K7VSYDTZed43olOCaj5ZTGbl1+IIAPmTSSGQWbUpVvUFqwAjbr5n19K0Dhe9FwDIv8ADuI8B1ByPn8jWUpneCKtPBGpLp+rxGcgRT5jcnoM9D+P61myR5IvinxZssK/asSLnPceVLNp7TAKByPc03s5/DdXUj1z3FWCC6ilj3o3zHlWRm8h77QbZ7bbKD4mPjAwRWYcTaPdWzyCLa8AyWccsD1qS429p8sd5NZcPohWJyklzKN2499o8vU1ndxrV7qMxN/O8hY5GTyB9B2q0MT7ZnyZo9IE7r0Xn5mkM5ozDnXMVqSoyN2cAy4FOQMCkYVLSkjsKXxTxFZ2u59a5RWDNy7U4odHz8qPmiBew6UoEOKAB6KBNCuUxyOGoic7nm9WH5A/71LP8J+VQzfez1OQ6EUjKqSe9PI4sxK65yPKkpPgHyp3Y/AvzFIMaXwndTXemKkjgyQnYc+XapPWZbyHRr57MlZhbybCOudpxUFwP9ze/wDUX9Ktdz/wNwe/gt+lY3/R6F+J5/ZFUDLZ8sVxY9/YgUmP5KeJ0FazzgyHdyPUdfWjYpNfvRSrdKJwtbr/AA2PfNHxmuQfcrRqquhQbOVAJ511vhoJ8AonBwoAopnCnBXOKMfhNNH+M0GA/9k="/>
              <div className="pl-2 ">
                <p className="text-xl	 font-bold">Jeetu Mishra</p>
                <div className="flex items-center">
                  {[1,2,3,4,5].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        rev2.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                </div>
            </div>
            <div className="py-2  mb-5 text-gray-700 text-base font-semibold	">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available </div>
          <hr className=""/>
          </div>

          </div>


      </section>

      <div id="writeRev" className=" align-self-center text-center mt-16 mb-5">
  

        <div className="flex items-center justify-center px-5 py-5">
    <div className="w-full mx-auto max-w-xl rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
        <div className="w-full pt-1 text-center pb-5 -mt-16 mx-auto">
            <div  className="block relative">
                <img alt="profil" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80CAU" className="mx-auto object-cover rounded-full h-24 w-25 "/>
            </div>
        </div>
        <div className="w-full mb-10">
            <div className="text-3xl text-grey-900 mb-2 text-left leading-tight h-3">
                “
            </div>
          {/* <label className="text-sm text-gray-600" htmlFor="bio">Personal Bio</label> */}
          <textarea
            name="bio"
            className="w-full  border border-gray-300 rounded-sm px-4 py-3 h-32 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400 resize-none"
            placeholder="Please tell us about yourself in a few sentences"
            spellCheck="false"
          ></textarea>
            <div className="text-3xl text-gray-900 text-right leading-tight h-3 -mt-3">
                ”
            </div>
        </div>
        <div className="w-full">
            <p className="text-md text-gray-900 font-bold text-center">
                Tom Hardy
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-300 text-center">
                @thom.hardy
            </p>
        </div>
    </div>
</div>
     </div>
    </div>
    </div>

    </section>
  )
}


// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://fakestoreapi.com/products/')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { productID: post.id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
 
  const parameter=parseInt(params.productID)
  console.log(parameter)
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://fakestoreapi.com/products/${parameter}`)
  const post = await res.json()

  // Pass post data to the page via props
  return { props: { post } }
}
