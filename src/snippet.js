import {Variable} from "./variable.js"

export class Snippet {

    /**
     * @type {Set<Variable>}
     */
    variables = new Map();


    addVariable = (name) => {
        const variable = new Variable(name);
        
        this.variables.add(variable);
    }
}