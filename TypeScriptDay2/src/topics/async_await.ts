export const asyncawait = () => {

    // ตัวอย่างการใช้งาน async await
    async function getUserData() {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
            const data = await response.json()
            console.log('User data:', data)
        } catch (error) {
            console.log('Failed to fetch user data:', error)
        }
    }

    getUserData()

    interface User {
        id: number
        name: string
        email: string
    }

    async function getUserType(): Promise<User>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const data = await response.json()
        return data
    }

    getUserType().then(user => { console.log('User:', user.name) })
}