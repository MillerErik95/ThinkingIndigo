function toggleProjectInfo(projectId) {
    var info = document.getElementById(projectId);
    if (!info.style.maxHeight || info.style.maxHeight === "0px") {
        info.style.maxHeight = info.scrollHeight + "px";
    } else {
        info.style.maxHeight = "0px";
    }
}

function toggleBlogContent(contentId) {
    var content = document.getElementById(contentId);
    var arrow = document.querySelector('.arrow-down');

    if (!content.style.maxHeight || content.style.maxHeight === "0px") {
        content.style.maxHeight = content.scrollHeight + "px";
        arrow.style.transform = 'rotate(180deg)';
    } else {
        content.style.maxHeight = "0px";
        arrow.style.transform = 'rotate(0deg)'; 
    }
}
