/**
<<<<<<< HEAD
 * @function aniInfinate
 * @description
 * 该动画适用于图片查看器情景，即图片数两较多，且不需要循环的情况下
 * @param [ALLOWANCEAngle, ALLOWANCEDistance] 触发事件处理的手势角度tan绝对值，触发翻页的水平位移。
 */
import React from 'react';
import { getRAF } from '../../common/util.js';

=======
 * infinateAni
 * @description
 * 该动画适用于图片查看器情景，即图片数两较多的情况下
 *
 */
import React from 'react';
>>>>>>> master
function getNumBetween(min, max) {
    if (this < min) {
        return min;
    } else if (this > max) {
        return max;
    }
    return this;
}
<<<<<<< HEAD

function getLoopNum(min, max) {
    if (this < min) {
        return [max, false];
    } else if (this > max) {
        return [min, false];
    }
    return [this, true];
}
// 45度的tan值
export default (
    ALLOWANCEAngle = 1,
    ALLOWANCEDistance = 30
) => {
    const {
        rAF,
        cancelrAF
    } = getRAF();
    const obj = {
        aniQue: [],
        handleData({
            pageNow
        }, children) {
            const newChildren = [];
            for (let i = pageNow - 2; i < pageNow + 1; i++) {
                // 当前页面为最后一页时children[pageNow]为空
                // 当为首页时children[pageNow-2]为空
                if (!children[i]) {
                    continue;
                }
                newChildren.push(React.cloneElement(children[i], {
                    style: {
                        WebkitTransform: `translate(${i * 100}%, -50%) translateZ(0)`,
                        transform: `translate(${i * 100}%, -50%) translateZ(0)`,
                        position: 'absolute',
                        left: 0,
                        top: '50%'
                    }
                }));
            }
            // 计算dom更新算法
            newChildren.sort((prev, next) => {
                if (prev.key % 3 === 0) {
                    return true;
                }
                if (next.key % 3 === 0) {
                    return false;
                }
                return prev.key % 3 - next.key % 3;
            });
            // 用于撑起容器高度的当前元素
            newChildren.unshift(React.cloneElement(children[pageNow - 1], {
                key: 0,
                currentPage: pageNow,
                style: {
                    visibility: 'hidden'
                }
            }));
            return newChildren;
        },
        touchstart() {},
        _checkTouchAngle(prev, next) {
            const changeX = prev[0] - next[0];
            const changeY = next[1] - prev[1];
            const tan = Math.abs(changeX) / Math.abs(changeY);
            return tan > ALLOWANCEAngle;
        },
        touchmove(aniObj) {
            const {
                touchmoveLocation,
                touchstartLocation,
                stageDOM,
                containerDOM,
                speed,
                pageNow
            } = aniObj;
            const unit = stageDOM.clientWidth;
            if (!this._checkTouchAngle(touchstartLocation, touchmoveLocation)) {
                return;
            }
            const change = (touchstartLocation[0] - touchmoveLocation[0]) / unit + (pageNow - 1);
            const translateX = -change * 100;
            // console.log('move' + translateX);
            this._addCss({
                dom: containerDOM,
                speed,
                translateX,
                reset: true
            });
        },
        touchcancel() {},
        touchend(aniObj) {
            const {
                touchendLocation,
                touchstartLocation,
                containerDOM,
                speed,
                pageNow
            } = aniObj;
            let change;
            const changeX = touchstartLocation[0] - touchendLocation[0];
            if (!this._checkTouchAngle(touchstartLocation, touchendLocation) || Math.abs(changeX) < ALLOWANCEDistance) {
                change = pageNow - 1;
            } else {
                change = changeX > 0 ? pageNow : pageNow - 2;
                if (!aniObj.loop) {
                    const min = 0;
                    const max = aniObj.pagesNum - 1;
                    change = getNumBetween.call(change, min, max);
                }
            }
            const translateX = -change * 100;
            this._addCss({
                dom: containerDOM,
                speed,
                reset: false,
                translateX
            });
            return this.checkAni(aniObj, change + 1);
        },
        checkAni(aniObj, num, isAni = true) {
            const {
                loop,
                pagesNum,
                containerDOM,
                speed
            } = aniObj;
            let finalNum;
            let finalAni = true;
            if (!loop) {
                finalNum = getNumBetween.call(num, 1, pagesNum);
            } else {
                [finalNum, finalAni] = getLoopNum.call(num, 1, pagesNum);
            }
            this._addCss({
                dom: containerDOM,
                reset: !isAni || !finalAni,
                translateX: -(finalNum - 1) * 100,
                speed
            });
            return finalNum;
        },
        next(aniObj) {
            return this.checkAni(aniObj, aniObj.pageNow + 1);
        },
        arrive(aniObj, num, isAni) {
            return this.checkAni(aniObj, num, isAni);
        },
        prev(aniObj) {
            return this.checkAni(aniObj, aniObj.pageNow - 1);
        },
        _addCss({
            dom,
            translateX,
            reset
        }) {
            const that = this;
            // 此处为Dom操作
            this.aniQue.push({ translateX, reset });
            if (this.reqAni) {
                cancelrAF(this.reqAni);
            }
            this.reqAni = rAF(() => {
                if (!that.aniQue.length) return;
                const last = that.aniQue.pop();
                that.aniQue.length = 0;
                if (last.reset) {
                    dom.style.webkitTransition = 'none';
                    dom.style.transition = 'none';
                } else {
                    dom.style.webkitTransition = '';
                    dom.style.transition = '';
                }
                dom.style.webkitTransform = `translate(${last.translateX}%, 0) translateZ(0)`;
                dom.style.transform = `translate(${last.translateX}%, 0) translateZ(0)`;
                that.reqAni = null;
            });
        }
    };
    return obj;
};
=======
// 30度的tan值
const ALLOWANCE = 0.57;
export default (
    ALLOWANCEAngle = 0.57,
    ALLOWANCEDistance = 30
) => ({
    handleData({
        pageNow
    }, children) {
        if (pageNow === 1) {
            // debugger
        }
        const newChildren = [];
        for (let i = pageNow - 2; i < pageNow + 1; i++) {
            // 当前页面为最后一页时children[pageNow]为空
            // 当为首页时children[pageNow-2]为空
            if (!children[i]) {
                continue
            }
            newChildren.push(React.cloneElement(children[i], {
                style: {
                    WebkitTransform: `translate(${i * 100}%, -50%) translateZ(0)`,
                    transform: `translate(${i * 100}%, -50%) translateZ(0)`,
                    position: 'absolute',
                    left: 0,
                    top: '50%'
                }
                // currentPage:pageNow,
            }));
        }
        // 计算dom更新算法
        newChildren.sort((prev, next) => {
            if (prev.key % 3 === 0) {
                return true;
            }
            if (next.key % 3 === 0) {
                return false;
            }
            return prev.key % 3 - next.key % 3;
        });
        // 用于撑起容器高度的当前元素
        newChildren.unshift(React.cloneElement(children[pageNow - 1], {
            key: 0,
            currentPage: pageNow,
            style: {
                visibility: 'hidden'
            }
        }));
        return newChildren;
    },
    touchstart() {},
    // touchend(aniObj) {
    //     const {
    //         touchstartLocation,
    //         touchendLocation,
    //         pagesNum,
    //         pageNow,
    //         loop
    //     } = aniObj;
    //     let locatinoChange = touchstartLocation[0] - touchendLocation[0],
    //         change;
    //     change = locatinoChange > 0 ? pageNow + 1 : pageNow - 1;
    //     return this._checkAni(aniObj, change);
    // },
    touchmove(aniObj) {
        const {
            touchmoveLocation,
            touchstartLocation,
            stageDOM,
            containerDOM,
            speed,
            pageNow
        } = aniObj;
        const unit = stageDOM.clientWidth;
        const change = (touchstartLocation[0] - touchmoveLocation[0]) / unit + (pageNow - 1);
        const translateX = -change * 100;
        // console.log('move' + translateX);
        this._addCss({
            dom: containerDOM,
            speed,
            translateX,
            reset: true
        });
    },
    touchcancel() {},
    touchend(aniObj) {
        const {
            touchendLocation,
            touchstartLocation,
            containerDOM,
            speed,
            pageNow
        } = aniObj;
        const changeX = touchstartLocation[0] - touchendLocation[0];
        const changeY = touchendLocation[1] - touchstartLocation[1];
        const tan = Math.abs(changeX) / Math.abs(changeY);
        let change;
        if (tan < ALLOWANCE || Math.abs(changeX) < ALLOWANCEDistance) {
            change = pageNow - 1;
        } else {
            change = changeX > 0 ? pageNow : pageNow - 2;
            if (!aniObj.loop) {
                const min = 0;
                const max = aniObj.pagesNum - 1;
                getNumBetween.call(this, min, max);
                // if (change < min) {
                //     change = min;
                // } else if (change > max) {
                //     change = max;
                // }
            }
        }
        const translateX = -change * 100;
        this._addCss({
            dom: containerDOM,
            speed,
            translateX
        });
        return this.checkAni(aniObj, change + 1);
    },
    checkAni(aniObj, num, isAni = true) {
        const {
            loop,
            pagesNum,
            containerDOM,
            speed
        } = aniObj;
        if (!loop) {
            // num < 1 ? num = 1 : '';
            // num > pagesNum ? num = pagesNum : '';
            num = getNumBetween.call(num, 1, pagesNum);
        } else {
            num < 1 ? num = pagesNum : '';
            num > pagesNum ? num = 1 : '';
        }
        this._addCss({
            dom: containerDOM,
            reset: !isAni,
            translateX: -(num - 1) * 100,
            speed
        });
        return num;
    },
    next(aniObj) {
        return this.checkAni(aniObj, aniObj.pageNow + 1);
    },
    arrive(aniObj, num, isAni) {
        return this.checkAni(aniObj, num, isAni);
    },
    prev(aniObj) {
        return this.checkAni(aniObj, aniObj.pageNow - 1);
    },
    _addCss({
        dom,
        translateX,
        reset
    }) {
        if (reset) {
        dom.style.webkitTransition = 'none';
        dom.style.transition = 'none';
        } else {
        dom.style.webkitTransition = '';
        dom.style.transition = '';
        }
        dom.style.webkitTransform = `translate(${translateX}%, 0) translateZ(0)`;
        dom.style.transform = `translate(${translateX}%, 0) translateZ(0)`;
    }
});
>>>>>>> master
