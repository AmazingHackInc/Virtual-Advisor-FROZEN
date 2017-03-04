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
            "prerequisites": "[]",
            "courseName": "Introduction to Computing",
            "courseLevel": "1",
            "courseNumber": "1250",
            "studentLevel": "Freshmen",
            "id": 1,
            "required": "true"
        }
    }, {
        "data": {
            "prerequisites": "[1]",
            "courseName": "Programming and Data Structures",
            "courseLevel": "2",
            "courseNumber": "2250",
            "studentLevel": "Sophomore",
            "id": 2,
            "required": "true"
        }
    }, {
        "data": {
            "prerequisites": "[2]",
            "courseName": "Object-Oriented Programming",
            "courseLevel": "2",
            "courseNumber": "2261",
            "studentLevel": "Sophomore",
            "id": 3,
            "required": "true"
        }
    }, {
        "data": {
            "prerequisites": "[2]",
            "courseName": "Computer Organization and Architecture",
            "courseLevel": "2",
            "courseNumber": "2700",
            "studentLevel": "Sophomore",
            "id": 4,
            "required": "true"
        }
    }, {
        "data": {
            "prerequisites": "[4]",
            "courseName": "System Programming and Tools",
            "courseLevel": "2",
            "courseNumber": "2750",
            "studentLevel": "Sophomore",
            "id": 5,
            "required": "true"
        }
    }, {
        "data": {
            "prerequisites": "[3]",
            "courseName": "Web Programming",
            "courseLevel": "3",
            "courseNumber": "3010",
            "studentLevel": "Junior",
            "id": 6,
            "required": "true"
        }
    }, {
        "data": {
            "prerequisites": "[2]",
            "courseName": "Design and Analysis of Algorithms",
            "courseLevel": "3",
            "courseNumber": "3130",
            "studentLevel": "Junior",
            "id": 7,
            "required": "true"
        }
    }, {
        "data": {
            "prerequisites": "[6]",
            "courseName": "Programming Languages",
            "courseLevel": "4",
            "courseNumber": "4250",
            "studentLevel": "Senior",
            "id": 8,
            "required": "true"
        }
    }, {
        "data": {
            "prerequisites": "[5, 7, 8]",
            "courseName": "Program Translation",
            "courseLevel": "4",
            "courseNumber": "4280",
            "studentLevel": "Senior",
            "id": 9,
            "required": "true"
        }
    }, {
        "data": {
            "prerequisites": "[5, 6, 7]",
            "courseName": "Introduction to the Software Profession",
            "courseLevel": "4",
            "courseNumber": "4500",
            "studentLevel": "Senior",
            "id": 10,
            "required": "true"
        }
    }, {"data": {"prerequisites": "[5, 7]", "courseName": "Operating Systems", "courseLevel": "4", "courseNumber": "4760", "studentLevel": "Senior", "id": 11, "required": "true"}}];

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

$(document).ready(function () {
    var cy = cytoscape({
        container: $('#cy'),
        elements: data,
        style: cytoscape.stylesheet()
            .selector('node')
            .css({
                "content": "data(courseName)",
                'background-color': '#aaaaaa',
                // 'width': 'mapData(baz, 0, 10, 10, 40)',
                // 'height': 'mapData(baz, 0, 10, 10, 40)'
            })
            .selector('edge')
            .css({
                'line-color': '#bbbbbb',
                'target-arrow-color': '#cccccc',
                'width': 2,
                'target-arrow-shape': 'triangle',
                'opacity': 0.8,
                "curve-style": "bezier"
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
        }
    });
});