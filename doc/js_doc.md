# JavaScript

## Basics

### Difference id and class

`id` is used to identify unique elements in html, whereas `class `can be used to identify more than one. 

### incorporation in html

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://d3js.org/d3.v3.min.js"></script>
</head>
    
<body>  
    <div id="container"></div>
    <script type='text/javascript' src="./basic_1.js"></script> 
</body>    
</html>

```

And in `JavaScript`

```javascript
function plot(params){

}
plot.call(chart, {
    data: data,
    axis:{
        x: xAxis,
        y: yAxis
    },
    gridlines: yGridlines
});

```

### piping in javascript

```javascript
// it is possible to string together
// operations or object callbacks in js
function func(){
    
}
```

### Loops

#### For loops

```
for (let index = 0; index < array.length; index++) {
    const element = array[index];  
}
```

### Call-by-reference and call-by-value

```javascript
function changeStuff(a, b, c)
{
  a = a * 10;
  b.item = "changed";
  c = {item: "changed"};
}

var num = 10;
var obj1 = {item: "unchanged"};
var obj2 = {item: "unchanged"};

changeStuff(num, obj1, obj2);

console.log(num);
console.log(obj1.item);
console.log(obj2.item);

>>> 
.. 10
.. changed
.. unchanged
```

'If you change the **INTERNALS** of the parameter, ***that*** will ***propagate back up*** (as with `obj1`)', however changing the parameters themselves (as with num and obj2), there will be no propagation. 



### Classes

#### Extend

The extend keyword in class definitions are used for ***inheritance***. 

```javascript
class Car {
  constructor(brand) {
    this.carname = brand;
  }
    
  present() {
    return 'I have a ' + this.carname;
  }
    
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand); // ? adds the constructor of the parent class
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}
```

### import, export

In js it possible to share code between files in the same project (or other projects for that matter), similar to python. 

#### Exports

By exporting code, it is possible to share import that code elsewhere. 

There are two types of exports:

##### Named Exports (Zero or more exports per module)

1. Note that in the `export` it is possible to provide `export ... as 'theNameWeWantToImport'`. 

2. Named exports are useful to export several values. During the import, it is mandatory to use the same name of the corresponding object.

3. ```js
   // export features declared earlier
   export { myFunction, myVariable };
   
   // export individual features (can export var, let,
   // const, function, class)
   export let myVariable = Math.sqrt(2);
   export function myFunction() { ... };
   ```



##### Default Exports (One per module)

1. But a default export can be imported with any name for example:

   ```js
   // file test.js
   let k; export default k = 12;
   // some other file
   import m from './test'; // note that we have the freedom to use import m instead of import k, because k was default export
   console.log(m);        // will log 12
   ```

2. If we want to export a single value or to have a fallback value for your module, you could use a default export:

   ```js
   // module "my-module.js"
   
   export default function cube(x) {
     return x * x * x;
   }
   ```

   Then, in another script, it is straightforward to import the default export:

   ```js
   import cube from './my-module.js';
   console.log(cube(3)); // 27
   ```





```js
// Exporting individual features
export let name1, name2, …, nameN; // also var, const
export let name1 = …, name2 = …, …, nameN; // also var, const
export function functionName(){...}
export class ClassName {...}
```

```js
// Export list
export { name1, name2, …, nameN };
```
```js
// Renaming exports
export { variable1 as name1, variable2 as name2, …, nameN };
```

```js
// Exporting destructured assignments with renaming
export const { name1, name2: bar } = o;
```

```js
// Default exports
export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };
```



```js
// Aggregating modules
export * from …; // does not set the default export
export * as name1 from …; // Draft ECMAScript® 2O21
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
export { default, … } from …;
```



## Extracting data from tables

To extract table data and interact with it seems to be a very pertinent problem for javascript. Imagine a website with an interesting table. Would it not be nice to perform some basic calculations pertaining to this table, interactively in the console?

### Types of tables

Different sites may be implementing different kinds of tables. Universal solutions may therefore be more difficult. The different types of tables include:

##### `<table>` tag. 

1. This can be followed by different tags:
2. `<thead>`
3. `<tfoot>`
4. `<tbody>`
5. Inside each of these tags, the row is formatted by `<tr>` followed by `<td>` which refers to element defining a cell of data

***Column***: is referred to by the `<td>` tag

***Row***: is referred to by the `<tr>` tag

#### Extracting from simple table

the `html` code:

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <style>
        #tableData{
            border: solid;
        }
    </style>
    <title>Document</title>
</head>
<body>

        <table id="RN_TABLE" name="RN_TABLE">
            <tr><td>1</td></tr>
            <tr><td>2</td></tr>
            <tr><td>3</td></tr>
            <tr><td>4</td></tr>
            <tr><td>56</td></tr>
        </table>    

</body>
</html>

```

