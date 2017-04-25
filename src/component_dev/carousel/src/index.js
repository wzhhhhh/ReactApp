<<<<<<< HEAD
<<<<<<< HEAD
import '../../common/tapEventPluginInit.js';
import './style.scss';
import Carousel from './carousel.js';

export default Carousel;
=======
/**
 * @component Carousel
 * @version 3.0.0
 * @description 走马灯组件
 * 支持用户自定义动画对象，支持用户自定义css动画
 * 支持用户自定义子节点
 *
 * 默认动画：
 * + 横向滚动动画
 * + 为当前页加上on的类名，因此可以附加css动画效果。
 *
 * 默认走马灯子节点：
 * + 支持图片懒加载
 * + 图片加载失败的替换图模板
 *
 * 查看Demo获得实例：
 * 使用自定义动画实现图片查看器
 * 内置动画配合css动画效果
 *
 * 使用注意：
 * - `Carousel`组件的父节点需要有宽度，`Carousel`组件默认宽度为‘100%’，如果父节点没有宽度会导致默认滚动动画失效。
 * - `Carousel`组件不能直接嵌套在`Touchable`组件中，请使用`CarouselItem`的`onTap`来给它的Item绑定tap事件回调，
 * 或者用`Touchable`组件包裹Item。
 * @author eva.li
 * @instructions {instruInfo: ./carousel.md}{instruUrl: carousel/index.html?hideIcon}
 */

=======
import '../../common/tapEventPluginInit.js';
>>>>>>> master
import './style.scss';
import Carousel from './carousel.js';

<<<<<<< HEAD
export default Carousel;
>>>>>>> master
=======
export default Carousel;
>>>>>>> master
