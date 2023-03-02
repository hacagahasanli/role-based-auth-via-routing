export const quotes = {
    1: { quote: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.", writer: "Steve Jobs" },
    2: { quote: "If you can't explain it simply, you don't understand it well enough. Strive for simplicity in all areas of your life.", writer: "Albert Einstein" },
    3: { quote: "In the end, we will remember not the words of our enemies, but the silence of our friends. Be the friend that speaks up.", writer: "Martin Luther King Jr." },
    4: { quote: "Success is not the key to happiness. Happiness is the key to success. Find what makes you happy and success will follow.", writer: "Albert Schweitzer" },
    5: { quote: "Happiness is not something ready-made. It comes from your own actions. Choose to act in ways that bring you joy.", writer: "Dalai Lama XIV" },
    6: { quote: "Believe you can and you're halfway there. Trust in yourself and your abilities.", writer: "Theodore Roosevelt" },
    7: { quote: "It is not in the stars to hold our destiny but in ourselves. Take control of your life and create the future you desire.", writer: "William Shakespeare" },
    8: { quote: "A person who never made a mistake never tried anything new. Embrace mistakes as opportunities for growth.", writer: "Albert Einstein" },
    9: { quote: "The future belongs to those who believe in the beauty of their dreams. Dream big and have faith in yourself.", writer: "Eleanor Roosevelt" },
    10: { quote: "The best way to predict the future is to invent it. Create the life you want to live.", writer: "Alan Kay" },
    11: { quote: "Don't watch the clock; do what it does. Keep going and stay focused on your goals.", writer: "Sam Levenson" },
    12: { quote: "The best revenge is massive success. Let your success be the ultimate comeback.", writer: "Frank Sinatra" }
};

export const roles = {
    CUSTOMER: {
        role: "Customer",
        role_code: "1010",
    },
    ADMIN: {
        role: "Admin",
        role_code: "0310"
    },
    SELLER: {
        role: "Seller",
        role_code: "0303",
    },
    ASSISTANT: {
        role: "Assistant",
        role_code: "2703"
    }
}

export const authorizedUsers = [
    {
        username: "mike",
        password: "mike123",
        role: "0310",
        userID: "1mike23"
    },
    {
        username: "jane",
        password: "jane123",
        role: "2703",
        userID: "1jane23"
    },
    {
        username: "kate",
        password: "kate123",
        role: "1010",
        userID: "1kate23"
    },
    {
        username: "ruf",
        password: "ruf123",
        role: "0303",
        userID: "1ruf23"
    },
]

export const userType = {
    "0310": "Admin",
    "1010": "Customer",
    "0303": "Seller",
    "2703": "Assistant",
}

