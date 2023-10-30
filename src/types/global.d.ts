declare interface Phone {
  first: string;
  second: string;
  third: string;
}

declare type PHONEPART = keyof Phone;

declare interface BirthDate {
  year: string;
  month: string;
  day: string;
}

declare interface Address {
  postcode: string;
  address: string;
  addressDetail: string;
}

declare interface BaseUserInfo {
  email: string;
  name: string;
  phoneNumber: string;
  birthDate: BirthDate;
  addressInfo: Address;
}

declare interface UserInfoForm extends BaseUserInfo {
  password: string;
  confirmPw: string;
}

/**
 * @description 서버에서 받아온 회원 정보 타입
 */
declare interface UserInfoDto extends BaseUserInfo {
  id: number;
  socialType: string;
  infoSet: boolean;
}

declare interface UserInfoFormError {
  name: boolean;
  password: number;
  confirmPw: boolean;
  phoneNumber: number;
  birthDate: boolean;
  address: boolean;
}

declare interface JoinFormError extends UserInfoFormError {
  email: number;
  terms: boolean;
}

declare interface OrderForm {
  name: string;
  phoneNumber: string;
  addressInfo: Address;
  deliveryRequest: string | null;
  selectedMethod: number | null;
}

// 임시
declare interface Product {
  id: number;
  name: string;
  price: number;
  score: number;
  description: string;
  imageUrl: string;
  brandInfo: { id: number; name: string };
  liked: boolean;
}

declare interface Brand {
  id: number;
  name: string;
  categoryIds: number[];
  logoUrl: string;
  imageUrl: string;
  isLiked: boolean;
}

declare type BrandListDto = Pick<Brand, "id" | "name" | "imageUrl">[];

/**
 * @description 좋아요 기능 적용 가능 대상
 */
declare type LikeTarget = "product" | "brand" | "post";

declare interface ProductListDto {
  cursorRequest: {
    key: number;
    size: number;
  };
  body: Product[];
}

declare interface CartItem {
  id: number;
  name: string;
  imageUrl: string;
  color: string;
  size: string;
  price: number;
  amount: number;
  discountPrice: number;
}

declare interface CartProductInfo {
  data: {
    id: number;
    amount: number;
  };
}
