import { ApiProperty } from "@nestjs/swagger";
import { OrderDirectionEnum } from "./order-direction.enum";
import { IsEnum, IsNotEmpty } from "class-validator";

export class PaginationRequest {
    @ApiProperty({ required: true })
    @IsNotEmpty()
    page: number;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    pageSize: number;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    orderColumn: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsEnum(OrderDirectionEnum)
    orderDirection: OrderDirectionEnum;
}
