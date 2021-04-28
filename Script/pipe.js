document.addEventListener("mousemove",actualMouseMoveFunction);
var mousePosY = 0;
var pipeDrag = 205;
var pulling = false;
function actualMouseMoveFunction(e){
if(pulling){
  if(mousePosY > e.clientY){
    pipeDrag += 2
  }
  if(mousePosY < e.clientY){
    pipeDrag -= 2;
  }
  if(pulling){
    if(pipeDrag > 205){ pipeDrag = 205 }
    if(pipeDrag < 150){ pipeDrag = 150 }
    document.getElementById("pullypipe").style.height = `${pipeDrag}px`;
  }
  mousePosY = e.clientY;
}

}

document.getElementById('pullypipe').addEventListener("mousedown",mouseMoveFunction);
var HoldPipe = document.getElementById("HoldPipe");
document.getElementById('HoldPipe').volume = 0.75;
var PipeAmbience = document.getElementById("PipeAmbience");
PipeAmbience.play();
var GetHighEnd = document.getElementById("GetHighEnd");
GetHighEnd.volume = 0.75;
var GetSuper = document.getElementById("GetSuper");
GetSuper.volume = 0.75;
var GetNormal = document.getElementById("GetNormal");
GetNormal.volume = 0.75;
var PipeFire = document.getElementById("PipeFire");
var PipeFireStar = document.getElementById("PipeFireStar");
var pipeGo = document.getElementById("PipeGo");
var pipeGoGold = document.getElementById("PipeGoGold");
//PIPE
function mouseMoveFunction(e){
          //if(mouseDown){
            e.preventDefault();
            pipeDrag = 205;
            var pipe = document.getElementById("pullypipe");
            var y = e.clientY; 
            pipe.style.height = `${pipeDrag}px`;
            pulling = true;
            //document.getElementById("pullypipe").style.height = '180px';
            console.log("mousedown on pullypipe and moving! current y = " + y);
            HoldPipe.play();
        }
var defaultPipe = [2,2,1,1,1,2,9,7,4,31,25,15];

var currentMultiPipeIds = [57,93,67,2,18,34,32,15,25,6];

var currentAllClearPipe = [
    12,
    18,
    19,
    28,
    41,
    52,
    57,
    62,
    92,
    128,
    161,
    70011,
    70013,
    70017,
    70054,
    70061,
    70062,
    70097,
    70098,
    70106,
    70109,
    70155,
    70159,
    70178,
    70192,
    70193,
    70202,
    70207,
    70210,
    70219,
    70224,
    70228,
    70230,
    70240,
    70241,
    70244,
    70259,
    70263,
    70278,
    30010,
    30019,
    30029,
    30054,
    30097,
    30109,
    30145,
    30152,
    30156,
    30159,
    30164,
    30171,
    30190,
    30192,
    30196,
    30201,
    30216,
    30239,
    30241,
    30257,
    30284
];

let resultsPipeIds = [];

var currentPipeId = 41;
var pullToggle = 1; //0 - Pulling Initial, 1 - 

function randomPull(maxTimes){
    currentMultiPipeIds.splice(0, currentMultiPipeIds.length);
    for(let times = 0; times < maxTimes; times++){
    let randType = Math.floor(Math.random()*3);
    let pullItemId = 0;
    switch(randType){
      case 0:
      pullItemId = characterid[Math.floor(Math.random()*characterid.length)];
      break;
      case 1:
      pullItemId = kartid[Math.floor(Math.random()*kartid.length)];
      break;
      case 2:
      pullItemId = gliderid[Math.floor(Math.random()*gliderid.length)];
      break;
    }
    currentMultiPipeIds.push(pullItemId);
    }
}

function ACR(){
  currentMultiPipeIds.splice(0, currentMultiPipeIds.length);
  currentMultiPipeIds.push(currentAllClearPipe[Math.floor(Math.random()*currentAllClearPipe.length)]);
}

