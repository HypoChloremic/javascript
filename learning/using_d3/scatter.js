//
console.log('[START SEQ]')

// Set the margins of the graph
var margin = {top:10, right:30, bottom:30, left:60};
var width = 460 - margin.left - margin.right;
var height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#container")
            .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");


function scatter_points(data) {

  // Add X axis
  // the .scaleLinear method refers to the generation of an axis
  // 
  var x = d3.scaleLinear()
    .domain([0, 20])
    .range([ 0, width ]);

  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 20])
    .range([ height, 0]);

  svg.append("g")
    .call(d3.axisLeft(y));

  // Add dots
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

scatter_points(d_);

console.log('[END SEQ]')