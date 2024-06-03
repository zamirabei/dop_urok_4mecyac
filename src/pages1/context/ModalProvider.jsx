import { createContext, useState } from "react";


export const ModalContext = createContext();


export default function ModalProvider({ children }) {
    const [isOpen,  setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }

    const value = {
        isOpen,
        openModal,
        closeModal
    }

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
}