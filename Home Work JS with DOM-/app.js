console.log("Home Wokr Part 1---DOM");

const mainHeadingOne =document.getElementById("mainHeading");

// console.log(mainHeading.innerText);
mainHeadingOne.innerText="This is 'SEDC' school";
console.log(mainHeadingOne);



const mainParagraph=document.getElementsByClassName("paragraph")[0];
// console.log(mainParagraph);
mainParagraph.innerText="This is for JS project!";
console.log(mainParagraph.innerText);



const secondParagraph =document.getElementsByClassName("paragraph second")[0];
secondParagraph.innerText="Now we change from JS";
console.log(secondParagraph.innerText);

const oneText=document.getElementsByTagName("text")[0];
console.log(oneText);
oneText.innerText="We learn JavaScript programimng."
console.log(oneText.innerText);


const lastDivEl= document.getElementsByTagName("h1")[1];
console.log(lastDivEl);
lastDivEl.innerText="This is Change from JS to HTML";
console.log(lastDivEl.innerText);


const lastParagraph=document.getElementsByTagName("h3")[0];
console.log(lastParagraph);
lastParagraph.innerText="Now we just finish the HomeWork.";
console.log(lastParagraph.innerText);








