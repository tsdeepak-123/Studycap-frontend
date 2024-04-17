import React from 'react';
import './TestModal.css';
import { IoCloseOutline } from "react-icons/io5";

function TestModal({ closeModal }) {
  return (
    <div className='modal'>
      <div className="modal-content">
        <span className="close" onClick={closeModal}><IoCloseOutline /></span>
        <div>
          <img src="/Images/test.jpg" alt="Image" className="image" />
          <p className="text">Click here to attend the aptitude test !</p>
          <div className='flex justify-center'>
          <button className="modal-button w-72 ">Click Here</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestModal;
