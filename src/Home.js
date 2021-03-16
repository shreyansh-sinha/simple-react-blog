import React from 'react';
import {Link} from 'react-router-dom';
import {Fragment} from 'react';
import "./Home.css";
const Home = () => {
	return (
			<Fragment>
				<div className = "Home-Title-Wrapper">
					<h1 className = "Home-Title"> Blog Creater </h1>
					
					<nav className = "Main-Nav">
						<Link to = "/new" className = "btn1">
							New Post
						</Link>

						<Link to = "/posts" className = "btn1"> VIEW POSTS </Link>
					</nav>
				</div>
			</Fragment>	
		)
} 

export default Home;