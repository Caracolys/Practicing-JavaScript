class Contato{

    // Método do JS é uma função
    constructor () {
        const nome = null
        const email = null
        const fone = null
        const mensagem = null
        const idade = null
        const data_cadastro = new Date();
    }

    Enviar() {

        this.nome = document.getElementById("nome").value;
        this.email = document.getElementById("email").value;
        this.fone = document.getElementById("fone").value;
        this.mensagem = document.getElementById("mensagem").value;
        this.idade = document.getElementById("idade").value;

        if ((this.nome && this.email && this.fone && this.mensagem && this.mensagem && this.idade) == '') {
            alert ("Preencha todos os campos antes de enviar!")
        }

    
        else {
            const aviso = "Boa! Obrigada, ";  
        
            alert(aviso + this.nome);
        }

    }
}

contato = new Contato();
