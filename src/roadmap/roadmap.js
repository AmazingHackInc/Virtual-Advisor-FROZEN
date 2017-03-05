var data = getData();

function getData() {
    return {
        nodes: getNodes(),
        edges: getEdges(getNodes())
    };
}

function getNodes() {
    return [{
        "data": {
            "creditHours": "3",
            "prerequisites": "[]",
            "courseName": "Introduction to Computing",
            "courseLevel": "1",
            "courseNumber": "1250",
            "studentLevel": "Freshmen",
            "id": 1,
            "type": "CS",
            "required": "true"
        }
    }, {
        "data": {
            "creditHours": "3",
            "prerequisites": "[1]",
            "courseName": "Programming and Data Structures",
            "courseLevel": "2",
            "courseNumber": "2250",
            "studentLevel": "Sophomore",
            "id": 2,
            "type": "CS",
            "required": "true"
        }
    }, {
        "data": {
            "creditHours": "3",
            "prerequisites": "[2]",
            "courseName": "Object-Oriented Programming",
            "courseLevel": "2",
            "courseNumber": "2261",
            "studentLevel": "Sophomore",
            "id": 3,
            "type": "CS",
            "required": "true"
        }
    }, {
        "data": {
            "creditHours": "3",
            "prerequisites": "[2]",
            "courseName": "Computer Organization and Architecture",
            "courseLevel": "2",
            "courseNumber": "2700",
            "studentLevel": "Sophomore",
            "id": 4,
            "type": "CS",
            "required": "true"
        }
    }, {
        "data": {
            "creditHours": "3",
            "prerequisites": "[4]",
            "courseName": "System Programming and Tools",
            "courseLevel": "2",
            "courseNumber": "2750",
            "studentLevel": "Sophomore",
            "id": 5,
            "type": "CS",
            "required": "true"
        }
    }, {
        "data": {
            "creditHours": "3",
            "prerequisites": "[3]",
            "courseName": "Web Programming",
            "courseLevel": "3",
            "courseNumber": "3010",
            "studentLevel": "Junior",
            "id": 6,
            "type": "CS",
            "required": "true"
        }
    }, {
        "data": {
            "creditHours": "3",
            "prerequisites": "[2]",
            "courseName": "Design and Analysis of Algorithms",
            "courseLevel": "3",
            "courseNumber": "3130",
            "studentLevel": "Junior",
            "id": 7,
            "type": "CS",
            "required": "true"
        }
    }, {
        "data": {
            "creditHours": "3",
            "prerequisites": "[6]",
            "courseName": "Programming Languages",
            "courseLevel": "4",
            "courseNumber": "4250",
            "studentLevel": "Senior",
            "id": 8,
            "type": "CS",
            "required": "true"
        }
    }, {
        "data": {
            "creditHours": "3",
            "prerequisites": "[5, 7, 8]",
            "courseName": "Program Translation",
            "courseLevel": "4",
            "courseNumber": "4280",
            "studentLevel": "Senior",
            "id": 9,
            "type": "CS",
            "required": "true"
        }
    }, {
        "data": {
            "creditHours": "3",
            "prerequisites": "[5, 6, 7]",
            "courseName": "Introduction to the Software Profession",
            "courseLevel": "4",
            "courseNumber": "4500",
            "studentLevel": "Senior",
            "id": 10,
            "type": "CS",
            "required": "true"
        }
    }, {
        "data": {
            "creditHours": "3",
            "prerequisites": "[5, 7]",
            "courseName": "Operating Systems",
            "courseLevel": "4",
            "courseNumber": "4760",
            "studentLevel": "Senior",
            "id": 11,
            "type": "CS",
            "required": "true"
        }
    }, {
        "data": {
            "creditHours": "3",
            "prerequisites": "[]",
            "courseName": "Generic Math Course",
            "courseLevel": "1",
            "courseNumber": "1030",
            "studentLevel": "Freshmen",
            "id": 12,
            "type": "MAT",
            "required": "true"
        }
    }];


    // var xhttp = new XMLHttpRequest();
    // xhttp.open("POST", "http://localhost:8080/computer-science/", false);
    // xhttp.setRequestHeader("Content-type", "application/json");
    // xhttp.send();
    // return JSON.parse(xhttp.responseText);
}

function getEdges(theNodes) {
    var obj = [];

    for (var i in theNodes) {
        var data = theNodes[i].data;
        var req = JSON.parse(data.prerequisites);

        for (var i in req) {
            var o = {"data": {source: req[i], target: data.id}};
            obj.push(o);
            console.log(req[i]);
        }
    }

    console.log("\n\n\n");
    return obj;
}

var cy;

$(document).ready(function () {
    cy = cytoscape({
        container: $('#cy'),
        elements: data,
        style: cytoscape.stylesheet()
            .selector('node')
            .css({
                "content": "data(courseName)",
            })
            .selector('edge')
            .css({
                'line-color': '#bbbbbb',
                'target-arrow-color': '#bbbbbb',
                'width': 2,
                'target-arrow-shape': 'triangle',
                'opacity': 0.8,
                "curve-style": "bezier"
            })
            .selector('.CS')
            .css({
                'background-color': 'green'
            })
            .selector('.MAT')
            .css({
                'background-color': 'blue'
            })
            .selector(':selected')
            .css({
                'background-color': 'black',
                'line-color': 'black',
                'target-arrow-color': 'black',
                'source-arrow-color': 'black',
                'opacity': 1
            }),
        layout: {
            name: 'dagre'
        },
        wheelSensitivity: 0.2
    });

    cy.elements().each(function (i, ele) {
        if (ele.group() === 'nodes') {
            ele.addClass(ele.data().type);
        }
    });

    cy.on('tap', function (event) {
        var evtTarget = event.cyTarget;

        if (evtTarget === cy) {
            console.log('tap on background');
        } else {
            console.log('tap on some element');
            console.log(evtTarget.id());

        }
    });

    cy.on('grab', function (event) {
        var node = event.cyTarget;
        var nodePosition = node.position();
    });

    cy.on('free', function (event) {
        var node = event.cyTarget;
        var nodePosition = node.position();

        if (nodePosition.y < 0) {

        }
    });
});

function getCoords() {
    cy.elements().each(function (i, ele) {
        if (i === 0)
            console.log(ele.position());
    });
}