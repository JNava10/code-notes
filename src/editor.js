class TextEditor {

    text = "";
    lastCharacter = "";

    /**
     *
     */
    constructor() {
        super();

    }

    /**
     * 
     * @param {InputEvent} event 
     */
    handleInput = (event) => {
        this.text = event.target.innerText;

        if (!text || text.length === 0) {
            return;
        }

        this.lastCharacter = this.text.at(-1);

        console.log(newCharacter);

        this.checkAutoClose();
    }

    checkAutoClose = () => {
        const compatibleCharacters = new Map()
            .set("{{", "}}")
            .set("(", ")");

        const enclosingCharacter = compatibleCharacters.get(this.lastCharacter);

        if (!enclosingCharacter) {
            return;
        }

        this.text += enclosingCharacter;
    }

}