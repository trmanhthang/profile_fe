import {
    Sidebar,
    SidebarContent, SidebarFooter,
    SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem
} from "@/components/ui/sidebar.tsx";
import type {ComponentProps} from "react";
import {
    CircleUserRound,
    FlaskConical, FolderOpenDot,
    GalleryVerticalEnd,
    MessageCircleCheck, Scroll,
    UserRoundPen
} from "lucide-react";
import {NavMain, NavUser} from "@/layouts/components/Navbar";
import {useAppNavigate} from "@/hooks/customs";

function AdminMenu({...props}: ComponentProps<typeof Sidebar>) {
    const {project} = useAppNavigate();

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
                        icon: CircleUserRound
                    },
                    {
                        title: "Dự án",
                        navigate: project,
                        icon: FolderOpenDot
                    },
                    {
                        title: "Kỹ năng",
                        icon: FlaskConical
                    },
                    {
                        title: "Mạng xã hội",
                        icon: MessageCircleCheck
                    },
                    {
                        title: "Quá trình làm việc",
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
                            <div className="flex leading-none">
                                <span className="font-medium">Application Admin</span>
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
        </Sidebar>
    )
}

export default AdminMenu;