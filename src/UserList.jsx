import { useState, useEffect } from 'react';

function UserList() {
    const [userList, setUserList] = useState([
        {
            'id': '1',
            'name': 'Пользователь 1',
        },
        {
            'id': '2',
            'name': 'Пользователь 2'
        },
        {
            'id': '3',
            'name': 'Пользователь 3'
        },
    ])

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         try {
    //             const response = await fetch('/api/login');
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error ${response.status}`);
    //             }
    //             const data = await response.json();
    //             setUserList(data);
    //         } catch (error) {
    //             console.error("Ошибка при загрузке пользователей:", error);
    //             setUserList([]);
    //         }
    //     };
    //
    //     fetchUsers();
    // }, []);

    return (
        <div className="user-list">
            <h2>Пользователи</h2>
            <ul>
                {userList.map(user => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;