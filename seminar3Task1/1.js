let celsiusValue = 0;
celsiusValue = Number(prompt("Введите температуру по Цельсию "));

function converterTemperatur (celsiusValue) {

 let fahrenheitValue = 0;

 fahrenheitValue = (celsiusValue * 9/5) + 32; // (x °C × 9/5) + 32 =  y°F
 
fahrenheitValue = fahrenheitValue.toFixed(1);

 alert("Температура по Цельсию равная " + celsiusValue + "\n в Фаренгейтах будет равна " + fahrenheitValue );

}

converterTemperatur(celsiusValue);


