import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem, PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";

interface PaginationProps {
    page: number;
    pageSize: number;
    totalElements: number;

    pageSizeOptions?: number[];

    onPageChange: (page: number) => void;
    onPageSizeChange: (pageSize: number) => void;
}

function PaginationCustom({
                        page,
                        pageSize,
                        totalElements,
                        pageSizeOptions = [10, 20, 50, 100],
                        onPageChange,
                        onPageSizeChange,
                    }: PaginationProps) {

    const totalPages = Math.max(1, Math.ceil(totalElements / pageSize));

    const from = totalElements === 0 ? 0 : (page - 1) * pageSize + 1;
    const to = Math.min(page * pageSize, totalElements);

    const pages = buildPages(page, totalPages);

    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-muted-foreground text-sm">
                Hiển thị <strong>{from}</strong> - <strong>{to}</strong> /{" "}
                <strong>{totalElements}</strong> bản ghi
            </div>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <span className="text-sm">Dòng/trang</span>

                    <Select
                        value={pageSize.toString()}
                        onValueChange={(value) =>
                            onPageSizeChange(Number(value))
                        }
                    >
                        <SelectTrigger className="w-20">
                            <SelectValue />
                        </SelectTrigger>

                        <SelectContent>
                            {pageSizeOptions.map((size) => (
                                <SelectItem
                                    key={size}
                                    value={size.toString()}
                                >
                                    {size}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                aria-disabled={page === 1}
                                className={
                                    page === 1
                                        ? "pointer-events-none opacity-50"
                                        : ""
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (page > 1) {
                                        onPageChange(page - 1);
                                    }
                                }}
                            />
                        </PaginationItem>

                        {pages.map((item, index) => (
                            <PaginationItem key={index}>
                                {item === "..." ? (
                                    <PaginationEllipsis />
                                ) : (
                                    <PaginationLink
                                        href="#"
                                        isActive={item === page}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            onPageChange(item);
                                        }}
                                    >
                                        {item}
                                    </PaginationLink>
                                )}
                            </PaginationItem>
                        ))}

                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                aria-disabled={page === totalPages}
                                className={
                                    page === totalPages
                                        ? "pointer-events-none opacity-50"
                                        : ""
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (page < totalPages) {
                                        onPageChange(page + 1);
                                    }
                                }}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}

function buildPages(
    current: number,
    total: number
): (number | "...")[] {
    if (total <= 7) {
        return Array.from({ length: total }, (_, i) => i + 1);
    }

    const pages: (number | "...")[] = [];

    pages.push(1);

    if (current > 3) {
        pages.push("...");
    }

    for (
        let i = Math.max(2, current - 1);
        i <= Math.min(total - 1, current + 1);
        i++
    ) {
        pages.push(i);
    }

    if (current < total - 2) {
        pages.push("...");
    }

    pages.push(total);

    return pages;
}

export default PaginationCustom;