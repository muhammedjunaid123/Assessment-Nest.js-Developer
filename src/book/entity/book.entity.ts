import {
    BaseEntity,
    Entity,
    Column,
    CreateDateColumn,
    ManyToOne,
    ObjectIdColumn
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongodb';


@Entity({ name: 'book' })
export class Book extends BaseEntity {

    @ApiProperty({ description: 'ObjectId as book ID', example: "507f1f77bcf86cd799439011" })
    _id: ObjectId;

    @ApiProperty({ description: 'Title of the book', example: 'Forgotten Quokka: A Tale' })
    title: string;

    @ApiProperty({ description: 'Description of the book', example: 'In Forgotten Quokka: A Tale, embark on a whimsical journey with a charming quokka who unravels the mysteries of a hidden island. Through adventures filled with laughter, friendship, and unexpected twists, this heartwarming story reminds us of the magic in forgotten places.' })
    description?: string;

    @ApiProperty({ description: 'ObjectId of the author', example: "507f1f77bcf86cd799439011" })
    authorId: ObjectId;

    @ApiProperty({ description: 'Published date of the book' })
    publishedDate: Date;
}
