import * as d3 from "d3";

export function plotO1Line(targetElementId, title, instruction) {
    const targetDiv = document.getElementById(targetElementId);
    const containerWidth = 900;
    const containerHeight = 700;

    const svg = d3.select(targetDiv)
        .append("svg")
        .attr("width", containerWidth)
        .attr("height", containerHeight);

    const width = 800;
    const height = 600;
    const margin = { top: 128, right: 50, bottom: 50, left: 100 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const g = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const plotSize = 28;

    const xScale = d3.scaleLinear()
        .domain([0, plotSize])
        .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
        .domain([0, plotSize])
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
        .attr("transform", `translate(${margin.left - 20},${margin.top + innerHeight / 2}) rotate(-90)`)
        .style("text-anchor", "middle")
        .text("Operations");

    svg.append("defs").append("clipPath")
        .attr("id", "clip")
        .append("rect")
        .attr("width", innerWidth)
        .attr("height", innerHeight);

    const o1Line = g.append("line")
        .attr("x1", xScale(0))
        .attr("y1", yScale(1))
        .attr("x2", xScale(plotSize))
        .attr("y2", yScale(1))
        .attr("stroke", "#6699FF")
        .attr("stroke-width", 2)
        .attr("clip-path", "url(#clip)");

    const titleText = svg.append("text")
        .attr("class", "title")
        .attr("transform", `translate(${margin.left + innerWidth / 2},${margin.top - 70})`)
        .style("text-anchor", "middle")
        .style("font-weight", "bold")
        .style("font-size", "20px")
        .text(title);

    const instructionText = svg.append("text")
        .attr("class", "instruction")
        .attr("transform", `translate(${margin.left + innerWidth / 2},${margin.top - 40})`)
        .style("text-anchor", "middle")
        .style("font-style", "italic")
        .text(instruction);
}
