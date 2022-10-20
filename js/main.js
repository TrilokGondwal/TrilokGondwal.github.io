//============ SHOW SIDEBAR============///

const navMenu = document.getElementById('sidebar'),
navToggle = document.getElementById('nav_toggle'),
navClose = document.getElementById('nav_close')

if(navToggle){
    navToggle.addEventListener("click", () =>{
        navMenu.classList.add('show-sidebar')
    })
}

if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}



//=========== EDUCATION====//////

const modalViews = document.querySelectorAll('.education_modal'),
    modalBtns = document.querySelectorAll('.education_button'),
    modalCloses = document.querySelectorAll('.education_modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})


// <!-- ===== MIXITUP FILTER JS -->
let mixerPortfolio = mixitup('.portfolio_container', {
    selectors: {
        target: '.portfolio_card '
    },
    animation: {
        duration: 300
    }
});

// =============ACTIVE LINK============ >

const linkWork = document.querySelectorAll('.portfolio_item')

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l => l.addEventListener("click", activeWork))

// PORTFOLIO POPUP SECTION/////////

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("portfolio_button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio_popup").classList.toggle("open");
}

document.querySelector(".portfolio_popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(".portfolio_img").src;
    document.querySelector(".portfolio_popup-subtitle span").innerHTML = portfolioItem.querySelector(".portfolio_t").innerHTML;
    document.querySelector(".portfolio_popup-body").innerHTML = portfolioItem.querySelector(".portfolio_item-details").innerHTML;
}

// Input ////

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");

}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

/* SCROLLBAR ACTIVE LINKS */
const sections = document.querySelectorAll("section[id]");


window.addEventListener("scroll", navHighlighter);

function navHighlighter()

{
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add("active-link")
        }
        else
        {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove("active-link") 
        }
    })
}







