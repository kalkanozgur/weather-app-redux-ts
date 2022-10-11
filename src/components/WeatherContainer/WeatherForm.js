import React from "react";

function WeatherForm({ cityName, setCityName, handleSubmit, isLoading }) {
	return (
		<form onSubmit={handleSubmit} className="flex flex-col w-1/3">
			<label className="pl-2 text-gray-700" htmlFor="cityName">
				Enter City Name
			</label>
			<input
				className="p-2 mb-2 rounded-xl pl-5 outline-none bg-[#92C4FC]"
				disabled={isLoading}
				type="text"
				name="cityName"
				id="cityName"
				value={cityName}
				onChange={(e) => setCityName(e.target.value)}
			/>
		</form>
	);
}

export default WeatherForm;