And the `JavaScript`:

```javascript

function table_process() {
    // The table id in the html document is 'RN_TABLE'
    // It is possible to nest `getElementBy...` 
    // i.e. with the returned object from the `getElement...` it is possible
    // to re-rerun the same method to further filter the object
    
    var table = document.getElementById('RN_TABLE'); 
    var table_d = table.getElementsByTagName('td'); // note how we nest the getElementsBy... method
    var raw_ar = []
    // vanilla for loop
    for (let i = 0; i < table_d.length; i++) {
        // push method appends to array in js
        raw_ar.push(table_d[i].textContent)
    }
    return raw_ar
}		
```

### Operators

#### Question mark

`?` is the ternary operator. It takes three operands:

1. condition followed by
2. `?`
3. then expresstion to execute if the *condition* is truthy 
4. followed by a `:`
5. and finally the expression to execute if the condition is falsy

Example:

```javascript
function getFee(isMember){
    return (isMember ? "2" : "10");
}

console.log(getFee(true));
// outputs: 2

console.log(getFee(false));
// outputs: 10
```

### String manipulation

#### Replacing whitespace

Assume we have the following text

```javascript
let text = ' asd1231 sdsd kr '
text =  text.replace(/\s/g, '').replace('kr', '')
```

### Cache update

To update the cache:

```html
<link rel="stylesheet" href="/static/assets/css/jexcel_v4.css?version=1">
```

add a version number as a url parameter in the end of the href. 



## Boolean

### question mark ?

```js
true ? "X" : "O";
> "X"
```



# jQuery

## Basics

### the `$` sign 

In javascript `$` is an uninformative variable name. in jQuery the `$` is a ***jquery function***. `$` is an alias for the function called `jQuery`:

```javascript
$('h1').remove()
// Correspons to
jQuery('h1').remove()
```

#### The jQuery method

The `jQuery()` method can take extremely useful parameters. It is able to query or find HTML elements based on the passed parameters. Subsequently, a jQuery action can be performed on the returned element. 

#### Making queries

Say we have the table 

```html
<table id="RN_TABLE">
    <thead>
        <tr>
            <th>Month</th>
            <th>Savings</th>
        </tr>
    </thead>
</table>
```

##### search by id

To search by id: `$('#RN_TABLE')`

Thus We use the `#` to search by the id

##### search by class

to search by class name: `$('.')`



# NPM

This allows running JavaScript in local servers? It seems that it provides the same functionality as `pip`. 

### Run local server

`>>> npm install -g http-server`

to run the server:

`>>> http-server &`

*Where to do this:* Run these commands in the folder where the javascript we wish to run exists. . .



# D3

### Get started

`index.html` page with following in the `html` head:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- need to load v3 because of changes in later versions -->
    <script src="https://d3js.org/d3.v3.min.js"></script>
</head>
```

To check whether `d3` has been loaded correctly, run `>>> d3` in the console. 

#### Interacting with DOM (Document Object Model)

##### Adding DOM elements

```javascript
>>> d3.select('body').add('p')
```

will add a paragraph element in the HTML code of the page. 

##### Adding an SVG

```javascript
>>> d3.select("body").append("svg").attr("width", 50).attr("height", 50).append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "purple");
```

##### Plotting dots
The following code needs to be preceded by a bunch of other code as well. However, we will only discuss this (refer to the `scatter.js` somewhere in the learning folders )
```javascript
var d_ = {
    'x': ["0","1","2","3","4","5"],
    'y': ["0","1","2","3","4","5"]
};

function rn(data){
  svg.append('g')
    .selectAll("dot")
    .data(d3.zip(data.x, data.y)) // the more important line of the code
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d[0]); } )
      .attr("cy", function (d) { return y(d[1]); } )
      .attr("r", 10)
      .style("fill", "#69b3a2");

}

// Run the code
rn(d_);

