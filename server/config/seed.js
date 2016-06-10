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
*/
ResearchMethod.find({}).remove()
  .then(() => {
    ResearchMethod.create({
      "_id": "573e1953a134100952531328",
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "A/B Testing",
      "description": "Use A/ B testing to compare two versions of the same design to see which one performs statistically better against a predetermined goal.",
      "duration": "Moderate",
      "effort": "Moderate",
      "location": "Remote",
      "dataType": "Quantitative",
      "phase": [5]
    },
    {
      "favorite": 0,
      "inform": "x",
      "include": 0,
      "title": "AEIOU",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Affinity Diagramming",
      "description": "Affinity diagramming is a process used to externalize and meaningfully cluster observations and insights from research, keeping design teams grounded in data as they design.",
      "duration": "Low",
      "effort": "Moderate",
      "location": "Remote",
      "dataType": "Qualitative",
      "phase": [2,3,4,5]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 0,
      "title": "Artifact Analysis",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": [2,3,5]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Automated Remote Research",
      "description": "Automated remote research is a method that can reveal statistically relevant data about what people are doing on your website, to help identify the usability enhancements with the biggest impact.",
      "duration": "Moderate",
      "effort": "Low",
      "location": "Remote",
      "dataType": "Both",
      "phase": []
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 0,
      "title": "Behavioral Mapping",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 0,
      "title": "Bodystorming",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": "x",
      "include": 0,
      "title": "Brainstorm Graphic Organizers",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Business Origami",
      "description": "Business origami enables teams to paper-prototype the interaction and value exchange among people, artifacts, and environments in a multichannel system.",
      "duration": "Low",
      "effort": "Low",
      "location": "Remote",
      "dataType": "Qualitative",
      "phase": [1,2]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Card Sorting",
      "description": "When user comprehension and meaningful categorization is critical, card sorting can help clarify.",
      "duration": "Low",
      "effort": "Low",
      "location": "Remote",
      "dataType": "Both",
      "phase": [2,3]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Case Studies",
      "description": "The case study is a research strategy involving in-depth investigation of single events or instances in context, using multiple sources of research evidence.",
      "duration": "Moderate",
      "effort": "Moderate",
      "location": "Remote",
      "dataType": "Qualitative",
      "phase": [2]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Cognitive Mapping",
      "description": "Cognitive mapping is a visualization of how people make sense of a particular problem space. It is most effective when used to structure complex problems and to inform decision making.",
      "duration": "Low",
      "effort": "Moderate",
      "location": "Remote",
      "dataType": "Qualitative",
      "phase": [2,3]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Cognitive Walkthrough",
      "description": "Cognitive walkthrough is a method that evaluates whether the order of cues and prompts in a system reflect the way people cognitively process tasks and anticipate “next steps” of a system.",
      "duration": "Low",
      "effort": "Low",
      "location": "Remote",
      "dataType": "Qualitative",
      "phase": [2,3]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Collage",
      "description": "As inspiration for design teams, collage allows participants to visually express their thoughts, feelings, desires, and other aspects of their life that are difficult to articulate using traditional means.",
      "duration": "Low",
      "effort": "Moderate",
      "location": "Either",
      "dataType": "Qualitative",
      "phase": [2,3]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Competitive Testing",
      "description": "Competitive testing is the process of conducting research to evaluate the usability and learnability of your competitors’ products.",
      "duration": "Low",
      "effort": "Considerable",
      "location": "Remote",
      "dataType": "Qualitative",
      "phase": [1,5]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Concepting Mapping",
      "description": "Concept mapping is a visual framework that allows designers to absorb new concepts into an existing understanding of a domain so that new meaning can be made.",
      "duration": "Low",
      "effort": "Low",
      "location": "Remote",
      "dataType": "Qualitative",
      "phase": [1,3]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 0,
      "title": "Content Analysis",
      "description": "Content analysis is the systematic description of form and content of written, spoken, or visual materials expressed in themes, patterns, and counted occurrences of words, phrases, images, or concepts.",
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": [2,3,4]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 0,
      "title": "Content Inventory & Audit",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": "x",
      "include": 0,
      "title": "Contextual Design",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Contextual Inquiry",
      "description": "Contextual inquiry is an immersive, contextual method of observing and interviewing that reveals underlying (and invisible) work structure.",
      "duration": "Extreme",
      "effort": "Considerable",
      "location": "Field",
      "dataType": "Qualitative",
      "phase": [2]
    },
    {
      "favorite": 0,
      "inform": "x",
      "include": 0,
      "title": "Creative Toolkits",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Critical Incident Technique",
      "description": "Understanding how users experience your product at critical moments can help you optimize your designs for future users.",
      "duration": "Low",
      "effort": "Low",
      "location": "Remote",
      "dataType": "Both",
      "phase": [1,2,5]
    },
    {
      "favorite": 0,
      "inform": "x",
      "include": 0,
      "title": "Crowsourcing",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 0,
      "title": "Cultural Probes",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Customer Experience Audit",
      "description": "Customer experience audits capture the day-to-day context in which people engage with your product or service.",
      "duration": "Moderate",
      "effort": "Moderate",
      "location": "Remote",
      "dataType": "Qualitative",
      "phase": [1,2,5]
    },
    {
      "favorite": 0,
      "inform": "x",
      "include": 1,
      "title": "Design Charette",
      "description": "When superior design features and characteristics inspire subsequent rounds of ideas, the end result is more likely to be an optimized design solution.",
      "duration": "Moderate",
      "effort": "Moderate",
      "location": "Field",
      "dataType": "Qualitative",
      "phase": [2,3]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Design Ethnography",
      "description": "Design ethnography approximates the immersion methods of traditional ethnography, to deeply experience and understand the user’s world for design empathy and insight.",
      "duration": "High",
      "effort": "High",
      "location": "Field",
      "dataType": "Qualitative",
      "phase": [2]
    },
    {
      "favorite": 0,
      "inform": "x",
      "include": 1,
      "title": "Design Workshops",
      "description": "Design workshops are a form of participatory design consolidating creative co-design methods into organized sessions for several participants to work with design team members.",
      "duration": "Moderate",
      "effort": "Moderate",
      "location": "Field",
      "dataType": "Qualitative",
      "phase": [2,3,4]
    },
    {
      "favorite": 0,
      "inform": "x",
      "include": 1,
      "title": "Desirability Testing",
      "description": "When there is disagreement about which design direction to pursue, desirability testing shifts the conversation from which design is “best” to which design elicits the optimal emotional response from users.",
      "duration": "Moderate",
      "effort": "Considerable",
      "location": "Remote",
      "dataType": "Qualitative",
      "phase": [3,4]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Diary Studies",
      "description": "Diaries or journals are guiding artifacts that allow people to conveniently and expressively convey personal details about their daily life and events to design teams.",
      "duration": "Moderate",
      "effort": "Considerable",
      "location": "Remote",
      "dataType": "Qualitative",
      "phase": [2]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Directed Storytelling",
      "description": "Directed storytelling allows designers to easily gather rich stories of lived experiences from participants, using thoughtful prompts and guiding and framing questions in conversation.",
      "duration": "Moderate",
      "effort": "Moderate",
      "location": "Remote",
      "dataType": "Qualitative",
      "phase": [2]
    },
    {
      "favorite": 0,
      "inform": "x",
      "include": 0,
      "title": "Elito Method",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 0,
      "title": "Ergonomic Analysis",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Evaluative Research",
      "description": "Evaluative research involves the testing of prototypes, products, or interfaces by real potential users of a system in design development.",
      "duration": "Moderate",
      "effort": "Moderate",
      "location": "Remote",
      "dataType": "Qualitative",
      "phase": [4]
    },
    {
      "favorite": 0,
      "inform": "x",
      "include": 0,
      "title": "Evidence-Based Design",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Experience Prototyping",
      "description": "Experience prototyping facilitates active participation in design through subjective engagement with a prototype system or service, product, or place.",
      "duration": "Considerable",
      "effort": "Considerable",
      "location": "Field",
      "dataType": "Qualitative",
      "phase": [4]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Experience Sampling Method",
      "description": "Experience sampling allows the designer to collect snapshots of behaviors, interactions, thoughts, or feelings from people who self-report in real time when signaled at random or timed intervals.",
      "duration": "Low",
      "effort": "Moderate",
      "location": "Remote",
      "dataType": "Qualitative",
      "phase": [2]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 0,
      "title": "Experiments",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": "x",
      "include": 0,
      "title": "Exploratory Research",
      "description": "Exploratory research is defined by user and product studies, intended to forge an empathic knowledge base, particularly when designers may be working in unfamiliar territory.",
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": [2]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Eyetracking",
      "description": "Eyetracking gathers detailed technical information on exactly where and for how long participants are looking— and not looking— when using an interface or interacting with products.",
      "duration": "Moderate",
      "effort": "Moderate",
      "location": "Remote",
      "dataType": "Quantitative",
      "phase": [1,4,5]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 0,
      "title": "Flexible Modeling",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 0,
      "title": "Fly-on-the-Wall Observation",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Focus Groups",
      "description": "The dynamic created by a small group of well-chosen people, when guided by a skilled moderator, can provide deep insight into themes, patterns, and trends.",
      "duration": "Considerable",
      "effort": "Moderate",
      "location": "Field",
      "dataType": "Qualitative",
      "phase": [1,5]
    },
    {
      "favorite": 0,
      "inform": "x",
      "include": 0,
      "title": "Generative Research",
      "description": "Generative design exercises engage users in creative opportunities to express their feelings, dreams, needs, and desires, resulting in rich information for concept development.",
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": [3]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 0,
      "title": "Graffiti Walls",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": "x",
      "include": 1,
      "title": "Hueristic Evaluation",
      "description": "An agreed-upon set of usability best practices can help detect usability problems before actual users are brought in to further evaluate an interface.",
      "duration": "Low",
      "effort": "Low",
      "location": "Remote",
      "dataType": "Both",
      "phase": [4,5]
    },
    {
      "favorite": 0,
      "inform": "x",
      "include": 0,
      "title": "Image Boards",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Interviews",
      "description": "Interviews are a fundamental research method for direct contact with participants, to collect firsthand personal accounts of experience, opinions, attitudes, and perceptions.",
      "duration": "Low",
      "effort": "Moderate",
      "location": "Either",
      "dataType": "Qualitative",
      "phase": [2,3,4]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "KJ Technique",
      "description": "When the traditional meeting format fails to achieve group consensus, the KJ Technique can be used to help teams work through a problem space and prioritize what should be focused on first.",
      "duration": "Low",
      "effort": "Low",
      "location": "Either",
      "dataType": "Quantitative",
      "phase": [1,2,3,4,5]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Kano Analysis",
      "description": "Not all product attributes are equally important to the customer. Use Kano Analysis to determine which product attributes have the greatest impact on customer satisfaction.",
      "duration": "Low",
      "effort": "Low",
      "location": "Either",
      "dataType": "Quantitative",
      "phase": [1,2,5]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 0,
      "title": "Key Performance Indicators",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 0,
      "title": "Laddering",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Literature Reviews",
      "description": "Literature reviews are an integral part of academic papers, but are also a useful component of any design project, to collect and synthesize research on a given topic.",
      "duration": "Moderate",
      "effort": "Low",
      "location": "Remote",
      "dataType": "Quantitative",
      "phase": [1,2]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "The Love Letter & The Breakup Letter",
      "description": "A personal letter written to a product often reveals profound insights about what people value and expect from the objects in their everyday lives.",
      "duration": "Low",
      "effort": "Low",
      "location": "Remote",
      "dataType": "Qualitative",
      "phase": [1,2,5]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Mental Model Diagrams",
      "description": "People tend to behave in ways consistent with dearly held beliefs. The mental model diagram can help you articulate root causes behind behaviors and develop solutions that deeply resonate with people.",
      "duration": "Low",
      "effort": "Low",
      "location": "Remote",
      "dataType": "Qualitative",
      "phase": [2,3]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Mind Mapping",
      "description": "When a topic or a problem has many moving parts, mind mapping provides a method of visually organizing a problem space in order to better understand it.",
      "duration": "Low",
      "effort": "Low",
      "location": "Remote",
      "dataType": "Qualitative",
      "phase": [2]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Observation",
      "description": "A fundamental research skill, observation requires attentive looking and systematic recording of phenomena— including people, artifacts, environments, events, behaviors and interactions.",
      "duration": "High",
      "effort": "High",
      "location": "Field",
      "dataType": "Qualitative",
      "phase": [2]
    },
    {
      "favorite": 0,
      "inform": "x",
      "include": 1,
      "title": "Parallel Prototyping",
      "description": "Simultaneously exploring multiple design opportunities can help teams keep from fixating on a design direction too early, improve the nature of design critiques, and lead to more effective design results.",
      "duration": "High",
      "effort": "Considerable",
      "location": "Either",
      "dataType": "Qualitative",
      "phase": [3]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Participant Observation",
      "description": "Participant observation is an immersive, ethnographic method for understanding situations and behaviors through the experience of membership participation in an activity, context, culture, or subculture.",
      "duration": "High",
      "effort": "High",
      "location": "Field",
      "dataType": "Qualitative",
      "phase": [2]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 0,
      "title": "Participatory Action Research (PAR)",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Participatory Design",
      "description": "Participatory design is a human-centered approach advocating active user and stakeholder engagement throughout all phases of the research and design process, including co-design activities.",
      "duration": "High",
      "effort": "High",
      "location": "Either",
      "dataType": "Qualitative",
      "phase": [2,3,4]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 0,
      "title": "Personal Inventories",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Personas",
      "description": "Personas consolidate archetypal descriptions of user behavior patterns into representative profiles, to humanize design focus, test scenarios, and aid design communication.",
      "duration": "Low",
      "effort": "Low",
      "location": "Remote",
      "dataType": "Qualitative",
      "phase": [3]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Photo Studies",
      "description": "Photo studies invite the participant to photo-document aspects of his or her life and interactions, providing the designer with visual, self-reported insights into user behaviors and priorities.",
      "duration": "Low",
      "effort": "Moderate",
      "location": "Remote",
      "dataType": "Qualitative",
      "phase": [2]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 0,
      "title": "Picture Cards",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": "x",
      "include": 0,
      "title": "Prototyping",
      "description": "Prototyping is the tangible creation of artifacts at various levels of resolution, for development and testing of ideas within design teams and with clients and users.",
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": [3,4]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Questionnaires",
      "description": "Questionnaires are survey instruments designed for collecting self-report information from people about their characteristics, thoughts, feelings, perceptions, behaviors, or attitudes, typically in written form.",
      "duration": "Low",
      "effort": "Low",
      "location": "Remote",
      "dataType": "Both",
      "phase": [2,4]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Rapid Iterative Testing & Evaliation (RITE)",
      "description": "RITE is a powerful formative usability inspection method that helps teams identify and remove major problems in an interface early in the design process before costly prototypes are built.",
      "duration": "Moderate",
      "effort": "Considerable",
      "location": "Remote",
      "dataType": "Qualitative",
      "phase": [2,3]
    },
    {
      "favorite": 0,
      "inform": "x",
      "include": 0,
      "title": "Remote Moderated Research",
      "description": "Remotely observing users completing tasks on their own electronic devices can reveal rich insights into contexts of use that cannot be replicated in a controlled lab environment.",
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": [3,4,5]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 0,
      "title": "Research Through Design",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": "x",
      "include": 1,
      "title": "Role-playing",
      "description": "Acting the role of the user in realistic scenarios can forge a deep sense of empathy and highlight challenges, presenting opportunities that can be met by design.",
      "duration": "Moderate",
      "effort": "Moderate",
      "location": "Field",
      "dataType": "Qualitative",
      "phase": [2,3]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Scenario Description Swimlanes",
      "description": "Scenario description swimlanes are deliverables that visualize the activities of multiple actors in a flow of events and prove that a holistic perspective is greater than the sum of its parts.",
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": [2,3]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Scenarios",
      "description": "A scenario is a narrative that explores the future use of a product from a user’s point of view, helping design teams reason about its place in a person’s day-to-day life.",
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": [2,3]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Secondary Research",
      "description": "Secondary research consists of information collected and synthesized from existing data, rather than original material sourced through primary research with participants.",
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": [1,2]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Semantic Differential",
      "description": "Semantic differentials can help reveal “felt” meanings that are a direct product of one’s experiences, culture, and dearly held beliefs.",
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": [1,4,5]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Shaddowing",
      "description": "Shadowing provides key insight into a participant’s activities and decision patterns as the researcher follows him or her closely throughout his or her daily routines.",
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": [2]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 0,
      "title": "Simulation Excercises",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Site Search Analytics",
      "description": "Analyzing the words and phrases entered into a site search gives organizations insight into what people are looking for, which is an opportunity to evaluate how well site content meets those needs.",
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": [1,5]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Speed Dating",
      "description": "When people compare multiple design concepts in quick succession, design teams can learn how people react to new technology while also taking into account existing contextual and social factors.",
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": [2,3]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Stakeholder Maps",
      "description": "Stakeholder maps help to visually consolidate and communicate the key constituents of a design project, setting the stage for user-centered research and design development.",
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": [1]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Stakeholder Walkthrough",
      "description": "Stakeholder walkthroughs bring end users, stakeholders, and the design team together to evaluate early prototypes, providing actionable recommendations for improvements and building empathy.",
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": [3]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Storyboards",
      "description": "Storyboards provide a visual narrative that generates empathy and communicates the context in which a technology or form factor will be used.",
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": [3]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Surveys",
      "description": "Surveys are a method of collecting self-reported information from people about their characteristics, thoughts, feelings, perceptions, behaviors, or attitudes.",
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": [2]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Task Analysis",
      "description": "Task analysis breaks down the constituent elements of a user’s work flow, including actions and interactions, system response, and environmental context.",
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": [2]
    },
    {
      "favorite": 0,
      "inform": "x",
      "include": 0,
      "title": "Terrritory Maps",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 0,
      "title": "Thematic Networks",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": "x",
      "include": 0,
      "title": "Think-aloud Protocol",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Time-aware Research",
      "description": "Intercepting people at the precise moment they choose to complete a task provides keen insight into how they accomplish self-directed goals.",
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": [5]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Touchstone Tours",
      "description": "The guided tour is designed as a conversation that uses artifacts and the environment as touchstones for questions and insights.",
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": [2]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Triading",
      "description": "Triading is an interviewing technique that reveals deep-seated attitudes, perceptions, and feelings toward brands, products, and services.",
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": [1,2]
    },
    {
      "favorite": 0,
      "inform": "x",
      "include": 0,
      "title": "Triangulation",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 0,
      "title": "Unobtrusive Measures",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": "x",
      "include": 0,
      "title": "Usability Report",
      "description": 0,
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": []
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Usability Testing",
      "description": "Usability testing focuses on people and their tasks, and seeks empirical evidence about how to improve the usability of an interface.",
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": [3,4,5]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "User Journey Maps",
      "description": "A user journey map is a visualization of the experiences people have when interacting with a product or service, so that each moment can be individually evaluated and improved.",
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": [3]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Value Opportunity Analysis",
      "description": "Value opportunity analysis maps the extent to which a product’s aspirational qualities align to people’s idealized lifestyle or fantasy version of themselves.",
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": [3,5]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Web Analytics",
      "description": "Web analytics are a gateway for your organization to become deeply invested in what your customers are doing online, and why.",
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": [5]
    },
    {
      "favorite": 0,
      "inform": 0,
      "include": 1,
      "title": "Weighted Matrix",
      "description": "Once your team has generated multiple design concepts, a weighted matrix can help identify and prioritize the most promising opportunities.",
      "duration": 0,
      "effort": 0,
      "location": 0,
      "dataType": 0,
      "phase": [3]
    });
  });
/*
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
      "summary": "Lorem cupidatat esse labore consequat anim incididunt dolore nulla.",
      "overview": "Lorem cupidatat esse labore consequat anim incididunt dolore nulla labore consectetur dolor mollit adipisicing. Eiusmod laborum consequat qui qui elit officia cupidatat ullamco. Elit qui anim incididunt nulla do irure. Est sit officia excepteur elit.",
      "phase": "Planning, Scoping, and Definition",
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
      "users": [{user: "574dd661768100ae0eb63613"}],
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
