let winWid = document.documentElement.clientWidth; // Ширина екрана клиента
let foo = Math.round(winWid / 5 - 35);
let leftOp = Math.round((winWid / 5) * 1.5);
let rightOp = Math.round((winWid / 5) * 5);

let topItems = document.querySelectorAll('.car-box.ukraine .item');
let firstWrap = document.querySelector('.car-box.ukraine .slides-wrapper');
let maxItsLeft = Math.round(-(topItems.length - 5) * (foo + 37));
let itemArray = [];

for (i = 0; i < topItems.length; i++) {
    itemArray.push(topItems[i])
    topItems[i].style.width = foo + 'px';
}
topItems[1].style.opacity = '1';
topItems[2].style.opacity = '1';
topItems[3].style.opacity = '1';

let bar = Math.round((foo + 35) * topItems.length);
firstWrap.style.width = bar + 'px';
firstWrap.style.left = 0;

for (i = 0; i < topItems.length; i++) {
    topItems[i].style.order = i + 1;
}

document.querySelector('.car-box.ukraine .btn-right').onclick = function() {
    for (i = 0; i < topItems.length; i++) {
        topItems[i].style.opacity = '0.3';
    }
    let orArr = [];
    for (i = 0; i < topItems.length; i++) {
        arrItem = parseInt(topItems[i].style.order);
        orArr.push(arrItem)
    }
    ccc = orArr.indexOf(Math.min.apply(null, orArr));

    topItems[ccc].style.order = parseInt(topItems[ccc].style.order) + topItems.length;

    for (i = 0; i < topItems.length; i++) {
        topItems[i].style.order = parseInt(topItems[i].style.order) + 1;
        if (topItems[i].offsetLeft > leftOp && topItems[i].offsetLeft < rightOp) {
            topItems[i].style.opacity = '1';
            console.log(leftOp + 'offs')
            console.log(topItems[i].offsetLeft)
        }
    }
}

document.querySelector('.car-box.ukraine .btn-left').onclick = function() {

    for (i = 0; i < topItems.length; i++) {
        topItems[i].style.opacity = '0.3';
    }
    let orArr = [];
    for (i = 0; i < topItems.length; i++) {
        arrItem = parseInt(topItems[i].style.order);
        orArr.push(arrItem)
    }
    ccc = orArr.indexOf(Math.min.apply(null, orArr));

    topItems[ccc].style.order = parseInt(topItems[ccc].style.order) + topItems.length;
    for (i = 0; i < topItems.length; i++) {
        topItems[i].style.order = parseInt(topItems[i].style.order) + 1;
        if (topItems[i].offsetLeft > leftOp && topItems[i].offsetLeft < rightOp) {
            topItems[i].style.opacity = '1';
            console.log(leftOp + 'offs')
            console.log(topItems[i].offsetLeft)
        }
    }
}

// SLIDER 2

let topItems2 = document.querySelectorAll('.car-box.ukraine2 .item');
let firstWrap2 = document.querySelector('.car-box.ukraine2 .slides-wrapper2');
let maxItsLeft2 = Math.round(-(topItems2.length - 5) * (foo + 37));
let itemArray2 = [];

for (i = 0; i < topItems2.length; i++) {
    itemArray2.push(topItems2[i])
    topItems2[i].style.width = foo + 'px';
}
topItems2[1].style.opacity = '1';
topItems2[2].style.opacity = '1';
topItems2[3].style.opacity = '1';

let bar2 = Math.round((foo + 35) * topItems2.length);
firstWrap2.style.width = bar2 + 'px';
firstWrap2.style.left = 0;

for (i = 0; i < topItems2.length; i++) {
    topItems2[i].style.order = i + 1;
}


document.querySelector('.car-box.ukraine2 .btn-right2').onclick = function() {
    for (i = 0; i < topItems2.length; i++) {
        topItems2[i].style.opacity = '0.3';
    }
    let orArr = [];
    for (i = 0; i < topItems2.length; i++) {
        arrItem = parseInt(topItems2[i].style.order);
        orArr.push(arrItem)
    }
    ccc = orArr.indexOf(Math.min.apply(null, orArr));

    topItems2[ccc].style.order = parseInt(topItems2[ccc].style.order) + topItems2.length;

    for (i = 0; i < topItems2.length; i++) {
        topItems2[i].style.order = parseInt(topItems2[i].style.order) + 1;
        if (topItems2[i].offsetLeft > leftOp && topItems2[i].offsetLeft < rightOp) {
            topItems2[i].style.opacity = '1';
            console.log(leftOp + 'offs')
            console.log(topItems2[i].offsetLeft)
        }
    }
}

