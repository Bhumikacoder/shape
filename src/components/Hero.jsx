import React from "react";

const Hero = () => {
    return(

        
        <div className="w-full relative rounded-2xl transform-gpu overflow-hidden aspect-ratio-9/16 bg-gray-50 | md:aspect-ratio-1/1 | dark:bg-grayDark-500 lg:rounded-3xl lg:aspect-ratio-16/9">
            <video className="w-full h-full absolute top-0 left-0 object-cover">
                <source src="https://servd-made-byshape.b-cdn.net/production/uploads/videos/showreel-2024-portrait_cropped.mp4" type="video/mp4" media="(min-width: 1024px)"></source>
              </video>
        </div>
    )
}
export default Hero