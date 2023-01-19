import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.css']
})
export class NewArrivalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  books: Array<any> = [
    {
      "name":"The Challenge",
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
  ]

}
