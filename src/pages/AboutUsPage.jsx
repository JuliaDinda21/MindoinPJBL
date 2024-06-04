import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const AboutUsPage = () => {

  const navigate = useNavigate();

  return (
   <div className="pt-[100px]">
     <Navbar />
     <div className="w-[100%] mx-auto flex flex-col gap-9">
       <div className="relative">
         <img
           className="h-[150px] object-cover w-full"
           src="/heros/daun-small.jpg" // Change this to your own image
         />
         <h1 className="text-4xl font-bold text-white absolute -translate-x-1/2 top-1/2 left-1/2 -translate-y-1/2">
           About Us
         </h1>
         </div>


         <div className="text-white bg-white min-h-screen grid place-items-center">
      <div className="w-[80%] sm:w-full max-w-[600px] rounded-xl bg-[#d74f24] p-8 flex flex-col items-center gap-4">
        <img className="rounded-full w-90 " src="/heros/kelompok2.jpeg" />
        <div className="text-center">
          <h1 className="text-2xl font-bold">OUR TEAM</h1>
          <p className="text-white font-bold">KELOMPOK 2</p>
        </div>
        <p className="text-white font-bold text-center text-sm my-[10px]">
          Sosial Media Kami
        </p>
        <div className="flex flex-col gap-4 w-full">
          <a
            href="https://instagram.com/ranggabiner"
            className="w-full text-white bg-[#6c7070] block text-center py-2 hover:scale-105 active:scale-90 duration-300 rounded-lg font-medium"
          >
            RANGGA HADI PUTRA
          </a>

          <a
            href="https://www.instagram.com/ryannwidianto"
            className="w-full text-white bg-[#6c7070] block text-center py-2 hover:scale-105 active:scale-90 duration-300 rounded-lg font-medium"
          >
            AHMAD RYAN WIDIANTO
          </a>

          <a
            href="https://www.instagram.com/ashilaputriani"
            className="w-full text-white bg-[#6c7070] block text-center py-2 hover:scale-105 active:scale-90 duration-300 rounded-lg font-medium"
          >
            ASHILA PUTRIANI ERWAN
          </a>

          <a
            href="https://www.instagram.com/juliiiiii217"
            className="w-full text-white bg-[#6c7070] block text-center py-2 hover:scale-105 active:scale-90 duration-300 rounded-lg font-medium"
          >
            JULIA DINDA LESTARI
          </a>

          <a
            href="https://www.instagram.com/hrpdly"
            className="w-full text-white bg-[#6c7070] block text-center py-2 hover:scale-105 active:scale-90 duration-300 rounded-lg font-medium"
          >
            HARRY PADLY
          </a>

          <a
            href="https://www.instagram.com/bias_rizki"
            className="w-full text-white bg-[#6c7070] block text-center py-2 hover:scale-105 active:scale-90 duration-300 rounded-lg font-medium"
          >
            BIAS RIZKI NUGROHO
          </a>

          <a
            href="https://www.instagram.com/yohana_amell"
            className="w-full text-white bg-[#6c7070] block text-center py-2 hover:scale-105 active:scale-90 duration-300 rounded-lg font-medium"
          >
            YOHANA BUTAR BUTAR
          </a>

          <a
            href="https://www.instagram.com/itsmuel_"
            className="w-full text-white bg-[#6c7070] block text-center py-2 hover:scale-105 active:scale-90 duration-300 rounded-lg font-medium"
          >
            SAMUEL HUTABARAT
          </a>

          <a
            href="https://www.instagram.com/ineznabilahr_"
            className="w-full text-white bg-[#6c7070] block text-center py-2 hover:scale-105 active:scale-90 duration-300 rounded-lg font-medium"
          >
           INEZ NABILAH RAHMAN
          </a>

          <a
            href="https://www.instagram.com/sarahltobing"
            className="w-full text-white bg-[#6c7070] block text-center py-2 hover:scale-105 active:scale-90 duration-300 rounded-lg font-medium"
          >
            SARAH LAMTUA TOBING
          </a>
          
        </div>
      </div>
    </div>
    </div>

     </div>
     //</div>
 );
};



export default AboutUsPage;