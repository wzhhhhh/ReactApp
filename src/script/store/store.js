import {createStore} from 'redux'

export default ()=>{
	// 映射 Redux状态 到 组件 属性
	//Map Redux states to components props
	let Mstp = (state)=>{
		return {
			title:state.title
		}
	}
	

	// 映射 Redux 动作 到 组件 属性
    // Map Redux actions(Dispatch) to ceomponnts props
    let Matp = (dispatch)=>{
    	return {
    		onChangeTitle : (state)=>dispatch(state)
    	}
    }

    // Reducer
    let chenger = (state={title:'大宝家私人订制'},action) =>{
    	switch (action.type) {
			case 'SETTITLE': return {title : action.title}
			
			default: return state
    	}
    }

    //穿件一个store
    let store =createStore(chenger)
	

	//整个函数返回值(就是let的三个方法)
    return {
    	Mstp,
    	Matp,
    	store
    }

}