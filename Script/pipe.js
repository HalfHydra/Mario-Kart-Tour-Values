//actualPipeSimulator

let pipeData = {};

function generatePipes(){
    document.getElementById('pickingStage').innerHTML = "";
    Object.keys(pipeData.Pipes).forEach((t,i)=>{

        let bannerdiv = document.createElement('div');
            bannerdiv.id = `banner_${t}`;
            bannerdiv.className = `pipebanner-content`;

        var namepanel = document.createElement('div');
        namepanel.className = 'namepanelpipe';
        bannerdiv.appendChild(namepanel);

        let toptext = document.createElement('p');
        toptext.innerHTML = pipeData.Pipes[t].Name;
        toptext.className = 'toptextpipe';
        bannerdiv.appendChild(toptext);

        var banner = document.createElement('img');
        banner.src = pipeData.Pipes[t].Icon;
        banner.className = 'bannerpipe';
        bannerdiv.appendChild(banner);

        var fire1 = document.createElement('img');
        fire1.src = "./Images/Pipe/Banner/Fire1.png";
        fire1.className = 'fire1pipe';
        fire1.addEventListener('click', function() {
            generatePull(t, 1);
        });
        bannerdiv.appendChild(fire1);

        var fire10 = document.createElement('img');
        fire10.src = "./Images/Pipe/Banner/Fire10.png";
        fire10.className = 'fire1pipe';
        fire10.addEventListener('click', function() {
            generatePull(t, 10);
        });
        bannerdiv.appendChild(fire10);

        var pipetxt = document.createElement('p');
        pipetxt.id = `remaining_${t}`
        pipetxt.className = 'pipetxt';
        pipetxt.innerHTML = `Remaining: ${pipeData.Pipes[t].InitialAmount} / ${pipeData.Pipes[t].InitialAmount}`;
        bannerdiv.appendChild(pipetxt);


        document.getElementById('pickingStage').appendChild(bannerdiv);

        }
        );

}

