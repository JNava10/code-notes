import { TextEditor } from "./editor.js";


document.addEventListener("DOMContentLoaded", () => {
    const editor = new TextEditor(document.querySelector("#editor"));

    document.querySelector("#add_variable")
        .addEventListener("click", editor.addVariable())

    editor.setup()
});

