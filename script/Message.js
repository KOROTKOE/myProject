export class Message {
	constructor(containerElement) {
		this._container = containerElement;
	}

	addMessage(messageText) {
        console.log(messageText);
		if (!messageText) return;
        const container = this._createMessageContainer(messageText);
		this._container.append(container);
	}

    _createMessageContainer(title){
        const textContainer = document.createElement("div");
        textContainer.classList.add("message");
        const messageText = document.createElement("p");
        messageText.textContent = title;
        textContainer.append(messageText);
        return textContainer;
    }
}
