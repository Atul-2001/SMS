const baseUri = "http://api.login2explore.com:5577";
const putEndPoint = "/api/iml";
const getEndPoint = "/api/irl";
const connToken = "90936240|-31948850984245185|90943698";
const dbName = "SMSDB";

const addStudentForm = document.querySelector("#addStudent");
if (addStudentForm) {
    addStudentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const jsonObj = JSON.stringify(getFormDataInJson($('form')));
        console.log(jsonObj);
        if (jsonObj) {
            const putReqStr = createPUTRequest(connToken, jsonObj, dbName, "Student");
            jQuery.ajaxSetup({ async: false });
            var resultObj = executeCommandAtGivenBaseUrl(putReqStr, baseUri, putEndPoint);
            jQuery.ajaxSetup({ async: true });
            alert(JSON.stringify(resultObj));
            addStudentForm.reset();
        } else {
            alert("json string not availabe");
        }
    });
}

const addCourseForm = document.querySelector("#addCourse");
if (addCourseForm) {
    addCourseForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const jsonObj = JSON.stringify(getFormDataInJson($('form')));
        if (jsonObj) {
            const putReqStr = createPUTRequest(connToken, jsonObj, dbName, "Course");
            jQuery.ajaxSetup({ async: false });
            var resultObj = executeCommandAtGivenBaseUrl(putReqStr, baseUri, putEndPoint);
            jQuery.ajaxSetup({ async: true });
            alert(JSON.stringify(resultObj));
            addCourseForm.reset();
        } else {
            alert("json string not availabe");
        }
    });
}

const courses = document.querySelector("#course");
fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(result => {
        for (let country of result) {
            const option = document.createElement("option");
            option.value = country.name;
            option.text = country.name;
            courses.appendChild(option);
        }
    })
    .catch(error => console.log("ERROR: " + error));