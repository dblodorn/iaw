// Build A video sequence
// Test with Safari + other browsers
import hasClass from './has-class'

export default function mediaSequenceFunc (playState) { 
  
  let i = 0,
      v = 0,
      slideArray = [],
      slide = document.querySelectorAll('.sequence-slide'),
      timeoutGap = 2000,
      transitionTimer = () => {}
  
  const slideCount = slide.length

  // Store Slides in Object
  while(v < slideCount) {
    slideArray.push(slide[v])
    v++
  }

  // Slide Play Func
  const playSlide = (slideNo) => {
    slideNo.classList.add('slide-visible')
    if (hasClass(slideNo, 'video-sequence-slide')) {
      let video = slideNo.children[0].lastChild,
          videoMs = Math.floor(video.duration * 1000)
          video.play()
      // Pause Set
      console.log(videoMs)
    } else if (hasClass(slideNo, 'static-sequence-slide')) {
      // Pause Set
      let staticSlideTimeout = slideNo.children[0].attributes[1].nodeValue
      console.log(staticSlideTimeout)
    }
  }

  // Run the Slideshow if we Have Play = true
  if(playState === true) {
    playSlide(slideArray[0])
    const slideShow = () => {
      if (i === (slideCount - 1)) {
        transitionTimer = () => {
          return false
        }
      } else {
        transitionTimer(
          setTimeout(() => {
            playSlide(slideArray[i])
            slideShow()
          }, (timeoutGap))
        )
        i++
      }
    }
    slideShow()
  } else if (playState === false) {
    return false
  }
}
