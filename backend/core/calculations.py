
def calculate(data):
  # Get the data from the request
  height = float(data['height'])
  weight = float(data['weight'])
  # Calculate the imc
  imc = 0
  imc = (weight/(height*height))*10000

  # Return the result
  data = {
    "height": float(height),
    "weight": float(weight),
    "imc": float(imc),
  }
  return data
  

