import Card from "../components/Events/card";
import Head from "next/head";

export default function Events() {
  // "https://mdbootstrap.com/img/new/standard/nature/184.jpg"
  // add margin top of 16 px to compensate for the navbar
  return (
    <>
      <Head>
        <title> Events | Pantheon 2022</title>
      </Head>
      <div className="mt-16 pb-8 min-h-[calc(100vh-4rem)] h-max text-white bg-neutral-900">
        {
          // This is the Card Container,
          // Copy this as a wrapper to the card component
          // use regurl to add the url ex-
          // <Card regurl="https://forms.google.com/" ... />
        }

        <div className="sm:text-5xl text-4xl pt-8 text-gray-100 uppercase text-center font-bold">
          Flagship Events
        </div>
        <div className="sm:text-4xl text-3xl pt-8 text-gray-100 uppercase text-center">
          POINTS : (250 - 200 - 150)
        </div>
        <div className="pt-8 flex flex-row flex-wrap justify-evenly gap-y-8">
          <Card
            imgsrc="/posters/codezilla.jpeg"
            name="Codezilla"
            tsize="2"
            coordinators="1.Ratul (6376819421), 2. Naman (9334717700)"
            club="ACM BIT Mesra"
            venue="R&D building"
            regurl="https://forms.gle/qa5JgNVhcCP1LsgZ7"
            datetime="15/10/2022 2:00 PM - 5:00PM"
            desc="This is a relay styled programming contest in which contestants have
          to participate in teams of two. Each team will be given a set of questions and at a time
          only one of the team members will be allowed to view andsolve the question. After fixed
          time intervals the teammates will be switched. Teams will be ranked according to the
          most problems solved. Ties will be broken by the total time for each team in ascending
          order of time."
          />
          <Card
            imgsrc="/posters/droid.jpeg"
            name="Droid Trooper"
            tsize="4-5"
            coordinators="1. Hammad (88047 13497)
          2. Ansh (93264 39637)"
            club="Robolution"
            venue="IC"
            datetime="15/10/22 10:00 AM- 1.00 PM"
            desc="The teams have to build a manual robot (wired or wireless) which has to place
          the cubes at their respective destination points at different locations in the track after crossing
          different terrains which is divided into zones. The teams will be awarded points for the above
          task and also crossing the zones in the stipulated time limit."
          />
          <Card
            imgsrc="/posters/illum.jpeg"
            name="Illuminati"
            tsize="4-5"
            coordinators="1.Sauhard Suman (+918507035524)
          2.Dhruv(+917004794449)"
            club="Events Team"
            venue="LH 1"
            datetime="17/10/22 02:00 PM- 4:00 PM"
            desc="Paper Presentation, in its most unadulterated and genuine form comes to Pantheon
          in the form of Illuminati. To try and test your technical prowess, and provide you with a judgement of your
          presentation skills, Illuminati offers you the opportunity to present a research paper on a scientific theme.
          All you have to do prior to the presentation is submit your abstract and relevant information set. Illuminate
          and thou shalt pass."
          />
          <Card
            imgsrc="/posters/flashcode.jpeg"
            club="IEEE"
            name="Flashcode"
            regurl="https://docs.google.com/forms/d/e/1FAIpQLSd_-z38UxbZrdaVe5AIf143BG9b6571LnIULVMLrvzYASD89A/viewform"
            venue="LH"
            datetime="15/10/22 9:30AM - 1:00PM"
            tsize="1-2"
            coordinators="1. SarvjotSingh(7061508120)
        2. Rishika Raj (7004478436"
            desc="Can you learn different languages in a ‘FLASH’? Flex your programming skills
        in this contest and solve different questions in different languages. Points would be assigned to the language used and the individual questions. We do not expect you to know all these languages (It is a plus if you do), but to learn on the go to beat other contestants to the top."
          />

          <Card
            imgsrc="/posters/hfs.jpeg"
            name="Hatch from Scratch (300 - 250 - 200)"
            tsize="2-3"
            coordinators="1.Lakshya (7992372721)
          2.Rishav (9031737417)"
            club="IET & Idea Lab"
            venue="Idea Lab"
            datetime="11/10/22 - Preliminary round
          • 16/10/22 10:00 A.M. - 17/10/22 10:00 A.M. - Final round"
            desc="24 hours Offline hackathon where the teams can brainstorm, develop and
          launch ready-to-use prototypes. The teams are free to choose a project based on hardware,
          software, or both. Teams can make use of various types of equipment such as 3d printers, Laser
          cutters, diodes, etc to bring life to their projects. The event will be conducted in two rounds.
          • Round 1:
          It is a Preliminary round where the teams would have to present their ideas before the judges. Each
          team would be allotted a maximum of 15 mins for their idea presentation.
          • Round 2:
          The final round would have 8 top teams battling it out in an eventful 24-hour hackathon format to
          claim the top spots."
          />
          <Card
            imgsrc="/posters/cemento.jpeg"
            name="Cube De Cemento"
            regurl="https://forms.gle/ydNG6rvivJ7qMNba7"
            tsize="3-4"
            coordinators="1. Amit Kumar -7903662566
          2. Harsh Khokar 9116517499"
            club="IEI Civil"
            venue="Classroom 211 & Civil Dept Lab (Final)"
            datetime="16/10/22 , 11:30 – 12:30 (prelims) & 2:00PM – 4:00 PM(Final)"
            desc="The participants who clear prelims round which is a quiz round can go to second
          round in which they have to make a cube from the materials provided to them in the specified time.
          1. Prelims - A Simple Aptitude quiz will be conducted of 25 minutes in LH1.
          2. Finals - The contestant has to make a model of cube with the help of available resources like
          (Cement, sand, gravel, mortar, water, mould etc).Points will be awarded on the basis of durability
          of the cement."
          />
          <Card
            imgsrc="/posters/pquiz.jpeg"
            name="The Pantheon Quiz"
            tsize="2-3"
            coordinators="1. Jayant Krishna (+91 6205345955)"
            club="Events Team"
            venue="LH"
            datetime="15/10/2022 14:00-17:00"
            desc="The students will be taking part in a quiz based on science, technology
          and current affairs. The team shall comprise of 2 or 3 members at max.They will give a
          preliminary round from where the top 6 teams will proceed to the finals."
          />
        </div>

        <div className="sm:text-5xl text-4xl pt-8 text-gray-100 uppercase text-center font-bold">
          Formal Events
        </div>
        <div className="sm:text-4xl text-3xl pt-8 text-gray-100 uppercase text-center">
          POINTS : (125 - 100 - 75)
        </div>
        <div className="pt-8 flex flex-row flex-wrap justify-evenly gap-y-8">
          <Card
            imgsrc="/posters/captured.jpeg"
            club="IEEE"
            name="Captured"
            regurl={{ to: "http://20.235.248.90", title: "Link" }}
            venue="(Online)"
            datetime="16/10/22 10:00am"
            tsize="(1 - 3)"
            coordinators="1. Ashutosh Jawanpuria (9570061101)
          2. Shambhavi Singh (9835049071)
          3. Mayukh Pankaj (9024175580)"
            desc="Conquer the world in this Capture the Flag Competition. This event will
          consist of a series of challenges that vary in their degree of difficulty, and that require
          participants to exercise different skill sets to solve. The contestants would be required to solve
          these challenges to capture the ‘flags’. The challenges can be solved using programming / webconcepts
          and other hacking techniques. The long duration of this event promotes on-spot
          learning for contestants. Do you have what it takes to capture the countries and beat everyone
          around the clock?"
          />
          <Card
            imgsrc="/posters/codegolf.jpeg"
            name="Code Golf"
            tsize="1"
            coordinators="1.Shubhankar(7004591798) 2.Hardik(7061579443)"
            club="IET"
            regurl="https://forms.gle/ud7fbpS9gGQS9Y4s5"
            venue="Online"
            datetime="15th Oct 10:00PM - 12:00AM"
            desc="This will be an online event that will have the competitors battle it out in a coding competition where the challenger with the shortest code wins."
          />
          <Card
            imgsrc="/posters/dance.jpeg"
            club="DANCE CLUB"
            name="Razzmatazz"
            regurl="https://docs.google.com/forms/d/e/1FAIpQLSf6Pqp3qXfGQBQhR0yk9Ebhygy5t_9FDRVWP8bxw-Kk2ofG-Q/viewform?usp=sf_link"
            venue="GP Birla Auditorium"
            datetime="17TH OCTOBER 2022 4PM - 5PM"
            tsize=""
            coordinators="1. Akriti- 7544983031
        2. Vijeta - 7294150969"
            desc="Dance is a fully-fledged art form, belonging to the ‘performing arts’, a goal
        in itself and a means of allowing a human being to express his inner feelings, thoughts and
        experiences. Dance is a form of self-expression. So, the Dance Club presents to you,
        ‘Razzmatazz’. Where you can perform to yours heart’s content in solos and groups. Groups
        containing minimum of 2 and maximum of 5 participants."
          />

          <Card
            imgsrc="/posters/dimensions.jpeg"
            club="IETE"
            name="Dimensions"
            regurl="https://bit.ly/Dimensions-Pantheon22"
            venue="Classroom"
            datetime="15/10/22 - 2:00PM to 5:00pm"
            tsize="2-3"
            coordinators="1. Naman Jain (+91 70020 43430)
      2. Ankur Pandey (+91 62068 41016)"
            desc="The event shall be organized in three phases:-
      1st Round (Preliminary round)
      1. Estimated time around ½ hour (3:00 pm to 3:30 pm) on 15th October, 2022.
      2. Mode of conduct- offline/online (to be decided later)
      3. 10 teams qualify
      2nd Round (Treasure Hunt)
      1. Different hints lead into one
      2. Can involve basic electronic knowledge in this part
      3. Estimated time around 1 hour and ½ hour (11 am to 12:30 pm) on 16th October,2022.
      4. Top 5 teams qualify
      3rd Round (Final round)
      1. Involves coming up with a sensible pitch to a total wasted object design.
      4. Dimensions
      • Conducting Club - IETE Students’ Chapter BIT Mesra
      • Venue - Classroom
      • Date & Time - 15/10/22 - 11:00AM to 12:00pm15/10/22 - 2:00PM to 4:00pm
      2. Estimated time around 1 hour (12:30 pm to 1:30 pm) on 16th October, 2022.
      3. Top three teams wins."
          />

          <Card
            imgsrc="/posters/sirfexcel.jpeg"
            club="Finance Club and SDS"
            name="Sirf Excel"
            regurl="https://bit.ly/3fW0GHa"
            venue="Main Building"
            datetime="17/10/2022, 9:30 AM - 10:30 AM and 11:30AM - 12:30 PM"
            tsize="2-3"
            coordinators="1. Sakshat (8860953349)
    2. Mahak Shah (8905002991)"
            desc="An enthralling event about the most important tool
    in the financial world to undertake intense accounting and qualitative analysis, MS - Excel.
    1. It consists of two rounds.
    2. The first round will be an online quiz about the basics of Finance and Excel.
    3. The second round will be based on case studies of the financial world. It will beconducted
    in Hybrid Mode.
    4. Finalist in the second round will be given 10 minutes to present their case."
          />

          <Card
            imgsrc="/posters/mrmiss.jpeg"
            club="LEO CLUB & Event team"
            name="MR & MISS PANTHEON"
            regurl="https://forms.gle/TqmHLdhKxB2bvfo16"
            venue="GP Birla Hall"
            datetime="17th October, 6:30 PM to 7:30 PM."
            tsize="1-2"
            coordinators="1. Danish – 9462158925
  2. Divesh - 9608818149"
            desc="Participants will have to wear traditional attire innovatively, representing their folk.
  Also they have to write the caption explaining their dress up..!"
          />

          <Card
            imgsrc="/posters/cyber.jpeg"
            club="IEI Civil"
            name="Cyber-Bridgeton"
            regurl="https://docs.google.com/forms/d/e/1FAIpQLSeDdd3Kv9MzZme3xFFYkz14LQBBwQL3IoIS7xQeg3QNwykVDw/viewform"
            venue="R&D Building"
            datetime="17/10/2022 (02:00PM – 5:00PM)"
            tsize="2"
            coordinators="1. Siddhant Srivastava – 9555181139
  2. Monalisha Mondal - 9334701846"
            desc="An unparalleled opportunity for every science enthusiast to explore theworld of
  simulations and software designing under the veil of fun and fervour. On a computer, they will
  be playing a simulation game {Polybridge} and will design bridges that bring out the innovation
  and their knack of solving real-life problems. Levels will be increasing as they progress. The
  teams will be getting 2 wild cards to help themselves through in case they are stuck at some
  point."
          />

          <Card
            imgsrc="posters/Asta.jpg"
            club="SIME + SRIJAN"
            name="Asta Di Autos"
            regurl="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdGSffDiCVujfpfl-KIi3fL351el388-B9swdyRG31Ms3WBMQ/viewform?usp=send_form"
            venue="LH"
            datetime="17/10/2022 9:30am - 12:30 PM"
            tsize="2 -3"
            coordinators="1. Aditya Raj Choudhary: 7992353546
  2. Harsh Agarwal : 9931699521"
            desc="Test will conducted amongst the registered teams based on Aptitude and Automobilequestions.
          After the test top 6 teams will be selected for the second round.
          Round 2:
          The 2nd round is the Auction Round where the top 6 teams would have to bid. Every Team will be
          assigned with a particular amount of budget in the beginning. Teams will be bidding for various
          segments of a car like chassis, brakes, wheels, engines, transmission etc. "
          />

          <Card
            imgsrc="/posters/picw.jpeg"
            club="Photographic Society"
            name="Pic Wagon"
            venue="Classroom"
            datetime="15/10/2022, 2:00PM - 4:00 PM"
            tsize="3-4"
            coordinators="1. Abhishek Ghosh (98523 60345)
        2. Aditya Vijay Barari (75958 44539)"
            desc="A wagon wheel will be put up. The participants will have torotate it and click a picture of whatever is being asked. Participants will be allowed to move around the campus to get the pictures for a limited time.
        ● Rules and regulations
        1. Any device can be used for clicking the pictures
        2. Participants will be allowed a total time of two hours to get the pictures
        3. At the end of two hours, participants are to submit their entries withoutediting them
        4. Creative entries will be given more points
        5. Entries deemed offensive, obscene or vulgar would be disqualifiedimmediately"
          />
          <Card
            imgsrc="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
            club="IIChE"
            name="Chem-A-Thon"
            regurl="https://forms.gle/iZB2G6VPmo97TBSHA"
            venue="ClassRoom"
            datetime="16/10/2022 2:00 PM - 5:00 PM"
            tsize="3-4"
            coordinators="1. Devashish - 9334859543 2.Sneha- 8252144101"
            desc="The participants will be provided with a problem statement containing our
        day-to-day problems. The participants will have to solve the same and provide a model which solves the problem. The teams will have to demonstrate it at last which will lead to the declaration of the winners."
          />
          <Card
            imgsrc="/posters/journalist.jpeg"
            club="NAPS"
            name="The Journalist's Hour"
            regurl="https://docs.google.com/forms/d/e/1FAIpQLScpCuM7XF3XqeHbYI-ZV3E86KLBF8N9P3dF6H2EaWzez7lCVQ/viewform"
            venue="LH"
            datetime="16/10/2022, 9:30 A.M.-12:30 P.M."
            tsize="2-3"
            coordinators="Ajitesh (8825306484)
        Priya (9155374929) Snigdha (6206111457)"
            desc="● A journalism-based event consisting aof two rounds, with a team size of two tothree members.
        ● The prelims of ‘The Journalist’s Hour’ will be a case study round with teamsbeing divided into pools. Each pool will be provided with a case study, and all the teamsmust prepare a set of problem statements accordingly. The problem statements arethen to be swapped between groups of different pools. Reports clearly stating the solutionsto the allotted problem statements must be prepared and submitted. Teams with thebest problem statements and solutions qualify for the finals.
        ● The final round will be a panel discussion.
        ● The topic for the discussion will be allotted, and the participants will be judgedon parameters like content, presentation and rebuttal questions"
          />
          <Card
            imgsrc="/posters/xerolag.jpeg"
            club="Sports and Adventure Club"
            name="Xerolag"
            venue="RnD Building"
            datetime="15th October 2022 , 09:30"
            tsize="5 and 1 Substitute"
            regurl="https://forms.gle/uYNKeC8h5R6CBEdb9"
            coordinators="Suvigya (7903883292)"
            desc="All enrolled teams are invited for a 5v5 preliminary group stage wherein the rounds will be eliminatory in nature. Teams advancing from the group stages willcompete in the semi-finals and the grand finals where 3 matches on different maps will be held. A team will be eliminated after a three match spell.
        Use of any unfair means will result in complete disqualification.
        Participants are required to bring their own PCs, Mouse and other peripherals."
          />
          <Card
            imgsrc="/posters/kickoff.jpeg"
            club="Sports and Adventure Club"
            name="KickOff"
            venue="RnD Building"
            datetime="16th October 2022, 9:30 AM"
            tsize="1"
            coordinators="1.Varnit (9650480656) 2.Atul (6200814720)"
            desc="A preliminary group stage with elimination-style rounds is open to all registeredparticipants. Players that advance from the group stages will compete in the semi-finals andthe championship match, which will take place over three different arenas. After threematches, a player will be eliminated.
        Use of any unfair means will result in complete disqualification.
        Participants are required to bring their own Keyboard , Joystick and otherperipherals."
          />
          <Card
            imgsrc="/posters/investor.jpeg"
            club="Entrepreneurship Development Cell & Finance Club"
            name="Investor's Hat"
            regurl="https://bit.ly/InvestorsHat"
            venue="LH"
            datetime="16th Oct, 10:30AM - 1:00 PM"
            tsize="1-3"
            coordinators="Vaishnav Khare (+91 88153 40882)"
            desc="The participants will be allocated some virtual money and the teams and some candlestick
        patterns of random companies will be shown without telling the name of the company. The participating teams have to make judgments on the basis of candlestick patterns and make maximum profit."
          />
          <Card
            imgsrc="/posters/sherlocked.jpeg"
            club="SIME"
            name="SherLocked"
            regurl="https://docs.google.com/forms/d/e/1FAIpQLScqhDwujW9Wb215CEX6yXfM901FGDzAVlr65YYcb24-qkfb-A/viewform?usp=pp_url"
            venue="Classroom 209 and 233"
            datetime="16 Oct. 2:00 PM - 4:00 PM"
            tsize="3"
            coordinators="1. Aditya Raj Choudhary: 7992353546
        2. Rohit Pande : 8010984959 3. Harsh Sarve : 8291004078"
            desc="It's locked in Cage type of event. Where team members will be locked with benches inside the
        room using chains and locks. They will be provided it technical hint / codes in order to free
        themselves out of the room"
          />

          <Card
            imgsrc="/posters/padhai.jpeg"
            club="Society for Data Science"
            name=" Padhai Pe Charcha with Prateek Narag "
            regurl="https://forms.gle/KJ7wp4CZTDAxMmuR6"
            venue="Cat Hall"
            datetime="15 October, 2:30 - 4:30 PM"
            tsize="-"
            coordinators="1. Mollika (9810906498)
          2. Adirath (8473958230)"
            desc="exhilarating talk session on Internships and Placement featuring a very ace in the industry, Prateek Narang. Diverse subjects ranging from preparing for Tech-interviews to tricks to optimize learning process and maximizing productivity will be discussed. There will also be a quiz where you can stand a chance to win exciting goodies."
          />
        </div>

        <div className="sm:text-5xl text-4xl pt-8 text-gray-100 uppercase text-center font-bold">
          Informal Events
        </div>
        <div className="sm:text-4xl text-3xl pt-8 text-gray-100 uppercase text-center">
          POINTS : (75 - 60 - 45)
        </div>

        <div className="pt-8 flex flex-row flex-wrap justify-evenly gap-y-8">
          <Card
            imgsrc="/posters/gitout.jpeg"
            club="IET"
            name="Google-it-out"
            venue="Classrooms"
            datetime="15/10/22 10:00 AM - 12:00 PM"
            tsize="2-3"
            coordinators="1. Shubhankar (7004591798)
        2. Hardik (7061579443)"
            regurl="https://forms.gle/uwrSEvt3VxNg9Rc77"
            desc="The contestants will be shown multiple images and will be required to extract
        similar images in google image results by tweaking the search parameters. Teams would be
        ranked on the basis of images identified in the given time."
          />
          <Card
            imgsrc="/posters/insight.jpeg"
            name="Insight Out"
            venue="Main Building (Classroom / Lecture Hall)"
            datetime="17/10/2022 9:30 A.M.-10:30 A.M."
            tsize="1"
            regurl="https://docs.google.com/forms/d/e/1FAIpQLSf_HT0cupDbbgLw9FHJikqLv_s2eZXkNqdwmeiAhJyDcVw76Q/viewform?usp=pp_url"
            coordinators="1.Siddhant Dungdung (6299249898) 2.Ayushree (7050356902)"
            club="The Literary Club"
            desc="Insight Out is a two-round event. In the first round, all the participants will
          choose a narrator from the options given. The participants will act as narrators and provide a different account of any story piece they choose, from the narrator’s point of view. The story that the participants have to give an alternate account of can range from fairytales, folklores, everyday stories or novels, famous mythological tales or even incidents from the lives of famous personalities.
          "
          />
          <Card
            imgsrc="/posters/murder.jpeg"
            name="Murder Mystery"
            venue="Mehek"
            regurl="https://bit.ly/3ehAjLE"
            datetime="17th October, 9:30AM -1.00 pm"
            tsize="1 to 4"
            coordinators="1. Danish - 9462158925 2. Divesh - 9608818149"
            club="Leo Club"
            desc="Murder Mystery is an event where the team would be given a plot related to a fictional murder story and clues related to it. Teams will encounter 2 types of clues; 1 will be based on a particular location and the other will be based on a character. The Location- based Clue will indicate to some location within the campus. Answers to the Character-based Clue maybe a character description/ identity/ personality of the suspect/ item which has been mentioned in the plot. Once a team solves a location clue and reaches the correct location, they will have to submit the answer for the location to the LEO members present there in the format mentioned below. After which they will be handed a character-based clue at the same location. Upon solving the given character-based clue, it’scorrect answer must be submitted at the same location where that particular character clue was provided to the team in the format mentioned below, subsequently, at the same location that team will receive some statements/reports which will further help in revealing the case and the next location-based clue will also be provided"
          />
          <Card
            imgsrc="/posters/electro.jpeg"
            name="Electro-Shardes"
            regurl="https://bit.ly/electro_charades_22"
            venue="Classroom"
            datetime="17th October, 2:00 PM - 4:00 PM"
            tsize="2"
            coordinators="1. Nishant (7014940516)
          2. Aryan (7017451815)"
            club="ECE Society"
            desc="1. This is an electronic spin-off on the game dumb-charades!
          2. This event will be of 2 rounds. First one will be elimination round and second will be final round.
          In 1st round, we will ask some general and electronics based questions in form of cross-words,
          puzzles etc.,
          3. In 2nd round one of the two team members will be blind-folded. A few electronic devices will be
          placed in front of the participants. The blind folded person will have to guess the name of the component while the second person assists their partner by describing the device to them."
          />
          {/* <Card
            imgsrc="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
            name="PITSTOP"
            venue="IC"
            datetime="16/10/22 2:00PM to 5:00 PM"
            tsize="2"
            coordinators="1. AmitKumar-8130755401 2. Sushanto - 9031152152"
            club="Firebolt Racing"
            desc="The objective of a team is to change all the tyres of a vehicle in the least possible time in the correct manner. The team which completes the task in the correct way and minimum time wins the competition."
          /> */}
          <Card
            imgsrc="/posters/wiki.png"
            club="BIOTS"
            name="Wiki Wars"
            regurl="https://docs.google.com/forms/d/e/1FAIpQLSc0QQ3OEWencY-TFFdA37rhzw3RvAlyavLoAUZRKHXVlZbx6Q/viewform"
            venue="R&D"
            datetime="16/10/2022 , 3:00 PM - 4:00 PM"
            tsize="2"
            coordinators="• AFZAL AMANULLAH (8271827570)
          • RUTUJASUNIL JAGDALE(8879227640)"
            desc="1. It is a nifty game that can be played with only a web browser. It tests the ability to navigate Wikipedia and to think ahead. It is best played in a place with lots of computer that are physically next to each other (e.g. a computer lab).
          2. Get a few friends to play. This is either the easiest or the hardest part, but it is crucial.
          3. Make sure your Internet should be functional and reliable.
          4. Go to Wikipedia.org
          5. Pick a start and end page. One method is to use the  Random Article page on the left side bar,
          although this may bring up extremely obscure pages. Another is to have an assigned person pick
          two pages, or to alternate between players. All players should then navigate to the starting page.
          6. Navigate to the target page using wiki links. Some rule sets allow the use of the back button and find function. Note: It is usually acceptable to use the back button to get out of a page withno
          links in the article
          7. The winner should show their history to everyone else. It's interesting to follow the meandering (and at times bizarre) nature of wiki links, and will prevent cheating. It is consideredcheating to backspace pages, or use the find on page tool.
          "
          />
          <Card
            imgsrc="/posters/green.jpeg"
            club="EPAC"
            name="Green Avengers"
            venue="Classroom"
            datetime="16 Oct , 9:30am-11:30pm"
            tsize="2-3"
            coordinators="1. Ankit(9771347425)
          2. Prabhan (74840 98200)"
            desc="1. It comprises of three rounds:
          2. Round 1(Comic sonic)-Making a comic strip of a super hero saving the world from environmentalDisasters.
          3. Round 2(Show your avenger)-Creating a 2D model of materials found from the surrounding
          4. Environment.
          5. Round 3(Finding the lost avenger)-Teams will be given some clues to find out the lost avenger and Bring balance to the planet. The one to find it first will be the winner."
          />
          <Card
            imgsrc="/posters/mediacre.jpeg"
            club="NAPS"
            name="MediaCre"
            regurl="https://docs.google.com/forms/d/e/1FAIpQLSdfu1RBt8BkwPxQ_lgygIApvs1qKS2rgsxDjOCv-b1kE7i2-Q/viewform"
            venue="Main Building / LH"
            datetime="17/10/2022, 11:30 A.M.-1:00 P.M."
            tsize="2-3"
            coordinators="1.Ritika (8104609759) 2.Devang (9162171327)"
            desc="The contestants have to participate in teams of 2-3. The first roundwill be a
          written round, wherein the questions will be based on web series, movies and anime.
          The fifteen teams with the highest scores will qualify for the second round. Thesecond round will be a Pictionary round where one of the team members will be giventhe word, and the other teammate will guess it. The final round will be a Taboo round consisting of three sub- rounds – Easy, Medium and Hard. In this round, one of the teammembers will have to explain the word given to them, using a list of taboo words."
          />
        </div>
      </div>
    </>
  );
}
