import styled from "styled-components";

import useProductDetail from "@/hooks/useProductDetail";

import DetailInfo from "./Detail";
import ProductReview from "./Review/index";

export default function Product() {
  const { productData, options } = useProductDetail();

  return (
    <Container>
      {productData && options && (
        <ProductInfo>
          <ProductImg alt="productImage" src={productData.imageUrl} />
          <DetailInfo productData={productData} options={options} />
        </ProductInfo>
      )}
      <ProductReview />
    </Container>
  );
}

const Container = styled.div`
  padding: 60px 30px 100px;
`;

const ProductInfo = styled.div`
  display: flex;
  gap: 80px;
  margin-bottom: 120px;
`;

const ProductImg = styled.img`
  width: 650px;
  height: 900px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors["neutral"]["20"]};
`;
