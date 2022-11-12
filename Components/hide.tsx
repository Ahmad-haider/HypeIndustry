import React, { useState } from 'react';
import Image from 'next/image';
import Arrow from '../public/down_arrow.ico'

const Component = () => {
  const [show, setShow] = useState(false);
  return(
    <>
      <Image src={Arrow} alt="" className='pt-1' style={{ height: "1%" ,}} onClick={() => setShow(prev => !prev)}></Image>
      {show && <p className='fw-light pt-4 'style={{ width: "70%" ,}} >To ensure the quality and authenticity of all items on our marketplace, we only allow a select group of stores and sellers that have passed our verification process, to sell on our platform. We encourage you to request to become a seller by filling out all the required information. We’ll notify you as soon as your request has been approved.</p>}
    </>
  );
}

export default Component