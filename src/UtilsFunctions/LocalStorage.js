//  Save the Players json data to local storage.
function SaveToLocal(level, score, name,time) {
    const today = new Date();
    var jsonObject = {
        "level": level,
        "score": score,
        "name": name,
        "time":time,
        "date":today.toDateString()
    }
    var ScoreJson = localStorage.getItem("ScoreJson");
    var ScoreObject;
    if (ScoreJson === null) {
        ScoreObject = [jsonObject];
        localStorage.setItem("ScoreJson", JSON.stringify(ScoreObject));
    } else {
        var isInList = false;
        ScoreObject = JSON.parse(ScoreJson);
        for (var value of ScoreObject) {
            if (value["name"] === jsonObject["name"] && jsonObject["level"]===value["level"]){
                isInList = true;
            }
        }
        if (!isInList) {
            ScoreObject.push(jsonObject);
            localStorage.setItem("ScoreJson", JSON.stringify(ScoreObject));
            return true;
        } else {
            return false;
        }
    }
}

//  Remove the Players json data from local storage.
function RemoveFromLocal(jsonObject) {
    var ScoreJson = localStorage.getItem("ScoreJson");
    var ScoreObject = JSON.parse(ScoreJson);
    //var index = ScoreObject.indexOf(jsonObject);
    var index =0;
    for (var dict in ScoreObject)
    {
        if (dict.level == jsonObject["level"])
        {
            ScoreObject.splice(index, 1);
            localStorage.setItem("ScoreJson", JSON.stringify(ScoreObject));
            break;

        }
        index++;
    }
}

function AddFirstLeadBoardResult()
{
    SaveToLocal("2","1","Gafni","1");
    SaveToLocal("3","5","Mr.Robot","5");
    SaveToLocal("4","20","Siiii","120");
    SaveToLocal("5","30","MamasHero","200");
    SaveToLocal("6","80","Kolololo","300");
    SaveToLocal("7","7","CR7","7");
    SaveToLocal("8","250",":)","600");
}

export {SaveToLocal,RemoveFromLocal,AddFirstLeadBoardResult}