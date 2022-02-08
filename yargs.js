const yargs = require('yargs')
const child = require('child_process')
const user = 'admin'
const pass = 123
const argv = yargs
.command(
    'acceso',
    'Comando de acceso a servidor Black&White',
    {
        user: {
            describe: 'Usuario',
            demand: true,
            alias: 'u',
        },
        pass: {
            describe: 'Contraseña',
            demand: true,
            alias: 'p',
        },
    },
    (args) => {
        args.user == user && args.pass == pass ? child.exec('nodemon jimp.js', (err, stdout) => {
            err ? console.log(err) : console.log(stdout)
        }) : console.log('Credenciales incorrectas')
    }
)
.help().argv

//en terminal iniciar con: node yargs.js acceso -u=admin -p=123