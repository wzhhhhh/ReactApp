/**
 * @author qingguo.xu
 * 某一天的数据显示
 */
<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component, PropTypes } from 'react';
import getClassNames from 'classnames';
import Touchable from '../../touchable/src/touchable';
=======
import '../../common/tapEventPluginInit.js';
import React, { Component, PropTypes } from 'react';
import getClassNames from 'classnames';
import Touchable from '../../touchable/src';
>>>>>>> master
=======
import React, { Component, PropTypes } from 'react';
import getClassNames from 'classnames';
import Touchable from '../../touchable/src/touchable';
>>>>>>> master

const propTypes = {
    isRender: PropTypes.bool,
    week: PropTypes.array,
    selectionStartText: PropTypes.string,
    selectionEndText: PropTypes.string,
    onChange: PropTypes.func,
    renderDate: PropTypes.func
};

export default class WeekItem extends Component {

    shouldComponentUpdate(nextProps) {
        if (this.props.isRender !== nextProps.isRender) {
            return true;
        }
        return nextProps.isRender;
    }

    handleChange(str) {
        if (!str) {
            return null;
        }
        return this.props.onChange(str);
    }

    render() {
        const { selectionStartText, selectionEndText, renderDate } = this.props;
        const weeks = this.props.week.map((item, i) => {
            const { disabled, today, weekend, holiday, isCheckIn, isCheckOut, isCheck } = item;
            const fullDay = item.disabled ? null : `${item.date}-${item.day}`;
            let classNames = '';
            if (today) {
                classNames += 'today ';
            }
            if (weekend) {
                classNames += 'weekend ';
            }
            if (!!holiday) {
                classNames += 'holiday ';
            }
            if (isCheckIn) {
                classNames += 'start ';
            }
            if (isCheckOut) {
                classNames += 'end ';
            }
            if (isCheck) {
                classNames += 'range ';
            }
            if (disabled) {
                classNames += 'disabled ';
            }
<<<<<<< HEAD
<<<<<<< HEAD
            classNames = getClassNames(classNames).trim();
=======

>>>>>>> master
=======
            classNames = getClassNames(classNames).trim();
>>>>>>> master
            const ret = [
                <span key={0} className="day">{item.day}</span>,
                item.today ? (<ins key={1} className="special">今天</ins>) : null,
                item.holiday ? (<ins key={2} className="special">{item.holiday}</ins>) : null,
                item.isCheckIn ? (<span key={3} className="tip yo-ico">{selectionStartText}</span>) : null,
                item.isCheckOut ? (<span key={4} className="tip yo-ico">{selectionEndText}</span>) : null
            ];
            return (
                <Touchable key={i} onTap={() => this.handleChange(fullDay)} internalUse={true}>
                    <li
<<<<<<< HEAD
<<<<<<< HEAD
                        className={classNames || null}
=======
                        className={classNames ? getClassNames(classNames) : null}
>>>>>>> master
=======
                        className={classNames || null}
>>>>>>> master
                    >
                        {renderDate(item, ret) || ret}
                    </li>
                </Touchable>
            );
        });

        return (
            <ul className="week">{weeks}</ul>
        );
    }
}

WeekItem.propTypes = propTypes;
