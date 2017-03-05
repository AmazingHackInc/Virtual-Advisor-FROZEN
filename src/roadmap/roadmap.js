var data = getData();
var snapSize = 100;


function getData() {
    return {
        nodes: getNodes(),
        edges: getEdges(getNodes())
    };
}

function getNodes() {
    return [{
        "data": {
            "creditHours": "",
            "prerequisites": "[]",
            "courseName": "",
            "courseLevel": "",
            "courseNumber": "",
            "studentLevel": "",
            "fullCourseNumber": "",
            "id": -1,
            "type": "",
            "required": "false",
            "description": ""
        },
        'selectable': false,
        'grabbable': false,
        'classes': 'left'
    }, {
        "data": {
            "creditHours": "",
            "prerequisites": "[]",
            "courseName": "",
            "courseLevel": "",
            "courseNumber": "",
            "studentLevel": "",
            "fullCourseNumber": "",
            "id": -2,
            "type": "",
            "required": "false",
            "description": ""
        },
        'selectable': false,
        'grabbable': false,
        'classes': 'right'
    }, {
        "data": {
            "creditHours": "",
            "prerequisites": "[]",
            "courseName": "",
            "courseLevel": "",
            "courseNumber": "",
            "studentLevel": "",
            "fullCourseNumber": "",
            "id": -3,
            "type": "",
            "required": "false",
            "description": ""
        },
        'selectable': false,
        'grabbable': false,
        'classes': 'left'
    }, {
        "data": {
            "creditHours": "",
            "prerequisites": "[]",
            "courseName": "",
            "courseLevel": "",
            "courseNumber": "",
            "studentLevel": "",
            "fullCourseNumber": "",
            "id": -4,
            "type": "",
            "required": "false",
            "description": ""
        },
        'selectable': false,
        'grabbable': false,
        'classes': 'right'
    }, {
        "data": {
            "creditHours": "",
            "prerequisites": "[]",
            "courseName": "",
            "courseLevel": "",
            "courseNumber": "",
            "studentLevel": "",
            "fullCourseNumber": "",
            "id": -5,
            "type": "",
            "required": "false",
            "description": ""
        },
        'selectable': false,
        'grabbable': false,
        'classes': 'left'
    }, {
        "data": {
            "creditHours": "",
            "prerequisites": "[]",
            "courseName": "",
            "courseLevel": "",
            "courseNumber": "",
            "studentLevel": "",
            "fullCourseNumber": "",
            "id": -6,
            "type": "",
            "required": "false",
            "description": ""
        },
        'selectable': false,
        'grabbable': false,
        'classes': 'right'
    }, {
        "data": {
            "creditHours": "",
            "prerequisites": "[]",
            "courseName": "",
            "courseLevel": "",
            "courseNumber": "",
            "studentLevel": "",
            "fullCourseNumber": "",
            "id": -7,
            "type": "",
            "required": "false",
            "description": ""
        },
        'selectable': false,
        'grabbable': false,
        'classes': 'left'
    }, {
        "data": {
            "creditHours": "",
            "prerequisites": "[]",
            "courseName": "",
            "courseLevel": "",
            "courseNumber": "",
            "studentLevel": "",
            "fullCourseNumber": "",
            "id": -8,
            "type": "",
            "required": "false",
            "description": ""
        },
        'selectable': false,
        'grabbable': false,
        'classes': 'right'
    }, {
        "data": {
            "creditHours": "",
            "prerequisites": "[]",
            "courseName": "",
            "courseLevel": "",
            "courseNumber": "",
            "studentLevel": "",
            "fullCourseNumber": "",
            "id": -9,
            "type": "",
            "required": "false",
            "description": ""
        },
        'selectable': false,
        'grabbable': false,
        'classes': 'left'
    }, {
        "data": {
            "creditHours": "",
            "prerequisites": "[]",
            "courseName": "",
            "courseLevel": "",
            "courseNumber": "",
            "studentLevel": "",
            "fullCourseNumber": "",
            "id": -10,
            "type": "",
            "required": "false",
            "description": ""
        },
        'selectable': false,
        'grabbable': false,
        'classes': 'right'
    }, {
        "data": {
            "creditHours": "",
            "prerequisites": "[]",
            "courseName": "",
            "courseLevel": "",
            "courseNumber": "",
            "studentLevel": "",
            "fullCourseNumber": "",
            "id": -11,
            "type": "",
            "required": "false",
            "description": ""
        },
        'selectable': false,
        'grabbable': false,
        'classes': 'left'
    }, {
        "data": {
            "creditHours": "",
            "prerequisites": "[]",
            "courseName": "",
            "courseLevel": "",
            "courseNumber": "",
            "studentLevel": "",
            "fullCourseNumber": "",
            "id": -12,
            "type": "",
            "required": "false",
            "description": ""
        },
        'selectable': false,
        'grabbable': false,
        'classes': 'right'
    }, {
        "data": {
            "creditHours": "",
            "prerequisites": "[]",
            "courseName": "",
            "courseLevel": "",
            "courseNumber": "",
            "studentLevel": "",
            "fullCourseNumber": "",
            "id": -13,
            "type": "",
            "required": "false",
            "description": ""
        },
        'selectable': false,
        'grabbable': false,
        'classes': 'left'
    }, {
        "data": {
            "creditHours": "",
            "prerequisites": "[]",
            "courseName": "",
            "courseLevel": "",
            "courseNumber": "",
            "studentLevel": "",
            "fullCourseNumber": "",
            "id": -14,
            "type": "",
            "required": "false",
            "description": ""
        },
        'selectable': false,
        'grabbable': false,
        'classes': 'right'
    }, {
        "data": {
            "creditHours": "",
            "prerequisites": "[]",
            "courseName": "",
            "courseLevel": "",
            "courseNumber": "",
            "studentLevel": "",
            "fullCourseNumber": "",
            "id": -15,
            "type": "",
            "required": "false",
            "description": ""
        },
        'selectable': false,
        'grabbable': false,
        'classes': 'left'
    }, {
        "data": {
            "creditHours": "",
            "prerequisites": "[]",
            "courseName": "",
            "courseLevel": "",
            "courseNumber": "",
            "studentLevel": "",
            "fullCourseNumber": "",
            "id": -16,
            "type": "",
            "required": "false",
            "description": ""
        },
        'selectable': false,
        'grabbable': false,
        'classes': 'right'
    }, {
        "data": {
            "creditHours": "3",
            "prerequisites": "[]",
            "courseName": "Introduction to Computing",
            "courseLevel": "1",
            "courseNumber": "1250",
            "studentLevel": "Freshmen",
            "fullCourseNumber": "CS 1250",
            "id": 1,
            "type": "CS",
            "required": "true",
            "description": "Prerequisites: MATH 1030 with B-or better, or MATH 1100, or MATH 1800, or a 70% on the proctored UMSL ALEKS Math Placement obtained at most one year prior to enrollment in this course. This course provides an introduction to the concepts of computation, problem solving, and computer systems. It covers fundamental programming constructs, basic data types, and modularization using a modern high level language. Problem solving skills are developed through a progression of programming projects."
        }
    }, {
        "data": {
            "creditHours": "3",
            "prerequisites": "[1]",
            "courseName": "Programming and Data Structures",
            "courseLevel": "2",
            "courseNumber": "2250",
            "studentLevel": "Sophomore",
            "fullCourseNumber": "CS 2250",
            "id": 2,
            "type": "CS",
            "required": "true",
            "description": "Prerequisite: CMP SCI 1250. Continuation of CMP SCI 1250. Discusses properties and implementation of abstract data types such as lists, trees, stacks and queues. Introduces procedural and class abstraction, basic program architecture, use of interfaces, modular programming, and file processing."
        }
    }, {
        "data": {
            "creditHours": "3",
            "prerequisites": "[2]",
            "courseName": "Object-Oriented Programming",
            "courseLevel": "2",
            "courseNumber": "2261",
            "studentLevel": "Sophomore",
            "fullCourseNumber": "CS 2261",
            "id": 3,
            "type": "CS",
            "required": "true",
            "description": "Prerequisite: CMP SCI 2250. Introduces object-oriented concepts, terminology, and notation (UML) using Java. Covers encapsulation, classes, objects, inheritance, and the use of class libraries. Additional topics may include graphical user interfaces, applets, and related tools and technologies."
        }
    }, {
        "data": {
            "creditHours": "3",
            "prerequisites": "[2]",
            "courseName": "Computer Organization and Architecture",
            "courseLevel": "2",
            "courseNumber": "2700",
            "studentLevel": "Sophomore",
            "fullCourseNumber": "CS 2700",
            "id": 4,
            "type": "CS",
            "required": "true",
            "description": "Prerequisites: CMP SCI 1250 and CMP SCI 2250 (CMP SCI 2250 can be taken concurrently). This course introduces details of computer systems from architectural and organizational points of view. It covers data representation, basic digital logic circuits, memory types and hierarchies, I/O and storage devices, CPU architectures such as RISC, CISC, parallel, and multi-core."
        }
    }, {
        "data": {
            "creditHours": "3",
            "prerequisites": "[4]",
            "courseName": "System Programming and Tools",
            "courseLevel": "2",
            "courseNumber": "2750",
            "studentLevel": "Sophomore",
            "fullCourseNumber": "CS 2750",
            "id": 5,
            "type": "CS",
            "required": "true",
            "description": "Prerequisites: CMP SCI 2250 and CMP SCI 2700 (CMP SCI 2700 may be taken currently). This course covers systems programming, scripting, libraries, utilities, and development tools. Additional programming topics include piping, binary files, exception handling, command-line arguments and symbolic debugging. This course also explores tools available in the Unix/Linux environments."
        }
    }, {
        "data": {
            "creditHours": "3",
            "prerequisites": "[3]",
            "courseName": "Web Programming",
            "courseLevel": "3",
            "courseNumber": "3010",
            "studentLevel": "Junior",
            "fullCourseNumber": "CS 3010",
            "id": 6,
            "type": "CS",
            "required": "true",
            "description": "Prerequisites: CMP SCI 2261 (or concurrent enrollment). This course provides a survey of current Web technologies including markup languages (such as HTML/XHTML, CSS, XML), client side languages (such as JavaScript), server side languages (such as PERL, PHP), and Web protocols. Client-server computing projects are a course requirement."
        }
    }, {
        "data": {
            "creditHours": "3",
            "prerequisites": "[2]",
            "courseName": "Design and Analysis of Algorithms",
            "courseLevel": "3",
            "courseNumber": "3130",
            "studentLevel": "Junior",
            "fullCourseNumber": "CS 3130",
            "id": 7,
            "type": "CS",
            "required": "true",
            "description": "Prerequisites: CMP SCI 2250, MATH 1320, and MATH 3000. This course addresses the design and analysis of fundamental algorithms in computer science. Studies basic sorting algorithms, priority queues, order statistics, search trees, and hash tables. Analysis techniques may involve time and space complexity analysis of both iterative and recursive algorithms, analysis of algorithm correctness, and amortized complexity analysis. Additional topics may include data compression, string manipulation, greedy algorithms, dynamic programming, and graph traversal."
        }
    }, {
        "data": {
            "creditHours": "3",
            "prerequisites": "[6]",
            "courseName": "Programming Languages",
            "courseLevel": "4",
            "courseNumber": "4250",
            "studentLevel": "Senior",
            "fullCourseNumber": "CS 4250",
            "id": 8,
            "type": "CS",
            "required": "true",
            "description": "Prerequisites: CMP SCI 2261 and CMP SCI 3010; or graduate standing. This course studies the principles, approaches, and trade-offs in modern programming languages, including a comparative study of syntax, semantics, and pragmatics. It also examines major programming paradigms: object-oriented, imperative, functional and logic."
        }
    }, {
        "data": {
            "creditHours": "3",
            "prerequisites": "[5, 7, 8]",
            "courseName": "Program Translation",
            "courseLevel": "4",
            "courseNumber": "4280",
            "studentLevel": "Senior",
            "fullCourseNumber": "CS 4280",
            "id": 9,
            "type": "CS",
            "required": "true",
            "description": "Prerequisites: CMP SCI 2700, CMP SCI 2750, CMP SCI 3130, and CMP SCI 4250, or graduate standing. This course focuses on methods, techniques, and mechanisms used to create the abstraction from high level programming to machine level execution and also requires an individual semester long project."
        }
    }, {
        "data": {
            "creditHours": "3",
            "prerequisites": "[5, 6, 7]",
            "courseName": "Introduction to the Software Profession",
            "courseLevel": "4",
            "courseNumber": "4500",
            "studentLevel": "Senior",
            "fullCourseNumber": "CS 4500",
            "id": 10,
            "type": "CS",
            "required": "true",
            "description": "Prerequisites: CMP SCI 2261, CMP SCI 2750, CMP SCI 3010, and CMP SCI 3130. This course focuses on software development and on the skills required for success in the software profession. Topics related to software development may include software process, models and views, software architectures, documentation, and testing strategies. Topics related to the profession may include ethics, licensing, copyright, trademarks, and professional conduct. Individual and group projects, research, and presentations may be required in this capstone course."
        }
    }, {
        "data": {
            "creditHours": "3",
            "prerequisites": "[5, 7]",
            "courseName": "Operating Systems",
            "courseLevel": "4",
            "courseNumber": "4760",
            "studentLevel": "Senior",
            "fullCourseNumber": "CS 4760",
            "id": 11,
            "type": "CS",
            "required": "true",
            "description": "Prerequisites: CMP SCI 2700, CMP SCI 2750, and CMP SCI 3130; or graduate standing. This course covers the structure of a generic operating system, considering in detail the algorithms for interprocess communication, process scheduling, resource management, memory management, file systems, and device management. It presents examples from contemporary operating systems and requires practical projects implemented within a modern operating system or simulator environment."
        }
    }, {
        "data": {
            "creditHours": "3",
            "prerequisites": "[]",
            "courseName": "Generic Math Course",
            "courseLevel": "1",
            "courseNumber": "1030",
            "studentLevel": "Freshmen",
            "fullCourseNumber": "MAT 1030",
            "id": 12,
            "type": "MAT",
            "required": "true",
            "description": ""
        }
    }, {
        "data": {
            "creditHours": "3",
            "prerequisites": "[]",
            "courseName": "Art 1001 Fun with Finger Paint",
            "courseLevel": "1",
            "courseNumber": "1001",
            "studentLevel": "Freshmen",
            "fullCourseNumber": "ART 1001",
            "id": 13,
            "type": "ART",
            "required": "false",
            "description": "An introduction to the vast world of art. Students will learn the basics of one of the toughest art forms to master - finger painting. We will spend the first 5 weeks of the course learning the proper hand and finger techniques before we actually put paint on a piece of paper. The final exam will involve painting a snowman.",
        },
    }, {
        "data": {
            "creditHours": "",
            "prerequisites": "[]",
            "courseName": "",
            "courseLevel": "",
            "courseNumber": "",
            "studentLevel": "",
            "fullCourseNumber": "",
            "id": -1,
            "type": "",
            "required": "false",
            "description": ""
        },
        "selectable": false,
        "grabbable": false,
        "locked": true
    }];

    // var xhttp = new XMLHttpRequest();
    // xhttp.open("POST", "http://localhost:8080/computer-science/", false);
    // xhttp.setRequestHeader("Content-type", "application/json");
    // xhttp.send();
    // return JSON.parse(xhttp.responseText);
}

