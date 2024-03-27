
    const allJokes =[
      {
        type: "general",
        setup: "Why can't bicycles stand on their own?",
        punchline: "They are two tired",
        url: "https://placekitten.com/319/200", alt: "Ram Ram Bhai Sabko!..."
      },
      {
        type: "GK",
        setup: "How does a train eat?",
        punchline: "It goes chew, chew",
        url: "https://placekitten.com/318/200", alt: "Namaste IndiaWalo!..."
      },
      {
        type: "Kya App Jante Hai?",
        setup: "What do you call a singing Laptop?",
        punchline: "A Dell",
        url: "https://placekitten.com/317/200", alt: "Keep Smiling always!..."
      },
      {
        type: "Gardener",
        setup: "How many lips does a flower have?",
        punchline: "Tulips",
        url: "https://placekitten.com/316/200", alt: "Try Again Later!..."
      },
      {
        type: "general",
        setup: "How do you organize an outer space party?",
        punchline: "You planet",
        url: "https://placekitten.com/315/200", alt: "Boss Is Always Right!..."
      },
      {
        type: "Criminal Mind",
        setup: "What kind of shoes does a thief wear?",
        punchline: "Sneakers",
        url: "https://placekitten.com/314/200", alt: "Kya Samjhe Tussi!..."
      },
      {
        type: "Saaf Safai",
        setup: "What's the best time to go to the dentist?",
        punchline: "Tooth hurty.",
        url: "https://placekitten.com/313/200", alt: "Lagey Raho!..."
      },
      {
        type: "knock-knock",
        setup: "Knock knock. \n Who's there? \n A broken pencil. \n A broken pencil who?",
        punchline: "Never mind. It's pointless.",
        url: "https://placekitten.com/312/200", alt: "Haa Bhai Saab!..."
      },
      {
        type: "Dastak By Cows",
        setup: "Knock knock. \n Who's there? \n Cows go. \n Cows go who?",
        punchline: "No, cows go moo.",
        url: "https://placekitten.com/311/200", alt: "Developer Code!..."
      },
      {
        type: "knock-knock",
        setup: "Knock knock. \n Who's there? \n Little old lady. \n Little old lady who?",
        punchline: "I didn't know you could yodel!",
        url: "https://placekitten.com/310/200", alt: "Golmaal Reloaded!..."
      },
      {
        type: "programming",
        setup: "What's the best thing about a Boolean?",
        punchline: "Even if you're wrong, you're only off by a bit.",
        url: "https://placekitten.com/309/200", alt: "Welcome Veerey!..."
      },
      {
        type: "programming",
        setup: "What's the object-oriented way to become wealthy?",
        punchline: "Inheritance",
        url: "https://placekitten.com/308/200", alt: "Teri Sau!..."
      },
      {
        type: "{Picnic Wali Baat",
        setup: "Where do programmers like to hangout?",
        punchline: "The Foo Bar.",
        url: "https://placekitten.com/307/200", alt: "Chal Mera Putt!..."
      },
      {
        type: "programming",
        setup: "Why did the programmer quit his job?",
        punchline: "Because he didn't get arrays.",
        url: "https://placekitten.com/306/200", alt: "Chakle Yara!..."
      },
      {
        type: "general",
        setup: "Did you hear about the two silk worms in a race?",
        punchline: "It ended in a tie.",
        url: "https://placekitten.com/305/200", alt: "Ki Haall!..."
      },
      {
        type: "general",
        setup: "What do you call a laughing motorcycle?",
        punchline: "A Yamahahahaha.",
        url: "https://placekitten.com/304/200", alt: "Sabr Karo!..."
      },
      {
        type: "general",
        setup: "A termite walks into a bar and says...",
        punchline: "'Where is the bar tended?'",
        url: "https://placekitten.com/302/200", alt: "Chaddo Ji!..."
      },
      {
        type: "general",
        setup: "What does C.S. Lewis keep at the back of his wardrobe?",
        punchline: "Narnia business!",
        url: "https://placekitten.com/303/200", alt: "Avadey!..."
      },
      {
        type: "programming",
        setup: "Why do programmers always mix up Halloween and Christmas?",
        punchline: "Because Oct 31 == Dec 25",
        url: "https://placekitten.com/301/200", alt: "Dekhlengey!.."
      },
      {
        type: "test",
        setup: "Try For Testing Purpose?",
        punchline: "Todays Lunch",
        url: "https://placekitten.com/300/200", alt: "kya hua!.."
      }
    ];   



    // const imageUrls = [
    //     ,
    //     { " },
    //     {  },
    //     {  },
    //     {  },
    //     {  },
    //     {  },
    //     {  },
    //     {  },
    //     {  },
    //     {  },
    //     {  },
    //     {  },
    //     {  },
    //     {  },
    //     {  },
    //     {  },
    //     {  },
    //     {  },
    //     {  },
    // ];
    








    function getJoke(){

    let jokeIndex=Math.floor(Math.random() * allJokes.length);
    let showJoke=allJokes[jokeIndex];
    let jokeType=document.querySelector('.joke-type').innerHTML=showJoke.type;
    let jokeDesc=document.querySelector('.joke-desc').innerHTML=showJoke.setup;
    let jokePunch=document.querySelector('.joke-punchline').innerHTML=showJoke.punchline;
    let jokeImg=document.querySelector('#joke-img').src=showJoke.url;
    console.log(jokeImg);

    }




  