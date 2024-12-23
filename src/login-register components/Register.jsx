import { Box } from '@mui/material'
import MyTextField from './forms/MyTextField';
import MyPasswordField from './forms/MyPasswordField';
import MyButton from './forms/MyButton';
import { useForm } from 'react-hook-form';
import AxiosInstance from '../Axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { Link } from 'react-router-dom';

// Custom validation function
const validate = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address.";
    }
    console.log(values.password.length, values.password.length < 5);
    if (!values.password) {
        errors.password = "Password is required.";
    } else if (values.password.length <= 5) {
        errors.password = "Must be more than 5 characters.";
    }

    if (!values.password2) {
        errors.password2 = "Confirm password is required.";
    } else if (values.password2 !== values.password) {
        errors.password2 = "Passwords do not match.";
    }

    return errors;
};

const Register = () => {
    const navigate = useNavigate()

    // Use form with validation logic
    const {
        handleSubmit,
        control,
        reset,
        setError,
        formState: { errors },
    } = useForm({
        mode: "onSubmit",
        defaultValues: {
            email: "",
            password: "",
            password2: "",
        },
        criteriaMode: "all",
    });

    //submission
    const submission = (data) => {
        const validationErrors = validate(data);
        if (Object.keys(validationErrors).length > 0) {
            // Map validation errors to React Hook Form
            Object.keys(validationErrors).forEach((field) => {
                setError(field, { type: "manual", message: validationErrors[field] });
            });
            return;
        }

        AxiosInstance.post(`register/`, {
            email: data.email,
            password: data.password,
        })
            .then((response) => {
                // Ensure the response indicates success
                if (response.status === 201 || response.status === 200) {
                    toast.success("Registration successful!", {
                        position: "top-right",
                    });
                    reset(); // Reset the form
                } else {
                    // Handle unexpected success responses with errors
                    toast.error("Unexpected response. Please try again.", {
                        position: "top-right",
                    });
                    console.warn("Unexpected response:", response);
                }
            })
            .catch((error) => {
                // Handle known error responses
                const errorMessage =
                    error.response?.data?.message || "An error occurred. Please try again.";
                toast.error(errorMessage, {
                    position: "top-right",
                });
                console.error("Error:", error.response || error);
            });



    }
    return (
        <div className='w-screen h-screen flex items-center justify-center bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70];'>
            <form onSubmit={handleSubmit(submission)}>
                <Box className='bg-white p-5 min-w-[400px] h-[70%] w-[25%] rounded shadow-lg;'>

                    <Box className='flex justify-center items-center w-full h-20'>
                        <Box className="text-[30px] text-gray-800">User Registration</Box>
                    </Box>

                    <Box className='flex justify-center items-center w-full h-20'>
                        <MyTextField className="w-full"
                            label={'Email'}
                            name={'email'}
                            control={control}

                        />
                    </Box>

                    <Box className='flex justify-center items-center w-full h-20'>
                        <MyPasswordField id={'password'}
                            label={"password"}
                            name={'password'}
                            control={control}
                        />

                    </Box>

                    <Box className='flex justify-center items-center w-full h-20'>
                        <MyPasswordField id={'password2'}
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

                    <Box className='flex flex-row gap-1 justify-center items-center w-full h-20'>
                        Already registered? Please
                        <Link to='/login' className='text-blue-600 hover:text-blue-800 visited:text-purple-600'>
                            Login
                        </Link>
                    </Box>

                </Box>
                <ToastContainer />
            </form>
        </div>
    )
}

export default Register



