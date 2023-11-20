fetch('events/events.csv')
    .then(response => response.text())
    .then(csvString => {
        // Parse the CSV String
        let results = Papa.parse(csvString, { header: true, skipEmptyLines: true });
        let table = document.querySelector('.event-table tbody');
        let rows = '';

        // Get today's date and set the time to midnight for comparison
        let today = new Date();

        today.setHours(0, 0, 0, 0);

        results.data.forEach(event => {
            // Convert 'DD-MMM-YY' format to 'YYYY-MM-DD' for parsing
            let parts = event.Date.split('-');
            let months = { 'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04', 'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08', 'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12' };
            let year = parseInt(parts[2], 10) + 2000; // Adjust year for 'YY' format
            let month = months[parts[1]];
            let day = parts[0].padStart(2, '0');
            let eventDate = new Date(`${year}-${month}-${day}`);

            if(eventDate >= today) {
                // Add row to the table only if the event date is today or in the future
                rows += `<tr class="${event.Type.toLowerCase()}">
                    <td>${event.Date}</td>
                    <td>${event.Time}</td>
                    <td>${event.Event}</td>
                    <td>${event.Place}</td>
                    <td>${event.Address}</td>
                </tr>`;
            }
        });

        table.innerHTML = rows;
    })
    .catch(error => {
        console.error("Error loading or parsing events.csv:", error);
    });
