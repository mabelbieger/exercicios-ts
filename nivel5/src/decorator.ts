export function logTempoExecucao(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const metodoOriginal = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const inicio = performance.now();
    const resultado = metodoOriginal.apply(this, args);
    const fim = performance.now();
    console.log(`${propertyKey} executado em ${(fim - inicio).toFixed(3)} ms`);
    return resultado;
  };
}
