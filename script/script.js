const newForm = document.querySelector("form.create");
const addButton = document.querySelector(`.add-message`);
const panel=document.querySelector(".Records");
const textarea = document.querySelector(".input-text");
const userRecordsArray=[];

addButton.addEventListener("click",(e)=>{
    if(textarea.value)
    {
        const userRecord = {
            title:"Запись пользователя",
            value:textarea.value,
            className:"message"
        }
        userRecordsArray.push(userRecord);
		addElement();
    }
});

const addElement=()=>{
	panel.innerHTML="";
	for (const record of userRecordsArray) {
		const newElement = document.createElement("textarea");
		newElement.setAttribute("readonly","");
		newElement.classList.add(record.className);
		newElement.title = record.title;
		newElement.value = record.value;
		panel.append(newElement);
	}
}