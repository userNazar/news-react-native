import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IPost } from "../../types";
import axios from "axios";



interface initialStateProps {
    list: IPost[],
    loading: boolean;
    error: string | undefined;
}


const initialState: initialStateProps = {
    list: [],
    loading: false,
    error: undefined,
}


export const fetchPosts = createAsyncThunk<IPost[]>(
    'async/posts',
    async () => {
        try {
            const response = await axios.get('https://64b402170efb99d86268a6b4.mockapi.io/posts');
            return response.data;
        } catch (error) {
            return [error]
        }
    }
)


const postsSlicer = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = false
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.error = 'error';
            })
    }

});




export default postsSlicer.reducer;