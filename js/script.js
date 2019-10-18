/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

//create a variable to store the student list item element
//global variables

const studentListItem = document.getElementsByClassName("student-item cf");
const itemsPerPage= 10;




/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

// create a function 

const showPage = (list,page) => {

   // Loop over items in the list paramter // create two local constant to store start index and end Index

   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;


//create a for loop

for (let i = 0; i < list.length; i ++){


if (i >= startIndex && i < endIndex){
   list[i].style.display = 'block';
}else{

   list[i].style.display = 'none';
}



}



}

console.log(showPage());






















/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.