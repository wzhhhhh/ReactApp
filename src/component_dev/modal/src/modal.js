<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import RealModal from './realmodal';

/**
 * 这个虚拟的组件将会利用renderSubtreeIntoContainer将Modal从原有的位置移动到body中
 */
export default class Modal extends Component {

    static propTypes = {
        children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    };

    componentDidMount() {
        this.wrapper = document.createElement('div');
        document.body.appendChild(this.wrapper);
        this.appendWrapperToDocBody();
    }

    componentDidUpdate() {
        this.appendWrapperToDocBody();
    }

    componentWillUnmount() {
        document.body.removeChild(this.wrapper);
    }

    appendWrapperToDocBody() {
        ReactDom.unstable_renderSubtreeIntoContainer(
            this,
            <RealModal {...this.props}>
                {this.props.children}
            </RealModal>,
            this.wrapper
        );
    }

    render() {
        return null;
    }
}
=======
/**
 * @component Modal
 * @description 带遮罩层的模态弹层组件。支持多种位置和动画效果。
 *
 * @instructions {instruInfo: ./modal.md}{instruUrl: modal.html?hideIcon}
 * @author jiao.shen
 * @version 3.0.2
 */
=======
>>>>>>> master
import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import RealModal from './realmodal';

/**
 * 这个虚拟的组件将会利用renderSubtreeIntoContainer将Modal从原有的位置移动到body中
 */
export default class Modal extends Component {

    static propTypes = {
        children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    };

    componentDidMount() {
        this.wrapper = document.createElement('div');
        document.body.appendChild(this.wrapper);
        this.appendWrapperToDocBody();
    }

    componentDidUpdate() {
        this.appendWrapperToDocBody();
    }

    componentWillUnmount() {
        document.body.removeChild(this.wrapper);
    }

    appendWrapperToDocBody() {
        ReactDom.unstable_renderSubtreeIntoContainer(
            this,
            <RealModal {...this.props}>
                {this.props.children}
            </RealModal>,
            this.wrapper
        );
    }

    render() {
        return null;
    }
<<<<<<< HEAD
}

RealModal.defaultProps = defaultProps;
RealModal.propTypes = propTypes;
>>>>>>> master
=======
}
>>>>>>> master