function getEdges(theNodes) {
    var obj = [];

    for (var i = 1; i < 17; i += 2) {
        var o =
            {
                "data": {
                    source: -i,
                    target: (-i - 1)
                },
                'selectable': false,
                'grabbable': false,
                "classes": "sem"
            };
        obj.push(o);
    }

    for (var i in theNodes) {
        var data = theNodes[i].data;
        var req = JSON.parse(data.prerequisites);

        for (var i in req) {
            var o =
                {
                    "data": {
                        source: req[i],
                        target: data.id
                    }
                };
            obj.push(o);
        }
    }

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
                "content": "data(fullCourseNumber)",
                'text-valign': 'center',
                'color': 'white',
                'text-outline-width': 2,
                'text-outline-color': '#888'
            })
            .selector('.left')
            .css({
                "left": "100",
                'text-valign': 'center',
                'shape': 'rectangle',
                "width": "10",
                "height": "10",
                "background-color": "#dddddd"
            })
            .selector('.right')
            .css({
                "left": "200",
                'text-valign': 'center',
                'shape': 'rectangle',
                "width": "10",
                "height": "10",
                "background-color": "#dddddd"
            })
            .selector('edge')
            .css({
                'line-color': '#bb9999',
                'target-arrow-color': '#bb9999',
                'width': 2,
                'target-arrow-shape': 'triangle',
                'opacity': 0.8,
                "curve-style": "bezier-unbundled",
                "z-index": 10000
            })
            .selector('.sem')
            .css({
                'line-color': "#dddddd",
                'width': 10
            })
            .selector('.CS')
            .css({
                'background-color': '#962135'
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
                'opacity': 1,
                'content': 'data(courseName)'
            }),
        layout: {
            name: 'dagre'
        },
        wheelSensitivity: 0.2
    });

    cy.elements().each(function (i, ele) {
        if (ele.id() >= 0) {
            if (ele.group() === 'nodes') {
                if (ele.id() == 13) {
                    if (addCustomClass()) {
                        ele.addClass(ele.data().type);
                        snap(ele);
                    } else {
                        cy.remove(ele);
                    }
                } else {
                    ele.addClass(ele.data().type);
                    snap(ele);
                }
            }
        } else {
            ele.addClass('semester');
            // var width = cy.width();
            // var height = cy.height();
            // console.log(width);
            // $('.semester').css("width", 1261);
        }
    });

    spreadOutSemesterLines();

    checkIntegrity();

    checkOverlap();

    cy.zoom({
        level:1.8
    });

    cy.pan({
        x: 500,
        y: 100
    });

    cy.on('tap', function (event) {
        var evtTarget = event.cyTarget;

        if (evtTarget === cy) {
            console.log('tap on background');
        } else {
            console.log('tap on some element');
            $("#desc").text(evtTarget.data().description);
            //description = getElementById('desc');
            //description.innerHTML = evtTarget.description();
        }
    });

    var oldPosX;
    var oldPosY;
    var newPosX;
    var newPosY;
    var selectedNodeId;
    var parents;
    var children;

    cy.on('grab', function (event) {
        var node = event.cyTarget;
        oldPosX = node.position().x;
        oldPosY = node.position().y;

        selectedNodeId = node.id();

        parents = getParents(selectedNodeId);
        children = getChildren(selectedNodeId);
    });

    cy.on('free', function (event) {
        var node = event.cyTarget;
        newPosY = node.position().y;
        newPosX = node.position().x;

        if (newPosX < oldPosX) {
            console.log("moving left");
        } else {
            console.log("moving right");
        }

        if (newPosY < oldPosY) {
            console.log("moving up");
        } else {
            console.log("moving down");
        }

        snap(node);

        parents.forEach(function (parentId) {
            var parent = cy.getElementById(parentId);

            if (node.position().y >= parent.position().y) {
                console.log("Breaking requisite ladder! This node is going beyond a prerequisite! Undoing!");
                node.position('y', oldPosY);
            } else {
            }
        });

        children.forEach(function (childId) {
            var child = cy.getElementById(childId);

            if (node.position().y <= child.position().y) {
                console.log("Breaking requisite ladder! This node is forcing another node beyond a prerequisite! Undoing!");
                node.position('y', oldPosY);
            } else {
            }
        });

        checkOverlap();
    });
});

