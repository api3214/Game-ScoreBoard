let liveScoreForHome = document.getElementById("home-scores")
let liveScoreForGuest = document.getElementById("guest-scores")

scoreForHome = 0 
scoreForGuest = 0

function addOneForHome() {
    scoreForHome += 1
    liveScoreForHome.textContent = scoreForHome
}

function addTwoForHome() {
    scoreForHome += 2
    liveScoreForHome.textContent = scoreForHome
}

function addThreeForHome() {
    scoreForHome += 3
    liveScoreForHome.textContent = scoreForHome
}

function addOneForGuest() {
    scoreForGuest += 1
    liveScoreForGuest.textContent = scoreForGuest
}

function addTwoForGuest() {
    scoreForGuest += 2
    liveScoreForGuest.textContent = scoreForGuest
}

function addThreeForGuest() {
    scoreForGuest += 3
    liveScoreForGuest.textContent = scoreForGuest
}

function resetForHome() {
    liveScoreForHome.textContent = 0
    scoreForHome = 0
}

function resetForGuest() {
    liveScoreForGuest.textContent = 0
    scoreForGuest = 0
}