import React, { useState } from "react";
import SelectedWeather from "./SelectedWeather";
import WeatherCard from "./WeatherCard";

function WeatherContent({ weatherData, city }) {
	const [selectedCard, setSelectedCard] = useState(0);
	// const handleCardClick = ;
	const { data } = weatherData;
	return (
		<div className="border-[16px] flex flex-col justify-between items-center p-3 box-border border-blue-300/[.31] bg-gradient-to-tr from-blue-300 to-cyan-500 relative rounded-2xl ">
			<h1 className="flex-3 text-gray-700 font-bold">
				{city.name} {city.country}
			</h1>
			<SelectedWeather data={data} selectedCard={selectedCard} />
			<div className="flex flex-row flex-3">
				{data.map((daily, index) => (
					<WeatherCard
						daily={daily}
						key={index}
						i={index}
						selectedCard={selectedCard}
						handleCardClick={(e) => {
							setSelectedCard(e);
						}}
					/>
				))}
			</div>
		</div>
	);
}

export default WeatherContent;
