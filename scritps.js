function parseTable(file,callback) {
    Papa.parse(file, {
        download: true,
        header: true,
        complete: function(results) {
            callback(results.data)
        }
    })
};

function setTable(){
    parseTable('/season/batting.csv',function(n){
        //$('#table').DataTable({
        //})
        console.log(n)
    });
}

setTable();