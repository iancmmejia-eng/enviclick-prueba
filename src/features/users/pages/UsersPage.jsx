import React, { useState } from "react";
import { UserCard } from "../components/UserCard";
import { useUsers } from '../hooks/useUsers'
import './UsersPage.css';
import { Modal } from "../../shared/components/Modal";
import { SendMessageModal } from "../../messages/components/sendMessageModal/SendMessageModal";
import { useMessages } from "../../messages/hooks/useMessages";

function UsersPage() {
    const { users, loading, deleteUser } = useUsers();
    const [gender, setGender] = useState('')
    const [nationality, setNationality] = useState('')
    const [ageRange, setAgeRange] = useState('')
    const [selectedUsers, setSelectedUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState(null)
    const [ isModalOpen, setIsModalOpen ] = React.useState(false);
    const [filterUsers, setFilterUsers] = useState(users);

    const { saveMessage } = useMessages();

    if(loading) {
        return <p>Cargando...</p>
    }

    const filteredUsers = users.filter(user => {
    const matchesGender =
        gender === '' || user.gender === gender

    const matchesNationality =
        nationality === '' ||
        user.nat === nationality

    const matchesAge =
        ageRange === '' ||
        (
        ageRange === '18-30' &&
        user.dob.age >= 18 &&
        user.dob.age <= 30
        ) ||
        (
        ageRange === '31-50' &&
        user.dob.age >= 31 &&
        user.dob.age <= 50
        )

    return (
        matchesGender &&
        matchesNationality &&
        matchesAge
    )
    })

    const handleSelectUser = (userId) => {
        setSelectedUsers((prev) =>
            prev.includes(userId)
            ? prev.filter(id => id !== userId)
            : [...prev, userId]
        )
    }

    const selectedData = users.filter(user =>
        selectedUsers.includes(user.id.value)
    )

    const openModal = (user) => {
        setSelectedUser(user)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedUser(null)
    }

     const handleSendMessage = (userId, text) => {
        console.log(userId, text)
        saveMessage(userId, text)

        closeModal()
    }

    const downloadCSV = () => {
        const headers = [
            'Nombre',
            'Email',
            'Edad',
            'Genero',
            'Nacionalidad'
        ]

        const rows = selectedData.map(user => [
            user.name.first,
            user.email,
            user.dob.age,
            user.gender,
            user.nat
        ])

        const csvContent = [
            headers.join(','),
            ...rows.map(row => row.join(','))
        ].join('\n')

        const blob = new Blob(
            [csvContent],
            { type: 'text/csv;charset=utf-8;' }
        )
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'usuarios.csv')
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <div className="containerUsers">
            <h1 className="containerUsers__title">Panel de Usuarios</h1>
            <label htmlFor="">Filtros</label>
            <select onChange={(e) => setGender(e.target.value)}>
                <option value="">Todos</option>
                <option value="male">Hombres</option>
                <option value="female">Mujeres</option>
            </select>
            <select onChange={(e) => setNationality(e.target.value)}>
                <option value="">Todas</option>
                <option value="MX">México</option>
                <option value="US">USA</option>
                <option value="CA">Canadiense</option>
                <option value="AR">Argentina</option>
            </select>
            <select onChange={(e) => setAgeRange(e.target.value)}>
                <option value="">Todas</option>
                <option value="18-30">18-30</option>
                <option value="31-50">31-50</option>
            </select>
            <button onClick={downloadCSV}>
                Descargar CSV
            </button>
            <div className="container-cards">

                {filteredUsers.map(user => (
                    <UserCard 
                        key={user.login.uuid}
                        user={user}
                        isSelected={selectedUsers.includes(user.id.value)}
                        onSelect={handleSelectUser}
                        onSendMessage={() => openModal(user)}
                        onDelete={deleteUser}
                    /> 
                ))}
            </div>

            {isModalOpen &&
             selectedUser && (
               <SendMessageModal 
                    user={selectedUser}
                    onClose={closeModal}
                    onSend={handleSendMessage}
               />
            )}
        </div>
    );
}

export { UsersPage }