var PullPipeImage = new Image();
PullPipeImage.src = "./Images/Pipe/Animation/GreenSingle.png";

var PullPipeGoldImage = new Image();
PullPipeGoldImage.src = "./Images/Pipe/Animation/GoldSingle.png";

var PullPipeGoldMultiImage = new Image();
PullPipeGoldMultiImage.src = "./Images/Pipe/Animation/PullPipeGoldMultiImage.png";

var PullImage = new Image();
PullImage.src = "./Images/Pipe/Animation/Pull.gif";

var PullImageStar = new Image();
PullImageStar.src = "./Images/Pipe/Animation/PullStar.gif";

function Pulling(){

    document.removeEventListener("mouseup",mouseUpFunction);    

    document.getElementById('pipe').addEventListener("click",Result);

    currentPipeId = currentMultiPipeIds.pop();
    resultsPipeIds.push(currentPipeId);

    PipeAmbience.pause();
    HoldPipe.pause();
    document.getElementById('pipe').innerHTML = "";

    let goldOffset = 0;
    var animation = document.createElement('img');
    animation.src = PullPipeGoldMultiImage.src;
    goldOffset = 1900;
    pipeGoGold.play();
    document.getElementById('pipe').appendChild(animation);
    let pipeWindow = document.getElementById('pipe');
    //pipeWindow.style.backgroundImage = "url(./Images/Pipe/GotIt/infBack.gif)"
    pipeWindow.style.backgroundSize = "2000px";
    //Result
    setTimeout(function(){
    document.getElementById('pipe').style.backgroundImage = "linear-gradient(rgb(0, 1, 4,0.9), rgb(16, 31, 244,0.9)), url(./Images/Pipe/GotIt/infBack.gif)"
  }, 3500 + goldOffset);
    
    setTimeout(function(){
    Result();
  }, 3900 + goldOffset);

}

