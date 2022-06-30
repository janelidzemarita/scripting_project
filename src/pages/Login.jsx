import React from 'react'
import {useForm} from "react-hook-form";


export default function Form() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);



    return (
        <div className='sign'>
            <form action="" //onSubmit={submitForm}
            >
                <section>
                    <div className="register">
                        <div className="col-1">
                            <span>Please Sign In with your E-mail or Username!</span>

                            <label //onChange={handleChange} value={data.username}
                            >
                            <input type="text" name='username' className="form-control" placeholder='Username'
                            />
                            </label>
                            <label //onChange={handleChange} value={data.password}
                            >
                            <input type="password" name='password' className="form-control" placeholder='Password'
                            />
                            </label>

                            {/* {errors.mobile?.type === "required" && "Mobile Number is required"} */}
                            <button className='btn'>Sign In</button>


                        </div>
                    </div>
                </section>
            </form>
        </div>
    )
}
