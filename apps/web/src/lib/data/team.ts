export const COMMITTEES = [
  "scottylabs",
  "events",
  "outreach",
  "tech",
  "labrador",
  "design",
  "finance",
] as const;

export type Committee = (typeof COMMITTEES)[number];

export type Person = {
  name: string;
  photo?: string;
  linkedin?: string;
};

export type TeamMember = {
  person: PersonId;
  role: string;
};

export type Year = {
  label: string;
  directors: Partial<Record<Committee, PersonId>>;
  teams: Partial<Record<Committee, TeamMember[]>>;
};

// please maintain alphabetical order
export const PEOPLE = {
  "aarnav-patel": {
    name: "Aarnav Patel",
    photo: "AarnavPatel.jpg",
    linkedin: "https://www.linkedin.com/in/aarnav-patel-ba397b244/",
  },
  "akshath-jain": {
    name: "Akshath Jain",
    photo: "AkshathJain.jpg",
    linkedin: "https://www.linkedin.com/in/akshath-j-99b93b139/",
  },
  "alan-pham": {
    name: "Alan Pham",
    photo: "AlanPham.jpg",
    linkedin: "https://www.linkedin.com/in/alanpham06/",
  },
  "alexander-obolenskiy": {
    name: "Alexander Obolenskiy",
    photo: "AlexanderObolenskiy.jpg",
    linkedin: "https://www.linkedin.com/in/alexander-obolenskiy/",
  },
  "allen-gu": {
    name: "Allen Gu",
    // Allen requested not to have a photo
    linkedin: "https://www.linkedin.com/in/allen-gu/",
  },
  "amita-goyal": {
    name: "Amita Goyal",
    photo: "AmitaGoyal.jpg",
    linkedin: "https://www.linkedin.com/in/amita-goyal-a23697172/",
  },
  "amy-choi": {
    name: "Amy Choi",
    photo: "AmyChoi.jpg",
    linkedin: "https://www.linkedin.com/in/amy-choi-a54bb21b7/",
  },
  "amy-quispe": {
    name: "Amy Quispe",
    photo: "AmyQuispe.jpg",
    linkedin: "https://www.linkedin.com/in/amyquispe/",
  },
  "andrew-benson": {
    name: "Andrew Benson",
    photo: "AndrewBenson.jpg",
    linkedin: "https://www.linkedin.com/in/andrewdbenson/",
  },
  "andy-gao": {
    name: "Andy Gao",
    photo: "AndyGao.jpg",
    linkedin: "https://www.linkedin.com/in/agao1224/",
  },
  "angela-lou": {
    name: "Angela Lou",
    photo: "AngelaLou.jpg",
    linkedin: "https://www.linkedin.com/in/angela-lou-96b430250/",
  },
  "anika-halappanavar": {
    name: "Anika Halappanavar",
    photo: "AnikaHalappanavar.jpg",
    linkedin: "https://www.linkedin.com/in/anika-halappanavar-b4357b20a/",
  },
  "anish-pallati": {
    name: "Anish Pallati",
    photo: "AnishPallati.jpg",
    linkedin: "https://www.linkedin.com/in/anish-pallati/",
  },
  "anna-gu": {
    name: "Anna Gu",
    photo: "AnnaGu.jpg",
    linkedin: "https://www.linkedin.com/in/anna-gu-b7591a299/",
  },
  "anuda-weerasinghe": {
    name: "Anuda Weerasinghe",
    photo: "AnudaWeerasinghe.jpg",
    linkedin: "https://www.linkedin.com/in/anudaw/",
  },
  "anushka-saxena": {
    name: "Anushka Saxena",
    photo: "AnushkaSaxena.jpg",
    linkedin: "https://www.linkedin.com/in/anushkasaxena1/",
  },
  "arjun-patel": {
    name: "Arjun Patel",
    photo: "ArjunPatel.jpg",
    linkedin: "https://www.linkedin.com/in/arjun-niraj-patel/",
  },
  "arleen-liu": {
    name: "Arleen Liu",
    photo: "ArleenLiu.jpg",
    linkedin: "https://www.linkedin.com/in/arleenliu/",
  },
  "audrey-jin": {
    name: "Audrey Jin",
    photo: "AudreyJin.jpg",
    linkedin: "https://www.linkedin.com/in/audreyjin/",
  },
  "autumn-qiu": {
    name: "Autumn Qiu",
    photo: "AutumnQiu.jpg",
    linkedin: "https://www.linkedin.com/in/autumn-qiu/",
  },
  "bach-ha-lan-vu": {
    name: "Bach Ha Lan Vu",
  },
  "bradley-teo": {
    name: "Bradley Teo",
    photo: "BradleyTeo.jpg",
    linkedin: "https://www.linkedin.com/in/bradley-teo/",
  },
  "brandon-wei": {
    name: "Brandon Wei",
    photo: "BrandonWei.jpg",
    linkedin: "https://www.linkedin.com/in/brandon-wei21/",
  },
  "bryan-huang": {
    name: "Bryan Huang",
    photo: "BryanHuang.png",
    linkedin: "https://www.linkedin.com/in/hung-hsun-huang-608962330/",
  },
  "cassandra-zhou": {
    name: "Cassandra Zhou",
    photo: "CassandraZhou.jpg",
    linkedin: "https://www.linkedin.com/in/runxin-zhou/",
  },
  "chloe-deng": {
    name: "Chloe Deng",
    photo: "ChloeDeng.jpg",
    linkedin: "https://www.linkedin.com/in/chloehdeng/",
  },
  "chloe-sun": {
    name: "Chloe Sun",
    photo: "ChloeSun.jpg",
    linkedin: "https://www.linkedin.com/in/chloe-sun-b58b9b1b3/",
  },
  "chloe-yan": {
    name: "Chloe Yan",
    photo: "ChloeYan.jpg",
    linkedin: "https://www.linkedin.com/in/chloe-yan/",
  },
  "christina-li": {
    name: "Christina Li",
  },
  "connor-mowry": {
    name: "Connor Mowry",
    photo: "ConnorMowry.jpg",
    linkedin: "https://www.linkedin.com/in/crcmowry/",
  },
  "cooper-bruno": {
    name: "Cooper Bruno",
    photo: "CooperBruno.jpg",
    linkedin: "https://www.linkedin.com/in/cooperbruno/",
  },
  "daisy-zeng": {
    name: "Daisy Zeng",
    linkedin: "https://www.linkedin.com/in/daisy-zeng/",
  },
  "david-hwang": {
    name: "David Hwang",
    photo: "DavidHwang.jpg",
    linkedin: "https://www.linkedin.com/in/h-davidethan/",
  },
  "deepayan-patra": {
    name: "Deepayan Patra",
    photo: "DeepayanPatra.jpg",
    linkedin: "https://www.linkedin.com/in/thepinetree/",
  },
  "dhiren-narne": {
    name: "Dhiren Narne",
    photo: "DhirenNarne.jpg",
    linkedin: "https://www.linkedin.com/in/dhirennarne/",
  },
  "dipika-sharma": {
    name: "Dipika Sharma",
    photo: "DipikaSharma.jpg",
    linkedin: "https://www.linkedin.com/in/dipika-sharma-carnegiemellondesign/",
  },
  "drew-inglis": {
    name: "Drew Inglis",
    photo: "DrewInglis.jpg",
    linkedin: "https://www.linkedin.com/in/drewinglis/",
  },
  "dylan-yang": {
    name: "Dylan Yang",
    photo: "DylanYang.jpg",
    linkedin: "https://www.linkedin.com/in/dylany666/",
  },
  "edison-dao": {
    name: "Edison Dao",
    photo: "EdisonDao.jpg",
    linkedin: "https://www.linkedin.com/in/edisondao/",
  },
  "elin-zhou": {
    name: "Elin Zhou",
    photo: "ElinZhou.jpg",
    linkedin: "https://www.linkedin.com/in/elin-zhou-08606820a/",
  },
  "elise-chapman": {
    name: "Elise Chapman",
    photo: "EliseChapman.jpg",
    linkedin: "https://www.linkedin.com/in/elise-raich-chapman-8267b11ab/",
  },
  "elizabeth-louie": {
    name: "Elizabeth Louie",
    photo: "ElizabethLouie.jpg",
    linkedin: "https://www.linkedin.com/in/elizabethlouie/",
  },
  "ellyse-lai": {
    name: "Ellyse Lai",
    photo: "EllyseLai.jpg",
    linkedin: "https://www.linkedin.com/in/ellyse-lai/",
  },
  "emily-guo": {
    name: "Emily Guo",
    photo: "EmilyGuo.jpg",
    linkedin: "https://www.linkedin.com/in/emily-guo17/",
  },
  "emily-lau": {
    name: "Emily Lau",
    photo: "EmilyLau.png",
    linkedin: "https://www.linkedin.com/in/emily-lau-design/",
  },
  "emily-lo": {
    name: "Emily Lo",
    photo: "EmilyLo.jpg",
    linkedin: "https://www.linkedin.com/in/loemily/",
  },
  "emily-newman": {
    name: "Emily Newman",
    photo: "EmilyNewman.jpg",
    linkedin: "https://www.linkedin.com/in/epnewman/",
  },
  "eric-cheng": {
    name: "Eric Cheng",
    photo: "EricCheng.jpg",
    linkedin: "https://www.linkedin.com/in/eh8/",
  },
  "eric-xu": {
    name: "Eric Xu",
    photo: "EricXu.jpg",
    linkedin: "https://www.linkedin.com/in/eric-xu-032890214/",
  },
  "eunsoo-oh": {
    name: "Eunsoo Oh",
    photo: "EunsooOh.jpg",
    linkedin: "https://www.linkedin.com/in/eunsoooh/",
  },
  "evan-foster": {
    name: "Evan Foster",
    photo: "EvanFoster.jpg",
    linkedin: "https://www.linkedin.com/in/ebfoster/",
  },
  "fara-yan": {
    name: "Fara Yan",
    photo: "FaraYan.jpg",
    linkedin: "https://www.linkedin.com/in/farayan/",
  },
  "gabriel-hall": {
    name: "Gabriel Hall",
    photo: "GabrielHall.png",
    linkedin: "https://www.linkedin.com/in/gabriel-hall",
  },
  "gram-liu": {
    name: "Gram Liu",
    photo: "GramLiu.jpg",
    linkedin: "https://www.linkedin.com/in/gramliu/",
  },
  "hana-benko": {
    name: "Hana Benko",
    photo: "HanaBenko.jpg",
    linkedin: "https://www.linkedin.com/in/hana-benko/",
  },
  "haresh-muralidharan": {
    name: "Haresh Muralidharan",
    photo: "HareshMuralidharan.png",
    linkedin: "https://www.linkedin.com/in/haresh-m/",
  },
  "hong-lin": {
    name: "Hong Lin",
    photo: "HongLin.jpg",
    linkedin: "https://www.linkedin.com/in/linhong2000/",
  },
  "indu-arimilli": {
    name: "Indu Arimilli",
    photo: "InduArimilli.jpg",
    linkedin: "https://www.linkedin.com/in/induarimilli/",
  },
  "ivy-wang": {
    name: "Ivy Wang",
    photo: "IvyWang.jpg",
    linkedin: "https://www.linkedin.com/in/ivy-wang-cmu061221/",
  },
  "jack-hurewitz": {
    name: "Jack Hurewitz",
    photo: "JackHurewitz.avif",
    linkedin: "https://github.com/JackHurew",
  },
  "jackie-gaston": {
    name: "Jackie Gaston",
    photo: "JackieGaston.jpg",
    linkedin: "https://www.linkedin.com/in/jacquelinegastonpetersen/",
  },
  "jaclyn-yang": {
    name: "Jaclyn Yang",
    photo: "JaclynYang.jpg",
    linkedin: "https://www.linkedin.com/in/jaclyn-yang/",
  },
  "jaisal-patel": {
    name: "Jaisal Patel",
    photo: "JaisalPatel.jpg",
    linkedin: "https://www.linkedin.com/in/jaisal-p/",
  },
  "jake-zimmerman": {
    name: "Jake Zimmerman",
    photo: "JakeZimmerman.jpg",
    linkedin: "https://jez.io/",
  },
  "jalen-lu": {
    name: "Jalen Lu",
    photo: "JalenLu.jpg",
    linkedin: "https://www.linkedin.com/in/jalenluorion/",
  },
  "jason-chang": {
    name: "Jason Chang",
    photo: "JasonChang.jpg",
    linkedin: "https://www.linkedin.com/in/jason-c-a35a52126/",
  },
  "jason-yao": {
    name: "Jason Yao",
    photo: "JasonYao.jpg",
    linkedin: "https://www.linkedin.com/in/jyao6429/",
  },
  "jean-chen": {
    name: "Jean Chen",
    photo: "JeanChen.jpg",
    linkedin: "https://www.linkedin.com/in/jeanxcrj/",
  },
  "jeff-cooper": {
    name: "Jeff Cooper",
    photo: "JeffCooper.jpg",
    linkedin: "https://www.linkedin.com/in/thejeffcooper/",
  },
  "jessica-cai": {
    name: "Jessica Cai",
    photo: "JessicaCai.jpg",
    linkedin: "https://www.linkedin.com/in/jessica-cai006/",
  },
  "jett-chen": {
    name: "Jett Chen",
    photo: "JettChen.webp",
    linkedin: "https://www.linkedin.com/in/jettchen/",
  },
  "joanna-ni": {
    name: "Joanna Ni",
    photo: "JoannaNi.jpg",
    linkedin: "https://www.linkedin.com/in/joanna-ni-887870262/",
  },
  "john-cao": {
    name: "John Cao",
    photo: "JohnCao.jpg",
    linkedin: "https://www.linkedin.com/in/john-cao-56d993/",
  },
  "jonathan-gong": {
    name: "Jonathan Gong",
    photo: "JonathanGong.jpg",
    linkedin: "https://www.linkedin.com/in/gong-jonathan/",
  },
  "jonathan-oh": {
    name: "Jonathan Oh",
    photo: "JonathanOh.png",
    linkedin: "https://www.linkedin.com/in/joonho-oh/",
  },
  "joon-kwon": {
    name: "Joon Kwon",
    photo: "JoonKwon.jpg",
    linkedin: "https://www.linkedin.com/in/joonkwonn/",
  },
  "josef-macera": {
    name: "Josef Macera",
    photo: "JosefMacera.jpg",
    linkedin: "https://www.linkedin.com/in/josefmacera/",
  },
  "josh-durham": {
    name: "Josh Durham",
    photo: "JoshDurham.jpg",
    linkedin: "https://www.linkedin.com/in/joshua-durham-486442151/",
  },
  "josh-zhanson": {
    name: "Josh Zhanson",
    photo: "JoshZhanson.jpg",
    linkedin: "https://www.linkedin.com/in/joshua-zhanson-147b61128/",
  },
  "joyce-hong": {
    name: "Joyce Hong",
    photo: "JoyceHong.jpg",
    linkedin: "https://www.linkedin.com/in/joyce-hong-b53985204/",
  },
  "julia-teitelbaum": {
    name: "Julia Teitelbaum",
    photo: "JuliaTeitelbaum.jpg",
    linkedin: "https://www.linkedin.com/in/juliateitelbaum/",
  },
  "justin-gallagher": {
    name: "Justin Gallagher",
    photo: "JustinGallagher.jpg",
    linkedin: "https://www.linkedin.com/in/justingallag/",
  },
  "katherine-zhao": {
    name: "Katherine Zhao",
    photo: "KatherineZhao.jpg",
    linkedin: "https://www.linkedin.com/in/katherine-zhao16/",
  },
  "keiffer-acoba": {
    name: "Keiffer Acoba",
    photo: "KeifferAcoba.jpg",
    linkedin: "https://www.linkedin.com/in/keiffer-acoba/",
  },
  "kellie-medlin": {
    name: "Kellie Medlin",
    photo: "KellieMedlin.jpg",
    linkedin: "https://www.linkedin.com/in/kellie-medlin-aa39b543/",
  },
  "krish-saxena": {
    name: "Krish Saxena",
    photo: "KrishSaxena.jpg",
    linkedin: "https://www.linkedin.com/in/krish-saxena-5883a4304/",
  },
  "krit-dass": {
    name: "Krit Dass",
    photo: "KritDass.jpg",
    linkedin: "https://www.linkedin.com/in/kritdass/",
  },
  "kunal-sharda": {
    name: "Kunal Sharda",
    photo: "KunalSharda.jpg",
    linkedin: "https://www.linkedin.com/in/kunal-sharda/",
  },
  "kyla-anderson": {
    name: "Kyla Anderson",
    photo: "KylaAnderson.jpg",
    linkedin: "https://www.linkedin.com/in/kyla-anderson-designer/",
  },
  "laasya-aki": {
    name: "Laasya Aki",
    photo: "LaasyaAki.jpg",
    linkedin: "https://www.linkedin.com/in/laasyaaki/",
  },
  "lee-rodriguez": {
    name: "Lee Rodriguez",
    photo: "LeeRodriguez.png",
    linkedin: "https://www.linkedin.com/in/lee-rodriguez/",
  },
  "lena-poshni": {
    name: "Lena Poshni",
    photo: "LenaPoshni.jpg",
    linkedin: "https://www.linkedin.com/in/lenaposhni18/",
  },
  "leon-liu": {
    name: "Leon Liu",
    photo: "LeonLiu.jpg",
    linkedin: "https://www.linkedin.com/in/leon-liu-6950632a3/",
  },
  "li-ying": {
    name: "Li Ying",
    photo: "LiYing.jpg",
    linkedin: "https://www.linkedin.com/in/li-ying-9a5667357/",
  },
  "lois-chang": {
    name: "Lois Chang",
    photo: "LoisChang.png",
    linkedin: "https://www.loisyenachang.com/",
  },
  "luke-hann": {
    name: "Luke Hann",
    photo: "LukeHann.jpg",
    linkedin: "https://www.linkedin.com/in/luke-hann-2ba585322/",
  },
  "maelle-allanic": {
    name: "Maelle Allanic",
    photo: "MaelleAllanic.jpg",
    linkedin: "https://www.linkedin.com/in/maelle-allanic/",
  },
  "marian-qian": {
    name: "Marian Qian",
    photo: "MarianQian.jpg",
    linkedin: "https://www.linkedin.com/in/marian-q-721580169/",
  },
  "mark-fan": {
    name: "Mark Fan",
    linkedin: "http://arom1a.com/",
  },
  "mark-vella": {
    name: "Mark Vella",
    photo: "MarkVella.jpg",
    linkedin: "https://www.linkedin.com/in/markcvella/",
  },
  "matthew-mingus": {
    name: "Matthew Mingus",
    photo: "MatthewMingus.jpg",
    linkedin: "https://www.linkedin.com/in/mmingus/",
  },
  "max-wen": {
    name: "Max Wen",
    photo: "MaxWen.jpg",
    linkedin: "https://www.linkedin.com/in/max-wen/",
  },
  "mayank-jain": {
    name: "Mayank Jain",
    photo: "MayankJain.jpg",
    linkedin: "https://www.linkedin.com/in/mjain30/",
  },
  "meera-rajendran": {
    name: "Meera Rajendran",
    photo: "MeeraRajendran.jpg",
    linkedin: "https://www.linkedin.com/in/meera-r-945886205/",
  },
  "megan-gu": {
    name: "Megan Gu",
    photo: "MeganGu.jpg",
    linkedin: "https://www.linkedin.com/in/megan-gu-62797a2a0/",
  },
  "michael-becker": {
    name: "Michael Becker",
    photo: "MichaelBecker.png",
    linkedin: "https://michaelwilliambecker.com/#/",
  },
  "michael-zhou": {
    name: "Michael Zhou",
    photo: "MichaelZhou.jpg",
    linkedin: "https://www.linkedin.com/in/michaelhzhou/",
  },
  "michelle-li": {
    name: "Michelle Li",
    photo: "MichelleLi.jpg",
    linkedin: "https://www.linkedin.com/in/michelleli77/",
  },
  "mihir-dhamankar": {
    name: "Mihir Dhamankar",
    photo: "MihirDhamankar.jpg",
    linkedin: "https://www.linkedin.com/in/mihirdhamankar/",
  },
  "monisha-gopal": {
    name: "Monisha Gopal",
    photo: "MonishaGopal.jpg",
    linkedin: "https://www.linkedin.com/in/monisha-gopal/",
  },
  "nandan-nair": {
    name: "Nandan Nair",
    photo: "NandanNair.jpg",
    linkedin: "https://www.linkedin.com/in/nandan-nair-3b92402a6/",
  },
  "nicolas-ettlin": {
    name: "Nicolas Ettlin",
    photo: "NicolasEttlin.jpg",
    linkedin: "https://www.linkedin.com/in/ettlin/",
  },
  "nithya-kemp": {
    name: "Nithya Kemp",
    photo: "NithyaKemp.jpg",
    linkedin: "https://www.linkedin.com/in/nithya-kemp-a2941b220/",
  },
  "olivia-corrodi": {
    name: "Olivia Corrodi",
    photo: "OliviaCorrodi.jpg",
    linkedin: "https://www.linkedin.com/in/olivia-corrodi/",
  },
  "oscar-bezi": {
    name: "Oscar Bezi",
    photo: "OscarBezi.jpg",
    linkedin: "https://bezi.io/",
  },
  "oscar-dadfar": {
    name: "Oscar Dadfar",
    photo: "OscarDadfar.jpg",
    linkedin: "https://www.linkedin.com/in/oscar-dadfar-3699b15b/",
  },
  "pi-rey-low": {
    name: "Pi Rey Low",
    photo: "PiReyLow.jpg",
    linkedin: "https://www.linkedin.com/in/pireylow/",
  },
  "preethi-krishnamoorthy": {
    name: "Preethi Krishnamoorthy",
    photo: "PreethiKrishnamoorthy.jpg",
    linkedin: "https://www.linkedin.com/in/preethikrish/",
  },
  "qianxue-cici-ge": {
    name: "Qianxue (Cici) Ge",
    photo: "CiciGe.png",
    linkedin: "https://www.linkedin.com/in/cici-ge/",
  },
  "quintin-carlon": {
    name: "Quintin Carlon",
    photo: "QuintinCarlon.jpg",
    linkedin: "https://www.linkedin.com/in/qcarlson/",
  },
  "raghav-gupta": {
    name: "Raghav Gupta",
    photo: "RaghavGupta.jpg",
    linkedin: "https://www.linkedin.com/in/raghavgupta84/",
  },
  "rajeev-godse": {
    name: "Rajeev Godse",
    photo: "RajeevGodse.jpg",
    linkedin: "https://www.linkedin.com/in/rajeevgodse/",
  },
  "richard-guo": {
    name: "Richard Guo",
    photo: "RichardGuo.jpg",
    linkedin: "https://www.linkedin.com/in/rwguo/",
  },
  "richard-yan": {
    name: "Richard Yan",
    photo: "RichardYan.jpg",
    linkedin: "https://www.linkedin.com/in/richard-yan-81b982170/",
  },
  "robin-han": {
    name: "Robin Han",
    photo: "RobinHan.jpg",
    linkedin: "https://www.linkedin.com/in/r-han/",
  },
  "ryan-kim": {
    name: "Ryan Kim",
    photo: "RyanKim.jpg",
    linkedin: "https://www.linkedin.com/in/ryan-kim-59323b26b/",
  },
  "ryan-lau": {
    name: "Ryan Lau",
    linkedin: "https://www.linkedin.com/in/ryan-lau-wh/",
  },
  "ryan-li": {
    name: "Ryan Li",
    photo: "RyanLi.jpg",
    linkedin: "https://www.linkedin.com/in/ryan-li-ab139919b/",
  },
  "ryhan-hassan": {
    name: "Ryhan Hassan",
    photo: "RyhanHassan.jpg",
    linkedin: "https://www.linkedin.com/in/ryhan-hassan-622b3a24/",
  },
  "sam-mathew": {
    name: "Sam Mathew",
    photo: "SamMathew.jpg",
    linkedin: "https://www.linkedin.com/in/sam-mathew-1a9778254/",
  },
  "samhitha-duggirala": {
    name: "Samhitha Duggirala",
    photo: "SamhithaDuggirala.jpg",
    linkedin: "https://www.linkedin.com/in/samhitha-duggirala/",
  },
  "sanjana-meduri": {
    name: "Sanjana Meduri",
    photo: "SanjanaMeduri.jpg",
    linkedin: "https://www.linkedin.com/in/sanjana-meduri/",
  },
  "sara-chokshi": {
    name: "Sara Chokshi",
    photo: "SaraChokshi.jpg",
    linkedin: "https://www.linkedin.com/in/sara-chokshi-9a0523191/",
  },
  "saumeya-suseenthiran": {
    name: "Saumeya Suseenthiran",
    photo: "SaumeyaSuseenthiran.jpg",
    linkedin: "https://www.linkedin.com/in/saumeya-suseenthiran-012684252/",
  },
  "sayan-chaudhry": {
    name: "Sayan Chaudhry",
    photo: "SayanChaudhry.jpg",
    linkedin: "https://www.linkedin.com/in/sayanchaudhry/",
  },
  "scott-krulcik": {
    name: "Scott Krulcik",
    photo: "ScottKrulcik.png",
    linkedin: "https://www.scottkrulcik.com/",
  },
  "serena-wang": {
    name: "Serena Wang",
    photo: "SerenaWang.jpg",
    linkedin: "https://www.linkedin.com/in/serena-w/",
  },
  "shalom-yiblet": {
    name: "Shalom Yiblet",
    photo: "ShalomYiblet.jpg",
    linkedin: "https://www.linkedin.com/in/yiblet/",
  },
  "shannon-lin": {
    name: "Shannon Lin",
    photo: "ShannonLin.jpg",
    linkedin: "https://www.linkedin.com/in/shannonalin/",
  },
  "shreeya-khurana": {
    name: "Shreeya Khurana",
    photo: "ShreeyaKhurana.jpg",
    linkedin: "https://www.linkedin.com/in/shreeya-khurana/",
  },
  "srinivas-lade": {
    name: "Srinivas Lade",
    photo: "SrinivasLade.jpg",
    linkedin: "https://www.linkedin.com/in/srinivas-lade/",
  },
  "sruti-srinidhi": {
    name: "Sruti Srinidhi",
    photo: "SrutiSrinidhi.jpg",
    linkedin: "https://www.linkedin.com/in/sruti-srinidhi/",
  },
  "stacy-chen": {
    name: "Stacy Chen",
    photo: "StacyChen.jpg",
    linkedin: "https://www.linkedin.com/in/stacy-chen-9862551b0/",
  },
  "stephanie-wang": {
    name: "Stephanie Wang",
    photo: "StephanieWang.jpg",
    linkedin: "https://www.linkedin.com/in/stephanie-wang-cmu/",
  },
  "stephanie-you": {
    name: "Stephanie You",
    photo: "StephanieYou.jpg",
    linkedin: "https://www.linkedin.com/in/stephanieyou/",
  },
  "susan-ni": {
    name: "Susan Ni",
    photo: "SusanNi.jpg",
    linkedin: "https://www.linkedin.com/in/susan-ni/",
  },
  "swati-anshu": {
    name: "Swati Anshu",
    photo: "SwatiAnshu.jpg",
    linkedin: "https://www.linkedin.com/in/swatianshu/",
  },
  "taylor-poulos": {
    name: "Taylor Poulos",
    photo: "TaylorPoulos.jpg",
    linkedin: "https://www.linkedin.com/in/taylor-poulos-34854b338/",
  },
  "ted-gershon": {
    name: "Ted Gershon",
    photo: "TedGershon.jpg",
    linkedin: "https://www.linkedin.com/in/tedgershon/",
  },
  "tevin-wang": {
    name: "Tevin Wang",
    photo: "TevinWang.jpg",
    linkedin: "https://www.linkedin.com/in/tevinwang/",
  },
  "theo-urban": {
    name: "Theo Urban",
    photo: "TheoUrban.jpg",
    linkedin: "https://www.linkedin.com/in/tsurban/",
  },
  "thomas-kanz": {
    name: "Thomas Kanz",
    photo: "ThomasKanz.jpg",
    linkedin: "https://www.linkedin.com/in/thomas-kanz/",
  },
  "tika-naik": {
    name: "Tika Naik",
    photo: "TikaNaik.jpg",
    linkedin: "https://www.linkedin.com/in/tika-naik/",
  },
  "tom-shen": {
    name: "Tom Shen",
    photo: "TomShen.jpg",
    linkedin: "https://www.linkedin.com/in/tomzshen/",
  },
  "varshini-selvadurai": {
    name: "Varshini Selvadurai",
    photo: "VarshiniSelvadurai.jpg",
    linkedin: "https://www.linkedin.com/in/varshini-selvadurai-322572165/",
  },
  "vedanth-ramanathan": {
    name: "Vedanth Ramanathan",
    photo: "VedanthRamanathan.jpg",
    linkedin: "https://www.linkedin.com/in/vedanthramanathan/",
  },
  "vinay-vemuri": {
    name: "Vinay Vemuri",
    photo: "VinayVemuri.jpg",
    linkedin: "https://www.linkedin.com/in/vinay-vyas-vemuri-1845b140/",
  },
  "vincent-lo": {
    name: "Vincent Lo",
    photo: "VincentLo.png",
    linkedin: "https://www.linkedin.com/in/vincentlo12/",
  },
  "wendy-yu": {
    name: "Wendy Yu",
    photo: "WendyYu.jpg",
    linkedin: "https://www.linkedin.com/in/wendyyu35/",
  },
  "xavier-lien": {
    name: "Xavier Lien",
    photo: "XavierLien.jpg",
    linkedin: "https://www.linkedin.com/in/xavilien/",
  },
  "yelim-kim": {
    name: "Yelim Kim",
    photo: "YelimKim.jpg",
    linkedin: "https://www.linkedin.com/in/yelim-kim/",
  },
  "yiyoung-liu": {
    name: "Yiyoung Liu",
    photo: "YiyoungLiu.png",
    linkedin: "https://www.linkedin.com/in/yiyoung-liu/",
  },
  "yo-lei-chen": {
    name: "Yo-Lei Chen",
    photo: "Yo-LeiChen.jpg",
    linkedin: "https://www.linkedin.com/in/yoleichen/",
  },
  "yoshi-torralva": {
    name: "Yoshi Torralva",
    photo: "YoshiTorralva.jpg",
    linkedin: "https://www.linkedin.com/in/ytorralva/",
  },
  "yuchen-zhou": {
    name: "Yuchen Zhou",
    photo: "YuchenZhou.jpg",
    linkedin: "https://www.linkedin.com/in/yuchen-zhou-58289a247/",
  },
  "yuxiang-huang": {
    name: "Yuxiang Huang",
    photo: "YuxiangHuang.jpg",
    linkedin: "https://www.linkedin.com/in/yu-xiang-huang/",
  },
} as const satisfies Record<string, Person>;

