const http = require('http');
const fs = require('fs');
//file system module

const server = http.createServer((req,res) => {
    console.log(req.url, req.method)

    //set header content type
    //1.브라우저로 보내는 데이터 타입 명시
    // res.setHeader('Content-Type', 'text/plain')
    res.setHeader('Content-Type', 'text/html')
    
    //send html file
    // res.readFile('./views/index.html', (err, data) => {
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         res.write(data);
    //         res.end();
    //     }
    // })

    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            // res.end();
            res.end(data);
        }
    })


    //2.브라우저에 표시될 메시지
    // res.write('<head><link rel="stylesheet" href="#"/></head>')
    // res.write('<h1>hello, eunjeong</h1>');
    // res.write('<h3>nice</h3>');
    //3.응답 종료
});


//port number
//hostname 
server.listen('3000', 'localhost', () => {
    console.log('server connected on port 3000');
});