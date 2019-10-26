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

   // Determine how many pages are needed for the list ,store in a variable
   
   const totalNumberofPages = Math.ceil (list.length/itemsPerPage);
   const page = document.querySelector('.page'); 
   const div = document.createElement('div');
   div.className ='pagination';
   page.appendChild(div);
   const ul = document.createElement('ul');
   div.appendChild(ul);



//create a loop to show the pagination at the bottom of the pages
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

//use append Child to diplay on page

pageDiv.appendChild(searchDiv);
searchDiv.appendChild(input);
searchDiv.appendChild(searchButton);

// create searchStudent function to store values for the student name which are in the h3 element

function searchStudents  (searchInput){
 const studentNames = document.querySelectorAll('h3');

 //store the value entered that is entered into the search field

 const searchValue = document.querySelectorAll('input').values;
 // create const set to an empty array that will be assigned a value in the for loop 

 const searchResults = [];

 //create a for loop to go through student names

 for( i= 0; i < studentNames.length; i ++){

   // create query variable to store user input set to all lowercase; This will help validate the data 

   const query = searchInput.toLowerCase();

   //conditinal statement : if results found , add them to result array & display student names
   if (studentNames[i].textContent.toLowerCase().includes(query) 
    && searchInput.length !==0 ) {
       studentNames[i].style.display = 'block';
       searchResults.push(studentListItem[i]);
    }else if(searchInput.length ===0){

      showPage(studentListItem,1);

    }else {

      studentListItem[i].style.display ='none';

    }



    }




  //add no results message if no names are found
  const noResults = document.querySelectorAll('p');
  console.log(noResults);
  if (noResults !== 'null') {
    for (let i = 0; i < noResults.length; i++) {
      noResults[i].remove();
    }
  }
  // check if pagination already exists, if so, remove it (not removing this class adds duplicate paginations)
  const isPaginationActive = document.querySelector('.pagination');
  if (isPaginationActive) {
    isPaginationActive.remove();
  }
  // if no names were found to match the input value, show the no results message
  if (searchInput.length === 0) {
    appendPageLinks(studentListItem);
  } else if (searchResults.length === 0) {
    const page = document.querySelector('.page');
    const noNames = document.createElement('p');
    noNames.textContent = 'No results were found.';
    noNames.style.color = 'red';
    page.appendChild(noNames);
  } else {
    appendPageLinks(searchResults);
    showPage(searchResults, 1);
  }
}

searchButton.addEventListener('click', () => {
  searchStudents(input.value);
});
input.addEventListener('keyup', () => {
  searchStudents(input.value);
});

showPage(studentListItem, 1);
appendPageLinks(studentListItem);





 


































