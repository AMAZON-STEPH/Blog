import { Nav, date, similarnews, detailed, exist, search } from '../Myjsfiles/nav.js';

document.addEventListener("DOMContentLoaded", () => {
  Nav();
  date();
  similarnews();
  detailed();
  exist();
  search();
});
// const params = new URLSearchParams(window.location.search);
// const id = params.get("id");

// let user = [
//   {
//   id: 1,
//   reporter: "",
//   header: "Understanding the role of big data in driving technological advancement",
//   content:
//     "Big data has become the backbone of modern innovation. From healthcare and finance to education and entertainment, massive amounts of information are being collected and analyzed to uncover insights that shape the way industries operate. The ability to process and interpret large datasets is transforming technology — making systems smarter, faster, and more efficient than ever before.",
//   effecthead1: "Enhanced Decision-Making",
//   effecthead2: "Personalized Experiences",
//   effecthead3: "Predictive Innovation",
//   effecthead4: "Ethical and Privacy Concerns",

//   effects1:
//     "Businesses and governments use big data analytics to make data-driven decisions, reducing uncertainty and improving outcomes across sectors.",
//   effects2:
//     "From streaming platforms to e-commerce, big data enables tailored recommendations and customized services that enhance user satisfaction.",
//   effects3:
//     "Machine learning and artificial intelligence thrive on big data, allowing systems to predict trends, prevent failures, and innovate proactively.",
//   effects4:
//     "As data collection grows, so do concerns about privacy, surveillance, and bias — raising questions about how to balance progress with responsibility.",

//   end:
//     "Big data continues to redefine what is possible in technology and beyond. While its potential is limitless, its responsible use will determine how society benefits from it. Understanding and managing data wisely is key to building a future where innovation serves humanity rather than overwhelms it.",
//   img: "../images/bigdata.png",
// },
// {
//   id: 2,
//   reporter: "",
//   header: "Latest Innovations Pave the Way to a Sustainable Future",
//   content:
//     "Across the globe, scientists, entrepreneurs, and innovators are developing groundbreaking technologies aimed at solving some of the planet’s most pressing environmental challenges. From clean energy to smart agriculture and green infrastructure, the push for sustainability is reshaping industries and inspiring a new era of responsible progress.",
//   effecthead1: "Renewable Energy Revolution",
//   effecthead2: "Sustainable Urban Development",
//   effecthead3: "Green Technology and Innovation",
//   effecthead4: "Global Collaboration for Change",

//   effects1:
//     "Solar, wind, and hydro advancements are reducing dependence on fossil fuels while making renewable energy more affordable and accessible worldwide.",
//   effects2:
//     "Cities are adopting eco-friendly designs, electric transport systems, and waste-reduction initiatives to create cleaner, healthier living environments.",
//   effects3:
//     "Innovations such as biodegradable materials, AI-powered recycling, and carbon capture technologies are driving the shift toward sustainability.",
//   effects4:
//     "Nations, organizations, and individuals are working together to achieve climate goals, highlighting the power of global unity in addressing shared challenges.",

//   end:
//     "The future of sustainability lies in continuous innovation and shared responsibility. As technology evolves, so does humanity's ability to protect and restore the planet. Each breakthrough — no matter how small — brings us one step closer to a greener, more resilient world for generations to come.",
//   img: "../images/latest innovation.png",
// },
// {
//   id: 3,
//   reporter: "",
//   header: "Exploring the Latest Developments in AI and Robotics",
//   content:
//     "Artificial Intelligence and robotics are no longer futuristic concepts — they're rapidly becoming essential to how the world works. From healthcare and manufacturing to education and space exploration, AI-driven systems and intelligent machines are transforming industries, improving efficiency, and redefining what's possible for humanity.",
//   effecthead1: "Automation and Efficiency",
//   effecthead2: "AI in Everyday Life",
//   effecthead3: "Ethical and Social Implications",
//   effecthead4: "The Future of Human Collaboration",

//   effects1:
//     "Robots and AI-powered tools are streamlining operations, reducing errors, and increasing productivity across industries like logistics, agriculture, and production.",
//   effects2:
//     "From virtual assistants and self-driving cars to smart home systems, artificial intelligence is enhancing convenience and personalizing user experiences.",
//   effects3:
//     "As technology advances, questions around privacy, job displacement, and ethical responsibility are becoming central to the AI conversation.",
//   effects4:
//     "Rather than replacing humans, the future of AI and robotics lies in collaboration — combining human creativity with machine precision for smarter problem-solving.",

