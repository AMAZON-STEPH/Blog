// import { Nav, date, similarnews } from '../Myjsfiles/nav.js';

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
//     header: "Far-Right Prepares for Post-Election Violence",
//   content:
//     "As political tensions rise worldwide, far-right groups in several countries are reportedly organizing and spreading narratives of election fraud even before ballots are cast. These movements, fueled by misinformation and extremist rhetoric, are preparing for potential unrest in the aftermath of upcoming elections — challenging democratic stability and public trust in institutions.",
//   effecthead1: "Threat to Democracy",
//   effecthead2: "Spread of Misinformation",
//   effecthead3: "Public Safety Concerns",
//   effecthead4: "Government and Community Response",
//   effects1:
//     "Far-right mobilization undermines democratic values by eroding confidence in fair elections and peaceful transitions of power.",
//   effects2:
//     "Online platforms and echo chambers amplify false claims, deepening divisions and heightening fear among citizens.",
//   effects3:
//     "Authorities anticipate potential violence at protests and rallies, prompting increased security and preventive monitoring.",
//   effects4:
//     "Governments, media organizations, and civil society groups are working to counter extremist messaging and promote calm discourse.",
//   end:
//     "The rise in far-right agitation underscores the fragility of democracy in polarized times. Combating violence and misinformation requires vigilance, transparency, and collective effort to preserve peace and protect democratic principles.",
//   img: "../images/vote.png",
//   },
//   {
//   id: 2,
//   reporter: "",
//   header: "Elon Musk's $1M Giveaways Spark Controversy",
//   content:
//     "Tech billionaire Elon Musk has once again captured global attention — this time for launching a series of $1 million online giveaways. While some hail the move as an act of generosity and innovation, critics argue it's a publicity stunt designed to boost engagement across Musk's social media platforms. The giveaways have ignited debates over wealth, influence, and the ethics of digital philanthropy.",
//   effecthead1: "Public Perception",
//   effecthead2: "Digital Influence",
//   effecthead3: "Ethical Questions",
//   effecthead4: "Economic Symbolism",
//   effects1:
//     "Supporters see the giveaways as a modern form of generosity that empowers everyday people through direct online engagement.",
//   effects2:
//     "The campaign highlights Musk,s unparalleled ability to shape public discourse and online trends with a single post.",
//   effects3:
//     "Critics question the authenticity and fairness of the giveaways, raising concerns about data privacy and manipulation.",
//   effects4:
//     "The move symbolizes the growing gap between billionaire power and public trust, sparking wider reflection on global inequality.",
//   end:
//     "Elon Musk's latest initiative blurs the line between charity, marketing, and influence. Whether viewed as benevolence or strategy, it underscores how social media and wealth now intersect to redefine global conversations about generosity and power.",
//   img: "../images/elonmosk.png",
// },
//   {
//   id: 3,
//   reporter: "",
//   header: "US Election Update: A Divided Nation",
//   content:
//     "The 2024 U.S. election has once again revealed deep divisions across the nation. With record voter turnout and heated debates over democracy, the economy, and social justice, the election reflects a country wrestling with its identity and future direction. Both major parties mobilized millions of voters, turning the race into one of the most polarized contests in recent history.",
//   effecthead1: "Political Polarization",
//   effecthead2: "Media and Misinformation",
//   effecthead3: "Social Division",
//   effecthead4: "Global Impact",
//   effects1:
//     "Americans remain sharply divided along political, racial, and ideological lines, making bipartisan cooperation increasingly difficult.",
//   effects2:
//     "Social media continues to amplify partisan narratives, shaping voter opinions and spreading misinformation faster than ever before.",
//   effects3:
//     "Communities are struggling to find common ground as political identities become more central to personal and social relationships.",
//   effects4:
//     "The world closely watches the U.S. election outcomes, as American policies continue to influence global economics, defense, and diplomacy.",
//   end:
//     "As the dust settles, the 2024 election stands as a reminder of both the power and fragility of democracy. Healing a divided nation will require more than political victories — it will demand dialogue, understanding, and a renewed sense of shared purpose among Americans.",
//   img: "../images/usflag.png",
// },
//     {
//   id: 4,
//   reporter: "",
//   header: "Trump's Potential Cabinet",
//   content:
//     "As speculation grows around Donald Trump's return to the White House, attention has turned to who might fill the key roles in his potential cabinet. The former president has hinted at assembling a team loyal to his political agenda, prioritizing figures who share his views on immigration, trade, and national security. Many expect a cabinet that reflects his commitment to 'America First' policies, with a renewed focus on domestic industry and border control.",
//   effecthead1: "Political Loyalty",
//   effecthead2: "Policy Direction",
//   effecthead3: "Global Implications",
//   effecthead4: "Public Reaction",
//   effects1:
//     "Trump's potential picks are likely to emphasize loyalty over bipartisan collaboration, ensuring tight alignment with his leadership style.",
//   effects2:
//     "Analysts predict a stronger push for restrictive immigration policies, economic nationalism, and reduced environmental regulations.",
//   effects3:
//     "A Trump-led cabinet could redefine U.S. relationships with allies, prioritizing self-interest over multilateral diplomacy.",
//   effects4:
//     "Public opinion remains sharply divided, with supporters praising his decisiveness and critics warning of increased polarization.",
//   end:
//     "Whether or not Trump reclaims the presidency, his cabinet selections will shape the nation's policy direction and global stance for years to come. The choices he makes could determine whether his next administration deepens division or redefines American power on the world stage.",
//   img: "../images/trump.png",
// },
//   {
//   id: 5,
//   reporter: "",
//   header: "Kamala Harris' Policies",
//   content:
//     "As Kamala Harris steps further into national leadership, her policy agenda represents a vision of progress rooted in equality, opportunity, and justice. From economic empowerment to climate responsibility, Harris's approach seeks to modernize America's institutions while ensuring that every citizen has a fair chance to thrive. Her platform reflects both compassion and practicality, appealing to those who desire meaningful yet achievable change.",
//   effecthead1: "Economic Growth and Empowerment",
//   effecthead2: "Climate and Environmental Action",
//   effecthead3: "Social and Racial Justice",
//   effecthead4: "Healthcare and Education Reform",
//   effects1:
//     "Harris supports raising the minimum wage, expanding access to capital for small businesses, and boosting middle-class job opportunities in emerging industries.",
//   effects2:
//     "Her climate plan emphasizes clean energy innovation, carbon neutrality, and strong investments in green infrastructure to ensure sustainable growth.",
//   effects3:
//     "A long-time advocate for equality, she promotes police reform, gender equity, and protections for marginalized communities across the nation.",
//   effects4:
//     "Harris is focused on lowering healthcare costs, protecting reproductive rights, and increasing federal support for public education and childcare programs.",
//   end:
//     "Kamala Harris' policies aim to balance progress and unity — promoting fairness, innovation, and inclusion in a rapidly changing world. Her leadership continues to shape the national dialogue on what a more just and equitable America could look like.",
//   img: "../images/kamala.png",
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

import { Nav, date, similarnews, detailed, exist, search } from '../Myjsfiles/nav.js';

document.addEventListener("DOMContentLoaded", () => {
  Nav();
  date();
  similarnews();
  detailed();
  exist();
  search();
});
