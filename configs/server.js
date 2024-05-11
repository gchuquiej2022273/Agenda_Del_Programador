'use strict';

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { dbConnection } from "./mongo.js";
import commentRoutes from "../src/comment/comment.routes.js"

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.commnetPath = '/diaryProgrammer/v1/comment'


        this.middlewares();
        this.conectarDB();
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(helmet());
        this.app.use(morgan('dev'));
    }

    routes(){
        this.app.use(this.commnetPath, commentRoutes)
    }

    listen (){
        this.app.listen(this.port, ()=>{
            console.log('server running on port ', this.port);
        });
    }
}

export default Server;