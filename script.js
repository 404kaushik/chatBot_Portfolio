var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+16478356393'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>9063675831</label></div> </a> <a href='mailto:patilvinu777@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/404kaushik'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/+16478356393'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/vinayak_09'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com/kaushiknag'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/vinayak-patil-793bb5206/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Kaushik's Resume.pdf</label></div><a href='assets/Vinayak Patil&#39;s Resume.pdf' download='Vinayak_Patil_Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/place/30+Champlain+Crescent,+Peterborough,+ON+K9L+1T1,+Canada/data=!4m2!3m1!1s0x89d58b589ffd44cf:0xbc1f0bfe7cb80101?sa=X&ved=1t:242&ictx=111' class='map'></iframe></div><label class='add'><address>30 Champlain Crescent<br>Unit 26<br>Peterborough, Ontario, Canada K9L1T1</address>";

// Adding an audio element
var aboutAudio = new Audio('assets/aboutAudio.mp3');

// Function to play audio
function playAboutAudio() {
    aboutAudio.play();
}


function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes();
}

function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var textDiv = document.createElement("div");
    var dateLabel = document.createElement("div"); // Use div for better control
    
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    textDiv.setAttribute("class", "textDiv");
    
    textDiv.innerText = input.value;
    
    greendiv.appendChild(textDiv);
    greendiv.appendChild(dateLabel);  // Append dateLabel to greendiv after textDiv
    myDiv.appendChild(greendiv);      // Then append greendiv to myDiv
    myLI.appendChild(myDiv);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti); }, 1500);
    input.value = "";
    playSound();
}


function sendAudioMessage() {
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var audioDiv = document.createElement("div");
    var playButton = document.createElement("img");
    var audioBarContainer = document.createElement("div");
    var audioBar = document.createElement("div");
    var durationLabel = document.createElement("span");
    var dateLabel = document.createElement("label");
    var profileImg = document.createElement("img");
    var audioContainer = document.createElement("div");
    var audioElement = new Audio('assets/aboutAudio.mp3'); // Path to your audio file

    // Set attributes and content
    myDiv.setAttribute("class", "received");
    audioContainer.setAttribute("class", "audio-container left");
    audioDiv.setAttribute("class", "audio-message");
    playButton.setAttribute("src", "images/play-button.svg");
    playButton.setAttribute("class", "play-button");
    playButton.addEventListener("click", function() {
        togglePlayPause(audioElement, playButton);
    });
    audioBarContainer.setAttribute("class", "audio-bar-container");
    audioBar.setAttribute("class", "audio-bar");
    durationLabel.setAttribute("class", "audio-duration");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();    
    profileImg.setAttribute("src", "images/kaushik.jpg"); // Path to your profile picture
    dateLabel.setAttribute("class", "dateLabel");
    profileImg.setAttribute("class", "profile-pic");
    
    // Append elements
    audioBarContainer.appendChild(audioBar);
    audioDiv.appendChild(playButton);
    audioDiv.appendChild(audioBarContainer);
    audioDiv.appendChild(durationLabel);
    audioDiv.appendChild(dateLabel); // Append date label inside audio message div
    audioContainer.appendChild(profileImg);
    audioContainer.appendChild(audioDiv);
    myDiv.appendChild(audioContainer);
    myLI.appendChild(myDiv);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();

    // Update the duration label when metadata is loaded
    audioElement.addEventListener('loadedmetadata', function() {
        durationLabel.innerText = formatTime(audioElement.duration);
    });

    // Update the duration label and progress bar in real-time as the audio plays
    audioElement.addEventListener('timeupdate', function() {
        durationLabel.innerText = formatTime(audioElement.currentTime) + " / " + formatTime(audioElement.duration);
        var progress = (audioElement.currentTime / audioElement.duration) * 100;
        audioBar.style.width = progress + "%";
    });
}

// Function to toggle play/pause
function togglePlayPause(audioElement, playButton) {
    if (audioElement.paused) {
        audioElement.play();
        playButton.src = "images/pause-button.svg"; // Path to your pause icon
        playButton.className = "pause-button";
    } else {
        audioElement.pause();
        playButton.src = "images/play-button.svg"; // Path to your play icon
        playButton.className = "play-button";
    }

    // Change icon back to play button when audio ends
    audioElement.addEventListener('ended', function() {
        playButton.src = "images/play-button.svg";
        playButton.className = "play-button";
    });
}

// Function to format time in minutes and seconds
function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var seconds = Math.floor(seconds % 60);
    return minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
}







