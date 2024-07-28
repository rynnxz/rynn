const item = [
    { name: "AUG?", rarity: "Uncommon", probability: 0.6, imgSrc: "img/2.png", selected: false }, 
    { name: "AK DRAGON ALBINO", rarity: "Rare", probability: 0.3, imgSrc: "img/3.png", selected: false },
    { name: "SG PENDEK", rarity: "Common", probability: 0.8, imgSrc: "img/1.png", selected: false }, 
    { name: "BARETTA GG", rarity: "Epic", probability: 0.1, imgSrc: "img/4.jpeg", selected: false },
    { name: "UMP DINO", rarity: "Legendary", probability: 0.01, imgSrc: "img/5.png", selected: false },
    { name: "AK 2 JUTA", rarity: "Mythic", probability: 0.001, imgSrc: "img/6.png", selected: false },
];

const totalProbability = item.reduce((acc, item) => acc + item.probability, 0);

function spinGacha() {
    const availableItems = item.filter(item => !item.selected);
    const totalAvailableProbability = availableItems.reduce((acc, item) => acc + item.probability, 0);
    const randomNumber = Math.random() * totalAvailableProbability;
    let cumulativeProbability = 0;

    for (const item of availableItems) {
        cumulativeProbability += item.probability;
        if (randomNumber <= cumulativeProbability) {
            item.selected = true;
            return item;
        }
    }

    return null;
}

const spinBtn = document.getElementById("spinBtn");
const resultDiv = document.getElementById("result");
const img = document.getElementById("image");

spinBtn.addEventListener("click", function() {
    const result = spinGacha();
    
    resultDiv.innerHTML = `<p>Anda mendapatkan: ${result.name} (${result.rarity})</p>`;
    img.innerHTML = `<img src="${result.imgSrc}"></img>`
});




// const showAllBtn = document.getElementById("showAllBtn");
// const popup = document.getElementById("popup");
// const allItemsList = document.getElementById("allItemsList");

// showAllBtn.addEventListener("click", function() {
//     populateAllItemsList();
//     popup.style.display = "block";
// });

// function populateAllItemsList() {
//     allItemsList.innerHTML = "";
//     item.forEach(item => {
//         const li = document.createElement("li");
//         const div = document.createElement("div");
    
//         const p = document.createElement("p");
//         p.style.fontWeight = "700";
//         p.textContent = `${item.name} (${item.rarity}) ${item.probability}%`;
//         div.appendChild(p);

//         const img = document.createElement("img");
//         img.src = item.imgSrc;
//         img.style.width = "200px";
//         img.style.height = "auto";
//         div.appendChild(img);

//         div.style.textAlign = "center";
//         div.style.marginTop = "10px";

//         li.appendChild(div);
//         allItemsList.appendChild(li);
//     });
// }


// const closeBtn = document.querySelector(".close");
//     closeBtn.addEventListener("click", function() {
//         popup.style.display = "none";
// });



spinBtn.addEventListener("click", function() {
    const result = spinGacha();
    
    // Menyimpan hasil spin ke local storage
    localStorage.setItem("lastSpinResult", JSON.stringify(result));

    resultDiv.innerHTML = `<p>Anda mendapatkan: ${result.name} (${result.rarity})</p>`;
    img.innerHTML = `<img src="${result.imgSrc}"></img>`
});

// Fungsi untuk memeriksa dan mendapatkan hasil spin terakhir dari local storage
function getLastSpinResult() {
    const lastSpinResultJSON = localStorage.getItem("lastSpinResult");
    return lastSpinResultJSON ? JSON.parse(lastSpinResultJSON) : null;
}

// Memeriksa dan menampilkan hasil spin terakhir saat halaman dimuat
window.addEventListener("load", function() {
    const lastSpinResult = getLastSpinResult();
    if (lastSpinResult) {
        resultDiv.innerHTML = `<p>Anda mendapatkan: ${lastSpinResult.name} (${lastSpinResult.rarity})</p>`;
        img.innerHTML = `<img src="${lastSpinResult.imgSrc}"></img>`;
    }
});




document.addEventListener('keydown', function(even){
    if (event.key === "Escape") {
        console.log("keteken woi");
    }
})

// Event listener untuk tombol "Lihat Hasil Spin Terakhir"
const lastSpinBtn = document.getElementById("lastSpinBtn");
lastSpinBtn.addEventListener("click", function() {
    showLastSpinPopup();
});

// Fungsi untuk menampilkan popup dan hasil spin terakhir
function showLastSpinPopup() {
    const lastSpinResult = getLastSpinResult();
    if (lastSpinResult) {
        const lastSpinPopup = document.getElementById("lastSpinPopup");
        const lastSpinResultDiv = document.getElementById("lastSpinResult");
        const lastSpinImageDiv = document.getElementById("lastSpinImage");

        // Tampilkan hasil spin terakhir di dalam popup
        lastSpinResultDiv.innerHTML = `<p>Anda mendapatkan: ${lastSpinResult.name} (${lastSpinResult.rarity})</p>`;
        lastSpinImageDiv.innerHTML = `<img src="${lastSpinResult.imgSrc}"></img>`;

        // Tampilkan popup
        lastSpinPopup.style.display = "block";
    } else {
        // Jika tidak ada hasil spin terakhir, tampilkan pesan
        alert("Belum ada hasil spin terakhir.");
    }
}

// Event listener untuk menutup popup
const closeLastSpinPopup = document.querySelector("#lastSpinPopup .close");
closeLastSpinPopup.addEventListener("click", function() {
    document.getElementById("lastSpinPopup").style.display = "none";
});
