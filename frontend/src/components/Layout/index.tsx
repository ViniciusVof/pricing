import { ReactNode } from "react";
import { Container, Content, Main, Sidebar, Title, ToolBar } from "./styles";

import { CiLogout, CiSettings, CiBadgeDollar, CiShop } from "react-icons/ci";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Sidebar>
        <Title>Precificação</Title>

        <ul>
          <li>
            <CiShop size={25} />
            Home
          </li>
          <li>
            <CiBadgeDollar size={25} />
            Precificação
          </li>
          <li>
            <CiSettings size={25} />
            Configurações
          </li>
          <li>
            <CiLogout size={25} />
            Sair
          </li>
        </ul>
      </Sidebar>

      <Main>
        <ToolBar />

        <Content>{children}</Content>
      </Main>
    </Container>
  );
}
