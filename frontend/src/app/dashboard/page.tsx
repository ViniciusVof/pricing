"use client";
import { useState } from "react";
import { Wrapper } from "./styles";
import { Layout } from "@/components/Layout";

export default function Dashboard() {
  const [teste, setTeste] = useState(0);
  return (
    <Layout>
      <h1>Hello {teste}</h1>
    </Layout>
  );
}
