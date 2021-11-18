import "./App.scss";
import GradientBackground from "./components/GradientBackground/GradientBackground";
import P5Canvas from "./components/P5Canvas/P5Canvas";
import ReflectionPrompt from "./components/ReflectionPrompt/ReflectionPrompt";
import { formFields } from "./components/VennDiagramForm/formFields";
import VennDiagramForm from "./components/VennDiagramForm/VennDiagramForm";
import YouTubeEmbed from "./components/YouTubeEmbed/YouTubeEmbed";
import { CLIMATE_YT_EMBDED_ID } from "./constants";

const goToForm = () => {
  document
    .getElementById("reflection-form")
    ?.scrollIntoView({ behavior: "smooth", block: "center" });
};

export function App() {
  return (
    <>
      <div className="app">
        <header className="header">
          <h1>Ripples Beyond Myself</h1>
          <p>An Audio Visual Exercise on Climate Solutions</p>
        </header>

        <main>
          <GradientBackground>
            <div className="prompt">
              <p>
                If you have not yet watched the audio visual piece, <br />I
                invite you to watch it below.
              </p>
              <p>
                Otherwise, the Climate Action Venn Diagram Reflection is{" "}
                <strong className="has-cursor" onClick={goToForm}>
                  below
                </strong>
                .
              </p>
              <br />
            </div>
          </GradientBackground>
          <YouTubeEmbed embedId={CLIMATE_YT_EMBDED_ID} />
          <ReflectionPrompt />
          <div id="reflection-form">
            <VennDiagramForm formFields={formFields} />
          </div>
        </main>
      </div>
      <div className="fullscreen_bg">
        <P5Canvas />
      </div>
    </>
  );
}

export default App;
