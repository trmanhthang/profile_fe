import {Card, CardHeader} from "@/components/ui/card.tsx";
import {CardCustom} from "@/layouts/components";
import {Button} from "@/components/ui/button.tsx";
import {CirclePlus} from "lucide-react";

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
                                <CirclePlus />
                                Thêm mới
                            </Button>
                        }
                        children={
                <></>
                        }
            >

            </CardCustom>
        </>
    )
}

export default Project;