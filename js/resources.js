// This is an object where you can store hymns by name
var hymns = {
    "Opening Hymn": `Hymn lyrics line 1
Hymn lyrics line 2
Hymn lyrics line 3`,
    "Closing Hymn": `Closing hymn line 1
Closing hymn line 2`
};


function showPopup(hymnName) {
    if (hymns[hymnName]) {
        document.getElementById('popup-title').innerText = hymnName;
        document.getElementById('popup-text').innerText = hymns[hymnName].replace(/\n/g, '<br>');  // This will convert newlines to HTML breaks
        document.getElementById('popup-window').style.display = 'block';
    }
}

function closePopup() {
    document.getElementById('popup-window').style.display = 'none';
}
function copyToClipboard() {
    // Get the content you want to copy
    let contentToCopy = document.querySelector('.popup-content').innerHTML;

    // Use the Clipboard API to write the content to the clipboard
    navigator.clipboard.writeText(contentToCopy).then(function() {
        alert('Content copied to clipboard!');
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
    });
}

