import React,{useState} from 'react'
import './StudInfo.css'
import Data from './Data';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap'



function StudInfo() {
    
    
    // input fields
    const[name,setName]=useState('');
    const[branch,setBranch]=useState('');
    const[gender,setGender]=useState('');
    const[phone,setPhone]=useState('');
    const[address,setAddress]=useState('');
    const[city,setCity]=useState('');
    const[pincode,setPincode]=useState('');
    const[email,setEmail]=useState('');
    const[namefl,setNamefl]=useState('')
    const[branchfl,setBranchfl]=useState('');
    const[genderfl,setGenderfl]=useState('');
    const[phonefl,setPhonerfl]=useState('');
    const[addressfl,setAddressfl]=useState('');
    const[cityfl,setCityfl]=useState('');
    const[pincodefl,setPincoderfl]=useState('');
    const[emailfl,setEmailfl]=useState('');

    //  const handleOnSubmit=(e)=>{
    //      e.preventDefault();

    //      let info={
    //          name,
    //          branch,
    //          gender,
    //          phone,
    //          address,
    //          city,
    //          pincode,
    //          email
    //      }
    //      setInfo([...info,info])
    //  }

    const setAtLocalStore=()=>{
        // alert("hellow")
        localStorage.setItem('name',name);
        localStorage.setItem('branch',branch);
        localStorage.setItem('gender',gender);
        localStorage.setItem('phone',phone);
        localStorage.setItem('address',address);
        localStorage.setItem('city',city);
        localStorage.setItem('pincode',pincode);
        localStorage.setItem('email',email)

        
       
    }
    const getAtLocalStore=()=>{
        setNamefl(localStorage.getItem('name'));
        setBranchfl(localStorage.getItem('branch'));
        setGenderfl(localStorage.getItem('gender'));
        setPhonerfl(localStorage.getItem('phone'));
        setAddressfl(localStorage.getItem('address'));
        setCityfl(localStorage.getItem('city'));
        setPincoderfl(localStorage.getItem('pincode'));
        setEmailfl(localStorage.getItem('email'));
    }

    return (
        <>
       <h1>Student Information</h1>
       <div className="container">
               <form id="studentForm">
           <div className="label">

              
              Name:&nbsp;<input type="text" name='name' onChange={(e)=>setName(e.target.value) }value={name} />
           </div>
           <div className="label">
               Branch:
               &emsp; &nbsp;
               <select name="branchName" id="branchs" onChange={(e)=>setBranch(e.target.value)}value={branch} >
              <option value=""></option>
               CSE : <option value="CSE">Computer Science</option>
               MECH : <option value="MECH">Mechanical </option>
               EEE :<option value="EEE">Electrical</option>
               CIVIL :<option value="CIVIL">Civil</option>
               </select>
           </div>
           <div className="label">
              
              <div style={{display:"flex",flexDirection:"row"}}>
              Gender: &nbsp;
        <div  style={  {flexDirection:'row',marginRight:"10px"}}>
      <Form.Check
                 type="radio"
                 label="Male"
                 name="formVerticalRadios"
                 id="formVerticalRadios2"
                    onChange={()=>{
                        setGender("Male")
                    }} value={"Male"}
                 />
        </div>
        <div >
        <Form.Check
                 type="radio"
                 label="Female"
                 name="formVerticalRadios"
                 id="formVerticalRadios2"
                    onChange={()=>{
                        setGender("Female")
                    }} value={"Female"}
                 />
        </div>
               
               </div>
               
           </div>
           <div className="label">
           Ph No.:&nbsp;<input type="text" id="phone" maxLength={10} name='phone' onChange={(e)=>setPhone(e.target.value)} value={phone}/>
           </div>
           <div className="label">
               Address:&nbsp;<input type="text" name='address' onChange={(e)=>setAddress(e.target.value)} value={address} />
           </div>
           <div className="label">
               City:&nbsp; &nbsp; &nbsp; &nbsp;
              <select name="city" id="myCity" onChange={(e)=>{setCity(e.target.value)
            
              console.log(e.target.value,"citycitycity")
                   if(e.target.value==="Kolhapur"){
                    setPincode(416003)
                }
                else{
                    if(e.target.value==="Ichalkaranji"){
                        setPincode(416115)
                    }
                    else{
                        if(e.target.value==="Sangli")
                        {
                            setPincode(416416)
                        }else{
                            setPincode("")
                        }
                    }
                 
                }    
            
            
            }} value={city} >
                 <option value="" ></option>
                 Ichalkaranji<option value="Ichalkaranji" >Ichalkaranji</option>
                  Kolhapur:<option value="Kolhapur" >Kolhapur</option>
                  Sangli<option value="Sangli">Sangli</option>
              </select>
           </div>
           
               <div className="label">
               Pincode:&nbsp;<input type="text" id="phone" maxLength={6} name='pincode' onChange={(e)=>setPincode(e.target.value)} value={pincode}/>
           </div>
               
           
           
           {/* <div className="label">
               Pincode:&nbsp;<input type="text" id="phone" maxLength={6} name='pincode' onChange={(e)=>setPincode(e.target.value)} value={pincode}/>
           </div> */}
           {/* if(city=="Kolhapur"):416005?.city=="Sangli": */}
           <div className="label">
               E-mail:&nbsp;<input type="text" name='email' onChange={(e)=>setEmail(e.target.value)} value={email} />
           </div>

               </form>
               <div style={{hight:"70px"}} >
               <Button variant='outline-secondary'  onClick={setAtLocalStore}>Submit</Button>
               <Button variant='outline-secondary'   onClick={getAtLocalStore}>Fetch Data</Button>

               </div>
           {/* <button type="submit"  onClick={setAtLocalStore}/> */}
           {/* <input type="submit"  onClick={getAtLocalStore}/> */}
       </div>
      {  namefl && <Data namefl={namefl} branchfl={branchfl} genderfl={genderfl} phonefl={phonefl} addressfl={addressfl} cityfl={cityfl} pincodefl={pincodefl} emailfl={emailfl} />
}
    
        </>
    )
}


export default StudInfo
