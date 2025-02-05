const pessoa = {
    nome: 'Augusto C Castilho',
    idade: '37',
    
    descrever: function () {
            console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
        }
    };

    pessoa.nome = 'Tulio'
    pessoa.idade = 3

    pessoa.descrever();