import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  books: Array<any>=[
    {
      "name":"The Paris Apartment",
      "author":"Lucy Foley",
      "bookImage":"book206.jpg",
      "bookPrize":"$ 530.00",
      "orginalBookPrize":"$ 789.00",
      "publisher":"William Morrow ",
      "relesedDate":"22 February 2022 ",
      "bookStockDetails":"Available",
      "aboutbook":"From the New York Times bestselling author of The Guest List comes a new locked room mystery, set in a Paris apartment building in which every resident has something to hide… Jess needs a fresh start. She’s broke and alone, and she’s just left her job under less than ideal circumstances. Her half-brother Ben didn’t sound thrilled when she asked if she could crash with him for a bit, but he didn’t say no, and surely everything will look better from Paris. Only when she shows up – to find a very nice apartment, could Ben really have afforded this? – he’s not there.The longer Ben stays missing, the more Jess starts to dig into her brother’s situation, and the more questions she has. Ben’s neighbors are an eclectic bunch, and not particularly friendly. Jess may have come to Paris to escape her past, but it’s starting to look like it’s Ben’s future that’s in question.",
      "aboutAuthor":"Lucy Foley studied English liter­ature at Durham University and University College London and worked for several years as a fiction edi­tor in the publishing industry. She is the author of five novels including The Guest List and The Hunt­ing Party. She lives in London.“Foley is the master of the slow reveal, and gives a little bit at a time to lead up to the big reveal. You never quite know what to expect, which makes the plot even more exciting. This well-written and entertaining read is perfect for fans of Ruth Ware, Agatha Christie, and Foley’s previous books."
    
      },

  {
    "name":"The Guest List",
    "author":"Melissa Hill",
    "bookImage":"book54.jpg",
    "bookPrize":"$ 642.00",
    "orginalBookPrize":"$ 885.00",
    "publisher":" Hodder & Stoughton",
    "relesedDate":" 25 April 2013 ",
    "bookStockDetails":"Available",
    "aboutbook":"When funny, kind and gorgeous Shane proposes, Cara is over the moon, and can't wait to share the news of their engagement with all their friends and family.Excitement, however, quickly turns to apprehension when it seems that everyone has a fixed idea of the perfect wedding and offers to 'help' with the planning. With tussles over the ceremony and the size of the guest list, sibling rivalry and insistent in-laws-to-be, Cara can see the vision she has of her big day being ripped to shreds.So she and Shane determine to make a stand and do things their way. But when they announce their plans for a beach wedding on a beautiful Caribbean island, there is uproar. Threats are made, family secrets are revealed, and things turn decidedly stormy.Will Cara and Shane manage to overcome all obstacles? Or will their dream wedding turn into a nightmare?    ",
    "aboutAuthor":"Melissa Hill lives with her husband Kevin, daughter Carrie, and dog Homer in Co. Dublin. Previous titles, including THE CHARM BRACELET, SOMETHING FROM TIFFANY'S, THE LAST TO KNOW, WISHFUL THINKING, BEFORE I FORGET and PLEASE FORGIVE ME have all been bestsellers, and her books have been translated into twenty-three different languages. For more information, visit her website at www.melissahill.info, like her Facebook page at www.facebook.com/melissahillbooks or follow her on Twitter at www.twitter.com/melissahillbks."
  
    },
    {
      "name":"Clementine Book One",
      "author":"Tillie Walden",
      "bookImage":"book51.jpg",
      "bookPrize":"$ 839.00",
      "orginalBookPrize":"$ 1,290.00",
      "publisher":"Image - Skybound ",
      "relesedDate":"22 June 2022  ",
      "bookStockDetails":"Available",
      "aboutbook":"“TILLIE WALDEN is the future. Her boldly authentic voice brings new heights to the world of The Walking Dead.” —ROBERT KIRKMAN“An exquisitely drawn story about how to survive trauma and find strength in ourselves and others.” —KELLY SUE DECONNICK.Powerhouse creator TILLIE WALDEN takes on the world of ROBERT KIRKMAN’s THE WALKING DEAD in the most anticipated YA graphic novel of 2022.The trilogy marks the graphic novel debut of Clementine, star of the massively successful Telltale Games video game.In Book One, Clementine discovers new allies, new rivals, and new love. But as the group tries to build a walker-free settlement in an abandoned ski resort, they soon discover that the biggest threat to their survival…is each other.",
      "aboutAuthor":"Discover more of the author’s books, see similar authors, read author blogs and more“Tillie Walden's bittersweet, character-driven zombie story about the travels of Clementine in the Walking Dead universe is introspective, haunting, and gorgeously drawn.” -KRISTEN GUDSNUK (Making Friends).“CLEMENTINE brings its own distinct voice, style, and sensibility to the Walking Dead universe, which is quite a feat on its own. On top of that, it's an exquisitely drawn story about how to survive trauma and find strength in ourselves and others.” -KELLY SUE DeCONNICK (Pretty Deadly, Captain Marvel)."
    
      },
      {
        "name":"Do It Today",
        "author":"Darius Foroux ",
        "bookImage":"book59_.webp",
        "bookPrize":"$ 98.00",
        "orginalBookPrize":"$ 199.00",
        "publisher":"Penguin ",
        "relesedDate":"  27 October 2020",
        "bookStockDetails":"Available",
        "aboutbook":"The International Bestseller: DO IT TODAYAre you also tired of putting off your dreams until tomorrow? Guess what! Tomorrow never comes. Am I right? I've procrastinated and putt off my desire to write a book for a decade. I always came up with excuses like, it's not the right time. Or, I need to do more research.But in 2015 I got tired of this endless procrastination, and finally took action. Six months later, my first book was published. Look, we all have limited time on our hands. And we're getting closer to death every single minute. That shouldn't scare. That should motivate you!Time is limited, that's why we must do the things we want: Today.In this best of collection, I've handpicked 30 of my best articles that help you to overcome procrastination, improve your productivity, and achieve all the things you always wanted. Plus, I've written an extensive introduction about my life and work philosophy. And I've made many improvements and edits to the articles. So the content of this book is different from the articles on my site.In Do It Today, you'll learn:1.Why we procrastinate and how we can overcome it2.How to increase your productivity without being stressful3.How to achieve more meaningful things in your life so you can enjoy it moreAre you ready to start reading this book? If so: Do it today-not tomorrow.",
        "aboutAuthor":"The International Bestseller: DO IT TODAYAre you also tired of putting off your dreams until tomorrow? Guess what! Tomorrow never comes. Am I right? I've procrastinated and putt off my desire to write a book for a decade. I always came up with excuses like, it's not the right time. Or, I need to do more research. But in 2015 I got tired of this endless procrastination, and finally took action. Six months later, my first book was published. Look, we all have limited time on our hands. And we're getting closer to death every single minute. That shouldn't scare. That should motivate you!Time is limited, that's why we must do the things we want: Today.In this best of collection, I've handpicked 30 of my best articles that help you to overcome procrastination, improve your productivity, and achieve all the things you always wanted. Plus, I've written an extensive introduction about my life and work philosophy. And I've made many improvements and edits to the articles. So the content of this book is different from the articles on my site.In Do It Today, you'll learn:1.Why we procrastinate and how we can overcome it2.How to increase your productivity without being stressful3.How to achieve more meaningful things in your life so you can enjoy it moreAre you ready to start reading this book? If so: Do it today-not tomorrow."
      
        },
        {
          "name":"Wise and Otherwise",
          "author":"Sudha Murty ",
          "bookImage":"book67.jpg",
          "bookPrize":"$ 185.00",
          "orginalBookPrize":"$ 230.00",
          "publisher":"Penguin India ",
          "relesedDate":" 18 July 2006 ",
          "bookStockDetails":"Available",
          "aboutbook":"Understanding human and human nature is one of the toughest jobs .Many time what seems right and good or vice versa can be completely different if explored to proper depth. In many instance, we all come across people and forms an opinion about the people we meet without actually knowing anything about them. But hearing and learning about such instances helps us to redefine our thought process and become wiser. Sudha Murtys book Wise and otherwise will take you to a journey across the length and breadth of India through narrations of 51 stories inspired by the extensive travels of the author herself. Wise and otherwise has generated interest not just as an inspirational book of peoples struggles and how they overcome it but also for its settings. It present a realistic picture of India with its values, traditions and imperfections and lay before the readers certain set of moral values whose validity they have to judge for themselves. It unravels human nature and shows all that is good and bad in it and how it is often shaped by intention and circumstances. From the story of a son who leaves his father in an old age home pretending he is a stranger to the story of earthquake aid being exploited and not reaching to victims, each story is a moving one and will generate myriads of emotions within the readers, ranging from anger to kindness to pity to the realisation of reality of the world. The book grabs the attention of the reader through its skilful narration of characters, setting and situations. The book is available online for convenient shopping. You can bag this book from A today by following a few easy steps. About the author Sudha Murty is a social activist and worker and also a prolific writer in Kannada and English. She is well known for her social work as the chairperson of Infosys Foundation. Through her writings, she tries to highlight the social issues prevalent in the society. 'Dollar Sose authored by her in Kannada is her most renowned work and beside that. ",
          "aboutAuthor":"About the author Sudha Murty is a social activist and worker and also a prolific writer in Kannada and English. She is well known for her social work as the chairperson of Infosys Foundation. Through her writings, she tries to highlight the social issues prevalent in the society. 'Dollar Sose authored by her in Kannada is her most renowned work and beside that. she has authored several other books like How I taught my grandmother to read, The Accolades Galore, House of Cards etc in English and Yashashvi, Tumula, Paridihi Computer Lokadalli in Kannada language. Sudha Murty has been decorated with several awards from prestigious institutions. She is the better half of N.R. Narayana Murthy."
        
          },
          {
            "name":"The Woman in the Window",
            "author":"A. J. Finn ",
            "bookImage":"book115.webp",
            "bookPrize":"$ 269.00",
            "orginalBookPrize":"$ 378.00",
            "publisher":"HarperCollins ",
            "relesedDate":" 30 January 2018 ",
            "bookStockDetails":"Available",
            "aboutbook":"Get ready for the biggest thriller of 2018.What did she see?Its been ten long months since Anna Fox last left her home. Ten months during which she has haunted the rooms of her old New York house like a ghost, lost in her memories, too terrified to step outside.Annas lifeline to the real world is her window, where she sits day after day, watching her neighbours. When the Russells move in, Anna is instantly drawn to them. A picture-perfect family of three, they are an echo of the life that was once hers.But one evening, a frenzied scream rips across the silence and Anna witnesses something no one was supposed to see. Now she must do everything she can to uncover the truth about what really happened. But even if she does, will anyone believe her? And can she even trust herself?",
            "aboutAuthor":"A. J. Finn has written for numerous publications, including the Los Angeles Times, the Washington Post and the Times Literary Supplement. Finn’s debut novel, the Woman in the Window, has been sold in thirty-eight territories worldwide and is in development as a major motion picture from Fox. A native of New York, Finn lived in England for ten years before returning to New York City."
          
            },
            {
              "name":"Loveless",
              "author":"Alice Oseman",
              "bookImage":"book204.jpg",
              "bookPrize":"$ 319.00",
              "orginalBookPrize":"$ 480.00",
              "publisher":" HarperCollinsChildren’sBooks",
              "relesedDate":" 9 July 2020 ",
              "bookStockDetails":"Available",
              "aboutbook":"WINNER OF THE YA BOOK PRIZE 2021The fourth novel from the phenomenally talented Alice Oseman, author of Solitaire and the graphic novel series Heartstopper – soon to be a major Netflix series.It was all sinking in. I’d never had a crush on anyone. No boys, no girls, not a single person I had ever met. What did that mean? Georgia has never been in love, never kissed anyone, never even had a crush –  but as a fanfic-obsessed romantic she’s sure she’ll find her person one day. As she starts university with her best friends, Pip and Jason, in a whole new town far from home, Georgia’s ready to find romance, and with her outgoing roommate on her side and a place in the Shakespeare Society, her ‘teenage dream’ is in sight. But when her romance plan wreaks havoc amongst her friends, Georgia ends up in her own comedy of errors, and she starts to question why love seems so easy for other people but not for her. With new terms thrown at her – asexual, aromantic –  Georgia is more uncertain about her feelings than ever. Is she destined to remain loveless? Or has she been looking for the wrong thing all along? This wise, warm and witty story of identity and self-acceptance sees Alice Oseman on towering form as Georgia and her friends discover that true love isn’t limited to romance.",
              "aboutAuthor":"Alice Oseman was born in 1994 in Kent, England. She completed a degree in English at Durham University in 2016 and is currently a full-time writer and illustrator. Alice can usually be found staring aimlessly at computer screens, questioning the meaninglessness of existence, or doing anything and everything to avoid getting an office job. Alice's first book, SOLITAIRE, was published when she was nineteen."
            
              },
              {
                "name":"Ashwatthama's Redemption",
                "author":" Gunjan Porwal ",
                "bookImage":"book124.jpg",
                "bookPrize":"$ 212.00",
                "orginalBookPrize":"$ 247.00",
                "publisher":" Om Books International",
                "relesedDate":" 15 September 2018 ",
                "bookStockDetails":"Available",
                "aboutbook":"Over a hundred years after the Mahabharata war, an ancient power threatens to destroy the new age of men, by establishing the age of terror of the asura, long believed to be extinct. The only hurdle in its path is Guru Dronacharya’s son, the mighty but accursed warrior ashwatthama, who lost all his powers following Lord Krishna curse, and who unwittingly finds himself drawn into the quest of the lost bow of Lord rama—the Kodandera as ghosts of the distant past return to haunt him, and the line between friends and enemies blurs, ashwatthama must fight his inner demons to emerge victorious. He undertakes a perilous journey—across the vast plains of the Ganges, to the snow-capped peaks of the himavant—where the price of failure is a fate worse than death, and death is a privilege not granted to ashwatthama. Is this all part of Lord Krishna great plan? Will ashwatthama be able to regain his lost glory?.",
                "aboutAuthor":"GUNJAN PORWAL, engineer by day, and writer by night, is fascinated by Indian mythology, especially the Mahabharata and Ramayana. After graduating from the Indian Institute of Technology, Kanpur in 2002, Gunjan worked in MNCs as an engineer while contemplating writing anything other than code. Gunjan lives in Pune with his wife, children, and parents. Ashwatthama’s Redemption: The Rise of Dandak is his debut novel."
              
                },

                {
                  "name":"Lonely Planet Cambodia 12 ",
                  "author":" Nick Ray ,Greg Bloom ,Mark Johanson ",
                  "bookImage":"book50.jpg",
                  "bookPrize":"$ 1,379.00",
                  "orginalBookPrize":"$ 1,590.00",
                  "publisher":" Lonely Planet",
                  "relesedDate":"15 February 2022  ",
                  "bookStockDetails":"Available",
                  "aboutbook":"Lonely Planet's Cambodiais your passport to the most relevant, up-to-date advice on what to see and skip, and what hidden discoveries await you. Explore Khmer history at the National Museum of Cambodia, marvel at the Cambodian Circus, and explore majestic temples in Angkor; all with your trusted travel companion. Begin your journey now!",
                  "aboutAuthor":"About Lonely Planet: Lonely Planet is a leading travel media company, providing both inspiring and trustworthy information for every kind of traveller since 1973. Over the past four decades, we've printed over 145 million guidebooks and phrasebooks for 120 languages, and grown a dedicated, passionate global community of travellers. You'll also find our content online, and in mobile apps, videos, 14 languages, armchair and lifestyle books, ebooks, and more, enabling you to explore every day. "
                
                  },
                  {
                    "name":"The Last Ronin",
                    "author":" Kevin Eastman, Peter Laird ",
                    "bookImage":"book56.jpg",
                    "bookPrize":"$ 2,034.00",
                    "orginalBookPrize":"$ 2,670.00",
                    "publisher":" Idea & Design Works",
                    "relesedDate":" 5 July 2022 ",
                    "bookStockDetails":"Available",
                    "aboutbook":"A New York Times Bestseller! Who is the Last Ronin? In a future, battle-ravaged New York City, a lone surviving Turtle embarks on a seemingly hopeless mission seeking justice for the family he lost. From legendary TMNT co-creators Kevin Eastman and Peter Laird, get ready for the final story of the Teenage Mutant Ninja Turtles three decades in the making!.What terrible events destroyed his family and left New York a crumbling, post-apocalyptic nightmare? All will be revealed in this climactic Turtle tale that sees longtime friends becoming enemies and new allies emerging in the most unexpected places. Can the surviving Turtle triumph?Eastman and Laird are joined by writer Tom Waltz, who penned the first 100 issues of IDW's ongoing TMNT series, and artists Esau & Isaac Escorza (Heavy Metal) and Ben Bishop (The Far Side of the Moon) with an Introduction by filmmaker Robert Rodriguez!Collects the complete five-issue miniseries in a new graphic novel, an adventure as fulfilling for longtime Turtles fans as it is accessible for readers just discovering the heroes in a half shell.",
                    "aboutAuthor":"Kevin Eastman - Born in 1962 in Portland, Maine, Kevin began drawing as soon as he was able to hold a crayon. His discovery of comic books gave meaning to his crazed doodling. When Kevin discovered and studied the work of Jack Kirby, Russ Heath, Richard Corben, Vaughn Bode and John Severin, he began to hone his craft. His first published work appeared in 1980, a year or so before he met Peter Laird. In May 1984, he and Laird published Teenage Mutant Ninja Turtles #1, creating the hit heroes in a half-shell.Peter Laird is an American comic book writer and artist. He is best known for co-creating the Teenage Mutant Ninja Turtles with writer and artist Kevin Eastman.Tom Waltzis a former active duty U.S. Marine, Desert Storm vet, and former California National Guard Military Policeman. He is an editor for IDW Publishing and the writer of critically-acclaimed comics and graphic novels, including Teenage Mutant Ninja Turtles; The Last Fall; Finding Peace (with Nathan St John); the Silent Hill books Sinner's Reward, Past Life, and Anne's Story; and others. He has also written for video games, including Silent Hill: Downpour, Ghostbusters: Sanctum of Slime, and the TMNT games Brothers Unite and Mutants in Manhattan. He lives in San Diego with his wife and two children.                    "
                  
                    },
                    {
                      "name":"A Tale of Two Cities",
                      "author":" Charles Dickens",
                      "bookImage":"book120.jpg",
                      "bookPrize":"$ 219.00",
                      "orginalBookPrize":"$ 395.00",
                      "publisher":"Namaskar Books ",
                      "relesedDate":" 13 September 2021 ",
                      "bookStockDetails":"Available",
                      "aboutbook":"A Tale of Two Cities is an 1859 historical novel by Charles Dickens, set in London and Paris before and during the French Revolution. The novel tells the story of the French Doctor Manette, his 18-year-long imprisonment in the Bastille in Paris and his release to live in London with his daughter Lucie, whom he had never met. The story is set against the conditions that led up to the French Revolution and the Reign of Terror. Dickens' best-known work of historical fiction, A Tale of Two Cities is claimed to be one of the best-selling novels of all time. In 2003, the novel was ranked 63rd on the BBC's The Big Read poll.The novel has been adapted for film, television, radio, and the stage, and has continued to have an influence on popular culture.",
                      "aboutAuthor":"Charles John Huffam Dickens ( 7 February 1812 – 9 June 1870) was an English writer and social critic. He created some of the world's best-known fictional characters and is regarded by many as the greatest novelist of the Victorian era. His works enjoyed unprecedented popularity during his lifetime and, by the 20th century, critics and scholars had recognised him as a literary genius. His novels and short stories are widely read today. Dickens's literary success began with the 1836 serial publication of The Pickwick Papers. Within a few years he had become an international literary celebrity, famous for his humour, satire and keen observation of character and society. His novels, most of them published in monthly or weekly instalments, pioneered the serial publication of narrative fiction, which became the dominant Victorian mode for novel publication. However, Oscar Wilde, Henry James and Virginia Woolf complained of a lack of psychological depth, loose writing and a vein of sentimentalism. The term Dickensian is used to describe something that is reminiscent of Dickens and his writings, such as poor social or working conditions, or comically repulsive characters. "
                    
                      },
                      {
                        "name":"Will",
                        "author":"Will Smith , Mark Manson",
                        "bookImage":"book117.webp",
                        "bookPrize":"$ 300.00",
                        "orginalBookPrize":"$ 790.00",
                        "publisher":"Century ",
                        "relesedDate":" 9 November 2021 ",
                        "bookStockDetails":"Available",
                        "aboutbook":"The Instant Sunday Times BestsellerThe Instant #1 New York Times BestsellerPRAISE FOR WILL'The best memoir I ever read' Oprah Winfrey'If you read one book this year, make it this one' Jay Shetty'Incredible' Idris Elba'The book is awesome. So candid and considered...fascinating' Chris Evans'A triumph...really inspiring, so well written, vulnerable and deep. I highly recommend it' Mindy Kaling'It's fantastic...very moving' Zoe Ball'Incredibly honest...inspiring' Greg James'A wild ride' New York Times'Raw, comedic, inspirational' GQOne of the most dynamic and globally recognized entertainment forces of our time opens up fully about his life, in a brave and inspiring book that traces his learning curve to a place where outer success, inner happiness, and human connection are aligned. Along the way, Will tells the story in full of one of the most amazing rides through the worlds of music and film that anyone has ever had.Will Smith's transformation from a fearful child in a tense West Philadelphia home to one of the biggest rap stars of his era and then one of the biggest movie stars in Hollywood history, with a string of box office successes that will likely never be broken, is an epic tale of inner transformation and outer triumph, and Will tells it astonishingly well. But it's only half the story.Will Smith thought, with good reason, that he had won at life: not only was his own success unparalleled, his whole family was at the pinnacle of the entertainment world. Only they didn't see it that way: they felt more like star performers in his circus, a seven-days-a-week job they hadn't signed up for. It turned out Will Smith's education wasn't nearly over.This memoir is the product of a profound journey of self-knowledge, a reckoning with all that your will can get you and all that it can leave behind. Written with the help of Mark Manson, author of the multi-million-copy bestseller The Subtle Art of Not Giving a F*ck, Will is the story of how one exceptional man mastered his own emotions, written in a way that can help everyone else do the same. Few of us will know the pressure of performing on the world's biggest stages for the highest of stakes, but we can all understand that the fuel that works for one stage of our journey might have to be changed if we want to make it all the way home. The combination of genuine wisdom of universal value and a life story that is preposterously entertaining, even astonishing, puts Will the book, like its author, in a category by itself.'Bracingly honest, vivid and compelling ... how an average talent became the biggest movie star in the world' The Times'The Hollywood star's autobiography is full of indiscretions, drug-fuelled escapades and terrible parenting. Who could ask for more?' Telegraph'It's not every day a Hollywood A-lister like Will Smith writes his life story - and there are certainly some eye-popping revelations' Sun'Candid ... digs into the life events which fine-tuned Smith's weapons-grade charisma and steely determination' Observer'I absolutely loved it...no holds barred...I felt as if Will Smith was talking to me. It's a testament to him and to his family' Lorraine Kelly",
                        "aboutAuthor":"Will Smith is an actor, producer and musician, two-time Academy Award nominee, Grammy Award and NAACP award winner who has enjoyed a diverse career encompassing films, television and multi-platinum records.Starting as a rapper in 1985, Smith is best known for his acting roles in The Fresh Prince of Bel-Air, I AM LEGEND, the BAD BOYS and MEN IN BLACK film series, HITCH and most recently, ALADDIN. His vast filmography also includes transformative portrayals of true-life icons in ALI and THE PURSUIT OF HAPPYNESS, both which garnered him Academy Award nominations, as well as his role in CONCUSSION. Smith recently produced and starred in 2020's biggest box office hit, BAD BOYS FOR LIFE, in addition to producing and appearing in HBO Max's emotional and most watched, The Fresh Prince of Bel-Air 30th Anniversary Reunion special.Next up, Smith will produce and star as Richard Williams, infamous father of American icons Venus and Serena Williams, in Warner Brothers' KING RICHARD, which will release on November 19th. This summer, Smith begins production on Apple's upcoming scripted action thriller EMANCIPATION, directed by Antoine Fuqua, and produced by his Westbrook Studios.In 2019, Smith launched his media company, Westbrook Inc. alongside Jada Pinkett Smith, Miguel Melendez and Kosaku Yada, which focuses on empowering artists to tell stories that connect with a global audience. Westbrook houses Westbrook Studios, Westbrook Media, the digital content studio, social media management, and creative brand incubator, and direct to consumer business, Good Goods. Westbrook Studios is home to the Emmy® nominated Facebook Watch series, Red Table Talk and is rapidly expanding its footprint in entertainment, serving as the studio home to all new premium TV and motion picture projects. Smith will serve as a producer through Westbrook on his upcoming projects including KING RICHARD, EMANCIPATION, and PLANES, TRAINS & AUTOMOBILES. Westbrook Media most recently produced KING RICHARD and EMANCIPATION. Additionally, they produced the 30th anniversary reunion special of The Fresh Prince of Bel-Air and the Snap series Will From Home. In response to the stay-at-home order Will From Home featured appearances by Smith's family, celebrity friends and everyday people who were also isolating indoors. The media company also recently announced Peacock's unprecedented two season order of Bel-Air,a dramatic reimagining of the Fresh Prince series. He and his wife also founded the Will and Jada Smith Family Foundation to benefit inner-city community development, youth educational projects and under-privileged children and their families.Mark Manson is the #1 New York Times bestselling author of Everything is F*cked: A Book About Hope and The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life, the mega-bestseller that reached #1 in fourteen different countries. Mark's books have been translated into more than 50 languages and have sold over 12 million copies worldwide.Mark runs one of the largest personal growth websites in the world, MarkManson.net, a blog with more than two million monthly readers and half a million subscribers. His writing is often described as 'self-help for people who hate self-help' -- a no-BS brand of life advice and cultural commentary that has struck a chord with people around the globe. His writing has appeared in The New York Times, Wall Street Journal, TIME Magazine, Forbes, Vice, CNN, and Vox, among many others. He currently lives in New York City. "
                      
                        },
                        {
                          "name":"The Coercion",
                          "author":" Ishan Majumdar",
                          "bookImage":"book205.webp",
                          "bookPrize":"$ 450.00",
                          "orginalBookPrize":"$ 57-.00",
                          "publisher":"White Falcon Publishing ",
                          "relesedDate":" 11 January 2020",
                          "bookStockDetails":"Available",
                          "aboutbook":"Experience the story of Amaan Sayyed, coming out of retirement after the events of 'The Celeritas Files', and returning to the world of corporate intelligence while becoming a key player in, what could be termed as the ugliest corporate war in Indian history ... only this time, he faces a powerful adversary who would stop at nothing to bring him down.A tale of treachery and deceit ... where the darkness of monetary greed engulfs every bit of the human soul ... where the sound of the conscience is muffled by the desire for professional success .. ",
                          "aboutAuthor":"Ishan is a qualified Chartered Accountant and holds a Master's degree in Management from HEC Paris (Grande Ecole). Born and brought up in the suburbs of Mumbai, Ishan went on to complete his graduation from Narsee Monjee College of Commerce and Economics and moved to Europe for further studies. He has a rich corporate exposure, having worked in investment banking and strategy roles in multinational companies such as BNP Paribas, Credit Agricole and Danone. Ishan is fluent in six languages including French and Spanish, as a large part of his working life was spent in France and Spain . He currently works witha venture capital fund based in New Delhi, India."
                        
                          },
                          {
                            "name":"A Book Of Simple Living ",
                            "author":" Ruskin Bond ",
                            "bookImage":"book119.jpg",
                            "bookPrize":"$ 270.00",
                            "orginalBookPrize":"$ 399.00",
                            "publisher":"Speaking Tiger Books LLP ",
                            "relesedDate":" 10 February 2015 ",
                            "bookStockDetails":"Available",
                            "aboutbook":"Reading books is a kind of enjoyment. Reading books is a good habit. We bring you a different kinds of books. You can carry this book where ever you want. It is easy to carry. It can be an ideal gift to yourself and to your loved ones. Care instruction keep away from fire.",
                            "aboutAuthor":"Ruskin Bond was born in Kasauli in 1934. He grew up in Jamnagar, Dehradun and Shimla, worked briefly in Jersey, London and Delhi, and moved to Mussoorie in the early 1960s to write full time. He has lived in Mussoorie ever since, alone at first, and for many years now, with his adopted family.Ruskin Bond has written novels, memoirs, short story collections and books of essays and poetry. His books include the popular classics Room on the Roof (winner of the John Llewellyn Rhys Prize), A Flight of Pigeons, The Blue Umbrella, Time Stops at Shamli, Night Train at Deoli, Our Trees Still Grow in Dehra (winner of the Sahitya Akademi Award) and Rain in the Mountains. He was awarded the Padma Shri by the Government of India in 1999 and the Padma Bhushan in 2014 "
                          
                            },
                            {
                              "name":"A Long Petal Of The Sea",
                              "author":" Isabel Allende ",
                              "bookImage":"book121.jpg",
                              "bookPrize":"$ 499.00",
                              "orginalBookPrize":"$ 584.00",
                              "publisher":"Bloomsbury Publishing ",
                              "relesedDate":" 30 January 2020 ",
                              "bookStockDetails":"Available",
                              "aboutbook":"Victor Dalmau is a young doctor when he is caught up in the Spanish Civil War, a tragedy that leaves his life - and the fate of his country - forever changed. Together with his sister-in-law, the pianist Roser Bruguera, he is forced out of his beloved Barcelona and into exile.When opportunity to seek refuge in Chile arises, they take it, boarding a ship chartered by the poet Pablo Neruda to the promised 'long petal of sea and wine and snow' over the seas. There, they find themselves enmeshed in a rich web of characters who come together in love and tragedy over the course of four generations, destined to witness the battle between freedom and repression as it plays out across the world.A masterful work of historical fiction about hope, exile and belonging, A Long Petal of the Sea is Isabel Allende at the height of her powers.",
                              "aboutAuthor":"Born in Peru and raised in Chile, Isabel Allende is the author of The House of the Spirits, Daughter of Fortune, Paula, My Invented Country and The Japanese Lover. Her books have been translated into more than 35 languages and have sold over 65 million copies worldwide. The Japanese Lover was an international and New York Times bestseller. She lives in California."
                            
                              },
                              {
                                "name":"A Half-Baked Love Story ",
                                "author":"Anurag Garg",
                                "bookImage":"book75.jpg",
                                "bookPrize":"$ 158.00",
                                "orginalBookPrize":"$ 175.00",
                                "publisher":"Penguin ",
                                "relesedDate":"20 April 2016",
                                "bookStockDetails":"Available",
                                "aboutbook":"Have you ever Fallen in love at first sight? Gone to your first date with an empty wallet? Been caught kissing your girl by her father? Risked missing your IIT exam to meet her for the last time? Aarav has. Aarav is a rich brat who sleeps with every girl he is even mildly attracted to. He transforms from a shy teenager to an inconsiderate adult until an important realization hits him. Discover the pangs of his roller-coaster life as he reveals his deepest secrets. Now a national bestseller, A Half-baked Love Story is the story of two very different individuals as they come to terms with the pangs and pleasures of first love while battling the situations that life has placed them in. Let the characters guide you through this beautiful tale of love, loss and longing. ",
                                "aboutAuthor":"Anurag Garg is an engineering graduate from BVCOE, New Delhi. Random thoughts, eligible to be put together in the form of a story, dragged him to his destiny, and he finally found his forte in writing. He finds himself close to nature and believes in creating circles of love and service around him. He lives in New Delhi and works in the IT industry.Gunjan Narang, an aspiring educationist, was born in Delhi. She embraces reading and writing as her escape from the real world as well as a window to it. She wishes to explore the unexplored places of the world and write about the fast-evaporating everyday life of people. "
                              
                                },
                                {
                                  "name":"M.T.Yude Kathakal",
                                  "author":"M.T.VASUDEVAN NAIR ",
                                  "bookImage":"book207.jpg",
                                  "bookPrize":"$ 424.00",
                                  "orginalBookPrize":"$ 570.00",
                                  "publisher":" DC BOOKS",
                                  "relesedDate":"  1 August 2019 ",
                                  "bookStockDetails":"Available",
                                  "aboutbook":"Madath Thekkepaattu Vasudevan Nair, popularly known as MT, is an Indian author, screenplay writer and film director. He is a prolific and versatile writer in modern Malayalam literature, and is one of the masters of post-Independence Indian literature.",
                                  "aboutAuthor":"Madath Thekkepaattu Vasudevan Nair, popularly known as MT, is an Indian author, screenplay writer and film director. He is a prolific and versatile writer in modern Malayalam literature, and is one of the masters of post-Independence Indian literature."
                                
                                  },
                                  {
                                    "name":"Better Than Best Friends",
                                    "author":" Ahona Sadhu",
                                    "bookImage":"book208.webp",
                                    "bookPrize":"$ 168.00",
                                    "orginalBookPrize":"$ 250.00",
                                    "publisher":" 2 February 2020",
                                    "relesedDate":"  2 February 2020 ",
                                    "bookStockDetails":"Available",
                                    "aboutbook":", Code Version: She's got a strict rule against dating. But her best friend may be the one exception. Will one kiss turn them into high school sweethearts? Sixteen-year-old Regan Stone can't wait to leave her crummy small town.I was so excited when I ordered it. Ignored all the current reads and just grabbed it, a fast read because there was no long plot like others, honestly the best for an anxious person who has to skip pages to see the plot. I would say bit unrealistic for a person living in a small town but idk about the city.he book was totally awesome and I like it so much I will recommend you all if you are a beginner of reading books then you should read this book because it have everything like romance, action, chill, suspense and everything. I am not fond of reading books but recently I rise my interest in reading book so I prefer this book and it really really create my interest in reading books",
                                    "aboutAuthor":"Ahona SadhuCode Version: She's got a strict rule against dating. But her best friend may be the one exception. Will one kiss turn them into high school sweethearts? Sixteen-year-old Regan Stone can't wait to leave her crummy small town"
                                  
                                    },
  ]
}
