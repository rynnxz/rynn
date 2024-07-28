const items = [
    { name: "NOCENG", rarity: "Common", probability: 0.8, imgSrc: "img/2rb.jpg", selected: false }, 
    { name: "GOCENG", rarity: "Uncommon", probability: 0.6, imgSrc: "img/5rb.jpeg", selected: false }, 
    { name: "CEBAN", rarity: "Rare", probability: 0.3, imgSrc: "img/10rb.jpg", selected: false },
    { name: "NOBAN", rarity: "Epic", probability: 0.1, imgSrc: "img/20rb.jpg", selected: false },
    { name: "GOBAN", rarity: "Legendary", probability: 0.01, imgSrc: "img/50rb.jpg", selected: false },
];

const totalProbability = items.reduce((acc, item) => acc + item.probability, 0);

function spinGacha() {
    const availableItems = items.filter(item => !item.selected);
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

const spinBtn = document.getElementById("btn");
const resultDiv = document.getElementById("result");
const img = document.getElementById("image");

spinBtn.addEventListener("click", function() {
    const result = spinGacha();
    
    resultDiv.innerHTML = `<p>Anda mendapatkan: ${result.name} (${result.rarity})</p>`;
    img.innerHTML = `<img src="${result.imgSrc}"></img>`
});
