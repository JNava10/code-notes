import { Snippet } from "./snippet.js";
import { setCurrentCursorPosition } from "./utils.js";

const inputTypes = {
    insertion: "insertText"
}

class TextEditor {
    constructor(element) {
        /**
         * @type {HTMLDivElement}
         */
        this.element = element;
    }

    text = "";
    insertedCharacter = "";
    snippet = new Snippet();
    
    setup = () => {
        this.element.addEventListener("input", this.handleInput);
    }

    /**
     * 
     * @param {InputEvent} event 
     */
    handleInput = (event) => {
        this.text = event.target.innerText;

        if (!this.text || this.text.length === 0) {
            return;
        }

        this.insertedCharacter = event.data;

        // This prevents issues at modifying editor text. 
        if (event.inputType !== inputTypes.insertion) {
            return;
        }
        
        // this.#checkAutoClose(); 
    }

    #checkAutoClose = () => {
        const compatibleCharacters = new Map()
            .set("{{", "}}")
            .set("(", ")");

        const enclosingCharacter = compatibleCharacters.get(this.insertedCharacter);
        
        if (!enclosingCharacter) {
            return;
        }        

        this.addToText(enclosingCharacter)
        
        setCurrentCursorPosition(
            this.element, 
            this.element.textContent.length - 2 // Is substracting 2 to move cursor before the last character.
        );
    }

    addToText = (text) => {
        this.element.textContent += text
    }

    addVariable = () => {
        const defaultText = "New variable"
        
        this.snippet.addVariable(defaultText);
    }
}

export {TextEditor}