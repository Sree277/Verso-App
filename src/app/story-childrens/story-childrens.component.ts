import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-childrens',
  templateUrl: './story-childrens.component.html',
  styleUrls: ['./story-childrens.component.css']
})
export class StoryChildrensComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  books: Array<any> = [
    {
      "name":"Grandma's Bag of Stories",
      "author":"Sudha Murty",
      "bookImage":"book187.jpg",
      "bookPrize":"$ 150.00",
      "orginalBookPrize":"$ 180.00",
      "publisher":" stories entertain ",
      "relesedDate":"01 Jan 2015   ",
      "bookStockDetails":"Available",
      "aboutbook":"Who can resist a good story, especially when it's being told by Grandma? From her bag emerges tales of kings and cheats, monkeys and mice, bears and gods. Here comes the bear who ate some really bad dessert and got very angry; a lazy man who would not put out a fire till it reached his beard; a princess who got turned into an onion; a queen who discovered silk, and many more weird and wonderful people and animals.Grandma tells the stories over long summer days and nights, as seven children enjoy life in her little town. The stories entertain, educate and provide hours of enjoyment to them. So come, why don't you too join in the fun? ",
      "aboutAuthor":"About the Author: Sudha Murty was born in 1950 in Shiggaon, north Karnataka. She did her MTech in computer science, and is now the chairperson of the Infosys Foundation. A prolific writer in English and Kannada, she has written novels, technical books, travelogues, collections of short stories and non-fiction pieces, and six bestselling books for children. Her books have been translated into all the major indian languages. Sudha Murty is the recipient of the R.K. Narayan Award for Literature (2006), the Padma Shri (2006) and the Attimabbe Award from the Government of Karnataka for excellence in Kannada literature (2011).",
     
    },
    {
      "name":"Go Away You Bully And Stronger",
      "author":"KIRAN AGARWAL",
      "bookImage":"book188.webp",
      "bookPrize":"$ 289.00",
      "orginalBookPrize":"$ 340.00",
      "publisher":"Woka Creations Private Limited  ",
      "relesedDate":" 29 june 2022  ",
      "bookStockDetails":"Available",
      "aboutbook":"GO AWAY YOU BULLY- Black and White are two nasty bullies who bully everyone in school. They steal their lunch and push them around. Adi and his pals decide to do something about it. They go to the wise sage Piku Baba and ask him for help.What secret does Piku Baba aive them to teach Black and White a lesson? Do their bullying ways stop? And are Adi and gang successful in stopping them? Read this fun story to find out. AND STONGER TOGETHER - Chanchu the ant is very upset. Romie the grasshopper has been bothering her and her ant family. But what can she do? Ants are So small. And romie is so big ! Adi and his pals come to Chanchu's rescue. They give her an idea that will help teach that nasty Romie a lesson. But does the idea work? And does Chanchu manage to stop Romie's irritating ways? Jump into the pages of this fun story to find out. Each of Granny stories and each volume is complete in itself and can be enjoyed in no particular order.",
      "aboutAuthor":" Stories with Morals written by Kiran Agarwal takes us into her beautiful World Of Kiran Agarwal where Nani rules and animals sing, dance and have lots of fun.The book was delivered before time.And the awesome part is that my nephew Ajay simply can’t get enough of Adi, Humpy, Gorgy and all the other wonderful characters in Woodworld Jungle.",
    
    },
    {
      "name":"Diary of a Wimpy Kid: Rodrick Rules",
      "author":"Jeff Kinney",
      "bookImage":"book189.jpg",
      "bookPrize":"$ 266.00 ",
      "orginalBookPrize":"$ 340.00",
      "publisher":" Penguin Books Ltd ",
      "relesedDate":"  05 Jan 2009",
      "bookStockDetails":"Available",
      "aboutbook":"Diary of a Wimpy Kid: Rodrick Rules is a children's novel by American author and cartoonist Jeff Kinney, based on the FunBrain.com version. It is the sequel to Diary of a Wimpy Kid, followed by The Last Straw. The hardcover was released on February 1,",
      "aboutAuthor":"Jeff Kinney was born in Maryland, USA, in 1971, and is an author. Apart from writing children’s books, he is also a producer, cartoonist and game designer. Jeff Kinney has written a number of books in the Wimpy Kid series, some of them being Diary of a Wimpy Kid: The Last Straw, Diary of a Wimpy Kid: The Ugly Truth, Diary of a Wimpy Kid: Cabin Fever, Diary of a Wimpy Kid: Hard Luck and Diary of a Wimpy Kid: The Third Wheel. Jeff Kinney studied at the Bishop McNamara High School, and then at the University of Maryland, College Park. He developed a comic strip when he was in college called, Igdoof. He currently lives in Massachusetts with his wife and two children.",
    },
    {
      "name":"101 Moral Stories for Children",
      "author":" Om Books Editorial Team",
      "bookImage":"book191.jpg",
      "bookPrize":"$ 162.00",
      "orginalBookPrize":"$ 246.00",
      "publisher":" Om Books Editorial Team  ",
      "relesedDate":"25 Jun 2021   ",
      "bookStockDetails":"Available",
      "aboutbook":"Morals and values are the need and call of cultures? ?and societies across nations. Thought provoking? ?and layered with deep meaning, this brilliantly? ?illustrated collection of moral Stories? ?inspires the? ?child to decide what is good and what is not.? ?a must-have in your collection!.Morals and values are the need and call of cultures​ ​and societies across nations. Thought provoking​ ​and layered with deep meaning, this brilliantly​ ​illustrated collection of moral Stories​ ​inspires the​ ​child to decide what is good and what is not.​ ​a must-have in your collection!.    ",
      "aboutAuthor":"  Om Books Editorial Team Discover more of the author’s books, see similar authors, read author blogs and more As the child reads the 101 Moral Stories, they realise that goodness always prevails over evil, and that, as human beings they should be kind, truthful, honest and helpful to all. The book also contains life lessons about avoiding strangers, flattery and deceit.",
    },
    {
      "name":"All-Time Favourites for Children",
      "author":"Ruskin Bond",
      "bookImage":"book190.webp",
      "bookPrize":"$ 180.00",
      "orginalBookPrize":"$ 230.00",
      "publisher":" Puffin ",
      "relesedDate":"21 May 2021   ",
      "bookStockDetails":"Available",
      "aboutbook":"All Time Favourites for Children celebrates Ruskin Bond's writing with stories that are perennially loved and can now be enjoyed in a single collectible volume. Curated and selected by India's most loved writer, this collection brings some of the evocative episodes from Ruskin's life, iconic Rusty, eccentric Uncle Ken, ubiquitous grandmother, and many other charming, endearing characters in a single volume while also introducing us to a smattering of new ones that are sure to be firm favourites with young readers. Heart-warming, funny and spirited, this is a must-have on every bookshelf!A collection of Ruskin Bond's best stories with endearing characters--hand-picked by the author himself.",
      "aboutAuthor":"Ruskin Bond, born in Kasauli in 1934, grew up in Jamnagar, Dehradun, New Delhi and Shimla. His first novel, The Room on the Roof, which was written when he was seventeen, received the John Llewellyn Rhys Memorial Prize in 1957. Since then he has written over 500 short stories, essays and novellas (including Vagrants in the Valley and A Flight of Pigeons) and more than forty books for children. He received the Sahitya Akademi Award for English writing in India in 1992, the Padma Shri in 1999, the Delhi government's Lifetime Achievement Award in 2012 and Padma Bhushan in 2014 for his contribution to literature.Ruskin lives in Landour, Mussoorie, with his extended family. ",
    },
    {
      "name":"Secret Key ",
      "author":"Lena Jones",
      "bookImage":"book192.jpg",
      "bookPrize":"$ 600.00",
      "orginalBookPrize":"$ 670.00",
      "publisher":" HarperCollins Publishers ",
      "relesedDate":" 28 Jun 2018  ",
      "bookStockDetails":"Available",
      "aboutbook":"Meet thirteen-year-old Agatha Oddly - a bold, determined heroine, and the star of a stylish new detective series.Meet thirteen-year-old Agatha Oddly – a bold, determined heroine, and the star of a stylish new detective series. Agatha Oddlow has been a detective for as long as she can remember – she’s just been waiting for her first big case. And nothing gets bigger than saving the City of London from some strange goings-on",
      "aboutAuthor":"HarperCollins and Tibor Jones – a new boutique packager – have developed the series with a talented team of new writers, who work collaboratively with a creative and dynamic approach echoing the TV script writing model. Agatha Oddly will be published under the fictional author name Lena Jones.",
    },
    {
      "name":"Favourite Stories of Courageous Girls",
      "author":"L.M. Montgomery , Enid Blyton, E. Nesbit ,Brothers Grimm ",
      "bookImage":"book193.jpg",
      "bookPrize":"$ 542.00",
      "orginalBookPrize":"$ 739.00",
      "publisher":"  Hachette Children'S Group ",
      "relesedDate":" 07 Apr 2020  ",
      "bookStockDetails":"Available",
      "aboutbook":"This wonderful anthology features the stories of some of the best-loved heroines in children's books. From Jo March who sells her hair to raise money for her family, to George's single-minded commitment to protecting her island in The Famous Five to Bobbie's quick-thinking action that prevents a train crash in The Railway Children, these girls demonstrate courage beyond their years.Each of the 24 chapters contains an introduction about the courageous girl featured and a satisfying extract from the original book. These fictional heroines will inspire young readers with their stories of expectations defied, fears faced and obstacles overcome. This collection is also bound to tempt readers to discover these classic novels for themselves.Classic novels featured include Little Women, Anne of Green Gables, Five on a Treasure Island, The Railway Children, Jane Eyre, A Little Princess, Pollyanna and The Wizard of Oz, as well as beloved fairy tales from diverse cultures such as The Snow Queen, Kate Crackernuts and White Chrysanthemum.",
      "aboutAuthor":"By: L.M. Montgomery (Author) , Enid Blyton (Author) , L. Frank Baum (Author) , E. Nesbit (Author) , Brothers Grimm (Author)Each of the 24 chapters contains an introduction about the courageous girl featured and a satisfying extract from the original book. These fictional heroines will inspire young readers with their stories of expectations defied, fears faced and obstacles overcome. This collection is also bound to tempt readers to discover these classic novels for themselves.",
    },
    {
      "name":"The Magic of the Lost Temple",
      "author":" Sudha Murty ",
      "bookImage":"book194.webp",
      "bookPrize":"$ 270.00",
      "orginalBookPrize":"$ 336.00",
      "publisher":" Pegasus Books ",
      "relesedDate":" 1 January 2019  ",
      "bookStockDetails":"Available",
      "aboutbook":"Here is a rich set of classic tales cherry-picked and abridged for little readers. This beautifully illustrated collector's edition of classics brings together enduring characters in stories full of adventure, comedy, wit, mystery and drama. From the well-known tales of Tom Sawyer and Huck Finn to heart-wrenching true story of Anne Frank, this book has been compiled to give children a taste of timeless stories that have been read by generations of avid readers throughout the world. With more than 120 wonderful, bright and colourful illustrations that bring these stories to life, classic stories for children will be a treasured addition to every child's little library. Here is a rich set of classic tales cherry-picked and abridged for little readers. This beautifully illustrated collector's edition of classics brings together enduring characters in stories full of adventure, comedy, wit, mystery and drama. From the well-known tales of Tom Sawyer and Huck Finn to heart-wrenching true story of Anne Frank, this book has been compiled to give children a taste of timeless stories that have been read by generations of avid readers throughout the world. With more than 120 wonderful, bright and colourful illustrations that bring these stories to life, classic stories for children will be a treasured addition to every child's little library. ",
      "aboutAuthor":"B. Jain Publishing Group started publishing Children Books in 2008 with brand new imprint Pegasus. With more than 2000 books in print and over 200 new titles added every year Pegasus is one of the largest independent children books publisher in the world. Pegasus has been focused on providing excellent quality reading and learning material for children aged 0+ years to 12 + years. With famous and award winning series including Read and Shine and Pegasus Encyclopaedias it has become a household name in many countries. Pegasus Books have been translated in more than 30 languages and are actively sold across the globe. ",
    },
    {
      "name":"Magical Mythology",
      "author":"Stuti Gupta ",
      "bookImage":"book195.webp",
      "bookPrize":"$ 193.00",
      "orginalBookPrize":"$ 228.00",
      "publisher":" Srishti Publishers & Distributors ",
      "relesedDate":"  10 November 2020 ",
      "bookStockDetails":"Available",
      "aboutbook":"Ever wondered how baby Rama got the moon to play with? And how little Krishna defeated a big, black snake to get his ball. Hanuman and Ganesha are also up to something adventurous. Join these little heroes as they swing between being naughty, heroic, curious, creative and thoroughly entertaining. In Magical Mythology, we have put together more than twenty fascinating and unheard of stories from the rich Indian mythology. The stories will amaze you, amuse you and will leave you wanting to read more. You will also find in the book: ° Beautiful illustrations ° Word games and puzzles ° Creative activities ° Colouring pages ° Life lessons at the end of stories ° Lots of fun",
      "aboutAuthor":"Stuti Gupta has been a storyteller all her life. Digging out tales from everyday life, history, mythology and folk traditions is her forte. She has earlier introduced 101 Best Indian Fables for Children and compiled Popular Indian Fairy Tales, which have been loved and appreciated by thousands of readers. ",
    },
    {
      "name":"Brain Games for Clever Kids",
      "author":"Gareth Moore ",
      "bookImage":"book196.jpg",
      "bookPrize":"$ 422.00",
      "orginalBookPrize":"$ 570.00",
      "publisher":"  Michael O'Mara Books",
      "relesedDate":" 01 Oct 2014  ",
      "bookStockDetails":"Available",
      "aboutbook":"The perfect companion for vacation, this collection contains more than 90 puzzles, including memory, word, and number workouts; codes; battleships; and mind-bending spot-the-differences. There are hours of fun to be had with Japanese puzzles, including hanjie, kakuro, hitori, sudoku, and lots more. Let the brain games begin.",
      "aboutAuthor":" Gareth Moore is the author of a wide range of brain-training and puzzle books for both children and adults, including The Kids' Book of Sudoku! and The Mammoth Book of Brain Work.",
    },
    {
      "name":" Amazing Questions & Answers Science",
      "author":"Om Books Editorial Team ",
      "bookImage":"book197.jpg",
      "bookPrize":"$ 149.00",
      "orginalBookPrize":"$ 260.00",
      "publisher":" Om Books International ",
      "relesedDate":" 25 November 2018  ",
      "bookStockDetails":"Available",
      "aboutbook":"What makes glue stick things? Why is Butter usually Yellow? Answer your children’s Hows, Whys, Whats and Whens about Science with this unique amazing questions and answers volume.This book satisfies the curiosity of a child by supplying answers to questions on various topics of science. It reveals the mysteries of the world of wonders.This book nurtures the creativity and imagination of a child by feeding him answers to questions that are valuable and unique. Exposure to new information assists in the development of cognitive skills as well as critical thinking skills.",
      "aboutAuthor":"Discover more of the author’s books, see similar authors, read author blogs and moreThis book nurtures the creativity and imagination of a child by feeding him answers to questions that are valuable and unique. Exposure to new information assists in the development of cognitive skills as well as critical thinking skills. ",
    },
    {
      "name":" Timeless Tales from Panchatantra",
      "author":"Om Books Editorial Team ",
      "bookImage":"book199.jpg",
      "bookPrize":"$ 228.00",
      "orginalBookPrize":"$ 370.00",
      "publisher":"Om Books Editorial Team   ",
      "relesedDate":" 4 January 2015  ",
      "bookStockDetails":"Available",
      "aboutbook":"The Panchatantra is a collection of ancient Indian fables. Many-a-times, the central characters are animals and birds, who show their most identifying characteristics in the various stories, and impart valuable life-lessons and morals. In this book, read a fine selection of six stories from the treasury of Panchatantra tales. Read about the three little fish friends, one wise, one smart and one foolish; about silly monkeys who thought they could light a fire with red berries and more!.",
      "aboutAuthor":"Discover more of the author’s books, see similar authors, read author blogs and moreThe animals in the stories possess human characteristics, such as, greed, loneliness, compassion, hatred, perseverance and more. The stories leave a concrete impact upon the minds of the children by teaching them moral lessons. ",
    },
    {
      "name":"200+ Activities for Kids",
      "author":"Maple Press ",
      "bookImage":"book198.jpg",
      "bookPrize":"$ 100.00",
      "orginalBookPrize":"$ 149.00",
      "publisher":"  Maple Press Pvt Ltd",
      "relesedDate":" 1 September 2021  ",
      "bookStockDetails":"Available",
      "aboutbook":"The 200+ activities book is ideal to introduce math, language and logic to preschoolers. The colourfully illustrated pages have been designed in a creative manner to teach a variety of skills through fun-filled activities and puzzles and promises to keep your child engaged in hours of learning. Let the fun begin!",
      "aboutAuthor":"Maple Press is an independent family-run book publishing house launched in 2014 to inspire, inform, and excite the children of today and the future and develop children’s literature by publishing high-quality, affordable books in print, electronic and audio formats.The current catalogue has over 1000+ titles consisting of yesteryear classics, illustrated storybooks of folklore, mythology, and history depicted in new and contemporary formats, beginner’s writing books, picture books, colouring books, activity books, biographies, and complete book sets for pre-primary schools.Maple Press supports various charities, including Share-a-book India, Awaaz Foundation and Thinksharp Foundation and has donated tens of thousands of books to help improve literacy and promote reading in India. ",
    },
    {
      "name":"Around the World in 80 Days",
      "author":" Jules Verne ",
      "bookImage":"book201.webp",
      "bookPrize":"$ 210.00",
      "orginalBookPrize":"$ 290.00",
      "publisher":"Om Books International  ",
      "relesedDate":" 1 January 2011  ",
      "bookStockDetails":"Available",
      "aboutbook":"A fastidious Englishman, Phileas Fogg, puts his life?s savings at stake, claiming he can travel around the world in just eighty days. Thus begins his fantastic journey, full of excitement and a great deal of risk. Phileas Fogg and his servant, Passe-partout visit many foreign lands, exotic and beautiful. Amidst all the excitement is a case of mistaken identity, which has a Scotland Yard detective hot at their heels! Will Phileas Fogg lose the bet? Will he be put behind bars for robbing a Bank? Read on to find out.",
      "aboutAuthor":"Jules Gabriel Verne was born in France in 1828 and was destined to follow his father into the legal profession. He trained for the bar in Paris but took more readily to literary life, befriending Dumas and Hugo, and making his living by writing librettos. His first science-based novel, Five Weeks in a Balloon, was published in 1862 and made him famous. Verne went on to write dozens more such adventures, including Around the World in Eighty Days (1872). In later life, he entered local politics at Amiens, where he had a home, and also lived in Paris, in the street now named Boulevard Jules Verne. He died in 1905.",

    },
    {
      "name":"Festival Stories",
      "author":"Rachna Chhabria ",
      "bookImage":"book202.webp",
      "bookPrize":"$ 190.00",
      "orginalBookPrize":"$ 299.00",
      "publisher":"Harper Children's  ",
      "relesedDate":" 5 November 2018  ",
      "bookStockDetails":"Available",
      "aboutbook":"India is a country of myriad festivals! Not a month goes by in which we don't have something to celebrate. This book invites you to rejoice in India's rich culture through the simple stories of two young twins, Natasha and Nikhil, as they experience an entire year of festivals and celebrations - starting with Lohri in January and ending with Christmas in December!The detailed descriptions and wealth of detail about each festival that Natasha and Nikhil record in their blog and journal will make this a book to treasure and return to every time a festival comes by. So come celebrate with us!",
      "aboutAuthor":"Rachna Chhabria is the author of Lazy Worm Goes on a Journey, The Lion Who Wanted to Sing and Bunny in Search of a Name. Her short story 'Ganesh's Blanket of Stars' won the Special Prize in the Unisun-Reliance TimeOut Writing Competition, 2010-11.",
    },
    {
      "name":"Penguin ",
      "author":"Om Books Editorial Team ",
      "bookImage":"book200.jpg",
      "bookPrize":"$ 90.00",
      "orginalBookPrize":"$ 125.00",
      "publisher":"  Om Books International",
      "relesedDate":" 24 August 2015  ",
      "bookStockDetails":"Available",
      "aboutbook":"Let kids discover the joy of reading fairy tales and find out interesting fairy tale characters from different places of the world, through these cutely illustrated, little cut-out board books. .This Board Book is easy to handle and can withstand repeated rough reads. The exceptional production makes it a great value for time and money. ",
      "aboutAuthor":"Om Books Editorial Team It is written in easy language for the kids to comprehend. Full of fascinating illustrations, they instill reading habit in a child, especially before it is time to sleep. ",
    },
    {
      "name":"Tales from the World ",
      "author":" Geeta Ramanujam",
      "bookImage":"book203.jpg",
      "bookPrize":"$ 330.00",
      "orginalBookPrize":"$ 350.00",
      "publisher":" Puffin ",
      "relesedDate":"24 January 2022   ",
      "bookStockDetails":"Available",
      "aboutbook":"Collected from storytellers on snow-capped mountains, and in eerie forests, opulent palaces and countries near and far, the captivating folk tales in this book have mesmerized generations.Injected with freshness, mystery, adventure and magic, Geeta Ramanujam retells her all-time favourite stories with a song here and a twist there.Travel along with this imaginative storyteller as she shares peculiar myths and incredible trivia from around the world in this magnificently illustrated volume of twenty tales from Russia, Japan, France, Tibet, India, Korea, Scotland and more. ",
      "aboutAuthor":"Geeta Ramanujam is a master storyteller, trainer, founder and executive director of Kathalaya's International Academy of Storytelling and Kathalaya Trust. She is also an academician and administrator with twenty-three years of experience in storytelling. A pioneer of the storytelling movement in India, Geeta has defined and evolved the ancient art of storytelling through workshops and certified courses, covering over 93,491 adults and 5,00,000 children so far. Geeta has travelled to forty-three countries and twenty-seven states in India to groom professional tellers, all the while sowing seeds of storytelling around the world for the last forty years.Kathalaya's International Academy of Storytelling is the only globally recognized academy for storytelling in the world with accredited courses affiliated to USA, Scotland and Sweden. Geeta has trained and completed 172 batches of the certified beginners and diploma courses as of December 2021. Geeta is an Ashoka Fellow and has won several accolades for storytelling, including the Best Story Narrator award from the Governor of Tamil Nadu and the Boca do Céu-Encontro Internacional de Contadores de Histórias Storyteller Award in Brazil. Kathalaya was also listed in the Limca Book of Records for having organized the first international storytelling festival in India in 2005.",
    }

  ]

}
