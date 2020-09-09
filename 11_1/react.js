// React
// 1 Create a Simple JSX Element
// The constant JSX should return an h1 element and the h1 tag should include the text Hello JSX!
const JSX = (<h1>Hello JSX!</h1>);

// 2 Create a Complex JSX Element
// Define a new constant JSX that renders a div which contains the following elements in order:
// An h1, a p, and an unordered list that contains three li items. You can include any text you want within each element.
// Note: When rendering multiple elements like this, you can wrap them all in parentheses, but it's not strictly required. Also notice this challenge uses a div tag to wrap all the child elements within a single parent element. If you remove the div, the JSX will no longer transpile. Keep this in mind, since it will also apply when you return JSX elements in React components.
const JSX = (<div>
  <h1>title</h1>
  <p>paragraph</p>
  <ul>
  <li>item</li>
  <li>item</li>
  <li>item</li>
  </ul>
</div>)

// 3 Add Comments in JSX
const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
    {/*Comment*/}
  </div>
);

// 4 Render HTML Elements to the DOM
// The code editor has a simple JSX component. Use the ReactDOM.render() method to render this component to the page. You can pass defined JSX elements directly in as the first argument and use document.getElementById() to select the DOM node to render them to. There is a div with id='challenge-node' available for you to use. Make sure you don't change the JSX constant.
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// change code below this line
ReactDOM.render(JSX, document.getElementById('challenge-node'))

// 5 Define an HTML Class in JSX
// Apply a class of myDiv to the div provided in the JSX code.
const JSX = (
  <div className='myDiv'>
    <h1>Add a class to this div</h1>
  </div>
);

// 6 Learn About Self-Closing JSX Tags
// Any JSX element can be written with a self-closing tag, and every element must be closed. The line-break tag, for example, must always be written as <br /> in order to be valid JSX that can be transpiled. A <div>, on the other hand, can be written as <div /> or <div></div>. The difference is that in the first syntax version there is no way to include anything in the <div />. You will see in later challenges that this syntax is useful when rendering React components.
const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);

// 7 Create a Stateless Functional Component
// The code editor has a function called MyComponent. Complete this function so it returns a single div element which contains some string of text.
// Note: The text is considered a child of the div element, so you will not be able to use a self-closing tag.
const MyComponent = function() {
  // change code below this line
const JSX = (<div>some string of text</div>)
return JSX
  // change code above this line
}

// 8 Create a React Component
// This creates an ES6 class MyComponent which extends the React.Component class. So the MyComponent class now has access to many useful React features, such as local state and lifecycle hooks. Don't worry if you aren't familiar with these terms yet, they will be covered in greater detail in later challenges. Also notice the MyComponent class has a constructor defined within it that calls super(). It uses super() to call the constructor of the parent class, in this case React.Component. The constructor is a special method used during the initialization of objects that are created with the class keyword. It is best practice to call a component's constructor with super, and pass props to both. This makes sure the component is initialized properly. For now, know that it is standard for this code to be included. Soon you will see other uses for the constructor as well as props.
// MyComponent is defined in the code editor using class syntax. Finish writing the render method so it returns a div element that contains an h1 with the text Hello React!.
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // change code below this line
return (<div>
  <h1>Hello React!</h1>
</div>)
    // change code above this line
  }
};

// 9 Create a Component with Composition
// In the code editor, there is a simple functional component called ChildComponent and a class component called ParentComponent. Compose the two together by rendering the ChildComponent within the ParentComponent. Make sure to close the ChildComponent tag with a forward slash.
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* change code below this line */ }
<ChildComponent />

        { /* change code above this line */ }
      </div>
    );
  }
};
