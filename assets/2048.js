function game2048() {
    let counter = 1;
    function generateColor() {
        let cells = document.getElementsByClassName('cell');
        for (let i = 0; i < cells.length; i++) {
            switch (parseInt(cells[i].innerHTML)) {
                case 0: cells[i].style.backgroundColor = '#CCFFFF';
                    break;
                case 2: cells[i].style.backgroundColor = '#0099CC';
                    break;
                case 4: cells[i].style.backgroundColor = '#6699CC';
                    break;
                case 8: cells[i].style.backgroundColor = '#9999CC';
                    break;
                case 16: cells[i].style.backgroundColor = '#CC99CC';
                    break;
                case 32: cells[i].style.backgroundColor = '#FF99CC';
                    break;
                case 64: cells[i].style.backgroundColor = '#FFCCCC';
                    break;
                case 128: cells[i].style.backgroundColor = '#CCCCCC';
                    break;
                case 256: cells[i].style.backgroundColor = '#99CCCC';
                    break;
                case 512: cells[i].style.backgroundColor = '#99FFCC';
                    break;
                case 1024: cells[i].style.backgroundColor = '#CCFFCC';
                    break;
                case 2048: cells[i].style.backgroundColor = '#FFFFCC';
                    break;
            }
        }
    }
    function generateRamdomNumber() {
        let cells = document.getElementsByClassName('cell');
        let random = Math.floor(Math.random() * cells.length);
        if (cells[random].innerHTML == 0) {
            cells[random].innerHTML = 2;
            cells[random].style.backgroundColor = '#0099CC'
        } else {
            generateRamdomNumber();
        }
    }

    function moveRight() {
        let cells = document.getElementsByClassName('cell');
        for (let i = 0; i < cells.length; i++) {
            if (i % 4 === 0) {
                let first = parseInt(cells[i].innerHTML);
                let second = parseInt(cells[i + 1].innerHTML);
                let third = parseInt(cells[i + 2].innerHTML);
                let fourth = parseInt(cells[i + 3].innerHTML);
                let row = [first, second, third, fourth];
                let rowEnd = row.filter(el => el);
                let firstState = Array(4 - rowEnd.length).fill(0);
                let result = firstState.concat(rowEnd);
                cells[i].innerHTML = result[0];
                cells[i + 1].innerHTML = result[1];
                cells[i + 2].innerHTML = result[2];
                cells[i + 3].innerHTML = result[3];
            }

        }
    }
    function moveLeft() {
        let cells = document.getElementsByClassName('cell');
        for (let i = 0; i < cells.length; i++) {
            if (i % 4 === 0) {
                let first = parseInt(cells[i].innerHTML);
                let second = parseInt(cells[i + 1].innerHTML);
                let third = parseInt(cells[i + 2].innerHTML);
                let fourth = parseInt(cells[i + 3].innerHTML);
                let row = [first, second, third, fourth];
                let rowEnd = row.filter(el => el);
                let firstState = Array(4 - rowEnd.length).fill(0);
                let result = rowEnd.concat(firstState);
                cells[i].innerHTML = result[0];
                cells[i + 1].innerHTML = result[1];
                cells[i + 2].innerHTML = result[2];
                cells[i + 3].innerHTML = result[3];
            }
        }
    }
    function moveDown() {
        let cells = document.getElementsByClassName('cell');
        for (let i = 12; i < 16; i++) {
            let first = parseInt(cells[i].innerHTML);
            let second = parseInt(cells[i - 4].innerHTML);
            let third = parseInt(cells[i - 8].innerHTML);
            let fourth = parseInt(cells[i - 12].innerHTML);
            let column = [first, second, third, fourth];
            let columnEnd = column.filter(el => el);
            let firstState = Array(4 - columnEnd.length).fill(0);
            let result = columnEnd.concat(firstState);
            cells[i].innerHTML = result[0];
            cells[i - 4].innerHTML = result[1];
            cells[i - 8].innerHTML = result[2];
            cells[i - 12].innerHTML = result[3];

        }
    }
    function moveUp() {
        let cells = document.getElementsByClassName('cell');
        for (let i = 12; i < 16; i++) {
            let first = parseInt(cells[i].innerHTML);
            let second = parseInt(cells[i - 4].innerHTML);
            let third = parseInt(cells[i - 8].innerHTML);
            let fourth = parseInt(cells[i - 12].innerHTML);
            let column = [first, second, third, fourth];
            let columnEnd = column.filter(el => el);
            let firstState = Array(4 - columnEnd.length).fill(0);
            let result = firstState.concat(columnEnd);
            cells[i].innerHTML = result[0];
            cells[i - 4].innerHTML = result[1];
            cells[i - 8].innerHTML = result[2];
            cells[i - 12].innerHTML = result[3];

        }
    }
    function sumRow() {
        let cells = document.getElementsByClassName('cell');
        for (let i = 0; i < cells.length - 1; i++) {
            if (cells[i].innerHTML === cells[i + 1].innerHTML) {
                cells[i].innerHTML = parseInt(cells[i].innerHTML) + parseInt(cells[i + 1].innerHTML);
                cells[i + 1].innerHTML = 0;
            }
        }
    }
    function sumColumn() {
        let cells = document.getElementsByClassName('cell');
        for (let i = 0; i < cells.length - 4; i++) {
            if (cells[i].innerHTML === cells[i + 4].innerHTML) {
                cells[i].innerHTML = parseInt(cells[i].innerHTML) + parseInt(cells[i + 4].innerHTML);
                cells[i + 4].innerHTML = 0;
            }
        }
    }
    function move(event) {
        switch (event.code) {
            case 'ArrowUp': upArrow();
                counter++;
                break;
            case 'ArrowDown': downArrow();
                counter++;
                break;
            case 'ArrowRight': rightArrow();
                counter++;
                break;
            case 'ArrowLeft': leftArrow();
                counter++;
                break;
        }
    }
    function state() {
        let congrat = document.getElementById('state');
        if (isWinnig()) {
            congrat.innerHTML = 'Win!';
            document.getElementById('counter').innerHTML = counter;
        } else if (islosing() && !(possibleRow() || possibleColumn())) {
            congrat.innerHTML = 'Lose!';
            document.getElementById('counter').innerHTML =counter;
        } else {
            congrat.innerHTML = 'Continue..';
            document.getElementById('counter').innerHTML = counter;
        }

    }
    function possibleRow() {
        let cells = document.getElementsByClassName('cell');
        for (let i = 0; i < cells.length - 1; i++) {
            if (cells[i].innerHTML === cells[i + 1].innerHTML) {
                return true;
            }
        }
        return false;
    }
    function possibleColumn() {
        let cells = document.getElementsByClassName('cell');
        for (let i = 0; i < cells.length - 4; i++) {
            if (cells[i].innerHTML === cells[i + 4].innerHTML) {
                return true;
            }
        }
        return false;
    }
    function islosing() {
        let cells = document.getElementsByClassName('cell');
        for (let i = 0; i < cells.length; i++) {
            if (cells[i].innerHTML == 0) {
                return false;
            }
        }
        return true;
    }
    function isWinnig() {
        let cells = document.getElementsByClassName('cell');
        for (let i = 0; i < cells.length; i++) {
            if (cells[i].innerHTML == 2048) {
                return true;
            }
        }
        return false;
    }
    function upArrow() {
        generateColor();
        sumColumn();
        moveUp();
        generateColor();
        generateRamdomNumber();
        state();
    }
    function downArrow() {
        generateColor();
        sumColumn();
        moveDown();
        generateColor();
        generateRamdomNumber();
        state();
    }

    function rightArrow() {
        generateColor();
        sumRow();
        moveRight();
        generateColor();
        generateRamdomNumber();
        state();
    }
    function leftArrow() {
        generateColor();
        sumRow();
        moveLeft();
        generateColor();
        generateRamdomNumber();
        state();
    }
    generateRamdomNumber();
    generateColor();
    generateRamdomNumber();
    generateColor();


    document.body.addEventListener('keydown', move);
}
window.addEventListener('DOMContentLoaded', game2048);
