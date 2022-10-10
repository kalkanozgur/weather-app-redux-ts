import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getWeatherAsync = createAsyncThunk(
	"weather/getWeatherAsync",
	async () => {}
);

const initialState = {
	city: "Antalya",
	data: {},
};
const weatherSlice = createSlice({
	name: "weather",
	initialState,
	reducers: {},
	extraReducers: {
		// [getWeatherAsync.pending]: () => {},
		// [getWeatherAsync.fulfilled]: () => {},
		// [getWeatherAsync.rejected]: () => {},
	},
});

export default weatherSlice.reducer;
