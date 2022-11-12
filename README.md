# LinkedIn Clone

Built using React.JS, Redux and Firebase. This project was referencing a tutorial on YouTube by _'Sonny Sangha'_. Add some features apart from the tutorial on my own like:

- Mobile responsiveness
- Removed unused actionable items in post and navigation section.
- Used _'react-sticky-box'_ to better display sticky nav on scroll.

Updates to make:

- Allows users to _'LIKE'_ posts.
- Allow users to _'Comment'_ posts.
- Allow users to _'Re-Post'_ posts.
- Using React Router to allow users to go to homepage.
- Users can add photos/videos/calendar event and articles as posts.
- Header search functionality works.
- Modernize home screen so users can also register and sign in using Google Authenticator.
- Fetch News from API to add to the widgets bar

## Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Deploy to Firebase

Firstly login to firebase

```bash
firebase login
```

Then if you are logged in it will say something like:

```bash
Success! Logged in as _'email_address'_
```

Otherwise the terminal will ask you:

```bash
? Allow Firebase to collect CLI and Emulator Suite usage and error reporting information?
```

Type _'y'_

Initialize Firebase

```bash
firebase init
```

A dropdown will appear on the terminal. Choose the following by clicking the spacebar on keypad and click enter:

```bash
Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub
Action deploys
```

Choose an existing project in the next dropdown and click enter.

The firebase project to choose is the following and click enter:

```bash
react-linkedin-clone-3 (react-linkedin-clone)
```

Next, the terminal will ask you:

```bash
What do you want to use as your public directory?
```

Type _'build'_

Select _'y'_ when the terminal asks you the following:

```bash
Configure as a single-page app (rewrite all urls to /index.html)?
```

When the terminal asks you the following, select _'n'_:

```bash
Set up automatic builds and deploys with GitHub?
```

Compile an optimized production build using

```bash
yarn build
```

Deploy changes and make it live

```bash
firebase deploy
```
