import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  getNewArrivals( showOnlyTopSelling: boolean) {
    if (showOnlyTopSelling) {
      return this.books.filter(b => b.isNewArrivals == true).filter(b => b.isTopSelling == true);
    }
    else {
      return this.books.filter(b => b.isNewArrivals == true);
    }
  }
  getFavorite(showOnlyTopSelling: boolean) {
    if (showOnlyTopSelling) {
      return this.books.filter(b => b.isFavorite == true).filter(b => b.isTopSelling == true);
    }
    else {
      return this.books.filter(b => b.isFavorite == true);
    }
  }

  getBooksByCategory(category: string, showOnlyTopSelling: boolean) {
    if (showOnlyTopSelling) {
      return this.books.filter(b => b.categories.includes(category)).filter(b => b.isTopSelling == true);
    }
    else {
      return this.books.filter(b => b.categories.includes(category));
    }
  }


  books: Array<any> = [
    {
      "name": "The Value of a Whale",
      "isNewArrival": true,
      "isTopSelling": true,
      "categories": ["classic"],
      "author": "Adrienne Buller ",
      "bookImage": "book41.jpg",
      "bookPrize": "$ 321.00",
      "orginalBookPrize": "$ 389.00",
      "publisher": "Manchester University Press  ",
      "relesedDate": "  19 July 2022 ",
      "bookStockDetails": "Available",
      "aboutbook": "Public understanding of, and outcry over, the dire state of the climate and environment is greater than ever before. Parties across the political spectrum claim to be climate leaders, and overt denial is on the way out. Yet when it comes to slowing the course of the climate and nature crises, despite a growing number of pledges, policies and summits, little ever seems to change. Nature is being destroyed at an unprecedented rate. We remain on course for a catastrophic 3°C of warming. What's holding us back?In this searing and insightful critique, Adrienne Buller examines the fatal biases that have shaped the response of our governing institutions to climate and environmental breakdown, and asks: are the ‘solutions’ being proposed really solutions? Tracing the intricate connections between financial power, economic injustice and ecological crisis, she exposes the myopic economism and market-centric thinking presently undermining a future where all life can flourish. The book examines what is wrong with mainstream climate and environmental governance, from carbon pricing and offset markets to 'green growth', the commodification of nature and the growing influence of the finance industry on environmental policy. In doing so, it exposes the self-defeating logic of a response to these challenges based on creating new opportunities for profit, and a refusal to grapple with the inequalities and injustices that have created them. Both honest and optimistic, The Value of a Whale asks us ― in the face of crisis ― what we really value.",
      "aboutAuthor": "Adrienne Buller is a Senior Fellow at Common Wealth, a progressive think tank focused on building a democratic economy. Her research and writing have featured in The Guardian, The Financial Times, Bloomberg, and The New Statesman, among others. She is the co-author of Owning the Future (Verso, 2022).",

    },
    {
      "name": "Dharma",
      "isNewArrival": true,
      "isTopSelling": true,
      "categories": ["classic"],
      "author": "Amish and Bhavna Dive",
      "bookImage": "book3.jpg",
      "bookPrize": "$ 359.72",
      "orginalBookPrize": "$ 499.00",
      "publisher": " Westland ",
      "relesedDate": " 28 December 2020",
      "bookStockDetails": "Out Of Stock",
      "aboutbook": " The spiritual self-help book is co-authored by Amish and his sister Bhavna Roy. In 'Dharma: Decoding the Epics for a Meaningful Life', as the title suggests, Amish and Bhavna Roy discuss the intriguing concepts of Dharma, Karma, the meaning of life and how it can help one achieve the most in life.Stories can be both entertaining and educative. They can also be insightful and illuminating, especially when they have travelled down the generations, through the centuries, taking on and eliding new meanings with each retelling. In this genre-bending book, the first of a series, Amish and Bhavna dive into the priceless treasure trove of the ancient Indian epics, as well as the vast and complex universe of Amish’s Meluha (through his Shiva Trilogy and Ram Chandra Series), to explore some of the key concepts of Indian philosophy. ",
      "aboutAuthor": " AMISH is a 1974-born IIM (Kolkata)-educated, boring banker turned happy author. The success of his debut book, The Immortals of Meluha (Book 1 of the Shiva Trilogy), encouraged him to give up a fourteen-year-old career in financial services to focus on writing. He is passionate about history, mythology and philosophy, finding beauty and meaning in all world religions. Amish's books have sold more than 5.5 million copies and have been translated into over 19 languages. BHAVNA ROY was educated in Mussoorie, Pune and Mumbai. After graduating in psychology from Mumbai University, she worked first as a volunteer in a school for special children in Malegaon, and later in an NGO in Nashik called SOS. She is the wife of the late Himanshu Roy IPS, senior police officer of the Maharashtra cadre. She lives in Mumbai."
    },
    {
      "name": " The Alchemist",
      "isNewArrival": true,
      "isTopSelling": true,
      "categories": ["classic"],
      "author": "Paulo Coelho ",
      "bookImage": "book7.webp",
      "bookPrize": "$ 140.07",
      "orginalBookPrize": "$ 249.12",
      "publisher": "HarperTorch (English translation) ",
      "relesedDate": "1988  ",
      "bookStockDetails": "Available",
      "aboutbook": " Combining magic, mysticism, wisdom, and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations.Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago's journey teaches us about the essential wisdom of listening to our hearts, recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, following our dreams.",
      "aboutAuthor": " The Brazilian author PAULO COELHO was born in 1947 in the city of Rio de Janeiro. Before dedicating his life completely to literature, he worked as theatre director and actor, lyricist and journalist.The Alchemist is a novel by Brazilian author Paulo Coelho which was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller  "

    },
    {
      "name": "RAM Scion of Ikshvaku",
      "isNewArrival": true,
      "isTopSelling": true,
      "categories": ["classic"],
      "author": " Amish Tripathi",
      "bookImage": "book4.jpg",
      "bookPrize": "$ 201",
      "orginalBookPrize": "$388.00",
      "publisher": "Westland Press ",
      "relesedDate": " 22 June 2015",
      "bookStockDetails": "Available",
      "aboutbook": "Scion of Ikshvaku (also known as Ram: Scion of Ikshvaku) is a one to one replica of the events taking place before the epic tale 'Ramayana' and also the fourth book of Amish Tripathi, fourth book of Amishverse, and first book of Ram Chandra Series. It was released on 22 June 2015. It is based on Ram, the legendary Indian king regarded as an incarnation of Vishnu. The title was revealed by the author at the Jaipur Literature Festival. The story begins with King Dashrath of Ayodhya being defeated in a war by Lankan trader Raavan, and the birth of his son Ram. It follows through Ram's childhood and tutelage, along with the politics surrounding his ascension to the throne, and ultimately his 14-year exile, accompanied by wife Sita and brother Lakshman. ",
      "aboutAuthor": "Amish is a 1974-born, IIM (Kolkata)-educated banker-turned-author. The success of his debut book, The Immortals of Meluha (Book 1 of the Shiva Trilogy), encouraged him to give up his career in financial services to focus on writing. Besides being an author, he is also an Indian-government diplomat, a host for TV documentaries, and a film producer. Amish is passionate about history, mythology and philosophy, finding beauty and meaning in all world religions. His books have sold more than 6 million copies and have been translated into over 20 languages. His Shiva Trilogy is the fastest selling and his Ram Chandra Series the second fastest selling book series in Indian publishing history   "

    },
    {
      "name": "A Court of Thorns and Roses",
      "isNewArrival": true,
      "isTopSelling": true,
      "categories": ["love stories"],
      "author": "Sarah J. Maas",
      "bookImage": "book8.jpg",
      "bookPrize": "$ 386",
      "orginalBookPrize": "$ 417.02",
      "publisher": "Bloomsbury Publishing ",
      "relesedDate": " 5 May 2015 ",
      "bookStockDetails": "Available",
      "aboutbook": "Feyre's survival rests upon her ability to hunt and kill – the forest where she lives is a cold, bleak place in the long winter months. So when she spots a deer in the forest being pursued by a wolf, she cannot resist fighting it for the flesh. But to do so, she must kill the predator and killing something so precious comes at a price..Dragged to a magical kingdom for the murder of a faerie, Feyre discovers that her captor, his face obscured by a jewelled mask, is hiding far more than his piercing green eyes would suggest. Feyre's presence at the court is closely guarded, and as she begins to learn why, her feelings for him turn from hostility to passion and the faerie lands become an even more dangerous place. Feyre must fight to break an ancient curse, or she will lose him forever. ",
      "aboutAuthor": "Sarah J. Maas is the #1 New York Times and internationally bestselling author of the Crescent City, A Court of Thorns and Roses, and the Throne of Glass series. Her books have sold more than twelve million copies and are published in thirty-seven languages.Sarah Janet Maas is an American fantasy author known for her fantasy series Throne of Glass and A Court of Thorns and Roses. As of 2021, she has sold over twelve million copies of her books and her work has been translated into 37 languages "

    },
    {
      "name": "Fairy Tale",
      "isNewArrival": true,
      "isTopSelling": true,
      "categories": ["non fiction"],
      "author": " Stephen King",
      "bookImage": "book11.jpg",
      "bookPrize": "$ 387.00",
      "orginalBookPrize": "$ 402.03",
      "publisher": " Scribner ",
      "relesedDate": " 6 September 2022",
      "bookStockDetails": "Available",
      "aboutbook": "Fairy Tale is a dark fantasy novel by American author Stephen King, published on September 6, 2022 by Scribner. The novel follows Charlie Reade, a 17-year-old who inherits keys to a hidden, otherworldly realm, and finds himself leading the battle between forces of good and evil.Legendary storyteller Stephen King goes deep into the well of his imagination in this spellbinding novel about a seventeen-year-old boy who inherits the keys to a parallel world where good and evil are at war, and the stakes could not be higher—for their world or ours.A story as old as myth, and as startling and iconic as the rest of King’s work, Fairy Tale is about an ordinary guy forced into the hero’s role by circumstance, and it is both spectacularly suspenseful and satisfying.  ",
      "aboutAuthor": "Stephen Edwin King (born September 21, 1947) is an American author of horror, supernatural fiction, suspense, crime, science-fiction, and fantasy novels. Described as the King of Horror, a play on his surname and a reference to his high standing in pop culture,[2] his books have sold more than 350 million copies,[3] and many have been adapted into films, television series, miniseries, and comic books. King has published 64 novels, including seven under the pen name Richard Bachman, and five non-fiction books.[4] He has also written approximately 200 short stories, most of which have been published in book collections"

    },
    // ...........................................................

    {
      "name": "Paths of Fear",
      "isNewArrival": false,
      "isTopSelling": true,
      "categories": ["fiction"],
      "author": " Mrs Connie Kerbs ",
      "bookImage": "book26.jpg",
      "bookPrize": "$ 976.00",
      "orginalBookPrize": "$ 999.00",
      "publisher": "F.I.N.E. Reads Press  ",
      "relesedDate": "  01 Oct 2016  ",
      "bookStockDetails": "Available",
      "aboutbook": "Paths of Fear is a unique anthology which explores that universal and misunderstood experience we call fear. This enjoyable read is part psychological, part informational, and all inspirational. It is largely personal narrative with a sprinkling of poetry and all entertainment. Paths of Fear explores a broad range of fears from that which manifests in screams of sheer terror, to that immobilizing, fear-ridden freeze we all understand. This survey sheds light on that deep, dark discouragement that reminds us of how we might fall short or fail. It exposes furtive beliefs sometimes rooted in us that we, aren't enough; a destructive idea cultivated in toxic environments which erode us from the inside out. Thought-provoking narratives highlight the many faces of fear with the sensitivity and insight of real experience. A wide variety of real-life examples are offered up on how others have dealt with fearful things and fearful places in life. Some of these circumstances have called for a long endurance, with dignity and grace; others required a special kind of strength and defiance. All are examples of facing fear, on one's own terms, inspiring in their own right. This part psychological survey, part self-help, and part spiritual essay spotlights the true antidote to fear - love, of one kind or another. Secularly accessible, but decidedly faith-based, Paths of Fear de-masks the monsters of circumstance and sheds light on some of the darker recesses of life experience. It is a pleasing, poignant reveal of courage, faith, and modern knowledge balanced with age-old wisdom. Paths of Fear encourages us to rely on our best, healthy sense of true self, and a heartfelt love for others. It's a collection to inspire readers down paths of faith and hope and to encourage anyone through trials of fear they must overcome.",
      "aboutAuthor": "About the Author: Indeed... On being blessed with early spiritual experiences: these would be as a conduit between myself and a renewable fountain of faith which has utterly saved me time and again. Indeed, this source of amazing grace ever rescues, revives, and rejuvenates still my soul. On having a grandmother whose upstairs library I perused: it was here I met first the Caldecott and Newbery classics, enduring poets, composers, story-telling icons and literary giants. Indeed, I was irrevocably impressed. On having an antique, script, manual type-writer tossed my way: it defined my tender years. Indeed, it nurtured my budding muse. On being married to my childhood sweetheart for 30(plus) years: I am in awe of our incredible journey together. We have been honed and humbled even as we've been bathed in bliss. I am grateful he has been my faithful, capable - and especially good-humored companion all this time. My admiration and love for him are indescribable. Indeed, words fail to convey such a divine devotion. On being adoptive-foster parents for nearly a quarter of a century: this means bevies of babies and bus-loads of youth of all ages and stages have graced our home, profoundly altering us. With 13 adopted, and three procured the old-fashioned way, indeed, I love and appreciate beyond expression, being honed and owned all this time by these precious people. On all the above and more, my family, dear friends, Walk of Faith, and my writing journey: these have indeed, all made for the savoriest of lives and the ultimate, beautiful mess. It is to my great delight that such a crazy-wonderful menagerie has somehow chosen me! On writing: Indeed, is there anything better than ever growing, changing, and becoming? Is there anything better than that release of tremors that have rumbled inside for eons, as they built up a force to be reckoned with? When they finally find their focus to surge into a tsunami of positive energy that ripples out into the world - to leave its mark. To leave it just a little better place than they might have found it? Indeed. It is not that I found writing. For some-how, some-why, it found and claimed me. It's not even that I am a writer, per say. I am just a vessel in which a small but powerful portion of that endless stream, that fountain of renewable vigor - pours a bit of itself in me for a time. ",

    },
    {
      "name": "Kafka On The Shore",
      "isNewArrival": false,
      "isTopSelling": true,
      "categories": ["fiction"],
      "author": " Haruki Murakami",
      "bookImage": "book27.jpg",
      "bookPrize": "$ 419.00",
      "orginalBookPrize": "$ 599.00",
      "publisher": "  Vintage Publishing ",
      "relesedDate": " 03 Oct 2005  ",
      "bookStockDetails": "Available",
      "aboutbook": "Alternate cover edition here . Kafka on the Shore , a tour de force of metaphysical reality, is powered by two remarkable characters: a teenage boy, Kafka Tamura, who runs away from home either to escape a gruesome oedipal prophecy or to search for his long-missing mother and sister; and an aging simpleton called Nakata, who never recovered from a wartime affliction and now i Alternate cover edition here . Kafka on the Shore , a tour de force of metaphysical reality, is powered by two remarkable characters: a teenage boy, Kafka Tamura, who runs away from home either to escape a gruesome oedipal prophecy or to search for his long-missing mother and sister; and an aging simpleton called Nakata, who never recovered from a wartime affliction and now is drawn toward Kafka for reasons that, like the most basic activities of daily life, he cannot fathom. Their odyssey, as mysterious to them as it is to us, is enriched throughout by vivid accomplices and mesmerizing events. Cats and people carry on conversations, a ghostlike pimp employs a Hegel-quoting prostitute, a forest harbors soldiers apparently unaged since World War II, and rainstorms of fish (and worse) fall from the sky. There is a brutal murder, with the identity of both victim and perpetrator a riddleyet this, along with everything else, is eventually answered, just as the entwined destinies of Kafka and Nakata are gradually revealed, with one escaping his fate entirely and the other given a fresh start on his own.",
      "aboutAuthor": "Haruki Murakami was born in Kyoto, Japan, in 1949. He grew up in Kobe and then moved to Tokyo, where he attended Waseda University. After college, Murakami opened a small jazz bar, which he and his wife ran for seven years.In 1978 Murakami was in the bleachers of Jingu Stadium watching a baseball game between the Yakult Swallows and the Hiroshima Carp when Dave Hilton, an American, came to bat. According to an oft-repeated story, in the instant that he hit a double, Murakami suddenly realized that he could write a novel. He went home and began writing that night.His first novel, Hear the Wind Sing, won the Gunzou Literature Prize for budding writers in 1979. He followed this success with two sequels, Pinball, 1973 and A Wild Sheep Chase, which all together form “The Trilogy of the Rat.” ",

    },
    {
      "name": "Wish I Could Tell You",
      "isNewArrival": false,
      "isTopSelling": true,
      "categories": ["fiction"],
      "author": "Durjoy Datta ",
      "bookImage": "book77.jpg",
      "bookPrize": "$ 176.00",
      "orginalBookPrize": "$ 199.00",
      "publisher": " Penguin Metro Reads ",
      "relesedDate": " 4 October 2019  ",
      "bookStockDetails": "Available",
      "aboutbook": "Can you find yourself after you have lost that special someone? A disillusioned and heartbroken Anusha finds herself in the small world of WeD. Struggling to cope with her feelings and the job of raising money for charity, she reluctantly searches for a worthwhile cause to support.For Ananth, who has been on the opposite side, no life is less worthy, no cause too small to support. Behind them are teams for whom going to extraordinary lengths to save lives is more than a full-time occupation. In front of them is the virtual world of social media-watching, interacting, judging, making choices, and sometimes, saving lives. From the virtual to the real, their lives and that of their families, entangle in a way that moving together is the only solution. They can't escape each other. In this world of complicated relationships, should love be such a difficult ride?",
      "aboutAuthor": "Durjoy Datta was born in New Delhi, and completed a degree in engineering and business management before embarking on a writing career. His first book-Of Course I Love You . . .-was published when he was twenty-one years old and was an instant bestseller. His successive novels-Now That You're Rich . . .; She Broke Up, I Didn't! . . .; Oh Yes, I'm Single! . . .; You Were My Crush . . .; If It's Not Forever . . .; Till the Last Breath . . .; Someone Like You; Hold My Hand; When Only Love Remains; World's Best Boyfriend; The Girl of My Dreams; The Boy Who Loved; The Boy with the Broken Heart and The Perfect Us-have also found prominence on various bestseller lists, making him one of the highest-selling authors in India.Durjoy also has to his credit nine television shows and has written over a thousand episodes for television. He lives in Mumbai. For more updates, you can follow him on Facebook (www.facebook.com/durjoydatta1) or Twitter (@durjoydatta) or mail him at durjoydatta@gmail.com.",
    },
    {
      "name": "Overkill ",
      "isNewArrival": false,
      "isTopSelling": true,
      "categories": ["fiction"],
      "author": "Sandra Brown",
      "bookImage": "book24.webp",
      "bookPrize": "$ 1,930.0",
      "orginalBookPrize": "$ 2,460.0",
      "publisher": "Grand Central Publishing  ",
      "relesedDate": "  16 Aug 2022 ",
      "bookStockDetails": "Available",
      "aboutbook": "Former Super Bowl MVP quarterback Zach Bridger hasn't seen his ex-wife, Rebecca Pratt, for some time--not since their volatile marriage imploded--so he's shocked to receive a life-altering call about her. Rebecca has been placed on life support after a violent assault, and he--despite their divorce--has medical power-of-attorney. Zach is asked to make an impossible choice: keep her on life support or take her off of it. Buckling under the weight of the responsibility and the glare of public scrutiny, Zach ultimately walks away, letting Rebecca's parents have the final say.Four years later, Rebecca's attacker, Eban--the scion of a wealthy family in Atlanta--gets an early release from prison. The ludicrous miscarriage of justice reeks of favoritism, and Kate Lennon, a brilliant state prosecutor, is determined to put him back behind bars. Rebecca's parents have kept her alive all these years, but if her condition were to change--if she were to die--Eban could be retried on a new charge: murder.It isn't lost on Zach that in order for Eban to be charged with Rebecca's murder, Zach must actually be the one to kill her. He rejects Kate's legal standpoint but can't resist their ill-timed attraction to each other. Eban, having realized the jeopardy he's in, plots to make certain that neither Zach nor Kate lives to see the death of Rebecca--and the end of his freedom. ",
      "aboutAuthor": " Sandra Brown is the author of seventy-three New York Times bestsellers. There are more than eighty million copies of her books in print worldwide, and her work has been translated into thirty-four languages. Four of her books have been made into films. In 2008, the International Thriller Writers named Brown its Thriller Master, the organization's highest honor. She has served as president of Mystery Writers of America and holds an honorary doctorate of humane letters from Texas Christian University. She lives in Texas.",
    },
    {
      "name": "War of Lanka",
      "isNewArrival": false,
      "isTopSelling": true,
      "categories": ["fiction"],
      "author": "Amish Tripathi",
      "bookImage": "book25.jpeg",
      "bookPrize": "$ 352.00",
      "orginalBookPrize": "$ 495.00",
      "publisher": "HarperCollins India",
      "relesedDate": " 3 October 2022  ",
      "bookStockDetails": "Available",
      "aboutbook": "Greed. Rage. Grief. Love. Smouldering Tinder, Waiting To Trigger A War.But This War Is Different. This One Is For Dharma. This War Is For The Greatest Goddess Of Them All.Sita Has Been Kidnapped. Defiantly, She Dares Raavan To Kill Her - She'd Rather Die Than Allow Ram To Surrender.Ram Is Beside Himself With Grief And Rage. He Prepares For War. Fury Is His Fuel. Calm Focus, His Guide.Raavan Thought He Was Invincible. He Thought He'd Negotiate And Force A Surrender. Little Did He Know ...The First Three Books Of The Second-fastest-selling Book Series In Indian Publishing History - The Ram Chandra Series - Explore The Individual Journeys Of Ram, Sita And Raavan. In This, The Epic Fourth Book Of The Series, Their Narrative Strands Crash Into Each Other, And Explode In A Slaughterous War.Will Ram Defeat The Ruthless And Fiendish Raavan, Constrained As He Is By The Laws Of Dharma Will Lanka Burn To A Cinder Or Fight Back Like A Cornered Tiger Will The Terrible Costs Of War Be Worth The Victory. ",
      "aboutAuthor": "Amish is a 1974-born, IIM (Kolkata)-educated banker-turned-author. The success of his debut book, The Immortals of Meluha (Book 1 of the Shiva Trilogy), encouraged him to give up his career in financial services to focus on writing. Besides being an author, he is also an Indian-government diplomat, a host for TV documentaries, and a film producer. Amish is passionate about history, mythology and philosophy, finding beauty and meaning in all world religions. His books have sold more than 6 million copies and have been translated into over 20 languages. His Shiva Trilogy is the fastest selling and his Ram Chandra Series the second fastest selling book series in Indian publishing history. You can connect with Amish here: ",
    },
    {
      "name": "Something I Never Told You",
      "isNewArrival": false,
      "isTopSelling": true,
      "categories": ["fiction"],
      "author": "Shravya Bhinder",
      "bookImage": "book76.webp",
      "bookPrize": "$ 167.00",
      "orginalBookPrize": "$ 280.00",
      "publisher": " Penguin ",
      "relesedDate": " 14 February 2019  ",
      "bookStockDetails": "Available",
      "aboutbook": "When in love, you tend to take each other for granted, and sometimes, that can cost you a lifetime of togetherness . . .Ronnie knew that his first crush was way out of his league, and yet he pursued and wooed Adira. Shyly and from a distance in the beginning, and more persuasively later. He couldn't believe it when the beautiful Adira actually began to reciprocate, falling in love with him for his simplicity and honesty. Slowly, as they get close and comfortable with each other, life takes on another hue. From truly magical it becomes routine. There are fights and then making-up sessions-a clash of egos and doubts.Things begin to change for the worst.It is too late.Ronnie and Adira will probably never find their forever after . . .",
      "aboutAuthor": "Shravya loves to find hidden stories around her and write novels about them. Formerly a corporate employee, she managed to flee the madness after a few years of boredom to become a full-time writer. She is a sucker for romance and strives to pen down exciting stories.When she is not reading and writing, she is out enjoying nature, playing with her dogs or cooking for her family.She lives in Melbourne with her family, in a house with a barren backyard and a lifetime's collection of books.",
    },

    {
      "name": "Looking for Alaska",
      "isFavorite": true,
      "categories": ["poetry"],
      "author": "Jhon Green",
      "bookImage": "book40.jpg",
      "bookPrize": "$ 669.00",
      "orginalBookPrize": "$ 917.00",
      "publisher": "  Harper Collins India Ltd  ",
      "relesedDate": " 28 Feb 2013  ",
      "bookStockDetails": "Available",
      "aboutbook": "“If people were rain, I was drizzle and she was a hurricane.Gorgeous, clever and undoubtedly screwed-up, Alaska draws Miles into her reckless world and irrevocably steals his heart. For Miles, nothing can ever be the same again.‘Looking for Alaska’ brilliantly captures the exquisite painful joy of living and loving. Poignant, funny, heartbreaking and compelling, this novel will stay with you forever.The unmissable first novel from bestselling and award-winning author of THE FAULT IN OUR STARS and TURTLES ALL THE WAY DOWN.",
      "aboutAuthor": "John Green is an award-winning, New York Times bestselling author who has received numerous accolades including the Printz Medal, a Printz Honor and the Edgar Award. John is also one half of the Vlogbrothers; co-creator, with his brother, Hank, of the popular video blog Brotherhood 2.0, which has been watched more than 30 million times by Nerdfighter fans all over the globe (youtube.com/vlogbrothers).",
    },
    {
      "name": "Long Winter",
      "isFavorite": true,
      "categories": ["love story"],
      "author": "Laura Ingalls Wilder ",
      "bookImage": "book39.jpg",
      "bookPrize": "$ 339.00",
      "orginalBookPrize": "$ 513.00",
      "publisher": " Egmont UK Ltd ",
      "relesedDate": "  30 Jul 2015 ",
      "bookStockDetails": "Available",
      "aboutbook": "When a blizzard cuts the town of De Smet off from the railroad, the community is left for weeks without food or fuel deliveries and the Ingalls family are forced to eke out the last of their supplies. As the terrible winter drags on, things begin to look desperate, until Almanzo Wilder and his friend brave the icy storms in search of help.The Long Winter is an autobiographical children's novel written by Laura Ingalls Wilder and published in 1940, the sixth of nine books in her Little House series. It is set in southeastern Dakota Territory during the severe winter of 1880–1881, when she turned 14 years old.On the empty winter prairie, gray clouds to the northwest meant only one thing: a blizzard was seconds away. The first blizzard came in October. It snowed almost without stopping until April. The temperature dropped to forty below. Snow reached the roof-tops. And no trains could get through with food and coal. The townspeople began to starve. The Ingalls family barely lived through that winter. And Almanzo Wilder knew he would have to risk his life to save the town.",
      "aboutAuthor": "Laura Elizabeth Ingalls Wilder was an American writer, mostly known for the Little House on the Prairie series of children's books, published between 1932 and 1943, which were based on her childhood in a settler and pioneer family.Ingalls wrote a series of historical fiction books for children based on her childhood growing up in a pioneer family. She also wrote a regular newspaper column and kept a diary as an adult moving from South Dakota to Missouri, the latter of which has been published as a book.",
    },
    {
      "name": "Sooley",
      "isFavorite": true,
      "categories": ["drama story"],
      "author": "John Grisham",
      "bookImage": "book38.webp",
      "bookPrize": "$ 477.00",
      "orginalBookPrize": "$ 698.00",
      "publisher": " Doubleday Books  ",
      "relesedDate": " 27 April 2021  ",
      "bookStockDetails": "Available",
      "aboutbook": "New York Times bestselling author John Grisham takes you to a different kind of court in his first basketball novel. Samuel 'Sooley' Sooleymon is a raw, young talent with big hoop dreams...and even bigger challenges off the court.In the summer of his seventeenth year, Sam­uel Sooleymon gets the chance of a lifetime: a trip to the United States with his South Sudanese teammates to play in a showcase basket­ball tournament. He has never been away from home, nor has he ever been on an airplane. The opportunity to be scouted by dozens of college coaches is a dream come true.Samuel is an amazing athlete, with speed, quick­ness, and an astonishing vertical leap. The rest of his game, though, needs work, and the American coaches are less than impressed.During the tournament, Samuel receives dev­astating news from home: A civil war is raging across South Sudan, and rebel troops have ran­sacked his village. His father is dead, his sister is missing, and his mother and two younger brothers are in a refugee camp.Samuel desperately wants to go home, but it's just not possible. Partly out of sympathy, the coach of North Carolina Central offers him a scholar­ship. Samuel moves to Durham, enrolls in classes, joins the team, and prepares to sit out his freshman season. There is plenty of more mature talent and he isn't immediately needed.Gripping and moving, Sooley showcases John Grisham's unparalleled storytelling powers in a whole new light. This is Grisham at the top of his game. ",
      "aboutAuthor": "John Grisham is the author of forty-seven consecutive #1 bestsellers, which have been translated into nearly fifty languages. His recent books include The Judge's List, Sooley, and his third Jake Brigance novel, A Time for Mercy, which is being developed by HBO as a limited series.Grisham is a two-time winner of the Harper Lee Prize for Legal Fiction and was honored with the Library of Congress Creative Achievement Award for Fiction.When he's not writing, Grisham serves on the board of directors of the Innocence Project and of Centurion Ministries, two national organizations dedicated to exonerating those who have been wrongfully convicted. Much of his fiction explores deep-seated problems in our criminal justice system.",
    },
    {
      "name": "Upgrade",
      "categories": ["non fiction"],
      "isFavorite": true,
      "author": " Blake Crouch",
      "bookImage": "book43.jpg",
      "bookPrize": "$ 400.00",
      "orginalBookPrize": "$ 478.00",
      "publisher": "12 July 2022  ",
      "relesedDate": "  Ballantine Books  ",
      "bookStockDetails": "Available",
      "aboutbook": "The mind-blowing new thriller from the New York Times bestselling author of Dark Matter and Recursion.At first, Logan Ramsay isn’t sure if anything’s different. He just feels a little . . . sharper. Better able to concentrate. Better at multitasking. Reading a bit faster, memorizing better, needing less sleep.But before long, he can’t deny it: Something’s happening to his brain. To his body. He’s starting to see the world, and those around him—even those he loves most—in whole new ways.The truth is, Logan’s genome has been hacked. And there’s a reason he’s been targeted for this upgrade. A reason that goes back decades to the darkest part of his past, and a horrific family legacy.Worse still, what’s happening to him is just the first step in a much larger plan, one that will inflict the same changes on humanity at large—at a terrifying cost.Intimate in scale yet epic in scope, Upgrade is an intricately plotted, lightning-fast tale that charts one man’s thrilling transformation, even as it asks us to ponder the limits of our humanity—and our boundless potential.",
      "aboutAuthor": "Blake Crouch is a bestselling novelist and screenwriter. He is the author of the forthcoming novel, Dark Matter, for which he is writing the screenplay for Sony Pictures. His international-bestselling Wayward Pines trilogy was adapted into a television series for FOX, executive produced by M. Night Shyamalan, that was Summer 2015’s #1 show. With Chad Hodge, Crouch also created Good Behavior, the TNT television show starring Michelle Dockery based on his Letty Dobesh novellas. He has written more than a dozen novels that have been translated into over thirty languages and his short fiction has appeared in numerous publications including Ellery Queen and Alfred Hitchcock Mystery Magazine. Crouch lives in Colorado with his family.",
    },
    {
      "name": "Milk and Honey",
      "categories": ["poetry"],
      "isFavorite": true,
      "author": "Rupi Kaur ",
      "bookImage": "book36.webp",
      "bookPrize": "$ 274.00",
      "orginalBookPrize": "$ 499.00",
      "publisher": " Andrews McMeel Publishing ",
      "relesedDate": " 06 Oct 2015  ",
      "bookStockDetails": "Available",
      "aboutbook": "Milk and Honey is an Indian-Canadian collection of both abstract fiction and non-fiction poetry and prose by Rupi Kaur.Rupi Kaur is the Writer of the Decade-The New Republic,#1 New York Times bestseller milk and honey is a collection of poetry and prose about survival. About the experience of violence, abuse, love, loss, and femininity.The book is divided into four chapters, and each chapter serves a different purpose. Deals with a different pain. Heals a different heartache. milk and honey takes readers through a journey of the most bitter moments in life and finds sweetness in them because there is sweetness everywhere if you are just willing to look.",
      "aboutAuthor": "About the Author: RUPI KAUR is a poet, artist, and performer. As a 21-year-old university student Rupi wrote, illustrated, and self-published her first poetry collection, milk and honey. Next came its artistic sibling, the sun and her flowers. These collections have sold over 10 million copies and have been translated into over 40 languages. Her latest collection, home body, debuted #1 on bestseller lists across the world. As she has done in all things from the very beginning, Rupi self-produced Rupi Kaur Live, the first poetry special of its kind, which debuted on Amazon Prime Video in 2021. Rupi's work touches on love, loss, trauma, healing, femininity, and migration. She feels most at home when creating art, performing her poetry onstage, and spending time with family and friends.",
    },
    {
      "name": "You Are a Badass",
      "isFavorite": true,
      "categories": ["classic"],
      "author": " Jen Sincero",
      "bookImage": "book37.webp",
      "bookPrize": "$ 374.00",
      "orginalBookPrize": "$ 501.00",
      "publisher": "Running Press Adult   ",
      "relesedDate": " 23 Apr 2013  ",
      "bookStockDetails": "Available",
      "aboutbook": "Packed with humor, inspiration, and advice, You Are a Badass is the #1 New York Times bestselling self-help book that teaches you how to get better without getting busted.YOU ARE A BADASS IS THE SELF-HELP BOOK FOR PEOPLE WHO DESPERATELY WANT TO IMPROVE THEIR LIVES BUT DONT WANT TO GET BUSTED DOING IT. In This Refreshingly Entertaining How-to Guide, Bestselling Author And World-traveling Success Coach, Jen Sincero, Serves Up 27 Bitesized Chapters Full Of Hilariously Inspiring Stories, Sage Advice, Easy Exercises, And The Occasional Swear Wor YOU ARE A BADASS IS THE SELF-HELP BOOK FOR PEOPLE WHO DESPERATELY WANT TO IMPROVE THEIR LIVES BUT DONT WANT TO GET BUSTED DOING IT. In This Refreshingly Entertaining How-to Guide, Bestselling Author And World-traveling Success Coach, Jen Sincero, Serves Up 27 Bitesized Chapters Full Of Hilariously Inspiring Stories, Sage Advice, Easy Exercises, And The Occasional Swear Word, Helping You To: - Identify And Change The Self-sabotaging Beliefs And Behaviours That Stop You From Getting What You Want. - Create A Life You Totally Love. And Create It NOW - Make Some Damn Money Already. The Kind Youve Never Made Before. By The End Of You Are A Badass, Youll Understand Why You Are How You Are, How To Love What You Cant Change, How To Change What You Dont Love, And How To Use The Force To Kick Some Serious Ass.",
      "aboutAuthor": "Jen Sincero is a #1 New York Times bestselling author, speaker, and success coach who has helped countless people transform their personal and professional lives via her newsletters, products, seminars, public appearances, and books. A few years ago, Jen said goodbye to her home in California in order to travel the world indefinitely and encourages as many people as possible to live lives of unbridled awesomeness. You can find out more, and sign up for her newsletter at jensincero.com.",
    },

    // .................................new arrivals.....................................
    {
      "name":"The Challenge",
      "isNewArrival": true,
      "categories": ["nonfiction"],
      "author":"Danielle Steel",
      "bookImage":"book1.webp",
      "bookPrize":"$ 345.72",
      "orginalBookPrize":"$ 392.77",
      "publisher":"Delacorte Press",
      "relesedDate":"16 August 2022",
      "bookStockDetails":"Available",
      "aboutbook":" In this thrilling novel from #1 New York Times bestselling author Danielle Steel, a small community is tested when their children go missing while exploring a dangerous local peak, forcing them to band together during the crisis. Fishtail, Montana, is home to Anne and Pitt Pollock, local royalty, high school sweethearts, and owners of the successful Pollock ranch. The sprawling foothills of the Beartooth Mountains surround the town, overlooking the Pollocks’ property and the nearby ranch belonging to Bill and Pattie Brown. The two couples have known each other since childhood.Their sons Peter Pollock and Matt Brown are also the best of friends. When they and two other local kids meet Juliet Marshall, new to town after her parents’ bitter divorce, the five of them are soon inseparable, spending their summer days swimming, horseback riding, hiking, and fishing.But one August afternoon, their latest adventure takes a dangerous turn—and quickly escalates into a battle for survival—when they find themselves trapped on Granite Peak. Fear reverberates through the town as their parents grow ever more desperate to hear word that their children have been found. They must place their own trials aside amid a massive search-and-rescue operation. As they come to lean on one another for support, a media frenzy ensues, heightening tensions and testing some already fragile relationships.In the aftermath of this one fateful event, devastating secrets are revealed, new love appears on the horizon, and families are forced to reconsider what they once held dear. In The Challenge, Danielle Steel deftly weaves a story that is a portrait of courage and a striking tale of the bonds of love and family. ",
      "aboutAuthor":" Danielle Steel has been hailed as one of the world’s bestselling authors, with almost a billion copies of her novels sold. Her many international bestsellers include All That Glitters, Royal, Daddy’s Girls, The Wedding Dress, The Numbers Game, Moral Compass, Spy, and other highly acclaimed novels. She is also the author of His Bright Light, the story of her son Nick Traina’s life and death; A Gift of Hope, a memoir of her work with the homeless; Expect a Miracle, a book of her favorite quotations for inspiration and comfort; Pure Joy, about the dogs she and her family have loved; and the children’s books Pretty Minnie in Paris and Pretty Minnie in Hollywood. "
    },
    {
        "name":" The Sun Is Also a Star",
        "isNewArrival": true,
        "categories": ["fiction"],
        "author":" Nicola Yoon ",
        "bookImage":"book2.jpg",
        "bookPrize":"$ 245.12",
        "orginalBookPrize":"$ 275.07",
        "publisher":" Delacorte Books ",
        "relesedDate":" 1 November 2016 ",
        "bookStockDetails":"Available",
        "aboutbook": " The Sun Is Also a Star, is a touching story about two teenagers who deserve the chance to get to know each other, but risk having it ripped away from them before it's even really begun. The novel takes place in New York City, where Natasha is on a mission to save her family from being deported back to Jamaica.College-bound romantic Daniel Bae and Jamaica-born pragmatist Natasha Kingsley meet -- and fall for each other -- over one magical day amidst the fervor and flurry of New York City. Sparks immediately fly between these two strangers, who might never have met had fate not given them a little push. With just hours left on the clock in what looks to be her last day in the U.S., Natasha is fighting against her family's deportation just as fiercely as she's fighting her growing feelings for Daniel.   ",
        "aboutAuthor":" Nicola Yoon is a Jamaican-American author. She is best known for writing the 2015 young adult novel Everything, Everything, a New York Times best seller and the basis of a 2017 film of the same name. In 2016, she released The Sun Is Also a Star, a novel that was adapted to a film of the same name. "
    },
    {
        "name":"Dharma",
        "isNewArrival": true,
        "categories": ["classic"],
        "author":"Amish and Bhavna Dive",
        "bookImage":"book3.jpg",
        "bookPrize":"$ 359.72",
        "orginalBookPrize":"$ 499.00",
        "publisher":" Westland ",
        "relesedDate":" 28 December 2020",
        "bookStockDetails":"Out Of Stock",
        "aboutbook":" The spiritual self-help book is co-authored by Amish and his sister Bhavna Roy. In 'Dharma: Decoding the Epics for a Meaningful Life', as the title suggests, Amish and Bhavna Roy discuss the intriguing concepts of Dharma, Karma, the meaning of life and how it can help one achieve the most in life.Stories can be both entertaining and educative. They can also be insightful and illuminating, especially when they have travelled down the generations, through the centuries, taking on and eliding new meanings with each retelling. In this genre-bending book, the first of a series, Amish and Bhavna dive into the priceless treasure trove of the ancient Indian epics, as well as the vast and complex universe of Amish’s Meluha (through his Shiva Trilogy and Ram Chandra Series), to explore some of the key concepts of Indian philosophy. ",
        "aboutAuthor":" AMISH is a 1974-born IIM (Kolkata)-educated, boring banker turned happy author. The success of his debut book, The Immortals of Meluha (Book 1 of the Shiva Trilogy), encouraged him to give up a fourteen-year-old career in financial services to focus on writing. He is passionate about history, mythology and philosophy, finding beauty and meaning in all world religions. Amish's books have sold more than 5.5 million copies and have been translated into over 19 languages. BHAVNA ROY was educated in Mussoorie, Pune and Mumbai. After graduating in psychology from Mumbai University, she worked first as a volunteer in a school for special children in Malegaon, and later in an NGO in Nashik called SOS. She is the wife of the late Himanshu Roy IPS, senior police officer of the Maharashtra cadre. She lives in Mumbai."
    },
    {
      "name":" The Midnight Library ",
      "author":"Matt Haig ",
      "bookImage":"book5.jpg",
      "isNewArrival": true,
      "categories": ["love story"],
      "bookPrize":"$ 165.92",
      "orginalBookPrize":"$ 189.04",
      "publisher":" Canongate Books",
      "relesedDate":"13 August 2020",
      "bookStockDetails":"Available",
      "aboutbook":" Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices . . . Would you have done anything different, if you had the chance to undo your regrets? A novel about all the choices that go into a life well lived.Somewhere out beyond the edge of the universe there is a library that contains an infinite number of books, each one the story of another reality. One tells the story of your life as it is, along with another book for the other life you could have lived if you had made a different choice at any point in your life. While we all wonder how our lives might have been, what if you had the chance to go to the library and see for yourself? Would any of these other lives truly be better? Nora Seed finds herself faced with this decision. Faced with the possibility of changing her life for a new one, following a different career, undoing old breakups, realizing her dreams of becoming a glaciologist; she must search within herself as she travels through the Midnight Library to decide what is truly fulfilling in life, and what makes it worth living in the first place ",   
      "aboutAuthor":"The Midnight Library is a fantasy novel by Matt Haig, published on 13 August 2020 by Canongate Books. It was abridged and broadcast on BBC Radio 4 over ten episodes in December 2020.Matt Haig (born 3 July 1975) is an English author and journalist. He has written both fiction and non-fiction books for children and adults, often in the speculative fiction genre.Matt Haig is an author for children and adults. His memoir Reasons to Stay Alive was a number one bestseller, staying in the British top ten for 46 weeks. His children's book A Boy Called Christmas was a runaway hit and is translated in over 40 languages."
    },
    {
      "name":" The Alchemist",
      "isNewArrival": true,
      "categories": ["classic"],
      "author":"Paulo Coelho ",
      "bookImage":"book7.webp",
      "bookPrize":"$ 140.07",
      "orginalBookPrize":"$ 249.12",
      "publisher":"HarperTorch (English translation) ",
      "relesedDate":"1988  ",
      "bookStockDetails":"Available",
      "aboutbook": " Combining magic, mysticism, wisdom, and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations.Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago's journey teaches us about the essential wisdom of listening to our hearts, recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, following our dreams." ,
      "aboutAuthor":" The Brazilian author PAULO COELHO was born in 1947 in the city of Rio de Janeiro. Before dedicating his life completely to literature, he worked as theatre director and actor, lyricist and journalist.The Alchemist is a novel by Brazilian author Paulo Coelho which was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller  "

    },
    {
      "name":"The Seven Husbands of Evelyn Hugo",
      "isNewArrival": true,
      "categories": ["love story"],
      "author":"Taylor Jenkins Reid",
      "bookImage":"book6.jpg",
      "bookPrize":"$ 250.65",
      "orginalBookPrize":"$ 282.91",
      "publisher":" Atria Books",
      "relesedDate":"13 June 2017  ",
      "bookStockDetails":"Available",
      "aboutbook":" The Seven Husbands of Evelyn Hugo is a historical fiction novel by American author Taylor Jenkins Reid and published by Atria Books in 2017. The novel tells the story of the fictional Old Hollywood star Evelyn Hugo, who at age 79 gives a final interview to an unknown journalist, Monique Grant.“Riveting, heart-wrenching, and full of Old Hollywood glamour, The Seven Husbands of Evelyn Hugo is one of the most captivating reads of 2017.” —BuzzFeed “The epic adventures Evelyn creates over the course of a lifetime will leave every reader mesmerized. This wildly addictive journey of a reclusive Hollywood starlet and her tumultuous Tinseltown journey comes with unexpected twists and the most satisfying of drama.” —PopSugar In this entrancing novel “that speaks to the Marilyn Monroe and Elizabeth Taylor in us all” (Kirkus Reviews), a legendary film actress reflects on her relentless rise to the top and the risks she took, the loves she lost, and the long-held secrets the public could never imagine.Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life. But when she chooses unknown magazine reporter Monique Grant for the job, no one is more astounded than Monique herself. Why her? Why now? Monique is not exactly on top of the world. Her husband has left her, and her professional life is going nowhere. Regardless of why Evelyn has selected her to write her biography, Monique is determined to use this opportunity to jumpstart her career. Summoned to Evelyn’s luxurious apartment, Monique listens in fascination as the actress tells her story. From making her way to Los Angeles in the 1950s to her decision to leave show business in the ‘80s, and, of course, the seven husbands along the way, Evelyn unspools a tale of ruthless ambition, unexpected friendship, and a great forbidden love. Monique begins to feel a very real connection to the legendary star, but as Evelyn’s story near its conclusion, it becomes clear that her life intersects with Monique’s own in tragic and irreversible ways. “Heartbreaking, yet beautiful” (Jamie Blynn, Us Weekly), The Seven Husbands of Evelyn Hugo is “Tinseltown drama at its finest” (Redbook): a mesmerizing journey through the splendor of old Hollywood into the harsh realities of the present day as two women struggle with what it means—and what it costs—to face the truth. ",
      "aboutAuthor":"Taylor Jenkins Reid is the author of the New York Times Bestselling novels Carrie Soto Is Back, Malibu Rising, Daisy Jones and The Six, and The Seven Husbands of Evelyn Hugo, as well as One True Loves, Maybe in Another Life, After I Do, and Forever, Interrupted. She lives in Los Angeles. "

    },
    {
      "name":"RAM Scion of Ikshvaku",
      "isNewArrival": true,
      "categories": ["classic drama"],
      "author":" Amish Tripathi",
      "bookImage":"book4.jpg",
      "bookPrize":"$ 201",
      "orginalBookPrize":"$388.00",
      "publisher":"Westland Press ",
      "relesedDate":" 22 June 2015",
      "bookStockDetails":"Available",
      "aboutbook":"Scion of Ikshvaku (also known as Ram: Scion of Ikshvaku) is a one to one replica of the events taking place before the epic tale 'Ramayana' and also the fourth book of Amish Tripathi, fourth book of Amishverse, and first book of Ram Chandra Series. It was released on 22 June 2015. It is based on Ram, the legendary Indian king regarded as an incarnation of Vishnu. The title was revealed by the author at the Jaipur Literature Festival. The story begins with King Dashrath of Ayodhya being defeated in a war by Lankan trader Raavan, and the birth of his son Ram. It follows through Ram's childhood and tutelage, along with the politics surrounding his ascension to the throne, and ultimately his 14-year exile, accompanied by wife Sita and brother Lakshman. ",
      "aboutAuthor":"Amish is a 1974-born, IIM (Kolkata)-educated banker-turned-author. The success of his debut book, The Immortals of Meluha (Book 1 of the Shiva Trilogy), encouraged him to give up his career in financial services to focus on writing. Besides being an author, he is also an Indian-government diplomat, a host for TV documentaries, and a film producer. Amish is passionate about history, mythology and philosophy, finding beauty and meaning in all world religions. His books have sold more than 6 million copies and have been translated into over 20 languages. His Shiva Trilogy is the fastest selling and his Ram Chandra Series the second fastest selling book series in Indian publishing history   "

    },
    {
      "name":"A Court of Thorns and Roses",
      "isNewArrival": true,
      "categories": ["love stoy"],
      "author":"Sarah J. Maas",
      "bookImage":"book8.jpg", 
      "bookPrize":"$ 386",
      "orginalBookPrize":"$ 417.02",
      "publisher":"Bloomsbury Publishing ",
      "relesedDate":" 5 May 2015 ",
      "bookStockDetails":"Available",
      "aboutbook":"Feyre's survival rests upon her ability to hunt and kill – the forest where she lives is a cold, bleak place in the long winter months. So when she spots a deer in the forest being pursued by a wolf, she cannot resist fighting it for the flesh. But to do so, she must kill the predator and killing something so precious comes at a price..Dragged to a magical kingdom for the murder of a faerie, Feyre discovers that her captor, his face obscured by a jewelled mask, is hiding far more than his piercing green eyes would suggest. Feyre's presence at the court is closely guarded, and as she begins to learn why, her feelings for him turn from hostility to passion and the faerie lands become an even more dangerous place. Feyre must fight to break an ancient curse, or she will lose him forever. ",
      "aboutAuthor":"Sarah J. Maas is the #1 New York Times and internationally bestselling author of the Crescent City, A Court of Thorns and Roses, and the Throne of Glass series. Her books have sold more than twelve million copies and are published in thirty-seven languages.Sarah Janet Maas is an American fantasy author known for her fantasy series Throne of Glass and A Court of Thorns and Roses. As of 2021, she has sold over twelve million copies of her books and her work has been translated into 37 languages "

    },
    {
      "name":"The Fault in Our Stars",
      "isNewArrival": true,
      "categories": ["non fiction"],
      "author":" John Green ",
      "bookImage":"book9.jpg",
      "bookPrize":"$ 158.90",
      "orginalBookPrize":"$265.11",
      "publisher":" Penguin Random House Children' ",
      "relesedDate":"10 January 2012 ",
      "bookStockDetails":"Available",
      "aboutbook": " Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel's story is about to be completely rewritten.Insightful, bold, irreverent, and raw, The Fault in Our Stars is award-winning author John Green's most ambitious and heartbreaking work yet, brilliantly exploring the funny, thrilling, and tragic business of being alive and in love. ",
      "aboutAuthor":" John Green is a New York Times bestselling author of popular young adult fiction books such as The Fault in Our Stars, Looking for Alaska, Paper Towns and many more critically acclaimed books. He has won the 2006 Printz award for his debut novel, Looking for Alaska. He was also selected as by TIME magazine as one of the 100 Most Influential People in the World.  "

    },
    {
      "name":"Less Is Lost ",
      "author":"Andrew Sean Greer",
      "bookImage":"book10.jpg",
      "isNewArrival": true,
      "categories": ["young adult"],
      "bookPrize":"$ 315.12",
      "orginalBookPrize":"$ 392.44",
      "publisher":" Little, Brown and Company",
      "relesedDate":"20 September 2022",
      "bookStockDetails":"Available",
      "aboutbook": " In the follow-up to the “bedazzling, bewitching, and be-wonderful” (New York Times​) best-selling and Pulitzer Prize-winning Less: A Novel, the awkward and lovable Arthur Less returns in an unforgettable road trip across America.For Arthur Less, life is going surprisingly well: he is a moderately accomplished novelist in a steady relationship with his partner, Freddy Pelu. But nothing lasts: the death of an old lover and a sudden financial crisis has Less running away from his problems yet again as he accepts a series of literary gigs that send him on a zigzagging adventure across the US.We cannot, however, escape ourselves—even across deserts, bayous, and coastlines. From his estranged father and strained relationship with Freddy, to the reckoning he experiences in confronting his privilege, Arthur Less must eventually face his personal demons. With all of the irrepressible wit and musicality that made Less a bestselling, Pulitzer Prize-winning, must-read breakout book, Less Is Lost is a profound and joyous novel about the enigma of life in America, the riddle of love, and the stories we tell along the way. " ,
      "aboutAuthor":" Andrew Sean Greer (born November 1970) is an American novelist and short story writer.[1] Greer received the 2018 Pulitzer Prize for Fiction for his novel Less. He is the author of The Story of a Marriage, which The New York Times has called an “inspired, lyrical novel,” and The Confessions of Max Tivoli, which was named one of the best books of 2004 by the San Francisco Chronicle[2] and received a California Book Award "

    },
    {
      "name":"Fairy Tale",
      "author":" Stephen King",
      "bookImage":"book11.jpg",
      "isNewArrival": true,
      "categories": ["horror"],
      "bookPrize":"$ 387.00",
      "orginalBookPrize":"$ 402.03",
      "publisher":" Scribner ",
      "relesedDate":" 6 September 2022",
      "bookStockDetails":"Available",
      "aboutbook": "Fairy Tale is a dark fantasy novel by American author Stephen King, published on September 6, 2022 by Scribner. The novel follows Charlie Reade, a 17-year-old who inherits keys to a hidden, otherworldly realm, and finds himself leading the battle between forces of good and evil.Legendary storyteller Stephen King goes deep into the well of his imagination in this spellbinding novel about a seventeen-year-old boy who inherits the keys to a parallel world where good and evil are at war, and the stakes could not be higher—for their world or ours.A story as old as myth, and as startling and iconic as the rest of King’s work, Fairy Tale is about an ordinary guy forced into the hero’s role by circumstance, and it is both spectacularly suspenseful and satisfying.  ",
      "aboutAuthor":"Stephen Edwin King (born September 21, 1947) is an American author of horror, supernatural fiction, suspense, crime, science-fiction, and fantasy novels. Described as the King of Horror, a play on his surname and a reference to his high standing in pop culture,[2] his books have sold more than 350 million copies,[3] and many have been adapted into films, television series, miniseries, and comic books. King has published 64 novels, including seven under the pen name Richard Bachman, and five non-fiction books.[4] He has also written approximately 200 short stories, most of which have been published in book collections" 

    },
    {
      "name":"White Nights and Other Stories",
      "isNewArrival": true,
      "categories": ["classic"],
      "author":"Fyodor Dostoevsky",
      "bookImage":"book12.jpg",
      "bookPrize":"$ 194.00",
      "orginalBookPrize":"$ 219.00",
      "publisher":"	Dover Publications Inc. ",
      "relesedDate":"9 May 1848 ",
      "bookStockDetails":"Available",
      "aboutbook": "White Nights the story by Russian Writer *Fyodor* *Dostoevsky* written in 1848 tells a story about dreams, loneliness, failure, chance love,Chilvary, and tears The protagonist describes his ordeals traversing the streets of St. Petersburg. He cherishes the city at night, and feels comfortable in it. He lives solitude in a small apartment in Saint Petersburg with only his old and unsociable maid Matryona who keeps him company. He narrates the story of his relationship with a young woman called Nastenka a girl about the age of 17. To begin with, sees her standing against a railing, in teara. He becomes inquisitive and considers asking her what's wrong, hence eventually continues walking. There is something peculiar about her When he hears her scream, he swiftly intervenes, saving her from the fellow harassing her. Nastenka clutch a tenacious grip on him, he narrates his ordeals how he has lived in solitude and misery, he feels timid, he was grateful to her for not reprimanding or spurning him, he has always wanted someone he could relish in their company, as he reaches Nastenka's door he oblige if he could ever see her again, however pleaded on meeting her on the same spot, just so he can relieve himself from Solitude and boredom, and along side she would tell him her story. " ,
      "aboutAuthor":"One of the most powerful and significant authors in all modern fiction, Fyodor Dostoevsky was the son of a harsh and domineering army surgeon who was murdered by his own serfs (slaves), an event that was extremely important in shaping Dostoevsky's view of social and economic issues. He studied to be an engineer and began work as a draftsman. However, his first novel, Poor Folk (1846), was so well received that he abandoned engineering for writing. In 1849, Dostoevsky was arrested for being a part of a revolutionary group that owned an illegal printing press. He was sentenced to be executed, but the sentence was changed at the last minute, and he was sent to a prison camp in Siberia instead. By the time he was released in 1854, he had become a devout believer in both Christianity and Russia - although not in its ruler, the Czar. " 

    },
    {
      "name":"Without Fail",
      "isNewArrival": true,
      "categories": ["classic"],
      "author":" Lee Child ",
      "bookImage":"book13.jpg",
    
      "bookPrize":"$ 115.39",
      "orginalBookPrize":"$ 123.01",
      "publisher":"Putnam ",
      "relesedDate":"9 May 2002  ",
      "bookStockDetails":"Available",
      "aboutbook": "Without Fail is the sixth book in the Jack Reacher series written by Lee Child. It was published by Putnam in 2002. It is written in the third person.'In this novel, Jack Reacher is approached by a female Secret Service agent who needs a favor - and needs it yesterday. The head of a high-security detail, she wants Reacher to run a test to find the holes in her system. How else can she breathe easy, sure that her protection is truly effective? Reacher is the right man for the job - skilled, stealthy, and unknown. But the things she doesn't tell him could get them both killed. She knows that a group of desperate men have her Secret Service team - and their charge, the newly elected vice-president - in their sights. These men will stop at nothing to realize their objective. And they have planned well - but they haven't planned on Reacher. For only Reacher has the head and heart to corner his prey and bring them to justice - without fail.'--BOOK JACKET. ",
      "aboutAuthor":" Lee Child is one of the world’s leading thriller writers. He was born in Coventry, raised in Birmingham, and now lives in New York. It is said one of his novels featuring his hero Jack Reacher is sold somewhere in the world every nine seconds. His books consistently achieve the number-one slot on bestseller lists around the world and have sold over one hundred million copies. Lee is the recipient of many awards, most recently Author of the Year at the 2019 British Book Awards. He was appointed CBE in the 2019 Queen's Birthday Honours" 

    },
    {
      "name":"book14",
      "isNewArrival": true,
      "categories": ["classic"],
      "author":"author14",
      "bookImage":"book14.jpg",
      
      "bookPrize":"$ 195.44",
      "orginalBookPrize":"$ 241.09",
      "publisher":" Penguin Random House India ",
      "relesedDate":"16 jan 2020",
      "bookStockDetails":"Available",
      "aboutbook":"There's something under my bed! What if it grabs my leg?What do children fear the most? From dark nights and eerie shadows to terrifying clowns, scary insects and huge monsters under their beds, conquer the biggest childhood terrors with this enchanting picture book.Something is under Simon’s bed. He can hear it breathing. Is it a monster? Simon has to find out. He shines a flashlight under the bed, to discover that something is hiding there—but what ? This warm and humorous story will delight any child who has ever envisioned monsters lurking in the bedtime darkness  ",
      "aboutAuthor":"" 

    },
    {
      "name":"The Power of your subconscious mind",
      "isNewArrival": true,
      "categories": ["classic"],
      "author":"Joseph Murphy",
      "bookImage":"book15.jpg",
      "bookPrize":"$ 99.02",
      "orginalBookPrize":"$ 143.76",
      "publisher":"Simon & Schuster ",
      "relesedDate":" 1963",
      "bookStockDetails":"Available",
      "aboutbook":"The Power of Your Subconscious Mind has been a bestseller since its first publication in 1963, selling many millions of copies since its original publication. It is one of the most brilliant and beloved spiritual self-help works of all time which can help you heal yourself, banish your fears, sleep better, enjoy better relationships and just feel happier. The techniques are simple and results come quickly. You can improve your relationships, your finances, your physical well-being.Dr. Joseph Murphy explains that life events are actually the result of the workings of your conscious and subconscious minds. He suggests practical techniques through which one can change one's destiny, principally by focusing and redirecting this miraculous energy. Years of research studying the world's major religions convinced him that some Great Power lay behind all spiritual life and that this power is within each of u ",
      "aboutAuthor":" Murphy was born in Ireland, the son of a private boy's school headmaster and raised a Roman Catholic. He studied for the priesthood and joined the Jesuits. In his twenties, an experience with healing prayer led him to leave the Jesuits and move to the United States, where he became a pharmacist in New York (having a degree in chemistry by that time). Here he attended the Church of the Healing Christ (part of the Church of Divine Science), where Emmet Fox had become minister in 1931." 

    },
    {
      "name":"It Ends with Us ",
      "isNewArrival": true,
      "categories": ["classic"],
      "author":" Colleen Hoover",
      "bookImage":"book16.webp",
      "bookPrize":"$ 156.86",
      "orginalBookPrize":"$ 179.00",
      "publisher":" Welson",
      "relesedDate":"2 August 2016",
      "bookStockDetails":"Available",
      "aboutbook":"Lily hasn’t always had it easy, but that’s never stopped her from working hard for the life she wants. She’s come a long way from the small town in Maine where she grew up — she graduated from college, moved to Boston, and started her own business. So when she feels a spark with a gorgeous neurosurgeon named Ryle Kincaid, everything in Lily’s life suddenly seems almost too good to be true.Ryle is assertive, stubborn, maybe even a little arrogant. He’s also sensitive, brilliant, and has a total soft spot for Lily. And the way he looks in scrubs certainly doesn’t hurt. Lily can’t get him out of her head. But Ryle’s complete aversion to relationships is disturbing. Even as Lily finds herself becoming the exception to his “no dating” rule, she can’t help but wonder what made him that way in the first place.As questions about her new relationship overwhelm her, so do thoughts of Atlas Corrigan — her first love and a link to the past she left behind. He was her kindred spirit, her protector. When Atlas suddenly reappears, everything Lily has built with Ryle is threatened.",
      "aboutAuthor":"Colleen Hoover (born December 11, 1979) is an American author who primarily writes novels in the romance and young adult fiction genres.[2][1] She is best known for her 2016 romance novel It Ends with Us. Many of her works were self-published before being picked up by a publishing house.[2][3] Hoover sold about 20 million books as of October 2022.[4]"  

    },
    {
      "name":"The Kid Who Came From Space",
      "isNewArrival": true,
      "categories": ["classic"],
      "author":" Ross Welford",
      "bookImage":"book17.jpg",
      "bookPrize":"$ 275.21",
      "orginalBookPrize":"$ 298.21",
      "publisher":" HarperCollinsChildren’sBooks",
      "relesedDate":"16 August 2022",
      "bookStockDetails":"Available",
      "aboutbook":"A small village in the wilds of Northumberland is rocked by the disappearance of twelve-year-old Tammy. Only her twin brother, Ethan, knows she is safe – and the extraordinary truth of where she is. It is a secret he must keep, or risk never seeing her again. But that doesn't mean he's going to give up.A small village in the wilds of Northumberland is rocked by the disappearance of twelve-year-old Tammy. Only her twin brother, Ethan, knows she is safe – and the extraordinary truth of where she is. It is a secret he must keep, or risk never seeing her again.Together with his friend Iggy and the mysterious (and very hairy) Hellyann, Ethan teams up with a spaceship called Philip, and Suzy the trained chicken, for a nail-biting chase to get his sister back… that will take him further than anyone has ever been before.A remarkable story of sibling connection, friendship and interstellar adventure from the author Kiran Millwood Hargrave called “one of my favourite middle grade writers”. ",    
      "aboutAuthor":"Welford was born in Cullercoats, a small seaside town in the north-east of England. He attended Marden High School and studied English at Leeds University before becoming a magazine journalist and then a television producer.He first started writing his debut novel, Time Travelling With A Hamster, in 2014. It was published in 2016 and was shortlisted for the Costa,Blue Peter, Waterstones, and Branford Boase Awards. "  

    },
    {
      "name":"Kingdom of Ash",
      "isNewArrival": true,
      "categories": ["classic"],
      "author":"Sarah J. Maas ",
      "bookImage":"book18.jpg",
      "bookPrize":"$ 849 ",
      "orginalBookPrize":"$ 1299.00",
      "publisher":"23 October 2018  Bloomsbury YA",
      "relesedDate":"23 October 2018  ",
      "bookStockDetails":"Available",
      "aboutbook": "Aelin Galathynius has vowed to save her people ― but at a tremendous cost. Locked within an iron coffin by the Queen of the Fae, Aelin must draw upon her fiery will as she endures months of torture. The knowledge that yielding to Maeve will doom those she loves keeps her from breaking, but her resolve is unraveling with each passing day… With Aelin captured, friends and allies are scattered to different fates. Some bonds will grow even deeper, while others will be severed forever. As destinies weave together at last, all must fight if Erilea is to have any hope of salvation.Years in the making, Sarah J. Maas's New York Times bestselling Throne of Glass series draws to an explosive conclusion as Aelin fights to save herself―and the promise of a better world. ",
      "aboutAuthor":"Sarah J. Maas is the #1 New York Times and internationally bestselling author of the Crescent City, A Court of Thorns and Roses, and the Throne of Glass series. Her books have sold more than twelve million copies and are published in thirty-seven languages. A New York native, Sarah lives in Philadelphia with her husband, son, and dog. To find out more, visit sarahjmaas.com or follow @therealsjmaas on Instagram. "

    },
    {
      "name":"The Selection ",
      "isNewArrival": true,
      "categories": ["classic"],
      "author":"Kiera Cass ",
      "bookImage":"book19.jpg",
      "bookPrize":"$ 227.00",
      "orginalBookPrize":"$ 312.75",
      "publisher":" HarperTeen ",
      "relesedDate":" 14 April 2012",
      "bookStockDetails":"Available",
      "aboutbook": "For thirty-five girls, the Selection is the chance of a lifetime. The opportunity to escape the life laid out for them since birth. To be swept up in a world of glittering gowns and priceless jewels. To live in a palace and compete for the heart of gorgeous Prince Maxon.But for America Singer, being Selected is a nightmare. It means turning her back on her secret love with Aspen, who is a caste below her. Leaving her home to enter a fierce competition for a crown she doesn't want. Living in a palace that is constantly threatened by violent rebel attacks.Then America meets Prince Maxon. Gradually, she starts to question all the plans she's made for herself—and realizes that the life she's always dreamed of may not compare to a future she never imagined. " ,
      "aboutAuthor": " Keira Cass is an American author who writes young-adult fiction. She has written six novels and seven novellas. She grew up in South Carolina and went to Radford University where she received a B.A. in history. Cass's books have reached #1 on the New York Times Bestseller List, and the Selection series in particular has been a massive success, selling millions of copies all over the United States. "

    }
    // ..........................end ..............................

  ]
}