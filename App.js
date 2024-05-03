const parent = React.createElement(
    "h1" ,
    {id:"heading" , xyz:"abc"}, // whatever we are passing here in { } , it will go as an attribute .
    "Hello World From React")  // this is children

    console.log(parent)

//createElement is a core thing of react so whenever we are creating any thing 
//react developement CDN will call like (React)'

//2)- How to do nesting like this
// <div class="parent">
// <div class ="child">
// <h1 class="mainHeading"> I am H1 Tag</h1>
// </div>
// </div>

// const parent1 = React.createElement("div",{id:"parent"},
// React.createElement("div",{id:"child"},
// React.createElement("h1",{id:"h1"},"I am H1 Tag")
// )
// )
//Now creating a one more h1 tag inside child div . 
// so whenever we are adding siblings then we can add like an Array.


const parent1 = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"h1"},"I am H1 Tag"),
React.createElement("h2",{id:"h1"},"I am H2 Tag")]
)
)
//So instead of adding multiple arrays we use JSX
//Creating a root and rendering somthing to it then it is a job of ReactDOM

const root = ReactDOM.createRoot(document.getElementById("root"))

//render the root by passing an element as an argument 
//And whatever we render inside root div of our main HTML file it will render that only even if there is 
//something inside of root div , that will be replace by the argument of root.render(argument)
root.render(parent1) 