import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { User } from './user/user.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 8084,
            username: 'root',
            password: 'root',
            database: 'testdb',
            entities: [User],
            synchronize: true,
        }),
    ],
    controllers: [AppController, UserController],
    providers: [AppService, UserService],
})
export class AppModule {
    constructor(private connection: Connection) {}
}
