import React, { ChangeEvent, useEffect, useState } from "react";
import { Coordinates, Mafs, Plot, Text, Theme } from "mafs";
import { SphereFunction } from "../ObjectiveFunction";
import Slider from "./Slider";

export default function Graph() {
	const [parameters, setParameters] = useState<number[]>([0, 0]);
	const objective_function = SphereFunction;

	function singleValueFunction(x: number) {
		const param = [x, ...parameters];
		return objective_function.function(param);
	}

	function handleParameterChange(
		event: ChangeEvent<HTMLInputElement>,
		dimension_index: number
	) {
		const newParams = parameters.map((e, i) => {
			if (i == dimension_index) {
				let rangeValue = Number(event.target.value) / 10;
				return rangeValue;
			}

			return e;
		});
		setParameters(newParams);
	}

	function renderSliders() {
		let sliders = [];

		for (let i = 0; i < objective_function.dimensions - 1; i++) {
			sliders.push(
				<Slider
					objective_function={objective_function}
					parameter={parameters[i]}
					index={i}
					onChange={handleParameterChange}
				/>
			);
		}

		return sliders;
	}

	return (
		<div>
			<div className="w-full">
				<Mafs height={300} zoom={true}>
					<Coordinates.Cartesian />
					<Plot.OfX y={singleValueFunction} color={Theme.blue} />
				</Mafs>
				<Mafs height={50} pan={false}>
					<Text x={0} y={0}>
						{objective_function.name}
					</Text>
				</Mafs>
			</div>
			<div>{renderSliders()}</div>
		</div>
	);
}
