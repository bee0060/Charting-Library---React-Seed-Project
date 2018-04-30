import React from 'react'
import UI from "./UI";
import RangeSelector from "./RangeSelector";
import ShareButton from "./ShareButton";
import Legend from './Legend';
import DrawingContainer from '../containers/drawingContainer'

class Chart extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.setChartContainer($$$('#chartContainer'), {
			studyOverlayEdit: this.props.toggleStudyOverlay,
			studyPanelEdit: this.props.openStudyModal
		})
	}
	componentWillReceiveProps(nextProps) {
		if (this.props.ciq !== nextProps.ciq) {
			nextProps.ciq.callbacks.layout = this.props.saveLayout;

			let funcs = [];
			Object.keys(this.props).map((key) => {
				let prop = this.props[key];
				if (typeof prop === 'function') {
					funcs[key] = prop
				}
			});

			window.actions = funcs
			window.stxx = nextProps.ciq
		}
	}
	render() {
		return (
			<div>
				<UI {...this.props} />
				<div className="ciq-chart-area">
					<DrawingContainer {...this.props} />
					<div id='chartContainer' className='chartContainer'>
						<div className={this.props.isLoadingPeriodicity ? 'loader' : ''}></div>
						<Legend {...this.props} />
					</div>
				</div>
				<div className="ciq-footer">
					<ShareButton {...this.props} />
					<RangeSelector {...this.props} />
				</div>
			</div>
		);
	}
}

export default Chart


