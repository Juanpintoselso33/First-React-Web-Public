import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="d-flex flex-column min-vh-100">
			<Navbar />
			{/* Otros elementos y componentes que desees incluir en Home */}
			<div className="container flex-grow-1">
				<Jumbotron />
				<div className="container">
					<div className="row">
						<div className="col-sm">
							<Card />
						</div>
						<div className="col-sm">
							<Card />
						</div>
						<div className="col-sm">
							<Card />
						</div>
						<div className="col-sm">
							<Card />
						</div>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;