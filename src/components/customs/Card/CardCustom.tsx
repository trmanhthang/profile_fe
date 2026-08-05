import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card.tsx";
import type {ComponentProps, ReactNode} from "react";

interface Props extends ComponentProps<typeof Card> {
    headerAspect?: ReactNode;
    headerTitle?: string | null,
    description?: string | null,
    action?: ReactNode | null,
    children?: ReactNode,
    footer?: ReactNode | null
}

function CardCustom({
                        headerAspect,
                        headerTitle,
                        description,
                        action,
                        children,
                        footer,
                        ...props
                    }: Props) {
    return (
        <Card {...props}>
            {headerAspect && (headerAspect)}

            {
                (headerTitle || description || action) && (
                    <CardHeader>
                        {headerTitle && <CardTitle>{headerTitle}</CardTitle>}
                        {description && <CardDescription>{description}</CardDescription>}
                        {action && <CardAction>{action}</CardAction>}
                    </CardHeader>
                )
            }

            {
                children && (<CardContent>{children}</CardContent>)
            }

            {
                footer && (<CardFooter>{footer}</CardFooter>)
            }
        </Card>
    )
}

export default CardCustom;