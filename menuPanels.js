let subMenus = ["clients-sub-menu", "logistics-sub-menu", "management-sub-menu", "tools-sub-menu", "tickets-sub-menu", 
"projects-sub-menu"];

for (let i=0; i< subMenus.length; i++) {

    document.getElementById(subMenus[i]).addEventListener("click", (e)=>{

        let arrowClass = subMenus[i].split('-')[0]+"-arrow";

        for (let j=0; j< subMenus.length; j++) {

            let otherArrowClass = subMenus[j].split('-')[0]+"-arrow";

            if (Array.from(document.getElementById(subMenus[j]).parentElement.classList).includes("showMenu")
                && arrowClass != otherArrowClass) {

                document.getElementById(otherArrowClass).classList.toggle("showMenu");
                document.getElementById(subMenus[j]).parentElement.classList.toggle("showMenu");
            };
        }

        document.getElementById(subMenus[i]).parentElement.classList.toggle("showMenu");
        console.log(document.getElementById(subMenus[i]).parentElement);
        document.getElementById(subMenus[i].split('-')[0]+"-arrow").classList.toggle("showMenu");
    });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");

sidebarBtn.addEventListener("click", ()=>{

    for (let i=0; i< subMenus.length; i++) {

        let arrowClass = subMenus[i].split('-')[0]+"-arrow";

        if (Array.from(document.getElementById(subMenus[i]).classList).includes("showMenu")) {

            document.getElementById(arrowClass).classList.toggle("showMenu");
            document.getElementById(subMenus[i]).classList.toggle("showMenu");
        };
    }

    sidebar.classList.toggle("close");
});