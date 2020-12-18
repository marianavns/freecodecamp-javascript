// [ 1 ] Duas barras são usadas para fazer comentários que não serão lidos pelo código

    /* Já a barra com asterisco permite
    fazer comentários
    que duram uma linha ou mais.

    Para parar de comentar,
    basta adicionar: */


// [ 2 ] JavaScript é uma linguagem dinamicamente tipada. Isso quer dizer que não é necessário especificar o tipo de uma nova variável. Ainda assim, é preciso declará-la, ok?

    let myPrincipalLanguage

    // Qual será o resultado de:
    console.log(myPrincipalLanguage)

        /*
        [a] Não printa nada;
        [b] 0;
        [c] undefined;
        [d] "". 
        */


// [ 3 ] [ 5 ] Para atribuir valor a uma variável declarada, basta usar o "=":

    myPrincipalLanguage = `Javascript`
    // Agora sim será printado um valor no console: Javascript.

    // Quando usamos a sintaxe
    let mysecondaryLanguage = `PHP`
    // estamos fazendo duas coisas ao mesmo tempo: declarando a variável e atribuindo um valor a ela.


// [ 4 ] É possível jogar o valor de uma variável dentro da outra, usando o sinal de "=". Suponhamos que minha linguagem principal não é mais Javascript, e sim PHP. A troca pode ser feita assim:

    myPrincipalLanguage = mysecondaryLanguage
    // Assim, "jogamos" o valor PHP para dentro da variável "myPrincipalLanguage".
    console.log(myPrincipalLanguage) // Console: PHP.

    /* [ IMPORTANTE ]:
        Var e let podem ter seus valores reatribuídos. const, não. Exemplo:*/
    const javascriptRelease = 1996
    // javascriptRelease = 2007
    console.log(javascriptRelease) // Console: TypeError: Assignment to constant variable


// [ 6 ] Se uma variável for declarada, mas não for atribuído nenhum valor a ela, teremos undefined, certo? Caso essa variável seja concatenada, podemos ter 2 resultados:

    // Se for concatenada com um número, o resultado será:
    let declaratedVariable
    console.log(declaratedVariable+2)
   /*
        [a] undefined;
        [b] NaN;
        [c] 0.
    */
   // Se for concatenada com uma string, o resultado será:
   console.log(declaratedVariable+"string")
   /*
        [a] "undefined";
        [b] undefined;
        [c] "undefinedstring".
    */

// [ 7 ] Vale ressaltar que myprincipalLanguage != MyPrincipalLanguage != myPrincipalLanguage, hein? As letras maiúsculas e minúsculas fazem, sim, toda diferença!
   


