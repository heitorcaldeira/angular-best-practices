# Component Lifecycle

Cada componente Angular tem seu próprio ciclo de vida.

O ciclo se inicia quando o componente é carregado ao DOM e finalizado quando removido do DOM.

### Os ciclos são: 

_OnInit, OnChanges, DoCheck, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked, AfterViewChecked, OnDestroy_

---

### Ordem do ciclo

Assim que um componente se inicia, o **OnInit** é chamado. 

Se o componente possuir algum @Input(), o ciclo **OnChanges** é chamado antes do **OnInit**, para setar os valores dos inputs.

Sempre que o valor de um @Input() é atualizado, o **OnChanges** volta a ser disparado.

Em seguida, se inicia um ciclo para verificação de changes, seguindo sempre essa ordem: 

1. DoCheck
1. AfterContentInit
1. AfterContentChecked
1. AfterViewInit
1. AfterViewChecked.

A cada nova detecção de changes, apenas 3 ciclos são chamados:

1. DoCheck
1. AfterContentChecked
1. AfterViewChecked

Se estiver rodando em ambiente de desenvolvimento, os 3 ciclos acima são chamados automaticamente após o primeiro **AfterViewChecked**,
é quando pode ocorrer o erro:
`ExpressionChangedAfterItHasBeenCheckedError`

Por fim, quando o componente é removido do DOM, o **OnDestroy** é chamado.
