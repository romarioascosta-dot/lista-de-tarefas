function addNewTask() { 
    var list = document.getElementById("list"); 
    var inputElement = document.getElementById("task_text");
    var text = inputElement.value; 
    

    if (text.trim() === "") {
        alert("Por favor, digite uma tarefa válida.");
        return;
    }
    
    var listItem = document.createElement("li"); 
    const textElement = document.createTextNode(text); 
    
    listItem.appendChild(textElement); 
    list.appendChild(listItem); 
    
    
    inputElement.value = "";
    inputElement.focus();
}















// function addNewTask() { 
//     var list = document.getElementById("list"); 
//     var text = document.getElementById("task_name").value; 
//     var listItem = document.createElement("li"); 
//     const textElement = document.createTextNode(text); 
    
//     listItem.appendChild(textElement); 
//     list.appendChild(listItem); 
// }