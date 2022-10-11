import React from "react";

function WeatherCard({ daily, handleCardClick, selectedCard, i }) {
	console.log(selectedCard);
	return (
		<div
			className="flex flex-col items-center"
			onClick={() => handleCardClick(i)}
		>
			{"day"}
			<img
				src={`https://www.weatherbit.io/static/img/icons/${daily.weather.icon}.png`}
				alt={`https://www.weatherbit.io/static/img/icons/${daily.weather.icon}.png`}
			/>
			{daily.temp}
		</div>
	);
}

export default WeatherCard;
