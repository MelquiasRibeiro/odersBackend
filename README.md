# odersBackend


## Como Rodar este projeto:
1. clone o projeto em sua maquina ```https://github.com/MelquiasRibeiro/odersBackend.git```;
2. instale as dependencias necessárias ```npm install```;
3. inicie o projeto ```npm run dev``` isso deve criar um aquivo.sqlite na raiz do projeto chamado "database"  e iniciar o servidor na porta 3333;
4. rode o comandodo ```npm run typeorm migration:run``` para executar as migrations

## Endpoints

 ### POST "/checkout" :

recebe os seguintes parametros no body: 
```

{
"customer_name": string,
"customer_email": string,
"customer_address":string,
"items": [
	{
	"product_name": string,
	"product_price": number,
	"product_quantity":number
	}
]
}
```

 ### GET  "/checkouts" :

retorna um json com todos os checkouts salvos no banco
