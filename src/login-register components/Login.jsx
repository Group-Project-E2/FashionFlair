import { Box } from '@mui/material'
import MyTextField from './forms/MyTextField';
import MyPasswordField from './forms/MyPasswordField';
import MyButton from './forms/MyButton';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AxiosInstance from '../Axios';

const Login = () => {
    const navigate = useNavigate()
    const { handleSubmit, control } = useForm()

    //submission
    const submission = (data) => {
        AxiosInstance.post(`login/`, {
            email: data.email,
            password: data.password
        })
            .then((response) => {
                console.log(response)
                //store token in the local storage
                localStorage.setItem('Token', response.data.token)
                navigate('/home')
            })
            .catch((error) => {
                console.error('Error during login', error)
            }
            )
    }
    return (
        <div className='w-screen h-screen flex items-center justify-center bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70];'>
            <form onSubmit={handleSubmit(submission)}>
                <Box className='bg-white p-5 min-w-[400px] h-[70%] w-[25%] rounded shadow-2xl' >

                    <Box className='flex justify-center items-center w-full h-20'>
                        <Box className="text-[30px] text-gray-800">Login</Box>
                    </Box>

                    <Box className='flex justify-center items-center w-full h-20'>
                        <MyTextField
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

                        <MyButton
                            type={"submit"}
                            label={"Login"}
                        />

                    </Box>

                    <Box className='flex flex-row gap-1 justify-center items-center w-full h-20'>
                        No Account yet? Please
                        <Link to="/register" className='text-blue-600 hover:text-blue-800 visited:text-purple-600'>
                            register
                        </Link>
                    </Box>

                </Box>
            </form>
        </div>
    )
}

export default Login