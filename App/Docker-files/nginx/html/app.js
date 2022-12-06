let SENSORS = []
const BASE_URL = `http://${HOST}:${PORT}`;

$(document).ready(function() {

    // Create the datatable.
    updateSensors();

    // Manage the form
    $('#sensor-data-form').submit(function(event) {
        // Prevent the form from submitting via the browser.
        event.preventDefault();
        uploadData();
    });

    // Update sensors data
    updateSensorsData();
});

const updateSensors = () => {

    const table = $('#sensors').DataTable({
        "searching": false,
        "paging": false,
        "info": false
    });
    
    fetch(`${BASE_URL}/sensors`)
        .catch(console.log)
        .then(response =>response.json())
        .then(data => {

            SENSORS = data;

            // Update the select
            $('#form-sensor').empty();
            data.forEach(sensor => {
                $('#form-sensor').append(`<option value="${sensor.id}">${sensor.name}</option>`);
            });

            // Update the table
            table.clear();
            const rows = [];
            data.forEach(it => {
                const row = [it.id, it.name, it.sensor_type_id];
                rows.push(row);
            });
            table.rows.add(rows);
            table.draw();
        });
}

const uploadData = () => {

    const form = $('#sensor-data-form');
    const data = form.serializeArray();
    
    let url = `${BASE_URL}/insert?`;
    data.forEach(it => {
        if(it.value == '') throw new Error('All fields are required');

        url += `${it.name}=${it.value}&`;
    });

    console.log(url);
    fetch(url)
        .catch(console.log)
        .then(response =>response.text())
        .then(data => {
            // refresh page
            window.location.reload();
        });
}

const updateSensorsData = () => {

    const table = $('#sensors-data').DataTable({
        "searching": false,
        "paging": true,
        "info": false,
        "pageLength": 5
    });

    fetch(`${BASE_URL}/alldata`)
        .catch(console.log)
        .then(response =>response.json())
        .then(data => {

            // Update the table
            table.clear();
            const rows = [];
            data.forEach(it => {
                const sensor = SENSORS.find(sensor => it.sensor_id == sensor.id);
                const row = [it.id, sensor ? sensor.name : 'No name', it.value, it.created_at];
                rows.push(row);
            });
            table.rows.add(rows);
            table.draw();
        });
}