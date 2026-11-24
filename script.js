const flags = [
{
    id: 1,
    title: "First National Flag (Stars and Bars)",
    year: "1861-1863",
    designer: "Nicola Marschall or Orren Randolph Smith",
    status: "Adopted",
    image: "flags/01-stars-bars.jpg",
    description: "The initial Official Flag of the Confederate States, used from March 4, 1861 to May 1, 1863. Like the US Flag, stars were added as states joined the nation",
    context: "The design is usually attributed to Nicola Marschall, a German-American who also designed the Confederate army uniform. Some evidence suggests that a man named Orren Randolph Smith independently submitted a very similar design to Marschall's, and that his version could have been the one officially adopted",
},
{
    id: 2,
    title: "Second National Flag (Stainless Banner)",
    year: "1863-1865",
    designer: "Debated",
    status: "Adopted",
    image: "flags/02-southern-cross.jpg",
    description: "Second Official Flag of the Confederate States, used from May 1, 1863 to March 4, 1865. It incorporated the 'Battle Flag' into its design",
    context: "The simple white design was controversial, but those in favor of it argued, in turn, that it represented purity and truth, or that it was a 'White Man's Flag'",
},
{
    id: 3,
    title: "Third National Flag (Blood-Stained Banner)",
    year: "1865",
    designer: "Arthur L. Rogers",
    status: "Field Use",
    image: "flags/03-van-dorn.jpg",
    description: "Third official flag of the Confederacy, used from March 4, 1865 until the collapse of the Confederacy. It is very similar to the Stainless Banner, but contains a large red stripe on its right side",
    context: "This design was in use for only a month and a half; most Southerners would have barely been aware that the flag had changed",
},
{
    id: 4,
    title: "Proposed Flag",
    year: "1861",
    designer: "A. Bonand",
    status: "Proposed - Declined",
    image: "flags/04-national-proposal.jpg",
    description: "A proposed flag submitted in early 1861. It has 7 stars, one for each state that had seceeded by that point",
    context: "This was the first of two desigs submitted by A. Bonand to the Confederate Congress",
},
{
    id: 5,
    title: "Proposed Flag",
    year: "1861",
    designer: "A. Bonand",
    status: "Proposed - Declined",
    image: "flags/05-national-proposal.jpg",
    description: "A proposed flag submitted in early 1861",
    context: "This was the second of two designs submitted by A. Bonand to the Confederate Congress. Bonand was a resident of Savannah, Georgia",
},
{
    id: 6,
    title: "Proposed Flag",
    year: "1861",
    designer: "Ladies of Charleston",
    status: "Proposed - Declined",
    image: "flags/06-national-proposal.jpg",
    description: "A proposed flag submitted by the Ladies of Charleston to the Confederate Congress in early 1861",
    context: "It has 7 stars, six red-and-white bars, and a blue background",
},
{
    id: 7,
    title: "Proposed Flag",
    year: "1861",
    designer: "L.P. Honour",
    status: "Proposed - Declined",
    image: "flags/07-national-proposal.jpg",
    description: "Very similar to the US flag, the design has 7 stars, one for each that had seceeded at the time the design was made",
    context: "This was the first of two desigs submitted by L.P. Honour to the Confederate Congress. Honour was a resident of Charleston, South Carolina",
},
{
    id: 8,
    title: "Proposed Flag",
    year: "1861",
    designer: "L.P. Honour",
    status: "Proposed - Declined",
    image: "flags/08-national-proposal.jpg",
    description: "This flag has 7 stars and 7 bars, and resembles a vertical US flag",
    context: "This was the second of two desigs submitted by L.P. Honour to the Confederate Congress. Honour was a resident of Charleston, South Carolina",
},
{
    id: 9,
    title: "Proposed Flag",
    year: "1861",
    designer: "John Sansom",
    status: "Proposed - Declined",
    image: "flags/09-national-proposal.jpg",
    description: "A red-and-white flag with seven stars and a crescent moon. The moon likely recalls the Moultrie Flag flown during the American Revolution. The flag also contains the phrase Don't Tread on Me with a serpent, again recalling the American Revolution",
    context: "Designed by John Sansom, an Alabama resident",
},
{
    id: 10,
    title: "Proposed Flag",
    year: "1861",
    designer: "William Porcher Miles",
    status: "Proposed - Eventually Accepted",
    image: "flags/10-national-proposal.jpg",
    description: "This flag strongly resembled the Confederate Battle Flag that is commonly thought to be the official Confederate flag",
    context: "William Porcher Miles was the chairman of the Congressional design competition. His design was initially rejected by the Congress, but was eventually integrated into the Confederate Battle Flag ",
},
{
    id: 11,
    title: "Proposed Flag",
    year: "1861",
    designer: "John G Gaines",
    status: "Proposed - Declined",
    image: "flags/11-national-proposal.jpg",
    description: "A red, white, and blue flag with 13 stars and 13 red-and-white stripes. The 13 stars and stripes likely recall the original 13 colonies",
    context: "The Confederate States attempted to claim the legacy of the American Revolution as their own. A flag with 13 stars would have symbolized the Confederate view that they were the true heirs of the Revolution",
},
{
    id: 12,
    title: "Proposed Flag",
    year: "1861",
    designer: "J.M. Jennings",
    status: "Proposed - Declined",
    image: "flags/12-national-proposal.jpg",
    description: "A white flag with six small stars and one large star, and six red stripes",
    context: "Submitted by J.M. Jennings of Lowndesboro, Alabama in early 1861",
},
{
    id: 13,
    title: "Proposed Flag",
    year: "1861",
    designer: "Samuel White",
    status: "Proposed - Declined",
    image: "flags/13-national-proposal.jpg",
    description: "Red, white, and blue flag with 7 stars and 7 red-and-white bars, with a crescent moon in the center. The moon likely recalls the Moultrie Flag flown during the American Revolution",
},
{
    id: 14,
    title: "Proposed Flag",
    year: "1861",
    designer: "Unknown",
    status: "Proposed - Declined",
    image: "flags/14-national-proposal.jpg",
    description: "White and Blue Flag with a red box and 15 white stars. It is not entirely clear why 15 stars were included, but it likely reflects the fact that there were 15 slave states in 1861, and that the designer hoped that all 15 states would join the Confederacy",
    context: "Submitted by an unknown individual from Louisville, Kentucky",
},
{
    id: 15,
    title: "Proposed Flag",
    year: "1861",
    designer: "Unknown",
    status: "Proposed - Declined",
    image: "flags/15-national-proposal.jpg",
    description: "A red flag with a blue circle in the center",
    context: "This was one of three finalists that received consideration from the Confederate Congress",
},
{
    id: 16,
    title: "Proposed Flag",
    year: "1861",
    designer: "Unknown",
    status: "Proposed - Declined",
    image: "flags/16-national-proposal.jpg",
    description: "A red flag with red and blue stripes, and 7 white stars",
    context: "This was one of three finalists that received consideration from the Confederate Congress",
},
{
    id: 17,
    title: "Proposed Flag",
    year: "1861",
    designer: "E.G. Carpenter",
    status: "Proposed - Declined",
    image: "flags/17-national-proposal.jpg",
    description: "A messy design containing 8 blue stars, a red heart, and red, white, and blue stripes. It vaguely resembles the John Paul Jones flag",
    context: "Submitted to the Confederate Congress by E.G. Carpenter, a resident of Cassville, Georgia",
},
{
    id: 18,
    title: "Proposed Flag",
    year: "1861",
    designer: "Thomas H. Hobbs",
    status: "Proposed - Declined",
    image: "flags/18-national-proposal.jpg",
    description: "A blue flag with a red and white circle at center, containing 7 white stars",
    context: "Submitted to the Confederate Congress by Thomas Hobbs, a resident of Chattanooga, Tennessee",
},
{
    id: 19,
    title: "Proposed Flag",
    year: "1861",
    designer: "Eugene Wythe Baylor",
    status: "Proposed - Declined",
    image: "flags/19-national-proposal.jpg",
    description: "Red, white, and blue bars with an inset blue box and white stars. A large white star sits at the center, with three stars branching out on 4 sides, totalling 13. It likely recalls the original 13 colonies.",
    context: "Submitted by Eugene Wythe Baylor, resident of Louisiana",
},
{
    id: 20,
    title: "Proposed Flag",
    year: "1861",
    designer: "H",
    status: "Proposed - Declined",
    image: "flags/20-national-proposal.jpg",
    description: "Red and white flag with a blue inset box. There are six stars, and a large S in the middle. This was likely an attempt to recognize South Carolina as the leader of the secession movement",
    context: "Submitted by someone calling themselves 'H,' who was from South Carolina",
},
{
    id: 21,
    title: "Proposed Flag",
    year: "1861",
    designer: "Hamilton Couples",
    status: "Proposed - Declined",
    image: "flags/21-national-proposal.jpg",
    description: "A red, white, and black flag that bears some resemblance to a British Union Jack. It contains seven stripes",
    context: "Submitted by Hamilton Couples to the Confederate Congress in early 1861",
},
{
    id: 22,
    title: "Proposed Flag",
    year: "1861",
    designer: "Irene Riddle",
    status: "Proposed",
    image: "flags/22-national-proposal.jpg",
    description: "Blue and white flag with a large red stripe, blue crest, and white stars. It contains 15 stars, likely referencing the 15 slave states, including those that never joined the Confederacy",
    context: "Submitted by Irene Riddle, a resident of Eutaw, Alabama",
},
{
    id: 23,
    title: "Proposed Flag",
    year: "1861",
    designer: "William T. Riddle",
    status: "Proposed - Declined",
    image: "flags/23-national-proposal.jpg",
    description: "Red, yellow, and white flag featuring an elaborate crest in the center. Although not entirely clear, the crest is likely an adapted version of the Alabama heraldic coat of arms",
    context: "Submitted to the Confederate Congress in February 1861",
},
{
    id: 24,
    title: "Proposed Flag",
    year: "1862",
    designer: "Unknown",
    status: "Proposed",
    image: "flags/24-national-proposal.jpg",
    description: "A red flag with white bars and a blue crest featuring a sun design",
    context: "This flag was submitted in 1862, after the design competition had ended. It likely never recieved any consideration",
},
{
    id: 25,
    title: "Proposed Flag",
    year: "1865",
    designer: "Unknown",
    status: "Adopted",
    image: "flags/25-final-proposal.jpg",
    description: "A red flag with a white chevron",
    context: "This flag was submitted in 1862, after the design competition had ended. It likely never recieved any consideration",
}
];

