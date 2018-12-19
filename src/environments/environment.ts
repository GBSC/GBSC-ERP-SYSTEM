// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    api_url: 'http://gbsc-erp.azurewebsites.net/',
    repotr_url: 'http://gbsc-erp.azurewebsites.net/report/',
    firebase: {
        apiKey: 'AIzaSyD6eADZofvvncbTswItjCrD6rDSQJkJALI',
        authDomain: 'trackingsystemdemo.firebaseapp.com',
        databaseURL: 'https://trackingsystemdemo.firebaseio.com',
        projectId: 'trackingsystemdemo',
        storageBucket: 'trackingsystemdemo.appspot.com',
        messagingSenderId: '58044608671'
    }
    //api_url: ''
};
