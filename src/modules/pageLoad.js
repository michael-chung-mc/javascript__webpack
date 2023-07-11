import bgImg from '../assets/top_iso_home.jpg'

export function load () {
    let content = document.getElementById("content");
    //header
    const header = document.createElement("div");
    header.innerHTML = "HEADER";
    content.append(header);
    //image
    const bg = new Image();
    bg.src = bgImg;
    content.append(bg);
    // review
    const review = document.createElement("div");
    review.innerHTML = "filler";
    content.append("review"); 
}