let current = 0;

const flagImage = document.getElementById("flagImage");
const imageFallback = document.getElementById("imageFallback");
const flagTitle = document.getElementById("flagTitle");
const flagYear = document.getElementById("flagYear");
const flagDesigner = document.getElementById("flagDesigner");
const flagStatus = document.getElementById("flagStatus");

const flagDescription = document.getElementById("flagDescription");
const historicalContext = document.getElementById("historicalContext");
const currentIndex = document.getElementById("currentIndex");
const totalFlags = document.getElementById("totalFlags");

const timeline = document.getElementById("timeline");

totalFlags.textContent = flags.length;

function buildTimeline() {
    flags.forEach((flag, index) => {
        const marker = document.createElement("button");
        marker.type = "button";
        marker.classList.add("timeline-marker");
        marker.textContent = index + 1;
        marker.setAttribute("aria-label", `Show ${flag.title}`);
        marker.addEventListener("click", () => {
            current = index;
            loadFlag(current);
        });
        timeline.appendChild(marker);
    });
}

function updateTimeline() {
    document.querySelectorAll(".timeline-marker").forEach((marker, index) => {
        const isActive = index === current;
        marker.classList.toggle("active", isActive);
        if (isActive) {
            marker.setAttribute("aria-current", "true");
        } else {
            marker.removeAttribute("aria-current");
        }
    });
}

