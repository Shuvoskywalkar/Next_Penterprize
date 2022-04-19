import Head from 'next/head'
import Image from 'next/image'
import Homepage from  '../Components/Homepage/Homepage.js';
import { Fragment } from 'react';
import Navbar from '../Components/Homepage/Navbar.js';
import NextJsCarousel from '../Components/Homepage/Carousel.js';



export default function Home(props) {
  
  return (
   <Fragment  >


    <Navbar/>
    <NextJsCarousel/>
    
      <Homepage products={props.meetupPlaces} />
    
   </Fragment>
  )
}export const getStaticProps = async (context) => {
  const res = await fetch('https://fakestoreapi.com/products')
  const posts = await res.json()
  // console.log(posts)
  // const client= await MongoClient.connect("mongodb+srv://next_newby:newby2021@cluster0.wyaqz.mongodb.net/MeetupDatabase?retryWrites=true&w=majority")
  // const db=client.db()
  // const Collection=db.collection('meetUpsOnly');

  // const response = await fetch('/api/Meetups');
  // const Data = await response.json();
  //  Collection.find({})
  // .toArray((err,documets)=>{
  //     // res.send(documets)
  //     console.log(documets)
  // })
// const data= await Collection.find({}).toArray();
// console.log(Data)

// client.close()
 return{
   props:{
    meetupPlaces:posts.map((dta)=>({
      image:dta.image,
      description:dta.description,
      address:dta.category,
      _id:dta.id,
      title:dta.title,
      price:dta.price
    })),
  },
  revalidate:10,
};
} 