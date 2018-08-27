$(document).ready(() => {
    $(document).alton({
        fullSlideContainer: 'full',
        singleSlideClass: 'slide',
        useSlideNumbers: true,
        slideNumbersBorderColor: '#fff',
        slideNumbersColor: 'transparent',
        bodyContainer: 'pageWrapper',
    });

    $(".ScrollDown").click(() => $(".paginate:nth-of-type(2n)").click());
});