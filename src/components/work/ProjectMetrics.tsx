import { Text } from "@/once-ui/components";
import styles from "./ProjectMetrics.module.scss";

export type ProjectMetric = {
  value: string;
  label: string;
};

interface ProjectMetricsProps {
  title: string;
  metrics: ProjectMetric[];
}

export function ProjectMetrics({ title, metrics }: ProjectMetricsProps) {
  if (metrics.length === 0) return null;

  return (
    <dl className={styles.metrics} aria-label={`${title} highlights`}>
      {metrics.map((metric) => (
        <div className={styles.metric} key={metric.label}>
          <Text as="dt" variant="body-default-xs" onBackground="neutral-weak">
            {metric.label}
          </Text>
          <Text as="dd" variant="heading-strong-m" className={styles.value}>
            {metric.value}
          </Text>
        </div>
      ))}
    </dl>
  );
}
