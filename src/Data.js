import React from 'react'

const Data = (props) => {
    const { namefl,branchfl,genderfl,phonefl, addressfl,cityfl,pincodefl,emailfl } = props
    
    return (
        <div>
             <div className="container">
           <div className="label">
           
          Name:  {namefl}<br>
          </br>

    
          Branch: {branchfl}
          <br></br>
          Gender: {genderfl}
          <br />
          Phone No.: {phonefl}
          <br />
          Address: {addressfl}
          <br />
          City: {cityfl}
          <br />
          Pincode: {pincodefl}
          <br />
          E-mail: {emailfl}
           </div>
       </div>
        </div>
        
    )
}

export default Data
