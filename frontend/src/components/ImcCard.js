function ImcCard(props) {

  let color = 'white';


  const colors = {
    Underweight: 'lightcoral',
    NormalWeight: 'lightgreen',
    Overweight: 'yellow',
    Obesity: 'orange',
    SevereObesity: 'lightcoral',
  }; 


  if (props.result.imc < 18.4) {
    color = (colors.Underweight);
  } else if (props.result.imc >= 18.4 && props.result.imc <= 24.9) {
    color = (colors.NormalWeight);
  } else if (props.result.imc >= 25 && props.result.imc <= 29.9) {
    color = (colors.Overweight);
  } else if (props.result.imc >= 30 && props.result.imc <= 34.9) {
    color = (colors.Obesity);
  } else if (props.result.imc >= 35) {
    color = (colors.SevereObesity);
  } else if (props.result.imc === 'NaN') {
    color = 'white';
  }

  console.log(color);

return (
  <div style={{ background: `${color}`, textAlign: 'center', padding: '1rem' }}>
    <h2>IMC: {Math.round(1000 * props.result.imc) / 1000}</h2>
    <p>PESO: {props.result.weight} kg</p>
    <p>ALTURA: {props.result.height} cm</p>
  </div>
);
}

export default ImcCard;