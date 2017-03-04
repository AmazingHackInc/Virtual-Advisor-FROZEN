var data = getData();

function getData() {
    //call a service have it return a json body

    var obj = {
        "major": "Computer Science",
        "nodes": [
            {data: {id: "1"}},
            {data: {id: "2"}},
            {data: {id: "3"}}
        ],
        "edges": [
            {data: {source: "1", target: "2"}},
            {data: {source: "2", target: "3"}},
            {data: {source: "3", target: "1"}}
        ]
    };

    return obj;
}

$(function () {
    var cy = window.cy = cytoscape({
        container: document.getElementById('cy'),
        boxSelectionEnabled: true,
        autounselectify: true,

        layout: {
            name: 'dagre'
        },

        style: [
            {
                selector: 'node',
                style: {
                    'content': 'data(id)',
                    'text-opacity': 0.5,
                    'text-valign': 'center',
                    'text-halign': 'right',
                    'background-color': '#aaaaaa'
                }
            },
            {
                selector: 'edge',
                style: {
                    'width': 2,
                    'target-arrow-shape': 'triangle',
                    'line-color': '#bbbbbb',
                    'target-arrow-color': '#bbbbbb',
                    'curve-style': 'bezier'
                }
            }
        ],

        elements: {
            nodes: data.nodes,
            edges: data.edges
        }
    });
    cy.zoomingEnabled( false );
});