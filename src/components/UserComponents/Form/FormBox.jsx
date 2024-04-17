import React from 'react';
import DetailsForm from './DetailsForm';
import Video from '../Video/Video';
import './FormBox.css'; 

function FormBox() {
  return (
    <>
    <div className='form-box mb-14'>
      <div className='sm:ml-32 mt-14 mx-6 sm:mx-0'>
      <DetailsForm />
      </div>
        <Video />
    </div>
    </>
  );
}

export default FormBox;