function generatePull(pipeId, pullTimes){
if(savedata.Pipes == null){
    savedata.Pipes = {};
}
if(savedata.Pipes[pipeId] == null){
    savedata.Pipes[pipeId] = {};
    savedata.Pipes[pipeId].itemCount = pipeData.Pipes[pipeId].InitialAmount;
    savedata.Pipes[pipeId].Spotlights = pipeData.Pipes[pipeId].Spotlights;
    savedata.Pipes[pipeId].Items = pipeData.Pipes[pipeId].Items;
}

resultsPipeIds = [];
currentMultiPipeIds.splice(0, currentMultiPipeIds.length);

//0 = S HE D
//1 = S HE K
//2 = S HE G
//3 = HE D
//4 = HE K
//5 = HE G
//6 = S S D
//7 = S S K
//8 = S S G
//9 = S D
//10 = S K
//11 = S G
//12 = S N D
//13 = S N K
//14 = S N G
//15 = N D
//16 = N K
//17 = N G

for(let i = 0; i<pullTimes;i++){
    console.log(`BEGIN AT [${i}]`)
    let currentPipe = [];
    let itemAmountsCurrent = savedata.Pipes[pipeId].Items;
    itemAmountsCurrent.forEach((t, i) => {
        for(let x = 0; x<t; x++){
            currentPipe.push(i);
        }
    });
    console.log(savedata);

    let pulledItem = currentPipe[Math.floor(Math.random() * currentPipe.length)];
    console.log("[PulledItem] = " + pulledItem);
    let notValid;
    let pool;
    let randomItem;
    let spotlightItem;
    let currentSpotlightPool = [];

    savedata.Pipes[pipeId].itemCount -= 1;
    console.log(savedata);
    switch(pulledItem){
        case 0: // S HE D
            savedata.Pipes[pipeId].Items[pulledItem] -= 1;
            currentSpotlightPool = [];
            savedata.Pipes[pipeId].Spotlights.forEach((randomSpotlight, i) =>{
                if(values[randomSpotlight].rarityId == 2 && randomSpotlight.toString().length < 5){
                    currentSpotlightPool.push(randomSpotlight);
                }
            });

            spotlightItem = currentSpotlightPool[Math.floor(Math.random() * currentSpotlightPool.length)];

            currentMultiPipeIds.push(spotlightItem);
            savedata.Pipes[pipeId].Spotlights.splice(savedata.Pipes[pipeId].Spotlights.indexOf(parseInt(spotlightItem)), 1);
        break;
        case 1:
            savedata.Pipes[pipeId].Items[pulledItem] -= 1;
            currentSpotlightPool = [];
            savedata.Pipes[pipeId].Spotlights.forEach((randomSpotlight, i) =>{
                if(values[randomSpotlight].rarityId == 2 && randomSpotlight.toString().length == 5 && Math.round(randomSpotlight / 1000) == 70){
                    currentSpotlightPool.push(randomSpotlight);
                }
            });

            spotlightItem = currentSpotlightPool[Math.floor(Math.random() * currentSpotlightPool.length)];

            currentMultiPipeIds.push(spotlightItem);
            savedata.Pipes[pipeId].Spotlights.splice(savedata.Pipes[pipeId].Spotlights.indexOf(parseInt(spotlightItem)), 1);
        break;
        case 2:
        savedata.Pipes[pipeId].Items[pulledItem] -= 1;
        currentSpotlightPool = [];
        savedata.Pipes[pipeId].Spotlights.forEach((randomSpotlight, i) =>{
                if(values[randomSpotlight].rarityId == 2 && randomSpotlight.toString().length == 5 && Math.round(randomSpotlight / 1000) == 30){
                    currentSpotlightPool.push(randomSpotlight);
                }
            });

            spotlightItem = currentSpotlightPool[Math.floor(Math.random() * currentSpotlightPool.length)];

            currentMultiPipeIds.push(spotlightItem);
            savedata.Pipes[pipeId].Spotlights.splice(savedata.Pipes[pipeId].Spotlights.indexOf(parseInt(spotlightItem)), 1);
        break;
        case 3:
        savedata.Pipes[pipeId].Items[pulledItem] -= 1;
        pool = pipeData.Normals.HighEnd.Drivers;
        pipeData.Pipes[pipeId].ExtraHE.Drivers.forEach((t, i) => {
            pool.push(t);
        });
        randomItem = pool[Math.floor(Math.random()* pool.length)];
        currentMultiPipeIds.push(randomItem);
        break;
        case 4:
        savedata.Pipes[pipeId].Items[pulledItem] -= 1;
        pool = pipeData.Normals.HighEnd.Karts;
        pipeData.Pipes[pipeId].ExtraHE.Karts.forEach((t, i) => {
            pool.push(t);
        });
        randomItem = pool[Math.floor(Math.random()* pool.length)];
        currentMultiPipeIds.push(randomItem);
        break;
        case 5:
        savedata.Pipes[pipeId].Items[pulledItem] -= 1;
        pool = pipeData.Normals.HighEnd.Gliders;
        pipeData.Pipes[pipeId].ExtraHE.Gliders.forEach((t, i) => {
            pool.push(t);
        });
        randomItem = pool[Math.floor(Math.random()* pool.length)];
        currentMultiPipeIds.push(randomItem);
        break;
        case 6:
        savedata.Pipes[pipeId].Items[pulledItem] -= 1;
        break;
        case 7:
        savedata.Pipes[pipeId].Items[pulledItem] -= 1;
        break;
        case 8:
        savedata.Pipes[pipeId].Items[pulledItem] -= 1;
        break;
        case 9:
        savedata.Pipes[pipeId].Items[pulledItem] -= 1;
        randomItem = pipeData.Normals.Super.Drivers[Math.floor(Math.random()* pipeData.Normals.Super.Drivers.length)];
        currentMultiPipeIds.push(randomItem);
        break;
        case 10:
        savedata.Pipes[pipeId].Items[pulledItem] -= 1;
        randomItem = pipeData.Normals.Super.Karts[Math.floor(Math.random()* pipeData.Normals.Super.Karts.length)];
        currentMultiPipeIds.push(randomItem);
        break;
        case 11:
        savedata.Pipes[pipeId].Items[pulledItem] -= 1;
        randomItem = pipeData.Normals.Super.Gliders[Math.floor(Math.random()* pipeData.Normals.Super.Gliders.length)];
        currentMultiPipeIds.push(randomItem);
        break;
        case 12:
        savedata.Pipes[pipeId].Items[pulledItem] -= 1;
        break;
        case 13:
        savedata.Pipes[pipeId].Items[pulledItem] -= 1;
        break;
        case 14:
        savedata.Pipes[pipeId].Items[pulledItem] -= 1;
        break;
        case 15:
        savedata.Pipes[pipeId].Items[pulledItem] -= 1;
        randomItem = pipeData.Normals.Normal.Drivers[Math.floor(Math.random()* pipeData.Normals.Normal.Drivers.length)];
        currentMultiPipeIds.push(randomItem);
        break;
        case 16:
        savedata.Pipes[pipeId].Items[pulledItem] -= 1;
        randomItem = pipeData.Normals.Normal.Karts[Math.floor(Math.random()* pipeData.Normals.Normal.Karts.length)];
        currentMultiPipeIds.push(randomItem);
        break;
        case 17:
        savedata.Pipes[pipeId].Items[pulledItem] -= 1;
        randomItem = pipeData.Normals.Normal.Gliders[Math.floor(Math.random()* pipeData.Normals.Normal.Gliders.length)];
        currentMultiPipeIds.push(randomItem);
        break;
        case 18: //only spotlights
        savedata.Pipes[pipeId].Items[pulledItem] -= 1;
            currentSpotlightPool = [];
            savedata.Pipes[pipeId].Spotlights.forEach((randomSpotlight, i) =>{
                    currentSpotlightPool.push(randomSpotlight);
            });

            spotlightItem = currentSpotlightPool[Math.floor(Math.random() * currentSpotlightPool.length)];

            currentMultiPipeIds.push(spotlightItem);
            savedata.Pipes[pipeId].Spotlights.splice(savedata.Pipes[pipeId].Spotlights.indexOf(parseInt(spotlightItem)), 1);
        break;
    }
    console.log("[ActualItem] = " + currentMultiPipeIds[i]);
    console.log(savedata);

}

document.getElementById(`remaining_${pipeId}`).innerHTML = `Remaining: ${savedata.Pipes[pipeId].itemCount} / ${pipeData.Pipes[pipeId].InitialAmount}`
createPullyPipe();

}

