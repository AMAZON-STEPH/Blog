import { Nav, date, similarnews, detailed, exist,search} from '../Myjsfiles/nav.js';

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
//     id: 1,
//     reporter: "",
//     header: "Strategies for success in a competitive landscape",
//     content: "in today's fast-paced world, competition is everywhere — from businesses fighting for market share to individuals striving for recognition and growth. Success is no longer about just working hard; it's about working smart and adapting quickly. Understanding what drives competitiveness can help anyone — whether an entrepreneur, student, or professional — stand out and thrive.",
//     effecthead1: "Adaptability & Innovation",
//     effecthead2: "Building Strong Networks",
//     effecthead3: "Strategic Thinking & Planning",
//     effecthead4: "Confilct and Division",
//     effects1:"The ability to adjust to change is one of the strongest predictors of long-term success. Companies and individuals who innovate continuously — by learning new skills, adopting technology, or rethinking old strategies — often emerge as leaders in their fields.",
//     effects2:"In a world where opportunities often come through connections, building genuine relationships can open doors that talent alone cannot. Collaboration, mentorship, and partnerships foster growth, creativity, and resilience.",
//     effects3: "Every successful venture starts with a clear vision and roadmap. Strategic thinking helps prioritize goals, manage risks, and stay focused amid competition. It's not about doing more — it's about doing what matters most effectively.",
//     end:"Success in a competitive landscape isn't defined by luck or timing alone — it's built through vision, adaptability, and persistence. The winners are those who stay curious, think ahead, and turn challenges into stepping stones. In every field, the real competition isn't with others — it's with yesterday's version of yourself.",
//     img: "../images/containegooders.png",
//   },
//   {
//   id: 2,
//   reporter: "",
//   header: "Innovation hubs are transforming traditional business models",
//   content:
//     "In recent years, innovation hubs have become the beating heart of modern economies. These dynamic centers — often combining co-working spaces, research facilities, and digital incubators — are redefining how businesses grow, collaborate, and compete. By bringing together startups, investors, and creative thinkers under one roof, innovation hubs are accelerating the shift from traditional business structures to agile, tech-driven ecosystems.",
//   effecthead1: "Collaboration and Knowledge Sharing",
//   effecthead2: "Accelerating Digital Transformation",
//   effecthead3: "Empowering Startups and Local Talent",
//   effecthead4: "Creating Sustainable Business Models",

//   effects1:
//     "Innovation hubs thrive on collaboration. Unlike traditional companies that often operate in isolation, hubs encourage cross-industry interaction — allowing entrepreneurs, engineers, and creators to exchange ideas freely. This exchange leads to groundbreaking solutions and fresh perspectives that wouldn't emerge in a closed environment.",
//   effects2:
//     "Many traditional businesses struggle to adapt to fast-changing technologies. Innovation hubs act as catalysts by offering access to digital tools, mentorship, and investment. This support helps older industries modernize their operations and adopt sustainable, future-ready strategies.",
//   effects3:
//     "Hubs often serve as launchpads for young entrepreneurs. By providing resources, funding, and networking opportunities, they help new ventures scale faster while retaining local talent that might otherwise move abroad. This not only boosts innovation but also strengthens the local economy.",
//   effects4:
//     "With growing emphasis on sustainability, innovation hubs encourage eco-friendly practices and circular business models. Many now focus on green tech, renewable energy, and ethical AI — ensuring that progress aligns with global goals for a cleaner and fairer economy.",

//   end:
//     "Innovation hubs represent more than just physical spaces — they symbolize a mindset of openness, adaptability, and shared growth. As they continue to shape industries worldwide, the line between old and new business models fades, giving rise to a future where creativity and collaboration drive sustainable success.",
//   img: "../images/carmoving.png",
// },

//   {
//   id: 3,
//   reporter: "",
//   header: "Challenges and solutions in a digital age",
//   content:
//     "The digital revolution has reshaped every aspect of human life — from communication and commerce to education and governance. While technology brings immense opportunity, it also introduces new challenges such as data privacy concerns, cybersecurity threats, and the widening digital divide. As the world becomes increasingly connected, understanding how to manage and mitigate these challenges is key to thriving in the modern era.",
//   effecthead1: "Cybersecurity and Data Protection",
//   effecthead2: "Digital Inequality",
//   effecthead3: "Misinformation and Ethics",
//   effecthead4: "Adapting to Rapid Technological Change",

