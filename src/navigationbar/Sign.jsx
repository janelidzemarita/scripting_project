import React from 'react'

import { useForm } from 'react-hook-form';

export default function Form() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
  <div className='sign'>
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Sign In</h2>
                <span>register and enjoy the service</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='username' />
                    <input type="text" {...register("password")} placeholder='password' />
                    <input type="text" {...register("confirmpwd")} placeholder='confirm password' />
                    <input type="email" {...register("mobile", { required : true})} placeholder='email' />
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    <button className='btn'>Sign In</button>
                </form>

            </div>
        </div>
    </section>
    </div>
  )
}