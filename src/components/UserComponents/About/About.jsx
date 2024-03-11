import React from 'react';
import "./About.css"

function About() {
  return (
<div className="min-h-screen flex items-center justify-center container">
  <div className="bg-white p-8 max-w-screen-lg w-full">
    <div className="flex flex-col md:flex-row items-center mb-4">
      <div className="md:w-1/2 md:mr-4">
        <p className="text-gray-500 about-welcome">
          Welcome to KAAF Events, your premier destination for exquisite event designs and management services in Calicut, Kerala. 
        </p>
      </div>
      <img
        src="/Images/logo.png"  // Replace with your image source
        alt="About KAAF Events"
        className="w-full md:w-40 h-45 rounded-2xl sm:rounded mb-4 md:mb-0 object-cover mt-4 ml-auto" // added ml-auto
      />
    </div>
    <p className="text-gray-700 leading-relaxed">
      At KAAF Events, we specialize in transforming spaces into breathtaking settings that capture the essence of your celebrations. Whether it's weddings, corporate events, or social gatherings, our creative team meticulously designs every detail to exceed your expectations.
      <br />
      <br />
      We offer DIY Decor boxes available for worldwide shipping, ensuring that our unique designs can enhance events across the globe. 
      <br />
      <br />
      Let KAAF Events be your partner in creating memories that last a lifetime. Experience the magic of our craftsmanship and attention to detail as we bring your event visions to life.
      <br />
      <br />
      Contact us today and discover how we can elevate your next event with our signature style and expertise.
    </p>
  </div>
</div>

  );
}

export default About;
