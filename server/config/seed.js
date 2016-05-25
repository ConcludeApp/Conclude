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
      "pretty": "non",
      "namespace": "tag:non"
    },
    {
      "_id": "573f42a7929b0ade79968eb1",
      "pretty": "sunt",
      "namespace": "tag:sunt"
    },
    {
      "_id": "573f42a78d71f5a258a021f5",
      "pretty": "consectetur",
      "namespace": "tag:consectetur"
    },
    {
      "_id": "573f42a7dbca18d419a85090",
      "pretty": "nulla",
      "namespace": "tag:nulla"
    },
    {
      "_id": "573f42a7e24d1ef78eb1a0b6",
      "pretty": "nulla",
      "namespace": "tag:nulla"
    },
    {
      "_id": "573f42a78904a3a294f51430",
      "pretty": "sint",
      "namespace": "tag:sint"
    })
  })

Persona.find({}).remove()
  .then(() =>{
    Persona.create({
      "_id": "573e8120b6368b86852d84a3",
      "name": "Bauer Ellison",
      "title": "do anim dolor",
      "quote": "Cillum duis dolore dolor excepteur non elit commodo sit do cupidatat sunt veniam esse. Enim reprehenderit ipsum officia nisi do ad ullamco deserunt fugiat aliquip officia adipisicing pariatur.",
      "description": "Elit magna quis consectetur dolore reprehenderit nisi. Sint quis commodo exercitation ea Lorem mollit occaecat tempor et mollit dolor id nulla qui. Nisi eu irure enim cupidatat qui.\r\n",
      "photo": "http://unsplash.it/500?random",
      "goals": [],
      "challenges": [],
      "whatMatters": "Aliquip nisi non Lorem officia ullamco do sunt consectetur exercitation in anim. Lorem amet aliquip reprehenderit minim cillum esse aute eiusmod non deserunt labore. Elit non esse occaecat excepteur sit officia ex dolore do.",
      "link": "qui.com"
    },
    {
      "_id": "573e8120cb818c06779e533d",
      "name": "Vance Mccormick",
      "title": "reprehenderit sit irure",
      "quote": "Eu non laborum officia exercitation irure. Et id pariatur laboris enim cillum deserunt quis incididunt commodo dolore magna quis proident.",
      "description": "Veniam ullamco dolore do amet anim eiusmod quis culpa mollit exercitation excepteur officia. Sit officia incididunt irure nostrud et proident labore minim excepteur tempor nulla pariatur. Aliqua nisi non aute eiusmod nulla occaecat sint deserunt duis aliquip nulla sit. Sunt aliquip enim sit excepteur magna duis incididunt sint.\r\n",
      "photo": "http://unsplash.it/500?random",
      "goals": [
        {
          "title": "Nostrud et cillum sint officia duis fugiat duis tempor laborum tempor veniam elit id.",
          "description": "Aliqua commodo ad Lorem id tempor esse deserunt ullamco velit reprehenderit amet duis. Adipisicing exercitation aliquip pariatur eu culpa fugiat tempor dolor commodo aliquip proident. Labore veniam consectetur cupidatat nisi cillum mollit et proident fugiat proident minim cillum consectetur consequat."
        }
      ],
      "challenges": [
        {
          "title": "Exercitation ad veniam amet aute minim eu anim mollit sunt consectetur adipisicing dolor.",
          "description": "Esse in do Lorem amet elit cupidatat laborum. Consectetur officia ullamco id deserunt eu est nulla amet in. Quis commodo ex laborum ea."
        },
        {
          "title": "Exercitation aliquip dolor consequat consequat irure Lorem sit et.",
          "description": "Excepteur in laborum nisi ad aliqua esse nulla ad enim nulla. Voluptate magna in esse consectetur aute nostrud irure eiusmod minim anim sunt fugiat. Est pariatur culpa minim tempor do voluptate velit ullamco laborum Lorem sunt."
        }
      ],
      "whatMatters": "Dolore labore et ex velit ad ea mollit. Enim eiusmod sunt sint ullamco ipsum minim anim Lorem proident. Culpa dolore qui excepteur ipsum Lorem pariatur eu incididunt officia aliqua nisi sunt officia.",
      "link": "exercitation.com"
    },
    {
      "_id": "573e8120e45114111bfbc4a6",
      "name": "Jacobs Gay",
      "title": "irure duis consequat",
      "quote": "Id qui eu irure magna deserunt. Non proident enim eu sit quis sunt amet consectetur eiusmod irure excepteur elit consequat.",
      "description": "Quis anim ea consequat duis. Elit elit anim adipisicing ex eu quis occaecat pariatur aliqua aliquip. Est eu deserunt eu aute eu commodo tempor culpa duis in ipsum deserunt excepteur.\r\n",
      "photo": "http://unsplash.it/500?random",
      "goals": [
        {
          "title": "Ipsum cupidatat id voluptate duis irure ea ex occaecat eiusmod aliquip esse reprehenderit velit.",
          "description": "Irure proident labore eu mollit deserunt duis eu in voluptate sunt excepteur adipisicing non nisi. Do mollit aute duis eu pariatur excepteur pariatur aliqua pariatur duis culpa do nostrud. Incididunt sint labore excepteur aliqua laborum laborum laborum occaecat elit laborum."
        },
        {
          "title": "Aliqua occaecat quis consequat fugiat et anim non id in.",
          "description": "Reprehenderit dolore voluptate officia esse esse magna dolor officia ullamco. Lorem minim ullamco cillum culpa amet elit proident duis dolor ullamco eu eu. Exercitation tempor occaecat ut occaecat tempor nostrud Lorem irure dolore ipsum laboris exercitation aute."
        },
        {
          "title": "Sit exercitation ex elit culpa duis enim cupidatat eu adipisicing in culpa.",
          "description": "Consequat anim consectetur dolor qui. Sit irure adipisicing in anim do exercitation aute. In ullamco magna amet in pariatur nulla amet amet excepteur magna eiusmod deserunt incididunt ut."
        }
      ],
      "challenges": [],
      "whatMatters": "Duis aute nisi velit aliqua. Ad consequat consectetur dolore cupidatat fugiat aliqua ullamco mollit occaecat reprehenderit ipsum culpa. Non sunt eiusmod cillum laboris minim duis irure sint dolore amet commodo elit.",
      "link": "irure.com"
    },
    {
      "_id": "573e8120916fcff01cf2dd51",
      "name": "Byrd Reed",
      "title": "adipisicing quis aliquip",
      "quote": "Commodo incididunt nisi magna ipsum id tempor deserunt adipisicing do amet est consectetur dolor. Nulla in elit officia fugiat.",
      "description": "Sit minim quis est tempor veniam consequat. Veniam laborum quis in elit ullamco. Mollit reprehenderit nulla aliqua nisi laboris consequat ex quis laborum voluptate voluptate nostrud elit est. Id voluptate aliqua occaecat amet dolor cillum ullamco sit fugiat. Ex deserunt qui cupidatat deserunt deserunt ut.\r\n",
      "photo": "http://unsplash.it/500?random",
      "goals": [
        {
          "title": "Commodo fugiat et fugiat adipisicing irure aute aliquip.",
          "description": "Ullamco incididunt incididunt elit cupidatat adipisicing ipsum pariatur pariatur mollit nostrud. Incididunt ut dolore adipisicing eiusmod ea sint ullamco pariatur magna. Aliquip voluptate minim officia excepteur cupidatat."
        },
        {
          "title": "Adipisicing veniam est voluptate labore.",
          "description": "Aute cupidatat consectetur in incididunt cupidatat eiusmod occaecat incididunt sint irure cillum do ipsum amet. Sunt non minim veniam eiusmod incididunt anim ut. Ex voluptate ea exercitation veniam pariatur id consequat quis velit in mollit ex irure pariatur."
        },
        {
          "title": "Elit aute ad eu labore enim deserunt.",
          "description": "Nostrud in ipsum exercitation commodo eiusmod officia sit exercitation anim cupidatat ad qui pariatur. Consequat non nisi consectetur fugiat proident. Ipsum officia sunt pariatur ad id adipisicing pariatur."
        }
      ],
      "challenges": [
        {
          "title": "Officia aute aute non velit est in.",
          "description": "Aliquip esse aute magna laboris nostrud fugiat quis. Commodo sunt duis minim ipsum consequat quis magna enim est dolor enim sit. Enim nostrud id amet ex."
        },
        {
          "title": "Proident nisi et sunt aliqua sint fugiat laboris tempor proident minim quis.",
          "description": "Id aliquip nisi minim labore nostrud sunt culpa. Ex eu officia commodo dolor in elit fugiat nostrud. Incididunt do cillum reprehenderit do ea exercitation sunt minim sint."
        }
      ],
      "whatMatters": "Officia sint ut tempor incididunt dolore est consequat excepteur ea enim. Incididunt consequat incididunt commodo nulla cupidatat eiusmod aliquip exercitation aliquip. Pariatur eiusmod dolor proident officia nostrud in duis.",
      "link": "laboris.com"
    },
    {
      "_id": "573e8120b4ca0b9217c11551",
      "name": "Georgina Jenkins",
      "title": "laboris reprehenderit do",
      "quote": "Irure nostrud quis eu nulla aliqua ipsum irure nostrud eu. Aliquip ad nostrud eu commodo proident laborum labore officia nisi dolore et.",
      "description": "Id ea ipsum enim sunt laboris. Deserunt aliquip ad aute duis irure do consectetur tempor cillum non amet. Non pariatur fugiat sint voluptate occaecat do eu proident nisi. Anim laborum pariatur excepteur consectetur Lorem laboris incididunt.\r\n",
      "photo": "http://unsplash.it/500?random",
      "goals": [
        {
          "title": "Eu proident deserunt officia dolor commodo officia enim reprehenderit.",
          "description": "Velit proident minim id eiusmod anim occaecat nulla et irure sint occaecat. Pariatur cupidatat excepteur pariatur tempor Lorem aliqua aliquip fugiat nulla veniam pariatur exercitation dolor anim. Minim occaecat dolore adipisicing anim est id esse in cillum elit."
        },
        {
          "title": "Elit incididunt labore proident nisi amet duis sint enim anim occaecat sunt ullamco.",
          "description": "Eu magna cupidatat nulla cillum. Consequat ex deserunt exercitation minim culpa anim tempor consequat Lorem incididunt sunt. Nisi adipisicing commodo dolore dolore velit reprehenderit incididunt dolore elit."
        },
        {
          "title": "Incididunt ex sint fugiat ex pariatur amet.",
          "description": "Proident minim aliquip irure do ad. Dolore esse sit voluptate veniam reprehenderit enim fugiat eiusmod. Culpa in labore mollit tempor elit ad nostrud sit exercitation anim pariatur."
        }
      ],
      "challenges": [],
      "whatMatters": "Ad eu velit est ea non laboris do consequat et nisi. Cupidatat sint cupidatat enim et culpa elit mollit aliquip et deserunt est. Amet do magna magna ex est excepteur aliquip pariatur deserunt tempor.",
      "link": "est.com"
    },
    {
      "_id": "573e8120fbb46bf85a4539be",
      "name": "Schroeder Bailey",
      "title": "officia laborum Lorem",
      "quote": "Cillum sit est non irure excepteur et amet reprehenderit irure in qui et id. Veniam officia aliquip tempor quis do eiusmod.",
      "description": "Consectetur irure aliquip reprehenderit dolore deserunt. Amet dolor elit fugiat nisi culpa cillum et. Quis esse nostrud excepteur non enim. Tempor quis mollit elit dolore ad sunt.\r\n",
      "photo": "http://unsplash.it/500?random",
      "goals": [
        {
          "title": "Sint labore nulla officia labore consectetur dolore veniam.",
          "description": "Reprehenderit consequat et officia esse consequat anim proident mollit amet minim irure. Cillum proident nisi minim qui irure et cupidatat exercitation mollit. Duis et amet sit et deserunt amet id pariatur nisi voluptate culpa."
        },
        {
          "title": "Adipisicing ullamco nulla quis culpa velit veniam enim sint incididunt commodo officia aliquip.",
          "description": "Occaecat in occaecat id pariatur. Sunt in officia reprehenderit officia ea culpa non ullamco ex esse mollit tempor. Ex ea est anim ipsum velit eu officia consequat ullamco dolore ex laborum in."
        }
      ],
      "challenges": [],
      "whatMatters": "Qui ea amet enim laborum elit excepteur. Adipisicing duis aliquip officia voluptate adipisicing. Sunt magna ipsum labore enim anim minim esse laborum magna reprehenderit reprehenderit adipisicing ipsum eiusmod.",
      "link": "incididunt.com"
    });
  });

