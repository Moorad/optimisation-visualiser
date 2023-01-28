import React from "react";

export default function NavBar() {
	return (
		<div className="navbar bg-gray-900 text-base-100">
			<div className="">
				<a className="btn btn-ghost normal-case text-xl">Optimisation visualiser</a>
			</div>
			<div className="flex gap-5">
				<select className="select select-bordered text-black w-60">
					<option disabled selected>Pick an objective function</option>
					<option>Sphere function</option>
				</select>

				<select className="select select-bordered text-black w-52">
					<option disabled selected>Pick an algorithm</option>
					<option>Random search</option>
				</select>

			</div>
		</div>
	);
}
