fetch('events/events.csv')
    .then(response => response.text())
    .then(csvString => {
        // Parse the CSV String
        let results = Papa.parse(csvString, { header: true, skipEmptyLines: true });
        let table = document.querySelector('.event-table tbody');
        let rows = '';
        results.data.forEach(event => {
            rows += `<tr class="${event.Type.toLowerCase()}">
                <td>${event.Date}</td>
                <td>${event.Time}</td>
                <td>${event.Event}</td>
                <td>${event.Place}</td>
                <td>${event.Address}</td>
            </tr>`;
        });
        table.innerHTML = rows;
    })
    .catch(error => {
        console.error("Error loading or parsing events.csv:", error);
    });