ResearchMethod.find({}).remove()
  .then(() => {
    ResearchMethod.create({
      "_id": "573e1953a134100952531328",
      "title": "commodo qui reprehenderit elit aute cillum magna non consequat",
      "description": "Aute sint Lorem id pariatur non consequat occaecat laboris proident anim ipsum mollit dolore. Nulla laboris cillum voluptate pariatur. Irure aute do enim id minim commodo aliqua fugiat Lorem nulla. Deserunt ex commodo anim occaecat culpa et.",
      "effort": "3/hrs - 7/hrs",
      "cost": "$22.00 - $299.00",
      "dataType": "qualitative",
      "duration": "2/wks - 6/wks",
      "location": "remote"
    },
    {
      "_id": "573e1953e73234f5adf8e1d1",
      "title": "dolore laborum eiusmod occaecat minim cupidatat cillum culpa quis",
      "description": "Ea consequat consectetur Lorem dolore excepteur magna nulla do do tempor fugiat ut. Non id fugiat id dolore est duis ea anim deserunt nostrud non magna. Veniam quis veniam sit incididunt proident aliqua fugiat. Incididunt sit consectetur occaecat ad cupidatat esse laboris reprehenderit aliquip.",
      "effort": "4/hrs - 8/hrs",
      "cost": "$4.00 - $178.00",
      "dataType": "qualitative",
      "duration": "2/wks - 6/wks",
      "location": "remote"
    },
    {
      "_id": "573e1953abab10da28f329bd",
      "title": "sint cillum aute laboris consectetur commodo incididunt aliquip eiusmod",
      "description": "Consectetur reprehenderit in labore elit sit velit et aute occaecat anim voluptate. Laboris enim deserunt exercitation mollit dolor officia duis. Laborum anim ea consectetur et voluptate esse cupidatat commodo incididunt culpa adipisicing. Commodo veniam in mollit sit id Lorem occaecat deserunt ad proident sunt.",
      "effort": "4/hrs - 5/hrs",
      "cost": "$10.00 - $312.00",
      "dataType": "quantitative",
      "duration": "3/wks - 5/wks",
      "location": "remote"
    },
    {
      "_id": "573e19539f3892ef8e35f51d",
      "title": "magna tempor cillum amet elit ad adipisicing veniam velit",
      "description": "Culpa qui excepteur amet fugiat ut nostrud aute anim id irure mollit. Nostrud excepteur adipisicing pariatur ea pariatur excepteur enim veniam quis elit aute. Sit laboris sunt deserunt deserunt ipsum. Ex cupidatat magna elit mollit fugiat eu magna qui sit.",
      "effort": "4/hrs - 10/hrs",
      "cost": "$16.00 - $342.00",
      "dataType": "quantitative",
      "duration": "2/wks - 6/wks",
      "location": "remote"
    },
    {
      "_id": "573e1953fb1e991cbd5d31bf",
      "title": "sunt culpa in ullamco esse dolor tempor labore nisi",
      "description": "Ullamco ut velit adipisicing exercitation aute aute commodo incididunt. Amet sint et id esse ullamco ut quis ex est proident pariatur voluptate qui veniam. Ut duis culpa anim ea consectetur reprehenderit et reprehenderit culpa sint nisi ea Lorem. Eiusmod labore ullamco ut anim reprehenderit cupidatat ea pariatur laborum excepteur esse in esse amet.",
      "effort": "4/hrs - 9/hrs",
      "cost": "$41.00 - $277.00",
      "dataType": "quantitative",
      "duration": "3/wks - 6/wks",
      "location": "remote"
    },
    {
      "_id": "573e1953b13695e784d8e664",
      "title": "officia ipsum cillum adipisicing voluptate minim ut nostrud cupidatat",
      "description": "Laborum eiusmod sit exercitation non laboris esse non nulla. Ex est magna elit veniam anim ullamco anim non esse consectetur duis id ea. Consectetur mollit ex sit est. Sint incididunt est aliqua cillum.",
      "effort": "5/hrs - 10/hrs",
      "cost": "$44.00 - $337.00",
      "dataType": "quantitative",
      "duration": "1/wks - 4/wks",
      "location": "remote"
    });
  });

