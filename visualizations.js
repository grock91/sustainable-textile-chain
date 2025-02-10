// D3.js visualizations
function initializeValueChain() {
    const svg = d3.select('#chainVisualization')
        .append('svg')
        .attr('width', '100%')
        .attr('height', 600);
    
    // Create value chain visualization
    drawValueChain(svg);
    drawConnections(svg);
    addInteractivity(svg);
}

function drawValueChain(svg) {
    // Load data and create visualization
    d3.json('assets/data/metrics.json')
        .then(data => {
            // Create stages
            const stages = svg.selectAll('.stage')
                .data(data.stages)
                .enter()
                .append('g')
                .attr('class', 'stage');
            
            // Add visual elements
            stages.append('rect')
                .attr('class', 'stage-box')
                .attr('width', 200)
                .attr('height', 100);
            
            // Add labels and metrics
            stages.append('text')
                .text(d => d.name);
        });
}
