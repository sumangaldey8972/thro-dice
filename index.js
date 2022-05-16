document.getElementById("roll").addEventListener("click", dicefun);

    function dicefun() {
        let a = document.getElementById('member-1');
        a.innerText = Math.floor(Math.random() * 6 + 1);
        // console.log(a);

        let b = document.getElementById('member-2');
        b.innerText = Math.floor(Math.random() * 6 + 1);
        // console.log(b);

        let c = document.getElementById('member-3');
        c.innerText = Math.floor(Math.random() * 6 + 1);
        // console.log(c);

        let dice = [a, b, c];
        dice.sort(function (a, b) {
            if (a.innerText < b.innerText) {
                return -1;
            } else if (a.innerText > b.innerText) {
                return 1;
            } else {
                return 0;
            }
        })

        console.log(dice);

        if (dice[0].innerText == dice[1].innerText) {
            dice[0].style.backgroundColor = "blue";
            dice[1].style.backgroundColor = "blue";
        } else {
            dice[0].style.backgroundColor = "red";
            dice[1].style.backgroundColor = "yellow";
        }

        if (dice[1].innerText == dice[2].innerText) {
            dice[1].style.backgroundColor = "blue";
            dice[2].style.backgroundColor = "blue";
        } else {
            dice[2].style.backgroundColor = "green";
            document.getElementById("winner").innerText = `winner is: ${dice[2].getAttribute("id")}`;
        }
    }