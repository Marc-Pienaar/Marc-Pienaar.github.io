const timelineInput = document.getElementById('timelineInput');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const dateIndicator = document.getElementById('dateIndicator');

const dates = {
    1: '1895 - 1905',
    2: '1950',
    3: '1960',
    4: '1970',
    5: '2000',
    6: '2010',
    7: '2023'
};

timelineInput.addEventListener('input', updateEventDisplay);

prevButton.addEventListener('click', function() {
    timelineInput.value = parseInt(timelineInput.value) - 1;
    updateEventDisplay();
});

nextButton.addEventListener('click', function() {
    timelineInput.value = parseInt(timelineInput.value) + 1;
    updateEventDisplay();
});

function updateEventDisplay() {
    let value = timelineInput.value;

    // Hide all timeline events
    document.querySelectorAll('.timeline-event').forEach(function(eventElem) {
        eventElem.style.display = 'none';
    });

    // Show the selected event
    document.querySelector(`.timeline-event[data-event="${value}"]`).style.display = 'block';

    // Update date indicator
    dateIndicator.textContent = dates[value];

    // Enable or disable previous/next buttons
    prevButton.disabled = value === timelineInput.min;
    nextButton.disabled = value === timelineInput.max;
}

// Initial call to set up correct button states and date
updateEventDisplay();
