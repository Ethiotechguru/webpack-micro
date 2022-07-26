import "../styles/app.css";
import React from 'react';
import Recipes from "./Recipes";
function App() {
   return (
		<div>
			<div className="hero">
				<div>
					<div className="info">
						<h2>OUR MISSION</h2>
						<p>
							Multiple separate builds should form a single
							application. These separate builds should not have
							dependencies between each other, so they can be
							developed and deployed individually.
						</p>
						<button>Get More Info</button>
					</div>
				</div>
			</div>
			<div className="main">
				<h1>Switch Users</h1>
				<Recipes />
			</div>
		</div>
   );
}

export default App;