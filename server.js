const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 


const recipes = [
    { 
        name: "Greek Salad",
        description: "A healthy salad with fresh veggies, olives, and feta cheese.",
        image: "/images/salad.jpg",
        ingredients: ["tomato", "cucumber", "feta cheese", "olives"],
        steps: "Chop veggies, mix with feta and olives, serve."
    },
    { 
        name: "Healthy Vegetable and Couscous Stuffed Peppers", 
        description: "Nutritious bell peppers stuffed with couscous, vegetables, and herbs.", 
        image: "/images/healthy.webp",
        ingredients: ["bell peppers", "couscous", "tomatoes", "onions", "herbs"],
        steps: "Cook couscous, sauté vegetables, stuff into bell peppers, and bake at 180°C."
    },
    { 
        name: "Peanut Sauce Soba with Crispy Tofu", 
        description: "Savory soba noodles tossed in creamy peanut sauce with crispy tofu.", 
        image: "/images/sauce.jpg",
        ingredients: ["soba noodles", "tofu", "peanut butter", "soy sauce", "ginger", "garlic"],
        steps: "Cook soba noodles, pan-fry tofu until crispy, mix with peanut sauce, and serve."
    },
    { 
        name: "Creamy Mushroom Stroganoff", 
        description: "A rich and creamy stroganoff made with sautéed mushrooms and a flavorful sauce.", 
        image: "/images/mashroom.jpg",
        ingredients: ["mushrooms", "onions", "garlic", "sour cream", "vegetable broth", "butter", "pasta"],
        steps: "Sauté onions, garlic, and mushrooms in butter, add broth and sour cream, mix with pasta, and serve."
    },
    
    { 
        name: "Tacos", 
        description: "Mexican tacos filled with meat, cheese, and fresh veggies.", 
        image: "/images/tacos.jpg",
        ingredients: ["meat", "cheese", "vegetables", "tortilla"],
        steps: "Cook meat, add cheese and vegetables, place in tortilla, and serve."
    },
    { 
        name: "Grilled Sandwich", 
        description: "A crispy, golden-brown sandwich filled with cheese and vegetables.", 
        image: "/images/grilled snadwich.jpg",
        ingredients: ["bread", "cheese", "butter", "vegetables"],
        steps: "Butter the bread, add cheese and vegetables, grill until golden brown."
    },
    { 
        name: "Pasta", 
        description: "Delicious, creamy pasta with rich sauces and cheese.", 
        image: "/images/pasta.jpg",
        ingredients: ["pasta", "cheese", "tomato sauce", "cream"],
        steps: "Boil pasta, prepare sauce with tomato and cream, mix and serve."
    },
    { 
        name: "Pizza Margherita", 
        description: "Classic Italian pizza with tomatoes, mozzarella, and basil.", 
        image: "/images/pizza.jpg",
        ingredients: ["flour", "tomato", "cheese", "basil"],
        steps: "Prepare dough, add tomato, cheese, and basil, bake at 200°C."
    },
    { 
        name: "Red Thai Curry with Vegetables", 
        description: "A fragrant and spicy Thai curry loaded with fresh vegetables and creamy coconut milk.", 
        image: "/images/thai.jpg",
        ingredients: ["red curry paste", "coconut milk", "bell peppers", "carrots", "broccoli", "basil", "tofu"],
        steps: "Sauté vegetables, add red curry paste and coconut milk, simmer, and serve with rice."
    },
    
    { 
        name: "Indian Thali", 
        description: "A traditional Indian meal featuring a variety of curries, rice, bread, and condiments.", 
        image: "/images/indian.jpg",
        ingredients: ["rice", "dal", "chapati", "vegetable curry", "pickle", "yogurt", "papad"],
        steps: "Prepare dal and curries, cook rice and chapati, assemble all items on a plate, and serve."
    },
    
    { 
        name: "Sushi Rolls",
        description: "Traditional Japanese rolls with rice, seaweed, and seafood.",
        image: "/images/rolls.jpg",
        ingredients: ["rice", "seaweed", "fish", "soy sauce"],
        steps: "Roll rice and fish in seaweed, slice, and serve."
    },

    { 
        name: "Biryani", 
        description: "Aromatic rice dish cooked with spices, meat, and herbs.", 
        image: "/images/biryani.jpg",
        ingredients: ["rice", "chicken", "yogurt", "spices", "onions"],
        steps: "Marinate chicken, cook with spices and onions, layer with rice, and steam."
    },
    { 
        name: "Chocolate Cake",
        description: "Rich and moist chocolate cake topped with creamy frosting.",
        image: "/images/cake.jpg",
        ingredients: ["flour", "sugar", "cocoa", "butter", "eggs"],
        steps: "Mix ingredients, bake at 180°C for 30 minutes, and serve."
    },
    { 
        name: "Cheesecake",
        description: "A rich and creamy dessert with a crunchy biscuit base.",
        image: "/images/cheesecake.jpg",
        ingredients: ["cream cheese", "biscuits", "butter", "sugar"],
        steps: "Mix ingredients, chill for 4 hours, and serve."
    },
    { 
        name: "Pudding",
        description: "A creamy, delicious dessert made with milk, sugar, and flavors.",
        image: "/images/pudding.jpg",
        ingredients: ["milk", "sugar", "cornstarch", "vanilla"],
        steps: "Heat milk, mix with sugar and cornstarch, and let it set."
    },
    { 
        name: "Pancakes",
        description: "Fluffy and golden pancakes served with syrup and fruits.",
        image: "/images/pancakes.jpg",
        ingredients: ["flour", "milk", "eggs", "baking powder"],
        steps: "Mix ingredients, cook on a pan, and serve with syrup."
    },
   
    { 
        name: "Chia Pudding with Strawberries", 
        description: "A healthy and creamy chia pudding topped with fresh strawberries.", 
        image: "/images/strawberry.jpg",
        ingredients: ["chia seeds", "milk", "honey", "vanilla extract", "strawberries"],
        steps: "Mix chia seeds with milk, honey, and vanilla, refrigerate overnight, and top with fresh strawberries before serving."
    },
    { 
        name: "Strawberry Delight Cake", 
        description: "A delicious layered chocolate and vanilla cake topped with fresh strawberries.", 
        image: "/images/white_cake.jpg",
        ingredients: ["flour", "sugar", "cocoa powder", "vanilla extract", "butter", "eggs", "strawberries"],
        steps: "Bake chocolate and vanilla cake layers, stack them with frosting, and top with fresh strawberries."
    },
    { 
        name: "Mango Smoothie",
        description: "Refreshing smoothie made with ripe mangoes and yogurt.",
        image: "/images/mango.webp",
        ingredients: ["mango", "yogurt", "honey", "milk"],
        steps: "Blend ingredients, chill, and serve."
    },
    { 
        name: "Brownie",
        description: "Delicious chocolate brownies with a fudgy texture.",
        image: "/images/brownie.jpg",
        ingredients: ["chocolate", "butter", "sugar", "flour"],
        steps: "Mix ingredients, bake at 180°C, and cut into squares."
    }
];


app.get('/', (req, res) => {
    res.render('index', { recipes });
});


app.get('/recipe/:name', (req, res) => {
    const recipeName = req.params.name.replace(/-/g, ' ').toLowerCase();
    const recipe = recipes.find(r => r.name.toLowerCase() === recipeName);
    
    if (recipe) {
        res.render('recipe', { recipe });
    } else {
        res.status(404).send('Recipe not found');
    }
});


app.post('/search', (req, res) => {
    const searchQuery = req.body.ingredients.toLowerCase().trim();
    const queryIngredients = searchQuery.split(",").map(ing => ing.trim());

    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchQuery) ||
        queryIngredients.every(ingredient => 
            recipe.ingredients.some(recIng => recIng.toLowerCase().includes(ingredient))
        )
    );

    res.render('index', { recipes: filteredRecipes, searchQuery });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});