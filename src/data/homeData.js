// ============================================================
//  HOME PAGE DATA -- Edit freely; no coding knowledge required
// ============================================================
import { FaPeopleGroup } from "react-icons/fa6";
import {
  FaHandsHelping,
  FaHandshake,
  FaClipboardCheck,
  FaGlobeAfrica,
  FaShieldAlt,
  FaUsers,
  FaHeart,
} from "react-icons/fa";

// Image for the "About Us" section
import AboutImg from "../assets/aboutGammun-img.jpg";

// Images for the Thematic Area 1
import ThematicArea1Img1 from "../assets/thematic-1,img-1.jpg";
import ThematicArea1Img2 from "../assets/thematic-1,img-2.jpg";

// Images for the Thematic Area 2
import ThematicArea2Img1 from "../assets/thematic-2,img-1.jpg";
import ThematicArea2Img2 from "../assets/thematic-2,img-2.jpg";

// Images for the Thematic Area 3
import ThematicArea3Img1 from "../assets/heroImg-3.jpg";
import ThematicArea3Img2 from "../assets/thematic-3,img-2.jpg";

// Images for the Thematic Area 4
import ThematicArea4Img1 from "../assets/thematic-4,img-1.jpg";
import ThematicArea4Img2 from "../assets/thematic-4,img-2.jpg";

// ABOUT THE NGO
export const aboutData = {
  title: 'About GAMMUN Centre for Care and Development Nigeria (GCCDN)',
  subtitle: 'Who We Are',
  image: AboutImg,
  imageAlt: 'Gammun team working with community members',
  paragraphs: [
  'GAMMUN Centre for Care and Development Nigeria (GCCDN) is a rights-based non-governmental organization committed to promoting health, social justice, and sustainable community development across Nigeria.',

  'Founded in 2010 by the Late Rev. Zachariah Yieju and Tulari Tine, GCCDN was established to address the challenges of HIV/AIDS stigma, reproductive health, and the wellbeing of vulnerable women and children.',

  'Headquartered in Akwanga, Nasarawa State, with field offices in Taraba, Borno, and Kano States, we partner with governments, communities, and development organizations to deliver impactful programs in public health, gender equality, disability inclusion, youth empowerment, and humanitarian response.'
],
  stats: [
    { value: '5,000+', label: 'Lives Impacted' },
    { value: '4', label: 'States Reached' },
    { value: '15+', label: 'Years of Service' },
    { value: '5+', label: 'Partner Organizations' },
  ],
}

// VISION AND MISSION STATEMENT
export const visionMissionData = {
  vision: {
    title: 'Our Vision',
    text: 'A  Healthy and Just Society.',
  },
  mission: {
    title: 'Our Mission',
    text: 'To build and strengthen sustainable individual, family, institutional and community initiatives for health and development through partnership at all levels.',
  },
}


// CORE VALUES
export const coreValuesData = [
  {
    icon: FaHandsHelping,
    title: "Humility",
    description:
      "We serve with humility, placing the needs of communities first and valuing every individual with dignity.",
  },
  {
    icon: FaPeopleGroup,
    title: "Unity",
    description:
      "We foster collaboration and solidarity, working together to achieve lasting impact in the communities we serve.",
  },
  {
    icon: FaHandshake,
    title: "Mutual Respect",
    description:
      "We treat everyone with fairness, dignity, and respect, embracing diversity and valuing every voice.",
  },
  {
    icon: FaClipboardCheck,
    title: "Accountability",
    description:
      "We are responsible stewards of the resources entrusted to us, ensuring transparency, integrity, and measurable results.",
  },
  {
    icon: FaGlobeAfrica,
    title: "Networking & Partnership",
    description:
      "We build strong partnerships with communities, governments, and development organizations to maximize our collective impact.",
  },
  {
    icon: FaShieldAlt,
    title: "Integrity",
    description:
      "We uphold honesty, ethical conduct, and professionalism in all our actions and decisions.",
  },
  {
    icon: FaUsers,
    title: "Team Spirit",
    description:
      "We believe teamwork, trust, and shared responsibility are essential to delivering meaningful and sustainable change.",
  },
  {
    icon: FaHeart,
    title: "You and I",
    description:
      "We believe lasting change happens when everyone works together to transform lives and communities.",
  },
];

// Thematic Areas Data
export const thematicAreasData = [
  {
    id: 1,
    title: 'Prevention, Care & Support (PCS)',
    goal: 'Elimination of all forms of vulnerability and marginalization in target communities',
    description:
      'Our PCS program delivers targeted HIV/AIDS prevention education, links individuals to care and treatment services, and supports people living with HIV through psychosocial counseling, adherence support, and community health worker networks.',
    images: [
      ThematicArea1Img1,
      ThematicArea1Img2
    ],
    color: 'from-primaryGreen to-darkGreen',
    accent: 'bg-green-50 border-primaryGreen',
  },
  {
    id: 2,
    title: 'Disability Inclusive Development (DID)',
    goal: 'Improve the quality of lives of people with disabilities',
    description:
      'DID advocates for the rights and inclusion of persons with disabilities in education, economic opportunities, and community life. We work with government and private sector partners to remove systemic barriers and build accessible environments.',
    images: [
      ThematicArea2Img1,
      ThematicArea2Img2
    ],
    color: 'from-primaryBlue to-darkBlue',
    accent: 'bg-blue-50 border-primaryBlue',
  },
  {
    id: 3,
    title: 'Women & Youth Development',
    goal: 'Improved wellbeing for women and youth',
    description:
      'Through skills training, mentorship, economic empowerment programs, and civic engagement initiatives, we equip women and youth with the tools they need to build resilient livelihoods and become catalysts for community transformation.',
    images: [
      ThematicArea3Img1,
      ThematicArea3Img2
    ],
    color: 'from-primaryGreen to-primaryBlue',
    accent: 'bg-green-50 border-darkGreen',
  },
  {
    id: 4,
    title: 'Protection & Health',
    goal: 'Eliminate all forms of Gender Based Violence',
    description:
      'Our protection and health programming addresses gender-based violence, child protection, and access to essential health services. We train frontline workers, strengthen referral pathways, and advocate for protective policies that uphold the dignity of all persons.',
    images: [
      ThematicArea4Img1,
      ThematicArea4Img2
    ],
    color: 'from-darkBlue to-darkGreen',
    accent: 'bg-blue-50 border-darkBlue',
  },
]
