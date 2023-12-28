
        let btn_diva = document.getElementById("drinks");
        let btn_divb = document.getElementById("snacks");
        let diva = document.getElementById("id-menu-drinks");
        let divb = document.getElementById("id-menu-snacks");
        btn_diva.addEventListener('click', () => {
            diva.style.display = "block";
            divb.style.display = "none";
        });
        btn_divb.addEventListener('click', () => {
            diva.style.display = "none";
            divb.style.display = "block";
        });

    


    let index = 0;
    change();

    function change() {
        var x = document.getElementsByClassName("sliders");

        for(i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        index++;

        if(index > x.length) {
            index = 1;
        }
        x[index - 1].style.display = "block";

        setTimeout(change,2000);
    }
