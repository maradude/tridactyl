import * as SELF from "@src/whichkey_frame"
import * as Messaging from "@src/lib/messaging"
import "@src/lib/html-tagged-template"

export function showMappings(prefix: string, vals: Map<string, string>) {
    const div = window.document.getElementById(
        "whichkey-completions",
    ) as HTMLDivElement
    div.innerHTML = ""
    const fragment = document.createDocumentFragment()
    for (const [suffix, target] of vals) {
        const a = html`<div class="BindingsCompletionOption option">
            <span class="name">${suffix}</span>
            <span class="arrow">&rarr;</span>
            <span class="content">${target}</span>
        </div>`
        fragment.appendChild(a)
    }
    div.appendChild(fragment)
}

Messaging.addListener("whichkey_frame", Messaging.attributeCaller(SELF))
