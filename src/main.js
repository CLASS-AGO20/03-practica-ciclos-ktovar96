export default class App {
    factorial(numero) {
        let facto= 1;

        for( let i= 2; i <= numero; i=i+1){
                facto= facto * i;
        }
        return facto;
    }
}

let app = new App();

console.log(app.factorial(5));