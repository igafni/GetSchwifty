function drawLeaderboard() {
    const table = createElement('table', {
        className: 'leaderboard-table',
        children: [
            createElement('tr', {
                children: [
                    createElement('th', {}, 'Level'),
                    createElement('th', {}, 'Score'),
                    createElement('th', {}, 'Player'),
                    createElement('th', {}, 'Time'),
                    createElement('th', {}, 'Date')
                ]
            })
        ]
    })
    var ScoreJson = JSON.parse(localStorage.getItem("ScoreJson"));
    if (ScoreJson)
    {
        ScoreJson.forEach(el => {
            let rowEl = createElement('tr', {
                children: [
                    createElement('td', {}, `${el.level}x${el.level}`),
                    createElement('td', {}, el.score),
                    createElement('td', {}, el.name),
                    createElement('td', {}, `${el.time}ss`),
                    createElement('td', {}, el.date),
                ]
            });
            table.append(rowEl);
        })
        document.getElementsByClassName('popupContent').innerHTML = '';
        document.getElementsByClassName('popupContent')[0].append(table);
        document.getElementsByClassName('LeadBoardPopup')[0].style.display = 'block';
    }
    }

function LeaderboardClosePopup(){

    document.getElementsByClassName('LeadBoardPopup')[0].style.display='';
}
function ShowLeaderboard() {
    if (!document.querySelector('.leaderboard-table'))
        drawLeaderboard();
    else
    {
        document.getElementsByClassName('LeadBoardPopup')[0].style.display = 'block';
    }
}
function createElement(tagName, props = {}, innerText) {
    const $el = document.createElement(tagName);

    for (const propName in props) {
        if (propName === 'children' && props.children) {
            $el.append(...props.children);
        } else if (typeof props[propName] !== 'undefined') {
            $el[propName] = props[propName];
        }
    }

    if (innerText) {
        $el.innerText = innerText;
    }

    return $el;
}