function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Kaushik Nag Tumu</a>.</span><br><br>I am a Computer Science student at <span class='bold'>Trent University 👨🏻‍💻📚</span><br><br>I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the engineering sphere.<br><br>Send <span class='boldd'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'><br>I can comfortably write code in following languages :<br><span class='bold'>Java<br>C++<br>C<br>PHP<br>Kotlin<br>Dart<br>Python<br>CSS<br>HTML</span><br><br>I've experiance with following frameworks :<span class='bold'><br>Android<br>Flutter<br>ReactJs<br>GTK</span><br><br>I use <span class='bold'>Arch Linux</span> as daily driver on my HP Pavilion 15-ec0xxx<br>OS:Arch Linux<br>DE:Gnome(More often) Kde(often)<br>Favourite IDE:VSCode</span>");
            break;
        case "education":
            sendTextMessage("<span class='sk'>I am currently in my 4th year of my BSc Honours degree in Computer Science with a specialization in Software Engineering.<br><br>I have completed my Secondary School from Indian Language School located in Lagos, Nigera<br>Passing Year:2021");
            break;
        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage(`
                <div class="about-section" style="padding: 5px; border-radius: 10px; margin-bottom: 10px; font-family: Helvetica, Arial, sans-serif;">
                    <h2 style="text-align: center; animation: bounceIn 1s;">👾 About Me</h2>
                    <p style="font-size: 16px; line-height: 1.5; 1s;">
                        Hey there 👋
                    </p>
                    <p style="font-size: 16px; line-height: 1.5; ">
                        👾 My name is Kaushik Nag Tumu, I am a final year software engineering student who loves coding and is an avid gamer🎮.
                    </p>
                    <br>
                    <p style="font-size: 16px; line-height: 1.5; ">
                        🏠 I grew up in Lagos, Nigeria 🇳🇬 where I completed my schooling and then moved to Peterborough, Canada for my undergraduate degree in Computer Science. I consider myself as a global citizen because despite my Indian ethnicity 🇮🇳 I have learnt a lot from being immersed in so many different cultures.
                    </p>
                    <br>
                    <p style="font-size: 16px; line-height: 1.5; ">
                        🎮 During my time at Trent, I have volunteered in a lot of different clubs and groups and tried to make the most out of my university experience by networking with other like minded individuals.
                    </p>
                    <br>
                    <p style="font-size: 16px; line-height: 1.5; ">
                        👨‍💻 I have interned at start ups in different sectors like the travel 🧳 and fashion tech industry which has helped me truly expand my worldview. I am currently working as a Junior Stack Developer at HostelHop and I am open to new opportunities as I want to constantly grow.
                    </p>
                    <br>
                    <p style="font-size: 16px; line-height: 1.5; ">
                        🤝 After reading this, if you think that I am someone who you should connect with, please reach out to me and I’d love to get to know more about you.
                    </p>                    
                </div>
            `);
            setTimeout(sendAudioMessage, 2000);
            break;   
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendProjectMessages();
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }
}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}

function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function sendProjectMessages() {
    var projects = [
        {
            title: "EasyFits Website",
            description: "A virtual wardrobe platform designed to help customers obtain accurate fitting measurements for their clothing. This project utilizes cutting-edge technologies to enhance user experience and provide precise fitting recommendations.",
            techStack: "Tech Stack: HTML, CSS, JavaScript, SCSS, Angular",
            video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            link: "https://easyfits.ca/"
        },
        {
            title: "HostelHop Website",
            description: "A hostel discovery application that connects solo travelers and backpackers with suitable accommodations. The platform offers a seamless search experience and comprehensive details about hostels worldwide.",
            techStack: "Tech Stack: React, TypeScript, Tailwind, Node.js, MongoDB, Python",
            video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            link: "https://hostelhop.net"
        },
        {
            title: "Book Library Website",
            description: "An online book library system that allows users to manage and browse a vast collection of books. The system features advanced search capabilities, user reviews, and a personalized bookshelf.",
            techStack: "Tech Stack: HTML, CSS, JavaScript",
            video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            link: "https://example.com"
        }
    ];

    projects.forEach((project, index) => {
        setTimeout(() => {
            sendTextMessage(`
                <div style="padding: 5px; border-radius: 10px; margin-bottom: 5px; max-width: 100%; box-sizing: border-box;">
                    <h3 style="font-size: 1.2em; margin-bottom: 0.5em;">${project.title}</h3>
                    <p style="margin-bottom: 1em;">${project.description}</p>
                    <p style="margin-bottom: 1em;"><strong>${project.techStack}</strong></p>
                    <div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%; margin-bottom: 1em;">
                        <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" src="${project.video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <p>Click on this link to view the webpage: <a href="${project.link}" target="_blank" style="color: #007bff; text-decoration: none;">${project.link}</a></p>
                </div>
            `);
        }, index * 2000); // 2 seconds interval between messages
    });
    
}


function playSound() {
    audio.play();
}
