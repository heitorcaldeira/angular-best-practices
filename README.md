# Lazy loading modules

Lazy Loading é o processo de carregar arquivos sob demanda.

Isso aumenta a velocidade de carregamento inicial da aplicação, pois somente serão carregados os módulos obrigatórios para a aplicação funcionar naquele momento.

A forma mais comum de se carregar módulos sob demanda no Angular, é através das rotas. 

Exemplo:

`{path: '', loadChildren: () => import('./home.module').then(m => m.HomeModule)}`
