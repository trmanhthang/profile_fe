import {Card, CardHeader} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {CirclePlus} from "lucide-react";
import type {ColumnDef} from "@tanstack/react-table";
import {CardCustom, DataTable, PaginationCustom} from "@/components/customs";

interface User {
    id: number;
    name: string;
    email: string;
}

const columns: ColumnDef<User>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "name",
        header: "Họ tên",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
];

const data: User[] = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        email: "a@gmail.com",
    },
    {
        id: 2,
        name: "Trần Văn B",
        email: "b@gmail.com",
    },
];

function Project() {
    return (
        <>
            <Card>
                <CardHeader>

                </CardHeader>
            </Card>

            <CardCustom className={"mt-6"} headerTitle={"Danh sách dự án cá nhân"}
                        description={"Tổng hợp, quản lý các dự án cá nhân đang có"}
                        action={
                            <Button className={"cursor-pointer rounded-full"} variant={"outline"} size={"lg"}>
                                <CirclePlus/>
                                Thêm mới
                            </Button>
                        }
                        children={
                            <>
                                <div>
                                    <DataTable columns={columns} data={data}/>
                                </div>
                                <div className={"mt-4"}>
                                    <PaginationCustom page={1} pageSize={20} totalElements={200} onPageChange={() => {
                                    }}
                                                      onPageSizeChange={() => {
                                                      }}/>
                                </div>
                            </>
                        }
            >

            </CardCustom>
        </>
    )
}

export default Project;