import React from "react";

function Hero() {
  return (
    <div className="w-full">
      <div className="relative w-[1100px] mt-20 ml-20 overflow-hidden rounded-2xl aspect-[9/16] md:aspect-square lg:aspect-video">
      <video className="w-full h-full absolute top-0 left-0 object-cover"
      autoPlay
      muted
      loop
      playsInline>
        <source src="https://servd-made-byshape.b-cdn.net/production/uploads/videos/showreel-2024-portrait_cropped.mp4" type="video/mp4" media="(max-width: 1023px)"/>
        <source src="https://servd-made-byshape.b-cdn.net/production/uploads/videos/shape-showreel-2024_looping-v3.mp4" type="video/mp4" media="(min-width: 1024px)"/>
      </video> 
      </div>
      <div className="above-box absolute z-1 top-40 left-50 bg-white p-[15px] leading-5 rounded-[20px] tracking-wide">
        <div className="text-content">
          <div className="line1 bg-white">⚫ Hiya , we're Shape 🖐️</div>
          <div className="line2 text-7xl font-medium bg-white ">A web design and</div>
          <div className="line3 text-7xl font-medium bg-white ">branding agency</div>
          <div className="line4 text-7xl font-medium bg-white">in Manchester</div>
          <div className="line5 my-3">
            <button type="btn" className="py-2 px-3 mx-3 rounded-full bg-[#000] text-gray-200">View Your Work</button>
            <button type="btn" className="py-2 px-3 mx-3 rounded-full bg-[#fff] text-gray-900 border">Meat The Team</button>
          </div>
        </div>
        <div className="side-section  bg-white ">
          <div className="left ">
            
          </div>
          <div className="right">
            
          </div>
        </div>
        <div class="col-span-6 grid grid-cols-subgrid gap-4 absolute z-1 top-120 left-220 w-40">
          <div>
            <img src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/India-2022/Individuals-Black-Wall/Shape-April-2022-HR-186.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1651143173&s=be043bcd94bb13283574b35d1df6ee93" className="w-60" alt="" />
          </div>
          <div>
            <h2>Hear From Andy</h2>
            <p>Co-founder of shape.</p>
          </div>
        </div>
        <div className="buttons flex gap-8 mt-7 bg-white ">
          
          
        </div>
      </div>
    </div>
  );
}

export default Hero;
