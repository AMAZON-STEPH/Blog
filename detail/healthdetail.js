import { Nav, date, similarnews, detailed, exist, search} from '../Myjsfiles/nav.js';

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
//   id:1,
//   reporter: "",
//   header: "Tailoring Treatments to Individual Genetic Profiles",
//   content:
//     "Modern medicine is shifting from a one-size-fits-all approach to personalized care. By analyzing individual genetic information, scientists and doctors can now design treatments that target the root causes of diseases — improving outcomes and minimizing side effects.",
//   effecthead1: "Precision Medicine",
//   effecthead2: "Early Detection and Prevention",
//   effecthead3: "Targeted Therapies",
//   effecthead4: "Ethical and Accessibility Challenges",

//   effects1:
//     "Genetic profiling allows doctors to customize treatments based on how a patient's body is likely to respond, leading to more accurate and effective care.",
//   effects2:
//     "By identifying genetic markers linked to certain illnesses, healthcare providers can detect diseases earlier and take preventive actions before symptoms appear.",
//   effects3:
//     "Targeted therapies, especially in cancer treatment, focus on specific genetic mutations, offering patients better results with fewer complications.",
//   effects4:
//     "While promising, personalized medicine raises questions about privacy, cost, and access — ensuring that these innovations reach everyone fairly remains a major challenge.",

//   end:
//     "Tailoring treatments to genetic profiles marks a revolution in healthcare — one that promises longer, healthier lives through science and individuality. As technology advances, the dream of medicine designed uniquely for each person is becoming a reality.",
//   img: "../images/Background.png",
// },
// {
//   id:2,
//   reporter: "",
//   header: "How Technology Is Revolutionizing Patient Experiences",
//   content:
//     "The healthcare industry is undergoing a digital transformation that's redefining how patients interact with medical professionals and access care. From telemedicine to wearable devices, technology is enhancing convenience, efficiency, and personalization in every aspect of the patient journey.",
//   effecthead1: "Telemedicine and Remote Care",
//   effecthead2: "Wearable Health Devices",
//   effecthead3: "AI and Data-Driven Insights",
//   effecthead4: "Improved Accessibility and Engagement",

//   effects1:
//     "Patients can now consult doctors from the comfort of their homes, reducing travel costs and improving access for those in remote areas.",
//   effects2:
//     "Smartwatches and health trackers allow real-time monitoring of vital signs, helping both patients and doctors make informed decisions faster.",
//   effects3:
//     "Artificial intelligence helps analyze massive amounts of health data, supporting faster diagnoses and personalized treatment recommendations.",
//   effects4:
//     "Digital platforms and mobile apps make healthcare more transparent, helping patients stay informed, engaged, and in control of their well-being.",

//   end:
//     "Technology is putting patients at the center of healthcare like never before. As innovation continues, the focus will shift from treating illness to promoting lifelong health — creating a system that's smarter, more responsive, and more human.",
//   img: "../images/patientexperiment.png",
// },
// {
//   id:3,
//   reporter: "",
//   header: "Analyzing the Effects of Global Health Policies",
//   content:
//     "Global health policies play a crucial role in shaping how nations respond to medical challenges, pandemics, and healthcare inequalities. These policies set the tone for international cooperation, funding, and public health strategies — directly impacting the well-being of billions worldwide.",
//   effecthead1: "Improved Global Coordination",
//   effecthead2: "Health Equity and Access",
//   effecthead3: "Economic and Social Impacts",
//   effecthead4: "Challenges in Implementation",

//   effects1:
//     "Global health frameworks foster cooperation between countries, ensuring faster responses to health crises such as pandemics and outbreaks.",
//   effects2:
//     "Many initiatives aim to make healthcare more accessible in low-income nations, though disparities in funding and infrastructure remain significant.",
//   effects3:
//     "Health policies influence not just medicine but economies — strong healthcare systems contribute to stable, productive societies.",
//   effects4:
//     "Differences in governance, culture, and resources make it difficult to apply uniform health standards across diverse nations.",

//   end:
//     "The effectiveness of global health policies lies in collaboration, adaptability, and inclusivity. As the world faces emerging threats and shifting priorities, unified action and shared responsibility remain the key to a healthier, more resilient planet.",
//   img: "../images/healthworld.png",
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