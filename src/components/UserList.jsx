import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function UserList({ users }) {
    const navigate = useNavigate();
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

    const handleClick = (user) => {
        // Перенаправляем на страницу профиля
        navigate(`/profile/${user.id}`);
    };

    return (
        <>
            <div className="user-list">
                <h2>Пользователи</h2>
                <ul>
                    {users.map((user) => (
                        <li key={user.id} onClick={() => handleClick(user)}>
                            {user.name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default UserList;