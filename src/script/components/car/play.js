let lists = this.cart.goods_list.map((item)=>{
			return (
				<div className="item">
					<div className="check"></div>
					<div className="img">{item.goods_thumb}</div>
					<div className="info">
						<div className="title">{item.goods_name}</div>
						<div className="attr"></div>
						<div className="price"></div>
						<div className="bottom">
							<div className="number"></div>
							<div className="delete"></div>
						</div>
					</div>
				</div>
			)
		})