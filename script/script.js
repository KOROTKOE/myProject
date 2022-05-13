import { Message } from "./Message";

const addButton = document.querySelector(`.add-message`);
const panel=document.querySelector(".Records");
const textarea = document.querySelector(".input-text");

addButton.addEventListener("click",() => {
	const message = new Message(panel);
	const messageText = textarea.value;
	message.addMessage(messageText);
	textarea.value = "";
})