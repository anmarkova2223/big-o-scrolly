<script>
    import Katex from 'svelte-katex';
    import 'katex/dist/katex.min.css';
    import { onMount } from 'svelte';
    import {createEventDispatcher} from 'svelte';
    import * as d3 from 'd3';

    let svg;
    let y;
    let x;
    let reset=false
    let stackedData;
    const height= 250;
    const width = 300;
    // Data
    var data = [
    {x:0, const:2, value: 2},
    {x:10, const:2, value: 20},
    {x:100, const:2, value: 200},
    {x:1000, const:2, value: 2000},
    {x:10000, const:2, value: 20000},
    {x:100000, const:2, value: 200000},
    ];

    onMount(async() => {
        const chartDiv = d3.select("#chart-bar");
        svg = chartDiv.append("svg")
        .attr("width", width + 50)
        .attr("height", height + 50);
        setGraph(svg);

    });
function setGraph(svg) {
    svg.selectAll("*").remove();
    // Select the container

    // List of groups = species here = value of the first column called group -> I show them on the X axis
    var groups = d3.map(data, function(d){return(d.x)}).keys()

    // Add X axis
    x = d3.scaleBand()
        .domain(data.map(d => d.x))
        .range([50, width])
        .padding([0.3])
    svg.append("g")
        .attr("transform", "translate(0," + (height) + ")")
        .call(d3.axisBottom(x).tickSizeOuter(0));


    // Add Y axis
    y = d3.scaleLog()
        .domain([1, 2000002])
        .range([height, 0]);
    svg.append("g")
        .attr("transform", "translate(" + 50 + " ,0)")
        .call(d3.axisLeft(y));

    // color palette = one color per subgroup
    var color = d3.scaleOrdinal()
        .domain(['value', 'const'])
        .range(['rgba(204, 0, 0, 1)','rgba(102, 153, 255, 1)'])

    //stack the data? --> stack per subgroup
    stackedData = d3.stack()
        .keys(['const', 'value'])
        (data)

    svg.append("g")
        .selectAll("g")
    // Enter in the stack data = loop key per key = group per group
        .data(stackedData)
        .enter().append("g")
        .attr("fill", function(d) { return color(d.key); })
        .attr("class", function(d) {console.log(d.key); return d.key; })
        .selectAll("rect")
        // enter a second time = loop subgroup per subgroup to add all rectangles
        .data(function(d) { return d; })
        .enter().append("rect")
        .attr("x", function(d) { return x(d.data.x); })
        .attr("y", function(d) {return y(d[1]); })
        .attr("height", function(d) { if (d[0] === 0) { return y(1) - y(d[1]); } else { return y(d[0]) - y(d[1]); } })
        .attr("width",x.bandwidth())
        .on('mouseover', function(event, d) {
        tooltip.transition()
            .duration(200)
            .style("opacity", .9);
        console.log(event);
        tooltip.text(d[1] === 2 ? d[1] : d[1] - 2)
            .attr("x", (x(d.data.x) + x.bandwidth() / 4)) // Position the tooltip in the middle of the bar
            .attr("y", (y(d[1])+10)) // Position the tooltip in the middle of the bar
            .style("font-size", "10px");
            
        })
        .on('mouseout', function(d, i) {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });

        var tooltip = svg.append("text")
            .attr("class", "tooltip")
            .style("opacity", 0);


}

function handleClick() {
    if (!reset) {
        svg.select(".value").selectAll("rect")
        .transition() // Start a transition
            .duration(1000) // Set the duration of the transition to 1000 milliseconds
        .attr("y", function(d) {return y(d[1]-2); })
        .attr("height", function(d) { if (d[0]-2 <= 0) { return y(1) - y(d[1]-2); } else { return y(d[0]-2) - y(d[1]-2); } })
        .on("end", function() { // Add an 'end' event listener to the transition
                svg.select(".const").selectAll("rect")
                    .remove(); // Remove the 'const' rectangles when the transition is complete
            });
        reset = !reset;
    }
    else {
        reset = !reset
        setGraph(svg);
    }
}

</script>

<style>
    .container.text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h3 {
        background-color: #fa96e1;
        border-radius: 5px;
        color: #FFFFFF;
        width: 600px;
        text-align: center;
    }

    pre {
    margin: 0;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 5px;
    overflow-x: auto;
    display: flex;
    justify-content: center;
    }

    pre code {
        text-align: left; /* Ensure code is left-aligned */
    }

    .code-container {
        display: flex;
        justify-content: space-between;
        text-align: left;
    }
    .code.chart {
        /* border: 1px solid red; */
        height: 450px;
        width: 480px;
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .code.text{
        /* border: 1px solid red; */
        height: 450px;
        width: 480px;
        margin: 10px;
    }

</style>

<main class="container">
    <div class="container text">
        <h3>Step 3: Remove Constants.</h3>
    </div>
    <div class="code-container">
        <div id class="code chart">
            <div id="chart-bar"></div>
        </div>
        <div class="code text">
            <p>Let's Plot our time complexity!</p>
            <p>We can now see a linear trend with respect to <Katex>n</Katex>. Remember that Big O is the worst case time complexity. In this case, the worst case is if n is approaching infinity, and as this happens the constants become less relevant.
            This allows us to disregard the constants when calculating Big O. You can click the button below to see what happends when we remove the constants. Notice that the first two bars seem to shift downwards, while the rest
            seem to stay the same height. This is in fact not true; all bars decrease by two, but as <Katex>n</Katex> approaches infinity constant are less relevant so we can ignore them.</p>
            <p>Our Time Complexity: <Katex>{reset ? 'O(2n)' :'O(2n+1)'}</Katex></p>
            <button on:click={handleClick}>{reset ? 'Reset' : 'Remove Constants'}</button>
        </div>
    </div>
</main>