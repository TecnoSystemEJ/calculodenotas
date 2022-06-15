function ResultCalculator({ media }) {
  const notaFinal = (5 - 0.7 * media) / 0.3;
  return <h1>ResultCalculator {notaFinal}</h1>;
}
export default ResultCalculator;
