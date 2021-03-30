import React, { useState } from "react";
import bootstrap from "bootstrap";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import App from "../component/App";

//create your first component
export function Home() {
	const [theList, getList] = useState([]);

	const [userInput, setUserInput] = useState([""]);

	//cuando el usuario quita el dedo del botón
	const handleKeyUp = event => {
		if (event.keyCode == 13 && userInput != "") {
			getList(theList.concat(userInput));
			setUserInput("");
		}
	};
	//eliminar lista
	const itemDelete = index => {
		var updatedList = theList.filter(
			(task, taskIndex) => index != taskIndex
		);
		getList(updatedList);
	};

	return (
		<div className="container">
			<div className="header text-center">TODOs</div>
			<div className="d-flex mx-auto justify-content-center">
				<div className="card">
					<input
						className="todoInput py-2"
						// evento de la funcion
						onChange={event => setUserInput(event.target.value)}
						// event.target.value and value have no relation to each other.
						value={userInput}
						onKeyUp={handleKeyUp}

						// recuerde que el .map es para crear un nuevo arreglo.
						// Que  en la lista crea en el index un valor.
					/>
					<ul className="list-group list-group-flush">
						{theList.map((value, index) => {
							return (
								<li
									className="list-group-item mx-1 py-1"
									key={index}>
									{value}
									<button
										type="button"
										onClick={() => itemDelete(index)}
										className="btn float-right">
										{" "}
										X
									</button>
								</li>
							);
						})}
						<div className="footer text-left text-muted p-2 py-1">
							{theList.length === 0
								? "There are no tasks, start adding!"
								: theList.length + " items left."}
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
}