Product.find({}).remove()
  .then(() => {
    Product.create({
      "_id": "573e163e5917a8317f19d7ba",
      "title": "minim"
    },
    {
      "_id": "573e163e50d2a1978f92dc9d",
      "title": "sit"
    },
    {
      "_id": "573e163e715301a59ff5018d",
      "title": "nisi"
    },
    {
      "_id": "573e163e7b6b3d9a74badbdf",
      "title": "cillum"
    },
    {
      "_id": "573e163efae9be95dcc89400",
      "title": "velit"
    },
    {
      "_id": "573e163e32918931c9e991f8",
      "title": "ad"
    });
  });

Category.find({}).remove()
  .then(() => {
    Category.create({
      "_id": "573e155ac9acb2cd74e74007",
      "pretty": "excepteur",
      "namespace": "category:excepteur"
    },
    {
      "_id": "573e155a2ac1bf20de141dbf",
      "pretty": "duis",
      "namespace": "category:duis"
    },
    {
      "_id": "573e155a9216b5e3d0119669",
      "pretty": "reprehenderit",
      "namespace": "category:reprehenderit"
    },
    {
      "_id": "573e155aa6f24b3aea0dcfd7",
      "pretty": "ut",
      "namespace": "category:ut"
    },
    {
      "_id": "573e155a723876cc4db42431",
      "pretty": "aliqua",
      "namespace": "category:aliqua"
    },
    {
      "_id": "573e155a2537a2e00fb339dd",
      "pretty": "non",
      "namespace": "category:non"
    },
    {
      "_id": "573e155a0d6b705190c1644d",
      "pretty": "qui",
      "namespace": "category:qui"
    },
    {
      "_id": "573e155ad4c1d3226c8b54f3",
      "pretty": "enim",
      "namespace": "category:enim"
    },
    {
      "_id": "573e155af59ae3c15062eaa9",
      "pretty": "non",
      "namespace": "category:non"
    });
  });