```

Alright, several important stuff is happening above. One very important thing is the way the data is being parsed. `d_` is technically a two dimensional matrix. However, `d3` cant handle it in the way it looks:

```javascript
// CURRENTLY
>>> d_
{…}
x: Array(6) [ "0", "1", "2", … ]
y: Array(6) [ "0", "1", "2", … ]
```

`d3` want it to look like;

```javascript
// HOW d3 WANTS IT TO LOOK
>>> d3.zip(d_.x, d_.y)
(6) […]
0: Array [ "0", "0" ]
1: Array [ "1", "1" ]
2: Array [ "2", "2" ]
3: Array [ "3", "3" ]
4: Array [ "4", "4" ]
5: Array [ "5", "5" ]
length: 6
```

we achieve that by `d3.zip` the two vectors in the `d_` object





# React

## Installation

### Starting project

```bash
npx create-react-app my-app
```

#### Empty src

Empty the `src` folder. Here we can add `index.css` and `index.js`, which is in the main project folder. 



#### imports

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
```



### Errors

#### Creating in windows running in Linux

We had an issue starting a project that was had been npx-started in windows and then cloned to a linux system. The problem associated with the `modules` not being installed on the linux system. This is solved by npm install inside the project folder. 



## Components

React is nice for building user-interfaces. Implements **components**. 

* With components, **we tell react what we want to see on the screen**:
* When our data changes, react will update and re-render our components



### React.Component

```javascript
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// Example usage: <ShoppingList name="Mark" />
```

Here ShoppingList is:

* React component class, 
* or React component type
* !! A component takes in parameters, called **props** (short for properties)
* returns a hierarchy of views to display via the **render method**



#### render method

Very important part of the `React.component`

* returns a *description* of what we wabt to see on teh screen
* react takes teh description, displays the result
* in particular, `render` returnsa **React element** which is a lightweight description of what to render.



#### Constructor

***Must contain***

* `super(props);`: This is required when doing constructors in react components.



#### state

Situation where we want the component to store a value, as in **remembering a state change**, for instance after a click. 



***To use the state***

* define a `constructor(props)` (corresponds to `__init__` in python)
* make sure to `super(props)`



```javascript
class Square extends React.component {
	constructor(props){
		super(props);
		this.state = {
			value: null,
		};
	}
    
    render (
    
        <button 
          className="square" 
          onClick={() => this.setState({value:'X'})}
        >
          {this.state.value}
        </button>
      );
    )
}
```

***setState method***

* This is an inherited method where we can change the `this.state` variable
* !! NOTE: `this.state` is used just like `self` in python, where it is accessible privately across the entire class!
  * means that we can call this



#### Immutability

```javascript
/* ... */   
handleClick(i){
    // Note how in handleClick, we call .slice() 
    // to create a copy of the squares array to 
    // modify instead of modifying the existing 
    // array. We will explain why we create a 
    // copy of the squares array in the next section.

    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }
```



in the previous code example, we suggested that you use the `.slice()` method to create a copy of the `squares` array to copy instead of modifying the existing array. We’ll now discuss immutability and why immutability is important to learn.

There are generally two approaches to changing data. The first approach is to *mutate* the data by directly changing the data’s values. The second approach is to replace the data with a new copy which has the desired changes.



#### onClick with the same class

Say we want onClick to call a method at the same class level:

```
class random extends React.component{
	back(){
		return "hello";
	}

	render(){
		return(
			<div onClick={()=>back()}></div>
		)
	}
}
```



### Function components

In React, **function components** are a simpler way to write components that only contain a `render` method and don’t have their own state. Instead of defining a class which extends `React.Component`, we can write a function that takes `props` as input and returns what should be rendered. Function components are less tedious to write than classes, and many components can be expressed this way.



```javascript
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
```



### props

This is how we pass values to components, from inside javascript methods.

```javascript
class Square extends React.Component {
    render() {
      return (
        <button className="square">
        </button>
      );
    }
  }

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }
```

Note here that `js classes` that `extend` `React.component` can be called by simply providing the classname inside a component tags: <>, i.e. `<Square />. 

```javascript
class Square extends React.Component {
    render() {
      return (
        <button className="square">
          {this.props.value} // how we access the passed parameter
        </button>
      );
    }
  }

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
```



To pass a parameter to a `React.component` when using the `<"classname">` we need to implement the following syntax: 

```javascript
// To pass parameter 'value'
<Square value = {i} />

