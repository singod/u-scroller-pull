export default class Scroller {
  constructor(callback, options) {
    let _options = {
      top : 0,
      pullH : 0,
      outerH : 0,
      prevTop : 0,
      startY : 0,
      offset : 100,
      fetching : false,
      hasMore: true
    }
    this.__callback = callback
    _options = {..._options, ...options}
    for (let key in _options) {
			this[key] = _options[key];
    }
    this.innerH = this.innerContent.clientHeight
    this.time = undefined
    this.moveY = undefined
  }

  initPullToRefresh(startPullCallback, arrivalFreedCallback, freedCallback) {
    this.pullStart = startPullCallback
    this.arrivalFreed = arrivalFreedCallback
    this.freed = freedCallback
  }

  initPullToInfinite(infiniteCallback) {
    this.onInfinite = infiniteCallback
  }

  doTouchStart(touches) {
    this.prevTop = this.top
    this.startY = touches[0].pageY
    this.innerH = this.innerContent.clientHeight
  }

  doTouchMove(touches) {

    this.moveTimer = new Date().getTime()
    this.time = this.moveTimer - this.prevMoveTimer
    this.prevMoveTimer = this.moveTimer
    let moveY = touches[0].pageY - this.startY
    this.moveY = moveY
    let _top = moveY + this.prevTop
    this.top = _top
    this.__callback(_top)

    if (this.fetching) return

    let isBottom = Math.abs(_top) + this.outerH > this.innerH ? true : false
    if (moveY > 0) {
      if (!this.enableRefresh) return
      _top >= this.offset ? this.arrivalFreed() : this.pullStart()
    } else {
      if (!isBottom || !this.hasMore || !this.enableInfinite) return
      this.fetching = true
      this.onInfinite()
    }
  }

  doTouchEnd(e) {
    this.innerH = this.innerContent.clientHeight
    let _normalEndTop = this.outerH - this.innerH
    let isBottom = Math.abs(this.top) + this.outerH >= this.innerH ? true : false
    console.log(this.time, this.moveY)
    if (this.top >= this.offset) {
      if (!this.enableRefresh) {
        this.__callback(0, this.top) 
        this.top = 0
        return
      }
      this.__callback(this.pullH, this.top)
      this.top = this.pullH
      this.freed()
      return
    }
    if (this.top < 0 && !isBottom) return
    if (this.top < 0 && isBottom) {
      let _h = _normalEndTop
      if (this.fetching) {
        let loadH = this.content.querySelector('.load-more').clientHeight
        _h = _normalEndTop - loadH
      }
      this.__callback(_h, this.top)
      this.top = _h
      return
    }
    console.log('asadsada', this.top)
    this.__callback(0, this.top)
    this.top = 0
  }

  startRefresh() {
    this.fetching = true
  }

  finishedRefesh() {
    this.fetching = false
    this.__callback(0, this.top)
    this.top = 0
  }

  finishedInfinite(hasMore) {
    this.fetching = false
    this.hasMore = hasMore
  }
}
