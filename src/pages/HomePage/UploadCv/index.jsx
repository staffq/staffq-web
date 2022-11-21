import React from 'react'
import {Div} from "../../../styles/upload-cs" 
import Input from "../../../components/FormControls/Input"
const UploadCV = () => {
  return (
    <Div>
        <div className='background'>
        <h1>Find The Best Job <br></br>
For You</h1>
        </div>

<div>
    <ul>

    </ul>
</div>
        <div className='container top'>
            <div className='left-side'>
            <h2>Front End Developer</h2>
                <p>Enter the details below</p>
               
            </div>
            <div className='row'>
         
                <div className='col-lg-1'></div>
                <div className='col-lg-5 col-sm-12'>
                    
                <label > First Name*</label>
                    <Input/>
                    <label >Email address* </label>
                    <Input/>
                    <label >LinkedIn / Portfolio*</label>
                    <Input/>
                </div>
                <div className='col-lg-5 col-sm-12'>
                
                    <label >Last Name*</label>
                    <Input/>
                    <label >Mobile number*</label>
                    <Input/>
                    <label >Work experience*</label>
                    <Input/>
                </div>
                
                <div className='col-lg-1'></div>
               
            </div>
     

        </div>
    </Div>
  )
}

export default UploadCV;