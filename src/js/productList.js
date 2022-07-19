export default class ProductList {
    constructor (category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
        console.log('done');
    }

    async init() {
        const list = await this.dataSource.getData();
        this.renderList(list);
    }

    renderList(list) {
        const template = document.getElementById('product-card-template');
        list.forEach(product => {
            const single_product = template.content.cloneNode(true);
            const product_data = this.prepareTemplate(single_product, product);
            this.listElement.appendChild(product_data)
        });
    }

    prepareTemplate(template, product){
        template.querySelector('a').href +=  product.Id;
        template.querySelector('img').setAttribute('src', product.Image);
        template.querySelector('.card__brand').textContent = product.Brand.Name;
        template.querySelector('.card__name').textContent = product.Name;
        template.querySelector('.product-card__price').textContent += product.ListPrice;
        return template;
    }
}