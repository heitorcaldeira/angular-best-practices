# Observables

**Stream de dados:** uma sequência de dados ao longo de um tempo.

**Observable:** uma funçao com características de _pull_ e _push_ que consegue tratar uma stream de dados.

**Subject:** um tipo especial de observable que permite multicast.

**BehaviorSubject:** uma extensão de _Subject_, que permite criar uma stream com valor predefinido.

### Operadores map

`switchMap`: quando você deseja ignorar as emissões anteriores se houver uma nova emissão.

`mergeMap`: quando você deseja tratar as emissões de forma concorrente.

`concatMap`: quando deseja tratar as emissões uma após a outra, na ordem em que forem emitidas.

`exhaustMap`: quando deseja cancelar as novas emissões, enquanto houve uma sendo processada.
