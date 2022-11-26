

import React from 'react'
import Rat from './Rat'
import Ratdata from './Ratdata'
const Rattss = () => {
  return (
    <div>
        <div className='row'>
            {
                Ratdata.data.map((item , index) =>{
                   return( 
                //    <div key={item.id}>

                //     </div>
                        <Rat titile = {item.titile}  text = {item.text} key = {index}></Rat>
                   )
                })
            }
       
        </div>
    </div>
  )
}

export default Rattss