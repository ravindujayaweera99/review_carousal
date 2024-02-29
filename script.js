const reviews = [
    {
        id: 1,
        image: "customers/1.jpg",
        name: "Susan Smith",
        job: "Senior Marketing Manager at a Digital Advertising Agency",
        description: "Absolutely thrilled with my purchase! The product exceeded my expectations in terms of quality and functionality. Shipping was lightning fast, and the customer service was top-notch. Will definitely be recommending this to all my friends!"
    },
    {
        id: 2,
        image: "customers/2.jpg",
        name: "Emily Clerke",
        job: "Environmental Policy Analyst at a Nonprofit Organization focused on Conservation",
        description: "I've been searching for a reliable solution for [specific problem] for months, and I'm so glad I found this product! It's incredibly effective and easy to use. Plus, the company's commitment to sustainability and ethical manufacturing practices is commendable. I'm a happy customer!"
    },
    {
        id: 3,
        image: "customers/3.jpg",
        name: "John Paul",
        job: "Lead Software Developer at a Tech Startup specializing in Artificial Intelligence Applications",
        description: "I was initially skeptical about trying out this product, but I'm so glad I did! It has made a noticeable difference in my daily routine. The team behind it really cares about their customers' satisfaction, and it shows. I've already ordered a second one as a gift for my friend. Highly recommend!"
    },
];

function generateRandomReview() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let randomValue = reviews.find(reviews => reviews.id === randomNumber);
    console.log(randomValue);

    let customerNamen = document.getElementById("name");
    customerNamen.innerText = randomValue.name;

    let img = document.getElementById("profile-picture");
    img.src = randomValue.image;

    let job = document.getElementById("job");
    job.innerText = randomValue.job;

    let desc = document.getElementById("desc");
    desc.innerText = randomValue.description;
}

