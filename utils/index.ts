export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "48f9ff67d3mshe4f88cf223a44abp1e9765jsn610a7b2a1619",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch ("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla", {
    headers: headers
  });
  const result = await response.json()
  
  return result

}
