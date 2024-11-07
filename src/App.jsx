import { useState } from 'react'
import './App.css'
import './UserList.jsx'
import UserList from "./UserList.jsx";

export default function App() {
  return (
      <>
          <div className="chat-container">
              <UserList />
              <div className="chat-area">
                  <div className="messages">
                      <div className="message received">
                          <span className="user">Пользователь 1:</span> Привет!
                      </div>
                      <div className="message sent">
                          <span className="user">Вы:</span> Здравствуйте!
                      </div>
                  </div>
                  <div className="input-area">
                      <input type="text" placeholder="Введите сообщение..."/>
                      <button>Отправить</button>
                  </div>
              </div>
          </div>
      </>
  )
}
