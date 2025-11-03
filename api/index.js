const baseURl = "https://api.weatherapi.com/v1/current.json?key=afdfccc284af47c8bdf13702250311";
export const getWheatherDataForCity = async (city)=>{
const response = await fetch(`${baseURl}&q=${city}&aqi=yes`);
return await response.json();
};