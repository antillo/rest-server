import express from 'express';
import userRoute from '../routes/usuario';
import cors from 'cors';


class Server{
    private app: express.Application;
    private port: string;
    private apiPath = {
        usuarios: '/api/usuarios'
    }

   
    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.middlewares();
        this.routes();
    }


    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }
    routes(){
        this.app.use(this.apiPath.usuarios, userRoute);
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor iniciado en el puerto ' + this.port);
        })
    }



}
export default Server;