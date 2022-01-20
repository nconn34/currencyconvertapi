export default class MoneyService {  
    static async getMoney() {
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY1}/latest/USD`);
        if (!response.ok) {
          throw Error(response.status);
        }
        return response.json();
      } catch(error) {
        return error.message;
      }
    }
  }

