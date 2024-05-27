chrome.contextMenus.create({
    id: "LocalSearch",
    title: "LocalSearch",
    contexts: ["selection"]
})

chrome .contextMenus.onClicked.addListener(function (info, tab) {
    if(info.menuItemId){
        //`${info.menuItemId} ${variableName}`
        const variableName = info.selectionText;
        chrome.tabs.create({ url:`https://www.google.com/maps/search/${variableName}` });
    }
});
