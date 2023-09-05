# AppClima

## Qual foi a maior dificuldade que você enfrentou ao realizar o teste?
Não foi bem uma dificuldade, não teve a otimização que eu gostaria. Minha ideia inicial era fazer o background rotacionar com base no horário enquanto o usuário estivesse na tela, o fundo iria mudando a cor com forme a hora ia passando, sem precisar recarregar a pagina, porem isso gerou uma queda na performance, particularmente fiquei incomodado com isso, então optei por mudar com base em certos horários. 


## Descreva a funcionalidade e o por quê da utilização das bibliotecas escolhidas por você para concluir o desafio.
Não utilizei Libs de design, gosto de ter controle no design e muitas não permitem certas modificações que eu particularmente gosto de fazer, para acesso a API utilizei dois métodos, o fetch padrão e o Axios, pelo menos motivo de não utilizar libs de design, acredito que tem certos tipos de requisições que precisamos ter um polimento mais "fino" e muitas libs não o permitem. Fiz algumas modificações no que foi pedido, por exemplo, buscador por "nome de rua", na verdade, eu o modifiquei, para que possa ser por CEP ou Cidade e criando um tipo de "lista" de busca, onde o usuario vai ter acesso ao clima pesquisado e podendo deletar o mesmo. Também adicionei a geolocalização do usuario assim que ele entra no App, tanto para desk quanto mobile, mensagens de Error de busca ou de envio do formulário, assim também como envio do formulário caso tenha sido aprovado, aviso de "erro" ao selecionar um arquivo diferente de .pdf, mesmo tornando o input apenas como .pdf o usuário pode alterar o valor, com esse validador ele não consegue nem enviar


## Como você se vê daqui a 5 anos?
Ter terminado minha faculdade de engenharia da computação, minha pós em segurança de informação e robótica, atuando na área que gosto, com meu filho entrando na escola e podendo dedicar mais tempo e oportunidade que não tive a ele 


## Caso você tenha dado um “Tchammmm!” na sua aplicação, descreva o que você fez, como isso irá melhorar a experiência do usuário
Meu tchamm foi o fundo interativo com base no horário, a imagem do clima atual com base da resposta da API, o usuário poder ter uma lista de endereços buscados, como uma agenda, as validações para que o usuário saiba que algo foi enviado com sucesso e todas foram feitas manualmente, sem a utilização de libs para isso.
