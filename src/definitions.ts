export interface SiminfoPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
