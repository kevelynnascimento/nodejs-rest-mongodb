import { PaginationRequest } from "../http/pagination.request";

export class BaseRepository {
    public getPagination(paginationRequest: PaginationRequest) {
        const pagination = {
            skip: +paginationRequest.page * +paginationRequest.pageSize,
            take: paginationRequest.pageSize,
            order: {
                [paginationRequest.orderColumn]: paginationRequest.orderDirection,
            },
        };

        return pagination;
    };
}
