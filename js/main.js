console.log("JS File is Connected");

//Variables

const productData = {
    orange: {
        ingredients: "Carbonated Water, Natural Orange Flavour, Citric Acid, Cane Sugar, Orange Juice Conentrate, Ascorbic Acid (Vitamin C), Natural Colour, Sodium Citrate",
        sizes: "Small Can (355ml), Skinny Can (355ml), Glass Bottle (355ml), King Can (473ml)",
        info: "Bright, bubbly, and bursting with citrus flavor, ZIMA's Original Orange Soda delivers a refreshingly smooth twist on a classic favorite. Each sip blends vibrant orange zest with crisp carbonation for a perfectly balanced sweetness that’s bold without being overpowering. Whether you’re cooling off on a sunny day or adding a splash of fun to any gathering, ZIMA's Original Orange brings a lively pop of flavor that’s impossible to resist."
    },
    lemon: {
        ingredients: "Carbonated Water, Natural Lemon Flavour, Citric Acid, Cane Sugar, Lemon Juice Concentrate, Ascorbic Acid (Vitamin C), Natural Colour, Sodium Citrate",
        sizes: "Small Can (355ml), Skinny Can (355ml), Glass Bottle (355ml), King Can (473ml)",
        info: "Crisp, cool, and effortlessly refreshing, ZIMA's Lovely Lemon Soda captures the bright snap of freshly squeezed lemons in every sparkling sip. Light-bodied with a lively fizz, it delivers a clean citrus kick that awakens your senses without weighing you down. Perfect for laid-back afternoons or spontaneous moments, ZIMA's Lovely Lemon is your go-to for a refresh that feels as fresh as it tastes."
    },
    lime: {
        ingredients: "Carbonated Water, Natural Lime Flavour, Citric Acid, Cane Sugar, Lime Juice Concentrate, Ascorbic Acid (Vitamin C), Natural Colour, Sodium Citrate",
        sizes: "Small Can (355ml), Skinny Can (355ml), Glass Bottle (355ml), King Can (473ml)",
        info: "Sharp, sparkling, and undeniably refreshing, ZIMA's Zesty Lime Soda delivers a bold splash of citrus with a cool, invigorating edge. Each sip bursts with tangy lime flavor and a lively fizz that keeps things light, crisp, and endlessly drinkable. Whether you’re kicking back or turning up the energy, ZIMA's Zesty Lime brings a clean, zesty twist that keeps the good times flowing."
    },
    grapefruit: {
        ingredients: "Carbonated Water, Natural Grapefruit Flavour, Citric Acid, Cane Sugar, Grapefruit Juice Concentrate, Ascorbic Acid (Vitamin C), Natural Colour, Sodium Citrate",
        sizes: "Small Can (355ml), Skinny Can (355ml), Glass Bottle (355ml), King Can (473ml)",
        info: "Crisp, sparkling, and refreshingly bold, ZIMA's Glorious Grapefruit Soda delivers a vibrant citrus experience with a subtle bittersweet twist. Each sip balances bright grapefruit notes with smooth effervescence for a flavor that’s both refreshing and refined. Perfect for unwinding or elevating any moment, ZIMA's Glorious Grapefruit offers a lively, modern take on citrus that stands out from the crowd."
    },
    dragonfruit: {
        ingredients: "Carbonated Water, Natural Dragonfruit Flavour, Citric Acid, Cane Sugar, Dragonfruit Juice Concentrate, Ascorbic Acid (Vitamin C), Natural Colour, Sodium Citrate",
        sizes: "Small Can (355ml), Skinny Can (355ml), Glass Bottle (355ml), King Can (473ml)",
        info: "Exotic, vibrant, and refreshingly unexpected, ZIMA's Delicious Dragonfruit Soda is a limited-time flavor that brings a bold twist to your citrus lineup. Each sip delivers a subtle yet refreshing burst of dragonfruit, paired with smooth carbonation for a light, juicy finish. Bright in both color and character, this exclusive release adds a splash of tropical excitement to any moment—get it while it lasts."
    }
};

const infoButtons = document.querySelectorAll(".products-buttons");

const contactBtn = document.querySelector("#btn-contact");
const contactForm = document.querySelector("#contact-form");

//Functions 

function showInfo (e) {

    const element = e.currentTarget;

    const existing = element.querySelector("p");
    
    if (existing) {
        existing.remove();
        return;
    }

    const product = element.dataset.product;
    const type = element.dataset.type;

    const info = document.createElement("p");
    info.classList.add("info-text");
    
    info.textContent = productData[product][type];

    element.appendChild(info); 
}

function toggleForm(e) {
    e.preventDefault();

    if (contactForm.classList.contains("open")) {
        contactForm.classList.remove("open");
    } else {
        contactForm.classList.add("open")
    }
}


//Event Listeners

infoButtons.forEach((button) => {
    button.addEventListener("click", showInfo);
});

contactBtn.addEventListener("click", toggleForm);