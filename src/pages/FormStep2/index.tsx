import * as C from "./styles";

import { ChangeEvent, useEffect } from "react";
import { useForm, FormActions } from "../../contexts/FormContext";

import { useHistory, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { Theme } from "../../components/Theme";
import { SelectOption } from "../../components/SelectOption";

export const FormStep2 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      history.push("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
    }
  }, []);

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  };

  const handleNextStep = () => {
    if (state.name !== "") {
      history.push("/step3");
    } else {
      toast.error("Oops!! Informe o seu nome! ✍️");
    }
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>
          Escolha a opção que melhor condiz com seu estado atual,
          profissionalmente.
        </p>

        <hr />

        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar em menos de 2 ano."
          icon="🥳"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />
        <SelectOption
          title="Sou programador"
          description="Já programo a 2 anos ou mais."
          icon="😎"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <C.Buttons>
          <Link className="backButtom" to="/">
            Voltar
          </Link>
          <button onClick={handleNextStep}>Próximo</button>
        </C.Buttons>
      </C.Container>
      <Toaster position="top-right" reverseOrder={false} />
    </Theme>
  );
};
