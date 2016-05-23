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
        $('#batting').DataTable({
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
    parseTable('season/pitching.csv',function(n){
        console.log(n);
        $('#pitching').DataTable({
            data: n,
            "searching": false,
            "paging": false,
            "info": false,
            columns: [
                { title: "Name"},
                { title: "G"},
                { title: "W"},
                { title: "L"},
                { title: "SV"},
                { title: "IP"},
                { title: "BF"},
                { title: "Ball"},
                { title: "Str"},
                { title: "PIT"},
                { title: "R"},
                { title: "RA"},
                { title: "ER"},
                { title: "ERA"},
                { title: "K"},
                { title: "Kc"},
                { title: "Ks"},
                { title: "H"},
                { title: "BB"}
            ]
        })
    })
}

setTable();