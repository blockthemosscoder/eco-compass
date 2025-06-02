var ContentNumber = 1;
function swapContentForward() {
  ContentNumber += 1;
  setInterval(checkSwapContent(), 200);
}
function swapContentBackward() {
  ContentNumber -= 1;
  setInterval(checkSwapContent(), 200);
}

function checkSwapContent() {
  const Text = document.getElementById("textToSwap");
  const Header = document.getElementById("SwapHeader");
  const TextBox = document.getElementById("swapper1");
  const Link = document.getElementById("moreInfoLink");
  const Image = document.getElementById("swapImage");

if (ContentNumber == 1) {
    Text.textContent = "Some tips to live sustainably are: Don't waste power, wasting power is one of the easiest sources of energy waste which you can easily remove. This can be done as easily switching off lights and unplugging idle electronics to eliminate “phantom” energy drains. Switch more meals to plant and buy locally produced foods which shortens supply chains and therefore lower transportation emissions. Whenever you can, instead of using your car or another vehicle you own, opt for public transport, walking or biking to your destination. This helps lowering carbon emissions by directly lowering the source of the emissions.";
    Header.textContent = "How to live sustainably?";
    Image.src = 'assets/content1.jpg';
    TextBox.classList.add("ContentNumber1");
    TextBox.classList.remove("ContentNumber2");
    TextBox.classList.remove("ContentNumber3");
    Link.href = "scenes/howTo.html";

    
  }
else if (ContentNumber == 2) {
    Text.textContent = "Why would you live sustainably, you may ask. The reason is to lower carbon emissions and help alleviate the disastrous effects of global warming, pollution and energy waste. Now, only one of us can't make the change, but if we all choose to adopt this sustainable lifestyle, we can slowly help fix these problems for good.";
    Header.textContent = "Why should we live sustainbly?";
    Image.src = 'assets/content2.jpg';
    TextBox.classList.add("ContentNumber2");
    TextBox.classList.remove("ContentNumber1");
    TextBox.classList.remove("ContentNumber3");
    Link.href = "scenes/whyTo.html";
}
else if (ContentNumber == 3) {
  Text.textContent = "Global warming has been significantly increasing because of the usage of fossil fuel and carbon emission. It has done multiple harmful and destructive effects on us. It traps heat so it melt down ice, increasing the temperature. Sea levels are rising because of it. Because of it climate changes are becoming like weathers with disasters and frequent intense climates. The intense heat disrupt the eco-system and increases infection and diseases. We think that we need to immediately take action and assist no matter how small the impact is.";
  Header.textContent = "The Dangers of Global Warming";
  Image.src = 'assets/content3.png';
  TextBox.classList.add("ContentNumber3");
  TextBox.classList.remove("ContentNumber2");
  TextBox.classList.remove("ContentNumber1");
  Link.href = "scenes/globalWarming.html";
  ContentNumber = 0;
  
}


}

setInterval(checkSwapContent(), 2000);