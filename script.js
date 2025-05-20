//         if ((this.nome && this.email && this.fone && this.mensagem && this.tipo_contato && this.idade) == '') {
  //          alert ("Preencha todos os campos antes de enviar!")
   //     }

     //   else { //

class Contato{
    constructor() {
        const nome = null;
        const email = null;
        const fone = null;
        const mensagem = null;
        const idade = null;
        const tipo_contato = null;
        const data_cadastro = new Date();
    }
    
    Enviar(event) {
        console.log('iniciando Enviar...')

        event.preventDefault();

        console.log('mudando padrão do form...')

        this.nome = document.getElementById('nome').value;
        this.email = document.getElementById('email').value;
        this.fone = document.getElementById('fone').value;
        this.mensagem = document.getElementById('mensagem').value;
        this.idade = document.getElementById('idade').value;
        this.idade = document.getElementById('data_cadastro').value;
        this.tipo_contato = document.getElementsByName('tipo_contato').value;

        console.log('acabei de montar os atributos...')
        
        let dados = getElementById('grid_dados');
        let linhas = dados.insertRow();

        let coluna0 = linhas.insertCell(0);
        coluna0.textContent = this.nome;

        let coluna1 = linhas.insertCell(1);
        coluna1.textContent = this.email;

        let coluna2 = linhas.insertCell(2);
        coluna2.textContent = this.fone;

        let coluna3 = linhas.insertCell(3);
        coluna3.textContent = this.mensagem;

        let coluna4 = linhas.insertCell(4);
        coluna4.textContent = this.idade;

        let coluna5 = linhas.insertCell(5);
        coluna5.textContent = this.data_cadastro;

        let coluna6 = linhas.insertCell(6);
        coluna6.textContent = this.tipo_contato;

        let coluna7 = linhas.insertCell(7);
        coluna7.textContent = <button class="botoes" id="editar" >";

            alert(`O novo registro: \n
                
                ${this.nome} \n
                ${this.email} \n
                ${this.fone} \n
                ${this.mensagem}
                ${this.idade} \n
                ${this.data_cadastro} \n
                ${this.tipo_contato} `);
        }

}

let contato = new Contato();
