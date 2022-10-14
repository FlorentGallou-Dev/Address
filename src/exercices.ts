import FrenchAddress from './MODELS/Address';

function main(): void {

    console.log('------------------------------------------------> Strings rendus exercices')

    /** 1 */
    console.log('1- ' + 'Hello, World !')

    /** 2 */
    const message: string = 'Hello, World !'
    console.log('2- ' + message)

    /** 3 */
    const hello: string = 'Hello'
    const world: string = 'World'
    console.log('3- ' + `${hello}, ${world} !`)

    /** 4 */
    console.log('4- ' + hello + ', ' + world + ' !')

    /** 5 */
    console.log('5- ' + message.split(',')[0])

    /** 6 */
    console.log('6- ' + message.length)

    /** 7 */
    const welcome1: string = 'Hello, World !'
    const newWelcome: string = welcome1.toUpperCase()
    console.log('7- ' + newWelcome.replace(/E/g, '3').replace(/L/g, '1').replace(/O/g, '8'))

    /** 8 */
    const welcome2: string = 'Hello World'
    const words: Array<string> = welcome2.split(' ')
    console.log('8- ' + words)

    /** 9 */
    var pwd: string = ""
    if (pwd) {
        console.log('9- ' + 'Mot de passe fourni')
    } else {
        console.log('9- ' + 'Mot de passe manquant')
    }

    /** 10 */
    var email: string = 'john@doe.com'
    console.log(email.includes('@') && email.includes('.') ? '10- email valide' : '10- email non valide')

    console.log('------------------------------------------------> Collections rendus exercices')


    /** 1 */
    const planets: Array<string> = ['Terre', 'Mars', 'Mercure', 'Saturne', 'Vénus', 'Neptune', 'Uranus', 'Jupiter']
    console.log('1- ' + planets.sort())

    /** 2 */
    for (const planet in planets) {
        console.log('2- ' + planets[planet].toLocaleUpperCase())
    }

    /** 3 */

    console.log('------------------------------------------------> fin exercices')

}

const result: any = main();