//code for making colours change in logo in hero section//
var changingFrontImages=["Images/WebsiteLogo.png", "Images/WebsiteLogoBlue.png",
"Images/WebsiteLogoGreen.png", "Images/WebsiteLogoPurple.png",
"Images/WebsiteLogoYellow.png", "Images/WebsiteLogoRed.png"]
var time = 0
setInterval (function() {
  if (time === changingFrontImages.length){
    time = 0
  }
  document.getElementById("heroFrontImage").src = changingFrontImages[time];
  time++;
} , 2150);

//pop-up function appears when submit button clicked in 'contact us' page//
function enquiryConfirmation() {
  alert ("Thank you for getting in touch, we aim to reply within 24 hours");
}

//code for checking inputs on 'create a profile page' and returning the results//
function returnResults() {
    var title = document.getElementById("inputTitle").value;
    var forename = document.getElementById("inputForename").value;
    var surname = document.getElementById("inputSurname").value;
    var address1 = document.getElementById("inputAddLine1").value;
    var address2 = document.getElementById("inputAddLine2").value;
    var town = document.getElementById("inputTown").value;
    var postcode = document.getElementById("inputPostcode").value;
    var phone = document.getElementById("inputPhoneNumber").value;
    var email = document.getElementById("inputEmailAdd").value;
    var djName = document.getElementById("inputDJName").value;
    var aboutYou = document.getElementById("aboutYou").value;

//checks whether each checkbox has been checked or not//
//refers to value set in html sheet if checked//
//if checkbox not checked, set to display anything//
   {if (document.getElementById("checkEdinburgh").checked) {
       cityAvaliabilityE = document.getElementById("checkEdinburgh").value;
       }
   else  {
       cityAvaliabilityE = " ";
           }}

   {if (document.getElementById("checkSheffield").checked) {
       cityAvaliabilityS = document.getElementById("checkSheffield").value;
       }
   else  {
       cityAvaliabilityS = " ";
           }}

  {if (document.getElementById("checkNewcastle").checked) {
      cityAvaliabilityN = document.getElementById("checkNewcastle").value;
      }
  else  {
      cityAvaliabilityN = " ";
          }}

  {if (document.getElementById("checkBirmingham").checked) {
      cityAvaliabilityB = document.getElementById("checkBirmingham").value;
      }
  else  {
      cityAvaliabilityB = " ";
      }}

  {if (document.getElementById("checkSunderland").checked) {
      cityAvaliabilitySu = document.getElementById("checkSunderland").value;
      }
  else  {
      cityAvaliabilitySu = " ";
      }}

  {if (document.getElementById("checkNorwich").checked) {
      cityAvaliabilityNo = document.getElementById("checkNorwich").value;
      }
  else  {
      cityAvaliabilityNo = " ";
      }}

  {if (document.getElementById("checkDJM350").checked) {
      mixer350 = document.getElementById("checkDJM350").value;
      }
  else  {
      mixer350 = " ";
      }}

  {if (document.getElementById("checkDJM450").checked) {
      mixer450 = document.getElementById("checkDJM450").value;
      }
  else  {
      mixer450 = " ";
      }}

  {if (document.getElementById("checkDJM750").checked) {
      mixer750 = document.getElementById("checkDJM750").value;
      }
  else  {
      mixer750 = " ";
      }}

  {if (document.getElementById("checkDJM800").checked) {
      mixer800 = document.getElementById("checkDJM800").value;
      }
  else  {
      mixer800 = " ";
      }}

  {if (document.getElementById("checkDJM850S").checked) {
      mixer850S = document.getElementById("checkDJM850S").value;
      }
  else  {
      mixer850S = " ";
      }}

  {if (document.getElementById("checkDJMS9").checked) {
      mixerS9 = document.getElementById("checkDJMS9").value;
      }
  else  {
      mixerS9 = " ";
      }}

  {if (document.getElementById("checkCDJ350").checked) {
      deck350 = document.getElementById("checkCDJ350").value;
      }
  else  {
      deck350 = " ";
      }}

  {if (document.getElementById("checkCDJ450").checked) {
      deck450 = document.getElementById("checkCDJ450").value;
      }
  else  {
      deck450 = " ";
      }}

  {if (document.getElementById("checkCDJ850").checked) {
      deck850 = document.getElementById("checkCDJ850").value;
      }
  else  {
      deck850 = " ";
      }}

  {if (document.getElementById("checkCDJ900").checked) {
      deck900 = document.getElementById("checkCDJ900").value;
      }
  else  {
      deck900 = " ";
      }}

  {if (document.getElementById("checkCDJ1000").checked) {
      deck1000 = document.getElementById("checkCDJ1000").value;
      }
  else  {
      deck1000 = " ";
      }}

  {if (document.getElementById("checkCDJ2000").checked) {
      deck2000 = document.getElementById("checkCDJ2000").value;
      }
  else  {
      deck2000 = " ";
      }}

  {if (document.getElementById("checkElectro").checked) {
      genElectro = document.getElementById("checkElectro").value;
      }
  else  {
      genElectro = " ";
      }}

  {if (document.getElementById("checkTechno").checked) {
      genTechno = document.getElementById("checkTechno").value;
      }
  else  {
      genTechno = " ";
      }}

  {if (document.getElementById("checkHouse").checked) {
      genHouse = document.getElementById("checkHouse").value;
      }
  else  {
      genHouse = " ";
      }}

  {if (document.getElementById("checkDance").checked) {
      genDance = document.getElementById("checkDance").value;
      }
  else  {
      genDance = " ";
      }}

  {if (document.getElementById("checkTechHouse").checked) {
      genTechHouse = document.getElementById("checkTechHouse").value;
      }
  else  {
      genTechHouse = " ";
      }}

  {if (document.getElementById("checkBigBeat").checked) {
      genBigBeat = document.getElementById("checkBigBeat").value;
      }
      else  {
      genBigBeat = " ";
      }}

//outputs the values entered in the inputs and if-else statements//
  document.getElementById("displayFormResults").innerHTML =
  ("<h1>Your Profile Details:</h1>" +
  "<h3>Title</h3>" +
  title +
  "<h3>Forename</h3>" +
  forename +
  "<h3>Surname</h3>" +
  surname +
  "<h3>Address line 1</h3>" +
  address1 +
  "<h3>Address line 2</h3>" +
  address2 +
  "<h3>Town/City</h3>" +
  town +
  "<h3>Postcode</h3>" +
  postcode +
  "<h3>Phone number</h3>" +
  phone +
  "<h3>Email address</h3>" +
  email +
  "<h3>DJ Name</h3>" +
  djName +
  "<h3>Describe yourself</h3>" +
  aboutYou +
  "<h3>Cities you can travel to</h3>" +
  cityAvaliabilityE +
  //ensures a space between each value ouput so does not appear...//
  //...as one continous line of text//
  " " +
  cityAvaliabilityS +
  " " +
  cityAvaliabilityN +
  " " +
  cityAvaliabilityB +
  " " +
  cityAvaliabilitySu +
  " " +
  cityAvaliabilityNo +
  "<h3>Mixers you can use</h3>" +
  mixer350 +
  " " +
  mixer450 +
  " " +
  mixer750 +
  " " +
  mixer800 +
  " " +
  mixer850S +
  " " +
  mixerS9 +
  "<h3>Decks you can use</h3>" +
  deck350 +
  " " +
  deck450 +
  " " +
  deck850 +
  " " +
  deck900 +
  " " +
  deck1000 +
  " " +
  deck2000 +
  "<h3>Genres you can play</h3>" +
  genElectro +
  " " +
  genTechno +
  " " +
  genHouse +
  " " +
  genDance +
  " " +
  genTechHouse +
  " " +
  genBigBeat
);
}
