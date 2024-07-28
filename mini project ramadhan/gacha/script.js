const items = [
    { name: "AUG?", rarity: "Uncommon", probability: 0.6, imgSrc: "img/2.png"}, 
    { name: "AK DRAGON ALBINO", rarity: "Rare", probability: 0.3, imgSrc: "img/3.png" },
    { name: "SG PENDEK", rarity: "Common", probability: 0.8, imgSrc: "img/1.png"}, 
    { name: "BARETTA GG", rarity: "Epic", probability: 0.1, imgSrc: "img/4.jpeg"},
    { name: "UMP DINO", rarity: "Legendary", probability: 0.01, imgSrc: "img/5.png"},
    { name: "AK 2 JUTA", rarity: "Mythic", probability: 0.001, imgSrc: "img/6.png"},
];

const totalProbability = items.reduce((acc, item) => acc + item.probability, 0);

function spinGacha() {
    const randomNumber = Math.random() * totalProbability;
    let cumulativeProbability = 0;

    for (const item of items) {
        cumulativeProbability += item.probability;
        if (randomNumber <= cumulativeProbability) {
            return item;
        }
    }

    return null;
}

for (let i = 0; i < 10; i++) {
    console.log(spinGacha());
}

const spinBtn = document.getElementById("spinBtn");
const resultDiv = document.getElementById("result");
const img = document.getElementById("image");

spinBtn.addEventListener("click", function() {
    const result = spinGacha();
    
    resultDiv.innerHTML = `<p>Anda mendapatkan: ${result.name} (${result.rarity})</p>`;
    img.innerHTML = `<img src="${result.imgSrc}"></img>`
});
