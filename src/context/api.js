import axios from "axios";

const weather_url = `https://api.weatherbit.io/v2.0/forecast/daily`;
const geocoding_url = `https://api.api-ninjas.com/v1/geocoding`; //?city=London&country=England

export const fetchWeatherApi = async ({ latitude, longitude }) => {
	const res = await axios(
		`${weather_url}?&lang=TR&days=7&lat=${latitude}&lon=${longitude}&days=7&key=${process.env.REACT_APP_WEATHER_API_KEY}`
	);
	// console.log(res.data);
	return res.data;
};

export const fetchCityApi = async (cityName) => {
	const res = await axios(`${geocoding_url}?city=${cityName}`, {
		headers: { "X-Api-Key": process.env.REACT_APP_APININJAS_API_KEY },
	});
	// console.log(res.data);
	return res.data[0];
};
