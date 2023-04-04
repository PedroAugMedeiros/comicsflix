
import md5 from 'md5';

const publicKey1 = 'da4df83d11a4c062f7d80d5ba2997fa8'

const publicKey2 = 'fb958cd3f722d9700f15a202c7e9cd98'

const privateKey1 = '1a43b8343decf82e21d34697a205bfd1b62db1de'

const privateKey2 = 'c2e1cd19b383e541df950a00bab9e025d2be9da1'

const time = Number(new Date())

const hash1 = md5(time + privateKey1 + publicKey1)

const hash2 = md5(time + privateKey2 + publicKey2)

export const comicsApi = `http://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publicKey1}&hash=${hash1}&limit=40`

export const comicsApi2 = `https://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publicKey2}&hash=${hash2}&limit=100`

export const REACT_APP_GOOGLE_API_KEY = 'AIzaSyBtD1UNQzdpCHul2mninUhJhGJnQesnka0'