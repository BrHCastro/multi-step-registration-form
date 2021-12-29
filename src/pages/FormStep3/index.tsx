import { ChangeEvent, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useHistory, Link } from "react-router-dom";
import { Theme } from "../../components/Theme";
import { useForm, FormActions } from "../../contexts/FormContext";
import * as C from "./styles";

export const FormStep3 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      history.push("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
    }
  }, []);

  const handleNextStep = () => {
    if (state.email !== "" && state.github !== "") {
      console.log(state);
      toast.success("Formulário enviado com sucesso! 🎉");
    } else {
      toast.error("Oops!! Preencha todos os campos! ✍️");
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  };

  const handleGitHubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGitHub,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha os campos abaixo para entrarmos em contato.</p>

        <hr />

        <label>
          * Qual o seu melhor e-mail?
          <input
            type="email"
            onChange={handleEmailChange}
            value={state.email}
          />
        </label>

        <label>
          * Qual o seu GitHub?
          <input
            type="url"
            onChange={handleGitHubChange}
            value={state.github}
          />
        </label>
        <C.Buttons>
          <Link className="backButtom" to="/step2">
            Voltar
          </Link>
          <button onClick={handleNextStep}>Finalizar Cadastro</button>
        </C.Buttons>
      </C.Container>
      <Toaster position="top-right" reverseOrder={false} />
    </Theme>
  );
};
