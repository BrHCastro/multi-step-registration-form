import * as C from "./styles";
import { ReactNode } from "react";
import { Header } from "../Header";

type PropsType = {
  children: ReactNode;
};

export const Theme = ({ children }: PropsType) => {
  return (
    <C.Container>
      <C.Area>
        <Header />
        <C.Steps>
          <C.SideBar>....</C.SideBar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};
