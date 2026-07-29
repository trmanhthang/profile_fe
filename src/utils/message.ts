import {toast} from "@/components/ui/toast.tsx";

interface MessageOptions {
    id?: string;
    title?: string;
    desc?: string;
    timeout?: number;
    priority?: "low" | "high";
    onClose?: () => void;
    onRemove?: () => void;
    data: object;
    action?: object;
    position?: object
}

export const message = {
    default(options: MessageOptions) {
        toast.add({
            title: options.title,
            description: options.desc,
            timeout: options.timeout,
            onClose: options.onClose,
            onRemove: options.onRemove,
            data: options.data,
            actionProps: options.action,
            priority: options.priority,
            positionerProps: options.position
        })
    },

    success(options: MessageOptions) {
        toast.add({
            title: options.title,
            description: options.desc,
            type: "success",
            timeout: options.timeout,
            onClose: options.onClose,
            onRemove: options.onRemove,
            data: options.data,
            actionProps: options.action,
            priority: options.priority,
            positionerProps: options.position
        })
    },

    info(options: MessageOptions) {
        toast.add({
            title: options.title,
            description: options.desc,
            type: "info",
            timeout: options.timeout,
            onClose: options.onClose,
            onRemove: options.onRemove,
            data: options.data,
            actionProps: options.action,
            priority: options.priority,
            positionerProps: options.position
        })
    },

    warning(options: MessageOptions) {
        toast.add({
            title: options.title,
            description: options.desc,
            type: "warning",
            timeout: options.timeout,
            onClose: options.onClose,
            onRemove: options.onRemove,
            data: options.data,
            actionProps: options.action,
            priority: options.priority,
            positionerProps: options.position
        })
    },

    error(options: MessageOptions) {
        toast.add({
            title: options.title,
            description: options.desc,
            type: "error",
            timeout: options.timeout,
            onClose: options.onClose,
            onRemove: options.onRemove,
            data: options.data,
            actionProps: options.action,
            priority: options.priority,
            positionerProps: options.position
        })
    }
}