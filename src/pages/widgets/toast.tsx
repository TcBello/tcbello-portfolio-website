import { Icon } from "@chakra-ui/react";
import { MdCancel, MdCheckCircle, MdInfo } from "react-icons/md";
import { createToast } from "react-simple-toasts";
import "./toast.css";

const duration = 2000;
const position = "bottom-center";
const maxVisibleToasts = 1;

const successToast = createToast({
    duration: duration,
    position: position,
    maxVisibleToasts: maxVisibleToasts,
    render: (message) => {
        return <div className="success-toast">
            <Icon as={MdCheckCircle} style={{backgroundColor: "transparent", marginRight: 10}} height={24} width={24} />
            {message}
        </div>
    },
});

const errorToast = createToast({
    duration: duration,
    position: position,
    maxVisibleToasts: maxVisibleToasts,
    render: (message) => {
        return <div className="error-toast">
            <Icon as={MdCancel} style={{backgroundColor: "transparent", marginRight: 10}} height={24} width={24} />
            {message}
        </div>
    },
});

const infoToast = createToast({
    duration: duration,
    position: position,
    maxVisibleToasts: maxVisibleToasts,
    render: (message) => {
        return <div className="info-toast">
            <Icon as={MdInfo} style={{backgroundColor: "transparent", marginRight: 10}} height={24} width={24} />
            {message}
        </div>
    },
});

export function showSuccessToast(message: string) {
    successToast(message);
}

export function showErrorToast(message: string) {
    errorToast(message);
}

export function showInfoToast(message: string) {
    infoToast(message);
}