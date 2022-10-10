import axios from "axios";

const weather_url = `https://api.weatherbit.io/v2.0/forecast/daily`;
const geocoding_url = `https://api.api-ninjas.com/v1/geocoding`; //?city=London&country=England

export const fetchWeatherApi = async (lat, lon) => {
	const res = await axios(
		`${weather_url}?days=7&lat=${lat}&lon=${lon}&days=7&key=${process.env.REACT_APP_WEATHER_API_KEY}`
	);
	return res.data;
};

export const fetchCityApi = async (city) => {
	console.log({ "X-Api-Key": process.env.REACT_APP_APININJAS_API_KEY });
	const res = await axios(`${geocoding_url}?city=${city}`, {
		headers: { "X-Api-Key": process.env.REACT_APP_APININJAS_API_KEY },
	});
	return res.data;
};
