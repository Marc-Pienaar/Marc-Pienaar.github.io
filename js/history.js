const timelineInput = document.getElementById('timelineInput');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const dateIndicator = document.getElementById('dateIndicator');

const dates = {
    1: '1900',
    2: '1910',
    3: '1950',
    4: '2000',
    5: '2010',
    6: '2023'
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
