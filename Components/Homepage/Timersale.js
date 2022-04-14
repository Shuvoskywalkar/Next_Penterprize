import React, { Fragment ,useEffect,useState} from 'react';

const Timersale = () => {
    const [time,settime]=useState([])
    var countDownDate = new Date("Feb 6, 2023 15:37:25").getTime();
    // Update the count down every 1 second
    var x = setInterval(function() {
    
      // Get today's date and time
      var now = new Date().getTime();
        
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
        
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      // Output the result in an element with id="demo"
      // document.getElementById("demo").innerHTML = ;
        
      settime({day:days,hour:hours,minute:minutes,second:seconds})
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
    return (<div>

<section className="container mx-auto  hidden  md:flex  py-24 md:flex-row flex-col items-center  timer    border-gray-800 bg-gray-900   bg-cover bg-center	bg-no-repeat		bg-fixed	" style={{minHeight:"",backgroundImage:"url('https://th.bing.com/th/id/OIP.pnOMNpKCGr08U2TkAULABAHaEo?w=283&h=180&c=7&r=0&o=5&pid=1.7')"}} >
<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" >
<p id="demo" color="primary">
  {/* <div className="text-gray-50"> */}

  {
time.day + "d " + time.hour + "h "
    + time.minute + "m " + time.second + "s " }
  {/* </div> */}
</p>
  </div>

  <div className="timerText  lg:flex-grow md:w-1/2 px-16  flex flex-col  md:text-left  text-gray-100 font-bold md:mb-0 " >
    <h1 className=" h1">
   Big Sale Upcoming
  </h1>
  <h5 className="">grab your wallets , cuz we are gonna make them blow up </h5>


  {/* <Button className="mt-4 py-4 font-extrabold  w-1/2" variant="outlined" color="inherit"     >Grab ON</Button> */}
  <button className="bg-transparent mt-3 hover:bg-blue w-1/2 text-center text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
  Grab ON
</button>

  </div>
</section>
<section className="container mx-auto flex visible md:hidden py-24 md:flex-row flex-col items-center  timer    border-gray-800 bg-gray-900   bg-cover bg-center	bg-no-repeat		bg-fixed	" style={{minHeight:"",backgroundImage:"url('https://th.bing.com/th/id/OIP.pnOMNpKCGr08U2TkAULABAHaEo?w=283&h=180&c=7&r=0&o=5&pid=1.7')"}} >
</section>
    </div>


    );
};

export default Timersale;