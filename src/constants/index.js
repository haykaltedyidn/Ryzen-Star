import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, bus2, bus1, bus3, bus4, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '2k+', label: 'Rented' },
    { value: '250+', label: 'Unit Bus' },
    { value: '15', label: 'Garage' },
];

export const products = [
    {
        imgURL: bus2,
        name: "Mercedes Benz Jetbus 5 SHD",
        price: "$255",
    },
    {
        imgURL: bus1,
        name: "Mercedes Benz Jetbus 3+ SHD",
        price: "$227,14",
    },
    {
        imgURL: bus3,
        name: "Scania k360 Jetbus 5 SHD",
        price: "$280",
    },
    {
        imgURL: bus4,
        name: "Mercedes Benz Jetbus 5 SHD",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Affordable Price",
        subtext: "We provide the lowest price but with the best quality for you."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer2,
        customerName: 'Kim Jong Un',
        rating: 7.5,
        feedback: "This company is the best bus company I have ever met. excellent service and does not disappoint!."
    },
    {
        imgURL: customer1,
        customerName: 'Song Hye Kyo',
        rating: 8,
        feedback: "This company provides the best service of all time. I really like this company because the crew is very friendly and caring!."
    }
];


export const footerLinks = [
    {
        title: "Other Bus Rent",
        links: [
            { name: "Scania k360 Jb5 Big", link: "/" },
            { name: "Mercedes Benz JB 3+ Big", link: "/" },
            { name: "Hino Rk8 Jb5 Med", link: "/" },
            { name: "Mercedes Benz Jb5 Big", link: "/" },
            { name: "Scania OH 1626 Med", link: "/" },
            { name: "Mercedes Benz Jb3 Med", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "haykaltedysaputra@gmail.com", link: "haykaltedysaputra@gmail.com" },
            { name: "+6281522625992", link: "wa.me/6281522625992" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
