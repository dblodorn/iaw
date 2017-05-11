// Build A video sequence
// Test with Safari + other browsers
import hasClass from './has-class'

export default function mediaSequenceFunc (playState) { 
  
  let i = 0,
      v = 0,
      slideArray = [],
      slide = document.querySelectorAll('.sequence-slide'),
      transitionTimer = () => {}
  
  const slideCount = slide.length

  // Store Slides in Object
  while(v < slideCount) {
    slideArray.push(slide[v])
    v++
  }

  // Run the Slideshow if we Have Play = true
  if(playState === true) {
    const slideShow = () => {
      if (i === (slideCount)) {
        transitionTimer = () => {
          return false
        }
      } else {
        const transitionTimerFunc = (timeoutGap) => {
          transitionTimer(
            setTimeout(() => {
              slideShow()
            }, (timeoutGap))
          )
        }
        // Set Timeout
        let slideNo = slideArray[i]
        slideNo.classList.add('slide-visible')
        if (hasClass(slideNo, 'video-sequence-slide')) {
          let video = slideNo.children[0].lastChild
          transitionTimerFunc(Math.floor(video.duration * 1000))
          video.play()          
        } else if (hasClass(slideNo, 'static-sequence-slide')) {
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
