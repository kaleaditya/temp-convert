const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value
    // console.log(numberTemp);
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const calToFeh = (cel) => {
        let fahrenheit = Math.round((cel * 9/5) + 32);
        return fahrenheit;
    }

    const FehToCel = (fehr) => {
        let celcious = Math.round((fehr - 32) * 5/9);
        return celcious;
    }
    let result;


        if (valueTemp == 'cel') {
            result = calToFeh(numberTemp);
            document.getElementById('resultContainer').innerHTML = `= ${result} &#176; Fahrenheit`;
        }
        else {
            result = FehToCel(numberTemp);
            document.getElementById('resultContainer').innerHTML = `= ${result} &#176; Celcious`;
        }
    }