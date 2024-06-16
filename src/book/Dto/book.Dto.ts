import { ApiProperty } from '@nestjs/swagger';
import {
    IsDate,
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsObject,
    IsString,

} from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateBookDto {
    @ApiProperty({
        description: 'The title of the book',
        example: 'Forgotten Quokka: A Tale'
    })
    @IsString()
    @IsNotEmpty()
    title: string

    @ApiProperty({
        description: 'The description of the book',
        example: 'In Forgotten Quokka: A Tale, embark on a whimsical journey with a charming quokka who unravels the mysteries of a hidden island. Through adventures filled with laughter, friendship, and unexpected twists, this heartwarming story reminds us of the magic in forgotten places.'
    })
    @IsString()
    description: string

    @ApiProperty({
        description: 'The authorId of the book',
        example: '507f1f77bcf86cd799439011'
    })
    @IsObject()
    @IsNotEmpty()
    authorId: ObjectId;

    @ApiProperty({
        description: 'The publishedDate of the book',
        example: 'July 15, 1975'
    })
    @IsObject()
    @IsNotEmpty()
    publishedDate: Date;

}

export class UpdateBookDto {
    @ApiProperty({
        description: 'The objectid of the book',
        example: '507f1f77bcf86cd799439011'
    })
    @IsObject()
    @IsNotEmpty()
    _id: ObjectId

    @ApiProperty({
        description: 'The title of the book',
        example: 'Forgotten Quokka: A Tale'
    })
    @IsString()
    @IsNotEmpty()
    title: string

    @ApiProperty({
        description: 'The description of the author',
        example: 'In "Forgotten Quokka: A Tale," embark on a whimsical journey with a charming quokka who unravels the mysteries of a hidden island. Through adventures filled with laughter, friendship, and unexpected twists, this heartwarming story reminds us of the magic in forgotten places.'
    })
    @IsString()
    description: string

    @ApiProperty({
        description: 'The objectId of the author',
        example: '507f1f77bcf86cd799439011'
    })
    @IsObject()
    @IsNotEmpty()
    authorId: ObjectId;

    @ApiProperty({
        description: 'The publishedDate of the book',
        example: 'July 15, 1975'
    })
    @IsObject()
    @IsNotEmpty()
    publishedDate: Date;
}

export class DeleteBookDto {
    @ApiProperty({
        description: 'The objectid of the book',
        example: '507f1f77bcf86cd799439011'
    })
    @IsString()
    @IsNotEmpty()
    _id: ObjectId
}


export class searchBookDto {
    @ApiProperty({
        description: 'The objectId of the author',
        example: '507f1f77bcf86cd799439011'
    })
    @IsObject()
    @IsNotEmpty()
    authorId: ObjectId;
}
export class dateFilterDto{
    @ApiProperty({
        description: 'The start date',
        example: 'July 15, 1975'
    })
    @IsObject()
    @IsNotEmpty()
    start: Date;

    @ApiProperty({
        description: 'The end date',
        example: 'July 17, 1975'
    })
    @IsObject()
    @IsNotEmpty()
    end: Date;
}