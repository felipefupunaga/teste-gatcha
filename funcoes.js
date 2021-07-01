function roll (char) {
    const rand = Math.ceil(Math.random() * total_roll)
    const resultado = document.querySelector("#resultado")
    const n_roll = 91 - total_roll
    if (rand == 1) {
        const randLendarios = Math.ceil(Math.random() * 2)
        if (randLendarios == 1 || garantido == true) {
            resultado.innerHTML += `<strong class="roll_5">${n_roll} - ${char.value}</strong><br />`
            garantido == false
        } else {
            resultado.innerHTML += `<strong class="roll_5">${n_roll} - ${lendariosGenericos()}<br />`
            garantido == true
        }

        total_roll = 90

    } else {
        const rand4Estrelas = Math.ceil(Math.random() * total_roll_4)
        if (rand4Estrelas == 1) {
            resultado.innerHTML += `<strong class="roll_4">${n_roll} - Epico 4*</strong> || `
            total_roll_4 = 10
        } else {
            resultado.innerHTML += `${n_roll} - Errou... 3* || `
            total_roll_4--
        }

        total_roll--
    }
}

function lendariosGenericos () {
    const lendario = Math.ceil(Math.random() * 5)
    switch (lendario) {
        case 1:
            return "Diluc"
            break
        case 2:
            return "Jean"
            break
        case 3:
            return "Keqing"
            break
        case 4:
            return "Mona"
            break
        case 5:
            return "Qiqi"
            break
            
    }
}

module.exports(roll)