function Result(){

  if(currentPipeId != null){
  let rarity = values[currentPipeId].rarityId;
  let itemType = currentPipeId.toString();
      if(itemType.length < 5){
        itemType = 0;
        //t = 
      }
      if(itemType.length == 5 && Math.round(itemType / 1000) == 30){
        itemType = 2;
      }
      if(itemType.length == 5 && Math.round(itemType / 1000) == 70){
        itemType = 1;
      }

      console.log(itemType);

  GetNormal.pause();
    GetSuper.pause();
    GetHighEnd.pause();

    PipeFire.pause();
    PipeFireStar.pause();

  if(pullToggle == 0){
    document.getElementById('pipe').innerHTML = "";

    var animation = document.createElement('img');
    animation.id = "animationPull";
    document.getElementById('pipe').appendChild(animation);

    animation.offsetHeight; //redraw hack
    if(rarity < 2 || rarity == 2 && itemType != 0){
    document.getElementById('animationPull').setAttribute('src', PullImage.src);
    PipeFire.currentTime = 0;
    PipeFire.play();
    setTimeout(function(){
      if(pullToggle == 1){
    Result();
    }
      }, 2200);

    } else {
    document.getElementById('animationPull').setAttribute('src', PullImageStar.src);

    PipeFireStar.currentTime = 0;
    PipeFireStar.play();
    setTimeout(function(){
      if(pullToggle == 1){
    Result();
    }
  }, 6300);

    }
    pullToggle = 1;
  } else if(pullToggle == 1){
  document.getElementById('pipe').innerHTML = "";
    var gradient = document.createElement('img');
    gradient.id = "gradientPipe";
    gradient.src = "./Images/Pipe/GotIt/Gradient.png"
    gradient.className = "PipeGradient";
    document.getElementById('pipe').appendChild(gradient);



    //Maybe add some in between animation 

    switch(rarity){
    case 0:
    document.getElementById('pipe').style.backgroundImage = "url(./Images/Pipe/GotIt/infBack.gif)";
    gradient.src = "./Images/Pipe/GotIt/Normal.png";

    var highlight = document.createElement('img');
    highlight.id = "highlightPipe";
    highlight.className = "highlightpipeHIGHEND";
    highlight.src = "./Images/Pipe/GotIt/Highlight.png"
    //layerone.style.opacity = 0.9;
    document.getElementById('pipe').appendChild(highlight);

    var layerone = document.createElement('img');
    layerone.className = "layeronepipe spinslow";
    layerone.src = "./Images/Pipe/GotIt/LayerOne.png"
    document.getElementById('pipe').appendChild(layerone);

    var layeronetwo = document.createElement('img');
    layeronetwo.className = "layeronepipe spinslowback";
    layeronetwo.src = "./Images/Pipe/GotIt/LayerOne.png"
    document.getElementById('pipe').appendChild(layeronetwo);

    var pipeItem = document.createElement('img');
    pipeItem.id = "itemPipe";
    pipeItem.className = "itemPipe";
    switch(itemType){
    case 0:
    pipeItem.src = `./Images/Full Icon/Character/${currentPipeId}.png`;
    break;
    case 1:
    pipeItem.src = `./Images/Kart Icon/${currentPipeId}.png`;
    break;
    case 2:
    pipeItem.src = `./Images/Full Icon/Glider/${currentPipeId}.png`;
    break;
    }
    document.getElementById('pipe').appendChild(pipeItem);

    var informationBox = document.createElement('div');
    informationBox.className = "messageBox";
    var messageBox = document.createElement('img');
    messageBox.id = "messageBoxBG";
    messageBox.className = "messageBoxBG";
    messageBox.src = `./Images/Pipe/GotIt/InformationBox.png`;
    informationBox.appendChild(messageBox);

    var messageBoxItem = document.createElement('img');
    messageBoxItem.id = "messageBoxItem";
    messageBoxItem.className = "messageBoxItem";
    let itemIconNormal = values[currentPipeId].itemTypeId;
    messageBoxItem.src = `./Images/Items/${itemIconNormal}.png`;
    informationBox.appendChild(messageBoxItem);

    var messageBoxNameLabel = document.createElement('p');
    messageBoxNameLabel.id = "messageBoxNameLabel";
    messageBoxNameLabel.className = "messageBoxNameLabel";
    let itemNameNormal = values[currentPipeId].nameEng;
    messageBoxNameLabel.innerHTML = `${itemNameNormal}`;
    informationBox.appendChild(messageBoxNameLabel);

    var messageBoxItemNameLabel = document.createElement('p');
    messageBoxItemNameLabel.id = "messageBoxItemNameLabel";
    messageBoxItemNameLabel.className = "messageBoxItemNameLabel";
    //let itemName = values[currentPipeId].nameEng;
    let itemNameNormal2 = 'Dash Ring';
    messageBoxItemNameLabel.innerHTML = `${itemNameNormal2}`;
    informationBox.appendChild(messageBoxItemNameLabel);

    var messageBoxItemDescLabel = document.createElement('p');
    messageBoxItemDescLabel.id = "messageBoxItemDescLabel";
    messageBoxItemDescLabel.className = "messageBoxItemDescLabel";
    //let itemName = values[currentPipeId].nameEng;
    let itemDescNormal = 'Pass thourgh this for a burst of speed. Your oponnents can use it, too, so make it count!';
    messageBoxItemDescLabel.innerHTML = `${itemDescNormal}`;
    informationBox.appendChild(messageBoxItemDescLabel);

    var messageBoxBar = document.createElement('img');
    messageBoxBar.id = "messageBoxBar";
    messageBoxBar.className = "messageBoxBar";
    messageBoxBar.src = `./Images/Pipe/GotIt/WhiteBar.png`;
    informationBox.appendChild(messageBoxBar);

    document.getElementById('pipe').appendChild(informationBox);

    var gotIt = document.createElement('img');
    gotIt.id = "gotIt";
    gotIt.className = "gotIt";
    gotIt.src = `./Images/Pipe/GotIt/GotIt.png`;
    gotIt.addEventListener("webkitAnimationEnd", changeToLoop);
    //layerone.style.opacity = 0.9;
    document.getElementById('pipe').appendChild(gotIt); 

    var gotItEffect0 = document.createElement('img');
    gotItEffect0.id = "gotItEffect0";
    gotItEffect0.className = "gotItEffect0";
    gotItEffect0.src = `./Images/Pipe/GotIt/GetItemEffect00.png`;
    document.getElementById('pipe').appendChild(gotItEffect0); 

    document.getElementById('highlightPipe').className = "highlightpipespinHIGHEND"
    GetNormal.currentTime = 0;
    GetNormal.play();
    break;
    case 1:
    document.getElementById('pipe').style.backgroundImage = "url(./Images/Pipe/GotIt/infBack.gif)";
    gradient.src = "./Images/Pipe/GotIt/Super.png";
    //document.getElementById('pipe').style.backgroundImage = "url(./Images/Pipe/GotIt/infBack.gif)" 

    var highlight = document.createElement('img');
    highlight.id = "highlightPipe";
    highlight.className = "highlightpipeHIGHEND";
    highlight.src = "./Images/Pipe/GotIt/Highlight.png"
    //layerone.style.opacity = 0.9;
    document.getElementById('pipe').appendChild(highlight);

    var layerone = document.createElement('img');
    layerone.className = "layeronepipe spinslow";
    layerone.src = "./Images/Pipe/GotIt/LayerOne.png"
    document.getElementById('pipe').appendChild(layerone);

    var layeronetwo = document.createElement('img');
    layeronetwo.className = "layeronepipe spinslowback";
    layeronetwo.src = "./Images/Pipe/GotIt/LayerOne.png"
    document.getElementById('pipe').appendChild(layeronetwo);

    var pipeItem = document.createElement('img');
    pipeItem.id = "itemPipe";
    pipeItem.className = "itemPipe";
    switch(itemType){
    case 0:
    pipeItem.src = `./Images/Full Icon/Character/${currentPipeId}.png`;
    break;
    case 1:
    pipeItem.src = `./Images/Kart Icon/${currentPipeId}.png`;
    break;
    case 2:
    pipeItem.src = `./Images/Full Icon/Glider/${currentPipeId}.png`;
    break;
    }
    document.getElementById('pipe').appendChild(pipeItem);

    var informationBox = document.createElement('div');
    informationBox.className = "messageBox";
    var messageBox = document.createElement('img');
    messageBox.id = "messageBoxBG";
    messageBox.className = "messageBoxBG";
    messageBox.src = `./Images/Pipe/GotIt/InformationBox.png`;
    informationBox.appendChild(messageBox);

    var messageBoxItem = document.createElement('img');
    messageBoxItem.id = "messageBoxItem";
    messageBoxItem.className = "messageBoxItem";
    let itemIconSuper = values[currentPipeId].itemTypeId;
    messageBoxItem.src = `./Images/Items/${itemIconSuper}.png`;
    informationBox.appendChild(messageBoxItem);

    var messageBoxNameLabel = document.createElement('p');
    messageBoxNameLabel.id = "messageBoxNameLabel";
    messageBoxNameLabel.className = "messageBoxNameLabel";
    let itemNameSuper = values[currentPipeId].nameEng;
    messageBoxNameLabel.innerHTML = `${itemNameSuper}`;
    informationBox.appendChild(messageBoxNameLabel);

    var messageBoxItemNameLabel = document.createElement('p');
    messageBoxItemNameLabel.id = "messageBoxItemNameLabel";
    messageBoxItemNameLabel.className = "messageBoxItemNameLabel";
    //let itemName = values[currentPipeId].nameEng;
    let itemNameSuper2 = 'Dash Ring';
    messageBoxItemNameLabel.innerHTML = `${itemNameSuper2}`;
    informationBox.appendChild(messageBoxItemNameLabel);

    var messageBoxItemDescLabel = document.createElement('p');
    messageBoxItemDescLabel.id = "messageBoxItemDescLabel";
    messageBoxItemDescLabel.className = "messageBoxItemDescLabel";
    //let itemName = values[currentPipeId].nameEng;
    let itemDescSuper = 'Pass thourgh this for a burst of speed. Your oponnents can use it, too, so make it count!';
    messageBoxItemDescLabel.innerHTML = `${itemDescSuper}`;
    informationBox.appendChild(messageBoxItemDescLabel);

    var messageBoxBar = document.createElement('img');
    messageBoxBar.id = "messageBoxBar";
    messageBoxBar.className = "messageBoxBar";
    messageBoxBar.src = `./Images/Pipe/GotIt/WhiteBar.png`;
    informationBox.appendChild(messageBoxBar);

    document.getElementById('pipe').appendChild(informationBox);

    var gotIt = document.createElement('img');
    gotIt.id = "gotIt";
    gotIt.className = "gotIt";
    gotIt.src = `./Images/Pipe/GotIt/GotIt.png`;
    gotIt.addEventListener("webkitAnimationEnd", changeToLoop);
    //layerone.style.opacity = 0.9;
    document.getElementById('pipe').appendChild(gotIt); 

    var gotItEffect0 = document.createElement('img');
    gotItEffect0.id = "gotItEffect0";
    gotItEffect0.className = "gotItEffect0";
    gotItEffect0.src = `./Images/Pipe/GotIt/GetItemEffect00.png`;
    document.getElementById('pipe').appendChild(gotItEffect0); 

    document.getElementById('highlightPipe').className = "highlightpipespinHIGHEND"
    GetSuper.currentTime = 0;
    GetSuper.play();
    break;
    case 2:
    document.getElementById('pipe').style.backgroundImage = "url(./Images/Pipe/GotIt/infBack.gif)"
    gradient.src = "./Images/Pipe/GotIt/HighEndGradient.gif";
    //document.getElementById('pipe').style.backgroundImage = "url(./Images/Pipe/GotIt/infBack.gif)" 

    var highlight = document.createElement('img');
    highlight.id = "highlightPipe";
    highlight.className = "highlightpipeHIGHEND";
    highlight.src = "./Images/Pipe/GotIt/Highlight.png"
    document.getElementById('pipe').appendChild(highlight);

    var layerone = document.createElement('img');
    layerone.className = "layeronepipe spinslow";
    layerone.src = "./Images/Pipe/GotIt/LayerOne.png"
    document.getElementById('pipe').appendChild(layerone);

    var layeronetwo = document.createElement('img');
    layeronetwo.className = "layeronepipe spinslowback";
    layeronetwo.src = "./Images/Pipe/GotIt/LayerOne.png"
    document.getElementById('pipe').appendChild(layeronetwo);

    var pipeItem = document.createElement('img');
    pipeItem.id = "itemPipe";
    pipeItem.className = "itemPipe";
    switch(itemType){
    case 0:
    pipeItem.src = `./Images/Full Icon/Character/${currentPipeId}.png`;
    break;
    case 1:
    pipeItem.src = `./Images/Kart Icon/${currentPipeId}.png`;
    break;
    case 2:
    pipeItem.src = `./Images/Full Icon/Glider/${currentPipeId}.png`;
    break;
    }
    document.getElementById('pipe').appendChild(pipeItem);

    var informationBox = document.createElement('div');
    informationBox.className = "messageBox";
    var messageBox = document.createElement('img');
    messageBox.id = "messageBoxBG";
    messageBox.className = "messageBoxBG";
    messageBox.src = `./Images/Pipe/GotIt/InformationBox.png`;
    informationBox.appendChild(messageBox);

    var messageBoxItem = document.createElement('img');
    messageBoxItem.id = "messageBoxItem";
    messageBoxItem.className = "messageBoxItem";
    let itemIcon = values[currentPipeId].itemTypeId;
    messageBoxItem.src = `./Images/Items/${itemIcon}.png`;
    informationBox.appendChild(messageBoxItem);

    var messageBoxNameLabel = document.createElement('p');
    messageBoxNameLabel.id = "messageBoxNameLabel";
    messageBoxNameLabel.className = "messageBoxNameLabel";
    let itemName = values[currentPipeId].nameEng;
    messageBoxNameLabel.innerHTML = `${itemName}`;
    informationBox.appendChild(messageBoxNameLabel);

    var messageBoxItemNameLabel = document.createElement('p');
    messageBoxItemNameLabel.id = "messageBoxItemNameLabel";
    messageBoxItemNameLabel.className = "messageBoxItemNameLabel";
    //let itemName = values[currentPipeId].nameEng;
    let itemName2 = 'Dash Ring';
    messageBoxItemNameLabel.innerHTML = `${itemName2}`;
    informationBox.appendChild(messageBoxItemNameLabel);

    var messageBoxItemDescLabel = document.createElement('p');
    messageBoxItemDescLabel.id = "messageBoxItemDescLabel";
    messageBoxItemDescLabel.className = "messageBoxItemDescLabel";
    //let itemName = values[currentPipeId].nameEng;
    let itemDesc = 'Pass thourgh this for a burst of speed. Your oponnents can use it, too, so make it count!';
    messageBoxItemDescLabel.innerHTML = `${itemDesc}`;
    informationBox.appendChild(messageBoxItemDescLabel);

    var messageBoxBar = document.createElement('img');
    messageBoxBar.id = "messageBoxBar";
    messageBoxBar.className = "messageBoxBar";
    messageBoxBar.src = `./Images/Pipe/GotIt/WhiteBar.png`;
    informationBox.appendChild(messageBoxBar);

    document.getElementById('pipe').appendChild(informationBox);

    var gotIt = document.createElement('img');
    gotIt.id = "gotIt";
    gotIt.className = "gotIt";
    gotIt.src = `./Images/Pipe/GotIt/GotIt.png`;
    gotIt.addEventListener("webkitAnimationEnd", changeToLoop);
    //layerone.style.opacity = 0.9;
    document.getElementById('pipe').appendChild(gotIt); 

    var gotItEffect0 = document.createElement('img');
    gotItEffect0.id = "gotItEffect0";
    gotItEffect0.className = "gotItEffect0";
    gotItEffect0.src = `./Images/Pipe/GotIt/GetItemEffect00.png`;
    document.getElementById('pipe').appendChild(gotItEffect0); 

    document.getElementById('highlightPipe').className = "highlightpipespinHIGHEND"
    GetHighEnd.currentTime = 0;
    GetHighEnd.play();
    break;
    }
    pullToggle = 0;
    currentPipeId = currentMultiPipeIds.pop();
    resultsPipeIds.push(currentPipeId);
  }//pulltoggle = 1
  }//if array is not empty
  else{
    document.getElementById('pipe').removeEventListener("click",Result);
    finalResults();
  }
}

