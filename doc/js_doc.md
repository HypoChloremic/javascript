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
  function rn(data){
  svg.append('g')
    .selectAll("dot")
    .data(d3.zip(data.x, data.y))
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d[0]); } )
      .attr("cy", function (d) { return y(d[1]); } )
      .attr("r", 10)
      .style("fill", "#69b3a2");

}

var d_ = {
    'x': ["0","1","2","3","4","5"],
    'y': ["0","1","2","3","4","5"]
};
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