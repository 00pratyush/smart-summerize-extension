chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get(["geminiApiKey"], (result) => {       //sync=for all browser user/sessions, local=for single session
        if(!result.geminiApiKey) {
            chrome.tabs.create({ url: "options.html" })
        }
    })
})