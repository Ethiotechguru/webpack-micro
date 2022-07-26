import "../styles/app.css";
import React from 'react';
import Recipes from "./Recipes";
import Footer from "./Footer";
function App() {
    const style={
        listStyle:'none',
        display:'flex',
        alignItems:'center',
        backgroundColor:'#00000089',
        margin:'0',
        height:'100px'
        // padding:'40px 0 0 10px'
        
    }
    
   return (
		<>
			<div style={{ height: "85vh" }}>
				<div className="hero">
					<ul style={style}>
						<li className="listStyle">Home</li>
						<li className="listStyle">About</li>
						<li className="listStyle">Contact</li>
						<li className="listStyle">Project</li>
						<li className="listStyle">Mission</li>
					</ul>
					<div>
						<div className="info">
							<h2>OUR MISSION</h2>
							<p>
								Multiple separate builds should form a single
								application. These separate builds should not
								have dependencies between each other, so they
								can be developed and deployed individually.
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
			<Footer />
		</>
   );
}

export default App;