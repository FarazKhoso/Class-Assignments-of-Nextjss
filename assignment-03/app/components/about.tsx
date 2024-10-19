
import React from 'react';

const About = () => {
  return (
<div>
  <section className="min-h-screen flex justify-center items-center gap-8 bg-gray-800" id="about">
    {/* About Image */}
    <div className="ml-28 w-[35vw]">
      <img
        src="/projects/faraz.png"
        alt="Faraz"
        className="max-h-[500px] max-w-[400px] border-4 border-cyan-500 rounded-lg transition-all duration-500 hover:rounded-xl hover:shadow-[0px_0px_20px_#0ef,0px_0px_40px_#0ef]"
      />
    </div>
    
    {/* About Content */}
    <div className="mx-12 text-gray-200">
      <h2 className="text-5xl font-bold mb-4">About <span className="text-cyan-500">Me</span></h2>
      <h3 className="text-3xl mb-4">Web Developer</h3>
      <p className="text-lg leading-relaxed mb-8">
        I'm Faraz, an aspiring IT professional passionate about web development, AI, and Web 3.0. 
        As a BSc student at Aligarh College, I’m constantly exploring new technologies, from mastering 
        TypeScript and React.js to diving deep into AI at GIAIC. My focus is on crafting seamless user 
        experiences, with a special love for creating smooth, sequential animations on websites. Driven 
        by curiosity and a desire to innovate, I'm always ready to take on new challenges and grow in 
        the tech world.
      </p>
      <a href="#" className="inline-block bg-cyan-500 text-gray-800 font-semibold py-3 px-10 rounded-full transition-all duration-500 hover:shadow-lg ">
        Read More
      </a>
    </div>
  </section>
</div>






    // <div>
    //   <section className="min-h-screen flex justify-center items-center gap-8 bg-gray-800" id="about">
    //     {/* About Image */}
    //     <div className="ml-28 w-[35vw]">
    //       <img
    //         src="/projects/faraz.png"
    //         alt=""
    //         className="h-[500px] w-[400px] border-4 border-cyan-500 rounded-lg transition-all duration-500 hover:rounded-xl hover:shadow-[0px_0px_20px_#0ef,0px_0px_40px_#0ef]"
    //       />
    //     </div>
        
    //     {/* About Content */}
    //     <div className="mx-12 text-gray-200">
    //       <h2 className="text-5xl font-bold mb-4">About <span className="text-cyan-500">Me</span></h2>
    //       <h3 className="text-3xl mb-4">Web Developer</h3>
    //       <p className="text-lg leading-relaxed mb-8">
    //         I'm Faraz, an aspiring IT professional passionate about web development, AI, and Web 3.0. 
    //         As a BSc student at Aligarh College, I’m constantly exploring new technologies, from mastering 
    //         TypeScript and React.js to diving deep into AI at GIAIC. My focus is on crafting seamless user 
    //         experiences, with a special love for creating smooth, sequential animations on websites. Driven 
    //         by curiosity and a desire to innovate, I'm always ready to take on new challenges and grow in 
    //         the tech world.
    //       </p>
    //       <a href="#" className="inline-block bg-cyan-500 text-gray-800 font-semibold py-3 px-10 rounded-full transition-all duration-500 hover:shadow-lg ">
    //         Read More
    //       </a>
    //     </div>
    //   </section>
    // </div>
  );
};

export default About;

