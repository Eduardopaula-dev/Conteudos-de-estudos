let usuario = {
    nome: 'Roberto',
    excluir: function(){
        console.log('O usuário ' + this.nome + ' foi excluído!')
    }
}

usuario.excluir()