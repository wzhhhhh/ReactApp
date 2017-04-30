import {createStore} from 'redux';


export default () => {
	//map state to component props
	let mapStateToProps = (state)=> {
		return {
			buyGoodsTypeNumber: state.buyGoodsTypeNumber
		}
	}
	//map dispatch to component props
	let mapDispatchToProps = (dispatch) => {
		return {
			onChangeNumber: (action) => dispatch(action)
		}
	}

	//reduces
	let reduces = (state={buyGoodsTypeNumber: 0}, action) => {
		switch (action.type){
			case 'CHECKIN':
				return {
					buyGoodsTypeNumber: state.buyGoodsTypeNumber + 1
				}
			case 'CHECKOUT':
				return {
					buyGoodsTypeNumber: state.buyGoodsTypeNumber - 1
				}
			case 'DELETE':
				return {
					buyGoodsTypeNumber: state.buyGoodsTypeNumber - 1
				}
			case 'RESET':
				return {
					buyGoodsTypeNumber: action.buyGoodsTypeNumber
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