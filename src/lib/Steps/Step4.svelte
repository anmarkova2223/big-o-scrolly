<script>
    import Katex from 'svelte-katex';
    import 'katex/dist/katex.min.css';
    import { onMount } from 'svelte';
    import * as d3 from 'd3';
    import { draw } from 'svelte/transition';
    
    var dataLinear = [
    {x:0, y:0},
    {x:1, y:1},
    {x:10, y:10},
    {x:100, y:100}
    ];

    var dataOurCode = [
    {x:0, y: 2},
    {x:10, y: 20},
    {x:100, y: 200},
    {x:1000, y: 2000},
    {x:10000, y: 20000},
    {x:100000, y: 200000},
    ];
    var dataConstant = [
    { x:0, y:1},
    {x:1, y:1},
    {x:10, y:1},
    {x:100, y:1},
    {x:1000, y:1},
    {x:10000, y:1},
    {x:100000, y:1},  
    ]
    var dataSquared = [
    { x:0, y:0},
    {x:1, y:1},
    {x:10, y:100},
    {x:100, y:10000}  
    ]

    var dataLog = [
    {x:1, y:0},
    {x:10, y:1},
    {x:100, y:2},
    {x:1000, y:3},
    {x:10000, y:4},
    {x:100000, y:5},
    ]

    var dataNLogN = [
    {x:1, y:0},
    {x:10, y:10},
    {x:100, y:200},
    {x:1000, y:3000},
    {x:10000, y:40000},
]

    var dataExponential = [{x:0, y:1},{
    x:1, y:2},
    {x:2, y:4},
    {x:3, y:8},
    {x:4, y:16},
    {x:5, y:32},
    {x:6, y:64},
    {x:10, y:1024},]

    let y;
    let x;
    let c = 1;
    let reset=false
    const height= 250;
    const width = 300;
    let svg;

    onMount(async() => {
        const chartDiv = d3.select("#chart");
        svg = chartDiv.append("svg")
        .attr("width", width + 50)
        .attr("height", height + 50);
        setGraph(svg);

    });

    function setGraph(svg){
        //Math.max(...dataSquared.map(num => num.x))
        x = d3.scaleLinear().domain([0, 60]).range([20, width+20]),
        y = d3.scaleLinear().domain([0, 300]).range([height-40, 0]);
        // Title
        // svg.append('text')
        // .attr('x', width/2 + 100)
        // .attr('y', 100)
        // .attr('text-anchor', 'middle')
        // .style('font-family', 'Helvetica')
        // .style('font-size', 20)
        // .text('Line Chart');
        
        // X label
        svg.append('text')
        .attr('x', width/2 + 20)
        .attr('y', height - 5)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 12)
        .text('Size of n');
        
        // Y label
        svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('transform', 'translate(12,' + height/2 + ')rotate(-90)')
        .style('font-family', 'Helvetica')
        .style('font-size', 12)
        .text('Number of Operations');

        svg.append("g")
         .attr("transform", "translate(20," + (height-40) + ")")
         .call(d3.axisBottom(x).tickSize(0).tickSizeOuter(0));
        
        svg.append("g")
            .attr("transform", "translate(40," + (0) + ")")
            .call(d3.axisLeft(y).tickSize(0).tickSizeOuter(0));

        // drawLine(svg, c, dataLinear, "#CC0000");
        // if (lineVisibility[0]) drawLine(svg, 1, dataConstant, "green");
        drawLine(svg, 1, dataOurCode, "black", "ourLine");
        drawLines();
        //drawLine(svg, c, dataConstant, "green");
        // drawLine(svg, c, dataSquared, "blue");

    }
    function drawLine(svg, c, data, color, className="line") {
        var line = d3.line()
            .x(function(d) {console.log(x(d.x));return x(d.x); }) 
            .y(function(d) {return y(c*d.y); }) 
            .curve(d3.curveMonotoneX)
        console.log(line(data))
        svg.append("path")
        .datum(data) 
        .attr("class", className) 
        .attr("transform", "translate(" + 20 + "," + 0 + ")")
        .attr("d", line)
        .style("fill", "none")
        .style("stroke", color)
        .style("stroke-width", "2");

    }

    function drawLines() {
        if (!svg) return;
        svg.selectAll(".line").remove(); // Remove existing lines

        if (lineVisibility[0]) {
            console.log('Drawing line 0');
            drawLine(svg, c, dataConstant, "#6699FF");
        }
        if (lineVisibility[1]) {drawLine(svg, c, dataLog, "#6699FF");}
        if (lineVisibility[2]) {drawLine(svg, c, dataLinear, "#FFCC00");}
        if (lineVisibility[3]) {drawLine(svg, c, dataNLogN, "#FF6600");}
        if (lineVisibility[4]) {drawLine(svg, c, dataSquared, "#CC0000");}
        if (lineVisibility[5]) {drawLine(svg, c, dataExponential, "#CC0000");}
        // if (lineVisibility[3]) {drawLine(svg, c, dataSquared, "blue");}
    }

    function handleSliderChange(event){
        c = event.target.value;
        svg.selectAll("*").remove();
        setGraph(svg);
    }

    function handleCheckboxChange(index, event) {
        //lineVisibility[index] = event.target.checked;
        drawLines();
        console.log(lineVisibility)
    }
    function resetButton(event){
        c = 1;
        lineVisibility = [true, false, false, false, false, false, false]
        // svg.selectAll("*").remove();
        // setGraph(svg);
        drawLines();
    }

    let lineVisibility = [true, false, false, false, false, false, false]

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
        align-items: center;
        text-align: left;
        
    }
    .code.chart {
        /* border: 1px solid red; */
        height: 450px;
        width: 480px;
        margin: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .code.text{
        /* border: 1px solid red; */
        height: 450px;
        width: 480px;
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .formula {
       background-color: #f4f4f4;
       padding-left: 10px;
       border-radius: 5px;
        width: 350px;
        display: flex;
    
    }

</style>

<main class="container">
    <div class="container text">
        <h3>Step 4: Find the highest order term.</h3>
    </div>
    <div class="code-container">
        <div class="code chart">
            <div id="chart"></div>
            <input type="range" min="1" max="20" value={c} on:input={handleSliderChange} class="slider" id="myRange">
            <p><Katex>c</Katex> value: {c}</p>
            <div>
            <input type="checkbox" bind:checked={lineVisibility[0]} on:change={(e) => handleCheckboxChange(0, e)}> <Katex>O(1)</Katex>
            <input type="checkbox" bind:checked={lineVisibility[1]} on:change={(e) => handleCheckboxChange(1, e)}> <Katex>O(log(n))</Katex>
            <input type="checkbox" bind:checked={lineVisibility[2]} on:change={(e) => handleCheckboxChange(2, e)}> <Katex>O(n)</Katex>
            <input type="checkbox" bind:checked={lineVisibility[3]} on:change={(e) => handleCheckboxChange(3, e)}> <Katex>O(nlog(n))</Katex>
            <input type="checkbox" bind:checked={lineVisibility[4]} on:change={(e) => handleCheckboxChange(4, e)}> <Katex>O(n^2)</Katex>
            <input type="checkbox" bind:checked={lineVisibility[5]} on:change={(e) => handleCheckboxChange(5, e)}> <Katex>O(2^n)</Katex>
            <!-- <input type="checkbox" bind:checked={lineVisibility[6]} on:change={(e) => handleCheckboxChange(6, e)}> <Katex>O(n!)</Katex> -->
            </div> 
            <button on:click={resetButton}>Reset</button>   <!-- Add more options as needed -->
        </div>
        <div class="code text">
            <p>Now, remember the official definition of Big O is </p>
            <div class="formula"><p style="text-align: left;"><Katex>f(N) = O(g(N))
            </Katex> if there exists possible constants <Katex>c</Katex>,
             <Katex>N_{0}</Katex> such that <Katex>f(N) \leq c * g(N)</Katex> 
             for all <Katex>N \geq N_{0}</Katex>.</p></div>
            <ul>
                <li>Try checking different time complexities and adjusting the <Katex>C</Katex>. 
                Can you tell what is Big O of this function?</li>
                <li>You may notice that there are multiple functions that fullfil <Katex>f(N) \leq c * g(N)</Katex> 
                    for all <Katex>N \geq N_{0}</Katex>. We want to find the one that has the slowest rate of growth.</li>
                <li>We can usually find a function <Katex>f(n)</Katex> by looking at the fastest growing term.</li>
                <ul>
                    <li>For example if our actual time complexity is described by <Katex>f(n)=n^2+n+3</Katex> then there exists a function <Katex>g(n)=c*n^2</Katex> for some <Katex>c</Katex> which is the upper bound, since <Katex>n^2</Katex> is the fastest growing term.</li>
                </ul>
            </ul>
        </div>
    </div>
</main>