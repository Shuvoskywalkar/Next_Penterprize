import React, { Fragment ,useEffect,useState} from 'react';
import Head from 'next/head';

import Products from './Products';
import Navbar from './Navbar';
import Carousel from './Carousel';
import NextJsCarousel from './Carousel';
import MiddleComponent from './MiddleComponent';
import Timersale from './Timersale';
const Homepage = (props) => {
  
  const Productss = props.products
  // console.log(productss)




  // console.log(time)


//   document.onreadystatechange(function () {

//     var $window = $(window);

//     function checkWindowWidth() {
      
//         var windowsize = $window.width();

//         if (windowsize > 1000) {

//             $('#navbar').css('display','block');

//         } else {

//             $('#navbar').css('display','none');

//         }
//     }

//     checkWindowWidth();

//     $(window).resize(checkWindowWidth);

// });


  // $('#navbar-btn').click(function() {
  //   $('#navbar').toggle();
  // });

  // function checkWindowWidth() {
  //   var windowsize = $window.width();

  //   if (windowsize > 1000) {
  //     $("#navbar").css("display", "block");
  //   } else {
  //     $("#navbar").css("display", "none");
  //   }
  // }

  // checkWindowWidth();

    return (
        <section>

{/* <Navbar/> */}
{/* <NextJsCarousel/> */}

<Products Items={Productss}/>
  

<MiddleComponent/>

<Timersale/>


<section className="text-gray-600 body-font">
<div className="container px-5 py-24 mx-auto">
  <div className="flex flex-col text-center w-full mb-20">
    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably have not heard of them man bun deep jianbing selfies heirloom.</p>
  </div>
  <div className="flex flex-wrap -m-4">
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/>
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
          <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/601x361"/>
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
          <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/603x363"/>
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
          <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/602x362"/>
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
          <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/605x365"/>
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
          <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/605x365"/>
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
          <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

<footer className="text-gray-600 body-font"  >  
<div className="container bg-gray-100 px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
  <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Gulfy</span>
    </a>
    <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
  </div>
  <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
      <nav className="list-none mb-10">
        <li>
          <a className="text-gray-600 hover:text-gray-800">First Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Second Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Third Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
        </li>
      </nav>
    </div>
    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
      <nav className="list-none mb-10">
        <li>
          <a className="text-gray-600 hover:text-gray-800">First Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Second Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Third Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
        </li>
      </nav>
    </div>
    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
      <nav className="list-none mb-10">
        <li>
          <a className="text-gray-600 hover:text-gray-800">First Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Second Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Third Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
        </li>
      </nav>
    </div>
    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
      <nav className="list-none mb-10">
        <li>
          <a className="text-gray-600 hover:text-gray-800">First Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Second Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Third Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
        </li>
      </nav>
    </div>
  </div>
</div>
<div className="" style={{backgroundColor:"#212121"}} >
  <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
    <p className="text-gray-50 text-sm text-center sm:text-left">© 2021 Gulfy —
      <a href="" rel="noopener noreferrer" className="text-gray-50 ml-1" target="_blank">@ShuvoPagla</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
      <a className="text-gray-50 hover:text-gray-300">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-50 hover:text-gray-300">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-50 hover:text-gray-300">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-50 hover:text-gray-300">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</div>
</footer> 




        </section>

    );
};

export default Homepage;