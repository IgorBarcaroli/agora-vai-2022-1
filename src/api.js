import ky from 'ky'

const api = ky.extend({
    prefixUrl: 'https://igor-psmat-2022.onrender.com',
    credentials: 'include',
    timeout: 10000
})

export default api