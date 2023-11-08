import React from 'react'
import Job from '../JobCard/Job'
import logo from '../../Assets/logo.jpg'

const Data = [
  {
    id: 1,
    image: logo,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada', 
    desc: 'loreaksja fskjsd fskaj fkdjakd jdkfjs djfksdj fksdjfskd sfdjkfsd',
    company: 'novac linux co'
  },{
    id: 1,
    image: logo,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada', 
    desc: 'loreaksja fskjsd fskaj fkdjakd jdkfjs djfksdj fksdjfskd sfdjkfsd',
    company: 'novac linux co'
  }
]

function Jobs() {
  return (
    <div>
      <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
      {
        Data.map((data) => {
          return (
            <Job data={data}/>
          )
        })
      }
      </div>
      </div>
  )
}

export default Jobs