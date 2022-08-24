
export const datahandler = {
    async getUsers(){
        const users = await fetch('https://assessment-users-backend.herokuapp.com/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return await users.json()
    }
}
