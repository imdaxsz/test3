import BestTag from "@/assets/best.svg?react";
import NewTag from "@/assets/new.svg?react";
import LikeButton from "@/components/LikeButton";
import { ProductInfo } from "@/types";

import RemoveButton from "./RemoveButton";
import {
  Brand,
  Container,
  Image,
  ImageContainer,
  Info,
  Name,
  Price,
} from "./style";

type Size = "sm" | "md" | "lg" | "xl";
export type TagType = "NEW" | "BEST";

export interface ProductCardProps {
  size?: Size;
  $tag?: TagType;
  $remove?: boolean;
  info: ProductInfo;
}
export default function ProductCard({
  size,
  $tag,
  $remove,
  info,
}: ProductCardProps) {
  return (
    <Container size={size}>
      <ImageContainer to={info.url} size={size} $tag={$tag} $remove={$remove}>
        {!$remove ? (
          <>
            {$tag === "NEW" && <NewTag />}
            {$tag === "BEST" && <BestTag />}
            <LikeButton target="product" />
          </>
        ) : (
          <RemoveButton />
        )}
        <Image src={info.image} alt="1" size={size} />
      </ImageContainer>
      <Info>
        <Brand to={`/brands/${info.brand.pathname}`}>{info.brand.name}</Brand>
        <Name to={info.url}>{info.name}</Name>
        <Price to={info.url} size={size}>
          {info.price.toLocaleString()}원
        </Price>
      </Info>
    </Container>
  );
}