function resetPipe(id){
    delete savedata.Pipes[id];
}

//Pretty stuff
document.addEventListener("mousemove",actualMouseMoveFunction);
var mousePosY = 0;
var pipeDrag = 205;
var pulling = false;
function actualMouseMoveFunction(e){

if(pulling){
if(document.getElementById('pullypipe') != null && document.getElementById('pipeSceneBottom') != null){
document.getElementById('pipeSceneBG').src = "./Images/Pipe/Background/PipeBG3.png";
document.getElementById('toad_YellowBack').className = "toad_YellowBackFast";
document.getElementById('toad_YellowBack').src = "./Images/Pipe/Toad/KinopioBackY01.png";
if(pipeTypeIndex == 0){
        document.getElementById('pullypipe').src = "./Images/Pipe/Pipe/Pipe01.png";
        document.getElementById('pipeSceneBottom').src = "./Images/Pipe/PipeBottom/Pipe01.png";
    } else if(pipeTypeIndex == 1){
        document.getElementById('pullypipe').src = "./Images/Pipe/Pipe/PipeUltra01.png";
        document.getElementById('pipeSceneBottom').src = "./Images/Pipe/PipeBottom/PipeUltra01.png";
    }
}
  if(mousePosY > e.clientY){
    pipeDrag += 3
  }
  if(mousePosY < e.clientY){
    pipeDrag -= 3;
  }
  if(pulling){
    if(pipeDrag > 205){ pipeDrag = 205 }
    if(pipeDrag < 150){ pipeDrag = 150 }
    document.getElementById("pullypipe").style.height = `${pipeDrag}px`;
  }
  mousePosY = e.clientY;
}

if(!pulling){
    if(document.getElementById('pullypipe') != null && document.getElementById('pipeSceneBottom') != null){
    document.getElementById('pipeSceneBG').src = "./Images/Pipe/Background/animated.png";
    document.getElementById('toad_YellowBack').className = "toad_YellowBack";
    document.getElementById('toad_YellowBack').src = "./Images/Pipe/Toad/KinopioBackY00.png";
    if(pipeTypeIndex == 0){
        document.getElementById('pullypipe').src = "./Images/Pipe/Pipe/Pipe00.png";
        document.getElementById('pipeSceneBottom').src = "./Images/Pipe/PipeBottom/Pipe00.png";
    } else if(pipeTypeIndex == 1){
        document.getElementById('pullypipe').src = "./Images/Pipe/Pipe/PipeUltra00.png";
        document.getElementById('pipeSceneBottom').src = "./Images/Pipe/PipeBottom/PipeUltra00.png";
    }
    }
}

}

