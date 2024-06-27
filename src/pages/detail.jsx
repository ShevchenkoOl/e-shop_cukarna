import { render } from '@czechitas/render';
import { Product } from './components/Product';

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');


    const response = await fetch(`http://localhost:4000/api/dorty/${productId}`);
    const json = await response.json();
    const product = json.data;
    console.log(product);

    document.querySelector('#root').innerHTML = render(
      <>
        <Product product={product} />
      </>
    );

