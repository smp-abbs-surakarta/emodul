

function myFunction() {
    $('#myDropdown').toggle();
}

function loadChapter(chapter, title) {
    currentChapter = parseInt(chapter.replace('chapter', '')) - 1;
    document.getElementById("chapterFrame").src = chapterLinks[currentChapter];
    document.getElementById("chapterTitle").innerText = title; // Update chapter title

    // Hide the dropdown menu after selection
    $('#myDropdown').hide();
}

function previousChapter() {
    if (currentChapter > 0) {
        currentChapter--;
        document.getElementById("chapterFrame").src = chapterLinks[currentChapter];
        document.getElementById("chapterTitle").innerText = chapterTitles[currentChapter]; // Update chapter title
    }
}

function nextChapter() {
    if (currentChapter < chapterLinks.length - 1) {
        currentChapter++;
        document.getElementById("chapterFrame").src = chapterLinks[currentChapter];
        document.getElementById("chapterTitle").innerText = chapterTitles[currentChapter]; // Update chapter title
    }
}

function reloadChapter() {
    document.getElementById("chapterFrame").src = chapterLinks[currentChapter]; // Reload current chapter
}

// Load Chapter 1 on initial load
window.onload = function() {
    loadChapter('chapter1', 'Chapter 1');
};

