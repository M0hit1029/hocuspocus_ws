import {Server} from '@hocuspocus/server'

const port1 = process.env.PORT || 8000;

const server = new Server({
    port:port1,
})

server.listen();