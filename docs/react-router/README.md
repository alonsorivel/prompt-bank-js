
# React Router Integration Guide for Vite + React Projects

This guide will help you integrate React Router into your Vite + React project. We will create two main routes (`Home` and `Preferences`) and a catch-all route that displays a 404 error page for undefined routes.

## Step 1: Install `react-router-dom`

First, ensure that `react-router-dom` is installed in your project. Run the following command in your project's root directory:

```bash
npm install react-router-dom
```

## Step 2: Create Your Components

You'll need three components for this example: `Home`, `Preferences`, and `NotFound`. Below are the basic implementations of these components.

### Home Component (`Home.js`)

```javascript
import React from 'react';

const Home = () => {
    return <div>Welcome to the Home Page!</div>;
}

export default Home;
```

### Preferences Component (`Preferences.js`)

```javascript
import React from 'react';

const Preferences = () => {
    return <div>Welcome to the Preferences Page!</div>;
}

export default Preferences;
```

### NotFound Component (`NotFound.js`)

This component will display a 404 error message for undefined routes.

```javascript
import React from 'react';

const NotFound = () => {
    return <div>404 Page does not exist.</div>;
}

export default NotFound;
```

## Step 3: Setup Routes with React Router

In your main App component (or wherever you manage routes), integrate the components with React Router as follows:

### App Component (`App.js`)

```javascript
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Home';
import Preferences from './Preferences';
import NotFound from './NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
```

This setup allows you to navigate between the `Home` and `Preferences` components, with a 404 error page for any undefined routes.
