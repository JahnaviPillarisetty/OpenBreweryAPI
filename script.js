const apiUrl = "https://raw.githubusercontent.com/openbrewerydb/openbrewerydb/master/breweries.json";
async function getData(){
    try {
        let resp = await fetch(apiUrl);
    let data = await resp.json();    
    console.log(data);
    createTable(data);
    } catch (error) {
        console.log(error);
    }
    
}

getData();
function createTable(data){
    var table = document.createElement('table');
    table.className = 'table';

    var thead = document.createElement('thead');
    thead.className = 'thead-dark';

    var tr = document.createElement('tr');
    var th1 = createtrth('th', 'BREWERY NAME');
    var th2 = createtrth('th', 'BREWERY TYPE');
    var th3 = createtrth('th', 'ADDRESS');
    var th4 = createtrth('th', 'WEBSITE URL');
    var th5 = createtrth('th', 'PHONE NUMBER');
    tr.append(th1, th2, th3, th4,th5);
    thead.append(tr);
    
    loadDetails();

    function loadDetails() {
        table.innerHTML = " ";
        var tbody = document.createElement('tbody');
        for (let i = 0; i < data.length; i++) {
           
            var tr = document.createElement('tr');
            var td1 = createtrth('td', data[i].name);
            var td2 = createtrth('td', data[i].brewery_type);
            var td3 = createtrth('td', data[i].street);
            var td4 = createtrth('td', data[i].website_url);
            var td5 = createtrth('td', data[i].phone);
            tr.append(td1, td2, td3, td4, td5);
            tbody.append(tr);

        }
        table.append(thead,tbody);
        document.body.append(table);
    
    }
     
    function createtrth(elementname, value = " ") {
        var td = document.createElement(elementname);
        td.innerHTML = value;
        return td;
    } 
    
}
