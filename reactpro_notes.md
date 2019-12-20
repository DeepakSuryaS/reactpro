## React Paradigms:
  * The first is unidirectional data flow. 
    * State flows in one direction down the tree of your application's components, from the stateful parent component to child components. The child components only receive the state data they need. 
  * The second is that complex stateful apps can be broken down into just a few, or maybe a single, stateful component. The rest of your components simply receive state from the parent as props, and render a UI from that state. 
  It begins to create a separation where state management is handled in one part of code and UI rendering in another.
  This principle of separating state logic from UI logic is one of React's key principles.
  When it's used correctly, it makes the design of complex, stateful applications much easier to manage.
  
### Lifecycle Methods:
  * React components have several special methods that provide opportunities to perform actions at specific points in the lifecycle of a component.
  * These are called lifecycle methods, or lifecycle hooks, and allow you to catch components at certain points in time.
  * This can be before they are rendered, before they update, before they receive props, before they unmount, and so on.
  * List of lifecycle methods:
    * componentWillMount() - will be deprecated in a future version of 16.X and removed in version 17.
    
    * componentDidMount()
      * Most web developers, at some point, need to call an API endpoint to retrieve data.
      * If you're working with React, it's important to know where to perform this action.
      * The best practice with React is to place API calls or any calls to your server in the lifecycle method componentDidMount().
      * This method is called after a component is mounted to the DOM.
      * Any calls to setState() here will trigger a re-rendering of your component.
      * When you call an API in this method, and set your state with the data that the API returns, it will automatically trigger an update once you receive the data.
      * This is also the best place to attach any event listeners you need to add for specific functionality.
      * React provides a synthetic event system which wraps the native event system present in browsers.
      * This means that the synthetic event system behaves exactly the same regardless of the user's browser - even if the native events may behave differently between different browsers.
      * Example of synthetic event listeners: onClick, onChange, etc.
    
    * shouldComponentUpdate()
      * If any component receives new state or new props, it re-renders itself and all its children. 
      * This is usually okay.
      * But React provides a lifecycle method you can call when child components receive new state or props, and declare specifically if the components should update or not. 
      * The method is shouldComponentUpdate(), and it takes nextProps and nextState as parameters.
      * This method is a useful way to optimize performance. 
      * For example, the default behavior is that your component re-renders when it receives new props, even if the props haven't changed. You can use shouldComponentUpdate() to prevent this by comparing the props. 
      * The method must return a boolean value that tells React whether or not to update the component. 
      * You can compare the current props (this.props) to the next props (nextProps) to determine if you need to update or not, and return true or false accordingly.
    
    * componentDidUpdate()
    
    * componentWillUnmount()



### React.Fragment
* When trying to wrap everything a function returns in a single element such as a <div>, because react has this requirement, the markup actually becomes flooded with <div>s. It ends up polluting the DOM tree. 
* React fragments helps us wrap the elements that we're returning in something tha doesn't end up creating a new node(element) in the DOM tree.
* You can replace those <div>s with <React.Fragment></React.Fragment> or <></>.
* This actually changes the parent-child relationship in many places, so be careful.
* Avoid using this when you're using flexbox, grid or relative position because the parent-child relationship is important to maintain in these cases.

### Default props
* These are just fallback values for the props.
* If the value for a prop is not provided, react will make use of the defaultProps value that we provide.
* Syntax:
    functionName.defaultProps = {}

### Prop Types
* Allows us to specify datatype of incoming props. In other words, we can add some type checking to validate the incoming props.
* We can also tell them to be "required". (If not provided, it will check in the defaultProps. If still not available, then "warning".)
* React took the ability to specify prop types and moved them to a separate library called propTypes. So, we need to add a new dependency and import PropTypes from "prop-types".
* Syntax is similar to the defaultProps.
* It will show a warning message in the console when there is a mismatch of datatype.
* This is only a development tool, so no warning will be shown in the production version.
* Doc: https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes

