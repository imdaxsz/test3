import { useEffect, useState } from "react";

import { toggleLikeBrand } from "@/api/BrandApi";
import { toggleLikeProducts } from "@/api/ProductApi";

export default function useToggleLike(
  id: number,
  target: LikeTarget,
  isLiked?: boolean,
) {
  const [like, setLike] = useState(isLiked ?? false);

  useEffect(() => {
    if (isLiked) setLike(isLiked);
  }, [isLiked]);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetName =
      target === "brand" ? "브랜드" : target === "product" ? "상품" : "게시글";
    if (!localStorage.getItem("token")) {
      alert(`관심 ${targetName} 등록은 로그인 후 가능합니다.`);
      return;
    }
    // target에 따른 서버 요청
    try {
      if (target === "brand") await toggleLikeBrand(id);
      if (target === "product") await toggleLikeProducts(id);
      setLike((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  return { like, handleClick };
}
