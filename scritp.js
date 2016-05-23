function parseTable(file,callback) {
    Papa.parse(file, {
        download: true,
        header: false,
        complete: function(results) {
            callback(results.data)
        }
    })
};

function setTable(){
    parseTable('season/batting.csv',function(n){
        console.log(n);
        $('#table').DataTable({
            data: n,
            "searching": false,
            "paging": false,
            "info": false,
            "columnDefs":[
                {"width": "200px", "targets": 0},
                {"targets":[1,2,3,4,5,6,7,8,9,10,11], "width": "150px"}
            ]

        })
    })
}

setTable();