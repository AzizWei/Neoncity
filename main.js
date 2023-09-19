window.onload = () =>{
    loadAnimation()
    navbar.adjust()
}

window.onresize = () =>{
    navbar.adjust()
}


function loadAnimation(){
    /* 運用GSAP時間腺功能製作補間動畫 */
    const tween = gsap.timeline({ delay: 0.8})

    /* === loading === */
        //display:"none" 記得加""表字串而非變數
    tween.to(".loading",{duration:0.5, opacity:0, display:"none"})

    /* === header === */
        //from:從GSAP動畫樣式過渡到原CSS的動畫樣式 
        //power2是原本GSAP的ease參數 
        //每1rem = 16px
    tween.from("header",{ duration:0.5, ease:"power2",y:-16*6 })
        //to:執行完原CSS的動畫樣式後才執行此動畫 
        //duration的默認是1改0
        // 原header的transition 設為0 在此時再次改回0.3s 
    tween.to("header",{ duration:0, transition:0.3})

    /* === aside === */
    tween.from(".info",{ duration:0.5, ease:"power2", opacity:0, y:40 })

    /* === svg === */
    tween.from(".background-svg",{ duration:1.5, ease:"power2", opacity:0, x:80 })
}


//navbar

// import { gsap } from "gsap/gsap-core" 
// import { navbar } from "./navbar"

const sizeState = {
    "BIG":"big",
    "SMALL":"small"
}
class Navbar{
    sizeState = undefined

    constructor(){
        this.sizeState = sizeState.BIG
    }

    adjust = () => {
        let currentState = window.innerWidth > 800 ? sizeState.BIG : sizeState.SMALL

        if( this.sizeState !== currentState){
            this.sizeState = currentState
            this._navAdjust()
        }
    }
    _navAdjust = () => {
        switch(this.sizeState){
            case sizeState.SMALL:
                this._navBecomeSmall()
                break
            case sizeState.BIG:
                this._navBecomeBig()
                break
            default:
                break
        }
    }

    _navBecomeSmall = () =>{
        const tween = gsap.timeline()
        
        tween.to("nav",{duration:0.6, ease:Power2, opacity:0, x:300, display:"none"})

    }
    _navBecomeBig = () =>{
        const tween= gsap.timeline()

        tween.to("nav",{duration:0.6,ease:Power2,opacity:0})
    }

}

// const navbar = new Navbar()
// export { navbar }