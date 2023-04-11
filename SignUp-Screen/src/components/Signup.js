import React, { useEffect, useState } from 'react'
import "./style.css"
import { useName } from '../context/nameContext';

import { useFormik } from 'formik';
import validationSchema from './validations';

import { Link } from 'react-router-dom';

function Signup() {
  
  const {name , setName} = useName()

  console.log(name)

  const {handleSubmit , values , handleChange , errors , handleBlur , touched } = useFormik({
    initialValues: {
        firstName: '' ,
        lastName: '',
        email: '',
        password : '',
        passwordConfirm :''
    },
    onSubmit: values => {
        console.log(values.errors);
    },
    validationSchema,
  });

  const [sifre , setSifre] = useState(false)
  const [sifreKontrol , setSifreKontrol] = useState(false)

  useEffect(() =>{
    setName(values.firstName)
  },[values.firstName])

  
  return (
    <div>
      <div className='signup1'>
        <div className='signup2'>Sign Up</div>
        <form onSubmit={handleSubmit}>
            <div className='signup3'>
                <input name='firstName' value={values.firstName} onChange={handleChange}  onBlur={handleBlur} placeholder='FirstName' />
                <div>{errors.firstName && touched.firstName && (<div>{errors.firstName}</div>)}</div>
            </div>

            <div className='signup3'>
                <input name='lastName' value={values.lastName} onChange={handleChange}  onBlur={handleBlur} placeholder='LastName'></input>
                <div>{errors.lastName && touched.lastName && (<div>{errors.lastName}</div>)}</div>
            </div>  

            <div className='signup3'>
                <input name='email' value={values.email} onChange={handleChange}  onBlur={handleBlur} placeholder='Email'></input>
                <div>{errors.email && touched.email && (<div>{errors.email}</div>)}</div>
            </div>

            <div className='signup3'>
                <input name='password' type={`${sifre === false && "password"}`} value={values.password} onChange={handleChange}  onBlur={handleBlur} placeholder='Password'></input>
                <span>
                {sifre === false ?
                        (
                        <span className='signup4' onClick={() => setSifre(sifre === false ? true : false)}>
                            <svg className='signup5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                        </span>
                        )
                        :
                        (
                        <span className='signup4' onClick={() => setSifre(sifre === false ? true : false)}>
                            <svg className='signup5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
                        </span>
                        )
                }                   
                </span>
                <div>{errors.password && touched.password && (<div>{errors.password}</div>)}</div>
            </div>

            <div className='signup3'>
                <input name='passwordConfirm' type={`${sifreKontrol === false && "password"}`} value={values.passwordConfirm} onChange={handleChange}  onBlur={handleBlur} placeholder='PasswordConfirm'></input>
                <span>
                {sifreKontrol === false ?
                        (
                        <span className='signup4' onClick={() => setSifreKontrol(sifreKontrol === false ? true : false)}>
                            <svg className='signup5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                        </span>
                        )
                        :
                        (
                        <span className='signup4' onClick={() => setSifreKontrol(sifreKontrol === false ? true : false)}>
                            <svg className='signup5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
                        </span>
                        )
                }                   
                </span>
                <div>{errors.passwordConfirm && touched.passwordConfirm && (<div>{errors.passwordConfirm}</div>)}</div>
            </div>

            <div className='signup3'>

                {Object.keys(errors).length === 0 && touched.firstName ? (
                <Link to="/anasayfa">
                    <button className='signup6' type="submit">Submit</button>
                </Link>
                ) : (
                    <button className='signup6' type="submit">Submit</button>
                )}
            </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;
