import React, { useRef, useEffect } from 'react';

const Modal = ({ isOpen, onClose, children, isBgColor }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  const handleClose = () => {
    dialogRef.current.close();
    onClose();
  };

  console.log(isBgColor);
  

  return (
    <dialog ref={dialogRef} className={!isOpen ? 'hidden' : ' flex justify-center items-center rounded-2xl w-full h-full bg-blueRgba'} onClose={handleClose}>
      <div className={`${isBgColor ? 'bg-white' : '' } relative w-[50%] rounded-3xl flex justify-center items-center py-20`}>
        {children}
        <button onClick={handleClose} className="absolute top-20 -right-20 hover:bg-blue-100 duration-300 bg-blue-200 w-8 h-8 lg:w-[35px] lg:h-[35px] rounded-full text-white">X</button>
      </div>
    </dialog>
  );
};

export default Modal;