var HoldPipe = document.getElementById("HoldPipe");
document.getElementById('HoldPipe').volume = 0.75;
var PipeAmbience = document.getElementById("PipeAmbience");
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

var PipeGoSingle = document.getElementById("PipeGoSingle");
var PipeGoSingleStar = document.getElementById("PipeGoSingleStar");
var PipeGoMulti = document.getElementById("PipeGoMulti");
var PipeGoMultiStar = document.getElementById("PipeGoMultiStar");
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

let resultsPipeIds = [];

var currentPipeId = 41;
var pullToggle = 1; //0 - Pulling Initial, 1 - 

function getPipeTypeIndex(){
    let type = 0;

    currentMultiPipeIds.forEach((t,i)=>{
        console.log(`[T] = ${t}`);
        console.log(values[t]);
        if(values[t].rarityId == 2){
            type = 1;
        }
    });

    if((Math.random()*100) < 10){
        type = 0;
    }

    return type;
}

let pipeTypeIndex;

function createPullyPipe(){
    let output = document.getElementById('pipe');
    output.innerHTML = "";

    /*let pipediv = document.createElement('div');
    pipediv.className = 'pipediv';*/

    pipeTypeIndex = getPipeTypeIndex();

    let animatedBG = document.createElement('img');
    animatedBG.id = "pipeSceneBG";
    animatedBG.src = "./Images/Pipe/Background/animated.png";
    animatedBG.className = "animatedBG";
    output.appendChild(animatedBG);

    let pipebottom = document.createElement('img');
    pipebottom.id = "pipeSceneBottom";
    pipebottom.className = "pipebottom";
    output.appendChild(pipebottom);

    let pullypipe = document.createElement('img');
    pullypipe.id = "pullypipe";
    pullypipe.className = "pullypipe";
    output.appendChild(pullypipe);

    switch(pipeTypeIndex){
        case 0:
        pipebottom.src = "./Images/Pipe/PipeBottom/Pipe00.png";
        pullypipe.src = "./Images/Pipe/Pipe/Pipe00.png";
        break;
        case 1:
        pipebottom.src = "./Images/Pipe/PipeBottom/PipeUltra00.png";
        pullypipe.src = "./Images/Pipe/Pipe/PipeUltra00.png";
        break;
    }

    let yellowBack = document.createElement('img');
    yellowBack.id = "toad_YellowBack";
    yellowBack.className = "toad_YellowBack";
    yellowBack.src = "./Images/Pipe/Toad/KinopioBackY00.png";
    output.appendChild(yellowBack);

    //output.appendChild(pipediv);

    output.style.display = "block";
    document.getElementById('pullypipe').addEventListener("mousedown",mouseMoveFunction);
    document.addEventListener("mouseup",mouseUpFunction);

    pullToggle = 1;

    document.getElementById('pickingStage').style.display = "none";
    document.getElementById('pullingStage').style.display = "block";
    document.getElementById('pullingStage').className = "fadeInPipe";

    PipeAmbience.play();
}

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
    createPullyPipe();
}

function ACR(){
  currentMultiPipeIds.splice(0, currentMultiPipeIds.length);
  currentMultiPipeIds.push(currentAllClearPipe[Math.floor(Math.random()*currentAllClearPipe.length)]);
}

var PullPipeImage = new Image();
PullPipeImage.src = "./Images/Pipe/Animation/GreenSingle.png";

var PullPipeGoldImage = new Image();
PullPipeGoldImage.src = "./Images/Pipe/Animation/GoldSingle.png";

