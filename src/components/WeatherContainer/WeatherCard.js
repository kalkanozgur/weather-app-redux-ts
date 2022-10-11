import React from "react";

function WeatherCard({ daily, handleCardClick, selectedCard, i }) {
	// console.log(selectedCard);
	const date = new Date(daily.datetime).toLocaleDateString("tr-TR", {
		weekday: "long",
	});
	console.log(selectedCard === i);
	return (
		<div
			className={`flex flex-col items-center justify-center p-2 m-2 bg-opacity-30 border-gray-700 bg-blue-500 rounded-xl ${
				selectedCard === i ? "border-2" : "border-none"
			}`}
			onClick={() => handleCardClick(i)}
		>
			<h1 className="text-gray-700 tex-sm mt-1">{date}</h1>
			<img
				loading="lazy"
				className="blur-[0.9px]"
				src={`https://www.weatherbit.io/static/img/icons/${daily.weather.icon}.png`}
				alt={`https://www.weatherbit.io/static/img/icons/${daily.weather.icon}.png`}
			/>
			<h1 className="text-gray-700 -mt-5">{daily.temp} °C</h1>
		</div>
	);
}

export default WeatherCard;
