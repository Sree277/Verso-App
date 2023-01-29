import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
  newArrivals: Array<any> = this.bookService.getNewArrivals(true);

  favorite: Array<any> = this.bookService.getFavorite(true);

  //   {
  //     "name":"Looking for Alaska",
  //     "author":"Jhon Green",
  //     "bookImage":"book40.jpg",
  //     "bookPrize":"$ 669.00",
  //     "orginalBookPrize":"$ 917.00",
  //     "publisher":"  Harper Collins India Ltd  ",
  //     "relesedDate":" 28 Feb 2013  ",
  //     "bookStockDetails":"Available",
  //     "aboutbook":"“If people were rain, I was drizzle and she was a hurricane.Gorgeous, clever and undoubtedly screwed-up, Alaska draws Miles into her reckless world and irrevocably steals his heart. For Miles, nothing can ever be the same again.‘Looking for Alaska’ brilliantly captures the exquisite painful joy of living and loving. Poignant, funny, heartbreaking and compelling, this novel will stay with you forever.The unmissable first novel from bestselling and award-winning author of THE FAULT IN OUR STARS and TURTLES ALL THE WAY DOWN.",
  //     "aboutAuthor":"John Green is an award-winning, New York Times bestselling author who has received numerous accolades including the Printz Medal, a Printz Honor and the Edgar Award. John is also one half of the Vlogbrothers; co-creator, with his brother, Hank, of the popular video blog Brotherhood 2.0, which has been watched more than 30 million times by Nerdfighter fans all over the globe (youtube.com/vlogbrothers).",
  //   },
  //   {
  //     "name":"Long Winter",
  //     "author":"Laura Ingalls Wilder ",
  //     "bookImage":"book39.jpg",
  //     "bookPrize":"$ 339.00",
  //     "orginalBookPrize":"$ 513.00",
  //     "publisher":" Egmont UK Ltd ",
  //     "relesedDate":"  30 Jul 2015 ",
  //     "bookStockDetails":"Available",
  //     "aboutbook":"When a blizzard cuts the town of De Smet off from the railroad, the community is left for weeks without food or fuel deliveries and the Ingalls family are forced to eke out the last of their supplies. As the terrible winter drags on, things begin to look desperate, until Almanzo Wilder and his friend brave the icy storms in search of help.The Long Winter is an autobiographical children's novel written by Laura Ingalls Wilder and published in 1940, the sixth of nine books in her Little House series. It is set in southeastern Dakota Territory during the severe winter of 1880–1881, when she turned 14 years old.On the empty winter prairie, gray clouds to the northwest meant only one thing: a blizzard was seconds away. The first blizzard came in October. It snowed almost without stopping until April. The temperature dropped to forty below. Snow reached the roof-tops. And no trains could get through with food and coal. The townspeople began to starve. The Ingalls family barely lived through that winter. And Almanzo Wilder knew he would have to risk his life to save the town.",
  //     "aboutAuthor":"Laura Elizabeth Ingalls Wilder was an American writer, mostly known for the Little House on the Prairie series of children's books, published between 1932 and 1943, which were based on her childhood in a settler and pioneer family.Ingalls wrote a series of historical fiction books for children based on her childhood growing up in a pioneer family. She also wrote a regular newspaper column and kept a diary as an adult moving from South Dakota to Missouri, the latter of which has been published as a book.",
  //   },
  //   {
  //     "name":"Sooley",
  //     "author":"John Grisham",
  //     "bookImage":"book38.webp",
  //     "bookPrize":"$ 477.00",
  //     "orginalBookPrize":"$ 698.00",
  //     "publisher":" Doubleday Books  ",
  //     "relesedDate":" 27 April 2021  ",
  //     "bookStockDetails":"Available",
  //     "aboutbook":"New York Times bestselling author John Grisham takes you to a different kind of court in his first basketball novel. Samuel 'Sooley' Sooleymon is a raw, young talent with big hoop dreams...and even bigger challenges off the court.In the summer of his seventeenth year, Sam­uel Sooleymon gets the chance of a lifetime: a trip to the United States with his South Sudanese teammates to play in a showcase basket­ball tournament. He has never been away from home, nor has he ever been on an airplane. The opportunity to be scouted by dozens of college coaches is a dream come true.Samuel is an amazing athlete, with speed, quick­ness, and an astonishing vertical leap. The rest of his game, though, needs work, and the American coaches are less than impressed.During the tournament, Samuel receives dev­astating news from home: A civil war is raging across South Sudan, and rebel troops have ran­sacked his village. His father is dead, his sister is missing, and his mother and two younger brothers are in a refugee camp.Samuel desperately wants to go home, but it's just not possible. Partly out of sympathy, the coach of North Carolina Central offers him a scholar­ship. Samuel moves to Durham, enrolls in classes, joins the team, and prepares to sit out his freshman season. There is plenty of more mature talent and he isn't immediately needed.Gripping and moving, Sooley showcases John Grisham's unparalleled storytelling powers in a whole new light. This is Grisham at the top of his game. ",
  //     "aboutAuthor":"John Grisham is the author of forty-seven consecutive #1 bestsellers, which have been translated into nearly fifty languages. His recent books include The Judge's List, Sooley, and his third Jake Brigance novel, A Time for Mercy, which is being developed by HBO as a limited series.Grisham is a two-time winner of the Harper Lee Prize for Legal Fiction and was honored with the Library of Congress Creative Achievement Award for Fiction.When he's not writing, Grisham serves on the board of directors of the Innocence Project and of Centurion Ministries, two national organizations dedicated to exonerating those who have been wrongfully convicted. Much of his fiction explores deep-seated problems in our criminal justice system.",
  //   },
  //   {
  //   "name":"Upgrade",
  //   "author":" Blake Crouch",
  //   "bookImage":"book43.jpg",
  //   "bookPrize":"$ 400.00",
  //   "orginalBookPrize":"$ 478.00",
  //   "publisher":"12 July 2022  ",
  //   "relesedDate":"  Ballantine Books  ",
  //   "bookStockDetails":"Available",
  //   "aboutbook":"The mind-blowing new thriller from the New York Times bestselling author of Dark Matter and Recursion.At first, Logan Ramsay isn’t sure if anything’s different. He just feels a little . . . sharper. Better able to concentrate. Better at multitasking. Reading a bit faster, memorizing better, needing less sleep.But before long, he can’t deny it: Something’s happening to his brain. To his body. He’s starting to see the world, and those around him—even those he loves most—in whole new ways.The truth is, Logan’s genome has been hacked. And there’s a reason he’s been targeted for this upgrade. A reason that goes back decades to the darkest part of his past, and a horrific family legacy.Worse still, what’s happening to him is just the first step in a much larger plan, one that will inflict the same changes on humanity at large—at a terrifying cost.Intimate in scale yet epic in scope, Upgrade is an intricately plotted, lightning-fast tale that charts one man’s thrilling transformation, even as it asks us to ponder the limits of our humanity—and our boundless potential.",
  //   "aboutAuthor":"Blake Crouch is a bestselling novelist and screenwriter. He is the author of the forthcoming novel, Dark Matter, for which he is writing the screenplay for Sony Pictures. His international-bestselling Wayward Pines trilogy was adapted into a television series for FOX, executive produced by M. Night Shyamalan, that was Summer 2015’s #1 show. With Chad Hodge, Crouch also created Good Behavior, the TNT television show starring Michelle Dockery based on his Letty Dobesh novellas. He has written more than a dozen novels that have been translated into over thirty languages and his short fiction has appeared in numerous publications including Ellery Queen and Alfred Hitchcock Mystery Magazine. Crouch lives in Colorado with his family.",
  // },
  // {
  //   "name":"Milk and Honey",
  //   "author":"Rupi Kaur ",
  //   "bookImage":"book36.webp",
  //   "bookPrize":"$ 274.00",
  //   "orginalBookPrize":"$ 499.00",
  //   "publisher":" Andrews McMeel Publishing ",
  //   "relesedDate":" 06 Oct 2015  ",
  //   "bookStockDetails":"Available",
  //   "aboutbook":"Milk and Honey is an Indian-Canadian collection of both abstract fiction and non-fiction poetry and prose by Rupi Kaur.Rupi Kaur is the Writer of the Decade-The New Republic,#1 New York Times bestseller milk and honey is a collection of poetry and prose about survival. About the experience of violence, abuse, love, loss, and femininity.The book is divided into four chapters, and each chapter serves a different purpose. Deals with a different pain. Heals a different heartache. milk and honey takes readers through a journey of the most bitter moments in life and finds sweetness in them because there is sweetness everywhere if you are just willing to look.",
  //   "aboutAuthor":"About the Author: RUPI KAUR is a poet, artist, and performer. As a 21-year-old university student Rupi wrote, illustrated, and self-published her first poetry collection, milk and honey. Next came its artistic sibling, the sun and her flowers. These collections have sold over 10 million copies and have been translated into over 40 languages. Her latest collection, home body, debuted #1 on bestseller lists across the world. As she has done in all things from the very beginning, Rupi self-produced Rupi Kaur Live, the first poetry special of its kind, which debuted on Amazon Prime Video in 2021. Rupi's work touches on love, loss, trauma, healing, femininity, and migration. She feels most at home when creating art, performing her poetry onstage, and spending time with family and friends.",
  // },
  // {
  //   "name":"You Are a Badass",
  //   "author":" Jen Sincero",
  //   "bookImage":"book37.webp",
  //   "bookPrize":"$ 374.00",
  //   "orginalBookPrize":"$ 501.00",
  //   "publisher":"Running Press Adult   ",
  //   "relesedDate":" 23 Apr 2013  ",
  //   "bookStockDetails":"Available",
  //   "aboutbook":"Packed with humor, inspiration, and advice, You Are a Badass is the #1 New York Times bestselling self-help book that teaches you how to get better without getting busted.YOU ARE A BADASS IS THE SELF-HELP BOOK FOR PEOPLE WHO DESPERATELY WANT TO IMPROVE THEIR LIVES BUT DONT WANT TO GET BUSTED DOING IT. In This Refreshingly Entertaining How-to Guide, Bestselling Author And World-traveling Success Coach, Jen Sincero, Serves Up 27 Bitesized Chapters Full Of Hilariously Inspiring Stories, Sage Advice, Easy Exercises, And The Occasional Swear Wor YOU ARE A BADASS IS THE SELF-HELP BOOK FOR PEOPLE WHO DESPERATELY WANT TO IMPROVE THEIR LIVES BUT DONT WANT TO GET BUSTED DOING IT. In This Refreshingly Entertaining How-to Guide, Bestselling Author And World-traveling Success Coach, Jen Sincero, Serves Up 27 Bitesized Chapters Full Of Hilariously Inspiring Stories, Sage Advice, Easy Exercises, And The Occasional Swear Word, Helping You To: - Identify And Change The Self-sabotaging Beliefs And Behaviours That Stop You From Getting What You Want. - Create A Life You Totally Love. And Create It NOW - Make Some Damn Money Already. The Kind Youve Never Made Before. By The End Of You Are A Badass, Youll Understand Why You Are How You Are, How To Love What You Cant Change, How To Change What You Dont Love, And How To Use The Force To Kick Some Serious Ass.",
  //   "aboutAuthor":"Jen Sincero is a #1 New York Times bestselling author, speaker, and success coach who has helped countless people transform their personal and professional lives via her newsletters, products, seminars, public appearances, and books. A few years ago, Jen said goodbye to her home in California in order to travel the world indefinitely and encourages as many people as possible to live lives of unbridled awesomeness. You can find out more, and sign up for her newsletter at jensincero.com.",
  // },



  fiction: Array<any> = this.bookService.getBooksByCategory("fiction", true);


  // fiction : Array<any>=[
  //   {
  //     "name":"Paths of Fear",
  //     "author":" Mrs Connie Kerbs ",
  //     "bookImage":"book26.jpg",
  //     "bookPrize":"$ 976.00",
  //     "orginalBookPrize":"$ 999.00",
  //     "publisher":"F.I.N.E. Reads Press  ",
  //     "relesedDate":"  01 Oct 2016  ",
  //     "bookStockDetails":"Available",
  //     "aboutbook":"Paths of Fear is a unique anthology which explores that universal and misunderstood experience we call fear. This enjoyable read is part psychological, part informational, and all inspirational. It is largely personal narrative with a sprinkling of poetry and all entertainment. Paths of Fear explores a broad range of fears from that which manifests in screams of sheer terror, to that immobilizing, fear-ridden freeze we all understand. This survey sheds light on that deep, dark discouragement that reminds us of how we might fall short or fail. It exposes furtive beliefs sometimes rooted in us that we, aren't enough; a destructive idea cultivated in toxic environments which erode us from the inside out. Thought-provoking narratives highlight the many faces of fear with the sensitivity and insight of real experience. A wide variety of real-life examples are offered up on how others have dealt with fearful things and fearful places in life. Some of these circumstances have called for a long endurance, with dignity and grace; others required a special kind of strength and defiance. All are examples of facing fear, on one's own terms, inspiring in their own right. This part psychological survey, part self-help, and part spiritual essay spotlights the true antidote to fear - love, of one kind or another. Secularly accessible, but decidedly faith-based, Paths of Fear de-masks the monsters of circumstance and sheds light on some of the darker recesses of life experience. It is a pleasing, poignant reveal of courage, faith, and modern knowledge balanced with age-old wisdom. Paths of Fear encourages us to rely on our best, healthy sense of true self, and a heartfelt love for others. It's a collection to inspire readers down paths of faith and hope and to encourage anyone through trials of fear they must overcome.",
  //     "aboutAuthor":"About the Author: Indeed... On being blessed with early spiritual experiences: these would be as a conduit between myself and a renewable fountain of faith which has utterly saved me time and again. Indeed, this source of amazing grace ever rescues, revives, and rejuvenates still my soul. On having a grandmother whose upstairs library I perused: it was here I met first the Caldecott and Newbery classics, enduring poets, composers, story-telling icons and literary giants. Indeed, I was irrevocably impressed. On having an antique, script, manual type-writer tossed my way: it defined my tender years. Indeed, it nurtured my budding muse. On being married to my childhood sweetheart for 30(plus) years: I am in awe of our incredible journey together. We have been honed and humbled even as we've been bathed in bliss. I am grateful he has been my faithful, capable - and especially good-humored companion all this time. My admiration and love for him are indescribable. Indeed, words fail to convey such a divine devotion. On being adoptive-foster parents for nearly a quarter of a century: this means bevies of babies and bus-loads of youth of all ages and stages have graced our home, profoundly altering us. With 13 adopted, and three procured the old-fashioned way, indeed, I love and appreciate beyond expression, being honed and owned all this time by these precious people. On all the above and more, my family, dear friends, Walk of Faith, and my writing journey: these have indeed, all made for the savoriest of lives and the ultimate, beautiful mess. It is to my great delight that such a crazy-wonderful menagerie has somehow chosen me! On writing: Indeed, is there anything better than ever growing, changing, and becoming? Is there anything better than that release of tremors that have rumbled inside for eons, as they built up a force to be reckoned with? When they finally find their focus to surge into a tsunami of positive energy that ripples out into the world - to leave its mark. To leave it just a little better place than they might have found it? Indeed. It is not that I found writing. For some-how, some-why, it found and claimed me. It's not even that I am a writer, per say. I am just a vessel in which a small but powerful portion of that endless stream, that fountain of renewable vigor - pours a bit of itself in me for a time. ",

  //   },
  //   {
  //     "name":"Kafka On The Shore",
  //     "author":" Haruki Murakami",
  //     "bookImage":"book27.jpg",
  //     "bookPrize":"$ 419.00",
  //     "orginalBookPrize":"$ 599.00",
  //     "publisher":"  Vintage Publishing ",
  //     "relesedDate":" 03 Oct 2005  ",
  //     "bookStockDetails":"Available",
  //     "aboutbook":"Alternate cover edition here . Kafka on the Shore , a tour de force of metaphysical reality, is powered by two remarkable characters: a teenage boy, Kafka Tamura, who runs away from home either to escape a gruesome oedipal prophecy or to search for his long-missing mother and sister; and an aging simpleton called Nakata, who never recovered from a wartime affliction and now i Alternate cover edition here . Kafka on the Shore , a tour de force of metaphysical reality, is powered by two remarkable characters: a teenage boy, Kafka Tamura, who runs away from home either to escape a gruesome oedipal prophecy or to search for his long-missing mother and sister; and an aging simpleton called Nakata, who never recovered from a wartime affliction and now is drawn toward Kafka for reasons that, like the most basic activities of daily life, he cannot fathom. Their odyssey, as mysterious to them as it is to us, is enriched throughout by vivid accomplices and mesmerizing events. Cats and people carry on conversations, a ghostlike pimp employs a Hegel-quoting prostitute, a forest harbors soldiers apparently unaged since World War II, and rainstorms of fish (and worse) fall from the sky. There is a brutal murder, with the identity of both victim and perpetrator a riddleyet this, along with everything else, is eventually answered, just as the entwined destinies of Kafka and Nakata are gradually revealed, with one escaping his fate entirely and the other given a fresh start on his own.",
  //     "aboutAuthor":"Haruki Murakami was born in Kyoto, Japan, in 1949. He grew up in Kobe and then moved to Tokyo, where he attended Waseda University. After college, Murakami opened a small jazz bar, which he and his wife ran for seven years.In 1978 Murakami was in the bleachers of Jingu Stadium watching a baseball game between the Yakult Swallows and the Hiroshima Carp when Dave Hilton, an American, came to bat. According to an oft-repeated story, in the instant that he hit a double, Murakami suddenly realized that he could write a novel. He went home and began writing that night.His first novel, Hear the Wind Sing, won the Gunzou Literature Prize for budding writers in 1979. He followed this success with two sequels, Pinball, 1973 and A Wild Sheep Chase, which all together form “The Trilogy of the Rat.” ",

  //   },
  //   {
  //     "name":"Wish I Could Tell You",
  //     "author":"Durjoy Datta ",
  //     "bookImage":"book77.jpg",
  //     "bookPrize":"$ 176.00",
  //     "orginalBookPrize":"$ 199.00",
  //     "publisher":" Penguin Metro Reads ",
  //     "relesedDate":" 4 October 2019  ",
  //     "bookStockDetails":"Available",
  //     "aboutbook":"Can you find yourself after you have lost that special someone? A disillusioned and heartbroken Anusha finds herself in the small world of WeD. Struggling to cope with her feelings and the job of raising money for charity, she reluctantly searches for a worthwhile cause to support.For Ananth, who has been on the opposite side, no life is less worthy, no cause too small to support. Behind them are teams for whom going to extraordinary lengths to save lives is more than a full-time occupation. In front of them is the virtual world of social media-watching, interacting, judging, making choices, and sometimes, saving lives. From the virtual to the real, their lives and that of their families, entangle in a way that moving together is the only solution. They can't escape each other. In this world of complicated relationships, should love be such a difficult ride?",
  //     "aboutAuthor":"Durjoy Datta was born in New Delhi, and completed a degree in engineering and business management before embarking on a writing career. His first book-Of Course I Love You . . .-was published when he was twenty-one years old and was an instant bestseller. His successive novels-Now That You're Rich . . .; She Broke Up, I Didn't! . . .; Oh Yes, I'm Single! . . .; You Were My Crush . . .; If It's Not Forever . . .; Till the Last Breath . . .; Someone Like You; Hold My Hand; When Only Love Remains; World's Best Boyfriend; The Girl of My Dreams; The Boy Who Loved; The Boy with the Broken Heart and The Perfect Us-have also found prominence on various bestseller lists, making him one of the highest-selling authors in India.Durjoy also has to his credit nine television shows and has written over a thousand episodes for television. He lives in Mumbai. For more updates, you can follow him on Facebook (www.facebook.com/durjoydatta1) or Twitter (@durjoydatta) or mail him at durjoydatta@gmail.com.",
  //   },
  //   {
  //     "name":"Overkill ",
  //     "author":"Sandra Brown",
  //     "bookImage":"book24.webp",
  //     "bookPrize":"$ 1,930.0",
  //     "orginalBookPrize":"$ 2,460.0",
  //     "publisher":"Grand Central Publishing  ",
  //     "relesedDate":"  16 Aug 2022 ",
  //     "bookStockDetails":"Available",
  //     "aboutbook":"Former Super Bowl MVP quarterback Zach Bridger hasn't seen his ex-wife, Rebecca Pratt, for some time--not since their volatile marriage imploded--so he's shocked to receive a life-altering call about her. Rebecca has been placed on life support after a violent assault, and he--despite their divorce--has medical power-of-attorney. Zach is asked to make an impossible choice: keep her on life support or take her off of it. Buckling under the weight of the responsibility and the glare of public scrutiny, Zach ultimately walks away, letting Rebecca's parents have the final say.Four years later, Rebecca's attacker, Eban--the scion of a wealthy family in Atlanta--gets an early release from prison. The ludicrous miscarriage of justice reeks of favoritism, and Kate Lennon, a brilliant state prosecutor, is determined to put him back behind bars. Rebecca's parents have kept her alive all these years, but if her condition were to change--if she were to die--Eban could be retried on a new charge: murder.It isn't lost on Zach that in order for Eban to be charged with Rebecca's murder, Zach must actually be the one to kill her. He rejects Kate's legal standpoint but can't resist their ill-timed attraction to each other. Eban, having realized the jeopardy he's in, plots to make certain that neither Zach nor Kate lives to see the death of Rebecca--and the end of his freedom. ",
  //     "aboutAuthor":" Sandra Brown is the author of seventy-three New York Times bestsellers. There are more than eighty million copies of her books in print worldwide, and her work has been translated into thirty-four languages. Four of her books have been made into films. In 2008, the International Thriller Writers named Brown its Thriller Master, the organization's highest honor. She has served as president of Mystery Writers of America and holds an honorary doctorate of humane letters from Texas Christian University. She lives in Texas.",
  //   },
  //   {
  //     "name":"War of Lanka",
  //     "author":"Amish Tripathi",
  //     "bookImage":"book25.jpeg",
  //     "bookPrize":"$ 352.00",
  //     "orginalBookPrize":"$ 495.00",
  //     "publisher":"HarperCollins India",
  //     "relesedDate":" 3 October 2022  ",
  //     "bookStockDetails":"Available",
  //     "aboutbook":"Greed. Rage. Grief. Love. Smouldering Tinder, Waiting To Trigger A War.But This War Is Different. This One Is For Dharma. This War Is For The Greatest Goddess Of Them All.Sita Has Been Kidnapped. Defiantly, She Dares Raavan To Kill Her - She'd Rather Die Than Allow Ram To Surrender.Ram Is Beside Himself With Grief And Rage. He Prepares For War. Fury Is His Fuel. Calm Focus, His Guide.Raavan Thought He Was Invincible. He Thought He'd Negotiate And Force A Surrender. Little Did He Know ...The First Three Books Of The Second-fastest-selling Book Series In Indian Publishing History - The Ram Chandra Series - Explore The Individual Journeys Of Ram, Sita And Raavan. In This, The Epic Fourth Book Of The Series, Their Narrative Strands Crash Into Each Other, And Explode In A Slaughterous War.Will Ram Defeat The Ruthless And Fiendish Raavan, Constrained As He Is By The Laws Of Dharma Will Lanka Burn To A Cinder Or Fight Back Like A Cornered Tiger Will The Terrible Costs Of War Be Worth The Victory. ",
  //     "aboutAuthor":"Amish is a 1974-born, IIM (Kolkata)-educated banker-turned-author. The success of his debut book, The Immortals of Meluha (Book 1 of the Shiva Trilogy), encouraged him to give up his career in financial services to focus on writing. Besides being an author, he is also an Indian-government diplomat, a host for TV documentaries, and a film producer. Amish is passionate about history, mythology and philosophy, finding beauty and meaning in all world religions. His books have sold more than 6 million copies and have been translated into over 20 languages. His Shiva Trilogy is the fastest selling and his Ram Chandra Series the second fastest selling book series in Indian publishing history. You can connect with Amish here: ",
  //   },
  //       {
  //       "name":"Something I Never Told You",
  //       "author":"Shravya Bhinder",
  //       "bookImage":"book76.webp",
  //       "bookPrize":"$ 167.00",
  //       "orginalBookPrize":"$ 280.00",
  //       "publisher":" Penguin ",
  //       "relesedDate":" 14 February 2019  ",
  //       "bookStockDetails":"Available",
  //       "aboutbook":"When in love, you tend to take each other for granted, and sometimes, that can cost you a lifetime of togetherness . . .Ronnie knew that his first crush was way out of his league, and yet he pursued and wooed Adira. Shyly and from a distance in the beginning, and more persuasively later. He couldn't believe it when the beautiful Adira actually began to reciprocate, falling in love with him for his simplicity and honesty. Slowly, as they get close and comfortable with each other, life takes on another hue. From truly magical it becomes routine. There are fights and then making-up sessions-a clash of egos and doubts.Things begin to change for the worst.It is too late.Ronnie and Adira will probably never find their forever after . . .",
  //       "aboutAuthor":"Shravya loves to find hidden stories around her and write novels about them. Formerly a corporate employee, she managed to flee the madness after a few years of boredom to become a full-time writer. She is a sucker for romance and strives to pen down exciting stories.When she is not reading and writing, she is out enjoying nature, playing with her dogs or cooking for her family.She lives in Melbourne with her family, in a house with a barren backyard and a lifetime's collection of books.",
  //     }

  // ]
  under400: Array<any> = this.bookService.getBooksPriceBetween(0, 200, true);
  under200 :  Array<any> = this.bookService.getBooksPriceBetween(200,400, true);
  comboOffer: Array<any> = this.bookService.getBooksByCategory("combo", true);
  

}
