import * as d3 from "d3";

export function plotOLogNLine(targetElementId, title, instruction) {
    const targetDiv = document.getElementById(targetElementId);

    // Clear SVG element
    while (targetDiv.firstChild) {
        targetDiv.removeChild(targetDiv.firstChild);
    }

    const containerWidth = 400; // Adjusted width
    const containerHeight = 200; // Adjusted height

    const svg = d3.select(targetDiv)
        .append("svg")
        .attr("width", containerWidth)
        .attr("height", containerHeight)
        .style("display", "block") // Ensure SVG is displayed as a block element
        .style("margin", "0 auto"); // Center SVG horizontally

    const width = 300; // Adjusted width
    const height = 200; // Adjusted height
    const margin = { top: 30, right: 30, bottom: 30, left: 30 }; // Adjusted margin
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const g = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const plotSize = 20; // Adjusted plot size

    const xScale = d3.scaleLinear()
        .domain([0, plotSize])
        .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
        .domain([0, Math.log2(plotSize)]) // Adjusted domain
        .range([innerHeight, 0]);

    const xAxis = d3.axisBottom(xScale)
        .tickFormat("")
        .tickSize(0);

    const yAxis = d3.axisLeft(yScale)
        .tickFormat("")
        .tickSize(0);

    svg.append("g")
        .attr("transform", `translate(${margin.left}, ${innerHeight + margin.top})`)
        .call(xAxis);

    svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`)
        .call(yAxis);

    svg.append("text")
        .attr("transform", `translate(${margin.left + innerWidth / 2},${innerHeight + margin.top + 20})`)
        .style("text-anchor", "middle")
        .text("Elements");

    svg.append("text")
        .attr("transform", `translate(${margin.left - 15},${margin.top + innerHeight / 2}) rotate(-90)`)
        .style("text-anchor", "middle")
        .text("Operations");

    svg.append("defs").append("clipPath")
        .attr("id", "clip")
        .append("rect")
        .attr("width", innerWidth)
        .attr("height", innerHeight);

    const oLogNLine = g.append("path")
        .datum(d3.range(1, plotSize + 1))
        .attr("fill", "none")
        .attr("stroke", "#6699FF")
        .attr("stroke-width", 2)
        .attr("d", d3.line()
            .x(d => xScale(d))
            .y(d => yScale(Math.log(d))) // Adjusted y position
        )
        .attr("clip-path", "url(#clip)")
        .on("mouseover", function() { // Add mouseover event handler
            d3.select(this).attr("stroke-width", 4); // Increase stroke width on mouseover
            g.append("text") // Append text element on mouseover
                .attr("class", "hover-text")
                .attr("x", xScale(plotSize) - 10) // Adjust position relative to the line
                .attr("y", yScale(Math.log(plotSize)) + 60) // Adjust position relative to the line
                .style("text-anchor", "end")
                .text("This is zoomed in!");
        })
        .on("mouseout", function() { // Add mouseout event handler
            d3.select(this).attr("stroke-width", 2); // Reset stroke width on mouseout
            g.select(".hover-text").remove(); // Remove the hover text on mouseout
        });

    const titleText = svg.append("text")
        .attr("class", "title")
        .attr("transform", `translate(${margin.left + innerWidth / 2},${margin.top - 15})`)
        .style("text-anchor", "middle")
        .style("font-weight", "bold")
        .style("font-size", "16px")
        .text(title);

    const instructionText = svg.append("text")
        .attr("class", "instruction")
        .attr("transform", `translate(${margin.left + innerWidth / 2},${margin.top + 7})`)
        .style("text-anchor", "middle")
        .style("font-style", "italic")
        .text(instruction);
}