Subcategory.find({}).remove()
  .then(() => {
    Subcategory.create({
      "_id": "573e1528afdac1f0de865670",
      "pretty": "commodo",
      "namespace": "subcategory:commodo"
    },
    {
      "_id": "573e15282e7dc62a3b7a9c32",
      "pretty": "laborum",
      "namespace": "subcategory:laborum"
    },
    {
      "_id": "573e1528c1a760acffa77283",
      "pretty": "in",
      "namespace": "subcategory:in"
    },
    {
      "_id": "573e1528c41ef8d4056f162a",
      "pretty": "tempor",
      "namespace": "subcategory:tempor"
    },
    {
      "_id": "573e152875354fe1a9de064a",
      "pretty": "mollit",
      "namespace": "subcategory:mollit"
    },
    {
      "_id": "573e152861aaf11346820f55",
      "pretty": "dolor",
      "namespace": "subcategory:dolor"
    },
    {
      "_id": "573e1528afbeb919f09276b7",
      "pretty": "labore",
      "namespace": "subcategory:labore"
    },
    {
      "_id": "573e15287b1af3b175ce25be",
      "pretty": "ipsum",
      "namespace": "subcategory:ipsum"
    },
    {
      "_id": "573e15287770d59e252968d5",
      "pretty": "labore",
      "namespace": "subcategory:labore"
    });
  });

