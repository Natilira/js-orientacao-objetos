/*
ser autenticavel significa ter o metodo autenticar 

ducky type, se ele anda como um, faz quaqua como um , deve ser um pato. não interessa o tipo do objeto
me interesssa oq ele pode fazer se ele tem a presença de determinados metódos e propriedades.
*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)){
        return autenticavel.autenticar(senha);
        }
        return false;
    }
    // ele será um metódo estatico, que não será necessario uma instancia para chamar ele  
    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function 
    }
}