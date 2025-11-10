//  import { Nav, date, similarnews } from '../Myjsfiles/nav.js';

// document.addEventListener("DOMContentLoaded", () => {
//   Nav();
//   date();
//   similarnews();

// const params = new URLSearchParams(window.location.search);
// const id = params.get("id");

// let user = [
//   {
//     id: 1,
//     reporter: "",
//     header: "Understanding the social movements reshaping our world today",
//     content: "In recent years, the world has witnessed a wave of social movements that are challenging traditional systems, redefining values, and amplifying the voices of the unheard. From protests for justice and equality to climate activism and calls for political reform, these movements are changing how societies function — and how people view their place within them",
//     effecthead1: "Political Change",
//     effecthead2: "Cultural Awareness",
//     effecthead3: "Economic Impact",
//     effecthead4: "Confilct and Division",
//     effects1:"Many movements push governments to create fairer laws and policies on issues like justice, equality, and the environment.",
//     effects2:"They open conversations about race, gender, and human rights, helping people understand and respect each other more.",
//     effects3: "Businesses now face pressure to act responsibly and support social causes or risk losing public trust.",
//     effects4:"Not everyone agrees with these changes, sometimes leading to tension — but even that can spark new discussions.",
//     end:"Social movements remind us that change begins with courage — the courage to speak, to stand, and to act. Around the world, people are rising to challenge injustice and build a fairer, kinder society. Though the road is not always easy, every voice raised adds to a growing wave of hope and progress. Together, we are rUnderstanding the social movements reshaping our world todayeshaping the world — one movement at a time.",
//     img: "../images/soildersshooting.png",
//   },
//   {
//     id: 2,
//     reporter: "",
//     header: "The global financial landscape and its implications for all",
//     content: "In today's interconnected world, the global financial landscape influences nearly every aspect of our lives — from the price of food to the stability of entire nations. Shifts in markets, digital currencies, inflation trends, and trade relations shape how wealth is distributed and how countries cooperate or compete. Understanding these changes is key to navigating a rapidly evolving economic future.",
//     effecthead1: "Economic Inequality",
//     effecthead2: "Technological Transformation",
//     effecthead3: "Global Cooperation and Tension",
//     effecthead4: "Financial Inclusion and Access",

//     effects1:
//     "Wealth gaps continue to widen as developed economies recover faster than developing ones, deepening inequality across borders.",
//     effects2:
//     "Digital currencies, AI-driven trading, and fintech innovations are redefining how people and businesses manage money worldwide.",
//    effects3:
//     "Trade policies, sanctions, and currency fluctuations affect global alliances — sometimes fostering cooperation, other times sparking financial conflicts.",
//    effects4:
//     "More people are gaining access to financial tools through mobile banking and microcredit, yet millions still remain excluded from global markets.",

//    end:
//     "The global financial system is more complex and connected than ever before. Its evolution offers both opportunity and risk — demanding that leaders, investors, and individuals alike adapt with wisdom and foresight. As nations and citizens navigate these tides, one truth remains: the future of finance is the future of us all.",
//     img: "../images/global.png",
//   },
//   {
//     id: 3,
//     reporter: "",
//     header: "Examining the challenges and responses of nations",
//     content:
//       "Across the globe, nations are grappling with a complex mix of economic, environmental, and social challenges. From political instability to climate change and technological disruption, governments face the pressing task of protecting citizens while adapting to new realities. How countries respond to these crises often determines not only their survival but also their influence in a rapidly shifting world.",
//     effecthead1: "Economic Strain",
//     effecthead2: "Political Instability",
//     effecthead3: "Climate and Environmental Pressure",
//     effecthead4: "Global Cooperation and Resilience",

//     effects1:
//       "Many countries struggle with rising inflation, debt, and unemployment — testing the strength of their financial systems and social safety nets.",
//     effects2:
//       "Protests, power struggles, and leadership crises are reshaping political landscapes, forcing nations to redefine governance and accountability.",
//     effects3:
//       "Climate disasters such as floods, droughts, and wildfires are pushing nations to invest more in sustainability and disaster preparedness.",
//     effects4:
//       "While challenges often divide, they also inspire collaboration — with nations uniting through diplomacy, aid, and shared technological innovation.",

