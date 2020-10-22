# Ecosoap 

[![Maintainability](https://api.codeclimate.com/v1/badges/5e37932c610a83213715/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/labs-spa-starter/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/5e37932c610a83213715/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/labs-spa-starter/test_coverage)

Dashboard for buyer and admin, checkout functionalities.

You can find the deployed site at: 
Buyer portal: https://27c.ecosoap.dev/
Admin portal: https://27c.ecosoap.dev/admin

A video walkthrough of our app is available here: https://drive.google.com/file/d/1dpYnVKaaeAq3YoGisHMZu8kT31qOWAgf/view

## Requirements

- [Labs Engineering Standard requirements found here](https://labs.lambdaschool.com/topics/node-js/)

## Getting Started

### Enviornment variables

- `REACT_APP_CLIENT_ID` Okta client id
- `REACT_APP_OKTA_ISSUER_URI` Okta api authorization server issuer uri (eg. `https://name-438r8hr.okta.com/oauth2/default`)

- Fork and clone the repo to install it as your own remote.
  - **note** please [be sure to set your remote](https://help.github.jp/enterprise/2.11/user/articles/changing-a-remote-s-url/) for this repo to your to point to your Labs Team Front End Repository.
- run: `npm install` to download all dependencies.
- run: `npm start` to start your local development server.

## Deploying Your App

- We recommend you deploy this project using [AWS amplify](https://aws.amazon.com/amplify/). You can find a step-by-step deployment guide [here](./DEPLOYMENT_GUIDE.md).

## Components

- We feel that you shouldn't have to spend time as a developer worrying about where your files should go and your architectural decisions that you'd have to make if you started from scratch.
- Following the patterns we've laid out for your and the definitions of 'components' will help you focus on getting work done, rather than spending time deliberating on 'how' your work will get done.
- Please see [the following documentation](./src/components/README.md) on how to work with and structure your components in this app.

## Styling Your App

- In order to provide an experience for you to dive right into a code base and have everything you need to successfully style and craft your UI Components we'd like for you to gain some practice using the [`ANT Design Library`](https://ant.design/).

- Instructions on how to use components.

## Data Visualization - Working with Hybrid Teams

- We have provided and example of a simple Plot Charting component that can be built, configured, and delivered for your use by the Data Science Team.
- We strongly urge you to work in constant collaboration with the data scientists in order to pull in their work into your application, ensure that their work matches the theme and style of your team's application, and that the data you pull in represents what problem that team was trying to solve. **This will be a process that requires work and dedication and give-and-take.**
- **Example Components**: [Please see here for an example](./src/components/pages/ExampleDataViz/README.md) of how to work w/ `Plotly.js` and `React-Plotly.js`.

## Testing your App.

- In accordance with our [Labs Engineering Standards](https://labs.lambdaschool.com/) this app uses common practices for Unit/Integration Testing using:
  [React Testing Library](https://github.com/testing-library/react-testing-library)
  [Jest](https://jestjs.io/)
- For examples on how to test your application and more information please see [the following documentation](./src/__tests__/README.md).

## Contributing

- As this repository is a Work In Progress (WIP) we'd love to hear more about what is working for you and what could be improved. [Please use the `Issues` tab in Github](https://github.com/Lambda-School-Labs/labs-spa-starter/issues) to submit and file any issues that come up during your development cycle. Issues should be related to things like, documentation, bugs that come up with the existing flow, architectural discussion, suggestions for improvements, and anything that you find cumbersome about getting started and working through a product cycle using these tools.
- **Please use `Labels` when filing issues** try and include screenshots of bugs and steps to reproduce.
