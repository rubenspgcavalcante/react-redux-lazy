# react-redux-lazy

## Lazy Redux connector for React

If you want to late connect you sate or/and actions on your components, this is the solution you're looking for!  

# Installing

NPM:

```
npm install --save react-redux-lazy
```

Yarn:

```
yarn add react-redux-lazy
```

# Usage

The `lazyConnect` expects the same parameters as the [**react-redux** `connect`](https://github.com/reduxjs/react-redux/blob/master/docs/api.md#connect), the diference here is that
**lazyConnect** can receive a promise that resolves into any of the parameters: "mapStateToProps", "mapDispatchToProps", "mergeProps" and/or options, and it returns a `React.lazy` instance (so remember to wrap the container in a `<Suspense>`).
You still able to pass the normal values as you do in `connect`, so if you want only lazy map you actions, the only promise you give is the `mapDispatchToPropsPromise`, and pass all the other parameters as you normally does with `connect`.

Example for lazy mapDispatchToProps:

```js
import { lazyConnect } from "react-redux-lazy";
import SampleComponent from "./SampleComponent";

// A normal value as you do in connect()
const mapStateToProps = { ... }

// Here we have a promise that resolves into the common mapDispatchToProps
const mapDispatchToPropsPromise = import("./actions/my-actions").then(mod => ({ sampleAction: mod.sampleAction }));

export default lazyConnect(mapStateToProps, mapDispatchToPropsPromise)(SampleComponent);
```

And then, as said before, lazyConnect will return a `React.lazy` instance, so just use it wrapped in a `<Suspense>`:
```jsx
import React from "react";
import Spinner from "Spinner";

// Here comes it :)
import LazySampleComponent from "./LazySampleComponent";

export default () =>
  <Suspense fallback={<Spinner />} >
    <LazySampleComponent />
  </Suspense>

```

## Container factory

Normally you will want to do the import based on a parameter, so for this you will export not the lazyConnect result directly, but a
factory that to call it and create the **React.lazy** container for you:

Let's how the example above will be using as a factory:

```js
import { lazyConnect } from "react-redux-lazy";
import SampleComponent from "./SampleComponent";

// A normal value as you do in connect()
const mapStateToProps = { ... }

export default actionType => {
  // Here we have a promise that resolves into the common mapDispatchToProps based on a parameter
  const mapDispatchToPropsPromise = import(`./actions/${actionType}`).then(mod => ({ sampleAction: mod.sampleAction }));

  return lazyConnect(mapStateToProps, mapDispatchToPropsPromise)(SampleComponent);
}
```

And then, as said before, lazyConnect will return a `React.lazy` instance, so just use it wrapped in a `<Suspense>`:
```jsx
import React from "react";
import Spinner from "Spinner";

// Note the lower camel case notation, it's a factory!
import lazySampleComponent from "./lazySampleComponent";

export default (props) => {
  // Now we have the Component :)
  const LazySampleComponent = lazySampleComponent(props.actionType);
  
  return (
    <Suspense fallback={<Spinner />} >
      <LazySampleComponent />
    </Suspense>
  );
}
```

# Contributing

## Development server

You can check a live example under the `dev/` directory, using the lazyConnect. Just remember to not commit you changes on it!  
To check this example running, run the command:
```
yarn start:dev
```

This will make the `webpack-dev-server` start.

# License

This project is under the MIT license.