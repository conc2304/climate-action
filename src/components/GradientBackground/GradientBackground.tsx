import styles from './GradientBackground.module.scss';

/* eslint-disable-next-line */
export interface GradientBackgroundProps {
  children: any
}

export function GradientBackground(props: GradientBackgroundProps) {
  return (
    <div className={styles.gradient_background}>
      {props.children}
    </div>
  );
}

export default GradientBackground;
