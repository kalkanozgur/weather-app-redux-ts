import React from "react";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";

function SelectedWeather({ data, selectedCard }) {
	const cd = data[selectedCard];
	// console.log(cd);

	const date = new Date(cd.datetime).toLocaleDateString("tr-TR", {
		weekday: "long",
	});
	return (
		<div className="flex-1 flex flex-row items-center justify-center box-border">
			<div className="flex flex-col items-center">
				<h1 className="text-gray-500 -mb-6">{date}</h1>
				<h1 className="text-[5rem] bold">{cd.temp} °C</h1>
			</div>
			<div className="flex flex-col items-center px-5">
				<img
					loading="lazy"
					className="blur-[0.9px]"
					src={`https://www.weatherbit.io/static/img/icons/${cd.weather.icon}.png`}
					alt={`https://www.weatherbit.io/static/img/icons/${cd.weather.icon}.png`}
				/>
				<h1 className="-mt-5 text-sm">{cd.weather.description}</h1>
			</div>
			<div className="flex flex-col px-5">
				<div className="flex flex-row items-center justify-center">
					<FaTemperatureHigh size="1.7rem" />
					<h1 className="text-4xl">{cd.max_temp} °C</h1>
				</div>
				<div className="flex flex-row items-center justify-center">
					<FaTemperatureLow size="1.7rem" />
					<h1 className="text-4xl">{cd.min_temp} °C</h1>
				</div>
			</div>
			<div className="px-5">
				<h2>wind: {cd.wind_spd} kmph</h2>
				<h2>Precip: {cd.precip} mm</h2>
				<h2>Pressure: {cd.pres} mb</h2>
			</div>
		</div>
	);
}

export default SelectedWeather;
