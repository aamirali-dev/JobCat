import React from 'react'
import Value from '../ValueDiv/Value'

const Data = [
    {
        id: 1, 
        logo: null,
        title: 'Simplicity',
        desc: 'ksj sjfks jkdsa fksdjksd jjsf'
    },{
        id: 2, 
        logo: null,
        title: 'Simplicity',
        desc: 'ksj sjfks jkdsa fksdjksd jjsf'
    },{
        id: 3, 
        logo: null,
        title: 'Simplicity',
        desc: 'ksj sjfks jkdsa fksdjksd jjsf'
    }
]

function Values() {
    return (
        <div className='mb-[4rem] mt-[6rem]'>
          <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'>The value that holds us true and to account</h1>
          <div className='grid gap-[10rem] grid-cols-3 items-center'>
            {
                Data.map(data => {
                    return (
                        <Value data={data}/>
                    )
                })
            }
          </div>
          <div className='card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px]'>
            <div>
                <h1 className='text-blueColor text-[30px] font-bold'>
                    Ready to switch a career 
                </h1>
                <h2 className='text-textColor text-[25px] font-bold'>Let's get started</h2>
                <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor'>
                    Get Started
                </button>
            </div>
          </div>
        </div>
      )
}

export default Values