var PullPipeMultiImage = new Image();
PullPipeMultiImage.src = "./Images/Pipe/Animation/PullPipeGreenMultiImage.png";

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
    animation.src = "";
    animation.className = "noSelect";
    let time = new Date().getTime();

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


    if(currentMultiPipeIds.length > 3){
    if(rarity < 2 || rarity == 2 && itemType != 0){
        switch(pipeTypeIndex){
    case 0:
    animation.src = `./Images/Pipe/Animation/PullPipeGreenMultiImage.png?${time}`;
    PipeGoMulti.play();
    break;
    case 1:
    animation.src = `./Images/Pipe/Animation/PullPipeGoldMultiImage.png?${time}`;
    PipeGoMulti.play();
    break;
    }
    } else {
         switch(pipeTypeIndex){
    case 0:
    animation.src = `./Images/Pipe/Animation/PullPipeGreenMultiImageStar.png?${time}`;
    PipeGoMultiStar.play();
    break;
    case 1:
    animation.src = `./Images/Pipe/Animation/PullPipeGoldMultiImageStar.png?${time}`;
    PipeGoMultiStar.play();
    break;
    }
    }

} else {

    if(rarity < 2 || rarity == 2 && itemType != 0){
        switch(pipeTypeIndex){
    case 0:
    animation.src = `./Images/Pipe/Animation/GreenSingle.png?${time}`;
    PipeGoSingle.play();
    break;
    case 1:
    animation.src = `./Images/Pipe/Animation/GoldSingle.png?${time}`;
    PipeGoSingle.play();
    break;
    }
    } else {
         switch(pipeTypeIndex){
    case 0:
    animation.src = `./Images/Pipe/Animation/GreenSingleStar.png?${time}`;
    animation.style.width = "608px";
    animation.style.height = "1080px";
    PipeGoSingleStar.play();
    break;
    case 1:
    animation.src = `./Images/Pipe/Animation/GoldSingleStar.png?${time}`;
    animation.style.width = "608px";
    animation.style.height = "1080px";
    PipeGoSingleStar.play();
    break;
    }


}
}

    animation.offsetHeight;
    goldOffset = 1900;
    document.getElementById('pipe').appendChild(animation);
    //Result
    Skippable = false;

if(rarity == 2 && itemType == 0){
    goldOffset += 3800;
} else if(currentMultiPipeIds.length < 3){
    goldOffset -= 600;
}

if(currentMultiPipeIds.length > 3){
    setTimeout(function(){
    //document.getElementById('pipe').style.backgroundImage = "linear-gradient(rgb(0, 1, 4,0.9), rgb(16, 31, 244,0.9)), url(./Images/Pipe/GotIt/infBack.gif)"
    let pipeWindow = document.getElementById('pipe');
    pipeWindow.style.backgroundImage = "url(./Images/Pipe/GotIt/infBack.gif)"
    pipeWindow.style.backgroundSize = "2000px";
  }, 3500 + goldOffset);
    
    setTimeout(function(){
    Skippable = true;
    Result();
  }, 3500 + goldOffset);
} else {
    setTimeout(function(){
    //document.getElementById('pipe').style.backgroundImage = "linear-gradient(rgb(0, 1, 4,0.9), rgb(16, 31, 244,0.9)), url(./Images/Pipe/GotIt/infBack.gif)"
    let pipeWindow = document.getElementById('pipe');
    pipeWindow.style.backgroundImage = "url(./Images/Pipe/GotIt/infBack.gif)"
    pipeWindow.style.backgroundSize = "2000px";
  }, 2500 + goldOffset);
    
    setTimeout(function(){
    Skippable = true;
    Result();
  }, 2500 + goldOffset);
}

}

let currentPullIndex = 0;

let currentTimeout;

let Skippable = true;

