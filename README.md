# Patrones Hermosos Front-End

Logistics management web application for the Beautiful Patterns summer camp.

## Table of contents

* [Client Details](#client-details)
* [Environment URLS](#environment-urls)
* [Da Team](#team)
* [Management resources](#management-resources)
* [What you will need](#what-you-will-need)
* [Setup the project](#setup-the-project)
* [Stop the project](#stop-the-project)

### Client Details 

| Name               | Email             | Role |
| ------------------ | ----------------- | ---- |
| Silvia Iliana Ramirez Ramirez | iliana.ramirez [csoftmty.org] | Client |


### Environment URLS

* **Production - NGINX** - [localhost:3000](https://localhost:3000)
* **Production - Surge** - [patroneshermosos.surge.sh](http://patroneshermosos.surge.sh)
* **Development** - [localhost:80](https://localhost:80)

### Da team

| Name           | Email             | Role        |
| -------------- | ----------------- | ----------- |
| Katie Arriaga | katiearriaga [live.com] | Development, Product Owner |
| Oscar Gonzalez | osdagoso [hotmail.com] | Development, Scrum Master |
| Melissa Treviño | mely.trevic [gmail.com] | Development, Configuration Manager |
| Rubén de la Peña | ruben.dlpena [gmail.com] | Development, Project Manager |


### Management resources

You should ask for access to this tools if you don't have it already:

* [Github repo](https://github.com/ProyectoIntegrador2018/patrones_hermosos_frontend)
* [Backlog](https://github.com/ProyectoIntegrador2018/patrones_hermosos/projects/1)
* [Documentation](https://drive.google.com/open?id=1d96uJnjeu13aSVAOIVgP4_Rpif_TdYBF)

## Development

### What you will need

#### Development
* [NodeJS - v10.5.1 or above](https://nodejs.org/en/)
* [React library](https://semantic-ui.com/)
* [Semantic UI CSS framework](https://semantic-ui.com/)
* [Sass](https://facebook.github.io/create-react-app/docs/adding-a-sass-stylesheet)

#### Deployment
* [NGINX](https://nginx.org/)
* [Surge](https://surge.sh/)

#### Miscellaneous
* [Nucleus](https://holidaypirates.github.io/nucleus/getting-started.html): Styleguide generator
* [Gulp](https://www.npmjs.com/package/gulp-download): To run scripts that will automatically run in the background while you make local changes.

### Setup the project

After installing please you can follow this simple steps:

Clone this repository into your local machine

```bash
$ git clone git@github.com:ProyectoIntegrador2018/patrones_hermosos_frontend.git
```

#### Running changes locally

To run your changes locally, if you have [`the latest version of Node and npm`](https://nodejs.org/en/download/), you can simply run the following command.

```bash
$ npm start
```
Your changes will show up in localhost:3000. 

#### Deploying application to production using NGINX

1. You will definitely want to install [`nginx`](https://nginx.org/en/download.html). This is the web server that we use to test front-end changes in prod. We are working with version 1.14.2, as it is the currently stable version.

2. You will need to create a production build of the project everytime you are ready to deploy your changes. To do this, run:

```bash
$ npm run build
```
3. Once your build shows no errors, you're ready to run the nginx server. 

4. [One-time-step] Set up your nginx configuration. You can modify the nginx.conf inside the conf\ folder to make it point the build\ directory in your the application OR you can create a symlink that points to your build\ directory, and it should work fine.

5. Run your NGINX server with the following command to see your deployed application.

```bash
$ start nginx
```

### Stop the project
Whether you are running the development or production version, you can stop the server by using:

```bash
$ Ctrl + C
```
