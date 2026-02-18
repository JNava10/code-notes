// from: https://jsfiddle.net/nrx9yvw9/5/
function createRange(node, chars, range) {
    if (!range) {
        range = document.createRange()
        range.selectNode(node);
        range.setStart(node, 0);
    }

    if (chars.count === 0) {
        range.setEnd(node, chars.count);
    } else if (node && chars.count >0) {
        if (node.nodeType === Node.TEXT_NODE) {
            if (node.textContent.length < chars.count) {
                chars.count -= node.textContent.length;
            } else {
                 range.setEnd(node, chars.count);
                 chars.count = 0;
            }
        } else {
            for (var lp = 0; lp < node.childNodes.length; lp++) {
                range = createRange(node.childNodes[lp], chars, range);

                if (chars.count === 0) {
                   break;
                }
            }
        }
   } 

   return range;
};

// original from: https://jsfiddle.net/nrx9yvw9/5/
// (not working)
/**
 * 
 * @param {HTMLElement} element 
 * @param {number} chars 
 */
export function setCurrentCursorPosition(element, chars) {

    if (chars >= 0) {
        var selection = window.getSelection();

        let range = createRange(element.parentNode, { count: chars }, null);

        if (range) {
            range.collapse(false);
            selection.removeAllRanges();
            selection.addRange(range);
        }

        element.focus()
    }
};