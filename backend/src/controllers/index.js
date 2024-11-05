exports.getProducts = (req, res) => {
    // Logic to retrieve product information
    res.json({
        message: "List of glass etched products",
        products: [
            { id: 1, name: "Glass Award", description: "Custom glass award for events" },
            { id: 2, name: "Corporate Giveaway", description: "Personalized glass giveaways" },
            { id: 3, name: "Glass Mirror", description: "High-quality glass mirrors" }
        ]
    });
};

exports.handleInquiry = (req, res) => {
    // Logic to handle inquiries
    const { name, email, message } = req.body;
    // Here you would typically save the inquiry to a database or send an email
    res.json({
        message: "Thank you for your inquiry, we will get back to you soon!",
        inquiry: { name, email, message }
    });
};