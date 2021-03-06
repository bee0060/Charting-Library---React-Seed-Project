class LineStyle extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			menuOpen: false
		}
		this.openMenu = this.openMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
	}
	openMenu(){
		this.setState({
			menuOpen: true
		});
	}
	closeMenu(){
		this.setState({
			menuOpen: false
		});
	}
	render(){
		let cName = this.props.linePattern && this.props.lineWidth ? 'ciq-' + this.props.linePattern + '-' + this.props.lineWidth : null;

		let menuDisplay = {
			display: this.state.menuOpen ? 'block' : 'none'
		};

		if(cName){
			return (
				<span>
					<menu-select id='lineSelect' onMouseOver={this.openMenu} onMouseOut={this.closeMenu} onClick={this.closeMenu}>
						<span className={'title ' + cName}></span>
						<menu-select-options className="menu-hover" style={menuDisplay}>
							<menu-option class="option" onClick={this.props.onClick.bind(this, 1, 'solid')}><span className="ciq-line-style-option ciq-solid-1"></span></menu-option>
							<menu-option class="option" onClick={this.props.onClick.bind(this, 3, 'solid')}><span className="ciq-line-style-option ciq-solid-3"></span></menu-option>
							<menu-option class="option" onClick={this.props.onClick.bind(this, 5, 'solid')}><span className="ciq-line-style-option ciq-solid-5"></span></menu-option>
							<menu-option class="option" onClick={this.props.onClick.bind(this, 1, 'dotted')}><span className="ciq-line-style-option ciq-dotted-1"></span></menu-option>
							<menu-option class="option" onClick={this.props.onClick.bind(this, 3, 'dotted')}><span className="ciq-line-style-option ciq-dotted-3"></span></menu-option>
							<menu-option class="option" onClick={this.props.onClick.bind(this, 5, 'dotted')}><span className="ciq-line-style-option ciq-dotted-5"></span></menu-option>
							<menu-option class="option" onClick={this.props.onClick.bind(this, 1, 'dashed')}><span className="ciq-line-style-option ciq-dashed-1"></span></menu-option>
							<menu-option class="option" onClick={this.props.onClick.bind(this, 3, 'dashed')}><span className="ciq-line-style-option ciq-dashed-3"></span></menu-option>
							<menu-option class="option" onClick={this.props.onClick.bind(this, 5, 'dashed')}><span className="ciq-line-style-option ciq-dashed-5"></span></menu-option>
						</menu-select-options>
					</menu-select>
				</span>
			)
		}else{
			return (
				<span></span>
			)
		}
	}

}

export default LineStyle