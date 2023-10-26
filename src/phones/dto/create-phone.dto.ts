import { ApiProperty } from "@nestjs/swagger";

export class CreatePhoneDto{
    @ApiProperty({example: 'ХХХХХХХХХХ', description: 'id телефона', required: true})
    id: string;

    @ApiProperty({example: 'ХХХХХХХХХХ', description: 'Телефон', required: true})
    phone: string;
}