import {RemoveFromLocal} from "../UtilsFunctions/LocalStorage.js";
import {SaveToLocal} from "../UtilsFunctions/LocalStorage.js";

function AddPlayerToLeadBoard(numberOfMoves,time,boardSize) {
    const submitResultEl = createElement('div', {
        className: 'submit-result popup',
        children: [
            createElement('div', {}, 'New Record!'),
            createElement('input', {
                type: 'text',
                placeholder: "What's your name, champ?"
            }),
            createElement('input', {
                type: 'button',
                value: "Add",
            }),
        ]
    },)
    submitResultEl.children[2].addEventListener("click",function(){
        RegisterPlayer(submitResultEl,numberOfMoves,time,boardSize);
    }, false);
    document.getElementsByClassName('AddPlayerPopupContent')[0].append(submitResultEl);
    document.getElementsByClassName('AddPlayerPopup')[0].style.display = 'block';
}
function CheckIfNewRecord(numberOfMoves,time,boardSize) {
    var ScoreJson = localStorage.getItem("ScoreJson");
    var ScoreObject;
    var AllLevels=[];
    if (ScoreJson === null) {
        AddPlayerToLeadBoard(numberOfMoves,time,boardSize);
        return true;
    }
    ScoreObject = JSON.parse(ScoreJson);
    for (var value of ScoreObject) {
        if (value["level"] == boardSize && Number(numberOfMoves) < Number(value["score"])) {
            RemoveFromLocal(value);
            AddPlayerToLeadBoard(numberOfMoves, time, boardSize);
            return true;
        }
        if (value["level"] == boardSize && numberOfMoves == value["score"] && Number(value["time"]) > Number(time)) {
            RemoveFromLocal(value);
            AddPlayerToLeadBoard(numberOfMoves, time, boardSize);
            return true;
        }
        AllLevels.push(value["level"]);
    }
    if (!AllLevels.includes(boardSize))
    {
        AddPlayerToLeadBoard(numberOfMoves, time, boardSize);
        return true;
    }
    alert("Not New Record");
    return false;
}
function RegisterPlayer(submitResultEl,numberOfMoves,time,boardSize) {
    {
        let playerName = 'Unknown Hero';
        if (submitResultEl.children[1].value.length > 0) {
            playerName = submitResultEl.children[1].value;
            AddPlayerClosePopup();
        }
        SaveToLocal(boardSize,numberOfMoves,playerName,time);
    }
}

function AddPlayerClosePopup(){

    document.getElementsByClassName('AddPlayerPopup')[0].style.display='';
}
export {CheckIfNewRecord}