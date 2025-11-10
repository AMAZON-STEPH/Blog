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
//   header: "Celebrating Diversity and Shared Human Experience",
//   content:
//     "In an increasingly connected world, our differences are what make us stronger. Diversity — in culture, language, belief, and perspective — enriches societies and drives creativity, innovation, and empathy. Embracing this diversity allows us to see the world through multiple lenses, building bridges across boundaries and fostering shared understanding.",
//   effecthead1: "Cultural Exchange and Understanding",
//   effecthead2: "Innovation Through Inclusion",
//   effecthead3: "Social Unity and Cooperation",
//   effecthead4: "Overcoming Prejudice and Division",

//   effects1:
//     "When people share traditions, art, and ideas across cultures, they strengthen global bonds and promote respect for different ways of life.",
//   effects2:
//     "Diverse teams and societies tend to be more innovative, as varied perspectives inspire new solutions and creative breakthroughs.",
//   effects3:
//     "Celebrating diversity nurtures a sense of belonging and cooperation, reminding us that humanity thrives when everyone has a voice.",
//   effects4:
//     "While differences can sometimes cause tension, open dialogue and education help dismantle stereotypes and foster mutual respect.",

//   end:
//     "Diversity is more than a concept — it's a reflection of who we are as a global community. By honoring our shared experiences and valuing every culture, we create a world where unity flourishes through understanding and compassion.",
//   img: "../images/football.png",
// },
// {
//   id:2,
//   reporter: "",
//   header: "The Journey from Aspiring Athlete to Global Sports Icon",
//   content:
//     "Behind every celebrated athlete lies a story of perseverance, discipline, and relentless pursuit of excellence. From humble beginnings to global recognition, athletes dedicate years to perfecting their craft, pushing the limits of physical and mental endurance. Their journeys inspire millions, showcasing the power of passion, resilience, and belief in oneself.",
//   effecthead1: "Dedication and Training",
//   effecthead2: "Overcoming Adversity",
//   effecthead3: "Global Recognition and Influence",
//   effecthead4: "Inspiring the Next Generation",

//   effects1:
//     "Athletes commit countless hours to practice and conditioning, refining their skills and maintaining peak performance through discipline.",
//   effects2:
//     "The road to success often includes injuries, losses, and setbacks — yet it's the determination to rise again that defines true champions.",
//   effects3:
//     "Becoming a global icon means more than winning; it's about inspiring change, representing nations, and influencing culture and values worldwide.",
//   effects4:
//     "Their stories ignite dreams in young people everywhere, reminding them that greatness begins with persistence and courage.",

//   end:
//     "From local fields to the world stage, every athlete's journey tells a story of strength, sacrifice, and spirit. As they break records and barriers, they remind us all that success is not only about winning — but about never giving up on the dream.",
//   img: "../images/backjump.png",
// },
// {
//   id: 3,
//   reporter: "",
//   header: "The Economics, Sponsorships, and Branding Behind the Scenes",
//   content:
//     "Beyond the thrill of competition, modern sports are a multibillion-dollar industry powered by economics, sponsorships, and strategic branding. Every match, tournament, and athlete represents an ecosystem of financial decisions, marketing deals, and brand partnerships that shape how sports are consumed and celebrated across the globe.",
//   effecthead1: "Sponsorship and Endorsements",
//   effecthead2: "Broadcasting and Media Rights",
//   effecthead3: "Merchandising and Brand Value",
//   effecthead4: "The Business of Legacy",

//   effects1:
//     "Brands invest heavily in athletes and teams to gain global visibility, making sponsorships one of the most powerful tools in modern marketing.",
//   effects2:
//     "Television and digital streaming rights generate massive revenues, transforming how fans engage with their favorite sports and stars.",
//   effects3:
//     "From jerseys to collectibles, merchandising fuels fan loyalty while reinforcing brand identity and cultural influence.",
//   effects4:
//     "Behind every iconic sports brand lies decades of strategic business moves — turning passion into profit and performance into legacy.",

//   end:
//     "Sports today are not just about winning on the field but also about mastering the business behind it. Through sponsorships, branding, and media innovation, the world of sports continues to evolve — proving that athletic excellence and economic strategy go hand in hand.",
//   img: "../images/swimmers.png",
// },
// {
//   id: 4,
//   reporter: "",
//   header: "Affect the Integrity and Future of Professional Sports",
//   content:
//     "As professional sports evolve into global industries, concerns about integrity, fairness, and sustainability have come to the forefront. From doping scandals and match-fixing to technological interventions and commercial pressures, the very essence of competition is being tested in ways that could redefine the future of athletics.",
//   effecthead1: "Ethical Challenges",
//   effecthead2: "Technological Influence",
//   effecthead3: "Commercial Pressure",
//   effecthead4: "Preserving Fair Play",

//   effects1:
//     "Instances of corruption, cheating, and performance-enhancing drugs threaten the credibility of sports, raising questions about ethics and accountability.",
//   effects2:
//     "Technology — from VAR to AI-driven analytics — is enhancing accuracy but also changing the pace and spontaneity that once defined sporting moments.",
//   effects3:
//     "Sponsorships, endorsements, and financial incentives can sometimes blur the line between passion and profit, shifting focus away from the spirit of the game.",
//   effects4:
//     "Governing bodies and athletes alike are working to restore transparency, fairness, and trust — ensuring the next generation inherits a clean and inspiring sports culture.",

//   end:
//     "The integrity of professional sports is more than just a matter of rules — it's about preserving the values that unite players and fans worldwide. As challenges grow and new technologies emerge, maintaining fairness, honesty, and respect will be crucial in shaping a future where competition remains both inspiring and authentic.",
//   img: "../images/entering taxi.png",
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