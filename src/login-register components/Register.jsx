
import { Box } from '@mui/material'
import MyTextField from './forms/MyTextField';
import MyPasswordField from './forms/MyPasswordField';
import MyButton from './forms/MyButton';
import { useForm } from 'react-hook-form';
import AxiosInstance from '../Axios';
import { useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import { Link } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    const { handleSubmit, control } = useForm()

    //submission
    const submission = (data) => {
        AxiosInstance.post(`register/`, {
            email: data.email,
            password: data.password
        })
            // .then(() => {
            //     navigate('/login')
            // }
            // )
                .then((response) => {
                    toast.success("Registration successful!", {
                      position: "top-right",
                    });
                    reset(); // Reset the form after successful submission
                  })
                  .catch((error) => {
                    toast.error("An error occurred. Please try again.", {
                      position: "top-right",
                    });
                    console.error("Error:", error);
                  });


    }
    return (
        <div className='w-screen h-screen flex items-center justify-center bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70];'>
            <form onSubmit={handleSubmit(submission)}>
                <Box className='bg-white p-5 min-w-[400px] h-[70%] w-[25%] rounded shadow-lg;'>

                    <Box className='flex justify-center items-center w-full h-20'>
                        <Box className={'title'}>User Registration</Box>
                    </Box>

                    <Box className='flex justify-center items-center w-full h-20'>
                        <MyTextField className="w-full"
                            label={'Email'}
                            name={'email'}
                            control={control}

                        />
                    </Box>

                    <Box className='flex justify-center items-center w-full h-20'>
                        <MyPasswordField
                            label={"password"}
                            name={'password'}
                            control={control}
                        />

                    </Box>

                    <Box className='flex justify-center items-center w-full h-20'>
                        <MyPasswordField
                            label={"Confirm password"}
                            name={'password2'}
                            control={control}
                        />

                    </Box>

                    <Box className='flex justify-center items-center w-full h-20'>
                        <MyButton
                            type={"submit"}
                            label={"Register"}
                        />

                    </Box>

                    <Box className='flex justify-center items-center w-full h-20'>
                        <Link to="/login">
                            Already registered? Please Login
                        </Link>
                    </Box>

                </Box>
            </form>
        </div>
    )
}

export default Register