// Inside the class
this.props.value
```

| <img src="./figs/react_VuOsYdGrx4.png" alt="VuOsYdGrx4" style="zoom:50%;" /> |      |      |
| ------------------------------------------------------------ | ---- | ---- |
| After passing `this.props.value`                             |      |      |



### JSX syntax

* these structures easier to write
* the `<div />` syntax is TRANSFORMED at build time to `React.createElement('div')`

The above example is therefore equivalent to:

```javascript
return React.createElement('div', {className: 'shopping-list'},
	React.createElement('h1', /*... h1 children ...*/),
	React.createElement('ul', /*... ul children ...*/)
);
```

JSX comes with the full power of JavaScript. You can put *any* JavaScript expressions within braces inside JSX

The `ShoppingList` component above only renders built-in DOM components like `<div />` and `<li />`. But you can compose and render custom React components too. For example, we can now refer to the whole shopping list by writing `<ShoppingList />`

### Determining when to re-render

The main benefit of immutability is that it helps you build *pure components* in React. Immutable data can easily determine if changes have been made, which helps to determine when a component requires re-rendering.

You can learn more about `shouldComponentUpdate()` and how you can build *pure components* by reading [Optimizing Performance](https://reactjs.org/docs/optimizing-performance.html#examples).

## Tutorial

### Tic-tac-toe

https://reactjs.org/tutorial/tutorial.html#setup-for-the-tutorial



## Frameworks

### Next.js

#### Installation

```bash
> npx create-next-app kastadevaccin --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"

// in case error: e.g. "next not found", do the following
// in the root folder
> npm install
```

#### Example

Install as above

##### start the dev server

```
> cd path/to/folder
> npm run dev
```

##### edit index.js

```react
      <main>
        <h1 className="title">
          Learning <a href="https://nextjs.org">Next.js!</a>
        </h1>
```

##### adding pages

In Next.js, a page is a React Component exported from a file in the [`pages` directory](https://nextjs.org/docs/basic-features/pages).

Pages are associated with a route based on their **file name**. For example, in development:

- `pages/index.js` is associated with the `/` route.
- `pages/posts/first-post.js` is associated with the `/posts/first-post` route.

***Creating page***

```bash
> touch ./pages/first-post.js
```

`first-post.js`

```javascript
export default function FirstPost(){
	return <h1>First post</h1>
}
```

* The component can have any name, 
* but you must export it as a `default` export.

##### instead of HTMl,we use JSC

Simply create a JS file under the [`pages` directory](https://nextjs.org/docs/basic-features/pages), and the path to the file becomes the URL path.

In a way, this is similar to building websites using HTML or PHP files. Instead of writing HTML you write JSX and use React Components.

##### Link component

When linking between pages on websites, we can use `<a>` HTML tags. 

In `Next.js`, you use the `Link` Component from `next/link` to wrap the `<a>`. 

`<Link>` allows us to do client-side navigation to different page in the application. 

##### Using <Link>

first, `import Link from 'next/Link'` in `pages/index.js`. 

```js
import Link from 'next/Link'
```

Change `<a>` to `<Link>`

```react
<h1 className="title">
  Learn <a href="https://nextjs.org">Next.js!</a>
</h1>
```

into 

```react
<h1 className="title">
  Read{' '}
  <Link href="/posts/first-post">
    <a>this page!</a>
  </Link>
