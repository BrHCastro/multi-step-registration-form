import { ChangeEvent, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { Theme } from "../../components/Theme";
import { useForm, FormActions } from "../../contexts/FormContext";
import * as C from "./styles";

export const FormStep1 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, []);

  const handleNextStep = () => {
    if (state.name !== "") {
      history.push("/step2");
    } else {
      toast.error("Oops!! Informe o seu nome! ✍️");
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr />

        <label>
          * Seu nome completo
          <input
            type="text"
            autoFocus
            onChange={handleNameChange}
            value={state.name}
          />
        </label>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
      <Toaster position="top-right" reverseOrder={false} />
    </Theme>
  );
};
