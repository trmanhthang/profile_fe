import {ChevronRight, type LucideIcon} from "lucide-react";
import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem
} from "@/components/ui/sidebar.tsx";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible.tsx";

interface MenuItem {
    title: string;
    url: string;
    icon?: LucideIcon;
    active?: boolean;
    items?: {
        title: string;
        navigate?: () => void;
        icon?: LucideIcon;
    }[];
}

function NavMain({items}: {
    items: MenuItem[]
}) {
    return (
        <SidebarGroup>
            <SidebarMenu>
                {items.map((item) => (
                    <Collapsible
                        key={item.title}
                        defaultOpen={item.active}
                        className="group/collapsible"
                    >
                        <SidebarMenuItem>
                            <SidebarMenuButton
                                tooltip={item.title}
                                render={<CollapsibleTrigger/>}
                            >
                                {item.icon && <item.icon/>}
                                <span>{item.title}</span>
                                <ChevronRight
                                    className="ml-auto transition-transform duration-200 group-data-open/collapsible:rotate-90"/>
                            </SidebarMenuButton>
                            <CollapsibleContent>
                                <SidebarMenuSub>
                                    {item.items?.map((subItem) => (
                                        <SidebarMenuSubItem key={subItem.title}>
                                            <SidebarMenuSubButton className={"cursor-pointer"} onClick={subItem.navigate}>
                                                {subItem.icon && <subItem.icon/>}
                                                <span>{subItem.title}</span>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    ))}
                                </SidebarMenuSub>
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}

export default NavMain;