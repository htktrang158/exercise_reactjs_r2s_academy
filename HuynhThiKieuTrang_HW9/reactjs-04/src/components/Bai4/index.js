
function ArrNumberComponent() {
  const numbers = [];
  for (let i = 1; i <= 50; i++) {
    numbers.push(i);
  }
  const excludedNumbers = [4, 16, 21, 36];

  // Lọc ra các số không nằm trong danh sách số bị loại trừ
  const filteredNumbers = numbers.filter((number) => {
    return !excludedNumbers.includes(number);
  });

  const renderedNumbers = filteredNumbers.join(', ');
  return (
      <p>{renderedNumbers}</p>

  );
}
export default ArrNumberComponent;
