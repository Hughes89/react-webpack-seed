# Simple React Webpack Seed

## Installation
If you don't have Node.js installed please visit [NodeJS.org](https://nodejs.org/en/)


## Usage
Fork and clone repo
`npm install`


## Running Development
* **Web Development Server**

 * `npm run dev-web`

>This will run the webpack development server with live reload. If you don't need an API server, you can simply just work with this.

* **API Development Server**

  * Open a second terminal tab *(Mac: cmd + t)*
  * Navigate back to the root the repo
  * `npm run dev-server`

>This will run the api server with nodemon on port 1337 (Allowing the server to auto refresh on save).


## Production Process
* **Building**
 * `npm run build`
 
>This will place the bundle.js file into the public folder.
>*Note: public/bundle.js is git ignored.*

* **Serving**
 * `npm start`
 
>Runs the server, serving index.html with bundle.js without the development enviroment.


## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
