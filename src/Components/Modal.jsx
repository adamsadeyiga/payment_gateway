import React, { useState } from 'react';
import UBA from '../IMAGES/UBA.png'
import { FaRegCreditCard } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CiBank } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { BsQrCode } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";



const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">

      <button
        onClick={toggleModal}
        className="px-6 py-3 text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Modal 1
      </button>


      {isModalOpen && (
        <div className="fixed overflow-y-auto inset-0 p-3 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white  mt-[5rem] rounded-lg shadow-lg max-w-md w-full">
            <div className="">
              <button onClick={toggleModal}>
                <FaTimes className='bg-red-500 text-white rounded-full size-10 mt-3 flex justify-end lg:ml-[25rem] md-ml-[25rem] sm:ml-[18rem] ' />
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
            <div className="bg-black p-3 text-white justify-center items-center flex m-auto">
              Choose payment method
            </div>
            <div className="">

              <div className="flex p-2">
                <div className="ml-2 flex-1">
                  <FaRegCreditCard className='size-12 mr-5 ml-1' />

                </div>
                <div className=" ml-3 flex-3">
                  <h1 className='font-bold text-[1.2rem] '>Pay with USSD</h1>
                  <p className='text-sm'>
                    Dial a USSD string from any of 17+ banks to complete a transactions
                  </p>
                </div>
                <div className="arrow ">
                  <MdOutlineKeyboardArrowRight className='size-10 flex-1 mt-5 text-red-600' />

                </div>
              </div>

              <hr className=' mt-0 mb-0 mr-5 ml-5' />


              <div className="flex p-2">
                <div className="ml-2 flex-1">
                  <IoCall className='size-10 ml-3 mr-3' />

                </div>
                <div className=" ml-3 flex-3">
                  <h1 className='font-bold text-[1.2rem] '>Pay with USSD</h1>
                  <p className='text-sm'>
                    Dial a USSD string from any of 17+ banks to complete a transactions
                  </p>
                </div>
                <div className="arrow ">
                  <MdOutlineKeyboardArrowRight className='size-10 flex-1 mt-5 text-red-600' />

                </div>
              </div>
              <hr className=' mt-0 mb-0 mr-5 ml-5' />

              <div className="flex p-2  gap-2">

                <div className="ml-2">
                  <CiBank className='size-14 mt-3' />
                </div>
                <div className=" ml-3">
                  <h1 className='font-bold text-[1.2rem] '>Pay with UBA</h1>
                  <p>
                    Enter your bank details (including BVN and Date of Birth).
                  </p>
                </div>
                <div className="arrow">
                  <MdOutlineKeyboardArrowRight className='size-10 mt-5 text-red-600' />

                </div>

              </div>
              <hr className=' mt-0 mb-0 mr-5 ml-5' />

              <div className="flex p-2">
                <div className="ml-2 flex-1">
                  <BsQrCode className='size-11 mr-4 ml-2' />
                </div>
                <div className=" ml-3 flex-3">
                  <h1 className='font-bold text-[1.2rem] '>Pay with QR</h1>
                  <p>
                    Generate a QR code you can scan withh your bank app to pay.
                  </p>
                </div>
                <div className="arrow">
                  <MdOutlineKeyboardArrowRight className='size-10 flex-1 mt-5 text-red-600' />

                </div>
              </div>
              <hr className=' mt-0 mb-0 mr-5 ml-5' />
              <div className="flex p-2">
                <div className="ml-2 flex-1">
                  <h1 className='font-bold text-[2rem] mr-5'>PA</h1>
                </div>
                <div className=" ml-3 flex-3">
                  <h1 className='font-bold text-[1.2rem] '>Pay with Pay Attitude</h1>
                  <p className='text-sm'>
                    Dial a USSD string from any of 17+ banks to complete a transactions
                  </p>
                </div>
                <div className="arrow ">
                  <MdOutlineKeyboardArrowRight className='size-10 flex-1 mt-5 text-red-600' />

                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
