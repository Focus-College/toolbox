
let switchStudentGrade = 90;

switch( true ){

    case switchStudentGrade >= 90: {
        console.log("A");
        break;
    }

    case switchStudentGrade >= 80:
        console.log("B");
        break;

    // ...

    default: {
        console.log("F");
    }

}