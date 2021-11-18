import GradientBackground from '../GradientBackground/GradientBackground';
import styles from './ReflectionPrompt.module.scss';

/* eslint-disable-next-line */
export interface ReflectionPromptProps {}

const HTSAP_BASE_URL = 'https://gimletmedia.com/shows/howtosaveaplanet';
const HTSAP_episode_path = '/xjh53gn/is-your-carbon-footprint-bs';

const HTSAP_LINK = (props: any) => (
  <a href={HTSAP_BASE_URL} target="_blank" rel="noreferrer">
    {' '}
    {props.children}{' '}
  </a>
);
const HTSAP_EPISODE_LINK = (props: any) => (
  <a
    href={`${HTSAP_BASE_URL}${HTSAP_episode_path}`}
    target="_blank"
    rel="noreferrer"
  >
    {' '}
    {props.children}{' '}
  </a>
);

export function ReflectionPrompt(props: ReflectionPromptProps) {
  return (
    <GradientBackground>
      <div className={styles.reflection_prompt}>
        <h2>A Reflection on the Individual and Climate Action</h2>
        <div className={styles.description}>
          <p>Thank you for participating in my Climate Action venn diagram.</p>
          <p>
            After having listened to the
            <HTSAP_LINK> How To Save A Planet </HTSAP_LINK>
            podcast episode on
            <HTSAP_EPISODE_LINK>
              Is Your Carbon Footprint BS?{' '}
            </HTSAP_EPISODE_LINK>
            , I was insired to create Ripples Beyound Myself. Ripples Beyond
            Myself is the embodiment and culmination of How To Save A Planet's
            Climate Action Venn-Diagram. To summarize, the excercise is a
            reflection of taking the things we enjoy and are good at and
            applying that to a climate solution whose impace becomes greater
            than ourselves. For myself this manifested as making and audio
            visual experience whose goal is to inspire others to apply their own
            selves to a solution that reaches beyond oneself.
          </p>

          <p>
            Please take a moment to refelct on your own life and what brings you
            joy and what you are good at and how that manifest into a solution
            for a cause that you care about.
          </p>
        </div>
      </div>
    </GradientBackground>
  );
}

export default ReflectionPrompt;
