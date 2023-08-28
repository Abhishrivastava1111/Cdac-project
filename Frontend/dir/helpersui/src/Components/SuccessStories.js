/* SuccessStory.js */
import React from 'react';
import './SuccessStory.css';

import shantimohan from "./image/shanti-mohan.jpg";
import yuvrajsingh from "./image/yuvraj-singh.jpg";
import vijaysekhar from "./image/vijay-sekhar-sharma.png";
import hopewelfare from "./image/hope-welfare.webp";
import sriKrishna from "./image/sri-krishna-charitable-trust.webp";
import ramlal from "./image/ramlal-oldage.webp";
import helpinghand from "./image/helpinghands.webp";

const successStories = [
  {
    image: shantimohan,
    name: "Shanti Mohan",
    title: "Founder of LetsVenture",
    text: "What struck me most about this venture is the passion and commitment of the founders to make the process of giving easy. They have a good understanding of the problem statement and have an even better solution.",
  },
  {
    image: yuvrajsingh,
    name: "Yuvraj Singh",
    title: "Former Indian International Cricketer",
    text: "Helper's Planet is a unique platform where you can be assured that the products you donate are delivered responsibly to NGOs. I’m so happy to have partnered with them to help so many people during the pandemic.",
  },
  {
    image: vijaysekhar,
    name: "Vijay Shekhar Sharma",
    title: "Founder of One97 & Paytm",
    text: "Anyone who donates often thinks about whether they’re actually making a difference. This is why Helper's Planet is an incredible idea - you can clearly see the impact your donations have made in the form of products delivered to the NGOs.",
  },
  {
    image: hopewelfare,
    name: "Hope WelFare Trust",
    title: "",
    text: "Helper's Planet से सहयोग प्राप्त कर होप वेलफेयर ट्रस्ट ने कई निर्धनों, जरूरतमंदो, नाविकों, बुनकरों को असीम सेवा प्रदान किया। होप संस्था एक माध्यम बनकर Helper's Planet के आदर्श वाक्य को जमीन पर उतारने का पूरा प्रयास पिछले 2 वर्ष से कर रही है। Helper's Planet का दक्षिण भारत में मुख्यालय होने के बावजूद इन्होंने होप टीम के साथ मिलकर उत्तरप्रदेश की सुदूरवर्ती गांव में अपनी अमिट पहचान बनाई है, जिसके लिए होप संस्था Helper's Planet की आजीवन ऋणी रहेगी। मुफ्त में तो हवा भी नहीं मिलता इसके लिए भी सांस लेना पड़ता है लेकिन Helper's Planet ने होप टीम के माध्यम से लाखो जरूरतमंदो तक मुफ्त में राशन वितरण में ना तो हमने जाती देखी ना ही धर्म ना ही क्षेत्र, यही तो हमारा पवित्र आदर्श है जिसपर हम लगातार चलते है।",
  },
  {
    image: sriKrishna,
    name: "Shri Krishna Charitable Trust",
    title: "",
    text: "Helper's Planet is the perfect platform that connects donors to NGOs. Having partnered with them for a few campaigns, we can safely say that they have been extremely transparent and have helped us impact the lives of thousands.",
  },
  {
    image: ramlal,
    name: "Ramlal Old Age Home & Gaushala",
    title: "",
    text: "Helper's Planet is a very good crowdfunding platform which helps the poor, helpless, voiceless creatures across the country. Ram Lal Old Age Home & Gaushala and other institutions are always ready to help. We express our heartfelt gratitude to Helper's Planet for their complete support by running successful campaigns. Helper's Planet is a trustworthy platform with an honest team.",
  },
  {
    image: helpinghand,
    name: "Helping Hands",
    title: "",
    text: "We would like to thank Helper's Planet for running our campaign. Through this campaign, we were able to arrange sufficient food and medical supply for more than 170 dogs at our shelter. From the beginning of our conversation regarding the initiation of this campaign to now, we have received outstanding support from the donatekart team regarding the campaign creation, order of food, medicine, and other required assistance. We are glad to have this support and hope we will continue such collaboration with Helper's Planet in the future as well.",
  },
];

function SuccessStory() {
  return (
    <div className="container">
      <h1 className="title">Success Stories</h1>
      <div className="success-stories">
        {successStories.map((story, index) => (
          <div className="contact-card" key={index}>
            <img src={story.image} className="profile-img" alt={story.name} />
            <br/>
            <h2>{story.name}</h2>
            <h3>{story.title}</h3>
            <p>{story.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuccessStory;
