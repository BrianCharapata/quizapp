/*=====================================*/
/* An array of data questions for quiz */
function getDataArray() {
  const STORE = [
    {
      question: 'Why would a calf be called a Leppy?',
      answers: [
        'Because certain kinds of calves frequently jump fences.',
        'A popular name from childrens stories.',
        'A calf who will not leave its mother. ',
        'An orphaned calf.'
      ],
      correctAnswer: 'An orphaned calf.',
      additionalAnswer: 'An orphaned calf.  Usually easily ' +
        'recognized by their pot bellies.  Sometimes also used when ' +
        'referring to a young cowboy who is inept in cowboy ways.',
      icon: 'img/leppy.jpg',
      alt: 'calf picture'
    },

    {
      question: 'How long is a cows natural life span?',
      answers: [
        '22 to 34 years.',
        '20 to 28 years.',
        '18 to 22 years.',
        '9 to 11 years.'
      ],
      correctAnswer: '18 to 22 years.',
      additionalAnswer: 'Most Farmers and Cattlemen tend to keep their' +
        ' females for much of the cows natural life time.  Though this also' +
        ' depends on the type of range land where the Cow feeds.  If there' +
        ' is a lot of sand in the soil a Cows teeth will wear down prematurely' +
        ' and she must be culled.',
      icon: 'img/cow-herd.jpg',
      alt: 'cow herd'
    },

    {
      question: 'What is a cows approximate gestation period?',
      answers: [
        '283 days',
        '566 days',
        '582 days',
        '645 days'
      ],
      correctAnswer: '283 days',
      additionalAnswer: 'The average gestation period for a female ' +
        'bovine is 283 days. Only 3 days longer then a human female.',
      icon: 'img/cow-calf.jpg',
      alt: 'birth of calf'
    },

    {
      question: 'What does the term "weiner calf" mean?',
      answers: [
        'When a calf is very long and slim it is called a weiner calf.',
        'A calf just taken off its mothers milk.',
        'If a calf will not fight the other calves it is called it a weiner.',
        'A calf which is being raised to be made into weiners.'
      ],
      correctAnswer: 'A calf just taken off its mothers milk.',
      additionalAnswer: 'The young calf is weined from its mother' +
        ' at appoximately 6 months.  It takes a lot of energy to feed' +
        ' a pregnant cow and she needs time to gain weight and' +
        ' strength before her next calf is born.',
      icon: 'img/weined-calf.jpg',
      alt: 'weined calf'
    },

    {
      question: 'How long does it take to hatch a chicken egg?',
      answers: [
        '12.5 days.',
        '81 days.',
        '21 days.',
        '1 day.'
      ],
      correctAnswer: '21 days.',
      additionalAnswer: 'The incubation period of a chick is 21 days at' +
        ' which time the baby chick pecks its way through the egg shell.',
      icon: 'img/chicks.jpg',
      alt: 'small chicks'
    },

    {
      question: 'What does the term "Natural" mean with how an animal has been raised?',
      answers: [
        'When an animal likes to hang out in the woods and commune with the trees.',
        'Nothing was done to the meat after the animal was processed.',
        'It is when 10 animals run in a circle.',
        'A natural animal is an animal who refuses to eat processed foods.'
        ],
      correctAnswer: 'Nothing was done to the meat after the animal was processed.',
      additionalAnswer: 'It doesn’t mean anything about how or where the animal was ' +
        'raised, or what it ate.  This simply means no color or flavors were added ' +
        'to the meat after harvest.',
      icon: 'img/cow-herd.jpg',
      alt: 'cow herd'
    },

    {
      question: 'What is the primary reason that big feed lots feed antibiotics to cattle?',
      answers: [
        'To heal any wounds a cow might get.',
        'It is to prevent hoof desease.',
        'For curing pink eye.',
        'It causes faster growth in animals.'
        ],
      correctAnswer: 'It causes faster growth in animals.',
      additionalAnswer: 'Today, antibiotics are routinely fed to livestock, ' +
        'poultry, and fish on large industrial farms to promote faster growth and ' +
        'to compensate for the unsanitary conditions in which they are raised. ' +
        'According to a new report by the FDA, approximately 80 percent of all ' +
        'antibiotics used in the United States are fed to farm animals.',
      icon: 'img/angus.jpg',
      alt: 'Angus cow in tall grass'
    },

    {
      question: 'What is dry-aged beef?',
      answers: [
        'Beef that is hung in a cooler for a minimum of 14 days.',
        'Beef which is dried for long periods using heat.',
        'Another name for Jerky.',
        'An old wrinkled cow.'
      ],
      correctAnswer: 'Beef that is hung in a cooler for a minimum of 14 days.',
      additionalAnswer: 'After butchering and cleaning of the beef animal to ' +
        'result in a better tasting, finer type of meat, a beef carcus should ' +
        'be hung for at least 14 days in a dry cooler. Large commercial ' +
        'meat plants rarely hang meat for more then 1 day. This is because of the ' +
        'high volume they must maintain.',
      icon: 'img/meat-hanging.jpg',
      alt: 'meat hanging in a cooler'
    },

    {
      question: 'Why should beef be dry-aged?',
      answers: [
        'When dried out meat takes longer to mold.',
        'It is a good way to preserve meat.',
        'It tenderizes and flavors the meat.',
        'Meat is lighter and easier to carry when it is aged and dry.'
      ],
      correctAnswer: 'It tenderizes and flavors the meat.',
      additionalAnswer: 'The process changes beef by two means. Firstly, ' +
        'moisture is evaporated from the muscle. The resulting process of ' +
        'desiccation creates a greater concentration of beef flavour and taste. ' +
        'Secondly, the beefs natural enzymes break down the connective tissue in ' +
        'the muscle, which leads to more tender beef.',
      icon: 'img/meat-hanging.jpg',
      alt: 'meat hanging in a cooler'
    },

    {
      question: 'What does "Cage-free" mean, when speaking of chickens?',
      answers: [
        'The chicken was not kept in a small cage its entire life.',
        'It is a way for the seller to get more money from the buyer.',
        'A chicken who has pecked its way out of its cage.',
        'A vegetarian chicken.'
      ],
      correctAnswer: 'The chicken was not kept in a small cage its entire life.',
      additionalAnswer: 'Cage-free does not mean the chicken is given room to roam. ' +
        'It could still be inside with no fresh air or natural light. Cage-free only ' +
        'means it is not confined to a small cage.',
      icon: 'img/BuffOrpingtons.jpg',
      alt: 'Buff Orpington chickens'
    },
    
    {
      question: 'What does Free-range mean, with regards to chickens?',
      answers: [
        'Chickens who are allowed to live in the woods with other wild animals.',
        'It is a recipe for cooking chicken.',
        'The animal may have lived outside its entire life.',
        'A way to move chickens from place to place.'
      ],
      correctAnswer: 'The animal may have lived outside its entire life.', 
      additionalAnswer:  ' Free-range can mean many things. ' +
      'In the best case scenario, the animal may have lived outside its entire life. ' +
      'But it can also mean that the animal was raised inside with a small door on ' +
      'the broad side of a barn, with the option to go outside. ' +
      'The outside may be large or small.',
      icon: 'img/BuffOrpingtons.jpg',
      alt: 'Buff Orpington chickens'
    },

    {
      question: 'What does Pasture-raised mean, with regards to cattle?',
      answers: [
        'Cattle who run from one end of a pature to the other end.',
        'Cattle that do not like fences.',
        'When cows dig up patures they raise them to a higher level of ground.',
        'The Cow raised outside its entire life, with fresh air, sunlight, and wide open spaces.'
      ],
      correctAnswer: 'The Cow raised outside its entire life, with fresh air, sunlight, ' +
        'and wide open spaces.',
      additionalAnswer: 'Pasture raised cattle are raised on farms or ranches in patures' +
        ' which are large enough to give them freedom to exercise and roam. ',
      icon: 'img/angus.jpg',
      alt: 'Angus cow in tall grass'
    },

    {
      question: 'What does Grass-fed meat mean?',
      answers: [
        'A special type of grass which is fed meat.',
        'After an animal is butchered it is wrapped in fresh grass to season the meat.',
        'Grass-fed means that the animal has only eaten grass and very little grain.',
        'An animal who refuses to eat grains and will only eat grass.'
      ],
      correctAnswer: 'Grass-fed means that the animal has only eaten grass and very little grain.',
      additionalAnswer: 'Large stock yards feed beef cattle corn, grains and high protein hays. ' +
        'They do not have the room to graze cattle.  Only small farms and ranches can raise ' +
        'grass-fed beef.  These types of operations have grass fields in which their cattle ' +
        'are born and raised. People who are concerned where their meat comes from and how it is ' +
        'raised buy from small farmers and ranchers. ',
      icon: 'img/angus.jpg',
      alt: 'Angus cow in tall grass'
    },

    {
      question: 'What does "grading beef " mean?',
      answers: [
        'Beef is graded by inspectors who judge the quality of a cut of meat.',
        'Using heavy equipment workers will grade a pile of beef until its smooth.',
        'Special people will train and grade cattle with how well they do tricks.',
        'By grading the beef a driver can tell how steep a hill their truck can handle.'
      ],
      correctAnswer: 'Beef is graded by inspectors who judge the quality of a cut of meat.',
      additionalAnswer: '  A quality of grade is a composite evaluation of tenderness, ' +
      ' juiciness, and flavor.  Marbling is the intermingling or dispersion of fat ' +
      'within the lean.  The grades are 3 levels of Prime, 3 levels of choice, 2 ' +
      'levels of Select and 3 levels of Standard.  You will rarely see anything higher ' +
      'then choice in Grocery Stores.  Private farmers can raise higher quility beef.',
      icon: 'img/meat-hanging.jpg',
      alt: 'Beef sides hanging in a cooler.'
    },

    {
      question: 'Are cows bad for the environment?',
      answers: [
        'In short, it depends on how they are raised.',
        'They break tree limbs which hurt the owl habitat.',
        'A cows excrement damages the color of the soil where it lands.',
        'Yes, because humans do not like how cows smell.'
      ],
      correctAnswer: 'In short, it depends on how they are raised.', 
      additionalAnswer: 'Conglomerate raised animals ' +
      'is bad because the majority of them are raised in ' +
      'feed lots. Animals in ' +
      'one small location is a recipe for disaster. So ' +
      'yes, farm animals can be bad for the environment when ' +
      'raised in a factory, where pumped antibiotics ' +
      'and other things for faster growth, but also upset their ' +
      'stomachs and cause gas (Co2 emissions). ' +
      'Pasture-raised animals can actually help ' +
      'the environment by regenerating and fertilizing the soil. ',
      icon: 'img/angus.jpg',
      alt: 'Angus cow in tall grass.'
    }
  ];

  return STORE;
}
