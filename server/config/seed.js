/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

import mongoose from 'mongoose';

import User from '../api/user/user.model';
import Project from '../api/project/project.model';
import Category from '../api/category/category.model';
import Subcategory from '../api/subcategory/subcategory.model';
import Product from '../api/product/product.model';
import ResearchMethod from '../api/research-method/researchMethod.model'
import Persona from '../api/persona/persona.model'
import Tag from '../api/tag/tag.model'
import File from '../api/file/file.model'

/*
File.find({}).remove()
  .then(() =>{
    File.create({
      "_id": "573f79790ea4c54a44f2d6e7",
      "title": "et sunt do",
      "fileType": "mp3",
      "link": "adipisicing.com/ullamco.x"
    },
    {
      "_id": "573f79794cb56ee0588efc95",
      "title": "dolore voluptate cupidatat",
      "fileType": "pdf",
      "link": "eu.com/aliqua.x"
    },
    {
      "_id": "573f79797a0bf3c62ba7dc58",
      "title": "et enim est",
      "fileType": "pdf",
      "link": "magna.com/proident.x"
    },
    {
      "_id": "573f7979db6743bf830e4c4c",
      "title": "cupidatat ut esse",
      "fileType": "mp3",
      "link": "non.com/et.x"
    },
    {
      "_id": "573f797965a070840eeb21de",
      "title": "laborum est in",
      "fileType": "pdf",
      "link": "non.com/ex.x"
    },
    {
      "_id": "573f79792a72324b9eae9b4f",
      "title": "incididunt laborum ullamco",
      "fileType": "mp3",
      "link": "laborum.com/ex.x"
    })
  });

Tag.find({}).remove()
  .then(() =>{
    Tag.create({
      "_id": "573f42a7134454087bed4e49",
      "pretty": "my",
      "namespace": "tag:my"
    },
    {
      "_id": "573f42a7929b0ade79968eb1",
      "pretty": "tags",
      "namespace": "tag:tags"
    },
    {
      "_id": "573f42a78d71f5a258a021f5",
      "pretty": "are",
      "namespace": "tag:are"
    },
    {
      "_id": "573f42a7dbca18d419a85090",
      "pretty": "the",
      "namespace": "tag:the"
    },
    {
      "_id": "573f42a78904a3a294f51430",
      "pretty": "best",
      "namespace": "tag:best"
    })
  })

Persona.find({}).remove()
  .then(() =>{
    Persona.create({
      "_id": "573e8120b6368b86852d84a3",
      "name": "Olivia",
      "title": "Email Marketing Manager",
      "quote": "I am a hero when I become an expert and improve the efficiency of our email channel processes and KPIs.",
      "description": "Olivia is the gatekeeper and project manager for the email channel. She makes sure everything runs smoothly. She manages the overall processes and her team of Email Marketing Specialists, who produce and deploy the company campaigns.",
      "photo": "http://f.cl.ly/items/2s161U2x2o1o1T270H0q/Olivia.png",
      "goals": [],
      "challenges": [],
      "whatMatters": "Aliquip nisi non Lorem officia ullamco do sunt consectetur exercitation in anim. Lorem amet aliquip reprehenderit minim cillum esse aute eiusmod non deserunt labore. Elit non esse occaecat excepteur sit officia ex dolore do.",
      "link": "qui.com"
    },
    {
      "_id": "573e8120cb818c06779e533d",
      "name": "Ian",
      "title": "Email Marketing Specialist",
      "quote": "Eu non laborum officia exercitation irure. Et id pariatur laboris enim cillum deserunt quis incididunt commodo dolore magna quis proident.",
      "description": "Ian coordinates the campaign production by pulling together creative, lists, data files, quality assurance, and tests. He sends the campaigns through their ESP. Afterwards, he monitors, reports and shares the campaign's performance.",
      "photo": "http://f.cl.ly/items/391C1r0E061k1M020O0c/Ian.png",
      "goals": [],
      "challenges": [],
      "whatMatters": "Dolore labore et ex velit ad ea mollit. Enim eiusmod sunt sint ullamco ipsum minim anim Lorem proident. Culpa dolore qui excepteur ipsum Lorem pariatur eu incididunt officia aliqua nisi sunt officia.",
      "link": "exercitation.com"
    },
    {
      "_id": "573e8120e45114111bfbc4a6",
      "name": "Steve",
      "title": "VP Marketing",
      "quote": "Id qui eu irure magna deserunt. Non proident enim eu sit quis sunt amet consectetur eiusmod irure excepteur elit consequat.",
      "description": "Steve is the decision maker and strategist who determines where the business should be focusing their efforts. He needs to weigh executive decisions, the company's goals, marketing's forecast, and the competitive landscape.",
      "photo": "http://f.cl.ly/items/0j1h173F0V3S0n3B052u/Steve.png",
      "goals": [],
      "challenges": [],
      "whatMatters": "Duis aute nisi velit aliqua. Ad consequat consectetur dolore cupidatat fugiat aliqua ullamco mollit occaecat reprehenderit ipsum culpa. Non sunt eiusmod cillum laboris minim duis irure sint dolore amet commodo elit.",
      "link": "irure.com"
    },
    {
      "_id": "573e8120916fcff01cf2dd51",
      "name": "Leah",
      "title": "Digital Marketing Director",
      "quote": "Commodo incididunt nisi magna ipsum id tempor deserunt adipisicing do amet est consectetur dolor. Nulla in elit officia fugiat.",
      "description": "Leah is an advocate for a coordinated marketing effort. She is the spark and force that moves her team towards greater marketing sophistication. She keeps her team focused on targeted, relevant, and automated marketing across digital channels.",
      "photo": "http://f.cl.ly/items/442U131A0d1F3H0V3I2f/Leah.png",
      "goals": [],
      "challenges": [],
      "whatMatters": "Officia sint ut tempor incididunt dolore est consequat excepteur ea enim. Incididunt consequat incididunt commodo nulla cupidatat eiusmod aliquip exercitation aliquip. Pariatur eiusmod dolor proident officia nostrud in duis.",
      "link": "laboris.com"
    });
  });

ResearchMethod.find({}).remove()
  .then(() => {
    ResearchMethod.create({
      "_id": "573e1953a134100952531328",
      "title": "Automated Remote Research",
      "description": "Automated remote research is a method that can reveal statically relevant data about what people are doing in our application, to help identify the usability enhancements with the biggest impact.",
      "effort": "Easy",
      "cost": "Low",
      "dataType": "Quantitative",
      "duration": "2/wks - 6/wks",
      "location": "Remote"
    },
    {
      "_id": "573e1953e73234f5adf8e1d1",
      "title": "Behavior Mapping",
      "description": "Behavioral mapping is used to systematically document location-based observations of human activity, using annotated maps, plans, video, or time-lapse photography.",
      "effort": "Intermediate",
      "cost": "Medium - Expensive",
      "dataType": "Qualitative",
      "duration": "> 2/wks",
      "location": "Field"
    },
    {
      "_id": "573e1953abab10da28f329bd",
      "title": "Design Ethnography",
      "description": "Design ethnography approximates the immersion methods of traditional ethnography, to deeply experience and understand the user’s world for design empathy and insight.",
      "effort": "Intermediate",
      "cost": "Medium - Expensive",
      "dataType": "Qualitative",
      "duration": "> 4/wks",
      "location": "Field"
    },
    {
      "_id": "573e19539f3892ef8e35f51d",
      "title": "Usability Testing",
      "description": "Usability testing is an evaluative method that allows teams to observe an individual’s experience with a digital application as he or she walks through the steps of a given task (or set of tasks).",
      "effort": "Easy - Intermediate",
      "cost": "Low",
      "dataType": "Quantitative",
      "duration": "2/hrs - 40/hrs",
      "location": "Remote/Field"
    },
    {
      "_id": "573e1953fb1e991cbd5d31bf",
      "title": "Value Opportunity Analysis",
      "description": "Value opportunity analysis maps the extent to which a product’s aspirational qualities align to people’s idealized lifestyle or fantasy version of themselves.",
      "effort": "4/hrs - 9/hrs",
      "cost": "$41.00 - $277.00",
      "dataType": "Qualitative",
      "duration": "3/wks - 6/wks",
      "location": "Remote"
    },
    {
      "_id": "573e1953b13695e784d8e664",
      "title": "Heuristic Evaluation",
      "description": "An agreed-upon set of usability best practices can help detect usability problems before actual users are brought in to further evaluate an interface.",
      "effort": "2/hrs - 12/hrs",
      "cost": "Nominal",
      "dataType": "Qualitative",
      "duration": "< 1/wk",
      "location": "Remote"
    })
  });

Product.find({}).remove()
  .then(() => {
    Product.create({
      "_id": "573e163e5917a8317f19d7ba",
      "title": "Inbox Monitor"
    },
    {
      "_id": "573e163e50d2a1978f92dc9d",
      "title": "Reputation Monitor"
    },
    {
      "_id": "573e163e715301a59ff5018d",
      "title": "Inbox Preview"
    },
    {
      "_id": "573e163e7b6b3d9a74badbdf",
      "title": "ESP Connect"
    },
    {
      "_id": "573e163efae9be95dcc89400",
      "title": "Email Client Monitor"
    },
    {
      "_id": "573e163e32918931c9e991f8",
      "title": "Inbox Insights"
    },
    {
      "_id": "57485af9d3bde831b1dfffab",
      "title": "Coin Sorter"
    },
    {
      "_id": "57485af98c47d23d2d32154a",
      "title": "Mission Control"
    });
  });

Category.find({}).remove()
  .then(() => {
    Category.create({
      "_id": "573e155ac9acb2cd74e74007",
      "pretty": "Identification",
      "namespace": "category:identification"
    },
    {
      "_id": "573e155a2ac1bf20de141dbf",
      "pretty": "Channels",
      "namespace": "category:channels"
    },
    {
      "_id": "573e155a9216b5e3d0119669",
      "pretty": "Tools",
      "namespace": "category:tools"
    },
    {
      "_id": "573e155aa6f24b3aea0dcfd7",
      "pretty": "Future Growth",
      "namespace": "category:future growth"
    },
    {
      "_id": "573e155a723876cc4db42431",
      "pretty": "Teams",
      "namespace": "category:teams"
    },
    {
      "_id": "573e155a2537a2e00fb339dd",
      "pretty": "Strategy",
      "namespace": "category:strategy"
    },
    {
      "_id": "573e155a0d6b705190c1644d",
      "pretty": "Testing",
      "namespace": "category:testing"
    },
    {
      "_id": "573e155ad4c1d3226c8b54f3",
      "pretty": "Data",
      "namespace": "category:data"
    },
    {
      "_id": "573e155af59ae3c15062eaa9",
      "pretty": "Programs",
      "namespace": "category:programs"
    },
    {
      "_id": "574856592786a1e64a161847",
      "pretty": "Targeting",
      "namespace": "category:targeting"
    },
    {
      "_id": "57485659869f4205a9fb0b77",
      "pretty": "Goals",
      "namespace": "category:goals"
    });
  });

Subcategory.find().remove()
  .then(() => {
    Subcategory.create({
      "_id": "5748565975018f4e9f16756d",
      "pretty": "ESP",
      "namespace": "category:esp"
    },
    {
      "_id": "574856590c6a7e66e8537629",
      "pretty": "Analytics",
      "namespace": "category:analytics"
    },
    {
      "_id": "574856599ed4c908d0d8cfde",
      "pretty": "CRM",
      "namespace": "category:crm"
    },
    {
      "_id": "574856595eac1d9e11bcb18d",
      "pretty": "Marketing Strategy",
      "namespace": "category:marketing strategy"
    },
    {
      "_id": "57485659b9b041c18b95c48d",
      "pretty": "Return Path",
      "namespace": "category:return path"
    },
    {
      "_id": "57485659bd744499e2ff76e4",
      "pretty": "Inhouse",
      "namespace": "category:inhouse"
    },
    {
      "_id": "574856592c5d6a1d0101fee4",
      "pretty": "Vendors",
      "namespace": "category:vendors"
    },
    {
      "_id": "574856591cb1984e9cc862e8",
      "pretty": "Personalization",
      "namespace": "category:personalization"
    });
  });
*/
Project.find().remove()
  .then(() => {
    Project.create({
      "_id": "573e1fc2bb7939dff1551faf",
      "title": "sit veniam voluptate nostrud voluptate anim id reprehenderit eu occaecat",
      "overview": "Lorem cupidatat esse labore consequat anim incididunt dolore nulla labore consectetur dolor mollit adipisicing. Eiusmod laborum consequat qui qui elit officia cupidatat ullamco. Elit qui anim incididunt nulla do irure. Est sit officia excepteur elit.",
      "taxonomy": {
        "category": "573e155ac9acb2cd74e74007",
        "subcategory": "574856590c6a7e66e8537629",
        "products": ["573e163e715301a59ff5018d"],
        "tags": ["573f42a78904a3a294f51430"]
      },
      "goals": [
        {
          "primary": false,
          "description": "Culpa veniam ad tempor ullamco nisi officia dolore labore cupidatat dolore. Lorem eiusmod non id id deserunt cupidatat qui ullamco sunt."
        },
        {
          "primary": false,
          "description": "Non dolor tempor eiusmod est anim laboris. Sint reprehenderit consectetur excepteur nisi amet irure ullamco et tempor ut excepteur consectetur."
        }
      ],
      "questions": [
        {
          "primary": false,
          "question": "Sunt proident magna commodo dolore dolor commodo sunt ex.?",
          "answer": "Cillum ex ut minim voluptate. Aute tempor dolore do pariatur proident."
        },
        {
          "primary": false,
          "question": "Sit proident nulla irure qui aute.?",
          "answer": "Amet velit voluptate in aute eiusmod et dolore cupidatat proident dolor enim velit cupidatat mollit. Lorem ullamco mollit occaecat eiusmod reprehenderit aute dolore id ad aliquip dolor."
        }
      ],
      "quotes": [
        {
          "source": "Article - 02/02/2015",
          "quote": "Vivamus quis sapien eu tortor sollicitudin congue sit amet ac tortor. Nam et nunc a ex feugiat convallis quis ac nibh. Sed feugiat ultricies eros nec consectetur.",
          "author": {
            "photo": "http://unsplash.it/500?random",
            "title": "CEO - Time",
            "name": "John Doe" 
          }
        }
      ],
      "users": ["574dd661768100ae0eb63613"],
      "personas": ["573e8120b6368b86852d84a3"],
      "files": [],
      "timestamp": {
        "endDate": Date.now(),
        "updated": Date.now()
      }
    });
  });
/*
User.find({}).remove()
  .then(() => {
    User.create({
      _id: '574dd661768100ae0eb63613',
      provider: 'local',
      name: 'Daniel Price',
      email: 'dan@example.com',
      password: 'test'
    }, {
      _id: '574df8228376390c2aa635e1',
      provider: 'local',
      role: 'admin',
      name: 'Jon Bell',
      email: 'jon@example.com',
      password: 'test'
    });
  });
*/
