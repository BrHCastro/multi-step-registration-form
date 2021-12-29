// 1 - Context = contexto
import { createContext, useContext, useReducer, ReactNode } from "react";

type StateType = {
  currentStep: number;
  name: string;
  level: 0 | 1;
  email: string;
  github: string;
};

type ActionType = {
  type: FormActions;
  payload: any;
};

type ContextType = {
  state: StateType;
  dispatch: (action: ActionType) => void;
};

type FormProviderPropsType = {
  children: ReactNode;
};

const FormContext = createContext<ContextType | undefined>(undefined);

// 2 - Reducer = reduzir alguma coisa

const initialData: StateType = {
  currentStep: 0,
  name: "",
  level: 0,
  email: "",
  github: "",
};

export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGitHub,
}
const FormReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setLevel:
      return { ...state, level: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setGitHub:
      return { ...state, github: action.payload };
    default:
      return state;
  }
};

// 3 - Provider = provedor

export const FormProvider = ({ children }: FormProviderPropsType) => {
  const [state, dispatch] = useReducer(FormReducer, initialData);
  const value = { state, dispatch };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
// 4 - Hook = gancho

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};