Project.find({}).remove()
  .then(() => {
    Project.create({
      "_id": "573e1fc2bb7939dff1551faf",
      "title": "sit veniam voluptate nostrud voluptate anim id reprehenderit eu occaecat",
      "overview": "Lorem cupidatat esse labore consequat anim incididunt dolore nulla labore consectetur dolor mollit adipisicing. Eiusmod laborum consequat qui qui elit officia cupidatat ullamco. Elit qui anim incididunt nulla do irure. Est sit officia excepteur elit.",
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
      "personas": [],
      "files": [],
      "timestamp": {
        "endDate": "05/07/2016",
        "updated": "05/19/2016"
      }
    },
    {
      "_id": "573e1fc2ad8b84b8d936cd4b",
      "title": "et officia cillum duis cupidatat exercitation eu quis occaecat ipsum",
      "overview": "Consequat qui mollit veniam irure ullamco do eiusmod ex minim. Ut sint fugiat qui aliquip ipsum laboris magna occaecat. Quis magna nulla commodo ad ut nisi esse qui. Sit aliqua pariatur tempor amet eu.",
      "goals": [
        {
          "primary": false,
          "description": "Minim minim nulla laborum amet aliquip. Eu excepteur et pariatur aliqua ut sit exercitation proident do Lorem velit eu sint nisi."
        },
        {
          "primary": false,
          "description": "Ad esse aute ut proident irure non dolor occaecat minim ad ex veniam. Laboris adipisicing cupidatat eu quis deserunt eu labore quis qui sunt esse do in nulla."
        }
      ],
      "questions": [
        {
          "primary": false,
          "question": "Anim sint tempor laboris dolor tempor in pariatur quis veniam nostrud incididunt.?",
          "answer": "Veniam anim duis commodo amet amet. Nulla nisi proident consequat amet est esse ipsum irure ex velit id ex excepteur consectetur."
        },
        {
          "primary": false,
          "question": "Proident sint qui dolor officia veniam voluptate.?",
          "answer": "Cillum culpa qui in anim cillum voluptate aliqua aliqua. Quis ad ex irure aliquip cillum labore fugiat magna aliquip."
        }
      ],
      "quotes": [
        {
          "source": "Article - 08/03/2015",
          "quote": "Vivamus quis sapien eu tortor sollicitudin congue sit amet ac tortor. Nam et nunc a ex feugiat convallis quis ac nibh. Sed feugiat ultricies eros nec consectetur.",
          "author": {
            "photo": "http://unsplash.it/500?random",
            "title": "CEO - Time",
            "name": "John Doe" 
          } 
        }
      ],
      "personas": [],
      "files": [],
      "taxonomy": {
        "category": "573e155ac9acb2cd74e74007",
        "subcategory": "573e1528afdac1f0de865670"
      },
      "timestamp": {
        "endDate": "04/10/2014",
        "updated": "05/19/2016"
      }
    },
    {
      "_id": "573e1fc2672026d7147ab984",
      "title": "consequat aute deserunt culpa eu commodo quis ex et exercitation",
      "overview": "Aute nostrud magna incididunt nulla ullamco ad veniam consequat officia pariatur dolor. Eiusmod ea laboris laboris consequat eu non aliqua sint magna Lorem magna aliquip. Excepteur pariatur aute anim exercitation ut voluptate. Occaecat adipisicing voluptate exercitation labore do.",
      "goals": [
        {
          "primary": false,
          "description": "Officia laboris nisi elit nisi. Officia proident Lorem laboris cupidatat aliqua nisi enim velit qui fugiat non exercitation nostrud voluptate."
        }
      ],
      "questions": [
        {
          "primary": false,
          "question": "Ea exercitation velit consectetur veniam magna laborum et deserunt est adipisicing labore.?",
          "answer": "Nisi sunt voluptate labore nulla reprehenderit nisi tempor. Sit culpa sit esse aute eiusmod ut Lorem veniam magna occaecat."
        },
        {
          "primary": false,
          "question": "Elit Lorem qui aliqua sunt ad esse nostrud occaecat eiusmod ullamco.?",
          "answer": "Do dolor ullamco Lorem irure fugiat nostrud fugiat fugiat veniam minim veniam aute proident. Eu qui do proident anim commodo ipsum qui labore consequat nulla laborum ea."
        },
        {
          "primary": false,
          "question": "Elit velit eiusmod culpa cupidatat magna veniam proident amet exercitation cupidatat ipsum reprehenderit.?",
          "answer": "Aliquip tempor pariatur non eiusmod nulla sint nostrud exercitation. Irure ut ea ad elit nulla ut enim ullamco."
        }
      ],
      "quotes": [],
      "personas": [],
      "files": [],
      "timestamp": {
        "endDate": "02/08/2015",
        "updated": "05/19/2016"
      }
    });
  });


User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Daniel Price',
      email: 'dan@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    });
  });
