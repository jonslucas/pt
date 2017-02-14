'use strict';

const expr = require('express'),
      app  = expr(),
      port = process.env.PORT || 3000;

app.use(expr.static('./dist'));

app.use('/', (req, res)=>{
    res.sendFile(process.cwd() + '/build/index.html');
});

app.listen(port, ()=>console.log(`Listening on port: ${port}`));