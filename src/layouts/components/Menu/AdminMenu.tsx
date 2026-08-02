import {
    Sidebar,
    SidebarContent, SidebarFooter,
    SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail
} from "@/components/ui/sidebar.tsx";
import type {ComponentProps} from "react";
import {
    Archive,
    CircleUserRound,
    FlaskConical,
    GalleryVerticalEnd,
    MessageCircleCheck, Scroll,
    UserRoundPen
} from "lucide-react";
import {NavMain, NavUser} from "@/layouts/components/Navbar";

function AdminMenu({...props}: ComponentProps<typeof Sidebar>) {
    const data = {
        user: {
            name: "shadcn",
            email: "m@example.com",
            avatar: "/avatars/shadcn.jpg",
        },
        navMain: [
            {
                title: "Thông tin cá nhân",
                url: "#",
                icon: UserRoundPen,
                items: [
                    {
                        title: "Chi tiết",
                        url: "#",
                        icon: CircleUserRound
                    },
                    {
                        title: "Sản phẩm",
                        url: "#",
                        icon: Archive
                    },
                    {
                        title: "Kỹ năng",
                        url: "#",
                        icon: FlaskConical
                    },
                    {
                        title: "Mạng xã hội",
                        url: "#",
                        icon: MessageCircleCheck
                    },
                    {
                        title: "Quá trình làm việc",
                        url: "#",
                        icon: Scroll
                    },
                ],
            },
        ],
    }

    return (
        <Sidebar variant={"floating"} collapsible={"icon"} {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <div
                                className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                <GalleryVerticalEnd className="size-4"/>
                            </div>
                            <div className="flex flex-col gap-0.5 leading-none">
                                <span className="font-medium">Documentation</span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain}/>
            </SidebarContent>

            <SidebarFooter>
                <NavUser user={data.user}/>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}

export default AdminMenu;