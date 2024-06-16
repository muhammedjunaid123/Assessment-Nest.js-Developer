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

export class CreateAuthorDto {
    @ApiProperty({
        description: 'The name of the author',
        example: 'John Smith'
    })
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty({
        description: 'The biography of the author',
        example: 'John Smith, born in 1975 in Portland, Oregon, is an acclaimed American novelist. Known for his lyrical prose and exploration of human relationships, his debut novel "Echoes in the Mist" (2005) earned critical acclaim. He resides in Seattle, Washington, continuing to write and advocate for environmental conservation.'
    })
    @IsString()
    biography: string

    @ApiProperty({
        description: 'The birthdate of the author',
        example: ' July 15, 1975'
    })
    @IsDate()
    @IsNotEmpty()
    birthdate: Date;
}

export class UpdateAuthorDto {
    @ApiProperty({
        description: 'The objectid of the author',
        example: '507f1f77bcf86cd799439011'
    })
    @IsObject()
    @IsNotEmpty()
    _id: ObjectId

    @ApiProperty({
        description: 'The name of the author',
        example: 'John Smith'
    })
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty({
        description: 'The biography of the author',
        example: 'John Smith, born in 1975 in Portland, Oregon, is an acclaimed American novelist. Known for his lyrical prose and exploration of human relationships, his debut novel "Echoes in the Mist" (2005) earned critical acclaim. He resides in Seattle, Washington, continuing to write and advocate for environmental conservation.'
    })
    @IsString()
    biography: string

    @ApiProperty({
        description: 'The birthdate of the author',
        example: ' July 15, 1975'
    })
    @IsDate()
    @IsNotEmpty()
    birthdate: Date;
}

export class DeleteAuthorDto {
    @ApiProperty({
        description: 'The objectid of the author',
        example: '507f1f77bcf86cd799439011'
    })
    @IsString()
    @IsNotEmpty()
    _id: string
}