const { defineConfig } = require("cypress");
const mysql = require ("mysql")
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
module.exports = defineConfig({
  projectId: '8h51ew',
	e2e: {
		async setupNodeEvents(on, config) {
			const bundler = createBundler({
				plugins: [createEsbuildPlugin(config)],
			});
			//DataBase
			on("task",{
				queryDb: (query)=>{
				  return queryTestDb(query,config)
				},
			  });

			on("file:preprocessor", bundler);
			await addCucumberPreprocessorPlugin(on, config);
			return config;
		},	
		
		specPattern: "cypress/src/features/*.feature",
		baseUrl:"https://automationexercise.com/",
		fixturesFolder:"cypress/src/fixtures"
	},
	"env": {
		"db": {
		  "server": 'Mysql@localhost:3306',
		  user: "root",
		  password: "ramans@1916J",
		  database: "Testing"
		}
	  }
});

function queryTestDb(query, config) {
	// creates a new mysql connection using credentials from cypress.json
	const connection = mysql.createConnection(config.env.db);
	// start connection to db
	connection.connect();
	// exec query + disconnect to db as a promise
	return new Promise((resolve, reject) => {
	  connection.query(query, (error, results) => {
		if (error) reject(error);
		else {
		  connection.end();
		  // console log results
		  return resolve(results);
		}
	  });
	});
  }