## Reusability
* Two very popular ways to help us maintain reusability (Don't Repeat Yourself - DRY):
  * inheritance
  * composition (always prefer this (react team prefers composition))
* Code reuse patterns that have emerged in react:
  * components w/ props
  * children
  * higher-order components (hooks rendered this outdated)
  * render props (hooks rendered this outdated)

  ### React Children:
  * If you want the person that is using the component to have full control over the stuff that gets displayed, then children are fine. But if you want to ensure a structure always, just use props.

  ### Higher-Order Components:
  * Higher-Order Components stems from the concept of Higher-Order Functions.
    * Higher-Order Functions are functions that take a function as a parameter which are often called callback functions.
      * Example: map, filter, reduce, etc.
  * Higher-Order Component is a function that takes a component as its first argument and returns a new component that wraps the given component, providing extra capabilities to it.

## React's Tree Rendering:
* React recursively renders components down one branch until there are no more to render
* Changes to state or props in any component will recursively re-render down the remaining tree (subtree) whether those components have changed or not. This can sometimes render components that never needed to re-render. To tackle this, we have
  * _shouldComponentUpdate()_
  * _React.PureComponent_
  * _React.memo_

## Performance:
* To do better optimize React applications, understand first how React renders it's components.
  #### shouldComponentUpdate()
    * (we'll almost never need to implement this ourselves. But, it's really helpful to understand it when we talk about _PureComponent_ and _memo_.)
    * It's life cycle method on class components. (just like _componentDidUpdate, render, componentDidMount_)
    * Allows us to determine if a component should update or not
    * Receives the upcoming props and upcoming state (_nextProps, nextState_) as parameters so we can compare those against the current props and state
      * If it returns,
        * true   -> component should update
        * false  -> component need not update
    * React team recommends that we do not use any kind of deep equality checks in here as it's going to be extremely inefficient, it's pretty much going to erase the gains that we might get by using the _shouldComponentUpdate()_ in the first place.
  
  #### React.PureComponent:
  * Alternative to React.Component
  * Automatically implements a _shouldComponentUpdate()_ for us and that method automatically does a shallow comparison of the _props_ and _state_.
  * Disallows us from manually putting in our own _shouldComponentUpdate()_
  * Skips rendering all of the children in the tree automatically, so they have to be _pure_ as well
  * React docs suggests that we use PureComponent instead of trying to implement _shouldComponentUpdate()_. However, there maybe situations where we have to implement it ourselves.

  #### React.memo():
  * _Higher-Order Component_ built by React released in v16.6
  * Pretty much the same as _PureComponent_, but for functional components
  * It only compares _prevProps_ and _nextProps_, no state checking
  * We can optionally implement our own checking function to determine if it should use the memoized result or if we should re-render the component
  * If it returns,
    * true  -> component need not update (means that the props are equal)
    * false -> component should update (means that the props are not equal)

## Context:
  React can only pass data downwards. In other words, it allows us to pass data to the children but not to the siblings. So, if a sibling requires the same state or data, then we have to move the state to the parent so that children can have it. This ends up in unnecessarily passing props through levels. This is a problem that _context_ can solve.
  * "Context provides a way to pass data through the component tree without having to pass props down manually at every level." - React docs
  * ##### Process:
    * When several components need the data,
      * Choose a common parent between all these components and wrap it in a _provider_
      * Then wrap the components that need the data in a _consumer_
      * This _provider-consumer_ pair allows us to create a context tunnel that leads directly to whatever is consuming the data
      * We can pass anything through this tunnel, not just data.
    * _const variableName = React.createContext()_ (can take a default value)
      * we get back a compound component. Which means that _variableName_ is actually an object and has two properties which are components
      * So, we'll have a _variableName.Provider_ and _variableName.Consumer_
        * here, _Provider and Consumer_ are components and _variableName_ is the object that's holding those as properties

  ### contextType():
  * ##### Limitations:
    * A little bit limited because it only works in class components
    * There isn't really a great way to pass down a method that allows us to change the context from another component
  
  ### Caveats:
  * Do not use context just to avoid prop drilling a layer or two down.
    * React suggests not using it to avoid prop drilling at all in certain circumstances. [https://reactjs.org/docs/context.html#before-you-use-context]
    * Don't use context for state that should just be kept locally (e.g. forms)
    * Wrap your provider around the lowest common parent in the tree
    * If passing object as value, watch performance and refactor if necessary

## Hooks:
  Hooks are functions that let us _"hook into"_ React state and lifecycle features from function components.
  Hooks don't work inside class components, they let us work without classes.
  Normally, we would choose functional components first and then use a class component when we have to access a state or lifecycle methods. Well, now we don't need them either.
  
  ### Built-in hooks:
    1. useState
    2. useMemo
    3. useEffect
    4. useCallback
    5. useContext
    6. useImperativeHandle
    7. useRef
    8. useLayoutEffect
    9. useReducer
    10. useDebugValue

  #### useState:
    * import it as a named module {useState} or use React.useState()
    * returns an array where the first element is a state variable and the second is a function to update the value (this function and the variable are attached)
    * default -> [null, f()]
    * since useState is returning an array, we can use array destructuring to grab its elements
  #### useEffect:
    * Considered a replacement for the following lifecycle methods,
      * componentDidMount()
      * componentDidUpdate()
      * componentWillUnmount()_
    * It's a hook that allows us to produce side effects.
      * Side effects: (their main job doesn't specifically have to deal with managing state or displaying content in the screen)
        * network request
        * manual DOM manipulation
        * event listeners or timeouts and intervals etc
      * Takes two parameters
        * callback function
        * optional array in which we can specify the variables that we want to watch for changes (kinda like event listeners)
          * leaving an empty array will cause the useEffect method to stop rendering ever again after the component mount happens
      * we can make useEffect act like componentWillUnmount is by returning something from the useEffect()
        * under the hood, when react calls the useEffect() and that call returns a function, it stores that function and right when a component is about to unmount it will run that function so that it can do any kind of cleanup


## Router
  Is a collection of packages.
  ### Features:
    * Conditionally render large parts of our page
    * Declarative API
    * Hooks
  
  ###  Primary Components:
    * Routers - <BrowserRouter>, <HashRouter> etc
    * Route matchers - <Route>, <Switch> etc
    * Navigation (route changers) - <Link>, <NavLink>, <Redirect> etc

  ### Hooks that the router provides:
    * useHistory
    * useLocation
    * useParams



## Redux

  * Redux is a predictable state container for JavaScript apps.
  * It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.
  * State management tool created before React's context API was stabilized.
  * Redux was born as a system to manage global app state before React released a stable version context API.
  * Under the hood, Redux uses the context API to power it's own system.
  * Great way to learn philosophies of pure functions and global state management without side effects.
  
  * Redux is a state management framework that can be used with a number of different web technologies, including React.
  * In Redux, there is a single state object that's responsible for the entire state of your application. This means if you had a React app with ten components, and each component had its own local state, the entire state of your app would be defined by a single state object housed in the Redux store. This is the first important principle to understand when learning Redux: the Redux store is the single source of truth when it comes to application state.
  * This also means that any time any piece of your app wants to update state, it must do so through the Redux store. The unidirectional data flow makes it easier to track state management in your app.

  #### Pure function:
    1. If the function is called with the same parameters over and over again, it will return the same result. This function can't rely on some outside object or source that may change from one call to the next.
    2. It will make no alterations or mutations outside of itself. This means that nothing else should be modified as a result of calling the function.

  ##### Examples of states:
    * State coming from an API
    * State that indicates a loading status for a component
    * State that is managing form etc
  
  #### Guiding principles:
    * Single source of truth (global state)
    * State is read-only (actions)
    * Any changes to state will happen with pure functions that we call reducers

  #### Fundamentals:
    * Actions & action creators -> description of the change that we want to make to the lower state
      * action is an object with a type property who's value is a string describing the change that you want to make that's it and there's an optional property often called payload or data
    * Dispatch -> vehicle for taking the action to the reducer
    * Reducers -> pure functions, use the action to determine the new state
    * Store - attaches the following functions to the reducer: subscribe(), getState(), dispatch(), replaceReducer()
      * subscribe() -> takes a function, allows us to perform any action after a change is made to the store
      * getState() -> quick way to get the current state of our application's data
      * dispatch() -> sends the action to the reducer, therefore, expects an action as a parameter

    The job of the reducer as a pure function is to take the previous version of the state and an action and return a brand new value for the state based on the action. Since it is a pure function, it must return a new version of the state without modifying the old version of the state.
    
    So the process is, first we create an action or an action creator and dispatch it to the redux store. After an action is created and dispatched, the Redux store needs to know how to respond to that action. This is the job of a reducer function. Reducers in Redux are responsible for the state modifications that take place in response to actions. A reducer takes state and action as arguments, and it always returns a new state. It is important to see that this is the only role of the reducer. It has no side effects — it never calls an API endpoint and it never has any hidden surprises. The reducer is simply a pure function that takes state and action, then returns new state.
    Another key principle in Redux is that state is read-only. In other words, the reducer function must always return a new copy of state and never modify state directly. Redux does not enforce state immutability, however, you are responsible for enforcing it in the code of your reducer functions. You'll practice this in later challenges.

  ##### Restaurant analogy:
    * our order -> action
    * waiter/server -> dispatch
    * chef -> reducer

  ##### Combining Reducers:
    * import the separate reducers
    * combine the reducers into a single state tree
    * create the store
    * export the store

  ### React redux:
  * React Redux provides a small API with two key features: Provider and connect. Another challenge covers connect. The Provider is a wrapper component from React Redux that wraps your React app. This wrapper then allows you to access the Redux store and dispatch functions throughout your component tree. Provider takes two props, the Redux store and the child components of your app. 
  * The Provider component allows you to provide state and dispatch to your React components, but you must specify exactly what state and actions you want. This way, you make sure that each component only has access to the state it needs. You accomplish this by creating two functions: mapStateToProps() and mapDispatchToProps().
  
  #### connect():
    Pulls together the store and our component.
    * Higher-order component
    * takes two parameters:
      * what parts of the global state does this component want access to?
      * what actions do you want to be able to dispatch from this component?
    * returns a function to which we pass the component we want to connect. When called, this function creates a new component wrapping ours which passes the global state and "dispatchable" actions to our component via props.
    * syntax:
      ```connect(mapStateToPropsFunc, mapDispatchToProps)(Component)```
