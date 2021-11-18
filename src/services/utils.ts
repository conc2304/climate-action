import { FormContext } from "../components/VennDiagramForm/formMachine";

export interface Dimension2d {
  width: number;
  height: number;
}

export const getDocumentDimensions = (): Dimension2d => {
  const body = document.body;
  const html = document.documentElement;

  const height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  const width = Math.max(
    body.scrollWidth,
    body.offsetWidth,
    html.clientWidth,
    html.scrollWidth,
    html.offsetWidth
  );
  return {
    width,
    height,
  };
};

export const formIsCompleted = (ctx: FormContext, _event: any) => {
  return Object.entries(ctx.inputValues).every((input) => {
    const [key, value] = input;
    if (!value) {
      return false;
    }
    return true;
  });
}
