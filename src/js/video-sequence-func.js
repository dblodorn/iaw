// Build A video sequence
// Test with Safari + other browsers

export default function videoSequenceFunc (videoSequenceObj) { 
  // Globals for Video Player Instance
  const videoCount = document.querySelectorAll('.video-container').length
  const videoOne = document.getElementById('video-1')
  const transitionTime = videoSequenceObj.dataset.transitionLength
  let i = 0
  let count = 1
  // Roll The Sequence
  const rollVideo = () => {
    videoOne.addEventListener('loadeddata', function() {
      if (videoOne.readyState === 4) {
        setTimeout(() => {
          videoPlayOnce()
        }, 50)
      }
    })
  }
  // CoreVideoTrigger
  const videoPlayOnce = () => {
    let video = document.getElementById('video-' + i)
    
    if(video) {
      console.log('video ' + (i + 1))
      console.log('has video')
      video.classList.add('video-visible')
      video.play()
    }
    
    // Duration Controls
    let videoNext = document.getElementById('video-' + (i + 1)),
        videoDuration = video.duration,
        videoMs = Math.floor(videoDuration * 1000),
        videoGap = videoMs - transitionTime
    if (i === (videoCount - 1)) {
      i = 0
      videoNext = document.getElementById('video-0')
    } else {
      i++
      videoNext = videoNext
    }

    // Clear This on leave
    let transitionTimer = () => {
      setTimeout(() => {
        videoNext.classList.add('video-visible')
        videoPlayOnce()
      }, (videoGap - transitionTime))
      setTimeout(() => {
        video.classList.remove('video-visible')
      }, videoGap)
    }
    
    transitionTimer()
}
  rollVideo()
}
