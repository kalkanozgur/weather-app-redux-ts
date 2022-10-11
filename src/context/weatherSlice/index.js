import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCityApi, fetchWeatherApi } from "./../api";

export const getWeatherAsync = createAsyncThunk(
	"weather/getWeatherAsync",
	async (props) => {
		return await fetchWeatherApi(props);
	}
);
export const getCityAsync = createAsyncThunk(
	"weather/getCityAsync",
	async (cityName) => {
		return await fetchCityApi(cityName);
	}
);

const initialState = {
	city: {
		name: "Antalya",
		latitude: 36.8872942,
		longitude: 30.7074549,
		country: "TR",
	},
	data: {},
	error: null,
	getWeatherisLoading: true,
	getCityisLoading: true,
};
const weatherSlice = createSlice({
	name: "weather",
	initialState,
	reducers: {},
	extraReducers: {
		[getWeatherAsync.pending]: (state) => {
			state.getWeatherisLoading = true;
		},
		[getWeatherAsync.fulfilled]: (state, action) => {
			state.getWeatherisLoading = false;
			state.data = action.payload;
		},
		[getWeatherAsync.rejected]: (state) => {
			state.getWeatherisLoading = true;
		},
		[getCityAsync.pending]: (state) => {
			state.getCityisLoading = true;
		},
		[getCityAsync.fulfilled]: (state, action) => {
			state.city = action.payload;
			state.getCityisLoading = false;
		},
		[getCityAsync.rejected]: (state) => {
			state.getCityisLoading = true;
		},
	},
});

export default weatherSlice.reducer;
