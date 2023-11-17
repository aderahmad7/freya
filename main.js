function toogleDetail(e) {
    const target = $(e.target)
    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")

    if ($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    } else {
        $(target).html("Less Info").addClass("active")
    }

    $(detail).slideToggle()
}

function onFormSubmit(e) {
    e.preventDefault()
    const email = $("#input_email")
    const subject = $("#input_subject")
    const message = $("#input_messagge")

    
        alert("Pesan terkirim")
        console.log($(email).val())
        console.log($(subject).val())
        console.log($(message).val())
    

    
    

}