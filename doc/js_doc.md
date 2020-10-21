# JavaScript

## Basics

### Difference id and class

`id` is used to identify unique elements in html, whereas `class `can be used to identify more than one. 

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