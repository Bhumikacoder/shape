import React from "react";

function Hero() {
  return (
    <div className="w-full">
      <div className="relative w-[1100px] mt-20 ml-20 overflow-hidden rounded-2xl aspect-[9/16] md:aspect-square lg:aspect-video">
      <video className="w-full h-full absolute top-0 left-0 object-cover" playsinline="" autoplay="" loop="" muted="" loading="lazy">
<source src="https://servd-made-byshape.b-cdn.net/production/uploads/videos/showreel-2024-portrait_cropped.mp4" type="video/mp4" media="(max-width: 1023px)"/>
<source src="https://servd-made-byshape.b-cdn.net/production/uploads/videos/shape-showreel-2024_looping-v3.mp4" type="video/mp4" media="(min-width: 1024px)"/></video>
       
      </div>
      <div className="above-box absolute z-1 top-40 left-50 bg-white p-[15px] leading-5 rounded-[20px] tracking-wide">
        <div className="text-content">
          <div className="line1 bg-white">⚫ Hiya , we're Shape 🖐️</div>
          <div className="line2 text-7xl font-medium bg-white ">A web design and</div>
          <div className="line3 text-7xl font-medium bg-white ">branding agency</div>
          <div className="line4 text-7xl font-medium bg-white">in Manchester</div>
        </div>
        <div className="buttons flex gap-8 mt-7 bg-white ">
          
          
        </div>
      </div>
    </div>
  );
}

export default Hero;