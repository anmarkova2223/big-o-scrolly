import * as d3 from "d3";

export function plotComplexities(targetElementId, title, instruction) {

    const targetDiv = document.getElementById(targetElementId);

    // Define SVG container dimensions
    const containerWidth = 450; // New width
    const containerHeight = 400; // New height

    // Update SVG container dimensions
    const svg = d3.select(targetDiv)
        .append("svg")
        .attr("width", containerWidth)
        .attr("height", containerHeight);

    // Background color
    // svg.append("rect")
    //   .attr("x", 0)
    //   .attr("y", -10)
    //   .attr("width", containerWidth)
    //   .attr("height", containerHeight)
    //   .attr("fill", "#CCCCCC"); // Adjust the fill color as desired

    // Keep inner dimensions unchanged
    const width = 450; // Inner width
    const height = 400; // Inner height
    const margin = { top: 128, right: 50, bottom: 50, left: 100 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Update positioning of elements based on inner dimensions
    const g = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Adjust clipping path
    svg.select("#clip rect")
        .attr("width", innerWidth)
        .attr("height", innerHeight);

    const plotSize = 28;

    const xScale = d3.scaleLinear()
      .domain([0, plotSize])
      .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
      .domain([0, plotSize])
      .range([innerHeight, 0]);

    const xAxis = d3.axisBottom(xScale)
        .tickFormat("") // This removes the tick labels
        .tickSize(0);   // This removes the tick marks

    const yAxis = d3.axisLeft(yScale)
        .tickFormat("") // This removes the tick labels
        .tickSize(0);   // This removes the tick marks

    svg.append("g")
      .attr("transform", `translate(${margin.left}, ${innerHeight + margin.top})`)
      .call(xAxis);

    svg.append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`)
      .call(yAxis);

    // X Axis Label
    svg.append("text")
        .attr("transform", `translate(${margin.left + innerWidth / 2},${innerHeight + margin.top + 20})`)
        .style("text-anchor", "middle")
        .text("Elements");

    // Y Axis Label
    svg.append("text")
        .attr("transform", `translate(${margin.left - 20},${margin.top + innerHeight / 2}) rotate(-90)`)
        .style("text-anchor", "middle")
        .text("Operations");


    // const g = svg.append("g")
    //   .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Define clipping path
    svg.append("defs").append("clipPath")
      .attr("id", "clip")
      .append("rect")
      .attr("width", innerWidth)
      .attr("height", innerHeight);

    // Label for color meanings
    const colorLegendGroup = svg.append("g")
    .attr("transform", `translate(${innerWidth + margin.left + 55}, ${margin.top + 50})`); // Adjusted positioning

    const colorData = [
    { color: "#CC0000", text: "Horrible" },
    { color: "#FF6600", text: "Bad" },
    { color: "#FFCC00", text: "Fair" },
    { color: "#6699FF", text: "Good" }
    ];

    const legendItems = colorLegendGroup.selectAll("g")
    .data(colorData)
    .enter().append("g")
    .attr("transform", (d, i) => `translate(0, ${i * 25})`);

    legendItems.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 20)
    .attr("height", 20)
    .attr("fill", d => d.color);

    legendItems.append("text")
    .attr("x", 25)
    .attr("y", 15)
    .text(d => d.text)
    .attr("fill", "black")
    .attr("font-size", 16);

    // O(1) line
    const o1Line = g.append("line")
      .attr("x1", xScale(0))
      .attr("y1", yScale(1))
      .attr("x2", xScale(plotSize))
      .attr("y2", yScale(1))
      .attr("stroke", "#6699FF")
      .attr("stroke-width", 2)
      .attr("clip-path", "url(#clip)");

    const o1LabelRect = g.append("rect")
      .attr("x", xScale(plotSize) + 5)
      .attr("y", yScale(1) - 10)
      .attr("width", 40) // Adjust width here
      .attr("height", 20) // Adjust height here
      .attr("fill", "#6699FF")
      .attr("opacity", 0); // Initially invisible

    const o1Label = g.append("text")
      .attr("x", xScale(plotSize) + 10)
      .attr("y", yScale(1) + 5)
      .text("O(1)")
      .attr("fill", "black");

    // O(log n) line
    const oLogNLine = g.append("path")
      .datum(d3.range(1, plotSize + 1))
      .attr("fill", "none")
      .attr("stroke", "#6699FF")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(d => xScale(d))
        .y(d => yScale(Math.log(d)))
      )
      .attr("clip-path", "url(#clip)");

    // O(log n) label
    const oLogNLabelRect = g.append("rect")
        .attr("x", xScale(plotSize) + 7)
        .attr("y", yScale(Math.log(plotSize)) - 10) // Adjusted y position
        .attr("width", 60)
        .attr("height", 20)
        .attr("fill", "#6699FF")
        .attr("opacity", 0); // Initially invisible

    const oLogNLabel = g.append("text")
        .attr("x", xScale(plotSize) + 10)
        .attr("y", yScale(Math.log(plotSize)) + 5) // Adjusted y position
        .text("O(log n)")
        .attr("fill", "black");

    // O(n) line
    const oNLine = g.append("line")
      .attr("x1", xScale(0))
      .attr("y1", yScale(0))
      .attr("x2", xScale(plotSize))
      .attr("y2", yScale(plotSize))
      .attr("stroke", "#FFCC00")
      .attr("stroke-width", 2)
      .attr("clip-path", "url(#clip)");

    const oNLabelRect = g.append("rect")
      .attr("x", xScale(plotSize) + 5)
      .attr("y", yScale(plotSize) - 20)
      .attr("width", 40) // Adjust width here
      .attr("height", 20) // Adjust height here
      .attr("fill", "#FFCC00")
      .attr("opacity", 0); // Initially invisible

    const oNLabel = g.append("text")
      .attr("x", xScale(plotSize) + 10)
      .attr("y", yScale(plotSize) - 5)
      .text("O(n)")
      .attr("fill", "black");

    // O(n log n) line
    const oNLogNLine = g.append("path")
      .datum(d3.range(1, plotSize + 1))
      .attr("fill", "none")
      .attr("stroke", "#FF6600")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(d => xScale(d))
        .y(d => yScale(d * Math.log(d)))
      )
      .attr("clip-path", "url(#clip)");

    const oNLogNLabelRect = g.append("rect")
      .attr("x", 120)
      .attr("y", -25)
      .attr("width", 80) // Adjust width here
      .attr("height", 20) // Adjust height here
      .attr("fill", "#FF6600")
      .attr("opacity", 0); // Initially invisible

    const oNLogNLabel = g.append("text")
      .attr("x", 128)
      .attr("y", -10)
      .text("O(n log n)")
      .attr("fill", "black");

    // O(n^2) line
    const oNSquaredLine = g.append("path")
      .datum(d3.range(0, plotSize + 1))
      .attr("fill", "none")
      .attr("stroke", "#CC0000")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(d => xScale(d))
        .y(d => yScale(d ** 2))
        .curve(d3.curveCardinal)
      )
      .attr("clip-path", "url(#clip)");

    const oNSquaredLabelRect = g.append("rect")
      .attr("x", 65)
      .attr("y", -5)
      .attr("width", 50) // Adjust width here
      .attr("height", 20) // Adjust height here
      .attr("fill", "#CC0000")
      .attr("opacity", 0); // Initially invisible

    const oNSquaredLabel = g.append("text")
      .attr("x", 65)
      .attr("y",10)
      .text("O(n^2)")
      .attr("fill", "black");

    // O(2^n) line
    const oTwoNLine = g.append("path")
      .datum(d3.range(0, plotSize + 1))
      .attr("fill", "none")
      .attr("stroke", "#CC0000")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(d => xScale(d))
        .y(d => yScale(2 ** d))
        .curve(d3.curveCardinal)
      )
      .attr("clip-path", "url(#clip)");

    const oTwoNLabelRect = g.append("rect")
      .attr("x", 50)
      .attr("y", -30)
      .attr("width", 50) // Adjust width here
      .attr("height", 20) // Adjust height here
      .attr("fill", "#CC0000")
      .attr("opacity", 0); // Initially invisible

    const oTwoNLabel = g.append("text")
      .attr("x", 50)
      .attr("y", -15)
      .text("O(2^n)")
      .attr("fill", "black");

    // O(n!) line
    const oNFactorialLine = g.append("path")
      .datum(d3.range(0, 7))
      .attr("fill", "none")
      .attr("stroke", "#CC0000")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(d => xScale(d))
        .y(d => yScale(factorial(d)))
        .curve(d3.curveCardinal)
      )
      .attr("clip-path", "url(#clip)");

    const oNFactorialLabelRect = g.append("rect")
      .attr("x", 5)
      .attr("y", - 25)
      .attr("width", 45) // Adjust width here
      .attr("height", 20) // Adjust height here
      .attr("fill", "#CC0000")
      .attr("opacity", 0); // Initially invisible

    const oNFactorialLabel = g.append("text")
      .attr("x", 10)
      .attr("y", - 10)
      .text("O(n!)")
      .attr("fill", "black");

    // Helper function for factorial
    function factorial(n) {
      if (n === 0 || n === 1) return 1;
      return n * factorial(n - 1);
    }

    // Handle hover events
    const lines = [o1Line, oLogNLine, oNLine, oNLogNLine, oNSquaredLine, oTwoNLine, oNFactorialLine];
    const labelRects = [o1LabelRect, oLogNLabelRect, oNLabelRect, oNLogNLabelRect, oNSquaredLabelRect, oTwoNLabelRect, oNFactorialLabelRect];
    const labels = [o1Label, oLogNLabel, oNLabel, oNLogNLabel, oNSquaredLabel, oTwoNLabel, oNFactorialLabel];
    const colors = ["#6699FF", "#6699FF", "#FFCC00", "#FF6600", "#CC0000", "#CC0000", "#CC0000"];

    lines.forEach((line, index) => {
        const labelRect = labelRects[index];
        const label = labels[index];
        line.on('mouseenter', () => {
          line.attr('stroke-width', 4).attr('stroke', 'black');
          labelRect.attr('opacity', 0.5).attr('fill', colors[index]);
          label.attr('fill', 'black');
        });
      
        line.on('mouseleave', () => {
          line.attr('stroke-width', 2).attr('stroke', colors[index]);
          labelRect.attr('opacity', 0);
          label.attr('fill', 'black');
        });
      });

    // Append title
    svg.append("text")
        .attr("class", "title")
        .attr("transform", `translate(${margin.left + innerWidth / 2},${margin.top - 70})`)
        .style("text-anchor", "middle")
        .style("font-weight", "bold")
        .style("font-size", "20px")
        .text(title);

    // Append instruction
    svg.append("text")
        .attr("class", "instruction")
        .attr("transform", `translate(${margin.left + innerWidth / 2},${margin.top - 40})`)
        .style("text-anchor", "middle")
        .style("font-style", "italic")
        .text(instruction);
    }