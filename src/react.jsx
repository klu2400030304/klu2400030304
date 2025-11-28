import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default App;

// Import React and Component class from the 'react' library
import React, { Component } from "react";

// Create a class component named App
class App extends Component {
  // Constructor initializes state
  constructor(props) {
    super(props); // Calls the parent constructor
    this.state = { count: 0 }; // State has one property 'count' starting at 0
  }

  // Method to increment the count value
  increment = () => {
    // setState updates the 'count' by adding 1
    this.setState({ count: this.state.count + 1 });
  };

  // The render method returns JSX (what to display on screen)
  render() {
    return (
      <div>
        {/* Heading text */}
        <h1>Hello React!</h1>

        {/* Display the count value from state */}
        <p>Count: {this.state.count}</p>

        {/* Button that triggers increment() when clicked */}
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// Export App so it can be used in other files (like main.jsx)
export default App;