</h1>
```

***Changing first-post***

```react
import Link from 'next/link'
export default function FirstPost(){
    return (
        <> // jsx requires parent element
            <h1>
                First post
            </h1>
            <h2>
                <Link href="../"><a>Back to home</a></Link>
            </h2>
        </> // jsx parent element needs to be closed
    )
}
```

Here’s a simple way you can verify it:

- Use the browser’s developer tools to change the `background` CSS property of `<html>` to `yellow`.
- Click on the links to go back and forth between the two pages.
- You’ll see that the yellow background persists between page transitions.

This shows that the browser does *not* load the full page and client-side navigation is working.

If you’ve used `<a href="…">` instead of `<Link href="…">` and did this, the background color will be cleared on link clicks because the browser does a full refresh.



#### Assets

Next.js can serve **static assets**, like images, under **the top-level [`public` directory](https://nextjs.org/docs/basic-features/static-file-serving)**. Files inside `public` can be referenced from the root of the application similar to [`pages`](https://nextjs.org/docs/basic-features/pages).

The `public` directory is also useful for `robots.txt`, Google Site Verification, and any other static assets. Check out the documentation for [Static File Serving](https://nextjs.org/docs/basic-features/static-file-serving) to learn more.

However, this means you have to manually handle:

- Ensuring your image is responsive on different screen sizes
- Optimizing your images with a third-party tool or library
- Only loading images when they enter the viewport

And more. Instead, Next.js provides an `Image` component out of the box to handle this for you.

- Save the picture as `profile.jpg` in the `public/images` directory.

##### Image Component and Image Optimization

[`next/image`](https://nextjs.org/docs/api-reference/next/image) is an extension of the HTML `<img>` element, evolved for the modern web.

Next.js also has support for Image Optimization by default. This allows for resizing, optimizing, and serving images in modern formats like [WebP](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#webp) when the browser supports it. This avoids shipping large images to devices with a smaller viewport. It also allows Next.js to automatically adopt future image formats and serve them to browsers that support those formats.Automatic Image Optimization works with any image source. Even if the image is hosted by an external data source, like a CMS, it can still be optimized.

##### Using the Image Component

Instead of optimizing images at build time, Next.js optimizes images on-demand, as users request them. Unlike static site generators and static-only solutions, your build times aren't increased, whether shipping 10 images or 10 million images.

Images are lazy loaded by default. That means your page speed isn't penalized for images outside the viewport. Images load as they are scrolled into viewport.

Images are always rendered in such a way as to avoid [Cumulative Layout Shift](https://web.dev/cls/), a [Core Web Vital](https://web.dev/vitals/#core-web-vitals) that Google is going to [use in search ranking](https://webmasters.googleblog.com/2020/05/evaluating-page-experience.html).

Here's an example using [`next/image`](https://nextjs.org/docs/api-reference/next/image.md) to display our profile picture. The `height` and `width` props should be the desired rendering size, with an aspect ratio identical to the source image.

**Note:** We'll use this component later in "Polishing Layout".

```jsx
import Image from 'next/image'

const YourComponent = () => (
  <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
)

// We can then call <YourComponent>
```

#### Metadata

```react
<Head>
  <title>Create Next App</title>
  <link rel="icon" href="/favicon.ico" />
</Head>
```

Notice that `<Head>` is used instead of the lowercase `<head>`. `<Head>` is a React Component that is built into Next.js. It allows you to modify the `<head>` of a page.

You can import the `Head` component from the [`next/head`](https://nextjs.org/docs/api-reference/next/head) module.

##### Adding `Head` to `first-post.js`

We haven't added a `<title>` to our `/posts/first-post` route. Let's add one.

Open the `pages/posts/first-post.js` file and add an import for `Head` from [`next/head`](https://nextjs.org/docs/api-reference/next/head) at the beginning of the file:

```react
import Head from 'next/head'
```

To learn more about the `Head` component, check out the [API reference for `next/head`](https://nextjs.org/docs/api-reference/next/head).

#### Styling

Let’s now talk about **CSS styling**.

As you can see, our index page ([http://localhost:3000](http://localhost:3000/)) already has some styles. If you take a look at `pages/index.js`, you should see code like this:

```react
<style jsx>{`
  …
`}</style>
```

This page is using a library called [styled-jsx](https://github.com/vercel/styled-jsx). It’s a “CSS-in-JS” library — it lets you write CSS within a React component, and the CSS styles will be *scoped* (other components won’t be affected).

Next.js has built-in support for [styled-jsx](https://github.com/vercel/styled-jsx), but you can also use other popular CSS-in-JS libraries such as [styled-components](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components) or [emotion](https://github.com/vercel/next.js/tree/canary/examples/with-emotion).

#### Writing and Importing CSS

Next.js has [built-in support for CSS](https://nextjs.org/docs/basic-features/built-in-css-support) and Sass which allows you to import `.css` and `.scss` files.

Using popular CSS libraries like [Tailwind CSS](https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss) is also supported.

In this lesson, we’ll talk about how to write and import CSS files in Next.js. We’ll also talk about Next.js’s built-in support for [CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css) and [Sass](https://nextjs.org/docs/basic-features/built-in-css-support#sass-support). Let’s dive in!

##### Layout component

First, Let’s create a **Layout** component which will be shared across all pages.

- Create a top-level directory called `components`.
- Inside `components`, create a file called `layout.js` with the following content:

```react
export default function Layout({ children }) {
  return <div>{children}</div>
}
```

Then, open `pages/posts/first-post.js`, add an import for the `Layout` component, and make it the outermost component:

```react
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}
```

##### Adding css

Now, let’s add some styles to the `Layout` component. To do so, we’ll use [CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css), which lets you import CSS files in a React component.

Create a file called `components/layout.module.css` with the following content:

```css
.container {
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
}
```

To use this `container` class inside `components/layout.js`, you need to:

- Import the CSS file and assign a name to it, like `styles`
- Use `styles.container` as the `className`

Open `components/layout.js` and replace its content with the following:

```react
import styles from './layout.module.css'

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>
}
```

##### Automatically Generates Unique Class Names

Now, if you take a look at the HTML in your browser’s devtools, you’ll notice that the `div` rendered by the `Layout` component has a class name that looks like `layout_container__...`:

![Devtools](https://nextjs.org/static/images/learn/assets-metadata-css/devtools.png)

This is what [CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css) does: *It automatically generates unique class names*. As long as you use CSS Modules, you don’t have to worry about class name collisions.

Furthermore, Next.js’s code splitting feature works on [CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css) as well. It ensures the minimal amount of CSS is loaded for each page. This re	sults in smaller bundle sizes.

[CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css) are extracted from the JavaScript bundles at build time and generate `.css` files that are loaded automatically by Next.js.

##### Global Styles

[CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css) are useful for component-level styles. But if you want some CSS to be loaded by **every page**, Next.js has support for that as well.

To load [global CSS](https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet) files, **create a file called [`pages/_app.js`](https://nextjs.org/docs/advanced-features/custom-app)** with the following content:

```react
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

