const url = 'http://localhost:4000/api/v1/users';

class UserModel {
    static createUser = (user) => {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then((response) => response.json())
    };
};

export default UserModel;