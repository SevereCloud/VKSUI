import { OS, platform } from '../lib/platform';

export default function getClassName(
  base: string,
  osName: OS = platform(),
): string {
  return `${base} ${base}--${osName}`;
}
