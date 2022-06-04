import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Outlet } from "react-router";
import { Container } from "../../components/Container/Container";
import { HeaderUserInfo } from "../../components/Header/HeaderTypes/HeaderUserInfo/HeaderUserInfo";
import { Loader } from "../../components/Loader/Loader";
import { NavbarMenu } from "../../components/Navbar/NavbarMenu/NavbarMenu";
import { user } from "../../store/user.state";

export const GameMain = observer(() => {
  useEffect(() => {
    user.getUserData();
  }, []);

  return (
    <>
      <Loader loading={user.loading} />
      <Container className="container">
        <HeaderUserInfo />
        <Outlet />
        <NavbarMenu />
      </Container>
    </>
  );
});
