import { useState } from 'react';
import UserList from "./UserList.jsx";
import './styles/ChatPage.css';

function ChatPage() {
    const [selectedMessages, setSelectedMessages] = useState(new Set());
    const [selectedChat, setSelectedChat] = useState(0);
    const chats = [
        {
            id: 0,
            name: 'Чат 1',
            users: [
                { id: 1, name: 'Пользователь A' },
                { id: 2, name: 'Пользователь B' },
                { id: 3, name: 'Пользователь C' },
            ],
            messages: [{ id: 1, user: 'Пользователь A', text: 'Привет!' }, { id: 2, user: 'Вы', text: 'Здравствуйте!' }],
        },
        {
            id: 1,
            name: 'Чат 2',
            users: [
                { id: 4, name: 'Пользователь D' }, // Изменено: теперь объект
                { id: 5, name: 'Пользователь E' }, // Изменено: теперь объект
            ],
            messages: [{ id: 1, user: 'Пользователь D', text: 'Как дела?' }, { id: 2, user: 'Вы', text: 'Хорошо, спасибо!' }],
        },
        {
            id: 2,
            name: 'Чат 3',
            users: [
                { id: 6, name: 'Пользователь F' }, // Изменено: теперь объект
                { id: 7, name: 'Пользователь G' }, // Изменено: теперь объект
                { id: 8, name: 'Пользователь H' }, // Изменено: теперь объект
            ],
            messages: [{ id: 1, user: 'Пользователь F', text: 'Привет!' }],
        },
    ];
    const currentChat = chats[selectedChat] || { messages: [] };

    const handleChatSelect = (index) => {
        setSelectedChat(index);
    };

    const handleSelectMessage = (messageId) => {
        const updatedSelectedMessages = new Set(selectedMessages);
        if (updatedSelectedMessages.has(messageId)) {
            updatedSelectedMessages.delete(messageId);
        } else {
            updatedSelectedMessages.add(messageId);
        }
        setSelectedMessages(updatedSelectedMessages);
    };

    return (
        <>
            <div className="chat-container">
                <div className="chat-list">
                    <h2>Чаты</h2>
                    <ul>
                        {chats.map((chat, index) => (
                            <li key={chat.id} onClick={() => handleChatSelect(index)} className={selectedChat === index ? 'selected' : ''}>
                                {chat.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="chat-area">
                    <div className="messages">
                        {currentChat.messages.map((message, index) => (
                            <div key={index}
                                 className={`message ${message.user === 'Вы' ? 'sent' : 'received'} ${selectedMessages.has(index) ? 'selected' : ''}`}
                                 onClick={() => handleSelectMessage(index)}>
                                <span className="user">{message.user}:</span> {message.text}
                            </div>
                        ))}
                    </div>
                    <div className="input-area">
                        <input type="text" placeholder="Введите сообщение..."/>
                        <button>Отправить</button>
                    </div>
                </div>
                <UserList users={currentChat.users}/>
            </div>
        </>
    )
}

export default ChatPage;