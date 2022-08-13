# Opvia React Clicker Exercise

You’ve come up with a cool idea for an app. It’s a clicker with two buttons. One to increase the number and one to decrease the number. You’re going to make this available on the web and see what happens! You just know it’s going to blow up. It’s a big project, so you’re making a front-end only MVP first. Unfortunately your pet iguana died yesterday and you couldn’t think straight. You wrote some code that works but you aren’t proud of.
Today is a new day. Refactor this react component and make your clicker look cool!

```jsx
import React from "react";
 
class Clickme extends React.Component {
 constructor(props) {
   super(props);
   this.reduce = this.reduce.bind(this);
   this.state = { count: 0 };
 }
 reduce() {
   this.state.count = this.state.count + -1;
   this.forceUpdate();
 }
 render() {
   return (
     <div style={{ backgroundColor: "white" }}>
       <div>Clicker Count {this.state.count}</div>
       <br />
       <button
         onClick={() => {
           this.state.count = this.state.count + 1;
           this.forceUpdate();
         }}
       >
         Add one
       </button>{" "}
       <button onClick={this.reduce}>Reduce by one</button>
     </div>
   );
 }
}
export default Clickme;
```


---

# What I did
- Created the component

## General feedback
- 👎 Too easy (unless I missed something?)
- 👎 Too unstructured - what did you want to see out of this? 
    - That the candidate can refactor a class component?
    - Does the codebase even _have_ any class components to refactor?
    - That they understand hooks?
- Might be nice to have something with a test already in place, and have to create a new component to pass the spec?

--- 

# Running the project.

## Requirements
- Node/Bun
- npm/pnpm

## Installation
- `pnpm i`

## Scripts
- `pnpm run dev`
    - Runs the vite server, showing the before and after state versions of the component.
