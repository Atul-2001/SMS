const baseUri = "http://api.login2explore.com:5577";
const putEndPoint = "/api/iml";
const getEndPoint = "/api/irl";
const token = "90936240|-31948850984245185|90943698";
const dbName = "SMSDB";

const courseDetailForm = document.querySelector("#courseDetail");
if (courseDetailForm) {
    courseDetailForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const jsonObj = JSON.stringify(getFormDataInJson($('#courseDetail')));
        if (jsonObj) {
            try {
                const reqStr = createGET_BY_KEYRequest(token, dbName, "Course", jsonObj, true, true);
                jQuery.ajaxSetup({ async: false });
                let resultObj = executeCommandAtGivenBaseUrl(reqStr, baseUri, getEndPoint);
                jQuery.ajaxSetup({ async: true });
                alert(JSON.stringify(resultObj));
                courseDetailForm.reset();
            } catch (e) {
                alert(e);
            }
        } else {
            alert("json string not availabe");
        }
    });
}

function deleteCourse() {
    const reqId = getFormDataInJson($('#courseDetail')).courseID;
    // No method to delete record based on custom primary key
    if (reqId) {
        try {
            const reqStr = createREMOVERecordRequest(token, dbName, 'Course', reqId);
            alert(JSON.stringify(reqStr));
            jQuery.ajaxSetup({ async: false });
            let resultObj = executeCommandAtGivenBaseUrl(reqStr, baseUri, putEndPoint);
            jQuery.ajaxSetup({ async: true });
            alert(JSON.stringify(resultObj));
            studentDetailForm.reset();
        } catch (e) {
            alert(e);
        }
    } else {
        alert("json string not availabe");
    }
}

const studentDetailForm = document.querySelector("#studentDetail");
if (studentDetailForm) {
    studentDetailForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const jsonObj = JSON.stringify(getFormDataInJson($('#studentDetail')));
        if (jsonObj) {
            try {
                const reqStr = createGET_BY_KEYRequest(token, dbName, "Student", jsonObj, true, true);
                jQuery.ajaxSetup({ async: false });
                let resultObj = executeCommandAtGivenBaseUrl(reqStr, baseUri, getEndPoint);
                jQuery.ajaxSetup({ async: true });
                alert(JSON.stringify(resultObj));
                studentDetailForm.reset();
            } catch (e) {
                alert(e);
            }
        } else {
            alert("json string not availabe");
        }
    });
}

function deleteStudent() {
    const reqId = getFormDataInJson($('#studentDetail')).rollNo;
    // No method to delete record based on custom primary key
    if (reqId) {
        try {
            const reqStr = createREMOVERecordRequest(token, dbName, 'Student', reqId);
            alert(JSON.stringify(reqStr));
            jQuery.ajaxSetup({ async: false });
            let resultObj = executeCommandAtGivenBaseUrl(reqStr, baseUri, putEndPoint);
            jQuery.ajaxSetup({ async: true });
            alert(JSON.stringify(resultObj));
            studentDetailForm.reset();
        } catch (e) {
            alert(e);
        }
    } else {
        alert("json string not availabe");
    }
}

const addStudentForm = document.querySelector("#addStudent");
if (addStudentForm) {
    addStudentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const jsonObj = JSON.stringify(getFormDataInJson($('#addStudent')));
        if (jsonObj) {
            try {
                const reqStr = createPUTRequest(token, jsonObj, dbName, "Student");
                jQuery.ajaxSetup({ async: false });
                let resultObj = executeCommandAtGivenBaseUrl(reqStr, baseUri, putEndPoint);
                jQuery.ajaxSetup({ async: true });
                alert(JSON.stringify(resultObj));
                addStudentForm.reset();
            } catch (e) {
                alert(e);
            }
        } else {
            alert("json string not availabe");
        }
    });
}

function updateStudent() {
    const jsonObj = JSON.stringify(getFormDataInJson($('#addStudent')));
    let reqId = 1; // No method to update record based on custom primary key
    if (jsonObj) {
        try {
            const reqStr = createUPDATERecordRequest(token, jsonObj, dbName, "Student", reqId);
            alert(JSON.stringify(reqStr));
            jQuery.ajaxSetup({ async: false });
            let resultObj = executeCommandAtGivenBaseUrl(reqStr, baseUri, putEndPoint);
            jQuery.ajaxSetup({ async: true });
            alert(JSON.stringify(resultObj));
            addCourseForm.reset();
        } catch (e) {
            alert(e);
        }
    } else {
        alert("json string not availabe");
    }
}

const addCourseForm = document.querySelector("#addCourse");
if (addCourseForm) {
    addCourseForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const jsonObj = JSON.stringify(getFormDataInJson($('#addCourse')));
        if (jsonObj) {
            try {
                const reqStr = createPUTRequest(token, jsonObj, dbName, "Course");
                jQuery.ajaxSetup({ async: false });
                let resultObj = executeCommandAtGivenBaseUrl(reqStr, baseUri, putEndPoint);
                jQuery.ajaxSetup({ async: true });
                alert(JSON.stringify(resultObj));
                addCourseForm.reset();
            } catch (e) {
                alert(e);
            }
        } else {
            alert("json string not availabe");
        }
    });
}

function updateCourse(params) {
    const jsonObj = JSON.stringify(getFormDataInJson($('#addCourse')));
    let reqId = 1; // No method to update record based on custom primary key
    if (jsonObj) {
        try {
            const reqStr = createUPDATERecordRequest(token, jsonObj, dbName, "Course", reqId);
            alert(JSON.stringify(reqStr));
            jQuery.ajaxSetup({ async: false });
            let resultObj = executeCommandAtGivenBaseUrl(reqStr, baseUri, putEndPoint);
            jQuery.ajaxSetup({ async: true });
            alert(JSON.stringify(resultObj));
            addCourseForm.reset();
        } catch (e) {
            alert(e);
        }
    } else {
        alert("json string not availabe");
    }
}