function loadFlag(index) {
    const flag = flags[index];

    flagImage.src = flag.image;
    flagImage.alt = flag.title;

    flagTitle.textContent = flag.title;
    flagYear.textContent = flag.year;
    flagDesigner.textContent = flag.designer;
    flagStatus.textContent = flag.status;

    flagDescription.textContent = flag.description;
    historicalContext.textContent = flag.context;
    currentIndex.textContent = index + 1;
    updateTimeline();
}

flagImage.addEventListener("load", () => {
    flagImage.hidden = false;
    imageFallback.hidden = true;
});

flagImage.addEventListener("error", () => {
    flagImage.hidden = true;
    imageFallback.hidden = false;
    imageFallback.textContent = `Image unavailable for ${flagTitle.textContent}.`;
});

function nextFlag() {
    current = (current + 1) % flags.length;
    loadFlag(current);
}

function prevFlag() {
    current = (current - 1 + flags.length) % flags.length;
    loadFlag(current);
}

document.getElementById("nextBtn").addEventListener("click", nextFlag);
document.getElementById("prevBtn").addEventListener("click", prevFlag);

document.addEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;

    if (event.key === "ArrowRight") {
        event.preventDefault();
        nextFlag();
    } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        prevFlag();
    }
});

const imagePanel = document.getElementById("imagePanel");
let startX = 0;
let currentX = 0;
let isDragging = false;
const SWIPE_THRESHOLD = 75;

imagePanel.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
    currentX = startX;
    isDragging = true;
}, { passive: true });

imagePanel.addEventListener("touchmove", (event) => {
    if (isDragging) currentX = event.touches[0].clientX;
}, { passive: true });

imagePanel.addEventListener("touchend", () => {
    if (!isDragging) return;

    const distance = currentX - startX;
    if (distance > SWIPE_THRESHOLD) prevFlag();
    else if (distance < -SWIPE_THRESHOLD) nextFlag();

    isDragging = false;
});

imagePanel.addEventListener("mousedown", (event) => {
    if (event.button !== 0) return;
    startX = event.clientX;
    currentX = startX;
    isDragging = true;
    imagePanel.classList.add("dragging");
});

window.addEventListener("mousemove", (event) => {
    if (isDragging) currentX = event.clientX;
});

window.addEventListener("mouseup", () => {
    if (!isDragging) return;

    const distance = currentX - startX;
    if (distance > SWIPE_THRESHOLD) prevFlag();
    else if (distance < -SWIPE_THRESHOLD) nextFlag();

    imagePanel.classList.remove("dragging");
    isDragging = false;
});

flagImage.addEventListener("dragstart", (event) => event.preventDefault());

buildTimeline();
loadFlag(current);


