function cekBMI(){
    var tinggiCm = parseFloat(document.getElementById("tinggi-badan").value);
    var tinggiM = tinggiCm / 100;
    var beratBadan = parseFloat(document.getElementById("berat-badan").value);

    var hasil = beratBadan / (tinggiM * tinggiM);

    const output = document.getElementById("hasil");
    output.innerHTML = `<h3>hasil BMI kamu : ${hasil} </h3>`;
}