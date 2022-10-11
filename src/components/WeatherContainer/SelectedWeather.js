import React from "react";

function SelectedWeather({ data, selectedCard }) {
	const cd = data[selectedCard];
	console.log(cd);
	return (
		<div className="flex-1 flex flex-row">
			<div>
				<img
					src={`https://www.weatherbit.io/static/img/icons/${cd.weather.icon}.png`}
					alt={`https://www.weatherbit.io/static/img/icons/${cd.weather.icon}.png`}
				/>
				<h1>{cd.weather.description}</h1>
			</div>
			<h1 className="text-5xl">{cd.temp} C</h1>
			<div>
				<h2>wind: {cd.wind_spd} kmph</h2>
				<h2>Precip: {cd.precip} mm</h2>
				<h2>Pressure: {cd.pres} mb</h2>
			</div>
		</div>
	);
}

export default SelectedWeather;