function getParents(of) {
    var parents = [];

    cy.elements().each(function (i, ele) {
        if (ele.group() === "edges" && ele.source().id() === of) {
            parents.push(ele.target().id());
        }

    });

    return parents;
}

function getChildren(of) {
    var children = [];

    cy.elements().each(function (i, ele) {
        if (ele.group() === "edges" && ele.target().id() === of) {
            children.push(ele.source().id());
        }

    });

    return children;
}

function snap(ele) {
    ele.position('x', snapSize * Math.floor((ele.position().x + snapSize / 2) / snapSize));
    ele.position('y', snapSize * Math.floor((ele.position().y + snapSize / 2) / snapSize));
}

function checkOverlap() {
    var wasAnOverlap = true;
    while (wasAnOverlap) {
        wasAnOverlap = false;
        cy.elements().each(function (i, ele1) {
            if (ele1.group() === 'nodes') {
                if (ele1.id() >= 0) {
                    cy.elements().each(function (j, ele2) {
                        if (j > i) {
                            if (ele2.group() === 'nodes') {
                                if (ele2.id() >= 0) {
                                    if (ele1.position().x === ele2.position().x && ele1.position().y === ele2.position().y) {
                                        wasAnOverlap = true;
                                        ele1.position('x', ele1.position().x + snapSize);
                                    }
                                }
                            }
                        }
                    });
                }
            }
        });
    }
}

function spreadOutSemesterLines() {
    cy.elements().each(function (i, ele) {
        if (ele.id() < 0) {
            if (ele.hasClass('left')) {
                ele.position('y', ele.position().y + (((ele.id() * -1) - 1) * (snapSize / 2)) - 14);
                ele.position('x', -50000);
            } else {
                ele.position('y', ele.position().y + (((ele.id() * -1) - 4) * (snapSize / 2)));
                ele.position('x', 50000);
            }
        }
    });
}

function checkIntegrity() {
    var integrityBreach = true;
    while (integrityBreach) {
        integrityBreach = false;
        cy.elements().each(function (i, ele) {
            if (ele.group() === 'nodes') {
                if (ele.id() >= 0) {
                    var parentIds = getParents(ele.id());
                    for (var index in parentIds) {
                        if (ele.position().y ===
                            cy.getElementById(parentIds[index]).position().y) {
                            integrityBreach = true;

                            cy.getElementById(parentIds[index]).position('y', cy.getElementById(parentIds[index]).position().y + snapSize);
                        }
                    }
                }
            }
        });
    }
}

function addCustomClass() {

    console.log(findGetParameter('id'));
    var course = findGetParameter('id');
    if (course == 'art') {
        return true;
    } else {
        return false;
    }
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}