import * as React from 'react'
import TextField from '@mui/material/TextField'
import { Input } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { passwordValidation } from '../utils/validation'
import { useAppDispatch, useAppSelector } from '../store'
import { loginThunk } from '../store/auth'
import toast from 'react-hot-toast'

import {
    CustomButton,
    CustomCheckbox,
    CustomLink,
} from '../styles/custom-mui-theme/CustomComponents'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { CircularProgress, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { selectCurrentToken } from '../store/auth'
import { useSelector } from 'react-redux'

// import CheckboxIcon from "../components/CheckboxIcon";
interface IFormInput {
    email: string
    password: string
}
export interface IUserInfo {
    email: string
    password: string
}
const SignIn = () => {
    const token = useSelector(selectCurrentToken)
    const navigate = useNavigate()
    const formSchema = Yup.object().shape({
        email: Yup.string()
            .email('Must be a valid email')
            .max(100)
            .required('Email is required'),
        password: Yup.string().matches(
            passwordValidation.exp,
            passwordValidation.msg
        ),
    })
    const validationOpt = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, formState } =
        useForm<IFormInput>(validationOpt)
    // const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
    const { errors } = formState
    const isLoading = useAppSelector((state) => state.auth.loading)
    const dispatch = useAppDispatch()
    const submitHandler = async (values: IFormInput) => {
        const { email, password } = values
        const loginResult = await dispatch(
            loginThunk({
                email,
                password,
            })
        )
        // console.log('loginResult: ', loginResult)
        if (loginThunk.rejected.match(loginResult)) {
            toast.error('Incorrect email or passowrd')
        }
        if (loginThunk.fulfilled.match(loginResult)) {
            toast.success('Login Success')
            console.log('token:: ', token)
            // navigate('/')
        }
    }
    return (
        <Grid container component="main">
            <Box
                sx={{
                    width: '30%',
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '0 auto',
                    border: '1px solid #000',
                    padding: '1.5rem',
                    borderRadius: '6px',
                    textAlign: 'start',
                }}
            >
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit(submitHandler)}
                    sx={{ mt: 1, color: '#D1094B' }}
                >
                    <TextField
                        inputProps={{
                            style: { backgroundColor: 'white' },
                        }}
                        margin="normal"
                        fullWidth
                        id="email"
                        required
                        placeholder="Email"
                        variant="filled"
                        autoFocus
                        {...register('email')}
                        autoComplete="email"
                    />
                    <Typography> {errors.email?.message} </Typography>
                    {/* <TextField
                        fullWidth
                        type="number"
                        inputProps={{ min: 4, max: 10 }}
                    />
                    <TextField
                        name="number"
                        label="Number"
                        fullWidth
                        InputProps={{
                            inputProps: {
                                type: 'number',
                                min: 1,
                                max: 5,
                            },
                        }}
                    /> */}
                    <TextField
                        inputProps={{
                            style: { backgroundColor: 'white' },
                        }}
                        margin="normal"
                        fullWidth
                        required
                        type="password"
                        id="password"
                        placeholder="password"
                        variant="filled"
                        {...register('password')}
                    />
                    <Typography> {errors.password?.message} </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                        }}
                    >
                        <FormControlLabel
                            sx={{ marginLeft: '0px', color: '#000' }}
                            control={<CustomCheckbox />}
                            label="Remember me"
                        />
                    </Box>

                    {isLoading ? (
                        <Stack alignItems="center">
                            <CircularProgress />
                        </Stack>
                    ) : (
                        <CustomButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mb: 2 }}
                        >
                            Sign In
                        </CustomButton>
                    )}

                    <Grid container>
                        <Grid item>
                            <CustomLink href="#" variant="body2">
                                {'I DON’T HAVE AN ACCOUNT ! CREATE ACCOUNT'}
                            </CustomLink>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Grid>
    )
}

export default SignIn
