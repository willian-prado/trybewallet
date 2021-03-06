const URL = 'https://economia.awesomeapi.com.br/json/all';

async function currencyAPI() {
  try {
    const response = await fetch(URL);
    const result = await response.json();
    delete result.USDT;
    return result;
  } catch (error) {
    console.log(error);
  }
}

export default currencyAPI;
