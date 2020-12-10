export default class App {
    factorial(numero) {
        let facto= 1;

        for( let i= 2; i <= numero; i=i+1){
                facto= facto * i;
        }
        return facto;
    }
    convertirAString(numero) {
        let asterisco = ""
        let i=1
        while(i<= numero){
            asterisco = "*" + asterisco;
            i++
        }
        return asterisco;
    }
}

let app = new App();

console.log(app.factorial(5));
console.log(app.convertirAString(5));