function deleteOld() {
  document.getElementById('gradientPipe').remove();
  document.getElementById('highlightPipe').remove();
  document.getElementById('itemPipe').remove();
  document.getElementById('gotIt').remove();
  document.getElementById('gotItEffect0').remove();
}

function finalResults(){
    console.log("Final")
    var resultBG = document.createElement('img');
    resultBG.id = "resultBG";
    resultBG.src = "./Images/Pipe/GotIt/Result.png"
    resultBG.className = "resultBG";
    //resultBG.addEventListener("webkitAnimationEnd", deleteOld);
    document.getElementById('pipe').appendChild(resultBG);

    var itemList = document.createElement('img');
    itemList.id = "itemList";
    itemList.src = "./Images/Pipe/GotIt/ItemList.png"
    itemList.className = "itemList";
    document.getElementById('pipe').appendChild(itemList);

    var itemListPanel = document.createElement('div');
    itemListPanel.id = "itemListPanel";
    itemListPanel.className = "itemListPanel";
    document.getElementById('pipe').appendChild(itemListPanel);

    resultsPipeIds.forEach((t, i) => {
      let itemType = t;
      let itemRarity = (parseInt(values[t].rarityId) + 1).toString();
      if(itemType.length < 5){
        itemType = 0;
        //t = 
      }
      if(itemType.length == 5 && Math.round(itemType / 1000) == 30){
        itemType = 2;
      }
      if(itemType.length == 5 && Math.round(itemType / 1000) == 70){
        itemType = 1;
      }

      console.log("[" + t + "] [" + itemType + "] [" + i + "]");

      let output = document.getElementById('itemListPanel');

      if(itemType == 0){
        var panel = document.createElement('div');
        panel.className = 'ckgpanelpipe';
        panel.id = `invpipepanel${t}`;
        panel.addEventListener('click', function() {
            invCharacter(characterid[i], i);
        });

        let bottomimg = document.createElement('img');
        switch (itemRarity) {
        case "1":
            bottomimg.src = `./Images/UI/bgnormal.png`;
            break;
        case "2":
            bottomimg.src = `./Images/UI/bgrare.png`;
            break;
        case "3":
            bottomimg.src = `./Images/UI/bghighend.png`;
            break;
        }
        bottomimg.className = 'bottomimg';
        panel.appendChild(bottomimg);

        let newCharacter = document.createElement('img');
        newCharacter.className = 'newCharacter';
        newCharacter.src = `./Images/Character Icon/${t}.png`;
        panel.appendChild(newCharacter);

        let topimg = document.createElement('img');
        switch (itemRarity) {
        case "1":
            topimg.src = `./Images/UI/outlinenormalchar.png`;
            break;
        case "2":
            topimg.src = `./Images/UI/outlinerarechar.png`;
            break;
        case "3":
            topimg.src = `./Images/UI/outlinehighendchar.png`;
            break;
        }
        topimg.className = 'topimg';
        if (viewshelvechar.includes(t)) {
            topimg.className = 'invtopimgselected';
        }
        topimg.id = `invtopimgselected${t}`;
        panel.appendChild(topimg);

        let panelNewIcon = document.createElement('img');
        panelNewIcon.src = `./Images/Pipe/GotIt/New.png`;
        panelNewIcon.className = 'panelNewIcon';
        panel.appendChild(panelNewIcon);

        let panelAmount = document.createElement('img');
            panelAmount.src = `./Images/Pipe/GotIt/Amount.png`;
            panelAmount.className = 'panelAmount';
            panel.appendChild(panelAmount);
        let savedrivers = [];
        savedrivers = Object.keys(savedata.Items.Drivers);
        if(savedrivers.includes(t) && isDataEntered){
        output.appendChild(panel);
       } else if(onlyOwnedItemsInv == false){
        output.appendChild(panel);
       }

      } else if(itemType == 1){
        var panel = document.createElement('div');
        panel.className = 'ckgpanelpipe';
        panel.id = `invpipepanel${t}`;
        panel.addEventListener('click', function() {
            invKart(kartid[i], i);
        });

        let bottomimg = document.createElement('img');
        switch (itemRarity) {
        case "1":
            bottomimg.src = `./Images/UI/bgnormalkg.png`;
            break;
        case "2":
            bottomimg.src = `./Images/UI/bgrarekg.png`;
            break;
        case "3":
            bottomimg.src = `./Images/UI/bghighendkg.png`;
            break;
        }
        bottomimg.className = 'bottomimg';
        panel.appendChild(bottomimg);

        let newCharacter = document.createElement('img');
        newCharacter.className = 'newKart';
        newCharacter.src = `./Images/Kart Icon/${t}.png`;
        panel.appendChild(newCharacter);

        let topimg = document.createElement('img');
        switch (itemRarity) {
        case "1":
            topimg.src = `./Images/UI/outlinenormal.png`;
            break;
        case "2":
            topimg.src = `./Images/UI/outlinerare.png`;
            break;
        case "3":
            topimg.src = `./Images/UI/outlinehighend.png`;
            break;
        }
        topimg.className = 'topimg';
        if (viewshelvechar.includes(t)) {
            topimg.className = 'invtopimgselected';
        }
        topimg.id = `invtopimgselected${t}`;
        panel.appendChild(topimg);

        let panelNewIcon = document.createElement('img');
        panelNewIcon.src = `./Images/Pipe/GotIt/New.png`;
        panelNewIcon.className = 'panelNewIcon';
        panel.appendChild(panelNewIcon);

        let panelAmount = document.createElement('img');
            panelAmount.src = `./Images/Pipe/GotIt/Amount.png`;
            panelAmount.className = 'panelAmount';
            panel.appendChild(panelAmount);

        let savekarts = [];
        savekarts = Object.keys(savedata.Items.Karts);
        if(savekarts.includes(t) && isDataEntered){
        output.appendChild(panel);
       } else if(onlyOwnedItemsInv == false){
        output.appendChild(panel);
       }
      } else if(itemType == 2){
        var panel = document.createElement('div');
        panel.className = 'ckgpanelpipe';
        panel.id = `invpipepanel${t}`;
        panel.addEventListener('click', function() {
            invGlider(gliderid[i], i);
        });

        let bottomimg = document.createElement('img');
        switch (itemRarity) {
        case "1":
            bottomimg.src = `./Images/UI/bgnormalkg.png`;
            break;
        case "2":
            bottomimg.src = `./Images/UI/bgrarekg.png`;
            break;
        case "3":
            bottomimg.src = `./Images/UI/bghighendkg.png`;
            break;
        }
        bottomimg.className = 'bottomimg';
        panel.appendChild(bottomimg);

        let newCharacter = document.createElement('img');
        newCharacter.className = 'newGlider';
        newCharacter.src = `./Images/Glider Icon/${t}.png`;
        panel.appendChild(newCharacter);

        let topimg = document.createElement('img');
        switch (itemRarity) {
        case "1":
            topimg.src = `./Images/UI/outlinenormal.png`;
            break;
        case "2":
            topimg.src = `./Images/UI/outlinerare.png`;
            break;
        case "3":
            topimg.src = `./Images/UI/outlinehighend.png`;
            break;
        }
        topimg.className = 'topimg';
        if (viewshelvechar.includes(t)) {
            topimg.className = 'invtopimgselected';
        }
        topimg.id = `invtopimgselected${t}`;
        panel.appendChild(topimg);

        let panelNewIcon = document.createElement('img');
        panelNewIcon.src = `./Images/Pipe/GotIt/New.png`;
        panelNewIcon.className = 'panelNewIcon';
        panel.appendChild(panelNewIcon);

        let panelAmount = document.createElement('img');
            panelAmount.src = `./Images/Pipe/GotIt/Amount.png`;
            panelAmount.className = 'panelAmount';
            panel.appendChild(panelAmount);

        let savegliders = [];
        savegliders = Object.keys(savedata.Items.Gliders);
        if(!savegliders.includes(t)){
        panel.appendChild(panelAmount);
        }
       output.appendChild(panel);
      }

    });

}

function changeToLoop(){
   document.getElementById('gotIt').className = "gotItLoop";
}

document.addEventListener("mouseup",mouseUpFunction);
function mouseUpFunction(e){
  let height = document.getElementById("pullypipe").style.height;
  if(height == '150px'){
    Pulling();
    pulling = false;
    return;
  }
    HoldPipe.pause();
    HoldPipe.currentTime = 0;
    document.getElementById("pullypipe").style.height = '205px';
    pulling = false;
}