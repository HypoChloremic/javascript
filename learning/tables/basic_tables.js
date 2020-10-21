// Ali Rassolie 2020
// 
// Attempting to interact with data in a table in html
// NOTE: regarding jquery, do not forget to include it in the head
// of the html document
//
// Use `basic_table_iterate.html`
//

// The JavaScript way to parse a table

function table_process() {
    // The table id in the html document is 'RN_TABLE'
    // It is possible to nest `getElementBy...` 
    // i.e. with the returned object from the `getElement...` it is possible
    // to re-rerun the same method to further filter the object
    var table = document.getElementById('RN_TABLE');
    var table_d = table.getElementsByTagName('td')

    var raw_ar = []
    for (let i = 0; i < table_d.length; i++) {
        raw_ar.push(table_d[i].textContent)
    }
    return raw_ar
}