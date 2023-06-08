const express = require('express');
const next = require('next');

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.get('/page2', (res, req) => {
            return app.render(res, req, 'page2')
        })

        server.get('/page3', (res, req) => {
            return app.render(res, req, 'ohyeah')
        })

        server.get('*', (res, req) => {
            return handle(res, req)
        })

        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`Ready on http://localhost:${port}`);
    })
})