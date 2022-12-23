import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { TokenClass } from 'typescript'
import { string } from 'yup'
import { baseUrl } from '../api/config'
import { RootState } from '../store/index'

type User = {
    id: string
    name: string
    email: string
}

interface SignupRes {
    token: string
    user: User
}
type LoginRes = SignupRes

type Nullable<T> = T | null

interface State {
    token: Nullable<string>
    user: Nullable<User>
    loading: boolean
}

const initialState: State = {
    token: null,
    user: null,
    loading: false,
}

interface SignupThunkParams {
    email: string
    password: string
    name: string
}

export const signupThunk = createAsyncThunk<
    {
        user: User
        token: string
    },
    SignupThunkParams,
    {
        rejectValue: { msg: string }
    }
>('auth/signup', async ({ email, password, name }, thunkApi) => {
    try {
        const {
            data: { token, user },
        } = await axios.post<SignupRes>(`${baseUrl}/signup`, {
            email,
            password,
            name,
        })

        console.log({
            token,
            user,
        })
        return {
            token,
            user: {
                name: user.name,
                email: user.email,
                id: user.id,
            },
        }
    } catch (e: any) {
        // const msg = e.response.data.msg
        console.log('Catch: ', e)
        if (e?.response?.data?.msg) {
            return thunkApi.rejectWithValue({
                msg: e.response.data.msg,
            })
        } else {
            return thunkApi.rejectWithValue({
                msg: 'Something went wrong',
            })
        }
    }
})

export const loginThunk = createAsyncThunk<
    {
        token: string
        user: User
    },
    {
        email: string
        password: string
    },
    {
        rejectValue: {
            msg: string
        }
    }
>('auth/login', async ({ email, password }, thunkApi) => {
    try {
        const {
            data: { token, user },
        } = await axios.post<LoginRes>(`${baseUrl}/login`, {
            email,
            password,
        })

        console.log({
            token,
            user,
        })
        sessionStorage.setItem('e-commerce-token', String(token))
        return {
            token,
            user,
        }
    } catch (e: any) {
        console.log('Error: ', e)
        if (e?.response?.data?.msg) {
            return thunkApi.rejectWithValue({
                msg: e.response.data.msg,
            })
        } else {
            return thunkApi.rejectWithValue({
                msg: 'something went wrong',
            })
        }
    }
})

// Category Thunk
interface ICategoray {
    id: string
    title: string
}
export const categoryThunk = createAsyncThunk<
    { formatedData: any },
    { token: string },
    {
        rejectValue: {
            msg: string
        }
    }
>('auth/category', async ({ token }, thunkApi) => {
    try {
        const accessToken = sessionStorage.getItem('e-commerce-token')
        // console.log('category thunk token: ', accessToken)
        const data = await axios.get(`${baseUrl}/category`, {
            headers: { Authorization: String(accessToken) },
        })
        console.log('data: ', data.data)
        // const options = {
        //     method: 'GET',
        //     url: `${baseUrl}/category`,
        //     headers: {
        //         Authorization: String(accessToken),
        //     },
        // }
        // axios.request(options).then(function (response) {
        //     console.log('Response data: ', response.data)
        // })
        const formatedData = data.data.map(({ id, title }: ICategoray) => {
            return { id, title }
        })
        return {
            formatedData,
        }
    } catch (e: any) {
        console.log(e)
        if (e?.response?.data?.msg) {
            return thunkApi.rejectWithValue({
                msg: e.response.data.msg,
            })
        } else {
            return thunkApi.rejectWithValue({
                msg: 'something went wrong',
            })
        }
    }
})

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signupThunk.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(signupThunk.fulfilled, (state, action) => {
            const { token, user } = action.payload
            state.loading = false
            state.token = token
            state.user = user
        })
        builder.addCase(signupThunk.rejected, (state, action) => {
            state.loading = false
        })

        builder.addCase(loginThunk.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            const { token, user } = action.payload
            state.user = user
            state.token = token
            state.loading = false
        })
        builder.addCase(loginThunk.rejected, (state, action) => {
            state.loading = false
        })
        builder.addCase(categoryThunk.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(categoryThunk.fulfilled, (state, action) => {
            state.loading = false
        })
        builder.addCase(categoryThunk.rejected, (state, action) => {
            state.loading = false
        })
    },
})
export const selectCurrentToken = (state: RootState) => state.auth.token
export default slice.reducer
