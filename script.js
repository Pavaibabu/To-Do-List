const inputBox=document.getElementById('input-box');
const listContainer=document.getElementById('list-container');


function addTask(){
    if (inputBox.value===''){
        alert("You must enter atleast one task");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        // to add remove button
        span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}
inputBox.addEventListener("keypress",function(event)
{
   if (event.key==='Enter')
   {
    addTask();
   }
})
listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//function to store data after refershing the site
function saveData() {
    try {
        localStorage.setItem('data', listContainer.innerHTML);
    } catch (error) {
        console.error('LocalStorage error:', error);
    }
}

function showTask() {
    try {
        listContainer.innerHTML = localStorage.getItem('data');
    } catch (error) {
        console.error('LocalStorage error:', error);
    }
}

showTask();
