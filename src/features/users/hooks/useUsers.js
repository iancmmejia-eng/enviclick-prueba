import { useEffect, useState } from "react";
import { getUsers } from "../services/userService";

function useUsers() {
    const [users, setUsers] = useState([]);
    const [nationality, setNationality] = useState([])
    const [dataLocal, setDataLocal] = useState([])
    const [loading, setLoading] = useState(true);
    const [isUserDelete, setIsUserDelete] = useState(false);

     const deleteUser = (id) => {
        const storedUsers = JSON.parse(localStorage.getItem('Data')) || [];
        console.log(id)
        const updatedUsers = storedUsers.filter(
            user => user.id.value !== id.value
        )
        console.log(updatedUsers)
         localStorage.setItem('Data', JSON.stringify(updatedUsers));
         setIsUserDelete(true);
    }

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const localStorageItem = localStorage.getItem('Data');
                let infoData
                if(!localStorageItem){
                    const data = await getUsers();
                    localStorage.setItem('Data', JSON.stringify(data));
                    infoData = JSON.parse(localStorage.getItem('Data'));
                    setUsers(infoData);
                } else {
                    infoData = JSON.parse(localStorage.getItem('Data'));
                    setUsers(infoData);
                    setIsUserDelete(false)
                }
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        fetchUsers();
    }, [isUserDelete]);

    return {
        users, 
        loading,
        deleteUser
    }
}

export { useUsers }