//     end:
//       "Every challenge faced by a nation reveals its resilience and adaptability. In times of uncertainty, the strength of leadership, community, and vision determines the path forward. The world continues to watch how each country rises to meet its trials — shaping the collective future of humanity.",
//       img: "../images/examining.png",
//     },
//     {
//       id: 4,
//       reporter: "",
//      header: "A comprehensive analysis of the state of global affairs",
//   content:
//     "The state of global affairs today is shaped by interconnected political, economic, and social forces. Geopolitical tensions, shifting trade patterns, public health concerns, and technological advances all interact to create a fast-changing landscape. Understanding these overlapping trends helps citizens and leaders anticipate risks and identify opportunities for cooperation and stability.",
//   effecthead1: "Geopolitical Shifts",
//   effecthead2: "Economic Volatility",
//   effecthead3: "Public Health and Security",
//   effecthead4: "Technological & Social Change",
//   effects1:
//     "Realignments between major powers and regional partnerships are redefining diplomatic priorities and security calculations.",
//   effects2:
//     "Market instability, supply-chain disruptions, and divergent recovery rates are creating uncertainty for businesses and households worldwide.",
//   effects3:
//     "Pandemics, health system strains, and biosecurity concerns highlight the need for coordinated global responses and stronger public-health infrastructure.",
//   effects4:
//     "Rapid tech adoption — from AI to digital platforms — is transforming societies, accelerating both opportunity and disruption.",
//   end:
//     "A comprehensive view of global affairs reveals that no single nation or actor can address these challenges alone. Multilateral cooperation, resilient institutions, and informed public debate are essential to navigate complexity and build a more stable, equitable future.",

//       img: "../images/fire.png",
//     },
//    {
//     id: 5,
//     reporter: "",
//       header: "Celebrating diversity and shared human experience",
//   content:
//     "Across cultures and continents, people express their identities through language, art, faith, and tradition. Despite our differences, we are united by shared emotions, dreams, and struggles. Celebrating diversity allows societies to grow stronger, more creative, and more compassionate — turning what divides us into what connects us.",
//   effecthead1: "Cultural Exchange",
//   effecthead2: "Social Inclusion",
//   effecthead3: "Education and Awareness",
//   effecthead4: "Global Unity",
//   effects1:
//     "Festivals, art, and travel open windows into other ways of life, encouraging mutual appreciation and understanding.",
//   effects2:
//     "Promoting inclusion ensures that everyone — regardless of background — has a voice and sense of belonging in society.",
//   effects3:
//     "Learning about diverse histories and values helps dispel stereotypes and builds empathy among generations.",
//   effects4:
//     "When nations and communities embrace diversity, they contribute to a more peaceful and cooperative global future.",
//   end:
//     "Diversity is not a challenge to overcome, but a strength to celebrate. By recognizing the beauty in our differences and the depth of our shared humanity, we build bridges that connect people, cultures, and generations across the world.",

//     img: "../images/football.png",
//   }
// ];
// let newUsers = user.find((items) => items.id == id);

// const display = document.getElementById("display");
// display.innerHTML = `
// <div class="flex flex-col gap-3">
//     <img class="w-full" src="${newUsers.picUrl}">
//    <div class="flex items-center gap-1 border-t border-gray-700 border-b py-1">
//       ${newUsers.reporter}
//       <i class="far fa-user text-[24px] bg-gray-300 rounded-full p-2"></i>
//     <div class="flex flex-col">
//       <h3 class="font-[700] tracking-tight">GUY HAWKINS</h3>
//       <span class="font-[400] flex items-center gap-1">
//       <i class="far fa-calendar-days font-[100]"></i> 
//       <p class="today text-[13px]"></p></span>
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

import { Nav, date, similarnews, detailed, exist, search} from '../Myjsfiles/nav.js';

document.addEventListener("DOMContentLoaded", () => {
  Nav();
  date();
  similarnews();
  detailed();
  exist();
  search();
});