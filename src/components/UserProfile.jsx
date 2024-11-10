import { useParams } from 'react-router-dom';

function UserProfile() {
    // const { id } = useParams(); // Получаем ID из параметров URL

    //НАДО БУДЕТ ЧЕРЕЗ API С СЕРВАКА ЮЗЕРА ПОЛУЧАТЬ
    // const [user, setUser] = useState(null);
    // useEffect(() => {
    //     const fetchUser = async () => {
    //         try {
    //             const response = await fetch(`/api/users/${id}`); // Замените на ваш API endpoint
    //             const data = await response.json();
    //             setUser(data);
    //         } catch (error) {
    //             console.error('Ошибка при загрузке пользователя:', error);
    //         }
    //     };
    //     fetchUser();
    // }, [id]);

    // if (!user) {
    //     return <div>Загрузка...</div>;
    // }

    return (
        <div>
            <h1>Профиль пользователя: Тут будет</h1>
        </div>
    );
}

export default UserProfile;