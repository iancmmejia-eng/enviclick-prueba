import { useState } from "react";

const STORAGE_KEY = 'messages'

function useMessages() {
    const [messages, setMessages] = useState(() => {
        const storedMessages = localStorage.getItem(STORAGE_KEY)
        return storedMessages 
            ? JSON.parse(storedMessages)
            : []
    })

    const saveMessage = (userId, text) => {
        const newMessage = {
            id: crypto.randomUUID(),
            userId,
            text,
            createdAt: new Date().toISOString()
        }
        const updatedMessages = [
            ...messages,
            newMessage
        ]
    
        setMessages(updatedMessages)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedMessages))
    }

    const getMessagesByUser = (userId) => {
        return messages.filter(
            message => message.userId === userId
        )
    }

    return {
        messages,
        saveMessage,
        getMessagesByUser
    }

}

export { useMessages };