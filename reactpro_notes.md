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