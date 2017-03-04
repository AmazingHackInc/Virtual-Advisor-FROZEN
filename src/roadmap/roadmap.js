var data = getData();

function getData() {
    var obj = {
        "major": "Computer Science",
        nodes: getNodes(),
        edges: getEdges(getNodes())
    };

    return obj;
}

function getNodes() {
    return [{"data":{"prerequisites":"[]","courseName":"Introduction to Computing","courseLevel":"1","courseNumber":"1250","studentLevel":"Freshmen","id":1,"required":"true"}},{"data":{"prerequisites":"[1]","courseName":"Programming and Data Structures","courseLevel":"2","courseNumber":"2250","studentLevel":"Sophomore","id":2,"required":"true"}},{"data":{"prerequisites":"[2]","courseName":"Object-Oriented Programming","courseLevel":"2","courseNumber":"2261","studentLevel":"Sophomore","id":3,"required":"true"}},{"data":{"prerequisites":"[2]","courseName":"Computer Organization and Architecture","courseLevel":"2","courseNumber":"2700","studentLevel":"Sophomore","id":4,"required":"true"}},{"data":{"prerequisites":"[4]","courseName":"System Programming and Tools","courseLevel":"2","courseNumber":"2750","studentLevel":"Sophomore","id":5,"required":"true"}},{"data":{"prerequisites":"[3]","courseName":"Web Programming","courseLevel":"3","courseNumber":"3010","studentLevel":"Junior","id":6,"required":"true"}},{"data":{"prerequisites":"[2]","courseName":"Design and Analysis of Algorithms","courseLevel":"3","courseNumber":"3130","studentLevel":"Junior","id":7,"required":"true"}},{"data":{"prerequisites":"[6]","courseName":"Programming Languages","courseLevel":"4","courseNumber":"4250","studentLevel":"Senior","id":8,"required":"true"}},{"data":{"prerequisites":"[5, 7, 8]","courseName":"Program Translation","courseLevel":"4","courseNumber":"4280","studentLevel":"Senior","id":9,"required":"true"}},{"data":{"prerequisites":"[5, 6, 7]","courseName":"Introduction to the Software Profession","courseLevel":"4","courseNumber":"4500","studentLevel":"Senior","id":10,"required":"true"}},{"data":{"prerequisites":"[5, 7]","courseName":"Operating Systems","courseLevel":"4","courseNumber":"4760","studentLevel":"Senior","id":11,"required":"true"}}];

    // var xhttp = new XMLHttpRequest();
    // xhttp.open("POST", "http://localhost:8080/computer-science/", false);
    // xhttp.setRequestHeader("Content-type", "application/json");
    // xhttp.send();
    // return JSON.parse(xhttp.responseText);
}

//swag
function getEdges(theNodes) {
    var obj = [];

    for (var i in theNodes) {
        var node = theNodes[i];
        console.log(node);
        var data = node.data;
        console.log(data);
        var req = JSON.parse(data.prerequisites);
        console.log(req);

        for (var i in req) {
            var o = {"data": {source: req[i], target: data.id}};
            obj.push(o);
            console.log(req[i]);
        }
    }

    console.log("\n\n\n");
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
                    'content': 'data(courseName)',
                    'text-opacity': 0.5,
                    'text-valign': 'center',
                    'text-halign': 'right',
                    'background-color': '#aaaaaa',
                    'font-size': '8px'
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
    cy.zoomingEnabled(true);
    cy.panningEnabled(true);
});