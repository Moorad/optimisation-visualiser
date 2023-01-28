import React, { ChangeEvent } from "react";
import { ObjectiveFunction } from "../ObjectiveFunction";

export default function Slider(props: {
	objective_function: ObjectiveFunction;
	parameter: number;
	index: number;
	onChange: (
		event: ChangeEvent<HTMLInputElement>,
		dimension_index: number
	) => void;
}) {
	return (
		<div className="font-semibold">
			<label className="label">
				<span className="label-text">
					x<sub>{props.index + 1}</sub>
				</span>
				<span className="label-text-alt">{props.parameter}</span>
			</label>

			<input
				type="range"
				min={
					props.objective_function.bounds.lower[props.index + 1] * 10
				}
				max={
					props.objective_function.bounds.upper[props.index + 1] * 10
				}
				defaultValue={
					(props.objective_function.bounds.lower[props.index + 1] +
						props.objective_function.bounds.lower[
						props.index + 1
						]) /
					2
				}
				onChange={(evt) => props.onChange(evt, props.index)}
				className="range range-sm"
			/>
		</div>
	);
}
