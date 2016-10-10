var fs = require("fs");
var fileName = "/MUM/ModernWebApplications/ExpressJs/Lecture5/Inventors/InventorsApp/data/inventorsData.json";

var inventorsInfo = (res)=>{
    var readStream = fs.createReadStream(fileName); 
    let chunkData = "";
    readStream.on("data",function(data){        
        chunkData += data; 
    });

    readStream.on("end",function(){        
        res.render("inventors", {inventorsData:JSON.parse(chunkData),title:"Hello Readers"})
    })
}

module.exports = inventorsInfo;

