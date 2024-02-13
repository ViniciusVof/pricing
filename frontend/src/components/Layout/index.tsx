import { ReactNode } from "react";
import { Container, Content, Main, Sidebar, Title, ToolBar } from "./styles";

import { CiLogout, CiSettings, CiBadgeDollar, CiShop } from "react-icons/ci";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const prefix = "/dashboard";
  return (
    <Container>
      <Sidebar>
        <Title>Precificação</Title>

        <ul>
          <li>
            <Link href={`${prefix}`}>
              <CiShop size={25} />
              Home
            </Link>
          </li>
          <li>
            <Link href={`${prefix}/pricing`}>
              <CiBadgeDollar size={25} />
              Precificação
            </Link>
          </li>
          <li>
            <Link href={`${prefix}/settings`}>
              <CiSettings size={25} />
              Configurações
            </Link>
          </li>
          <li>
            <Link href="/logout">
              <CiLogout size={25} />
              Sair
            </Link>
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
