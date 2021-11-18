import { CircularProgress } from "@material-ui/core";
import { Save } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import { useMachine } from "@xstate/react";
import GradientBackground from "../GradientBackground/GradientBackground";
import { FormField } from "./formFields";
import { formMachine } from "./formMachine";
import styles from "./VennDiagramForm.module.scss";

/* eslint-disable-next-line */
export interface VennDiagramFormProps {
  formFields: FormField[];
  onChangeHandler?: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  onSubmitHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function VennDiagramForm(props: VennDiagramFormProps) {
  const { formFields } = props;
  const [current, send] = useMachine(formMachine);

  const onSubmitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    send({
      type: "SUBMIT",
    });
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    send({
      type: "CHANGE",
      data: {
        value,
        key: name,
      },
    } as any);
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        "& .MuiTextField-root": { m: 1 },
      }}
      className={styles.venn_diagram_form}
    >
      <div>
        {!current.matches("success") &&
          formFields.map(({ id, label, placeholder }) => {
            return (
              <div key={id} className="field-wrapper">
                <TextField
                  style={{ backgroundColor: "white" }}
                  required
                  id={id}
                  name={id}
                  label={label}
                  placeholder={placeholder}
                  value={current.context.inputValues[id]}
                  multiline
                  size="medium"
                  fullWidth
                  color="primary"
                  helperText={
                    !!current.context.errors &&
                    current.context.inputValues[id] === "" &&
                    "Required"
                  }
                  error={
                    !!current.context.errors &&
                    current.context.inputValues[id] === ""
                  }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    onChangeHandler(e);
                  }}
                  variant="filled"
                />
              </div>
            );
          })}

        {current.context.errors ||
          (current.toStrings().includes("editing.error") && (
              <p style={{ color: "#fff", textAlign: "center", backgroundColor: 'rgba(0,0,0, 0.6)'}}>
                Please fill out all of the fields
              </p>
          ))}

        <div className={styles.button_wrapper}>
          {!current.matches("success") && (
            <Button
              type="submit"
              style={{ marginTop: "1em" }}
              variant="contained"
              size="large"
              endIcon={
                current.matches("submitting") ? (
                  <CircularProgress
                    variant="indeterminate"
                    disableShrink={false}
                  />
                ) : (
                  <Save />
                )
              }
              onClick={onSubmitHandler}
              color="primary"
              // disabled={!formIsCompleted(current.context, null)}
            >
              {current.matches("submitting") ? "Submitting" : "Submit"}
            </Button>
          )}

          {current.matches("success") && (
            <Button
              color="success"
              variant="contained"
              fullWidth={true}
              onClick={() => {
                send({ type: "AGAIN" });
              }}
            >
              <div style={{ fontSize: "2 em" }}>
                Have another Climate Action idea?
                <br />
                <strong>Let's Hear It!</strong>
              </div>
            </Button>
          )}
        </div>
      </div>
    </Box>
  );
}

export default VennDiagramForm;
