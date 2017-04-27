import {createStore} from 'redux';


export default () => {
	//map state to component props
	let mapStateToProps = (state)=> {
		return {
			number: state.number
		}
	}
	//map dispatch to component props
	let mapDispatchToProps = (dispatch) => {
		return {
			onChangeNumber: (action) => dispatch(action)
		}
	}

	//reduces
	let reduces = (state={number: 0}, action) => {
		switch (action.type){
			case 'NUMBERPLUS':
				return {
					number: state.number + 1
				}
			case 'NUMBERMINUS':
				return {
					number: state.number - 1
				}
			default :
				return  state
		}
	}
	const cartStore = createStore(reduces);
	return {
		mapStateToProps,
		mapDispatchToProps,
		cartStore
	}

}