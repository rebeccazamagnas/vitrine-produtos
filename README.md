# 🛍️ Vitrine de Produtos - Angular 17

Projeto desenvolvido em **Angular 17** como estudo prático de **consumo de API REST** (DummyJSON).  
A aplicação simula uma vitrine de produtos com carrinho de compras, integrando boas práticas de arquitetura e recursos modernos do Angular.  

---

## ⚙️ Tecnologias Utilizadas
- [Angular 17](https://angular.dev) (Standalone Components)
- [TypeScript](https://www.typescriptlang.org/)
- [Bootstrap](https://getbootstrap.com/) (estilização)
- [DummyJSON API](https://dummyjson.com/) (dados fake)

---

## 🚀 Como rodar o projeto

### 1) Clonar o repositório
```bash
git clone https://github.com/rebeccazamagnas/vitrine-produtos.git
cd vitrine-produtos
```

### 2) Instalar dependências
```bash
npm install
```

### 3) Rodar servidor de desenvolvimento
```bash
npm start
# ou
npx ng serve -o
```

👉 Acesse em: [http://localhost:4200](http://localhost:4200)

---

## 📂 Estrutura de Pastas
```
src/
  app/
    models/          # Interfaces (ex.: IProduct)
    services/        # ProductService (API) e CartService (carrinho)
    components/      # Header e ProductCard
    pages/           # ProductsList, ProductDetails, Checkout
  styles.scss        # Import do Bootstrap
```

---

## 🔗 Endpoints usados (DummyJSON)

- **Listar todos** → [https://dummyjson.com/products](https://dummyjson.com/products)  
- **Detalhar por ID** → [https://dummyjson.com/products/:id](https://dummyjson.com/products/:id)  
- **Buscar (opcional)** → [https://dummyjson.com/products/search?q=termo](https://dummyjson.com/products/search?q=termo)  

### Observações úteis
- A API retorna **30 itens por padrão**; é possível usar `limit/skip`.  
- Para filtrar no cliente, pode-se usar `limit=0` para trazer todos os itens de uma vez.  

---

## 🧩 Conceitos de Angular aplicados
- **Standalone Components** (sem NgModule)  
- **Controle de fluxo moderno**: `@if` e `@for`  
- **Data Binding**: interpolation, property e event binding  
- **Pipes**: `currency` (preço) e `uppercase` (título nos detalhes)  
- **Services + DI**: ProductService e CartService  
- **HTTP Client (withFetch)**: consumo da API via HttpClient  
- **Reactive Forms**: FormGroup, FormControl, Validators  

---

## ✨ Melhorias Futuras
- Paginação real com `limit/skip`  
- Filtros por categoria (endpoints de categorias da DummyJSON)  
- Persistência do carrinho (**localStorage**)  
- Página dedicada do carrinho (listar/remover itens, totais)  
- Deploy no **Vercel** ou **Netlify**  

---

## 👩‍💻 Autoria
Projeto criado como estudo prático de **Angular 17 + API REST** por:  
**Rebecca Zamagna**  
🔗 [LinkedIn](https://www.linkedin.com/in/rebeccazamagnas/) | [GitHub](https://github.com/rebeccazamagnas)
