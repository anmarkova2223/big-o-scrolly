import * as d3 from "d3";
export function funTable(targetElementId) {
    // Define table data
    const tableData = [
        { otherName: "Name:", complexity: "Notation:", wayToRemember: "Fun Saying:" },
        { otherName: "Constant Time", complexity: "O(1)", wayToRemember: "O(Yeah!)" },
        { otherName: "Logarithmic Time", complexity: "O(log n)", wayToRemember: "O(Nice)" },
        { otherName: "Linear Time", complexity: "O(n)", wayToRemember: "O(K)" },
        { otherName: "Quasilinear Time", complexity: "O(n log n)", wayToRemember: "O(K Nice?)" },
        { otherName: "Quadratic Time", complexity: "O(n^2)", wayToRemember: "O(My!)" },
        { otherName: "Exponential Time", complexity: "O(2^n)", wayToRemember: "O(No!)" },
        { otherName: "Factorial Time", complexity: "O(n!)", wayToRemember: "O(MG!)" }
    ];

    // Get the target SVG container
    const svgContainer = d3.select(`#${targetElementId}`);

    // Define SVG container dimensions
    const containerWidth = 900; // New width
    const containerHeight = 600; // New height

    // Update SVG container dimensions
    svgContainer.attr("width", containerWidth)
                .attr("height", containerHeight);

    // Keep inner dimensions unchanged
    const margin = { top: 1000, right: 50, bottom: 50, left: 50};
    const width = containerWidth - margin.left - margin.right;
    const height = containerHeight - margin.top - margin.bottom;

    // Append a group for the table
    const tableGroup = svgContainer.append("g")
                                   .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Append a table element
    const table = tableGroup.append("foreignObject")
                            .attr("width", width)
                            .attr("height", height)
                            .append("xhtml:table")
                            .style("width", "100%");

    // Append table rows
    const rows = table.selectAll("tr")
                      .data(tableData)
                      .enter()
                      .append("xhtml:tr")
                      .style("background-color", (d, i) => {
                          if (i > 0 & i < 3) return "rgba(102, 153, 255, 0.5)"; // First two rows are blue
                          else if (i === 3) return "rgba(255, 204, 0, 0.5)"; // Third row is yellow
                          else if (i === 4) return "rgba(255, 102, 0, 0.5)"; // Fourth row is orange
                          else if (i == 0) return "rgba(255, 102, 0, 0)";
                          else return "rgba(204, 0, 0, 0.5)"; // Rest of the rows are red
                      });

    // Append table data cells
    const cells = rows.selectAll("td")
        .data(d => [d.otherName, d.complexity, d.wayToRemember]) // Add otherName to the data binding
        .enter()
        .append("xhtml:td")
        .style("border", "1px solid black") // Optional: add border to cells
        .style("padding", "8px") // Optional: add padding to cells
        .text(d => d);

    rows.filter((d, i) => i === 0)
        .selectAll("td")
        .style("font-weight", "bold");

    // Apply specific styles to the first column (otherName)
    // cells.filter((d, i) => i === 0)
    //      .style("font-weight", "bold"); // Make the text bold for the first column
}
