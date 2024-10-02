import React, { useState } from 'react';
import UBA from '../IMAGES/UBA.png'
import { FaRegCreditCard } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";



const Modal2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      
      <button
        onClick={toggleModal}
        className="px-6 py-3 text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Modal 2
      </button>


      {isModalOpen && (
        <div className="fixed overflow-y-auto inset-0 p-3 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white  mt-[5rem] rounded-lg shadow-lg max-w-md w-full">
            <div className="">
                <button onClick={toggleModal}>
                <FaTimes className='bg-red-500 text-white rounded-full size-10 mt-3 flex justify-end lg:ml-[25rem] ml-[18rem] '/>
                </button>
            </div>
              <div className="flex m-auto justify-center items-center">
            <img
            src={UBA}
            />
           </div>
            <div className="mt-5 flex flex-col justify-center items-center">
                <p>Total Amount to Pay</p>
                <h1 className='font-bold text-[2rem]'>NGN 2,800.00</h1>
            </div>
            <div className="bg-slate-400 p-3  text-white justify-center items-center flex m-auto">
                <span className='text-sm text-sky-300'>Back</span>
                <div className="flex text-black m-auto justify-center items-center">
                <span><FaRegCreditCard className='size-5 mr-5 ml-1' /></span>
                <span className=''>Pay with Card</span>
            </div> 
                </div> 
                <div className="Card-number mt-5">
                <div className="">
                <input
                type="number"
                placeholder='0000 0000 0000 00000'
                className='border-gray-400  rounded-lg p-3 border-2 w-[20rem] lg:w-[25rem] md:w-[25rem] sm:w-[25rem] ml-5'
                />
                </div>
                <div className="flex ml-3 gap-4 mt-5">
                <input
                type="date"
                placeholder='0000 0000 0000 00000'
                className='border-gray-400 rounded-lg p-3 border-2 w-[12rem] ml-2'
                />
                <input
                type="number"
                placeholder='ccv'
                className='border-gray-400 placeholder:text-slate-300 rounded-lg p-3 border-2 mr-5 w-[9rem] lg:w-[12rem] md:w-[12rem] sm:w-[12rem] '
                />
                </div>
                </div>  
                <div className="flex justify-center mt-5 mb-10 items-center m-auto">
                  <button className='bg-red-700 rounded-lg p-3 w-[22rem] text-white '>
                    Pay NGN 2,800.00
                  </button>
                </div>
                </div>
                </div>
      )}
    </div>
  );
};

export default Modal2;
