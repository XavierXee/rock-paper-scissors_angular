#Rock Paper Scissor

	### requires at least Nodejs v7.9.0 and npm v4.2.0

## Build and Run instructions

	1 - Get at the app root directory

		cd app/

	2 - Install dependencies 

		npm install

	3 - Compile and build application with grunt

		npm run grunt

	4 - Start app

		npm run start

		--> client is already built so there is no need to compile it
		--> access app at localhost:8080

	(5) - Optionaly you can rebuild the client part using the following commands :

		cd app/client/
		ng build

		then rerun step 3 and step 4


## Stack description

	Grunt main task 
		- compile .ts files for server side into dist/ folder
		- copy views/ folder into dist directory
		- copy the distributed code of the client part into dist/public/

	Server side of the application is made with express framework.
	I set up a basic bootstrapper that handles the express server configuration. 
	Then I built several classes for handling the game manager and the server routes in express.

		Source files : 

			app/src/

				server.ts

			app/src/core

				game_manager.ts
			
			app/src/routes

				router.ts
				index.ts  // render the index page
				game.ts   // GET request to play a game remotely

			app/src/interfaces

				i_weapon.ts

			app/views

				index.pug

	Client side is build on AngularJS 4.
	The interface is made with 3 components, one for the game logic, an other one for changing options and a last one which is the container component.
	The container component carries the history of all the played games.

		Source files : 

			app/client/src/app

				i_weapon.ts
				i_options.ts

				app.component.ts
				app.component.html
				app.component.css

				game.component.ts
				game.component.html
				game.component.css
				
				options.component.ts
				options.component.html
				options.component.css

				app.module.ts
