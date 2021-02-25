const url = `${process.env.REACT_APP_API_URL}/users`;

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

    static getUserById = (userId) => {
        return fetch(`${url}/${userId}`) 
            .then((response) => response.json())
    };
};

export default UserModel;