function Result(){

  if(!Skippable){
        console.log("yay")
        return;
  }

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

  GetNormal.pause();
    GetSuper.pause();
    GetHighEnd.pause();

    PipeFire.pause();
    PipeFireStar.pause();

  if(pullToggle == 0){
    document.getElementById('pipe').innerHTML = "";

    var animation = document.createElement('img');
    animation.id = "animationPull";
    animation.className = "noSelect"
    document.getElementById('pipe').appendChild(animation);

    animation.offsetHeight; //redraw hack
    if(rarity < 2 || rarity == 2 && itemType != 0){
    document.getElementById('animationPull').setAttribute('src', PullImage.src);
    Skippable = true;
    PipeFire.currentTime = 0;
    PipeFire.play();
    currentTimeout = setTimeout(function(){
      if(pullToggle == 1){
    Skippable = true;
    Result();
    }
      }, 2300);

    } else {
    document.getElementById('animationPull').setAttribute('src', PullImageStar.src);
    Skippable = false;
    PipeFireStar.currentTime = 0;
    PipeFireStar.play();
    currentTimeout = setTimeout(function(){
      if(pullToggle == 1){
    Skippable = true;
    Result();
    }
  }, 6400);

    }
    pullToggle = 1;
  } else if(pullToggle == 1){
  document.getElementById('pipe').innerHTML = "";
//document.getElementById('pipe').style.backgroundImage = "linear-gradient(rgb(0, 1, 4,0.9), rgb(16, 31, 244,0.9)), url(./Images/Pipe/GotIt/infBack.gif)"
    var gradient = document.createElement('img');
    gradient.id = "gradientPipe";
    gradient.src = "./Images/Pipe/GotIt/Gradient.png"
    gradient.className = "PipeGradient";
    document.getElementById('pipe').appendChild(gradient);


    if(currentTimeout != null){
        clearTimeout(currentTimeout);
    }

    //Maybe add some in between animation 

    switch(rarity){
    case 0:

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
    let itemNameNormal2 = itemData[values[currentPipeId].itemTypeId].Name;
    messageBoxItemNameLabel.innerHTML = `${itemNameNormal2}`;
    informationBox.appendChild(messageBoxItemNameLabel);

    var messageBoxItemDescLabel = document.createElement('p');
    messageBoxItemDescLabel.id = "messageBoxItemDescLabel";
    messageBoxItemDescLabel.className = "messageBoxItemDescLabel";
    //let itemName = values[currentPipeId].nameEng;
    let itemDescNormal = itemData[values[currentPipeId].itemTypeId].Normal;
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
    let itemNameSuper2 = itemData[values[currentPipeId].itemTypeId].Name;
    messageBoxItemNameLabel.innerHTML = `${itemNameSuper2}`;
    informationBox.appendChild(messageBoxItemNameLabel);

    var messageBoxItemDescLabel = document.createElement('p');
    messageBoxItemDescLabel.id = "messageBoxItemDescLabel";
    messageBoxItemDescLabel.className = "messageBoxItemDescLabel";
    //let itemName = values[currentPipeId].nameEng;
    let itemDescSuper = itemData[values[currentPipeId].itemTypeId].Super;
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
    let itemName2 = itemData[values[currentPipeId].itemTypeId].Name;
    messageBoxItemNameLabel.innerHTML = `${itemName2}`;
    informationBox.appendChild(messageBoxItemNameLabel);

    var messageBoxItemDescLabel = document.createElement('p');
    messageBoxItemDescLabel.id = "messageBoxItemDescLabel";
    messageBoxItemDescLabel.className = "messageBoxItemDescLabel";
    //let itemName = values[currentPipeId].nameEng;
    let itemDesc = itemData[values[currentPipeId].itemTypeId].HighEnd;
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

    switch(rarity){
    case 0:
    //document.getElementById('pipe').style.backgroundImage = "url(./Images/Pipe/GotIt/infBack.gif)";
    gradient.src = "./Images/Pipe/GotIt/Normal.png";
    break;
    case 1:
    //document.getElementById('pipe').style.backgroundImage = "url(./Images/Pipe/GotIt/infBack.gif)";
    gradient.src = "./Images/Pipe/GotIt/Super.png";
    break;
    case 2:
    //document.getElementById('pipe').style.backgroundImage = "url(./Images/Pipe/GotIt/infBack.gif)"
    gradient.src = "./Images/Pipe/GotIt/HighEndGradient.gif";
    break;
    }
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
    console.log("Final");

    document.getElementById('pipe').style.backgroundImage = "";

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
      if(t == null){
        return;
      }
      let itemType = t.toString();
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

      //console.log("[" + t + "] [" + itemType + "] [" + i + "]");

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

        if(savedata.Items.Drivers[t] == null){
        let panelNewIcon = document.createElement('img');
        panelNewIcon.src = `./Images/Pipe/GotIt/New.png`;
        panelNewIcon.className = 'panelNewIcon';
        panel.appendChild(panelNewIcon);
        }

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

        if(savedata.Items.Karts[t] == null){
        let panelNewIcon = document.createElement('img');
        panelNewIcon.src = `./Images/Pipe/GotIt/New.png`;
        panelNewIcon.className = 'panelNewIcon';
        panel.appendChild(panelNewIcon);
        }

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

        if(savedata.Items.Gliders[t] == null){
        let panelNewIcon = document.createElement('img');
        panelNewIcon.src = `./Images/Pipe/GotIt/New.png`;
        panelNewIcon.className = 'panelNewIcon';
        panel.appendChild(panelNewIcon);
        }

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

setTimeout(function(){
let xbtn = document.createElement('img');
        xbtn.src = "./Images/UI/xbtn.png";
        xbtn.className = 'xbtnpipe';
        xbtn.addEventListener('click', function() {
        document.getElementById('pickingStage').style.display = "block";
        document.getElementById('pullingStage').style.display = "none";
        document.getElementById('pipe').innerHTML = "";
        });
        document.getElementById('pipe').appendChild(xbtn);

}, 1000);
}


function changeToLoop(){
   document.getElementById('gotIt').className = "gotItLoop";
}