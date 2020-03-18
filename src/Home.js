import React, {Fragment} from "react";
import * as uuid from "uuid";
import { connect } from "react-redux";

import Header from "./Header";
import {fetchData,removeData} from "./store/action";
import Product from "./Product";

class Home extends React.Component{

	constructor(props) {
        super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.loadData = this.loadData.bind(this);
		this.loadMore = this.loadMore.bind(this);
		this.limit = 14;
		this.page = 1;
		this.query = "";
	}

	loadData(append=false){
		const {uniqueId,fetchData} = this.props;
		fetchData({
	        uniqueId,
	        method:'GET',
	        responseDataId:"results",
	        uri: `/v3/search/anime?q=${this.query}&limit=${this.limit}&page=${this.page}`,
	        append:append,
	        params: {
	            q:this.query,
	            limit:this.limit,
	            page:this.page
	        },
	    });
	}

	loadMore(){
		if(this.props.dataProps.hasNoMoreData){
            return;
        }
		this.page += 1;
		this.loadData(true);
	}

	onSubmit(e){
		let input = document.getElementById('search_query');
		let query = input.value;
		if(query){
			this.query = query;
			this.loadData()
		}
	}


	render(){
		const {data,dataProps={}} = this.props;
		
		const list = data || [];
		const showFooter = !!list.length;

		return <div className="container">
			<Header btnLabel="GO" onSubmit={this.onSubmit}/>
			<section className="wrapper view_center">
				{
					list.map((item,i)=> {
						return <Product key={item.mal_id} {...item}/>
					})
				}
			</section>
			{	
				showFooter && <div className="view_center footer">
					{dataProps.showFooterLoading ? <span className="footer_loading">Loading...</span> : <div className="load_more" onClick={this.loadMore}>Load More</div>}
				</div>
			}
		</div>
	}
}

Home = connect((state, ownProps) => {
    let mapStateToProps = {};
    if (state.data && state.data[ownProps.uniqueId]) {
    	mapStateToProps.dataProps = state.data[ownProps.uniqueId];
        mapStateToProps.data = state.data[ownProps.uniqueId]["data"];
    }
    return mapStateToProps;

}, {
    fetchData,
    removeData,
})(Home);

export default Home;