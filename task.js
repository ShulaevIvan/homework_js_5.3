window.addEventListener('DOMContentLoaded', ()=>{

    let mole = document.querySelectorAll('.hole'),
        dead = document.querySelector('#dead'),
        lost = document.querySelector('#lost'),
        scoreWin = 0,
        scoreLose= 0;

    for (let i = 0; i < mole.length; i++){

        mole[i].addEventListener('click', (e)=>{

            let target = e.target

            if (target.classList.contains('hole_has-mole')) {
                scoreWin++
                target.classList.remove('hole_has-mole')
                dead.textContent = scoreWin
            }
            else {
                scoreLose++
                console.log('поражение')
                lost.textContent = scoreLose
            };

            if (scoreWin === 10){
                scoreWin = 0
                scoreLose = 0
                lost.textContent = scoreLose
                dead.textContent = scoreWin
                alert('Вы выиграли')
            };

            if (scoreLose === 10){
                alert('Вы проиграли')
                scoreLose = 0
                scoreWin = 0
                lost.textContent = scoreLose
                dead.textContent = scoreWin
            };

        });
    };
});