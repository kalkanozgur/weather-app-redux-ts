import React from "react";

function WeatherForm({ cityName, setCityName, handleSubmit, isLoading }) {
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="cityName">Enter City Name</label>
				<input
					disabled={isLoading}
					type="text"
					name="cityName"
					id="cityName"
					value={cityName}
					onChange={(e) => setCityName(e.target.value)}
				/>
			</form>
		</div>
	);
}

export default WeatherForm;
