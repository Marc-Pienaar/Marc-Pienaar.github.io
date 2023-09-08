// This is an object where you can store hymns by name
var hymns = {
    "Opening Ode": `Hail, Eternal! by Whose aid
All created things were made;
Heav’n and earth Thy vast design;
Hear us, Architect Divine!

May our work, begun in Thee,
Ever blest with order be;
And may we, when labours cease,
Part in harmony and peace.

By Thy glorious Majesty,
By the trust we place in Thee;
By the badge and mystic sign,
Hear us, Architect Divine!

So mote it be.`,

    "Closing Ode": `Abide with me; fast falls the eventide;
The darkness deepens; Lord with me abide.
When other helpers fail and comforts flee;
Help of the helpless, O abide with me.

Swift to its close ebbs out life’s little day;
Earth’s joys grow dim; its glories pass away;
Change and decay in all around I see;
O Thou who changes not, abide with me.

I need Thy presence every passing hour.
What but Thy grace can foil the Tempter’s power?
Who, like Thyself, my guide and stay can be?
Through cloud and sunshine, Lord abide with me.

So mote it be.`
};


function showPopup(hymnName) {
    if (hymns[hymnName]) {
        document.getElementById('popup-title').innerText = hymnName;
        document.getElementById('popup-text').innerHTML = hymns[hymnName].replace(/\n/g, '<br>');  // This will convert newlines to HTML breaks
        document.getElementById('popup-window').style.display = 'block';
    }
}

function closePopup() {
    document.getElementById('popup-window').style.display = 'none';
}
function copyToClipboard() {
    var textToCopy = document.getElementById('popup-text').innerHTML.replace(/<br>/g, '\n');
    var textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Hymn copied to clipboard.');
}



