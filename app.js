const rects = document.querySelectorAll('.rect')

function moveUp(){
    const rects_to_up= [rects[2], rects[3]]
    for(let rect of rects_to_up){
        if(!rect.classList.contains('show') && rect.getBoundingClientRect().top<600){
            rect.classList.add('show')
        }
    }
}

window.addEventListener("scroll", moveUp)

const menus = document.querySelectorAll('.menu')
const nav = document.getElementById("nav-box")
const navHeight = nav.getBoundingClientRect().height

window.addEventListener("scroll", (e)=>{
    const scrollHeight = window.pageYOffset;
    if(scrollHeight>navHeight){
        nav.style.backgroundColor=`rgba(245, 245, 245, 0.315)`
    } else{
        nav.style.backgroundColor=`transparent`
    }

})

menus.forEach((menu)=>{
    menu.addEventListener("click", (e)=>{
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1)
        const element = document.getElementById(id)
        let position = element.offsetTop //-navHeight

        window.scrollTo({
            left: 0,
            top: position,
        })
    })
})

//menus.addEventListener("click", relocateTo)


var colorPicker = new iro.ColorPicker("#picker", {
    width: 200,
    layout: [
        { 
          component: iro.ui.Wheel,
          options: {
              layoutDirection: 'vertical',
          }
        },
        {
        component: iro.ui.Slider,
        options: {
            sliderType: 'value',
            layoutDirection: 'vertical',
        }
        }
      ],
})

const color_info = document.getElementById("color-info")
colorPicker.on(["color:init", "color:change"], function(color){
    color_info.innerHTML = "hex : <span>"+color.hexString+"</span>"
})

// var rootStyle = document.documentElement.style
// colorPicker.on(['color:init', 'color:change'], function(color) {
//   rootStyle.setProperty('--iro-color-value', color.rgbString)
// })

const color_container = document.getElementById("color-container")
const color_input = document.getElementById("palette")
const colors = document.querySelectorAll(".color")

color_container.addEventListener("click", function(e){
    const target = e.target
    if(target.className === 'color'){
        target.style.backgroundColor = colorPicker.color.hexString
        target.innerHTML = colorPicker.color.hexString
        //color_input.value += (colorPicker.color.hexString+", ")
    }
})
color_input.addEventListener("click", (e)=>{
    const regex = /^#/
    let color_collected = ""
    for(let color of colors){
         if(regex.test(color.innerText))
             color_collected += (color.innerText+", ")
    }
    e.target.value = color_collected.slice(0, -2)

    copyText(e.target.value)

})

function copyText(text){
    navigator.clipboard.writeText(text)
}