//   effects1:
//     "As businesses and individuals depend more on digital tools, the risk of cyberattacks and data breaches grows. Strengthening encryption, enforcing privacy laws, and educating users on safe digital practices are critical solutions for protecting personal and organizational data.",
//   effects2:
//     "The gap between those with access to technology and those without continues to expand. Investing in affordable internet, digital literacy programs, and inclusive policies can help bridge this divide and ensure everyone benefits from the digital economy.",
//   effects3:
//     "With information spreading faster than ever, distinguishing fact from misinformation has become a global concern. Promoting media literacy, responsible AI use, and transparent content moderation helps maintain trust in digital platforms.",
//   effects4:
//     "The pace of innovation often outpaces regulation and workforce adaptation. Encouraging lifelong learning, agile policymaking, and flexible business models helps societies stay resilient amid constant digital disruption.",

//   end:
//     "The digital age is both a challenge and an opportunity. By embracing innovation responsibly and ensuring equal access to technology, humanity can harness the power of the digital world to create smarter, safer, and more inclusive societies. The key lies not just in keeping up with technology — but in guiding it toward a better future for all.",
//   img: "../images/fueling.png",
// },
// {
//   id: 4,
//   reporter: "",
//   header: "The evolution of business models in a digital economy",
//   content:
//     "In today’s digital economy, businesses are rapidly adapting to new technologies and consumer behaviors. Traditional structures are giving way to innovative, tech-driven models that emphasize flexibility, personalization, and global reach. From e-commerce to subscription services and platform-based enterprises, the way companies create and deliver value is evolving faster than ever before.",
//   effecthead1: "Rise of Platform Economies",
//   effecthead2: "Data-Driven Decision Making",
//   effecthead3: "Shift Toward Sustainability and Purpose",
//   effecthead4: "Remote and Hybrid Work Models",

//   effects1:
//     "Platforms like Amazon, Uber, and Airbnb have transformed industries by connecting users and providers directly, reducing barriers and creating entirely new ecosystems of exchange.",
//   effects2:
//     "Businesses now rely heavily on data analytics and AI to understand customers, predict trends, and personalize experiences — driving both efficiency and innovation.",
//   effects3:
//     "Consumers increasingly support brands that align with social and environmental values. This shift pushes companies to adopt sustainable practices and transparent missions.",
//   effects4:
//     "The digital age has redefined how and where work happens. Remote collaboration tools, flexible schedules, and global talent networks are shaping the future of productivity.",

//   end:
//     "The evolution of business models in the digital economy reflects more than just technological change — it marks a transformation in how value, trust, and connection are built. As innovation continues to redefine markets, businesses that embrace adaptability, ethics, and customer-centric strategies will lead the way in a new era of global commerce.",
//   img: "../images/digital.png",
// },
// {
//   id: 5,
//   reporter: "",
//   header: "Understanding the interconnectedness of events shaping our world today",
//   content:
//     "In our globalized era, local events often have far-reaching consequences. Economic policies, technological breakthroughs, environmental shifts, and political movements are increasingly linked across borders. A decision made in one part of the world can ripple through markets, communities, and ecosystems, reminding us that the modern world functions as one deeply connected system.",
//   effecthead1: "Global Economic Interdependence",
//   effecthead2: "Shared Environmental Challenges",
//   effecthead3: "Political and Social Influence",
//   effecthead4: "Technological Connectivity",

//   effects1:
//     "Trade, finance, and supply chains tie nations together — meaning a crisis in one economy can trigger global effects, from inflation to shortages.",
//   effects2:
//     "Climate change, resource scarcity, and natural disasters reveal how human actions in one region impact the entire planet's health and stability.",
//   effects3:
//     "Social movements, elections, and policy shifts spread quickly through digital media, influencing public opinion and governance worldwide.",
//   effects4:
//     "The rise of the internet and digital communication means ideas, news, and innovation now move instantly — bridging cultures and accelerating change.",

//   end:
//     "The interconnectedness of global events shows that no nation or individual stands alone. Every action, policy, and innovation contributes to a shared human story. Recognizing this web of connection allows us to make more informed, compassionate, and sustainable decisions — shaping a future built on understanding rather than isolation.",
//   img: "../images/autoliners.png",
// },


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