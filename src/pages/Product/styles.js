import styled from "styled-components";
import Typography from "../../config/typography";
import Colors from "../../config/colors";

const ProductPageStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${Typography.Poppins};

  .back {
    width: 100%;
    padding: 0 20px;
    margin: 20px 0;
    color: white;

    svg {
      margin: 0 5px 0 0;
    }

    span {
      display: flex;
      align-items: center;
    }
  }

  .loading,
  .error {
    text-align: center;
    margin: 30vh 0 0 0;
    color: #fff;
  }

  h2 {
    font-size: 20px;
    line-height: 36px;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  b {
    font-size: 14px;
    line-height: 21px;
    font-weight: bold;
  }

  .description {
    text-align: justify;
    font-size: 12px;
    line-height: 18px;
    margin: 0 0 10px 0;
  }

  .container {
    border-radius: 1rem;
    width: 100%;
    background: #fff;
    padding: 20px;
  }

  .slide-container {
    width: 100%;
    margin: 10px auto;
    img {
      max-width: 100%;
    }
  }

  .size {
    margin: 0 0 15px 0;
    display: flex;
    align-items: center;
  }

  .unique {
    margin: 0 0 0 20px;
    width: 30px;
    padding: 2px;
    font-size: 14px;
    line-height: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    background-color: ${Colors.yellow};
  }

  .buy {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .price {
      font-size: 22px;
      line-height: 36px;
      color: ${Colors.darkRed};
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    button {
      width: 40%;
      cursor: pointer;
      font-size: 14px;
      font-family: ${Typography.Poppins};
      line-height: 20px;
      text-align: center;
      word-wrap: break-word;
      padding: 8px 10px;
      background: ${Colors.lightBlue};
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
      transition: box-shadow 0.3s ease, transform 0.3s ease;
    }

    button:active {
      box-shadow: 0 0 0 rgba(0, 0, 0, 0.25),
        inset 3px 3px 3px rgba(0, 0, 0, 0.25);
      transform: translate(3px, 3px);
    }
  }

  @media (min-width: 800px) {
    .container,
    .back {
      width: 800px;
      padding: 40px;
    }

    .back {
      padding: 0px;
    }

    .description {
      font-size: 14px;
    }

    .slide-container {
      width: 50%;
      margin: 10px auto;
      img {
        max-width: 100%;
      }
    }
  }
`;

export default ProductPageStyles;
