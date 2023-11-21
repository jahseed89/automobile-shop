"use client";

import { CustumButtonProps } from '@/types';

const CustumButton = ({title, containerStyles, btnType, handleClick}: CustumButtonProps) => {
  return (
    <button disabled={false} type={btnType || 'button'} className={`custom-btn ${containerStyles}`} onClick={() => {handleClick}}>
      <span className={`flex-1`}>{title}</span>
    </button>
  )
}

export default CustumButton