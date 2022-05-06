import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'src/database/database.module';
import { parseService } from './parse.service';

@Module({
    
    providers: [ 
        parseService,
        
        
    ]
})
export class parseModule {}



