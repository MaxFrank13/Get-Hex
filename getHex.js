function getHex(num, sigFigs) {
  const result = [];
  const currentPlace = 16 ** (sigFigs - 1);
  const hexKey = Math.floor(num / currentPlace);
  if (hexKey > 15) return alert('number too large. add significant figures');
  if (hexKey >= 0 && hexKey <= 9) {
    result.push(`${hexKey}`);
  } else {
    switch (hexKey) {
      case 10:
        result.push('A');
        break;
      case 11:
        result.push('B');
        break;
      case 12:
        result.push('C');
        break;
      case 13:
        result.push('D');
        break;
      case 14:
        result.push('E');
        break;
      case 15:
        result.push('F');
        break;
      default:
        console.error('not a valid number');
        break;
    };
  };

  if (sigFigs - 1 > 0) result.push(...getHex(num % currentPlace, sigFigs - 1));
  return result.join('');
};

function handleFormSubmit(e) {
  e.preventDefault();
  const hex = getHex(
    document.querySelector('#number').value.trim(),
    document.querySelector('#sig-figs').value.trim()
    );
  document.querySelector('.result').textContent = hex;
}

document
  .querySelector('.hex-generator')
  .addEventListener('submit', handleFormSubmit);