import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import ProductPageStyles from "./styles";
import ProductsService from "../../services/productsService";
import ImageSlideShow from "./imageSlideShow";
import CartContext from "../../context/CartContext";

export default function Product() {
  const { id } = useParams();
  const { cart, setCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await ProductsService.getProduct(id);
    if (response.error) {
      setProduct(null);
    } else {
      setProduct({ ...response, quantity: 1 });
    }
    setLoading(false);
  }, []);

  function addToCart() {
    if (cart.length === 0) {
      setCart([...cart, product]);
    }

    const products = cart.filter((element) => element.id !== product.id);

    setCart([...products, product]);

    console.log(cart, "aiaiaiai");
  }

  return (
    <>
      <ProductPageStyles>
        <div className="back">
          <Link to="/">
            <span>
              <BiArrowBack />
              Home
            </span>
          </Link>
        </div>
        {product && !loading ? (
          <div className="container">
            <h2>{product.name}</h2>
            <ImageSlideShow images={product.photos} />
            <b>Descrição do produto</b>
            <p className="description">{product.description}</p>
            <div className="size">
              <b>Tamanho</b>
              <button type="button" className="unique">
                {product.size}
              </button>
            </div>
            <div className="buy">
              <div className="priceContainer">
                <b>Preço</b>
                <p className="price">
                  R$ {product.price.toFixed(2).replace(".", ",")}
                </p>
              </div>
              <button type="button" onClick={() => addToCart()}>
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        ) : (
          (loading && <h1 className="loading"> Carregando...</h1>) || (
            <h1 clasName="error">Produto não encontrado!</h1>
          )
        )}
      </ProductPageStyles>
    </>
  );
}
