import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import LoginPage from "./components/LoginPage.jsx";
import ChatPage from "./components/ChatPage.jsx";
import UserProfile from "./components/UserProfile.jsx";

function App() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/chat" element={<ChatPage />} />
                    <Route path="/profile/:id" element={<UserProfile />} />
                </Routes>
            </Router>
        );
    }

export default App;