document.querySelector('.car-box.ukraine2 .btn-left2').onclick = function() {

    for (i = 0; i < topItems2.length; i++) {
        topItems2[i].style.opacity = '0.3';
    }
    let orArr = [];
    for (i = 0; i < topItems2.length; i++) {
        arrItem = parseInt(topItems2[i].style.order);
        orArr.push(arrItem)
    }
    ccc = orArr.indexOf(Math.min.apply(null, orArr));

    topItems2[ccc].style.order = parseInt(topItems2[ccc].style.order) + topItems2.length;
    for (i = 0; i < topItems2.length; i++) {
        topItems2[i].style.order = parseInt(topItems2[i].style.order) + 1;
        if (topItems2[i].offsetLeft > leftOp && topItems2[i].offsetLeft < rightOp) {
            topItems2[i].style.opacity = '1';
            console.log(leftOp + 'offs')
            console.log(topItems2[i].offsetLeft)
        }
    }
}

// SLIDER 3

let topItems3 = document.querySelectorAll('.car-box.ukraine3 .item');
let firstWrap3 = document.querySelector('.car-box.ukraine3 .slides-wrapper3');
let maxItsLeft3 = Math.round(-(topItems3.length - 5) * (foo + 37));
let itemArray3 = [];

for (i = 0; i < topItems3.length; i++) {
    itemArray3.push(topItems3[i])
    topItems3[i].style.width = foo + 'px';
}
topItems3[1].style.opacity = '1';
topItems3[2].style.opacity = '1';
topItems3[3].style.opacity = '1';

let bar3 = Math.round((foo + 35) * topItems3.length);
firstWrap3.style.width = bar3 + 'px';
firstWrap3.style.left = 0;

for (i = 0; i < topItems3.length; i++) {
    topItems3[i].style.order = i + 1;
}


document.querySelector('.car-box.ukraine3 .btn-right3').onclick = function() {
    for (i = 0; i < topItems3.length; i++) {
        topItems3[i].style.opacity = '0.3';
    }
    let orArr = [];
    for (i = 0; i < topItems3.length; i++) {
        arrItem = parseInt(topItems3[i].style.order);
        orArr.push(arrItem)
    }
    ccc = orArr.indexOf(Math.min.apply(null, orArr));

    topItems3[ccc].style.order = parseInt(topItems3[ccc].style.order) + topItems3.length;

    for (i = 0; i < topItems3.length; i++) {
        topItems3[i].style.order = parseInt(topItems3[i].style.order) + 1;
        if (topItems3[i].offsetLeft > leftOp && topItems3[i].offsetLeft < rightOp) {
            topItems3[i].style.opacity = '1';
            console.log(leftOp + 'offs')
            console.log(topItems3[i].offsetLeft)
        }
    }
}

document.querySelector('.car-box.ukraine3 .btn-left3').onclick = function() {

    for (i = 0; i < topItems3.length; i++) {
        topItems3[i].style.opacity = '0.3';
    }
    let orArr = [];
    for (i = 0; i < topItems3.length; i++) {
        arrItem = parseInt(topItems3[i].style.order);
        orArr.push(arrItem)
    }
    ccc = orArr.indexOf(Math.min.apply(null, orArr));

    topItems3[ccc].style.order = parseInt(topItems3[ccc].style.order) + topItems3.length;
    for (i = 0; i < topItems3.length; i++) {
        topItems3[i].style.order = parseInt(topItems3[i].style.order) + 1;
        if (topItems3[i].offsetLeft > leftOp && topItems3[i].offsetLeft < rightOp) {
            topItems3[i].style.opacity = '1';
            console.log(leftOp + 'offs')
            console.log(topItems3[i].offsetLeft)
        }
    }
}