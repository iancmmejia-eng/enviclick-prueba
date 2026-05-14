import apiClient from '@/shared/services/apiClient';

async function sendMessage(data) {
    const response = await apiClient.post(
        '/messages',
        data
    )

    return response.data
}

async function getUserMessages(userId) {
    const response = await apiClient.get(
        `/users/${userId}/messages`
    )

    return response.data
}

export { sendMessage, getUserMessages };