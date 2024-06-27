export const Product = ({ product }) => {
 return (
        <div key={product.id}>
        <h1>{product.name}</h1>
        <p>
          Detail: {product.cream}
        </p>
        <p>
          Price: {product.price}
        </p>
        <img src={product.image_url} alt={product.name} />
        <a href="../index.html">Go back</a>
      </div>
    )
};