//   end:
//     "AI and robotics continue to push the boundaries of innovation, offering both exciting opportunities and complex challenges. As the technology matures, humanity's role will be to guide its growth responsibly — ensuring a future where progress serves people and empowers societies worldwide.",
//   img: "../images/theirai.png",
// },
// {
//   id: 4,
//   reporter: "",
//   header: "The Future of Computing and What It Means for Society",
//   content:
//     "From quantum processors to advanced neural networks, computing is entering a new era that will redefine how we live, work, and connect. The evolution of computing power is not just about faster machines — it's about unlocking new possibilities in science, communication, and human potential.",
//   effecthead1: "Quantum Advancements",
//   effecthead2: "Artificial Intelligence Integration",
//   effecthead3: "Data Privacy and Security",
//   effecthead4: "Societal and Economic Shifts",

//   effects1:
//     "Quantum computing promises to solve complex problems that are currently beyond the reach of classical computers — from medical research to climate modeling.",
//   effects2:
//     "As computing and AI merge, smart systems will make faster, data-driven decisions, transforming industries like healthcare, education, and finance.",
//   effects3:
//     "With more computing power comes greater responsibility. Protecting data and ensuring cybersecurity will be critical as systems become more interconnected.",
//   effects4:
//     "Automation and digital transformation will reshape job markets and global economies, demanding new skills and adaptability from societies worldwide.",

//   end:
//     "The future of computing is poised to expand human capability in ways once thought impossible. As innovation accelerates, society must find a balance — harnessing these advances for progress while safeguarding ethics, equality, and human dignity.",
//   img: "../images/futurecomputing.png",
// },
// {
//   id: 5,
//   reporter: "",
//   header: "How Technology Is Revolutionizing Urban Living",
//   content:
//     "Across the world, cities are transforming into smarter, more efficient, and sustainable environments. Technology is reshaping how people move, communicate, work, and interact within urban spaces — turning traditional cities into connected ecosystems designed for the future.",
//   effecthead1: "Smart Infrastructure",
//   effecthead2: "Sustainable Living",
//   effecthead3: "Enhanced Mobility",
//   effecthead4: "Digital Connectivity",

//   effects1:
//     "From intelligent traffic systems to energy-efficient buildings, smart infrastructure improves city planning and helps reduce congestion and pollution.",
//   effects2:
//     "Green technologies such as renewable energy grids, waste-to-energy systems, and smart water management are promoting eco-friendly urban living.",
//   effects3:
//     "Ride-sharing apps, electric vehicles, and real-time public transport tracking make commuting faster, safer, and more accessible for everyone.",
//   effects4:
//     "With 5G networks and IoT devices, residents can connect to services instantly — managing everything from home security to healthcare through digital platforms.",

//   end:
//     "Technology is not just changing the appearance of cities; it's redefining the way people experience them. As innovation continues, urban life will become more sustainable, inclusive, and adaptive — shaping cities that truly serve the needs of their citizens.",
//   img: "../images/urban.png"
// }

// ];
// let newUsers = user.find((items) => items.id == id);

// const display = document.getElementById("display");
// display.innerHTML = `
// <div class="flex flex-col gap-3">
//     <img class="w-full" src="${newUsers.img}">
//    <div class="flex items-center gap-1 border-t border-gray-700 border-b py-1">
//       ${newUsers.reporter}
//       <i class="far fa-user text-[24px] bg-gray-300 rounded-full p-2"></i>
//     <div class="flex flex-col">
//       <h3 class="font-[700] tracking-tight">GUY HAWKINS</h3>
//       <span class="font-[400] flex items-center gap-1">
//       <i class="far fa-calendar-days font-[100]"></i> 
//       <p class="today text-[13px]">bb</p></span>
//     </div>
//     </div>
//     <div class="flex flex-col gap-3">
//        <h3 class="font-[500] text-[24px] lg:text-[30px]">${newUsers.header.toUpperCase("")}</h3>
//        <p class="text-[16px]">${newUsers.content}</p>
//     <ul class="list-disc flex flex-col gap-2">
//        <li class="font-[500] text-[18px]">${newUsers.effecthead1} -
//        <p class="font-[400] text-[15px]">${newUsers.effects1}</p>
//        </h3>
//     <li class="font-[500] text-[18px]">${newUsers.effecthead2} -
//        <p class="font-[400] text-[15px]">${newUsers.effects2}</p>
//        </h3>
//      <li class="font-[500] text-[18px]">${newUsers.effecthead3} -
//        <p class="font-[400] text-[15px]">${newUsers.effects3}</p>
//        </h3>
//      <li class="font-[500] text-[18px]">${newUsers.effecthead4} -
//        <p class="font-[400] text-[15px]">${newUsers.effects4}</p>
//        </h3>
//     </ul>
//     <p class="text-[16px]">${newUsers.end}</p>
//     </div>
//     </div>
      
// </div>
   
//  `;
// })