This `App` component is the top-level component which will be common across all the different pages. You can use this `App` component to keep state when navigating between pages, for example.

**Important:** You need to restart the development server when you add [`pages/_app.js`](https://nextjs.org/docs/advanced-features/custom-app). Press Ctrl + c to stop the server and run:

```bash
> npm run dev
```

##### Adding Global CSS

In Next.js, you can add [global CSS](https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet) files by importing them from [`pages/_app.js`](https://nextjs.org/docs/advanced-features/custom-app). You **cannot** import global CSS anywhere else.

The reason that [global CSS](https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet) can't be imported outside of `pages/_app.js` is that global CSS affects all elements on the page.

If you were to navigate from the homepage to the `/posts/first-post` page, global styles from the homepage would affect `/posts/first-post` unintentionally.

You can place the global CSS file anywhere and use any name. So let’s do the following:

- Create a top-level `styles` directory and create `global.css` inside.
- Add the following content to `styles/global.css`. It resets some styles and changes the color of the `a` tag:

```css
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  line-height: 1.6;
  font-size: 18px;
}

* {
  box-sizing: border-box;
}

a {
  color: #0070f3;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

img {
  max-width: 100%;
  display: block;
}
```



Finally, open `pages/_app.js` add import the CSS file like so:

```react
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
```

**If it didn’t work**: Make sure you restart the development server when you add `pages/_app.js`.

**NOTE**: this suffices to import global css to all pages. I.e. by virtue of using `_app.js` in posts, the system knows already to import all of them as global css for all pages. 

##### Update components/layout.module.css

First, open `components/layout.module.css` and replace its content with the following more polished styles for the layout and profile picture:

```css
.container {
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.backToHome {
  margin: 3rem 0 0;
}
```

##### Create styles/utils.module.css

Second, let’s create a set of utility CSS classes for typography and others that will be useful across multiple components.

Let’s add a new CSS file called `styles/utils.module.css` with the following content:

```css
.heading2Xl {
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
}

.headingXl {
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
}

.headingLg {
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
}

.headingMd {
  font-size: 1.2rem;
  line-height: 1.5;
}

.borderCircle {
  border-radius: 9999px;
}

.colorInherit {
  color: inherit;
}

.padding1px {
  padding-top: 1px;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.listItem {
  margin: 0 0 1.25rem;
}

.lightText {
  color: #666;
}
```

##### Update components/layout.js

Third, open `components/layout.js` and replace its content with the following code, **changing** `Your Name` to an actual name:

```react
import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
```

#### Statics

Next.js can serve static files, like images, under a folder called `public` in the root directory. Files inside `public` can then be referenced by your code starting from the base URL (`/`).

# Yarn

## Installation

```bash
> npm install -g yarn
// move into project folder
> cd ~/path/to/folder
// run the following
> yarn set version berry
```

## Updating to the latest versions

Should you later want to update Yarn to the latest version, just run:

```bash
yarn set version latest
```

## Installing the latest build fresh from master

From time to time even the most recent releases aren't enough, and you then will want to try out the very latest master to check if a bug has been fixed. This has become very simple with Yarn 2! Just run the following command:

```bash
yarn set version from sources
```

Similarly, specific PRs can be installed using the `--branch` flag:

```bash
yarn set version from sources --branch 1211
```