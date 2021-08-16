//codes in this project not refactored for educational purposes

import React, { useContext } from 'react';
import { myContext } from '../../Context';
import { IUser } from '../../types/maintypes';

export default function Homepage() {
	const userObject = useContext(myContext) as IUser;
	return (
		<div>
			{userObject ? (
				<div>
					<h1>Welcome back, {userObject.username}! </h1>
					<h2>Thank you for demoing my website! Check out my portfolio to see more examples of my skills!</h2>
				</div>
			) : (
				<div>
					<h1>Welcome to my demo full-stack website for handling OAuth user logins!</h1>
					<h2>Try logging in using google/twitter/github!</h2>
					<h3>
						Note: all back end authentication is done through google/twitter/github - no sensitive
						information is accessed or stored on this site.
					</h3>
					<p>
						Coded with ❤ by Tue Tran using MongoDB, Express, React, Node.js, Passport.js, Typescript and the
						google/twitter/github APIs. Project hosted on Netlify and Heroku. Try on mobile & desktop!
					</p>
				</div>
			)}
		</div>
	);
}
