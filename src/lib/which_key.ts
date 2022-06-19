import { KeyMap } from "@src/lib/keyseq"
import Logger from "@src/lib/logging"

const logger = new Logger("whichkey")

export function whichKey(keyseq: string, possibleMappings?: KeyMap) {
    logger.debug(keyseq)
    if (possibleMappings?.size === 0) {
        return undefined
    }
    for (const [key, target] of possibleMappings){
        const suffix = key.slice(keyseq.length).map(x => PrintableKey(x)).join("")
        logger.debug(suffix, target)
    }
}

function PrintableKey(k) {
    let result = k.key
    if (
        result === "Control" ||
        result === "Meta" ||
        result === "Alt" ||
        result === "Shift" ||
        result === "OS"
    ) {
        return ""
    }

    if (k.altKey) {
        result = "A-" + result
    }
    if (k.ctrlKey) {
        result = "C-" + result
    }
    if (k.shiftKey) {
        result = "S-" + result
    }
    if (result.length > 1) {
        result = "<" + result + ">"
    }
    return result
}
