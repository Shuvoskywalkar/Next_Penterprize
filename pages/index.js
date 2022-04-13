import Homepage from "../Components/Homepage/Homepage";
import { Fragment } from 'react';
export default function Home(props) {
  return (
    <Fragment  >
    
    <Homepage products={props.meetupPlaces} />

  </Fragment>
  )
}
export async function getStaticProps(){
  const res = await fetch('https://fakestoreapi.com/products')
  const posts = await res.json()

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