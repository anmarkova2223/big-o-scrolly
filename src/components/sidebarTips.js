import * as d3 from "d3";

export function plotComplexities(targetElementId, title) {

    const targetDiv = document.getElementById(targetElementId);

    // Define SVG container dimensions
    const containerWidth = 300; // New width
    const containerHeight = 250; // New height

    // Update SVG container dimensions
    const svg = d3.select(targetDiv)
        .append("svg")
        .attr("width", containerWidth)
        .attr("height", containerHeight);

    // Keep inner dimensions unchanged
    const width = 250; // Inner width
    const height = 200; // Inner height
    const margin = { top: 42, right: 17, bottom: 17, left: 34 };
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
        .attr("transform", `translate(${margin.left + innerWidth / 2},${innerHeight + margin.top + 15})`)
        .style("text-anchor", "middle")
        .text("Elements")
        .attr("font-size", "13px"); // Adjusted font size for 1/3 size

    // Y Axis Label
    svg.append("text")
        .attr("transform", `translate(${margin.left - 14},${margin.top + innerHeight / 2}) rotate(-90)`)
        .style("text-anchor", "middle")
        .text("Operations")
        .attr("font-size", "13px"); // Adjusted font size for 1/3 size

    // Define clipping path
    svg.append("defs").append("clipPath")
        .attr("id", "clip")
        .append("rect")
        .attr("width", innerWidth)
        .attr("height", innerHeight);

    // Label for color meanings
    const colorLegendGroup = svg.append("g")
        .attr("transform", `translate(${innerWidth + margin.left + 14}, ${margin.top + 22})`); // Adjusted positioning

    const colorData = [
        { color: "#CC0000", text: "Horrible" },
        { color: "#FF6600", text: "Bad" },
        { color: "#FFCC00", text: "Fair" },
        { color: "#6699FF", text: "Good" }
    ];

    const legendItems = colorLegendGroup.selectAll("g")
        .data(colorData)
        .enter().append("g")
        .attr("transform", (d, i) => `translate(0, ${i * 12})`); // Adjusted spacing

    legendItems.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 10) // Adjusted width for 1/3 size
        .attr("height", 10) // Adjusted height for 1/3 size
        .attr("fill", d => d.color);

    legendItems.append("text")
        .attr("x", 14) // Adjusted x position for 1/3 size
        .attr("y", 7) // Adjusted y position for 1/3 size
        .text(d => d.text)
        .attr("fill", "black")
        .attr("font-size", "10px"); // Adjusted font size for 1/3 size

    // O(1) line
    const o1Line = g.append("line")
        .attr("x1", xScale(0))
        .attr("y1", yScale(1))
        .attr("x2", xScale(plotSize))
        .attr("y2", yScale(1))
        .attr("stroke", "#6699FF")
        .attr("stroke-width", 1)
        .attr("clip-path", "url(#clip)");

    const o1LabelRect = g.append("rect")
        .attr("x", xScale(plotSize) + 1)
        .attr("y", 128) // Adjusted y position for 1/3 size
        .attr("width", 22) // Adjusted width for 1/3 size
        .attr("height", 13) // Adjusted height for 1/3 size
        .attr("fill", "#6699FF")
        .attr("opacity", 0); // Initially invisible

    const o1Label = g.append("text")
        .attr("x", xScale(plotSize) + 1.67) // Adjusted x position for 1/3 size
        .attr("y", yScale(1) + 2) // Adjusted y position for 1/3 size
        .text("O(1)")
        .attr("fill", "black")
        .attr("font-size", "10px"); // Adjusted font size for 1/3 size

    // O(log n) line
    const oLogNLine = g.append("path")
        .datum(d3.range(1, plotSize + 1))
        .attr("fill", "none")
        .attr("stroke", "#6699FF")
        .attr("stroke-width", 1)
        .attr("d", d3.line()
            .x(d => xScale(d))
            .y(d => yScale(Math.log(d)))
        )
        .attr("clip-path", "url(#clip)");

    const oLogNLabelRect = g.append("rect")
        .attr("x", xScale(plotSize) + 1)
        .attr("y", 117) // Adjusted y position for 1/3 size
        .attr("width", 38) // Adjusted width for 1/3 size
        .attr("height", 13) // Adjusted height for 1/3 size
        .attr("fill", "#6699FF")
        .attr("opacity", 0); // Initially invisible

    const oLogNLabel = g.append("text")
        .attr("x", xScale(plotSize) + 1.67) // Adjusted x position for 1/3 size
        .attr("y", yScale(Math.log(plotSize)) + 2) // Adjusted y position for 1/3 size
        .text("O(log n)")
        .attr("fill", "black")
        .attr("font-size", "10px"); // Adjusted font size for 1/3 size

    // O(n) line
    const oNLine = g.append("line")
        .attr("x1", xScale(0))
        .attr("y1", yScale(0))
        .attr("x2", xScale(plotSize))
        .attr("y2", yScale(plotSize))
        .attr("stroke", "#FFCC00")
        .attr("stroke-width", 1)
        .attr("clip-path", "url(#clip)");

    const oNLabelRect = g.append("rect")
        .attr("x", xScale(plotSize) + 1)
        .attr("y", -16) // Adjusted y position for 1/3 size
        .attr("width", 20) // Adjusted width for 1/3 size
        .attr("height", 13) // Adjusted height for 1/3 size
        .attr("fill", "#FFCC00")
        .attr("opacity", 0); // Initially invisible

    const oNLabel = g.append("text")
        .attr("x", xScale(plotSize) + 1.67) // Adjusted x position for 1/3 size
        .attr("y", -6) // Adjusted y position for 1/3 size
        .text("O(n)")
        .attr("fill", "black")
        .attr("font-size", "10px"); // Adjusted font size for 1/3 size

    // O(n log n) line
    const oNLogNLine = g.append("path")
        .datum(d3.range(1, plotSize + 1))
        .attr("fill", "none")
        .attr("stroke", "#FF6600")
        .attr("stroke-width", 1)
        .attr("d", d3.line()
            .x(d => xScale(d))
            .y(d => yScale(d * Math.log(d)))
        )
        .attr("clip-path", "url(#clip)");

    const oNLogNLabelRect = g.append("rect")
        .attr("x", 85)
        .attr("y", -16) // Adjusted y position for 1/3 size
        .attr("width", 50) // Adjusted width for 1/3 size
        .attr("height", 13) // Adjusted height for 1/3 size
        .attr("fill", "#FF6600")
        .attr("opacity", 0); // Initially invisible

    const oNLogNLabel = g.append("text")
        .attr("x", 90) // Adjusted x position for 1/3 size
        .attr("y", -6) // Adjusted y position for 1/3 size
        .text("O(n log n)")
        .attr("fill", "black")
        .attr("font-size", "10px"); // Adjusted font size for 1/3 size

    // O(n^2) line
    const oNSquaredLine = g.append("path")
        .datum(d3.range(0, plotSize + 1))
        .attr("fill", "none")
        .attr("stroke", "#CC0000")
        .attr("stroke-width", 1)
        .attr("d", d3.line()
            .x(d => xScale(d))
            .y(d => yScale(d ** 2))
            .curve(d3.curveCardinal)
        )
        .attr("clip-path", "url(#clip)");

    const oNSquaredLabelRect = g.append("rect")
        .attr("x", 55)
        .attr("y", -16) // Adjusted y position for 1/3 size
        .attr("width", 32) // Adjusted width for 1/3 size
        .attr("height", 13) // Adjusted height for 1/3 size
        .attr("fill", "#CC0000")
        .attr("opacity", 0); // Initially invisible

    const oNSquaredLabel = g.append("text")
        .attr("x", 57) // Adjusted x position for 1/3 size
        .attr("y", -6) // Adjusted y position for 1/3 size
        .text("O(n^2)")
        .attr("fill", "black")
        .attr("font-size", "10px"); // Adjusted font size for 1/3 size

    // O(2^n) line
    const oTwoNLine = g.append("path")
        .datum(d3.range(0, plotSize + 1))
        .attr("fill", "none")
        .attr("stroke", "#CC0000")
        .attr("stroke-width", 1)
        .attr("d", d3.line()
            .x(d => xScale(d))
            .y(d => yScale(2 ** d))
            .curve(d3.curveCardinal)
        )
        .attr("clip-path", "url(#clip)");

    const oTwoNLabelRect = g.append("rect")
        .attr("x", 24)
        .attr("y", -16) // Adjusted y position for 1/3 size
        .attr("width", 33) // Adjusted width for 1/3 size
        .attr("height", 13) // Adjusted height for 1/3 size
        .attr("fill", "#CC0000")
        .attr("opacity", 0); // Initially invisible

    const oTwoNLabel = g.append("text")
        .attr("x", 26) // Adjusted x position for 1/3 size
        .attr("y", -6) // Adjusted y position for 1/3 size
        .text("O(2^n)")
        .attr("fill", "black")
        .attr("font-size", "10px"); // Adjusted font size for 1/3 size

    // O(n!) line
    const oNFactorialLine = g.append("path")
        .datum(d3.range(0, 7))
        .attr("fill", "none")
        .attr("stroke", "#CC0000")
        .attr("stroke-width", 1)
        .attr("d", d3.line()
            .x(d => xScale(d))
            .y(d => yScale(factorial(d)))
            .curve(d3.curveCardinal)
        )
        .attr("clip-path", "url(#clip)");

    const oNFactorialLabelRect = g.append("rect")
        .attr("x", -2)
        .attr("y", -16) // Adjusted y position for 1/3 size
        .attr("width", 27) // Adjusted width for 1/3 size
        .attr("height", 13) // Adjusted height for 1/3 size
        .attr("fill", "#CC0000")
        .attr("opacity", 0); // Initially invisible

    const oNFactorialLabel = g.append("text")
        .attr("x", 0) // Adjusted x position for 1/3 size
        .attr("y", - 6) // Adjusted y position for 1/3 size
        .text("O(n!)")
        .attr("fill", "black")
        .attr("font-size", "10px"); // Adjusted font size for 1/3 size

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
            line.attr('stroke-width', 2).attr('stroke', 'black');
            labelRect.attr('opacity', 0.5).attr('fill', colors[index]);
            label.attr('fill', 'black');
        });

        line.on('mouseleave', () => {
            line.attr('stroke-width', 1).attr('stroke', colors[index]);
            labelRect.attr('opacity', 0);
            label.attr('fill', 'black');
        });
    });

    // Append title
    svg.append("text")
        .attr("class", "title")
        .attr("transform", `translate(${margin.left + innerWidth / 2},${margin.top - 30})`)
        .style("text-anchor", "middle")
        .style("font-weight", "bold")
        .style("font-size", "15px")
        .text(title);
}
