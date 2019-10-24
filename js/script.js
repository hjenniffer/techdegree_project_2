/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

//create a variable to store the student list item element
//global variables

const studentListItem = document.getElementsByClassName("student-item");
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


//append page link functions

const appendPageLinks = (list)=>{

   // Determine how many pages are needed for the list store in a variable
   
   const totalNumberofPages = Math.ceil (list.length/itemsPerPage);
   const page = document.querySelector('.page'); 
   const div = document.createElement('div');
   div.className ='pagination';
   page.appendChild(div);
   const ul = document.createElement('ul');
   div.appendChild(ul);



//create a loop to show at the bottom of the pages
for ( let i = 1; i <= totalNumberofPages; i+=1){

const li = document.createElement('li');
const a = document.createElement('a');
a.setAttribute('href', '#');
a.textContent = i;
li.appendChild(a);
ul.appendChild(li);
//set the first li to be acitive
if (i===1){
a.className='active';

}
a.addEventListener('click', e => {

   const link = document.querySelectorAll('a');
   for(let i =0; i < link.length; i++){
      link[i].classList.remove('active');
      e.target.className = 'active';
      showPage(studentListItem,e.target.textContent);


   }




});


}
}




//Dynamically create and append a search bar : extra credit

const pageDiv = document.querySelector('.page-header');
const searchDiv = document.createElement('div');
searchDiv.className = 'student-search';
const input = document.createElement('input');
input.placeholer = 'Search for students';
const searchButton = document.createElement('button');
searchButton.textContent = 'Search';

pageDiv.appendChild(searchDiv);
searchDiv.appendChild(input);
searchDiv.appendChild(searchButton);









appendPageLinks(studentListItem);
showPage(studentListItem,1);





















