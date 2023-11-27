import styled from "styled-components";

import Head from "@/components/Head";

import OrderInfo from "./OrderList/OrderInfo";
import SideBarComponent from "./SideBar";
import UserInfo from "./UserInfo";

export default function MyPage() {
  return (
    <Container>
      <Head title="마이페이지 | Orday" />
      <PageLeft>
        <UserInfo />
        <SideBarComponent />
      </PageLeft>
      <OrderInfo />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  margin-top: 52px;
  gap: 20px;
`;

const PageLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 273px;
  height: 700px;
  gap: 50px;
`;