export type PersonId = keyof typeof PEOPLE;

export const YEARS: Year[] = [
  {
    label: "2026-27",
    directors: {
      scottylabs: "thomas-kanz",
      events: "evan-foster",
      outreach: "yuchen-zhou",
      tech: "anish-pallati",
      labrador: "hana-benko",
      design: "jean-chen",
      finance: "meera-rajendran",
    },
    teams: {
      events: [
        {
          person: "sara-chokshi",
          role: "Head of Logistics",
        },
      ],
      outreach: [
        {
          person: "ryan-kim",
          role: "Head of Product Strategy",
        },
        {
          person: "jonathan-gong",
          role: "Head of Go-To-Market",
        },
        {
          person: "daisy-zeng",
          role: "Head of Community Engagement",
        },
        {
          person: "john-cao",
          role: "Head of Campus Partnerships",
        },
        {
          person: "eunsoo-oh",
          role: "Head of External Partnerships",
        },
        {
          person: "ivy-wang",
          role: "Head of Marketing",
        },
      ],
      tech: [
        {
          person: "max-wen",
          role: "Community-Based Projects Tech Lead",
        },
        {
          person: "ryan-li",
          role: "DevOps & Internal Tooling Tech Lead",
        },
        {
          person: "krit-dass",
          role: "Terrier (Hackathon Platform) Tech Lead",
        },
        {
          person: "anish-pallati",
          role: "O-Quest Tech Lead",
        },
        {
          person: "jett-chen",
          role: "CMU Maps Tech Lead",
        },
        {
          person: "yiyoung-liu",
          role: "Tartan.vote Tech Lead",
        },
        {
          person: "lee-rodriguez",
          role: "Open Compute Cluster Tech Lead",
        },
        {
          person: "krish-saxena",
          role: "ScottyLabs AI (SLAI) Tech Lead",
        },
        {
          person: "li-ying",
          role: "CMU Courses Tech Lead",
        },
        {
          person: "jalen-lu",
          role: "CMU Cal Tech Lead",
        },
        {
          person: "mark-fan",
          role: "CMU Eats Tech Lead",
        },
        {
          person: "maelle-allanic",
          role: "Scotty.lol Tech Lead",
        },
        {
          person: "jessica-cai",
          role: "UI Architecture Tech Lead",
        },
        {
          person: "leon-liu",
          role: "Lost & Found Tech Lead",
        },
      ],
      labrador: [
        {
          person: "laasya-aki",
          role: "Co-Head of Product",
        },
        {
          person: "alan-pham",
          role: "Co-Head of Product",
        },
        {
          person: "dhiren-narne",
          role: "Head of Innovation",
        },
        {
          person: "christina-li",
          role: "Head of Mentorship",
        },
        {
          person: "haresh-muralidharan",
          role: "Head of Engineering",
        },
        {
          person: "sam-mathew",
          role: "Head of AI",
        },
        {
          person: "yuxiang-huang",
          role: "Head of Onboarding and Documentation",
        },
      ],
      design: [
        {
          person: "bryan-huang",
          role: "Head of UI/UX",
        },
        {
          person: "bach-ha-lan-vu",
          role: "Head of UI/UX",
        },
        {
          person: "yelim-kim",
          role: "Head of Branding",
        },
        {
          person: "dipika-sharma",
          role: "Head of Branding",
        },
      ],
      finance: [
        {
          person: "nandan-nair",
          role: "Head of Sponsorship",
        },
      ],
    },
  },
  {
    label: "2025-26",
    directors: {
      scottylabs: "theo-urban",
      events: "samhitha-duggirala",
      outreach: "arjun-patel",
      tech: "yuxiang-huang",
      labrador: "thomas-kanz",
      design: "wendy-yu",
      finance: "allen-gu",
    },
    teams: {
      events: [
        {
          person: "evan-foster",
          role: "Head of Logistics",
        },
        {
          person: "dylan-yang",
          role: "Head of Logistics",
        },
      ],
      outreach: [
        {
          person: "yuchen-zhou",
          role: "Head of External Outreach",
        },
        {
          person: "maelle-allanic",
          role: "Social Chair",
        },
        {
          person: "vedanth-ramanathan",
          role: "Head of Internal Outreach",
        },
      ],
      tech: [
        {
          person: "jack-hurewitz",
          role: "Head of Data & Analytics",
        },
        {
          person: "anish-pallati",
          role: "Head of DevOps, Terrier (Hackathon Platform) Tech Lead, O-Quest Tech Lead",
        },
        {
          person: "max-wen",
          role: "Community-Based Projects Tech Lead",
        },
        {
          person: "ryan-li",
          role: "DevOps Tech Lead",
        },
        {
          person: "li-ying",
          role: "CMU Courses Tech Lead",
        },
        {
          person: "laasya-aki",
          role: "CMU Eats Tech Co-Lead",
        },
        {
          person: "eric-xu",
          role: "CMU Eats Tech Co-Lead, FLEx (Frontend Landing Experience) Tech Lead",
        },
        {
          person: "ellyse-lai",
          role: "ScottyLabs AI (SLAI) Tech Lead",
        },
        {
          person: "luke-hann",
          role: "CMU Maps Tech Lead",
        },
        {
          person: "anna-gu",
          role: "Lost & Found Tech Lead",
        },
        {
          person: "qianxue-cici-ge",
          role: "CMU Cal Tech Lead",
        },
      ],
      labrador: [
        {
          person: "indu-arimilli",
          role: "Head of Recruitment & Retention",
        },
        {
          person: "dhiren-narne",
          role: "Head of Recruitment & Retention",
        },
        {
          person: "hana-benko",
          role: "Head of Teach Mentorship",
        },
        {
          person: "anika-halappanavar",
          role: "Head of Product Management",
        },
        {
          person: "lena-poshni",
          role: "Frontend Team Lead",
        },
        {
          person: "jonathan-oh",
          role: "Backend Team Lead",
        },
        {
          person: "vincent-lo",
          role: "Head of Go To Market",
        },
      ],
      design: [
        {
          person: "amy-choi",
          role: "Head of UI/UX",
        },
        {
          person: "kyla-anderson",
          role: "Head of UI/UX",
        },
        {
          person: "emily-lau",
          role: "Head of Branding",
        },
        {
          person: "jean-chen",
          role: "Head of Branding",
        },
      ],
    },
  },
  {
    label: "2024-25",
    directors: {
      scottylabs: "michael-zhou",
      events: "cooper-bruno",
      outreach: "tevin-wang",
      tech: "xavier-lien",
      labrador: "theo-urban",
      design: "chloe-sun",
      finance: "matthew-mingus",
    },
    teams: {
      events: [
        {
          person: "ted-gershon",
          role: "Head of Logistics",
        },
        {
          person: "samhitha-duggirala",
          role: "Head of Logistics",
        },
      ],
      outreach: [
        {
          person: "maelle-allanic",
          role: "Head of Recruitment & Retention",
        },
        {
          person: "cassandra-zhou",
          role: "Head of Content",
        },
        {
          person: "angela-lou",
          role: "Head of PR",
        },
      ],
      tech: [
        {
          person: "josef-macera",
          role: "Head of Education & Onboarding",
        },
        {
          person: "yuxiang-huang",
          role: "CMU Maps Tech Lead",
        },
        {
          person: "xavier-lien",
          role: "CMU Courses Tech Lead",
        },
        {
          person: "gabriel-hall",
          role: "TartanHacks Tech Lead",
        },
        {
          person: "anish-pallati",
          role: "O-Quest Tech Lead",
        },
        {
          person: "jack-hurewitz",
          role: "CMU Eats Tech Lead",
        },
        {
          person: "anna-gu",
          role: "Lost & Found Tech Lead",
        },
      ],
      labrador: [
        {
          person: "autumn-qiu",
          role: "Head of Education & Onboarding",
        },
        {
          person: "thomas-kanz",
          role: "CMU GPT Lab Lead",
        },
      ],
      design: [
        {
          person: "fara-yan",
          role: "Head of UI/UX",
        },
        {
          person: "chloe-yan",
          role: "Head of UI/UX",
        },
        {
          person: "stacy-chen",
          role: "Head of Branding",
        },
        {
          person: "joanna-ni",
          role: "Head of Branding",
        },
      ],
      finance: [
        {
          person: "allen-gu",
          role: "Head of Purchasing & Planning",
        },
        {
          person: "edison-dao",
          role: "Head of Sponsorships",
        },
      ],
    },
  },
  {
    label: "2023-24",
    directors: {
      scottylabs: "chloe-deng",
      events: "preethi-krishnamoorthy",
      outreach: "tevin-wang",
      tech: "gabriel-hall",
      labrador: "michael-zhou",
      design: "aarnav-patel",
      finance: "marian-qian",
    },
    teams: {
      events: [
        {
          person: "cooper-bruno",
          role: "Head of Logistics",
        },
        {
          person: "nithya-kemp",
          role: "Head of Logistics",
        },
      ],
      outreach: [
        {
          person: "maelle-allanic",
          role: "Head of Recruitment & Retention",
        },
        {
          person: "cassandra-zhou",
          role: "Head of Content",
        },
      ],
      tech: [
        {
          person: "jaisal-patel",
          role: "CMU Eats Tech Lead",
        },
        {
          person: "bradley-teo",
          role: "CMU Courses Tech Lead",
        },
        {
          person: "hong-lin",
          role: "CMU Courses Tech Lead",
        },
        {
          person: "xavier-lien",
          role: "CMU Courses Tech Lead",
        },
        {
          person: "alexander-obolenskiy",
          role: "TartanHacks Tech Lead",
        },
        {
          person: "michelle-li",
          role: "Lost & Found Tech Lead",
        },
        {
          person: "rajeev-godse",
          role: "Scotty.lol Tech Lead",
        },
        {
          person: "anna-gu",
          role: "Lost & Found Tech Lead",
        },
        {
          person: "gabriel-hall",
          role: "Roomies Tech Lead",
        },
      ],
      labrador: [
        {
          person: "theo-urban",
          role: "CMU Maps Lead",
        },
        {
          person: "mihir-dhamankar",
          role: "CMU Maps Lead",
        },
        {
          person: "anuda-weerasinghe",
          role: "CMU Seats Lead",
        },
        {
          person: "xavier-lien",
          role: "CMU Seats Lead",
        },
        {
          person: "pi-rey-low",
          role: "CMU Seats Lead",
        },
        {
          person: "autumn-qiu",
          role: "CMU Grocery List Lead",
        },
        {
          person: "megan-gu",
          role: "CMU Grocery List Lead",
        },
        {
          person: "katherine-zhao",
          role: "CMU Grocery List Lead",
        },
        {
          person: "joon-kwon",
          role: "CMU Cal Lead",
        },
      ],
      design: [
        {
          person: "elin-zhou",
          role: "Head of UI/UX",
        },
        {
          person: "chloe-yan",
          role: "Head of UI/UX",
        },
        {
          person: "saumeya-suseenthiran",
          role: "Head of Branding",
        },
        {
          person: "fara-yan",
          role: "Head of Branding",
        },
      ],
      finance: [
        {
          person: "emily-guo",
          role: "Head of Sponsorship",
        },
      ],
    },
  },
  {
    label: "2022-23",
    directors: {
      scottylabs: "anuda-weerasinghe",
      events: "tika-naik",
      outreach: "shreeya-khurana",
      tech: "david-hwang",
      design: "shannon-lin",
      finance: "sanjana-meduri",
    },
    teams: {
      events: [
        {
          person: "chloe-deng",
          role: "Head of Logistics",
        },
        {
          person: "brandon-wei",
          role: "Head of Event Exploration/Design",
        },
        {
          person: "gram-liu",
          role: "Head of Community",
        },
      ],
      outreach: [
        {
          person: "preethi-krishnamoorthy",
          role: "Head of Recruitment & Retention",
        },
        {
          person: "emily-guo",
          role: "Head of Content",
        },
      ],
      tech: [
        {
          person: "nicolas-ettlin",
          role: "CMU Maps Tech Lead, CMU Eats Tech Lead",
        },
        {
          person: "bradley-teo",
          role: "CMU Courses Tech Lead",
        },
        {
          person: "rajeev-godse",
          role: "Scotty.lol Tech Lead",
        },
        {
          person: "anuda-weerasinghe",
          role: "Scotty.lol Tech Lead",
        },
        {
          person: "gram-liu",
          role: "scottylabs.org Tech Lead, TartanHacks Software Suite Tech Lead",
        },
        {
          person: "joyce-hong",
          role: "TartanHacks Dashboard Tech Lead",
        },
        {
          person: "ryan-lau",
          role: "TartanHacks Dashboard Tech Lead",
        },
        {
          person: "alexander-obolenskiy",
          role: "TartanHacks Registration Tech Lead",
        },
        {
          person: "elizabeth-louie",
          role: "Lost & Found Tech Lead",
        },
        {
          person: "gabriel-hall",
          role: "Lost & Found Tech Lead, Roomies Tech Lead",
        },
        {
          person: "michelle-li",
          role: "Lost & Found Tech Lead",
        },
        {
          person: "jaclyn-yang",
          role: "Lost & Found Tech Lead",
        },
      ],
      design: [
        {
          person: "elise-chapman",
          role: "Head of UI/UX",
        },
        {
          person: "susan-ni",
          role: "Head of UI/UX",
        },
      ],
      finance: [
        {
          person: "swati-anshu",
          role: "Head of Sponsorship",
        },
        {
          person: "marian-qian",
          role: "Head of Purchasing & Planning",
        },
      ],
    },
  },
  {
    label: "2021-22",
    directors: {
      scottylabs: "anushka-saxena",
      events: "varshini-selvadurai",
      outreach: "olivia-corrodi",
      tech: "anuda-weerasinghe",
      design: "shannon-lin",
      finance: "amita-goyal",
    },
    teams: {
      events: [
        {
          person: "tika-naik",
          role: "Head of Logistics",
        },
        {
          person: "raghav-gupta",
          role: "Head of Event Exploration/Design",
        },
        {
          person: "richard-guo",
          role: "Social Chair",
        },
        {
          person: "gram-liu",
          role: "Social Chair",
        },
      ],
      outreach: [
        {
          person: "shreeya-khurana",
          role: "Chief of Staff",
        },
        {
          person: "sanjana-meduri",
          role: "Head of Publicity",
        },
      ],
      tech: [
        {
          person: "gram-liu",
          role: "TartanHacks Tech Lead, CMU Eats Tech Lead",
        },
        {
          person: "anuda-weerasinghe",
          role: "CMU Courses Tech Lead",
        },
        {
          person: "jason-yao",
          role: "pausch-ui Tech Lead",
        },
        {
          person: "preethi-krishnamoorthy",
          role: "CMU Maps Tech Lead",
        },
      ],
      finance: [
        {
          person: "sanjana-meduri",
          role: "Head of Sponsorship",
        },
        {
          person: "kunal-sharda",
          role: "Head of Purchasing",
        },
      ],
    },
  },
  {
    label: "2020-21",
    directors: {
      scottylabs: "sayan-chaudhry",
      events: "anushka-saxena",
      outreach: "keiffer-acoba",
      tech: "gram-liu",
      design: "yoshi-torralva",
      finance: "akshath-jain",
    },
    teams: {
      events: [
        {
          person: "olivia-corrodi",
          role: "Head of Logistics",
        },
        {
          person: "varshini-selvadurai",
          role: "Head of Curation",
        },
        {
          person: "sruti-srinidhi",
          role: "Head of Community",
        },
        {
          person: "richard-yan",
          role: "Head of Food",
        },
      ],
      outreach: [
        {
          person: "deepayan-patra",
          role: "Chief of Staff",
        },
        {
          person: "sanjana-meduri",
          role: "Head of Publicity",
        },
      ],
      tech: [
        {
          person: "gram-liu",
          role: "pausch-ui Tech Lead",
        },
        {
          person: "richard-guo",
          role: "pausch-ui Tech Lead",
        },
        {
          person: "eric-cheng",
          role: "CMU Eats Tech Lead",
        },
      ],
      design: [
        {
          person: "stephanie-wang",
          role: "Head of Production",
        },
      ],
      finance: [
        {
          person: "arleen-liu",
          role: "Head of Sponsorship",
        },
      ],
    },
  },
  {
    label: "2019-20",
    directors: {
      scottylabs: "sayan-chaudhry",
      events: "mayank-jain",
      outreach: "akshath-jain",
      tech: "richard-guo",
      design: "michael-becker",
      finance: "josh-durham",
    },
    teams: {
      events: [
        {
          person: "olivia-corrodi",
          role: "Head of Logistics",
        },
        {
          person: "deepayan-patra",
          role: "Head of Food",
        },
      ],
      outreach: [
        {
          person: "keiffer-acoba",
          role: "Head of Content",
        },
        {
          person: "richard-yan",
          role: "Head of Outreach",
        },
      ],
      tech: [
        {
          person: "srinivas-lade",
          role: "Head of Full Stack",
        },
        {
          person: "robin-han",
          role: "Head of Backend",
        },
        {
          person: "eric-cheng",
          role: "CMU Eats Tech Lead",
        },
      ],
      design: [
        {
          person: "audrey-jin",
          role: "Head of Branding",
        },
      ],
      finance: [
        {
          person: "yo-lei-chen",
          role: "Head of Sponsorship",
        },
      ],
    },
  },
  {
    label: "2018-19",
    directors: {
      scottylabs: "stephanie-you",
      events: "andy-gao",
      tech: "connor-mowry",
      design: "oscar-dadfar",
      finance: "sayan-chaudhry",
    },
    teams: {
      tech: [
        {
          person: "emily-newman",
          role: "CMU Eats Tech Lead",
        },
        {
          person: "eric-cheng",
          role: "CMU Eats Tech Lead",
        },
      ],
    },
  },
  {
    label: "2017-18",
    directors: {
      scottylabs: "serena-wang",
      events: "josh-zhanson",
      tech: "shalom-yiblet",
      design: "emily-lo",
      finance: "stephanie-you",
    },
    teams: {
      tech: [
        {
          person: "emily-newman",
          role: "CMU Eats Tech Lead",
        },
      ],
    },
  },
  {
    label: "2016-17",
    directors: {
      scottylabs: "jackie-gaston",
      outreach: "shalom-yiblet",
      tech: "scott-krulcik",
      design: "jason-chang",
      finance: "serena-wang",
    },
    teams: {
      tech: [
        {
          person: "emily-newman",
          role: "CMU Eats Tech Lead",
        },
      ],
    },
  },
  {
    label: "2015-16",
    directors: {
      scottylabs: "mark-vella",
      outreach: "oscar-bezi",
      tech: "jake-zimmerman",
      design: "lois-chang",
      finance: "monisha-gopal",
    },
    teams: {
      tech: [
        {
          person: "justin-gallagher",
          role: "CMU Eats Tech, course-api Tech Lead",
        },
        {
          person: "oscar-bezi",
          role: "CMU Eats Tech Lead, directory-api Tech Lead",
        },
        {
          person: "shalom-yiblet",
          role: "directory-api Tech Lead",
        },
      ],
    },
  },
  {
    label: "2014-15",
    directors: {
      scottylabs: "taylor-poulos",
      outreach: "jake-zimmerman",
      tech: "tom-shen",
      design: "lois-chang",
      finance: "monisha-gopal",
    },
    teams: {
      tech: [
        {
          person: "justin-gallagher",
          role: "CMU Eats Tech Lead, course-api Tech Lead",
        },
        {
          person: "oscar-bezi",
          role: "CMU Eats Tech Lead",
        },
        {
          person: "andrew-benson",
          role: "course-api Tech Lead",
        },
      ],
    },
  },
  {
    label: "2013-14",
    directors: {
      scottylabs: "taylor-poulos",
      outreach: "tom-shen",
    },
    teams: {
      tech: [
        {
          person: "justin-gallagher",
          role: "CMU Eats Tech Lead",
        },
        {
          person: "oscar-bezi",
          role: "CMU Eats Tech Lead",
        },
      ],
    },
  },
  {
    label: "2012-13",
    directors: {
      scottylabs: "julia-teitelbaum",
      events: "quintin-carlon",
      outreach: "jeff-cooper",
      tech: "drew-inglis",
    },
    teams: {
      events: [
        {
          person: "amy-quispe",
          role: "Social Chair",
        },
      ],
    },
  },
  {
    label: "2011-12",
    directors: {
      scottylabs: "amy-quispe",
      events: "quintin-carlon",
      outreach: "jeff-cooper",
      tech: "vinay-vemuri",
    },
    teams: {
      events: [
        {
          person: "ryhan-hassan",
          role: "OG TartanHacks Team",
        },
        {
          person: "julia-teitelbaum",
          role: "OG TartanHacks Team",
        },
      ],
      tech: [
        {
          person: "kellie-medlin",
          role: "Tech",
        },
      ],
    },
  },
];
