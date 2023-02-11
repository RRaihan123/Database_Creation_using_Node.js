
// dependencies

const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environments = require('./helpers/environments')
const data = require('./lib/data')
// app object - module scaffolding
const app = {};


//For writing data
/* data.create('test','newFile',{name:"rrrr"},(err)=>{
    console.log(`error was`,err)
}) */

//For reading data
/* data.read('test','newFile',(err,data2)=>{
    console.log(err,data2)
}) */

//For updating data
/* data.update('test','newFile',{name1:"rrrr1"},(err)=>{
    console.log(`error was`,err)
}) */


//For deleting data
data.delete('test','newFile',(err)=>{
    console.log(err)
})




// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    
    server.listen(environments.port, () => {
        
        console.log(`listening to port ${environments.port}`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
//app.createServer();