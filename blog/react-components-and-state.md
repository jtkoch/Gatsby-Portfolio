---
path: /blog/React-Components-and-State
date: 2021-04-21T15:51:26.481Z
title: React Components and State
image: assets/blog-post1.jpg
---
This is my first post in a series I will be doing about React JS. I have to say that React is easily thus far my favorite way to create user interfaces for the web. It's a bit tricky to learn but once you break the barrier of understanding how DOM manipulation, Components, and State works it's a game changer.

First of all, React uses a beautiful thing called JSX which is a combination of HTML and JavaScript. Instead of separating these two common technologies by putting them in separate files, React allows you to couple them into the same syntax which makes things much easier to keep tabs on in my opinion. Here is an example of JSX being used in a React. `const myElement = <h1>React is {5 + 5} times better with JSX</h1>` Notice in the curly brackets I am using JavaScript logic within HTML <h1> tags. This becomes really handy for dynamically rendering data with state in the future.



###### A basic example of importing components

To further speak on React Components, I like to think of them as a chunk of your website. For example, a Navigation bar, Hero section, or a Footer could all be their own components. This allows you to keep your main application file very clean as you can import your Components into the `App.js` file to render them on the page.

```
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <h1>Hello, This is the main Application</h1>
      <Footer />
    </div>
  )
}

export default App;
```



###### Using the React useState Hook

Think of State as the "current state" of something. Is a light "on" or "off". You can build a function that renders a picture of a lightbulb. Set your initial state to lightOn, setLightOn and have a button in the return statement that changes the state onClick. Below is a code example of this exact thing. 

```
import React, { useState } from 'react';

const on = "image of white lightbulb";
const off = "image of yellow lightbulb";

function App() {
  const [lightOn, setLightOn] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setLightOn(!lightOn)}>
        { lightOn === false ? <img src={on}/> : <img src={off}/> }
      </button>
    </div>
  );
}

export default App;
```





This is a basic walkthrough of how a React Application works. I will be adding more blog posts of how I went about learning React with examples provided on how to use the things I talk about. I hope this helps!