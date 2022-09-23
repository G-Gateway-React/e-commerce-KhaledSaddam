import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import '../App.css'
import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import apiRequest from '../components/apiRequest'
import { API_URL } from '../components/apiRequest'
import { FormControlLabel } from '@mui/material'
import { useAppDispatch } from '../store'
import toast from 'react-hot-toast'
import { signupThunk } from '../store/auth'

import {
    CustomButton,
    CustomCheckbox,
    CustomLink,
} from '../styles/custom-mui-theme/CustomComponents'
import { passwordValidation } from '../utils/validation'
const theme = createTheme()
interface IFormInputs {
    name: string
    email: string
    password: string
    passwordConfirm: string
}

export interface IUserInfo {
    id: number
    name: string
    email: string
    password: string
}

const SignUp: React.FC = (): JSX.Element => {
    const [users, setUsers] = useState<IUserInfo[]>([])
    const [msg, setMsg] = useState<string | null>(null)
    const dispatch = useAppDispatch()
    const formSchema = Yup.object().shape({
        name: Yup.string()
            .required('First Name is required')
            .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed')
            .max(40, 'At most Forty letters')
            .min(2, 'At least tow letters'),
        email: Yup.string()
            .email('Must be a valid email')
            .max(100)
            .required('Email is required'),
        password: Yup.string().matches(
            passwordValidation.exp,
            passwordValidation.msg
        ),
        passwordConfirm: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match'),
    })
    const validationOpt = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, formState } =
        useForm<IFormInputs>(validationOpt)
    const onSubmit: SubmitHandler<IFormInputs> = async (
        values: IFormInputs
    ) => {
        // handleAddItem(data);
        const { name, password, email } = values
        const result = await dispatch(
            signupThunk({
                name,
                email,
                password,
            })
        )
        if (signupThunk.rejected.match(result)) {
            if (result.payload?.msg) {
                toast.error(result.payload.msg)
                setMsg(result.payload.msg)
            }
        }
        if (signupThunk.fulfilled.match(result)) {
            toast.success('Signup success')
        }
        return console.log(values)
    }
    const { errors } = formState

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        border: '1px solid #000',
                        padding: '1.5rem',
                        borderRadius: '6px',
                        textAlign: 'start',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        CREATE ACCOUNT
                    </Typography>
                    {formState.isValid && (
                        <Box sx={{ color: '#1976d2', textAlign: 'left' }}>
                            <Typography component="h3" variant="h5">
                                All Fields have been passed
                            </Typography>
                        </Box>
                    )}
                    {msg && (
                        <Typography
                            textAlign={'left'}
                            component="h3"
                            variant="h5"
                        >
                            {msg}
                        </Typography>
                    )}
                    <Box
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                        sx={{ mt: 2 }}
                    >
                        <Grid
                            sx={{ color: '#D1094B' }}
                            alignItems="flex-start"
                            container
                            spacing={2}
                        >
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    inputProps={{
                                        style: { backgroundColor: 'white' },
                                    }}
                                    id="name"
                                    placeholder="User Name"
                                    variant="filled"
                                    autoFocus
                                    {...register('name')}
                                />
                                <Typography>{errors.name?.message} </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    inputProps={{
                                        style: { backgroundColor: 'white' },
                                    }}
                                    id="email"
                                    placeholder="Email"
                                    variant="filled"
                                    {...register('email')}
                                    autoComplete="email"
                                />
                                <Typography>{errors.email?.message}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    inputProps={{
                                        style: { backgroundColor: 'white' },
                                    }}
                                    placeholder="Password"
                                    variant="filled"
                                    type="password"
                                    id="password"
                                    {...register('password')}
                                />
                                <Typography>
                                    {' '}
                                    {errors.password?.message}{' '}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    inputProps={{
                                        style: { backgroundColor: 'white' },
                                    }}
                                    placeholder="Confirm Password"
                                    variant="filled"
                                    id="passwordConfirm"
                                    type="password"
                                    {...register('passwordConfirm')}
                                />
                                <Typography>
                                    {errors.passwordConfirm?.message}
                                </Typography>
                            </Grid>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                }}
                            >
                                <FormControlLabel
                                    sx={{
                                        marginLeft: '0px',
                                        marginTop: '1rem',
                                        color: 'black !important',
                                    }}
                                    control={
                                        <CustomCheckbox
                                            sx={{ marginTop: '-1.3rem' }}
                                            value="remember"
                                            color="primary"
                                        />
                                    }
                                    label="Let's get personal! We'll send you only the good stuff: Exclusive early access to Sale, new arrivals and promotions. No nasties."
                                />
                            </Box>
                        </Grid>
                        <CustomButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            REGISTER NOW
                        </CustomButton>
                    </Box>
                    <Grid item>
                        <CustomLink href="#" variant="body2">
                            {'I HAVE AN ACCOUNTs'}
                        </CustomLink>
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default SignUp
