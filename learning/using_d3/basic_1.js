// BEAST Harvest report week 50 - 12-18 Dec 2016
var data = [
    {key: "Brainstorm",             value: 7},
    {key: "Design",                 value: 51},
    {key: "Development",            value: 80},
    {key: "Academy",                value: 36},
    {key: "Concepting",             value: 23},
    {key: "Meeting",                value: 23},
    {key: "PM",                     value: 17},
];
var w = window.innerWidth;
var h = window.innerHeight;
var margin = {
    top: 58,
    bottom: 140,
    left: 80,
    right: 40
};
var width = w - margin.left - margin.right;
var height = h - margin.top - margin.bottom;

var x = d3.scale.ordinal()
        .domain(data.map(function(entry){
            return entry.key;
        }))
        .rangeBands([0, width]);
var y = d3.scale.linear()
        .domain([0, d3.max(data, function(d){
            return d.value;
        })])
        .range([height, 0]);
var ordinalColorScale = d3.scale.category20();
var linearColorScale = d3.scale.linear()
                        .domain([0, data.length])
                        .range(["#6000f4", "#F91FBD"]);
var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");
var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");
var yGridlines = d3.svg.axis()
                .scale(y)
                .tickSize(-width,0,0)
                .tickFormat("")
                .orient("left");
var svg = d3.select("#container").append("svg")
            .attr("id", "chart")
            .attr("width", w)
            .attr("height", h);
var chart = svg.append("g")
            .classed("display", true)
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
function plot(params){
    this.append("g")
        .call(params.gridlines)
        .classed("gridline", true)
        .attr("transform", "translate(0,0)")
    this.selectAll(".bar")
        .data(params.data)
        .enter()
            .append("rect")
            .classed("bar", true)
            .attr("x", function(d,i){
                return x(d.key);
            })
            .attr("y", function(d,i){
                return y(d.value);
            })
            .attr("height", function(d,i){
                return height - y(d.value);
            })
            .attr("width", function(d){
                return x.rangeBand();
            })
            .style("fill", function(d,i){
                return linearColorScale(i)
                // return ordinalColorScale(i);
            });
    this.selectAll(".bar-value-label")
        .data(params.data)
        .enter()
            .append("text")
            .classed("bar-value-label", true)
            .attr("x", function(d,i){
                return x(d.key) + (x.rangeBand()/2)
            })
            .attr("dx", 0)
            .attr("y", function(d,i){
                return y(d.value);
            })
            .attr("dy", -6)
            .style("fill", function(d,i){
                return linearColorScale(i)
            })
            .text(function(d){
                return d.value;
            })
    this.append("g")
        .classed("x axis", true)
        .attr("transform", "translate(" + 0 + "," + height + ")")
        .call(params.axis.x)
            .selectAll("text")
                .classed("bar-label", true)
                .style("text-anchor", "end")
                .attr("dx", -8)
                .attr("dy", 8)
                .style("fill", function(d,i){
                    return linearColorScale(i)
                })
                .attr("transform", "translate(0,0) rotate(-45)");

    this.append("g")
        .classed("y axis", true)
        .attr("transform", "translate(0,0)")
        .call(params.axis.y)
            .selectAll("text")
                .classed("bar-label", true);

    this.select(".y.axis")
        .append("text")
        .classed("axis-label", true)
        .attr("x", 0)
        .attr("y", 0)
        .style("text-anchor", "middle")
        .attr("transform", "translate(-50," + height/2 + ") rotate(-90)")
        .text("Hours spent");

    this.select(".x.axis")
        .append("text")
        .classed("axis-label", true)
        .attr("x", 0)
        .attr("y", 0)
        .style("text-anchor", "middle")
        .attr("transform", "translate(" + width/2 + ", 110)")
        .text("Task name");
}
plot.call(chart, {
    data: data,
    axis:{
        x: xAxis,
        y: yAxis
    },
    gridlines: yGridlines
});
