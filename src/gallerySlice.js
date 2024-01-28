import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";



const fetchPhotos = async () => {
    const response = await fetch('https://picsum.photos/v2/list?page=2&limit=100')
    const formattedResponse = await response.json();
    return formattedResponse;
    
}

export const getPhotos = createAsyncThunk('photos/getPhotos', fetchPhotos)


export const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        photos: [],
        isLoading: false,
    },
    extraReducers: builder => {
        builder.addCase(getPhotos.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getPhotos.fulfilled, (state, action) => {
            state.isLoading = false
            state.photos = action.payload
        })
        builder.addCase(getPhotos.rejected, (state) => {
            state.isLoading = false
        })

    }
});

export default gallerySlice.reducer