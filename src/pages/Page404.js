import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/page404.css'

const Page404 = () => (
  <div id="notfound">
		<div className="notfound">
			<div className="notfound-404">
				<h1>Oops!</h1>
				<h2>404 - La page n'a pas été trouvée</h2>
			</div>
			<Link to='/'>revenir à l'accueil</Link>
		</div>
	</div>
)



export default Page404;
