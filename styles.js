const API_URL = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1'
const Next_Page = 'https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=2'






const MostrarApi = () => {






 
}



 async  function CosumirApi() {
         let response =  await fetch(API_URL)
         let json = await response.json()
         let {products} =  await json
         
         const Produtos = document.querySelector('.produto')
      
        products.forEach((item) => {
            const box = document.createElement('div')
            box.classList.add("box")
            box.setAttribute('id' , item.id)

            const image = document.createElement('img');
            
            image.src = `${item.image}`
            image.alt = `=${item.image}`

             const produtoDetalhes = document.createElement('div')   

            const Name = document.createElement('span')
            Name.classList.add('NameDescricao')
            Name.innerText = `${item.name}`

            const Descriçao = document.createElement('p')
            Descriçao.classList.add('Descricao')
            Descriçao.innerHTML = `${item.description}`

            const AntigoPreco = document.createElement('span')
            AntigoPreco.classList.add('sPreço')
            AntigoPreco.innerHTML = `De: R$ ${item.oldPrice}`

            const Preco = document.createElement('p')
            Preco.classList.add('preço')
            Preco.innerHTML = `Por: R$ ${item.price}`

            const Btn = document.createElement('button')
            const Text  = document.createTextNode('Comprar')
            Btn.classList.add('comprar')
            Btn.appendChild(Text)

            console.log(item)
            box.appendChild(image)
            box.appendChild(produtoDetalhes)
            produtoDetalhes.appendChild(Name)
            produtoDetalhes.appendChild(Descriçao)
            produtoDetalhes.append(AntigoPreco)
            produtoDetalhes.appendChild(Preco)
            produtoDetalhes.appendChild(Btn)
            Produtos.appendChild(box)

            nextPage = `https://${item.nextPage}`;
        })

    
}
MostrarApi()
CosumirApi()

