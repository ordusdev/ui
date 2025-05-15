import React from "react";
import { ButtonAtom, CardMolecule, InputAtom, LoginTemplate } from "@ordus/ui";

type LoginPage = {}

export const LoginPage: React.FC = () => {
  return (
    <LoginTemplate bgImage="https://auth-jovemmotorista-prod.netlify.app/_next/static/media/authBanner.fc47c367.jpg">
      <div className="flex items-center justify-center gap-2" >
        <img
          src="https://backoffice.jovemmotorista.com.br/favicon.ico"
          alt="Logo"
          className="mb-4 w-20 h-20"
        />
        <h1 className="font-semibold text-2xl text-foreground-primary mb-2">Jovem Motorista</h1>
      </div>
      <CardMolecule title="Autenticar-se" icon="user" className="max-w-96" variant="secondary">
        <InputAtom label="Email" variant="tertiary" placeholder="Digite seu email"/>
        <InputAtom label="Senha" variant="tertiary" placeholder="Digite sua senha" type="password"/>

        <ButtonAtom variant="primary" className="w-full text-foreground-primary-light">Entrar</ButtonAtom>
      </CardMolecule>
      <p className="text-center text-md text-foreground-primary">
        Esqueceu sua senha? {' '}
        <a href="/password/reset" className="text-md text-brand-light">Clique aqui</a>
      </p>
    </LoginTemplate>
  )
};