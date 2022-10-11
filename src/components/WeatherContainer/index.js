import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCityAsync, getWeatherAsync } from "../../context/weatherSlice";
import WeatherContent from "./WeatherContent";
import WeatherForm from "./WeatherForm";

function WeatherContainer() {
	const dispatch = useDispatch();
	const city = useSelector((state) => state.weather.city);
	const data = useSelector((state) => state.weather.data);
	const isCityLoading = useSelector((state) => state.weather.getCityisLoading);
	const isWeatherLoading = useSelector(
		(state) => state.weather.getWeatherisLoading
	);

	const [cityName, setCityName] = useState(city.name);

	useEffect(() => {
		dispatch(getWeatherAsync(city));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [city]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		dispatch(getCityAsync(cityName));
	};

	return (
		<div className="mt-24 box-border w-min-[350px] h-min-[300px] mx-auto flex flex-col items-center">
			{
				<WeatherForm
					cityName={cityName}
					setCityName={setCityName}
					handleSubmit={handleSubmit}
					isLoading={isCityLoading}
				/>
			}
			{!isWeatherLoading && (
				<WeatherContent
					isLoading={isWeatherLoading}
					city={city}
					weatherData={data}
				/>
			)}
		</div>
	);
}

export default WeatherContainer;
