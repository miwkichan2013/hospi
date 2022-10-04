chrome.runtime.onMessage.addListener((request) => {
    const contentScript = new ContentScript();

    switch (request.action) {
        case "browser_action_click":
            contentScript.injectIframe();
            break;
        // remove codes from brevity
    }
    return true;
})

    export class ContentScript {
        injectIframe() {
            const iframe = document.createElement("iframe");

            iframe.setAttribute("id", "popup-iframe");
            iframe.src = chrome.runtime.getURL("index.html");

            // inject
            if (document.body) {
                document.body.insertBefore(iframe, document.body.lastChild);
            }

            iframe.onload = () => {
                iframe.style.height = "428px";
            }
        }
    }