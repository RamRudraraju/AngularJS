angular.module('studentService', [])
    .factory('StudentService', ['$window', function(window) {  // Registering the New Service by Using ".factory - method".
        var students = [];

        var addStudent = function(student) { // Both of the Buttons Calls the Same Function.
            students.push(student);
        };

        var displayStudents = function() {
            window.alert(students.join('\n'));
            students = [];
        };

       return {                     // Returning an Object.// This Can be A function.
            addStudent: addStudent,
            displayStudents: displayStudents
        }; 
    }]);
