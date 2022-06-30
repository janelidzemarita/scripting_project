import React from 'react'


export default function Form() {

    // const { register, handleSubmit, formState: { errors } } = useForm()
    // const onSubmit = data => console.log(data);



    return (
        <div className='sign'>
            <form action="" //onSubmit={submitForm}
            >
                <section>
                    <div className="register">
                        <div className="col-1">
                            <span>Please Sign In with your E-mail or Username!</span>


                            <input type="text" name='username'  className="form-control" placeholder='Username'  //onChange={handleChange} value={data.first_name}
                            />
                            <input type="text" name='password'  className="form-control" placeholder='Password' //  onChange={handleChange} value={data.password}
                            />
                            <input type="text"                  className="form-control" placeholder='Confirm password' />
                            <input type="email" name='email'    className="form-control" placeholder='e-mail'   //  onChange={handleChange} value={data.email}
                            />
                            {/* {errors.mobile?.type === "required" && "Mobile Number is required"} */}
                            <button className='btn'>Sign In</button>


                        </div>
                    </div>
                </section>
            </form>
        </div>
    )
}
