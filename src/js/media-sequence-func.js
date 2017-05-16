// Build A MultiMedia sequence
// TO DO - Set API For Transitions ETC.
export default function mediaSequenceFunc (playState,slideClass) {
  let i = 0,
      v = 0,
      slideArray = [],
      slide = document.querySelectorAll(slideClass),
      transitionTimer = () => {}
  const slideCount = slide.length
  while(v < slideCount) {
    slideArray.push(slide[v])
    v++
  }
  // Run the Slideshow if we Have Play = true
  if(playState === true) {
    const slideShow = () => {
      if (i === (slideCount)) {
        slideArray[slideCount - 1].classList.remove('slide-visible')
        transitionTimer = () => {
          return false
        }
      } else {
        // Length Of Slide
        const transitionTimerFunc = (timeoutGap) => {
          transitionTimer(
            setTimeout(() => {
              slideShow()
            }, (timeoutGap))
          )
        }
        // Set Timeout on slide transition.
        let slideNo   = slideArray[i],
            prevSlide = slideArray[i - 1],
            slideType = slideNo.dataset.slideType
        
        slideNo.classList.add('slide-visible')
        
        if(prevSlide != undefined) {
          prevSlide.classList.remove('slide-visible')
        }

        if (slideType === 'video') {
          let video = slideNo.children[0].lastChild
          transitionTimerFunc(Math.floor(video.duration * 1000))
          video.play()          
        } else if (slideType === 'static') {
          transitionTimerFunc(slideNo.children[0].attributes[1].nodeValue)
        }
        
        i++
      }
    }
    slideShow()
  } else if (playState === false) {
    return false
  }
}
