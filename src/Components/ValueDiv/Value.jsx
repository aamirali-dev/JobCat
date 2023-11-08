import React from 'react'

function Value({data}) {
  return (
    <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
      <div className='flex items-center gap-3'>
        <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
          <img src='' alt='' className='w-[70%]' />
        </div>
        <span className='font-semibold text-textColor text-[18px]'>{data.title}</span>
      </div>
      <p className='text-[25px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
        {data.desc}
      </p>
    </div>
  )
}

export default Value