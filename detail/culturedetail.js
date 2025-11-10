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
//  {
//   id:1,
//   reporter: "",
//   header: "How Generations Are Redefining Heritage & Cultural Norms",
//   content:
//     "Around the world, younger generations are reshaping what it means to belong, express identity, and honor cultural traditions. While many embrace the past with pride, they are also questioning long-held values, adapting customs, and merging global influences to reflect modern realities. This redefinition of heritage marks a profound cultural evolution — one that balances respect for roots with the pursuit of self-expression.",
//   effecthead1: "Shifting Traditions",
//   effecthead2: "Globalization and Influence",
//   effecthead3: "Technology and Cultural Exchange",
//   effecthead4: "Preserving Identity Amid Change",

//   effects1:
//     "New generations reinterpret customs, from fashion to language and family roles, blending tradition with contemporary ideas of freedom and equality.",
//   effects2:
//     "Exposure to global cultures through travel, education, and media fosters open-mindedness but also challenges local norms and social expectations.",
//   effects3:
//     "Digital platforms and social media give young people tools to share, remix, and preserve culture — creating new spaces for dialogue and innovation.",
//   effects4:
//     "Communities are finding creative ways to celebrate their heritage while ensuring it remains relevant and inclusive in a rapidly changing world.",

//   end:
//     "Culture is not static — it evolves with every generation that inherits it. As the young redefine heritage and traditions, they are crafting a future where identity is fluid, inclusive, and deeply personal. In this transformation lies the beauty of humanity's shared story: honoring where we come from while shaping where we are going.",
//   img: "../images/heritage.png",
// },
// {
//   id:2,
//   reporter: "",
//   header: "Analyzing the Figures Who Reshape Our Social Narratives",
//   content:
//     "From activists and artists to thought leaders and innovators, certain individuals are redefining the way societies understand justice, identity, and progress. These figures challenge conventions, inspire dialogue, and give voice to communities often left unheard. Their influence extends beyond speeches or performances — it shapes how people think, act, and engage with the world around them.",
//   effecthead1: "Cultural Influence",
//   effecthead2: "Social Activism",
//   effecthead3: "Media and Representation",
//   effecthead4: "Legacy and Change",

//   effects1:
//     "Artists, writers, and creators use their platforms to reflect and question the realities of society, inspiring new ways of thinking and connecting across divides.",
//   effects2:
//     "Leaders and activists drive conversations on equity, climate action, and human rights — using visibility and courage to push for systemic reform.",
//   effects3:
//     "Through film, journalism, and social media, influential figures reshape narratives by amplifying diverse perspectives and exposing hidden truths.",
//   effects4:
//     "The stories and movements sparked by these individuals leave lasting imprints, encouraging future generations to challenge norms and seek transformation.",

//   end:
//     "Social change rarely happens in silence. The figures who dare to question and redefine our collective story remind us that progress is a shared effort — one built on courage, creativity, and the power of voices unafraid to speak truth to power.",
//   img: "../images/dance.png",
// },
// {
//   id:3,
//   reporter: "",
//   header: "Preserving Cultural Traditions in a Rapidly Changing World",
//   content:
//     "As technology, globalization, and modernization accelerate, many communities are working tirelessly to preserve their cultural roots. Languages, rituals, music, and crafts that have defined identities for centuries now face the challenge of remaining relevant in a digital age. Yet, amid the rush toward innovation, there is a growing awareness that heritage is not a relic of the past — but a living thread that connects generations.",
//   effecthead1: "Cultural Identity and Pride",
//   effecthead2: "Intergenerational Transmission",
//   effecthead3: "Globalization vs. Localization",
//   effecthead4: "Revival Through Innovation",

//   effects1:
//     "Cultural traditions strengthen a sense of belonging, reminding communities of their origins, values, and shared history.",
//   effects2:
//     "Elders and educators play vital roles in passing down traditions, ensuring younger generations understand and embrace their heritage.",
//   effects3:
//     "While globalization brings new influences, it also risks overshadowing local customs — sparking efforts to celebrate and protect cultural uniqueness.",
//   effects4:
//     "Digital storytelling, online archives, and creative reinterpretations are helping ancient practices find new life and audiences worldwide.",

//   end:
//     "Preserving culture in a fast-paced world is more than resistance to change — it's an act of resilience. By blending tradition with innovation, communities ensure that their stories, songs, and symbols continue to shape the world of tomorrow.",
//   img: "../images/camel.png",
// },
// {
//   id:4,
//   reporter: "",
//   header: "A Deep Dive into the Influence of Cultural Movements on Contemporary Society",
//   content:
//     "Cultural movements have always been powerful forces shaping the way societies think, act, and evolve. From the rise of digital activism to artistic revolutions and global youth trends, these movements challenge the status quo and inspire change. They influence how people express identity, engage with politics, and connect across borders — redefining what it means to be part of a global community.",
//   effecthead1: "Social Awareness and Activism",
//   effecthead2: "Artistic Expression and Media Influence",
//   effecthead3: "Generational Shifts in Values",
//   effecthead4: "Cultural Fusion and Global Connectivity",

//   effects1:
//     "Movements centered on equality, justice, and sustainability are raising awareness and mobilizing communities worldwide to act for social change.",
//   effects2:
//     "Art, music, and digital media serve as powerful tools of expression — spreading messages that shape opinions and challenge cultural norms.",
//   effects3:
//     "Younger generations are redefining priorities, emphasizing authenticity, inclusivity, and collaboration over competition and tradition.",
//   effects4:
//     "As cultures blend through global exchange, hybrid identities and shared experiences are transforming how people view belonging and diversity.",

//   end:
//     "Cultural movements remind us that progress is not just political or economic — it's deeply human. They push societies to reflect, adapt, and grow, weaving new patterns of understanding in an ever-changing world.",
//   img: "../images/liveupdate.png",
// },
// {
//   id: 5,
//   reporter: "",
//   header: "Global Efforts to Combat Environmental Challenges",
//   content:
//     "As the planet faces escalating climate crises, nations, organizations, and individuals are joining forces to protect our shared home. From renewable energy initiatives to conservation programs and green innovations, global efforts to combat environmental challenges are gaining momentum. Yet, the path toward sustainability requires more than technology — it demands unity, accountability, and lasting commitment.",
//   effecthead1: "International Collaboration",
//   effecthead2: "Technological Innovation",
//   effecthead3: "Policy and Regulation",
//   effecthead4: "Grassroots and Community Action",

//   effects1:
//     "Agreements like the Paris Climate Accord highlight the growing recognition that climate change transcends borders and requires collective global solutions.",
//   effects2:
//     "Advancements in clean energy, electric mobility, and sustainable agriculture are driving a shift toward eco-friendly development models.",
//   effects3:
//     "Governments are enacting stricter environmental laws and promoting green incentives to reduce emissions and preserve biodiversity.",
//   effects4:
//     "Local communities and youth-led movements are taking action — from reforestation drives to waste reduction campaigns — proving that small actions can create global impact.",

//   end:
//     "The fight against environmental degradation is a defining challenge of our time. As global efforts continue to evolve, one message stands clear: protecting the Earth is not a choice but a shared responsibility for generations to come.",
//   img: "../images/globalchallenge.png",
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