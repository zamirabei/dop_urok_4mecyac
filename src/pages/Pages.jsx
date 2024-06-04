import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../modal/Modal'


function App() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios.get('http://localhost:3000/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => console.error('Error fetching users:', error));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/users', {
            name,
            email,
            username
        })
            .then(response => {
                if (response.status === 201) {
                    fetchUsers();
                    setMessage('User created');
                    setTimeout(() => {
                        setMessage('');
                    }, 3000);
                }
            })
            .catch(error => console.error('Error user:', error));
    };

    const handleDelete = (userId) => {
        axios.delete (`http://localhost:3000/users/${userId}`)
    .then(response => {
            if (response.status === 200) {
                fetchUsers();
                setMessage('User deleted');
                setModalVisible(true);
            }
        })
            .catch(error => console.error('Error deleting:', error));
    };
    const closeModal = () => {
        setModalVisible(false);
    }

    return (
        <div className="container">
            <h1>Users create get delete</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                <button type="submit">Create User</button>
            </form>
            {message && <div id="message">{message}</div>}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {users.length > 0 ? (
                    users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td><button onClick={() => handleDelete(user.id)}>Delete</button></td>
                        </tr>
                    ))
                ) : (
                    <tr><td colSpan="4">List is empty</td></tr>
                )}
                </tbody>
            </table>
            {modalVisible && <Modal message="User deleted" onClose={closeModal} />}
        </div>
    );
}

export default App;