[<div align="center"><img src="https://github.com/pontehu/respresso-react/blob/cra-react-intl/images/header_web.png" height="220" /></div>](https://respresso.io)  

# Respresso Web client [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Save%20development%20time%21%20Respresso%20automatically%20transforms%20and%20delivers%20your%20digital%20assets%20into%20your%20projects&url=https://respresso.io&via=respresso_io&hashtags=developer,tool,localization,image,resources,digital-assets,convert,automation)  

[Respresso](https://respresso.io) is a centralized resource manager for shared [Android](https://github.com/pontehu/respresso-client-android), [iOS](https://github.com/pontehu/respresso-client-ios) and [Web frontend](https://github.com/pontehu/respresso-sync-for-clients#web) projects.
It allows you to simply import the latest assets into your workspace.
You may store several versions of the same resource in the cloud and pick the ones you need to import.
Respresso currently supports five types of resources:
* Images
* Localization
* Fonts
* Colors
* Raw  


# Usage

Using Respresso should be intuitive to anyone who has used npm before.
Configurations are stored in the *respresso.json*, while your current assets’ metadata are stored in *respresso.lock*.

⚠️ You'll need java installed on your machine.

## Configuration

In *respresso.json* you can customize:
- projectToken: received during initialization of your project in the Respresso web interface
- targetDirectory: it should be under src as CRA does not import from elsewhere
- resources: only import what you need and you can change the version number, too

The currently accepted resource names are:
* image
* color
* localization
* font
* raw
        
Accepted version formats are:
* [major].[minor].[patch]         eg. 1.2.0
* [major].[minor].[patch]+         eg. 1.2.0+ (not available in strict mode)
* [major].[minor]+                eg. 1.2+ (not available in strict mode)

## Include resources into your web application

To start using Respresso in your app takes almost zero time and effort. 

1. Add to your dev devendencies:   
```
npm install respresso --dev
```
2. Add a sync script into your *package.json*:
```
"scripts": {
	"sync": "respresso sync",
        ...
        }
```
3. After configuring your Respresso project, just issue ```npm run sync``` and you can start using the resources.


# Respresso React demo.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Try it

1. Install any packages that it depends on   
```npm install```
2. Sync resource files   
```npm run sync```
3. Start running the server  
```npm start```

## Available Scripts

In the project directory, you can run:

### `npm run sync`

Synchronizes data from Respresso server to *src/respresso*.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
