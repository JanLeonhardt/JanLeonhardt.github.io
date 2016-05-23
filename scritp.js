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
            columns: [
                { title: "Name"},
                { title: "G"},
                { title: "PA"},
                { title: "AB"},
                { title: "R"},
                { title: "H"},
                { title: "B"},
                { title: "1B"},
                { title: "2B"},
                { title: "3B"},
                { title: "HR"},
                { title: "RBI"},
                { title: "AVG"},
                { title: "BB"},
                { title: "Kc"},
                { title: "Ks"},
                { title: "SO"},
                { title: "HBP"},
                { title: "SB"}
            ]
        })
    })
}

setTable();