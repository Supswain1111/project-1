function SaveToLocalStorage(event){
    event.preventDefault();
    const AddExpense = event.target.expenseAmount.value;
    const description=event.target.Description.value;
    const category=event.target.category.value
    
    const obj ={
        AddExpense,
        description,
        category
    }
    localStorage.setItem(obj.description,JSON.stringify(obj));
    ShowOnScreen(obj);
}
function ShowOnScreen (obj){
    const parentElement= document.getElementById('Items');
    const childElement = document.createElement('li');
    childElement.textContent = obj.AddExpense+" - "+obj.description +" - "+obj.category;

    const deleteButton = document.createElement('input');
    deleteButton.type = "button";
    deleteButton.value = "Delete Expense";
    const editButton = document.createElement('input');
    editButton.type = "button";
    editButton.value = "Edit Expense";

    deleteButton.onclick = () =>{
        localStorage.removeItem(obj.description);
        parentElement.removeChild(childElement);
    }
    editButton.onclick = () =>{
        localStorage.removeItem(obj.description);
        parentElement.removeChild(childElement);
        document.getElementById('AddExpenseInputTag').value= odj.AddExpense;
        document.getElementById('descriptionInputTag').value= odj.description;
        document.getElementById('categoryInputTag').value= odj.category;

    }
    childElement.appendChild(deleteButton);
    childElement.appendChild(editButton);
    parentElement.appendChild(childElement);
}