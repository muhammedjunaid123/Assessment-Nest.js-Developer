import {
    BaseEntity,
    CreateDateColumn,
    Entity,
  } from 'typeorm';
  import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';

  
  @Entity({ name: 'author' })
  export class Author extends BaseEntity {

    @ApiProperty({ description: 'ObjectId as author ID', example:"507f1f77bcf86cd799439011"})
    _id:ObjectId;
  
    @ApiProperty({ description: 'User name', example: 'Jhon Smith' })
    name: string;
  
    @ApiProperty({
      description: 'User biography',
      example: 'John Smith, born in 1975 in Portland, Oregon, is an acclaimed American novelist. Known for his lyrical prose and exploration of human relationships, his debut novel "Echoes in the Mist" (2005) earned critical acclaim. He resides in Seattle, Washington, continuing to write and advocate for environmental conservation.',
    })
    biography: string;
  
  
    @ApiProperty({ description: 'birthdate of author' })
    @CreateDateColumn()
    birthdate: Date;

  }