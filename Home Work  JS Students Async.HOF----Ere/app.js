console.log("Home Work");

// 1. Show the average age and average grade of all students combined
// 2. Show the number of students that are over 60 and the number of students that are under 30 years old
// 3. Create a list that will have the firstname lastname and city of the students that are over 30 and have an average grade of 4 and above
// 4. Find the student named Artuh Cador and display all of his information
// 5. Find the oldest and youngest student and display their information on the screen
// 6. Show a list of the full names of students that have a last name longer than 8 characters
// 7. Show a list of the top 10 best students by average grade
// 8. Show on the screen if some users have an average grade of 1 or if all users are adults(above 18)




const studentsHomeWork = async () => {

    const res = await fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
    );
    const data = await res.json();
    console.log("Student HomeWork:", data);


    // 1. Show the average age and average grade of all students combined

    const averageAge = data.reduce((acc, curr) => acc + curr.age / 200, 0);
    const averageGrade = data.reduce((acc, curr) => acc + curr.averageGrade / 200, 0);

    console.log("AverageGrade of Student:", averageGrade);

    console.log("Averaage Age of students:", averageAge);

    // 2. Show the number of students that are over 60 and the number of students that are under 30 years old
    const studentOver60 = data.filter(student => student.age >= 60);
    const studentUnder30 = data.filter(student => student.age <= 30);


    console.log("Student Over 60 years:", studentOver60);
    console.log("Student under 30 years:", studentUnder30);


    // 3. Create a list that will have the firstname lastname and city of the students that are over 30 and have an average grade of 4 and above

    const infoStudent = data.filter(student => student.averageGrade >= 4)
        .map(student => `${student.firstName} ${student.lastName}, Avg Grade: ${student.averageGrade}`)

    console.log("Student with 30 years or above and averagegrade 4 or above", infoStudent);


    // 4. Find the student named Artuh Cador and display all of his information

    const artuh = data.find(student => student.firstName = "Artuh");

    console.log("Find the name Student:", artuh);

    // 5. Find the oldest and youngest student and display their information on the screen


    const studentOldandYoung = data.sort((a, b) => a.age - b.age);
    console.log("Oldest and youngest Student:", studentOldandYoung);

    // 6. Show a list of the full names of students that have a last name longer than 8 characters

    const studentCharacter = data.filter((student) => student.lastName && student.lastName.length > 8);

    console.log("Student with 8 lastname character:", studentCharacter);

    // 7. Show a list of the top 10 best students by average grade

    const top10bestStudent = data.sort((a, b) => a.averageGrade - b.averageGrade)
        .slice(-10);

    console.log("Top 10 best student:", top10bestStudent);


    // 8. Show on the screen if some users have an average grade of 1 or if all users are adults(above 18)

    const infoSomeStudentsHAveONe = data.some(student => student.averageGrade === 1)
    console.log(infoSomeStudentsHAveONe)

    const areAllStudentsAdult = data.every(student => student.age >= 18)
    console.log(areAllStudentsAdult)


    return data;



}
studentsHomeWork();




