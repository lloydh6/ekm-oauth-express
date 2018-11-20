# ekm-oauth-express

This project was created to demonstrate how to implement the OAuth flow for the [ekm.com](https://www.ekm.com) API. This is a bare bones project and will work out of the box but it is advised that it is extended before using as a production nodejs application.

This project is perfect to use as a localhost website as it is a lightweight service that will get a development environment up and running with the correct OAuth flow needed for authentication against the ekm.com API.

No authentication layer is built into this project. This was to keep the example simple as the purpose of this project was to demonstrate the OAuth flow alone.




# Usage
To start using this nodejs application it is assumed that <a href="https://nodejs.org">node</a> `>= 11.0.0` is installed on the development machine. <a href="https://yarnpkg.com">Yarn</a> is also required to resolve the dependencies that come with this application.

### Installation
Download the project and in the command line `cd` into the projects top level directory.

Resolve the projects dependencies by running the following command.

`yarn install`

Run the application by entering the following command.

`node app.js`

The nodejs server will then start and the website will be running on `http://localhost:3000`, you can test this by navigating to the url mentioned prior in a browser and the page will indicate that it is running.

### Configuration
In the root of the application there is a `config.json` file that can be altered to change the settings of the application. Two of the properties will need to be changed before the application can start creating authentication tokens.

##### config.json
```
{
    "clientKey": "ENTER_CLIENT_KEY_HERE",
    "clientSecret": "ENTER_CLIENT_SECRET_HERE",
    "redirectUri": "http://localhost:3000/oauth",
    "ekmOauthApiUri": "https://api.ekm.net/connect/token",
    "databasePath": "./src/data-access/database.sqlite",
    "enableLogs": false
}
```

###### clientKey 
The `clientKey` property should be the same as your __Client Key__ that has been created in the [EKM partners directory](https://partners.ekm.net) and can be found under the tokens view for the app that needs authenticating.

###### clientSecret 
The `clientSecret` property should be the same as your __Client Secret__ that has been created in the  [EKM partners directory](https://partners.ekm.net) and can be found under the tokens view for the app that needs authenticating.

###### redirectUri 
The `redirectUri` property should be the same as your __Return URL__ that has been configured in the application settings view for the app that needs authenticating. To get the OAuth flow working, you will need to update the settings in the [EKM partners directory](https://partners.ekm.net) and edit the applications __Return URL__ to be `http://localhost:3000/oauth`.

###### ekmOauthApiUri
The `ekmOauthApiUri` property is used to configure the EKM API endpoint. Should the EKM API ever move it's location, this would be the property to change.

###### databasePath
The `databasePath` property is the path of the database the application will write to.

###### enableLogs 
The `enableLogs` property is used to enable logging in the application. Basic request logging is baked into this application and when turned on will log to the sqlite database that comes with the project.





